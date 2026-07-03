import type { VocabularyEntry } from "../types";
import { situacaoVocabularyRows } from "./situacoes";
import { vocabulary } from "./vocabulary";

function normalizePortugueseTerm(value: string) {
  return value
    .normalize("NFC")
    .toLowerCase()
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function createSituacaoId(portuguese: string) {
  const slug = portuguese
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  return `situacao-${slug || "termo"}`;
}

function addSituacao(entry: VocabularyEntry, situacao: string): VocabularyEntry {
  const situacoes = entry.situacoes ?? (entry.situacao ? [entry.situacao] : []);
  const nextSituacoes = situacoes.includes(situacao) ? situacoes : [...situacoes, situacao];

  return {
    ...entry,
    situacao: nextSituacoes[0],
    situacoes: nextSituacoes,
    tipo: "vocabulário"
  };
}

function buildWordBank() {
  const entriesByTerm = new Map<string, VocabularyEntry>();
  const entriesById = new Map<string, VocabularyEntry>();

  for (const entry of vocabulary) {
    entriesByTerm.set(normalizePortugueseTerm(entry.portuguese), entry);
    entriesById.set(entry.id, entry);
  }

  for (const row of situacaoVocabularyRows) {
    const termKey = normalizePortugueseTerm(row.pt);
    const existing = entriesByTerm.get(termKey);

    if (existing) {
      const merged = addSituacao(
        {
          ...existing,
          note: existing.note ?? row.note
        },
        row.situacao
      );
      entriesByTerm.set(termKey, merged);
      entriesById.set(merged.id, merged);
      continue;
    }

    const id = createSituacaoId(row.pt);
    const entry: VocabularyEntry = addSituacao(
      {
        id,
        theme: "Situações",
        portuguese: row.pt,
        english: row.en,
        zhHans: row.zhHans,
        zhHant: row.zhHant,
        note: row.note,
        source: "situacao"
      },
      row.situacao
    );

    entriesByTerm.set(termKey, entry);
    entriesById.set(id, entry);
  }

  return Array.from(entriesById.values());
}

export const wordBank = buildWordBank();

export const situacaoVocabulary = wordBank.filter((entry) => entry.situacoes?.length);

export function getVocabularyForSituacao(situacao: string) {
  return situacaoVocabulary.filter((entry) => entry.situacoes?.includes(situacao));
}
