import { describe, expect, it, vi } from "vitest";

describe("learning translation loading", () => {
  it("loads a language on demand and only once", async () => {
    vi.resetModules();
    const { isLearningTranslationLoaded, learningTranslations, loadLearningTranslations, translateLearningText } =
      await import("../src/lib/learningTranslations");
    const { vocabulary } = await import("../src/data/vocabulary");
    const english = vocabulary[0].english;

    expect(isLearningTranslationLoaded("pt-fr")).toBe(false);
    expect(translateLearningText(english, "pt-fr")).toBe(english);

    await Promise.all([loadLearningTranslations("pt-fr"), loadLearningTranslations("fr")]);
    const loaded = learningTranslations.fr;

    expect(isLearningTranslationLoaded("pt-fr")).toBe(true);
    expect(isLearningTranslationLoaded("pt-es")).toBe(false);
    expect(translateLearningText(english, "pt-fr")).not.toBe(english);
    await loadLearningTranslations("pt-fr");
    expect(learningTranslations.fr).toBe(loaded);
  });

  it("treats built-in languages as always loaded", async () => {
    const { isLearningTranslationLoaded, loadLearningTranslations } = await import("../src/lib/learningTranslations");
    expect(isLearningTranslationLoaded("pt-en")).toBe(true);
    expect(isLearningTranslationLoaded("pt-zh-hans")).toBe(true);
    await expect(loadLearningTranslations("en-pt")).resolves.toBeUndefined();
  });
});
