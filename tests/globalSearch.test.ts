import { describe, expect, it } from "vitest";
import { searchEntries } from "../src/components/GlobalSearchView";
import type { VocabularyEntry } from "../src/types";

const entries: VocabularyEntry[] = [
  {
    id: "cut",
    portuguese: "o corte",
    english: "haircut",
    zhHans: "理发",
    zhHant: "理髮",
    theme: "",
    situacoes: ["cabeleireiro_barbeiro"],
    source: "situacao"
  },
  {
    id: "barber",
    portuguese: "o barbeiro",
    english: "barber",
    zhHans: "理发师",
    zhHant: "理髮師",
    theme: "",
    situacoes: ["cabeleireiro_barbeiro"],
    source: "situacao"
  },
  {
    id: "house",
    modulo: "Módulo 1",
    portuguese: "a casa",
    english: "house; home",
    zhHans: "家；房子",
    zhHant: "家；房子",
    theme: "",
    source: "seed"
  }
];

describe("global vocabulary search", () => {
  it("puts direct translation matches first and follows them with related situation vocabulary", () => {
    expect(searchEntries(entries, "haircut").map((entry) => entry.id)).toEqual(["cut", "barber"]);
  });

  it("does not add unrelated vocabulary to related results", () => {
    expect(searchEntries(entries, "haircut")).not.toContainEqual(expect.objectContaining({ id: "house" }));
  });
});
