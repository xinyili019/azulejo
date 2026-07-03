import type { Direction, ModuleQuizQuestion, ModuleQuizScope, VocabularyEntry } from "../types";
import { createSeededRng, shuffleWithRng, type RandomSource } from "./retrievalReview";

export const MODULE_QUIZ_CHUNK_SIZE = 60;
export const MODULE_QUIZ_SIZE = 20;
export const MODULE_QUIZ_CLOZE_SIZE = 10;
export const MODULE_QUIZ_AUDIO_MEANING_SIZE = 10;
export const MODULE_QUIZ_CHOICE_COUNT = 4;
export const MODULE_QUIZ_AUDIO_MEANING_CHOICE_COUNT = 3;

const MODULE_QUIZ_CUSTOM_SPLITS: Record<string, number[]> = {
  "Módulo 1": [40],
  "Módulo 6": [40]
};

export interface BuildModuleQuizOptions {
  quizSize?: number;
  choiceCount?: number;
  rng?: RandomSource;
}

interface ModuleQuizQuestionDraft {
  entry: VocabularyEntry;
  clozeSentence: string;
  answer: string;
}

export function buildModuleQuizScopes(
  entries: readonly VocabularyEntry[],
  chunkSize = MODULE_QUIZ_CHUNK_SIZE
): ModuleQuizScope[] {
  const groupedEntries = new Map<string, VocabularyEntry[]>();

  for (const entry of entries) {
    const moduleEntries = groupedEntries.get(entry.modulo) ?? [];
    moduleEntries.push(entry);
    groupedEntries.set(entry.modulo, moduleEntries);
  }

  return Array.from(groupedEntries.entries()).flatMap(([modulo, moduleEntries]) => {
    const ranges = getModuleQuizRanges(modulo, moduleEntries.length, chunkSize);
    return ranges.map(([startIndex, endIndex]) => ({
      id: createQuizScopeId(modulo, startIndex, endIndex),
      modulo,
      label: ranges.length === 1 ? modulo : `${modulo} ${startIndex + 1}-${endIndex}`,
      entries: moduleEntries.slice(startIndex, endIndex),
      startIndex,
      endIndex
    }));
  });
}

export function buildModuleQuizQuestions(
  scope: ModuleQuizScope,
  allEntries: readonly VocabularyEntry[],
  direction: Direction,
  options: BuildModuleQuizOptions = {}
): ModuleQuizQuestion[] {
  const rng = options.rng ?? createSeededRng(Date.now());
  const quizSize = options.quizSize ?? MODULE_QUIZ_SIZE;
  const choiceCount = options.choiceCount ?? MODULE_QUIZ_CHOICE_COUNT;
  const clozeSize = Math.min(MODULE_QUIZ_CLOZE_SIZE, quizSize);
  const audioMeaningSize = Math.max(0, Math.min(MODULE_QUIZ_AUDIO_MEANING_SIZE, quizSize - clozeSize));
  const scopeDrafts = buildQuestionDrafts(scope.entries);
  const allDrafts = buildQuestionDrafts(allEntries);
  const clozeDrafts = shuffleWithRng(scopeDrafts, rng).slice(0, Math.min(clozeSize, scopeDrafts.length));
  const clozeIds = new Set(clozeDrafts.map((draft) => draft.entry.id));
  const audioMeaningEntries = shuffleWithRng(scope.entries, rng)
    .filter((entry) => !clozeIds.has(entry.id) && getMeaningAnswer(entry, direction))
    .slice(0, audioMeaningSize);

  return [
    ...clozeDrafts.map((draft) => ({
      id: draft.entry.id,
      entry: draft.entry,
      format: "cloze" as const,
      clozeSentence: draft.clozeSentence,
      answer: draft.answer,
      choices: buildChoices(draft.answer, scopeDrafts, allDrafts, choiceCount, rng),
      translation: getQuizTranslation(draft.entry, direction)
    })),
    ...audioMeaningEntries.map((entry) => {
      const answer = getMeaningAnswer(entry, direction) ?? entry.english;
      return {
        id: entry.id,
        entry,
        format: "audioMeaning" as const,
        answer,
        choices: buildMeaningChoices(answer, scope.entries, allEntries, direction, MODULE_QUIZ_AUDIO_MEANING_CHOICE_COUNT, rng)
      };
    })
  ];
}

export function buildClozeSentence(entry: VocabularyEntry): string {
  return buildQuestionDraft(entry)?.clozeSentence ?? entry.examplePt ?? "____";
}

export function buildClozeAnswer(entry: VocabularyEntry): string | undefined {
  return buildQuestionDraft(entry)?.answer;
}

function buildQuestionDrafts(entries: readonly VocabularyEntry[]) {
  return entries.map(buildQuestionDraft).filter((draft): draft is ModuleQuizQuestionDraft => Boolean(draft));
}

function buildQuestionDraft(entry: VocabularyEntry): ModuleQuizQuestionDraft | null {
  const sentence = entry.examplePt ?? "";
  if (!sentence) return null;

  const match = findTargetMatch(sentence, getTargetVariants(entry.portuguese));
  if (!match) return null;

  const answer = sentence.slice(match.start, match.end);

  return {
    entry,
    clozeSentence: `${sentence.slice(0, match.start)}____${sentence.slice(match.end)}`,
    answer
  };
}

export function getQuizTranslation(entry: VocabularyEntry, direction: Direction): string | undefined {
  if (direction.includes("zh-hans")) return entry.exampleZhHans;
  if (direction.includes("zh-hant")) return entry.exampleZhHant;
  return entry.exampleEn;
}

export function getMeaningAnswer(entry: VocabularyEntry, direction: Direction): string | undefined {
  if (direction.includes("zh-hans")) return entry.zhHans;
  if (direction.includes("zh-hant")) return entry.zhHant;
  return entry.english;
}

function getModuleQuizRanges(modulo: string, entryCount: number, chunkSize: number): Array<[number, number]> {
  const customSplits = MODULE_QUIZ_CUSTOM_SPLITS[modulo];
  if (customSplits) {
    const boundaries = [0, ...customSplits.filter((split) => split > 0 && split < entryCount), entryCount];
    return boundaries.slice(0, -1).map((startIndex, index) => [startIndex, boundaries[index + 1]]);
  }

  if (entryCount <= chunkSize) return [[0, entryCount]];

  const ranges: Array<[number, number]> = [];
  for (let startIndex = 0; startIndex < entryCount; startIndex += chunkSize) {
    ranges.push([startIndex, Math.min(startIndex + chunkSize, entryCount)]);
  }

  return ranges;
}

function buildChoices(
  answer: string,
  scopeDrafts: readonly ModuleQuizQuestionDraft[],
  allDrafts: readonly ModuleQuizQuestionDraft[],
  choiceCount: number,
  rng: RandomSource
) {
  const answerKey = normalizeChoice(answer);
  const scopedDistractors = shuffleWithRng(scopeDrafts, rng);
  const fallbackDistractors = shuffleWithRng(allDrafts, rng);
  const choices = [answer];
  const used = new Set([answerKey]);

  for (const draft of [...scopedDistractors, ...fallbackDistractors]) {
    const key = normalizeChoice(draft.answer);
    if (used.has(key)) continue;
    used.add(key);
    choices.push(draft.answer);
    if (choices.length >= choiceCount) break;
  }

  return shuffleWithRng(choices, rng);
}

function buildMeaningChoices(
  answer: string,
  scopeEntries: readonly VocabularyEntry[],
  allEntries: readonly VocabularyEntry[],
  direction: Direction,
  choiceCount: number,
  rng: RandomSource
) {
  const answerKey = normalizeChoice(answer);
  const scopedDistractors = shuffleWithRng(scopeEntries, rng);
  const fallbackDistractors = shuffleWithRng(allEntries, rng);
  const choices = [answer];
  const used = new Set([answerKey]);

  for (const entry of [...scopedDistractors, ...fallbackDistractors]) {
    const meaning = getMeaningAnswer(entry, direction);
    if (!meaning) continue;
    const key = normalizeChoice(meaning);
    if (used.has(key)) continue;
    used.add(key);
    choices.push(meaning);
    if (choices.length >= choiceCount) break;
  }

  return shuffleWithRng(choices, rng);
}

function getTargetVariants(portuguese: string): string[] {
  const expanded = expandParentheticalForms(portuguese);
  const variants = new Set<string>();

  for (const term of expanded) {
    variants.add(term);
    variants.add(stripLeadingArticle(term));

    for (const phraseVariant of getPhraseSurfaceVariants(stripLeadingArticle(term))) {
      variants.add(phraseVariant);
    }

    const contentWords = stripLeadingArticle(term)
      .split(/\s+/)
      .map((word) => word.replace(/[^\p{L}'-]/gu, ""))
      .filter((word) => Array.from(word).length >= 3);

    for (const word of contentWords) {
      variants.add(word);
      for (const inflectedWord of getNominalSurfaceVariants(word)) {
        variants.add(inflectedWord);
      }
    }
  }

  return Array.from(variants)
    .map((variant) => variant.trim())
    .filter(Boolean)
    .sort((a, b) => b.length - a.length);
}

function expandParentheticalForms(value: string): string[] {
  const match = value.match(/^(.*?)([A-Za-zÀ-ÿ]+)\(([^)]+)\)(.*)$/u);
  if (!match) return [value];

  const [, before, stem, suffix, after] = match;
  return [`${before}${stem}${after}`, `${before}${stem}${suffix}${after}`];
}

function stripLeadingArticle(value: string): string {
  return value.replace(/^(?:o|a|os|as|um|uma|uns|umas)\s+/iu, "");
}

function getPhraseSurfaceVariants(term: string): string[] {
  const words = term.split(/\s+/).filter(Boolean);
  const firstWord = words[0];
  if (!firstWord) return [];

  const verb = parseInfinitive(firstWord);
  if (!verb) return [];

  const rest = words.slice(1).join(" ");
  const restWithoutTrailingDe = rest.replace(/\s+de$/iu, "");
  const restVariants = Array.from(new Set([rest, restWithoutTrailingDe])).filter(Boolean);
  const verbForms = getRegularVerbForms(verb.infinitive);
  const variants: string[] = [];

  for (const form of verbForms) {
    for (const restVariant of restVariants) {
      variants.push(`${form}${verb.reflexive && form !== verb.pastParticiple ? "-se" : ""} ${restVariant}`);
      variants.push(`${form} ${restVariant}`);
    }
  }

  return variants;
}

function parseInfinitive(value: string) {
  const reflexive = /-se$/iu.test(value);
  const infinitive = value.replace(/-se$/iu, "");
  if (!/(?:ar|er|ir)$/iu.test(infinitive)) return null;
  return { infinitive, reflexive, pastParticiple: getPastParticiple(infinitive) };
}

function getRegularVerbForms(infinitive: string) {
  const stem = infinitive.slice(0, -2);
  const ending = infinitive.slice(-2).toLocaleLowerCase("pt-PT");
  const pastParticiple = getPastParticiple(infinitive);

  if (ending === "ar") {
    return [infinitive, `${stem}a`, `${stem}am`, `${stem}ou`, `${stem}ava`, pastParticiple];
  }

  if (ending === "er") {
    return [infinitive, `${stem}e`, `${stem}em`, `${stem}eu`, `${stem}ia`, pastParticiple];
  }

  return [infinitive, `${stem}e`, `${stem}em`, `${stem}iu`, `${stem}ia`, pastParticiple];
}

function getPastParticiple(infinitive: string) {
  const stem = infinitive.slice(0, -2);
  const ending = infinitive.slice(-2).toLocaleLowerCase("pt-PT");
  return ending === "ar" ? `${stem}ado` : `${stem}ido`;
}

function getNominalSurfaceVariants(word: string): string[] {
  const variants = new Set<string>();
  const lower = word.toLocaleLowerCase("pt-PT");

  if (lower.endsWith("ão")) {
    variants.add(`${word.slice(0, -2)}ões`);
    variants.add(`${word.slice(0, -2)}ãos`);
    variants.add(`${word.slice(0, -2)}ães`);
  } else if (/[aeiouáéíóúâêôãõ]$/iu.test(word)) {
    variants.add(`${word}s`);
  } else if (lower.endsWith("m")) {
    variants.add(`${word.slice(0, -1)}ns`);
  } else if (lower.endsWith("l")) {
    variants.add(`${word.slice(0, -1)}is`);
  } else if (!lower.endsWith("s")) {
    variants.add(`${word}s`);
  }

  return Array.from(variants);
}

function findTargetMatch(sentence: string, variants: string[]) {
  for (const variant of variants) {
    const escaped = escapeRegExp(variant);
    const regex = new RegExp(`(^|[^\\p{L}])(${escaped})(?=$|[^\\p{L}])`, "iu");
    const match = sentence.match(regex);
    if (!match || match.index === undefined) continue;

    const prefixLength = match[1]?.length ?? 0;
    const start = match.index + prefixLength;
    return { start, end: start + match[2].length };
  }

  return null;
}

function createQuizScopeId(modulo: string, startIndex: number, endIndex: number) {
  return `${slugify(modulo)}-${startIndex + 1}-${endIndex}`;
}

function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function normalizeChoice(value: string) {
  return value
    .trim()
    .toLocaleLowerCase("pt-PT")
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, " ");
}
