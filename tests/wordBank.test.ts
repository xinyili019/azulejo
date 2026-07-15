import { describe, expect, it } from "vitest";
import { wordBank } from "../src/data/wordBank";

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
