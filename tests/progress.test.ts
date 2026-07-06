import { describe, expect, it } from "vitest";
import { mergeCardProgress, migrateProgressKeys, recordReview, summarizeProgress } from "../src/lib/progress";
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

  it("counts a shared word id once globally", () => {
    const sharedEntries: VocabularyEntry[] = [
      { ...entries[0], id: "az-0001", modulo: "Módulo 1" },
      { ...entries[0], id: "az-0001", modulo: undefined, situacoes: ["banco"] },
      { ...entries[1], id: "az-0002", modulo: "Módulo 1" }
    ];

    const progress = recordReview({}, "az-0001", "known");

    expect(summarizeProgress(sharedEntries, progress)).toEqual({
      total: 2,
      reviewed: 1,
      known: 1,
      remaining: 1,
      knownPercent: 50
    });
  });

  it("uses the same status for the same id in different modes", () => {
    const progress = recordReview({}, "az-0001", "known");

    expect(progress["az-0001"].status).toBe("known");
    expect(summarizeProgress([{ ...entries[0], id: "az-0001", situacoes: ["banco"] }], progress).known).toBe(1);
  });

  it("merges per-mode legacy progress with known winning", () => {
    const merged = mergeCardProgress(
      { status: "again", reviewCount: 2, knownCount: 0, everAgain: true },
      { status: "known", reviewCount: 1, knownCount: 1 }
    );

    expect(merged.status).toBe("known");
    expect(merged.everAgain).toBe(true);
  });

  it("migrates old keys to stable word ids", () => {
    const migrated = migrateProgressKeys(
      {
        "m1-casa": { status: "again", reviewCount: 1, knownCount: 0 },
        "a casa": { status: "known", reviewCount: 2, knownCount: 1 }
      },
      [{ ...entries[0], id: "az-0001", legacyIds: ["m1-casa"], portuguese: "a casa" }]
    );

    expect(Object.keys(migrated)).toEqual(["az-0001"]);
    expect(migrated["az-0001"].status).toBe("known");
  });
});
