import { describe, expect, it } from "vitest";
import { buildModuleSessionPlan, buildSessionPlan } from "../src/lib/sessionPlan";
import type { VocabularyEntry } from "../src/types";

function makeEntries(count: number, modulo = "Modulo 1"): VocabularyEntry[] {
  return Array.from({ length: count }, (_, index) => ({
    id: `${modulo}-${index + 1}`,
    modulo,
    theme: "Test",
    portuguese: `pt ${index + 1}`,
    english: `en ${index + 1}`,
    zhHans: `zh-hans ${index + 1}`,
    zhHant: `zh-hant ${index + 1}`,
    source: "seed"
  }));
}

function sessionSizes(count: number): number[] {
  return buildModuleSessionPlan("Modulo 1", makeEntries(count)).sessions.map((session) => session.size);
}

describe("sessionPlan", () => {
  it("keeps a 39-word module as 20 + 19", () => {
    expect(sessionSizes(39)).toEqual([20, 19]);
  });

  it("merges a 9-word final session into the previous session", () => {
    const plan = buildModuleSessionPlan("Modulo 1", makeEntries(29));

    expect(plan.sessions.map((session) => session.size)).toEqual([29]);
    expect(plan.sessions[0]).toMatchObject({
      startIndex: 0,
      endIndex: 29,
      moduleKnownCountAtMilestone: 29,
      globalKnownCountAtMilestone: 29
    });
  });

  it("keeps a 10-word final session separate", () => {
    expect(sessionSizes(30)).toEqual([20, 10]);
  });

  it("merges a 1-word final session into the previous session", () => {
    expect(sessionSizes(41)).toEqual([20, 21]);
  });

  it("keeps entries grouped by module with cumulative milestone counts", () => {
    const entries = [...makeEntries(30, "Modulo 1"), ...makeEntries(29, "Modulo 2")];
    const plan = buildSessionPlan(entries);

    expect(plan.modules.map((modulePlan) => modulePlan.modulo)).toEqual(["Modulo 1", "Modulo 2"]);
    expect(plan.modules.map((modulePlan) => modulePlan.sessions.map((session) => session.size))).toEqual([
      [20, 10],
      [29]
    ]);
    expect(plan.sessions.map((session) => session.globalSessionIndex)).toEqual([0, 1, 2]);
    expect(plan.sessions.map((session) => session.moduleKnownCountAtMilestone)).toEqual([20, 30, 29]);
    expect(plan.sessions.map((session) => session.globalKnownCountAtMilestone)).toEqual([20, 30, 59]);
    expect(plan.totalEntries).toBe(59);
    expect(plan.totalSessions).toBe(3);
  });

  it("keeps a small module as one session when there is no previous session to merge into", () => {
    expect(sessionSizes(9)).toEqual([9]);
  });
});
