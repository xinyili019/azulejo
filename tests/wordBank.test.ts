import { describe, expect, it } from "vitest";
import { getVocabularyForSituacao, wordBank } from "../src/data/wordBank";
import { situacaoCheatSheetLines, situacaoDialogueLines, situacaoGroups } from "../src/data/situacoes";

const allSituationIds = situacaoGroups.flatMap((group) => group.items.map((item) => item.id));

const practicalSituationIds = [
  "supermercado_mercado",
  "cafe_restaurante",
  "consultorio_medico",
  "casa_reparacoes",
  "agua_luz_gas",
  "telemovel_internet",
  "trocas_devolucoes",
  "policia_documentos"
];

const bureaucracySituationIds = [
  "espaco_cidadao",
  "imt_carta_conducao",
  "conservatoria_registo_civil",
  "camara_municipal",
  "reconhecimento_diplomas",
  "consulado_documentos"
];

const bureaucracyCoverage: Record<string, string[]> = {
  espaco_cidadao: ["availability", "appointment", "documents", "cost", "assistance", "recovery", "confirmation", "tracking"],
  imt_carta_conducao: ["eligibility", "deadline", "appointment", "documents", "submission", "cost", "payment", "temporary-proof", "tracking"],
  conservatoria_registo_civil: ["eligibility", "documents", "legalisation", "format", "cost", "correction", "collection", "timing", "tracking"],
  camara_municipal: ["details", "evidence", "submission", "priority", "parking", "waste", "licence", "noise", "cost", "tracking"],
  reconhecimento_diplomas: ["route", "profession", "submission", "documents", "translation", "cost", "payment", "timing", "problem", "grade", "tracking"],
  consulado_documentos: ["appointment", "documents", "signature", "cost", "collection", "passport", "emergency", "legalisation", "civil-record", "timing", "tracking"]
};

describe("shared AIMA vocabulary", () => {
  it("uses one current entry across Manual and Situações while retaining the retired ID as an alias", () => {
    const matches = wordBank.filter((entry) => entry.id === "az-0658");

    expect(matches).toHaveLength(1);
    expect(matches[0]).toMatchObject({
      modulo: "Módulo 5",
      portuguese: "AIMA",
      english: "Agency for Integration, Migration and Asylum",
      zhHans: "移民与庇护融合署",
      zhHant: "移民與庇護融合署"
    });
    expect(matches[0].situacoes).toContain("aima");
    expect(matches[0].legacyIds).toContain("az-0215");
  });
});

describe("practical situations", () => {
  it.each(practicalSituationIds)("provides a complete %s study set", (situacao) => {
    expect(getVocabularyForSituacao(situacao)).toHaveLength(30);
    expect(situacaoDialogueLines.filter((line) => line.situacao === situacao)).toHaveLength(20);
    expect(situacaoCheatSheetLines.filter((line) => line.situacao === situacao)).toHaveLength(20);
  });
});

describe("complete situation content", () => {
  it.each(allSituationIds)("provides at least 20 dialogue and Cartao lines for %s", (situacao) => {
    expect(situacaoDialogueLines.filter((line) => line.situacao === situacao).length).toBeGreaterThanOrEqual(20);
    expect(situacaoCheatSheetLines.filter((line) => line.situacao === situacao).length).toBeGreaterThanOrEqual(20);
  });
});

describe("bureaucracy situations", () => {
  it.each(bureaucracySituationIds)("covers the real-world tasks for %s without duplicating dialogue lines on the card", (situacao) => {
    const dialogue = situacaoDialogueLines.filter((line) => line.situacao === situacao);
    const card = situacaoCheatSheetLines.filter((line) => line.situacao === situacao);
    const purposes = new Set([...dialogue, ...card].map((line) => line.purpose));
    const normalize = (value: string) => value.normalize("NFC").toLocaleLowerCase("pt-PT").replace(/[^a-záàâãçéêíóôõúü\s]/gu, "").replace(/\s+/gu, " ").trim();
    const dialogueText = new Set(dialogue.map((line) => normalize(line.pt)));

    expect(getVocabularyForSituacao(situacao).length).toBeGreaterThan(0);
    expect(bureaucracyCoverage[situacao].every((purpose) => purposes.has(purpose))).toBe(true);
    expect(card.some((line) => dialogueText.has(normalize(line.pt)))).toBe(false);
  });
});
