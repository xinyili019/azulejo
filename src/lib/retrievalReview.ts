import type { Direction, VocabularyEntry } from "../types";

export type RetrievalPromptLanguage = "english" | "zhHans" | "zhHant";
export type RetrievalReviewOutcome = "correct" | "incorrect" | "revealed-before-typed";
export type RandomSource = () => number;

export interface RetrievalReviewPrompt {
  id: string;
  entry: VocabularyEntry;
  direction: Direction;
  prompt: string;
  promptLanguage: RetrievalPromptLanguage;
  answer: string;
  cue: string;
}

export interface CharacterFeedback {
  index: number;
  typedChar: string;
  expectedChar: string;
  displayChar: string;
  correct: boolean;
}

export interface RetrievalReviewResult {
  id: string;
  entry: VocabularyEntry;
  outcome: RetrievalReviewOutcome;
}

export interface RepeatReviewItem {
  id: string;
  entry: VocabularyEntry;
  outcome: RetrievalReviewOutcome | "again";
}

export interface ExpandRepeatOptions {
  repeatCount: number;
  minSpacing?: number;
  fillerItems?: VocabularyEntry[];
  rng?: RandomSource;
}

function getPromptLanguage(direction: Direction): RetrievalPromptLanguage {
  if (direction.includes("zh-hans")) return "zhHans";
  if (direction.includes("zh-hant")) return "zhHant";
  return "english";
}

function getRetrievalPrompt(entry: VocabularyEntry, language: RetrievalPromptLanguage): string {
  if (language === "zhHans") return entry.zhHans;
  if (language === "zhHant") return entry.zhHant;
  return entry.english;
}

export function shuffleWithRng<T>(items: readonly T[], rng: RandomSource = Math.random): T[] {
  const shuffled = [...items];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(rng() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }

  return shuffled;
}

export function createSeededRng(seed: number): RandomSource {
  let state = seed >>> 0;

  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let result = state;
    result = Math.imul(result ^ (result >>> 15), result | 1);
    result ^= result + Math.imul(result ^ (result >>> 7), result | 61);
    return ((result ^ (result >>> 14)) >>> 0) / 4294967296;
  };
}

export function buildRetrievalReviewPrompts(
  entries: readonly VocabularyEntry[],
  direction: Direction,
  rng?: RandomSource
): RetrievalReviewPrompt[] {
  const promptLanguage = getPromptLanguage(direction);

  return shuffleWithRng(entries, rng).map((entry) => ({
    id: entry.id,
    entry,
    direction,
    prompt: getRetrievalPrompt(entry, promptLanguage),
    promptLanguage,
    answer: entry.portuguese,
    cue: buildPortugueseCue(entry.portuguese)
  }));
}

export function buildPortugueseCue(portuguese: string): string {
  return Array.from(portuguese, (char) => (isLetter(char) ? "_" : char)).join("");
}

export function normalizePortugueseForReview(value: string): string {
  return value
    .trim()
    .toLocaleLowerCase("pt-PT")
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[’‘`´]/g, "'")
    .replace(/\s+/g, " ");
}

export function getCharacterFeedback(input: string, expectedPortuguese: string): CharacterFeedback[] {
  const typedChars = Array.from(input);
  const expectedChars = Array.from(expectedPortuguese);
  const feedbackLength = Math.max(typedChars.length, expectedChars.length);

  return Array.from({ length: feedbackLength }, (_, index) => {
    const typedChar = typedChars[index] ?? "";
    const expectedChar = expectedChars[index] ?? "";

    return {
      index,
      typedChar,
      expectedChar,
      displayChar: expectedChar,
      correct: normalizePortugueseCharacterForReview(typedChar) === normalizePortugueseCharacterForReview(expectedChar)
    };
  });
}

export function getRetrievalOutcome(
  input: string,
  expectedPortuguese: string,
  revealedBeforeTyped: boolean
): RetrievalReviewOutcome {
  if (revealedBeforeTyped) return "revealed-before-typed";

  return normalizePortugueseForReview(input) === normalizePortugueseForReview(expectedPortuguese)
    ? "correct"
    : "incorrect";
}

export function expandRepeatReviewQueue(
  results: readonly RepeatReviewItem[],
  options: ExpandRepeatOptions
): VocabularyEntry[] {
  const repeatCount = Math.max(0, Math.floor(options.repeatCount));
  const minSpacing = options.minSpacing ?? 2;
  const rng = options.rng ?? Math.random;
  const dueItems = results.filter((result) => result.outcome !== "correct").map((result) => result.entry);
  const remaining = new Map<string, { entry: VocabularyEntry; count: number }>();

  for (const item of dueItems) {
    const current = remaining.get(item.id);
    remaining.set(item.id, { entry: item, count: (current?.count ?? 0) + repeatCount });
  }

  const queue: VocabularyEntry[] = [];
  const fillerItems = [...(options.fillerItems ?? [])];

  while (hasRemainingRepeats(remaining)) {
    const next = pickNextSpacedItem(remaining, queue, minSpacing);

    if (next) {
      queue.push(next.entry);
      next.count -= 1;
      if (next.count <= 0) remaining.delete(next.entry.id);
      continue;
    }

    if (fillerItems.length === 0) {
      const fallback = pickHighestRemainingItem(remaining);
      if (!fallback) break;
      queue.push(fallback.entry);
      fallback.count -= 1;
      if (fallback.count <= 0) remaining.delete(fallback.entry.id);
      continue;
    }

    queue.push(fillerItems[Math.floor(rng() * fillerItems.length)]);
  }

  return queue;
}

function isLetter(char: string): boolean {
  return /\p{L}/u.test(char);
}

function normalizePortugueseCharacterForReview(value: string): string {
  return value
    .toLocaleLowerCase("pt-PT")
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[’‘`´]/g, "'")
    .replace(/\s/gu, " ");
}

function hasRemainingRepeats(remaining: Map<string, { entry: VocabularyEntry; count: number }>): boolean {
  return Array.from(remaining.values()).some((item) => item.count > 0);
}

function pickNextSpacedItem(
  remaining: Map<string, { entry: VocabularyEntry; count: number }>,
  queue: VocabularyEntry[],
  minSpacing: number
) {
  return Array.from(remaining.values())
    .filter((item) => item.count > 0 && isFarEnoughFromPrevious(item.entry.id, queue, minSpacing))
    .sort((a, b) => b.count - a.count || a.entry.id.localeCompare(b.entry.id))[0];
}

function pickHighestRemainingItem(remaining: Map<string, { entry: VocabularyEntry; count: number }>) {
  return Array.from(remaining.values())
    .filter((item) => item.count > 0)
    .sort((a, b) => b.count - a.count || a.entry.id.localeCompare(b.entry.id))[0];
}

function isFarEnoughFromPrevious(id: string, queue: VocabularyEntry[], minSpacing: number): boolean {
  let previousIndex = -1;

  for (let index = queue.length - 1; index >= 0; index -= 1) {
    if (queue[index].id === id) {
      previousIndex = index;
      break;
    }
  }

  return previousIndex === -1 || queue.length - previousIndex > minSpacing;
}
