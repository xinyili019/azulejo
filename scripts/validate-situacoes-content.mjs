import { existsSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const source = readFileSync(join(root, "src", "data", "situacoes.ts"), "utf8");
const groups = extract("situacaoGroups");
const dialogues = extract("situacaoDialogueLines");
const cards = extract("situacaoCheatSheetLines");
const situations = groups.flatMap((group) => group.items.map((item) => item.id));
const errors = [];
const allLines = [
  ...dialogues.map((line) => ({ ...line, section: "dialogo" })),
  ...cards.map((line) => ({ ...line, section: "cartao" }))
];

const ids = new Set();
for (const line of allLines) {
  if (ids.has(line.id)) errors.push(`Duplicate content ID: ${line.id}`);
  ids.add(line.id);

  for (const field of ["pt", "en", "zhHans", "zhHant"]) {
    if (typeof line[field] !== "string" || !line[field].trim()) {
      errors.push(`${line.id} is missing ${field}.`);
    }
  }

  const audioPath = join(root, "public", "audio", "pt", "situacoes", line.section, `${line.id}.m4a`);
  if (!existsSync(audioPath)) {
    errors.push(`${line.id} is missing audio: ${audioPath}`);
  } else if (statSync(audioPath).size < 1_000) {
    errors.push(`${line.id} has an empty or invalid-looking audio file (${statSync(audioPath).size} bytes).`);
  }
}

for (const situation of situations) {
  const situationDialogues = dialogues.filter((line) => line.situacao === situation);
  const situationCards = cards.filter((line) => line.situacao === situation);
  if (situationDialogues.length < 20) {
    errors.push(`${situation} has only ${situationDialogues.length} dialogue turns.`);
  }
  if (situationCards.length < 20) {
    errors.push(`${situation} has only ${situationCards.length} Cartao lines.`);
  }

  const dialogueText = new Set(situationDialogues.map((line) => normalize(line.pt)));
  const overlap = new Set(
    situationCards.map((line) => normalize(line.pt)).filter((line) => dialogueText.has(line))
  );
  if (overlap.size > 2) {
    errors.push(`${situation} repeats ${overlap.size} exact lines across Dialogo and Cartao: ${[...overlap].join(" | ")}`);
  }
}

const situationsByLine = new Map();
for (const line of allLines) {
  const key = normalize(line.pt);
  const seenIn = situationsByLine.get(key) ?? new Set();
  seenIn.add(line.situacao);
  situationsByLine.set(key, seenIn);
}
for (const [line, seenIn] of situationsByLine) {
  if (seenIn.size > 3) {
    errors.push(`Line appears in ${seenIn.size} situations: "${line}" (${[...seenIn].join(", ")})`);
  }
}

if (errors.length) {
  console.error(`Situacoes content validation failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log(
    `Situacoes content valid: ${situations.length} situations, ${dialogues.length} dialogue turns, ` +
      `${cards.length} Cartao lines, all translations and audio present.`
  );
}

function extract(name) {
  const start = source.indexOf(`export const ${name}:`);
  const assignment = source.indexOf(" = ", start);
  const end = source.indexOf(";\n", assignment);
  if (start < 0 || assignment < 0 || end < 0) throw new Error(`Could not parse ${name}.`);
  return JSON.parse(source.slice(assignment + 3, end));
}

function normalize(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/gu, "")
    .toLocaleLowerCase("pt-PT")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();
}
