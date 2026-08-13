import { describe, expect, it } from "vitest";
import { WORDBANK_VERSION } from "../src/data/wordBank";
import { exportAll, getProgress, getSetting, importAll, setProgress, setSetting } from "../src/lib/storage";

describe("storage", () => {
  it("preserves imported and concurrent setting updates", async () => {
    await importAll({ app: "azulejo", progress: {}, settings: { translationLanguage: "pt-en" } });
    expect(await getSetting("translationLanguage")).toBe("pt-en");

    await Promise.all([
      setSetting("translationLanguage", "pt-en"),
      setSetting("guidedTour", { completed: true, step: 6 })
    ]);
    expect(await getSetting("guidedTour")).toEqual({ completed: true, step: 6 });
  });

  it("round-trips exported progress and migrates legacy word keys", async () => {
    await importAll({ app: "azulejo", progress: {}, settings: {} });
    await setProgress({
      "m1-casa": {
        status: "known",
        reviewCount: 1,
        knownCount: 1
      }
    });

    const exported = await exportAll();

    await importAll({ app: "azulejo", progress: {}, settings: {} });
    await importAll({
      app: "azulejo",
      version: WORDBANK_VERSION,
      exportedAt: "2026-07-05T00:00:00.000Z",
      data: exported
    });

    const restored = await getProgress();
    expect(restored["az-0077"]).toMatchObject({ status: "known", reviewCount: 1, knownCount: 1 });
    expect(restored["m1-casa"]).toBeUndefined();
  });
});
