import { describe, expect, it } from "vitest";
import { filterEntries, getAnswer, getPrompt } from "../src/lib/filtering";
import type { VocabularyEntry } from "../src/types";

const entries: VocabularyEntry[] = [
  { id: "one", modulo: "Modulo 1", theme: "Saude", portuguese: "a farmacia", english: "pharmacy", source: "seed" },
  { id: "two", modulo: "Modulo 2", theme: "Compras", portuguese: "o recibo", english: "receipt", source: "seed" }
];

describe("filtering", () => {
  it("filters by module", () => {
    const result = filterEntries(entries, {}, { modulo: "Modulo 2", onlyDue: false });

    expect(result).toHaveLength(1);
    expect(result[0].id).toBe("two");
  });

  it("excludes known cards when onlyDue is enabled", () => {
    const result = filterEntries(
      entries,
      { one: { status: "known", reviewCount: 1, knownCount: 1 } },
      { modulo: "all", onlyDue: true }
    );

    expect(result.map((entry) => entry.id)).toEqual(["two"]);
  });

  it("switches prompt and answer by direction", () => {
    expect(getPrompt(entries[0], "pt-en")).toBe("a farmacia");
    expect(getAnswer(entries[0], "en-pt")).toBe("a farmacia");
  });
});
