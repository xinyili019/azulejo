import type { VocabularyEntry } from "../types";
import { situacaoVocabularyRows } from "./situacoes";
import { vocabulary } from "./vocabulary";

export const WORDBANK_VERSION = 1;

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
  const entriesById = new Map<string, VocabularyEntry>();

  for (const entry of vocabulary) {
    entriesById.set(entry.id, entry);
  }

  for (const row of situacaoVocabularyRows) {
    const id = row.id || createSituacaoId(row.pt);
    const existing = entriesById.get(id);

    if (existing) {
      const merged = addSituacao(
        {
          ...existing,
          pos: existing.pos ?? row.pos,
          gender: existing.gender ?? row.gender,
          note: existing.note ?? row.note
        },
        row.situacao
      );
      entriesById.set(merged.id, merged);
      continue;
    }

    const entry: VocabularyEntry = addSituacao(
      {
        id,
        legacyIds: row.legacyIds,
        theme: "Situações",
        portuguese: row.pt,
        english: row.en,
        zhHans: row.zhHans,
        zhHant: row.zhHant,
        pos: row.pos,
        gender: row.gender,
        note: row.note,
        source: "situacao"
      },
      row.situacao
    );

    entriesById.set(id, entry);
  }

  return Array.from(entriesById.values());
}

export const wordBank = buildWordBank();

export const situacaoVocabulary = wordBank.filter((entry) => entry.situacoes?.length);

export function getVocabularyForSituacao(situacao: string) {
  return situacaoVocabulary.filter((entry) => entry.situacoes?.includes(situacao));
}
