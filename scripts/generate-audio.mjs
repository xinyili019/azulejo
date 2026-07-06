import { mkdirSync, readFileSync, renameSync, rmSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const sourcePath = join(root, "src", "data", "vocabulary.ts");
const situacoesSourcePath = join(root, "src", "data", "situacoes.ts");
const outputDir = join(root, "public", "audio", "pt");
const exampleOutputDir = join(outputDir, "examples");
const situacoesOutputDir = join(outputDir, "situacoes");
const dialogoOutputDir = join(situacoesOutputDir, "dialogo");
const cartaoOutputDir = join(situacoesOutputDir, "cartao");
const force = process.argv.includes("--force");
const voice = process.env.AZULEJO_TTS_VOICE ?? "Joana";

const source = readFileSync(sourcePath, "utf8");
const situacoesSource = readFileSync(situacoesSourcePath, "utf8");
const entries = [...source.matchAll(/"id":\s*"([^"]+)"[\s\S]*?"portuguese":\s*"([^"]+)"[\s\S]*?"examplePt":\s*"([^"]+)"/g)].map(
  (match) => ({
    id: match[1],
    portuguese: match[2],
    examplePt: match[3]
  })
);
const manualIdsByTerm = new Map(entries.map((entry) => [normalizePortugueseTerm(entry.portuguese), entry.id]));
const situacaoVocabularyRows = extractExportedJson("situacaoVocabularyRows");
const situacaoDialogueLines = extractExportedJson("situacaoDialogueLines");
const situacaoCheatSheetLines = extractExportedJson("situacaoCheatSheetLines");
const situacaoWordEntries = new Map();

for (const row of situacaoVocabularyRows) {
  const termKey = normalizePortugueseTerm(row.pt);
  const id = manualIdsByTerm.get(termKey) ?? createSituacaoId(row.pt);
  if (!situacaoWordEntries.has(id)) {
    situacaoWordEntries.set(id, { id, portuguese: row.pt });
  }
}

function speechText(term) {
  return term
    .replace(/\b([\p{L}-]+)o\(a\)/gu, (_, stem) => `${stem}o ou ${stem}a`)
    .replace(/\b([\p{L}-]+)\(a\)/gu, (_, word) => `${word} ou ${word}a`)
    .replace(/\s*\/\s*/g, " ou ")
    .replace(/\s*\+\s*/g, ", ")
    .replace(/\s+/g, " ")
    .trim();
}

function exists(path) {
  try {
    return statSync(path).isFile();
  } catch {
    return false;
  }
}

mkdirSync(outputDir, { recursive: true });
mkdirSync(exampleOutputDir, { recursive: true });
mkdirSync(dialogoOutputDir, { recursive: true });
mkdirSync(cartaoOutputDir, { recursive: true });

let generatedWords = 0;
let skippedWords = 0;
let generatedExamples = 0;
let skippedExamples = 0;
let generatedSituacaoLines = 0;
let skippedSituacaoLines = 0;

for (const entry of entries) {
  const outputPath = join(outputDir, `${entry.id}.m4a`);
  if (!force && exists(outputPath)) {
    skippedWords += 1;
  } else {
    generateAudio(outputPath, speechText(entry.portuguese), entry.id);
    generatedWords += 1;
  }

  const exampleOutputPath = join(exampleOutputDir, `${entry.id}.m4a`);
  if (!force && exists(exampleOutputPath)) {
    skippedExamples += 1;
  } else {
    generateAudio(exampleOutputPath, speechText(entry.examplePt), `${entry.id} example`);
    generatedExamples += 1;
  }
}

for (const entry of situacaoWordEntries.values()) {
  const outputPath = join(outputDir, `${entry.id}.m4a`);
  if (!force && exists(outputPath)) {
    skippedWords += 1;
  } else {
    generateAudio(outputPath, speechText(entry.portuguese), entry.id);
    generatedWords += 1;
  }
}

for (const line of situacaoDialogueLines) {
  const outputPath = join(dialogoOutputDir, `${line.id}.m4a`);
  if (!force && exists(outputPath)) {
    skippedSituacaoLines += 1;
  } else {
    generateAudio(outputPath, speechText(line.pt), `${line.id} dialogue`);
    generatedSituacaoLines += 1;
  }
}

for (const line of situacaoCheatSheetLines) {
  const outputPath = join(cartaoOutputDir, `${line.id}.m4a`);
  if (!force && exists(outputPath)) {
    skippedSituacaoLines += 1;
  } else {
    generateAudio(outputPath, speechText(line.pt), `${line.id} card`);
    generatedSituacaoLines += 1;
  }
}

function generateAudio(outputPath, text, label) {
  const rawOutputPath = `${outputPath}.raw.m4a`;
  const encodedOutputPath = `${outputPath}.aac.m4a`;

  const result = spawnSync("say", ["-v", voice, "-o", rawOutputPath, text], {
    encoding: "utf8"
  });

  if (result.status !== 0) {
    const details = result.stderr?.trim() || result.stdout?.trim() || `exit ${result.status}`;
    throw new Error(`Could not generate ${label}: ${details}`);
  }

  const encodeResult = spawnSync(
    "ffmpeg",
    ["-y", "-v", "error", "-i", rawOutputPath, "-c:a", "aac", "-b:a", "96k", "-movflags", "+faststart", encodedOutputPath],
    { encoding: "utf8" }
  );

  rmSync(rawOutputPath, { force: true });

  if (encodeResult.status !== 0) {
    rmSync(encodedOutputPath, { force: true });
    const details = encodeResult.stderr?.trim() || encodeResult.stdout?.trim() || `exit ${encodeResult.status}`;
    throw new Error(`Could not encode ${label} as AAC: ${details}`);
  }

  renameSync(encodedOutputPath, outputPath);
}

function extractExportedJson(name) {
  const marker = `export const ${name}:`;
  const start = situacoesSource.indexOf(marker);
  if (start < 0) {
    throw new Error(`Could not find ${name} in situacoes.ts`);
  }
  const assignmentStart = situacoesSource.indexOf(" = ", start);
  const assignmentEnd = situacoesSource.indexOf(";\n", assignmentStart);
  if (assignmentStart < 0 || assignmentEnd < 0) {
    throw new Error(`Could not parse ${name} in situacoes.ts`);
  }

  return JSON.parse(situacoesSource.slice(assignmentStart + 3, assignmentEnd));
}

function normalizePortugueseTerm(value) {
  return value
    .normalize("NFC")
    .toLowerCase()
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function createSituacaoId(portuguese) {
  const slug = portuguese
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  return `situacao-${slug || "termo"}`;
}

console.log(
  `Audio ready in public/audio/pt: words generated ${generatedWords}, skipped ${skippedWords}; examples generated ${generatedExamples}, skipped ${skippedExamples}; situacao sentences generated ${generatedSituacaoLines}, skipped ${skippedSituacaoLines}; manual total ${entries.length}, situacao words ${situacaoWordEntries.size}.`
);
