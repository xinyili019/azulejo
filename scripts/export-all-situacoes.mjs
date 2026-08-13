import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const source = readFileSync(join(root, "src", "data", "situacoes.ts"), "utf8");
const labels = extract("situacaoLabels");
const vocabulary = extract("situacaoVocabularyRows");
const dialogues = extract("situacaoDialogueLines");
const cards = extract("situacaoCheatSheetLines");
const output = join(root, "azulejo-situacoes-completo-revisto.csv");
const columns = ["scenario_id","scenario","section","purpose","order","id","legacy_ids","pos","gender","pt","en","zh_hans","zh_hant","example_pt","example_en","example_zh_hans","example_zh_hant","note"];

const records = [
  ...vocabulary.map((row) => ({ scenario_id: row.situacao, scenario: labels[row.situacao] ?? row.situacao, section: "vocabulario", order: "", id: row.id, legacy_ids: (row.legacyIds ?? []).join("|"), pos: row.pos ?? "", gender: row.gender ?? "", pt: row.pt, en: row.en, zh_hans: row.zhHans, zh_hant: row.zhHant, example_pt: row.examplePt ?? "", example_en: row.exampleEn ?? "", example_zh_hans: row.exampleZhHans ?? "", example_zh_hant: row.exampleZhHant ?? "", note: row.note ?? "" })),
  ...dialogues.map((row) => contentRecord(row, "dialogo")),
  ...cards.map((row) => contentRecord(row, "cartao"))
].sort((a, b) => a.scenario.localeCompare(b.scenario, "pt") || sectionRank(a.section) - sectionRank(b.section) || Number(a.order || 0) - Number(b.order || 0));

writeFileSync(output, `\uFEFF${columns.join(",")}\n${records.map((record) => columns.map((column) => csv(record[column] ?? "")).join(",")).join("\n")}\n`);
console.log(`Exported ${records.length} rows to ${output}`);

function contentRecord(row, section) {
  return { scenario_id: row.situacao, scenario: labels[row.situacao] ?? row.situacao, section, purpose: row.purpose ?? "", order: row.order, id: row.id, legacy_ids: "", pos: "", gender: "", pt: row.pt, en: row.en, zh_hans: row.zhHans, zh_hant: row.zhHant, example_pt: "", example_en: "", example_zh_hans: "", example_zh_hant: "", note: row.note ?? "" };
}
function extract(name) {
  const start = source.indexOf(`export const ${name}:`), assignment = source.indexOf(" = ", start), end = source.indexOf(";\n", assignment);
  if (start < 0 || assignment < 0 || end < 0) throw new Error(`Could not parse ${name}.`);
  return JSON.parse(source.slice(assignment + 3, end));
}
function csv(value) {
  const text = String(value).replace(/\r?\n/gu, " ");
  return /[",]/u.test(text) ? `"${text.replace(/"/gu, '""')}"` : text;
}
function sectionRank(section) { return section === "vocabulario" ? 0 : section === "dialogo" ? 1 : 2; }
