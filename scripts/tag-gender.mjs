import { readFileSync, writeFileSync } from "node:fs";

const fragmentFiles = [
  "src/data/fragments/modules-01-03.json",
  "src/data/fragments/modules-04-06.json",
  "src/data/fragments/modules-07-09.json",
  "src/data/fragments/modules-10-12.json"
];
const situacoesFile = "src/data/situacoes.ts";
const csvFiles = ["situacoes vocab.csv", "situacoes vocab v2.csv"];
const reviewFile = "scripts/gender-review.csv";
const articleGender = new Map([
  ["o", "m"],
  ["a", "f"],
  ["os", "m-pl"],
  ["as", "f-pl"]
]);
const expressionTerms = new Set(["a pé"]);

const reviewRows = [["source", "id", "portuguese", "current_pos", "current_gender", "best_guess", "reason"]];

for (const file of fragmentFiles) {
  const entries = JSON.parse(readFileSync(file, "utf8"));
  const nextEntries = entries.map((entry) => tagEntry(entry, file, entry.portuguese));
  writeFileSync(file, `${JSON.stringify(nextEntries, null, 2)}\n`);
}

const situacoesSource = readFileSync(situacoesFile, "utf8");
const match = situacoesSource.match(/export const situacaoVocabularyRows: SituacaoVocabularyRow\[] = (\[[\s\S]*?\n\]);/);
if (!match) throw new Error(`Could not find situacaoVocabularyRows in ${situacoesFile}`);

const situacaoRows = JSON.parse(match[1]);
const nextSituacaoRows = situacaoRows.map((row) => tagEntry(row, situacoesFile, row.pt));
writeFileSync(situacoesFile, situacoesSource.replace(match[1], JSON.stringify(nextSituacaoRows, null, 2)));

for (const file of csvFiles) {
  try {
    writeFileSync(file, addCsvTags(readFileSync(file, "utf8"), nextSituacaoRows));
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }
}

writeFileSync(reviewFile, reviewRows.map(formatCsvLine).join("\n") + "\n");
console.log(`Wrote ${reviewFile} with ${reviewRows.length - 1} rows for review.`);

function tagEntry(entry, source, portuguese) {
  if (entry.gender) return entry;

  const term = normalizeText(portuguese);
  if (expressionTerms.has(term)) {
    return addReview(entry, source, portuguese, "expr", "known expression");
  }

  const article = getLeadingArticle(term);
  if (article) {
    return {
      ...entry,
      pos: entry.pos ?? "noun",
      gender: articleGender.get(article)
    };
  }

  const confident = entry.pos === "noun" ? inferConfidentGender(term) : null;
  if (confident) {
    return {
      ...entry,
      pos: entry.pos ?? "noun",
      gender: confident.gender
    };
  }

  return addReview(entry, source, portuguese, inferBestGuess(term), "no confident noun-gender rule matched");
}

function addReview(entry, source, portuguese, bestGuess, reason) {
  reviewRows.push([
    source,
    entry.id ?? "",
    portuguese,
    entry.pos ?? "",
    entry.gender ?? "",
    bestGuess ?? "",
    reason
  ]);
  return entry;
}

function getLeadingArticle(term) {
  const match = term.match(/^(o|a|os|as)\s+/u);
  return match?.[1];
}

function inferConfidentGender(term) {
  const head = getHeadword(term);
  if (!head) return null;
  if (/(?:ção|são|dade|gem|tude)$/u.test(head)) return { gender: "f", reason: "feminine suffix" };
  if (/(?:ema|oma)$/u.test(head)) return { gender: "m", reason: "Greek-origin masculine suffix" };
  if (/or$/u.test(head)) return { gender: "m", reason: "masculine -or suffix" };
  if (/o$/u.test(head)) return { gender: "m", reason: "masculine -o suffix" };
  if (/a$/u.test(head)) return { gender: "f", reason: "feminine -a suffix" };
  return null;
}

function inferBestGuess(term) {
  const head = getHeadword(stripLeadingArticle(term));
  if (!head) return "";
  const confident = inferConfidentGender(head);
  if (confident) return confident.gender;
  if (/s$/u.test(head)) return "plural?";
  if (/e$/u.test(head)) return "m/f?";
  return "";
}

function getHeadword(term) {
  return stripParenthetical(stripLeadingArticle(term))
    .split(/\s+/u)
    .find((word) => /\p{L}/u.test(word))
    ?.replace(/^[^\p{L}]+|[^\p{L}]+$/gu, "");
}

function stripLeadingArticle(term) {
  return term.replace(/^(?:o|a|os|as)\s+/u, "");
}

function stripParenthetical(term) {
  return term.replace(/\([^)]*\)/gu, " ").replace(/\s+/gu, " ").trim();
}

function normalizeText(value) {
  return String(value ?? "").normalize("NFC").toLocaleLowerCase("pt-PT").replace(/\s+/gu, " ").trim();
}

function addCsvTags(source, rows) {
  const lines = parseCsv(source);
  if (lines.length === 0) return source;

  const header = lines[0];
  const posIndex = header.indexOf("pos");
  const genderIndex = header.indexOf("gender");
  const hasTags = posIndex !== -1 && genderIndex !== -1;
  const output = [hasTags ? header : ["pos", "gender", ...header]];
  const rowsById = new Map(rows.map((row) => [row.id, row]));

  for (const fields of lines.slice(1)) {
    const idIndex = header.indexOf("id");
    const id = idIndex >= 0 ? fields[idIndex] : "";
    const row = rowsById.get(id);

    if (hasTags) {
      const nextFields = [...fields];
      if (row) {
        nextFields[posIndex] = row.pos ?? "";
        nextFields[genderIndex] = row.gender ?? "";
      }
      output.push(nextFields);
    } else {
      output.push([row?.pos ?? "", row?.gender ?? "", ...fields]);
    }
  }

  return output.map(formatCsvLine).join("\n") + "\n";
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
