import { readFileSync } from "node:fs";

const source = readFileSync(new URL("../src/data/vocabulary.ts", import.meta.url), "utf8");
const jsonMatch = source.match(/export const vocabulary: VocabularyEntry\[] = ([\s\S]*?) satisfies VocabularyEntry\[];/);
const helperMatches = [...source.matchAll(/entry\(\s*"([^"]+)",\s*"([^"]+)",\s*"[^"]+",\s*"([^"]+)",\s*"([^"]+)"/g)].map(
  (match) => ({ id: match[1], modulo: match[2], portuguese: match[3], english: match[4] })
);
const objectMatches = [...source.matchAll(/id:\s*"([^"]+)"[\s\S]*?modulo:\s*"([^"]+)"[\s\S]*?portuguese:\s*"([^"]+)"[\s\S]*?english:\s*"([^"]+)"/g)].map(
  (match) => ({ id: match[1], modulo: match[2], portuguese: match[3], english: match[4] })
);

let entries = [...helperMatches, ...objectMatches];

if (jsonMatch) {
  entries = JSON.parse(jsonMatch[1]);
}

const errors = [];
const ids = new Set();
const termsByModule = new Set();
const modulos = new Set();

for (const entry of entries) {
  const { id, modulo, portuguese, english, zhHans, zhHant } = entry;
  if (!id || !modulo || !portuguese || !english || !zhHans || !zhHant) {
    errors.push(`Missing required field near id: ${id || "(unknown)"}`);
    continue;
  }
  if (entry.examplePt && (!entry.exampleEn || !entry.exampleZhHans || !entry.exampleZhHant)) {
    errors.push(`Example translations must include English, Simplified Chinese, and Traditional Chinese: ${id}`);
  }
  if (!entry.examplePt && (entry.exampleEn || entry.exampleZhHans || entry.exampleZhHant)) {
    errors.push(`Example translations require a Portuguese example source: ${id}`);
  }
  if (ids.has(id)) errors.push(`Duplicate id: ${id}`);
  ids.add(id);
  modulos.add(modulo);

  const termKey = `${modulo}:${normalizeTerm(portuguese)}`;
  if (termsByModule.has(termKey)) errors.push(`Duplicate Portuguese term in ${modulo}: ${portuguese}`);
  termsByModule.add(termKey);
}

if (entries.length === 0) errors.push("No vocabulary entries found.");
if (modulos.size === 0) errors.push("No modules found.");

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Validated ${entries.length} entries across ${modulos.size} modules.`);

function normalizeTerm(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/[.,:;!?()[\]"]/g, "")
    .trim();
}
