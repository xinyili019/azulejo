import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const csvPath = join(root, "azulejo-novas-situacoes.csv");
const situacoesPath = join(root, "src", "data", "situacoes.ts");
const vocabularyPath = join(root, "src", "data", "vocabulary.ts");
const cachePath = "/private/tmp/azulejo-new-situacoes-translations.json";

const scenarioDefinitions = [
  { label: "Veterinário", id: "veterinario" },
  { label: "Ginásio", id: "ginasio" },
  { label: "Convívio", id: "convivio" },
  { label: "Vizinhos", id: "vizinhos" },
  { label: "Cabeleireiro e Barbeiro", id: "cabeleireiro_barbeiro" },
  { label: "Farmácia", id: "farmacia" }
];
const scenarioByLabel = new Map(scenarioDefinitions.map((scenario) => [scenario.label, scenario]));

let situacoesSource = readFileSync(situacoesPath, "utf8");
const vocabularySource = readFileSync(vocabularyPath, "utf8");
const groups = extractExport(situacoesSource, "situacaoGroups");
const labels = extractExport(situacoesSource, "situacaoLabels");
const vocabularyRows = extractExport(situacoesSource, "situacaoVocabularyRows");
const dialogueLines = extractExport(situacoesSource, "situacaoDialogueLines");
const cardLines = extractExport(situacoesSource, "situacaoCheatSheetLines");
const manualEntries = JSON.parse(
  vocabularySource.match(/export const vocabulary: VocabularyEntry\[] = ([\s\S]*?) satisfies VocabularyEntry\[];/)?.[1] ?? "[]"
);

const csvRows = parseRecords(readFileSync(csvPath, "utf8"));
const unknownScenarios = [...new Set(csvRows.map((row) => row.scenario).filter((label) => !scenarioByLabel.has(label)))];
if (unknownScenarios.length) throw new Error(`Unknown scenarios: ${unknownScenarios.join(", ")}`);

const practicalGroup = groups.find((group) => group.label === "Vida prática");
if (!practicalGroup) throw new Error("Could not find the Vida prática group.");
for (const scenario of scenarioDefinitions) {
  if (!practicalGroup.items.some((item) => item.id === scenario.id)) practicalGroup.items.push({ id: scenario.id, label: scenario.label });
  labels[scenario.id] = scenario.label;
}

const usedIds = new Set([...manualEntries, ...vocabularyRows].map((entry) => entry.id).filter(Boolean));
let nextNumericId = Math.max(...[...usedIds].map((id) => Number(/^az-(\d+)$/u.exec(id)?.[1] ?? 0))) + 1;
const candidatesByTerm = new Map();
for (const entry of manualEntries) addCandidate(entry.portuguese, entry.english, entry.id);
for (const row of vocabularyRows) addCandidate(row.pt, row.en, row.id);

const existingRowsByScenarioTerm = new Map(
  vocabularyRows.map((row) => [`${row.situacao}\0${normalize(row.pt)}`, row])
);
const translationCache = loadTranslationCache();
const exampleTexts = [...new Set(csvRows.filter((row) => row.section === "vocabulario").map((row) => row.example_pt.trim()).filter(Boolean))];
translateAll(exampleTexts, "en");
const ambiguous = [];
let addedVocabulary = 0;

for (const sourceRow of csvRows.filter((row) => row.section === "vocabulario")) {
  const scenario = scenarioByLabel.get(sourceRow.scenario);
  const key = `${scenario.id}\0${normalize(sourceRow.pt)}`;
  if (existingRowsByScenarioTerm.has(key)) continue;

  const id = resolveWordId(sourceRow, ambiguous);
  const examplePt = sourceRow.example_pt.trim();
  const row = {
    situacao: scenario.id,
    pt: sourceRow.pt.trim(),
    en: sourceRow.en.trim(),
    zhHans: sourceRow.zh_hans.trim(),
    zhHant: sourceRow.zh_hant.trim(),
    id
  };
  const grammar = inferGrammar(row.pt);
  if (grammar) Object.assign(row, grammar);
  if (id.startsWith("az-") && !manualEntries.some((entry) => entry.id === id)) row.legacyIds = [`situacao-${slug(row.pt)}`];

  if (examplePt) {
    row.examplePt = examplePt;
    row.exampleEn = translate(examplePt, "en");
    row.exampleZhHans = sourceRow.example_zh_hans.trim();
    row.exampleZhHant = sourceRow.example_zh_hant.trim();
    if (!row.exampleZhHans || !row.exampleZhHant) throw new Error(`Missing Chinese example translation for: ${row.pt}`);
  }

  vocabularyRows.push(row);
  existingRowsByScenarioTerm.set(key, row);
  addCandidate(row.pt, row.en, row.id);
  addedVocabulary += 1;
  if (addedVocabulary % 10 === 0) console.log(`Prepared ${addedVocabulary} vocabulary rows...`);
}

if (ambiguous.length) {
  writeFileSync(join(root, "scripts", "new-situacoes-ambiguous.json"), `${JSON.stringify(ambiguous, null, 2)}\n`);
  throw new Error(`Found ${ambiguous.length} ambiguous word matches. Review scripts/new-situacoes-ambiguous.json.`);
}

const usedContentIds = new Set([...dialogueLines, ...cardLines].map((line) => line.id));
let dialogueOrder = Math.max(0, ...dialogueLines.map((line) => Number(line.order) || 0));
let cardOrder = Math.max(0, ...cardLines.map((line) => Number(line.order) || 0));
let addedDialogue = 0;
let addedCards = 0;

for (const sourceRow of csvRows) {
  if (sourceRow.section !== "dialogo" && sourceRow.section !== "cartao") continue;
  const scenario = scenarioByLabel.get(sourceRow.scenario);
  const target = sourceRow.section === "dialogo" ? dialogueLines : cardLines;
  if (target.some((line) => line.situacao === scenario.id && normalize(line.pt) === normalize(sourceRow.pt))) continue;
  const prefix = sourceRow.section === "dialogo" ? "dialogo" : "cartao";
  const id = uniqueContentId(`${prefix}-${scenario.id}-${slug(sourceRow.pt)}`, usedContentIds, sourceRow.order);
  const line = {
    id,
    situacao: scenario.id,
    order: sourceRow.section === "dialogo" ? ++dialogueOrder : ++cardOrder,
    pt: sourceRow.pt.trim(),
    en: sourceRow.en.trim(),
    zhHans: sourceRow.zh_hans.trim(),
    zhHant: sourceRow.zh_hant.trim()
  };
  target.push(line);
  if (sourceRow.section === "dialogo") addedDialogue += 1;
  else addedCards += 1;
}

situacoesSource = replaceExport(situacoesSource, "situacaoGroups", groups);
situacoesSource = replaceExport(situacoesSource, "situacaoLabels", labels);
situacoesSource = replaceExport(situacoesSource, "situacaoVocabularyRows", vocabularyRows);
situacoesSource = replaceExport(situacoesSource, "situacaoDialogueLines", dialogueLines);
situacoesSource = replaceExport(situacoesSource, "situacaoCheatSheetLines", cardLines);
writeFileSync(situacoesPath, situacoesSource);

console.log(
  `Imported ${scenarioDefinitions.length} scenarios: ${addedVocabulary} vocabulary rows, ${addedDialogue} dialogue lines, ${addedCards} card lines.`
);

function resolveWordId(row, ambiguousMatches) {
  const candidates = candidatesByTerm.get(normalize(row.pt)) ?? [];
  const ids = [...new Set(candidates.map((candidate) => candidate.id))];
  if (ids.length === 1) return ids[0];
  const exactSenseIds = [...new Set(candidates.filter((candidate) => normalize(candidate.en) === normalize(row.en)).map((candidate) => candidate.id))];
  if (exactSenseIds.length === 1) return exactSenseIds[0];
  if (ids.length > 1) {
    ambiguousMatches.push({ pt: row.pt, en: row.en, candidates });
    return "ambiguous";
  }
  let id;
  do id = `az-${String(nextNumericId++).padStart(4, "0")}`;
  while (usedIds.has(id));
  usedIds.add(id);
  return id;
}

function addCandidate(pt, en, id) {
  if (!pt || !id) return;
  const key = normalize(pt);
  const candidates = candidatesByTerm.get(key) ?? [];
  if (!candidates.some((candidate) => candidate.id === id)) candidates.push({ id, en: en ?? "" });
  candidatesByTerm.set(key, candidates);
}

function inferGrammar(term) {
  if (/^os\s+/iu.test(term)) return { pos: "noun", gender: "m-pl" };
  if (/^as\s+/iu.test(term)) return { pos: "noun", gender: "f-pl" };
  if (/^o\s+/iu.test(term)) return { pos: "noun", gender: "m" };
  if (/^a\s+/iu.test(term)) return { pos: "noun", gender: "f" };
  if (/(?:ar|er|ir)(?:-se)?$/iu.test(term)) return { pos: "verb" };
  return undefined;
}

function extractExport(source, name) {
  const marker = `export const ${name}:`;
  const start = source.indexOf(marker);
  const assignmentStart = source.indexOf(" = ", start);
  const assignmentEnd = source.indexOf(";\n", assignmentStart);
  if (start < 0 || assignmentStart < 0 || assignmentEnd < 0) throw new Error(`Could not parse ${name}.`);
  return JSON.parse(source.slice(assignmentStart + 3, assignmentEnd));
}

function replaceExport(source, name, value) {
  const marker = `export const ${name}:`;
  const start = source.indexOf(marker);
  const assignmentStart = source.indexOf(" = ", start);
  const assignmentEnd = source.indexOf(";\n", assignmentStart);
  if (start < 0 || assignmentStart < 0 || assignmentEnd < 0) throw new Error(`Could not replace ${name}.`);
  return `${source.slice(0, assignmentStart + 3)}${JSON.stringify(value, null, 2)}${source.slice(assignmentEnd)}`;
}

function parseRecords(source) {
  const rows = parseCsv(source);
  const header = rows.shift().map((field) => field.replace(/^\uFEFF/u, ""));
  return rows
    .filter((row) => row.some((field) => field.trim()))
    .map((row) => Object.fromEntries(header.map((field, index) => [field, row[index] ?? ""])));
}

function parseCsv(source) {
  const rows = [];
  let row = [];
  let value = "";
  let quoted = false;
  for (let index = 0; index < source.length; index += 1) {
    const char = source[index];
    const next = source[index + 1];
    if (quoted) {
      if (char === '"' && next === '"') {
        value += '"';
        index += 1;
      } else if (char === '"') quoted = false;
      else value += char;
      continue;
    }
    if (char === '"') quoted = true;
    else if (char === ",") {
      row.push(value);
      value = "";
    } else if (char === "\n") {
      row.push(value.replace(/\r$/u, ""));
      rows.push(row);
      row = [];
      value = "";
    } else value += char;
  }
  if (value || row.length) {
    row.push(value.replace(/\r$/u, ""));
    rows.push(row);
  }
  return rows;
}

function uniqueContentId(base, used, order) {
  let id = base;
  let suffix = Number(order) || 2;
  while (used.has(id)) id = `${base}-${suffix++}`;
  used.add(id);
  return id;
}

function slug(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/gu, "-")
    .replace(/^-|-$/gu, "") || "linha";
}

function normalize(value) {
  return String(value ?? "").normalize("NFC").toLowerCase().replace(/\s+/gu, " ").trim();
}

function loadTranslationCache() {
  try {
    return new Map(Object.entries(JSON.parse(readFileSync(cachePath, "utf8"))));
  } catch {
    return new Map();
  }
}

function translate(text, target) {
  const key = `${target}:${text}`;
  const translated = translationCache.get(key);
  if (!translated) throw new Error(`No cached ${target} translation for: ${text}`);
  return translated;
}

function translateAll(texts, target) {
  const missing = texts.filter((text) => !translationCache.has(`${target}:${text}`));
  const batchSize = 12;
  for (let index = 0; index < missing.length; index += batchSize) {
    const batch = missing.slice(index, index + batchSize);
    const body = translateBatch(batch, target);
    const translated = JSON.parse(body)?.[0]?.map((part) => part?.[0]).filter(Boolean).join("").split("\n").map((line) => line.trim()).filter(Boolean);
    if (translated.length !== batch.length) {
      throw new Error(`Expected ${batch.length} ${target} translations, received ${translated.length}.`);
    }
    batch.forEach((text, batchIndex) =>
      translationCache.set(`${target}:${text}`, translated[batchIndex].replace(/[\u200B-\u200D\uFEFF]/gu, ""))
    );
    writeFileSync(cachePath, `${JSON.stringify(Object.fromEntries(translationCache), null, 2)}\n`);
    console.log(`Translated ${Math.min(index + batch.length, missing.length)}/${missing.length} examples to ${target}.`);
  }
}

function translateBatch(texts, target) {
  let lastError = "";
  for (let attempt = 1; attempt <= 4; attempt += 1) {
    const result = spawnSync(
      "curl",
      [
        "-sS",
        "-L",
        "--max-time",
        "30",
        "--get",
        "https://translate.googleapis.com/translate_a/single",
        "--data-urlencode",
        "client=gtx",
        "--data-urlencode",
        "sl=pt",
        "--data-urlencode",
        `tl=${target}`,
        "--data-urlencode",
        "dt=t",
        "--data-urlencode",
        `q=${texts.join("\n")}`
      ],
      { encoding: "utf8" }
    );
    if (result.status === 0 && result.stdout.trim()) return result.stdout;
    lastError = result.stderr.trim() || `curl exit ${result.status}`;
  }
  throw new Error(`Could not translate ${target} batch: ${lastError}`);
}
