import { describe, expect, it } from "vitest";
import {
  buildPortugueseCue,
  buildRetrievalReviewPrompts,
  createSeededRng,
  expandRepeatReviewQueue,
  getCharacterFeedback,
  getRetrievalOutcome,
  normalizePortugueseForReview,
  shuffleWithRng,
  type RepeatReviewItem,
  type RetrievalReviewResult
} from "../src/lib/retrievalReview";
import type { VocabularyEntry } from "../src/types";

function entry(id: string, portuguese: string, english = `English ${id}`): VocabularyEntry {
  return {
    id,
    modulo: "Modulo 1",
    theme: "Tema",
    portuguese,
    english,
    zhHans: `简体 ${id}`,
    zhHant: `繁體 ${id}`,
    source: "seed"
  };
}

const entries = [
  entry("a", "água", "water"),
  entry("b", "pão", "bread"),
  entry("c", "chá", "tea")
];

describe("retrievalReview", () => {
  it("builds reverse retrieval prompts from the active translation side", () => {
    expect(buildRetrievalReviewPrompts([entries[0]], "pt-en", () => 0)[0]).toMatchObject({
      prompt: "water",
      promptLanguage: "english",
      answer: "água"
    });

    expect(buildRetrievalReviewPrompts([entries[0]], "pt-zh-hans", () => 0)[0]).toMatchObject({
      prompt: "简体 a",
      promptLanguage: "zhHans",
      answer: "água"
    });

    expect(buildRetrievalReviewPrompts([entries[0]], "zh-hant-pt", () => 0)[0]).toMatchObject({
      prompt: "繁體 a",
      promptLanguage: "zhHant",
      answer: "água"
    });
  });

  it("randomizes presentation order with injectable or seeded randomness", () => {
    expect(shuffleWithRng(entries, () => 0).map((item) => item.id)).toEqual(["b", "c", "a"]);

    const first = buildRetrievalReviewPrompts(entries, "en-pt", createSeededRng(42)).map((prompt) => prompt.id);
    const second = buildRetrievalReviewPrompts(entries, "en-pt", createSeededRng(42)).map((prompt) => prompt.id);

    expect(first).toEqual(second);
    expect(first).not.toEqual(entries.map((item) => item.id));
  });

  it("builds Portuguese cues with letters hidden and useful punctuation preserved", () => {
    expect(buildPortugueseCue("água-de-colónia d'ouro!")).toBe("____-__-_______ _'____!");
  });

  it("normalizes Portuguese input for forgiving comparison while keeping display feedback", () => {
    expect(normalizePortugueseForReview("  ÁGUA   D’ouro  ")).toBe("agua d'ouro");

    expect(getRetrievalOutcome("Agua d'ouro", "água d'ouro", false)).toBe("correct");
    expect(getRetrievalOutcome("água de ouro", "água d'ouro", false)).toBe("incorrect");
    expect(getRetrievalOutcome("água d'ouro", "água d'ouro", true)).toBe("revealed-before-typed");
  });

  it("marks character-level feedback against normalized Portuguese", () => {
    const feedback = getCharacterFeedback("Agua", "água");

    expect(feedback).toEqual([
      { index: 0, typedChar: "A", expectedChar: "á", displayChar: "á", correct: true },
      { index: 1, typedChar: "g", expectedChar: "g", displayChar: "g", correct: true },
      { index: 2, typedChar: "u", expectedChar: "u", displayChar: "u", correct: true },
      { index: 3, typedChar: "a", expectedChar: "a", displayChar: "a", correct: true }
    ]);

    expect(getCharacterFeedback("pao", "pão")[1]).toMatchObject({
      typedChar: "a",
      expectedChar: "ã",
      displayChar: "ã",
      correct: true
    });

    expect(getCharacterFeedback("olá ", "olá")[3]).toMatchObject({
      typedChar: " ",
      expectedChar: "",
      correct: false
    });
  });

  it("expands incorrect, revealed, and again words with repeat spacing", () => {
    const results: RepeatReviewItem[] = [
      { id: "a", entry: entries[0], outcome: "incorrect" },
      { id: "b", entry: entries[1], outcome: "revealed-before-typed" },
      { id: "c", entry: entries[2], outcome: "again" },
      { id: "ok", entry: entry("ok", "sim"), outcome: "correct" }
    ];

    expect(expandRepeatReviewQueue(results, { repeatCount: 2 }).map((item) => item.id)).toEqual([
      "a",
      "b",
      "c",
      "a",
      "b",
      "c"
    ]);
  });

  it("uses caller-provided filler words when repeats need spacing support", () => {
    const failed = [{ id: "a", entry: entries[0], outcome: "incorrect" as const }];
    const filler = entry("filler", "olá");

    expect(
      expandRepeatReviewQueue(failed, {
        repeatCount: 3,
        fillerItems: [filler],
        rng: () => 0
      }).map((item) => item.id)
    ).toEqual(["a", "filler", "filler", "a", "filler", "filler", "a"]);
  });
});
