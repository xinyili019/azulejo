import { existsSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import pdf from "pdf-parse";

const pdfPath = process.argv[2] ?? "Caderno de Formação_A2.pdf";
const outputPath = process.argv[3] ?? "extracted-vocabulary-draft.json";

if (!existsSync(pdfPath)) {
  console.error(`PDF not found: ${pdfPath}`);
  console.error("The workspace currently has an .icloud placeholder. Download the real PDF first, then rerun this script.");
  process.exit(1);
}

const buffer = readFileSync(pdfPath);
if (buffer.length < 1024) {
  console.error(`PDF is too small to be the real workbook: ${pdfPath}`);
  console.error("Download the full PDF from iCloud before extraction.");
  process.exit(1);
}

const result = await pdf(buffer);
const text = result.text.replace(/\r/g, "\n");
const sections = splitByModulo(text);
const draft = sections.flatMap((section) => extractCandidates(section.title, section.text));

writeFileSync(outputPath, JSON.stringify(draft, null, 2));
console.log(`Wrote ${draft.length} draft entries to ${path.resolve(outputPath)}.`);
console.log("Review translations and examples before replacing src/data/vocabulary.ts.");

function splitByModulo(text) {
  const headingPattern = /(?:^|\n)\s*Ficha modular\s*n[ºo]\s*(\d+)|(?:^|\n)\s*Ficha modular\s*n[ºo]\s*\n\s*(\d+)/gi;
  const matches = [...text.matchAll(headingPattern)];

  if (matches.length === 0) {
    return [{ title: "Modulo 1", text }];
  }

  return matches.map((match, index) => {
    const start = match.index ?? 0;
    const end = matches[index + 1]?.index ?? text.length;
    return {
      title: normalizeModulo(match[1] ?? match[2]),
      text: text.slice(start, end)
    };
  });
}

function extractCandidates(modulo, text) {
  const lines = text
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 1);

  const candidates = [];
  let theme = "Geral";
  let inVocabularyBlock = false;

  for (const line of lines) {
    if (/vocabul[aá]rio/i.test(line)) {
      inVocabularyBlock = true;
      theme = "Vocabulário";
      continue;
    }

    if (/^(gram[aá]tica|exerc[ií]cios?|leitura|di[aá]logo)/i.test(line)) {
      inVocabularyBlock = false;
      theme = titleCase(line.slice(0, 32));
      continue;
    }

    if (looksLikeVocabularyLine(line, inVocabularyBlock)) {
      const term = cleanTerm(line);
      if (term) {
        candidates.push({
          id: slugify(`${modulo}-${term}`),
          modulo,
          theme,
          portuguese: term,
          english: "",
          examplePt: "",
          exampleEn: "",
          note: inVocabularyBlock ? "Extracted from explicit vocabulary block." : "Extracted from surrounding unit content.",
          source: "pdf"
        });
      }
    }
  }

  return dedupe(candidates);
}

function looksLikeVocabularyLine(line, inVocabularyBlock) {
  if (line.length > 72) return false;
  if (/^\d+$/.test(line)) return false;
  if (/^[A-Z\s.,;:!?-]+$/.test(line) && line.length > 18) return false;
  if (inVocabularyBlock) return /[a-zA-ZÀ-ÿ]/.test(line);
  return /^(o|a|os|as|um|uma|uns|umas)\s+\p{L}/u.test(line) || /^[a-zà-ÿ]+r$/i.test(line);
}

function cleanTerm(line) {
  return line
    .replace(/^[•*\-\d.)\s]+/, "")
    .replace(/\s{2,}.*/, "")
    .trim()
    .toLowerCase();
}

function normalizeModulo(value) {
  const number = value.match(/\d+/)?.[0] ?? value;
  return `Módulo ${number}`;
}

function slugify(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function titleCase(value) {
  return value
    .toLowerCase()
    .replace(/\b\p{L}/gu, (letter) => letter.toUpperCase())
    .trim();
}

function dedupe(entries) {
  const seen = new Set();
  return entries.filter((entry) => {
    if (seen.has(entry.id)) return false;
    seen.add(entry.id);
    return true;
  });
}
