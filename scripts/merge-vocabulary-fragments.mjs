import { existsSync, readFileSync, writeFileSync } from "node:fs";

const fragmentFiles = [
  "src/data/fragments/modules-01-03.json",
  "src/data/fragments/modules-04-06.json",
  "src/data/fragments/modules-07-09.json",
  "src/data/fragments/modules-10-12.json"
];

const entries = [];

for (const file of fragmentFiles) {
  if (!existsSync(file)) {
    throw new Error(`Missing fragment: ${file}`);
  }

  const parsed = JSON.parse(readFileSync(file, "utf8"));
  if (!Array.isArray(parsed)) {
    throw new Error(`Fragment must be an array: ${file}`);
  }
  entries.push(...parsed);
}

const deduped = [];
const seenIds = new Set();
const seenTerms = new Set();

for (const entry of entries) {
  validateEntry(entry);
  const id = asciiSlug(entry.id);
  const modulo = normalizeModulo(entry.modulo);
  const termKey = `${modulo}:${normalizeTerm(entry.portuguese)}`;

  if (seenIds.has(id) || seenTerms.has(termKey)) continue;
  seenIds.add(id);
  seenTerms.add(termKey);

  deduped.push({
    id,
    modulo,
    theme: entry.theme.trim(),
    portuguese: entry.portuguese.trim(),
    english: entry.english.trim(),
    zhHans: entry.zhHans.trim(),
    zhHant: entry.zhHant.trim(),
    examplePt: entry.examplePt?.trim() || undefined,
    exampleEn: entry.exampleEn?.trim() || undefined,
    exampleZhHans: entry.exampleZhHans?.trim() || undefined,
    exampleZhHant: entry.exampleZhHant?.trim() || undefined,
    source: "pdf"
  });
}

deduped.sort((a, b) => moduleNumber(a.modulo) - moduleNumber(b.modulo) || a.theme.localeCompare(b.theme) || a.portuguese.localeCompare(b.portuguese, "pt"));

const output = `import type { VocabularyEntry } from "../types";

export const vocabulary: VocabularyEntry[] = ${JSON.stringify(deduped, null, 2)} satisfies VocabularyEntry[];
`;

writeFileSync("src/data/vocabulary.ts", output);
console.log(`Merged ${entries.length} fragment entries into ${deduped.length} deduped vocabulary entries.`);

function validateEntry(entry) {
  for (const field of ["id", "modulo", "theme", "portuguese", "english", "zhHans", "zhHant", "source"]) {
    if (typeof entry[field] !== "string" || entry[field].trim() === "") {
      throw new Error(`Invalid or missing ${field}: ${JSON.stringify(entry)}`);
    }
  }
}

function normalizeModulo(value) {
  const number = value.match(/\d+/)?.[0];
  if (!number) throw new Error(`Invalid module label: ${value}`);
  return `Módulo ${Number(number)}`;
}

function moduleNumber(value) {
  return Number(value.match(/\d+/)?.[0] ?? 0);
}

function normalizeTerm(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/[.,:;!?()[\]"]/g, "")
    .trim();
}

function asciiSlug(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
