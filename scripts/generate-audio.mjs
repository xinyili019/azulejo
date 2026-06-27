import { mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const sourcePath = join(root, "src", "data", "vocabulary.ts");
const outputDir = join(root, "public", "audio", "pt");
const force = process.argv.includes("--force");
const voice = process.env.AZULEJO_TTS_VOICE ?? "Joana";

const source = readFileSync(sourcePath, "utf8");
const entries = [...source.matchAll(/"id":\s*"([^"]+)"[\s\S]*?"portuguese":\s*"([^"]+)"/g)].map((match) => ({
  id: match[1],
  portuguese: match[2]
}));

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

let generated = 0;
let skipped = 0;

for (const entry of entries) {
  const outputPath = join(outputDir, `${entry.id}.m4a`);
  if (!force && exists(outputPath)) {
    skipped += 1;
    continue;
  }

  const result = spawnSync("say", ["-v", voice, "-o", outputPath, speechText(entry.portuguese)], {
    encoding: "utf8"
  });

  if (result.status !== 0) {
    const details = result.stderr?.trim() || result.stdout?.trim() || `exit ${result.status}`;
    throw new Error(`Could not generate ${entry.id}: ${details}`);
  }
  generated += 1;
}

console.log(`Audio ready in public/audio/pt: generated ${generated}, skipped ${skipped}, total ${entries.length}.`);
