import { describe, expect, it } from "vitest";
import { searchEntries } from "../src/components/GlobalSearchView";
import { getUiCopy } from "../src/lib/i18n";
import { translateInstruction } from "../src/lib/instructionLanguages";
import { translateLearningText, learningTranslations } from "../src/lib/learningTranslations";
import { vocabulary } from "../src/data/vocabulary";
import { situacaoVocabularyRows, situacaoDialogueLines, situacaoCheatSheetLines } from "../src/data/situacoes";
import { getMeaningAnswer, getQuizTranslation } from "../src/lib/moduleQuiz";
import { buildRetrievalReviewPrompts } from "../src/lib/retrievalReview";
import { getAnswer, getPrompt } from "../src/lib/filtering";
import type { Direction } from "../src/types";

const directions: Direction[] = ["pt-fr", "pt-es", "pt-bn", "pt-ar", "pt-hi", "pt-ur", "pt-uk", "pt-ne", "pt-fa", "pt-ru", "pt-it"];

describe("instruction languages", () => {
  it.each(directions)("translates all instruction copy and score messages for %s", direction => {
    const english = getUiCopy("pt-en");
    const ui = getUiCopy(direction);
    expect(ui.instructionLocale).toBe(direction.slice(3));
    for (const [key, value] of Object.entries(english)) {
      if (typeof value !== "string" || key === "locale") continue;
      const translated = ui[key as keyof typeof ui];
      expect(translated, key).toBeTruthy();
      // These words are spelled identically in French or Spanish.
      if (["module", "example", "translation", "correct", "incorrect"].includes(key)) continue;
      expect(translated, key).not.toBe(value);
    }
    expect(ui.quizScore(3, 5)).not.toBe(english.quizScore(3, 5));
    expect(ui.finalQuizScore(3, 5)).not.toBe(english.finalQuizScore(3, 5));
    expect(ui.finalQuizScore(3, 5)).toContain("3/5");
    expect(translateInstruction("Unknown technical text", ui.instructionLocale!)).toBe("Unknown technical text");
  });

  it.each(directions)("keeps Portuguese prompts and localizes meanings for %s", direction => {
    const entry = vocabulary[0];
    expect(getPrompt(entry, direction)).toBe(entry.portuguese);
    expect(getAnswer(entry, direction)).toBe(translateLearningText(entry.english, direction));
    expect(getAnswer(entry, direction)).not.toBe(entry.english);
  });

  it.each(directions)("has a local translation for every meaning, example, and dialogue in %s", direction => {
    const dictionary = learningTranslations[direction.slice(3)];
    const sourceTexts = [
      ...vocabulary.flatMap(entry => [entry.english, entry.exampleEn]),
      ...situacaoVocabularyRows.flatMap(row => [row.en, row.exampleEn]),
      ...situacaoDialogueLines.map(line => line.en),
      ...situacaoCheatSheetLines.map(line => line.en)
    ].filter((text): text is string => Boolean(text));
    const missing = [...new Set(sourceTexts)].filter(text => !dictionary[text]?.trim());
    expect(missing).toEqual([]);
    const entry = vocabulary[0];
    expect(getAnswer(entry, direction)).toBe(dictionary[entry.english]);
    expect(getMeaningAnswer(entry, direction)).toBe(dictionary[entry.english]);
    expect(searchEntries([entry], dictionary[entry.english])).toEqual([entry]);
    expect(getQuizTranslation(entry, direction)).toBe(dictionary[entry.exampleEn!]);
    expect(buildRetrievalReviewPrompts([entry], direction)[0].prompt).toBe(dictionary[entry.english]);
  });

  it.each(directions)("localizes tour instructions and parameterized milestones in %s", direction => {
    const locale = getUiCopy(direction).instructionLocale!;
    const tour = "Tap the tile to check the meaning.";
    expect(translateInstruction(tour, locale)).not.toBe(tour);
    const milestone = "Congrats! You have recognized 12 words!";
    expect(translateInstruction(milestone, locale)).not.toBe(milestone);
    expect(translateInstruction(milestone, locale)).toContain("12");
  });

  it("escapes punctuation when translating parameterized messages", () => {
    expect(translateInstruction("You scored 3/5!", "fr")).toBe("Votre score : 3/5 !");
    expect(translateInstruction("You scored 3/5?", "fr")).toBe("You scored 3/5?");
  });
});
