import { describe, expect, it } from "vitest";
import { recordReview, summarizeProgress } from "../src/lib/progress";
import type { VocabularyEntry } from "../src/types";

const entries: VocabularyEntry[] = [
  { id: "one", modulo: "Modulo 1", theme: "A", portuguese: "ola", english: "hello", zhHans: "你好", zhHant: "你好", source: "seed" },
  { id: "two", modulo: "Modulo 1", theme: "A", portuguese: "tchau", english: "bye", zhHans: "再见", zhHant: "再見", source: "seed" }
];

describe("progress", () => {
  it("records known reviews", () => {
    const progress = recordReview({}, "one", "known", "2026-06-25T10:00:00.000Z");

    expect(progress.one).toMatchObject({
      status: "known",
      reviewCount: 1,
      knownCount: 1,
      lastReviewedAt: "2026-06-25T10:00:00.000Z"
    });
  });

  it("summarizes known, reviewed, and remaining cards", () => {
    const progress = recordReview({}, "one", "known");

    expect(summarizeProgress(entries, progress)).toEqual({
      total: 2,
      reviewed: 1,
      known: 1,
      remaining: 1,
      knownPercent: 50
    });
  });
});
