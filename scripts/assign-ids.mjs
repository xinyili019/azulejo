import { readFileSync, writeFileSync } from "node:fs";

const fragmentFiles = [
  "src/data/fragments/modules-01-03.json",
  "src/data/fragments/modules-04-06.json",
  "src/data/fragments/modules-07-09.json",
  "src/data/fragments/modules-10-12.json"
];
const situacoesFile = "src/data/situacoes.ts";
const csvFiles = ["situacoes vocab.csv", "situacoes vocab v2.csv"];
const reportFile = "scripts/assign-ids-report.json";

let nextIdNumber = 1;
const manualEntries = [];

function normalizeText(value) {
  return String(value ?? "")
    .normalize("NFC")
    .toLowerCase()
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function numericStableId(value) {
  const match = String(value ?? "").match(/^az-(\d{4,})$/);
  return match ? Number(match[1]) : null;
}

function reserveId(id) {
  const numeric = numericStableId(id);
  if (numeric !== null && numeric >= nextIdNumber) nextIdNumber = numeric + 1;
}

function nextStableId() {
  return `az-${String(nextIdNumber++).padStart(4, "0")}`;
}

function unique(values) {
  return Array.from(new Set(values.filter(Boolean)));
}

function senseKey(portuguese, english) {
  return `${normalizeText(portuguese)}\u0000${normalizeText(english)}`;
}

function legacySituacaoId(portuguese) {
  const slug = String(portuguese ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  return `situacao-${slug || "termo"}`;
}

for (const file of fragmentFiles) {
  for (const entry of JSON.parse(readFileSync(file, "utf8"))) reserveId(entry.id);
}

for (const file of fragmentFiles) {
  const entries = JSON.parse(readFileSync(file, "utf8"));
  const nextEntries = entries.map((entry) => {
    const oldId = entry.id;
    const isStable = numericStableId(oldId) !== null;
    const id = isStable ? oldId : nextStableId();
    const legacyIds = isStable ? entry.legacyIds ?? [] : unique([oldId, ...(entry.legacyIds ?? [])]);
    const nextEntry = { ...entry, id };
    if (legacyIds.length > 0) nextEntry.legacyIds = legacyIds;
    manualEntries.push(nextEntry);
    return nextEntry;
  });
  writeFileSync(file, `${JSON.stringify(nextEntries, null, 2)}\n`);
}

const manualBySense = new Map();
const manualByPortuguese = new Map();
for (const entry of manualEntries) {
  const key = senseKey(entry.portuguese, entry.english);
  if (!manualBySense.has(key)) manualBySense.set(key, []);
  manualBySense.get(key).push(entry);

  const ptKey = normalizeText(entry.portuguese);
  if (!manualByPortuguese.has(ptKey)) manualByPortuguese.set(ptKey, []);
  manualByPortuguese.get(ptKey).push(entry);
}

const situacoesSource = readFileSync(situacoesFile, "utf8");
const match = situacoesSource.match(/export const situacaoVocabularyRows: SituacaoVocabularyRow\[] = (\[[\s\S]*?\n\]);/);
if (!match) throw new Error(`Could not find situacaoVocabularyRows in ${situacoesFile}`);

const situacaoRows = JSON.parse(match[1]);
for (const row of situacaoRows) reserveId(row.id);

const situacaoIdsBySense = new Map();
const ambiguousMatches = [];

const nextSituacaoRows = situacaoRows.map((row) => {
  const key = senseKey(row.pt, row.en);
  const manualPortugueseMatches = manualByPortuguese.get(normalizeText(row.pt)) ?? [];
  const manualSenseMatches = manualBySense.get(key) ?? [];
  const manualMatches =
    manualPortugueseMatches.length === 1
      ? manualPortugueseMatches
      : manualSenseMatches.length === 1
        ? manualSenseMatches
        : manualPortugueseMatches;
  const legacyIds = [...(row.legacyIds ?? [])];
  let id = row.id;

  if (manualMatches.length === 1) {
    id = manualMatches[0].id;
  } else if (manualMatches.length > 1) {
    ambiguousMatches.push({
      pt: row.pt,
      en: row.en,
      candidates: manualMatches.map((entry) => ({ id: entry.id, english: entry.english, legacyIds: entry.legacyIds, modulo: entry.modulo }))
    });
  } else if (!id) {
    id = situacaoIdsBySense.get(key) ?? nextStableId();
    legacyIds.push(legacySituacaoId(row.pt));
  }

  if (!manualMatches.length) legacyIds.push(legacySituacaoId(row.pt));
  if (!situacaoIdsBySense.has(key)) situacaoIdsBySense.set(key, id);

  const nextRow = { ...row, id };
  const uniqueLegacyIds = unique(legacyIds);
  if (uniqueLegacyIds.length > 0) nextRow.legacyIds = uniqueLegacyIds;
  return nextRow;
});

if (ambiguousMatches.length > 0) {
  writeFileSync(reportFile, `${JSON.stringify({ ambiguousMatches }, null, 2)}\n`);
  throw new Error(`Ambiguous stable ID assignment. See ${reportFile}.`);
}

writeFileSync(situacoesFile, situacoesSource.replace(match[1], JSON.stringify(nextSituacaoRows, null, 2)));

for (const file of csvFiles) {
  try {
    writeFileSync(file, addCsvIds(readFileSync(file, "utf8"), nextSituacaoRows));
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }
}

writeFileSync(
  reportFile,
  `${JSON.stringify(
    {
      manualEntries: manualEntries.length,
      situacaoRows: nextSituacaoRows.length,
      uniqueIds: new Set([...manualEntries, ...nextSituacaoRows].map((entry) => entry.id)).size
    },
    null,
    2
  )}\n`
);

function addCsvIds(source, rows) {
  const lines = parseCsv(source);
  if (lines.length === 0) return source;

  const header = lines[0];
  const idIndex = header.indexOf("id");
  const legacyIdsIndex = header.indexOf("legacyIds");
  const hasIds = idIndex !== -1 && legacyIdsIndex !== -1;
  const situacaoIndex = findHeaderIndex(header, "situacao");
  const ptIndex = findHeaderIndex(header, "pt");
  const enIndex = findHeaderIndex(header, "en");
  const zhHantIndex = findHeaderIndex(header, "zh_hant");
  const zhHansIndex = findHeaderIndex(header, "zh_hans");
  const output = [hasIds ? header : ["id", "legacyIds", ...header]];
  const rowsByKey = new Map(rows.map((row) => [csvLookupKey(row), row]));

  for (const fields of lines.slice(1)) {
    const row = rowsByKey.get(
      csvLookupKey({
        situacao: fields[situacaoIndex],
        pt: fields[ptIndex],
        en: fields[enIndex],
        zhHant: fields[zhHantIndex],
        zhHans: fields[zhHansIndex]
      })
    );

    if (hasIds) {
      const nextFields = [...fields];
      if (row) {
        nextFields[idIndex] = row.id;
        nextFields[legacyIdsIndex] = (row.legacyIds ?? []).join(" ");
      }
      output.push(nextFields);
    } else {
      output.push([row?.id ?? "", (row?.legacyIds ?? []).join(" "), ...fields]);
    }
  }

  return output.map(formatCsvLine).join("\n") + "\n";
}

function csvLookupKey(row) {
  return [row.situacao, row.pt, row.en, row.zhHant, row.zhHans].map(normalizeText).join("\u0000");
}

function findHeaderIndex(header, name) {
  const index = header.findIndex((field) => field.replace(/^\uFEFF/u, "") === name);
  if (index === -1) throw new Error(`Missing CSV column: ${name}`);
  return index;
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
      } else if (char === '"') {
        quoted = false;
      } else {
        value += char;
      }
      continue;
    }

    if (char === '"') quoted = true;
    else if (char === ",") {
      row.push(value);
      value = "";
    } else if (char === "\n") {
      row.push(value.replace(/\r$/, ""));
      rows.push(row);
      row = [];
      value = "";
    } else value += char;
  }

  if (value || row.length > 0) {
    row.push(value.replace(/\r$/, ""));
    rows.push(row);
  }

  return rows;
}

function formatCsvLine(fields) {
  return fields
    .map((field) => {
      const value = String(field ?? "");
      return /[",\n\r]/.test(value) ? `"${value.replace(/"/g, '""')}"` : value;
    })
    .join(",");
}
