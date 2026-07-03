import { describe, expect, it } from "vitest";
import { vocabulary } from "../src/data/vocabulary";
import {
  MODULE_QUIZ_AUDIO_MEANING_CHOICE_COUNT,
  MODULE_QUIZ_CLOZE_SIZE,
  MODULE_QUIZ_SIZE,
  buildClozeAnswer,
  buildClozeSentence,
  buildModuleQuizQuestions,
  buildModuleQuizScopes
} from "../src/lib/moduleQuiz";
import { createSeededRng } from "../src/lib/retrievalReview";

describe("module quiz", () => {
  it("creates per-module scopes and uses custom split points for modules 1 and 6", () => {
    const scopes = buildModuleQuizScopes(vocabulary);
    const moduleOneScopes = scopes.filter((scope) => scope.modulo === "Módulo 1");
    const moduleSixScopes = scopes.filter((scope) => scope.modulo === "Módulo 6");
    const moduleTwoScopes = scopes.filter((scope) => scope.modulo === "Módulo 2");

    expect(moduleOneScopes).toHaveLength(2);
    expect(moduleOneScopes.map((scope) => scope.entries.length)).toEqual([50, 46]);
    expect(moduleOneScopes.map((scope) => scope.label)).toEqual(["Módulo 1 1-50", "Módulo 1 51-96"]);

    expect(moduleSixScopes).toHaveLength(2);
    expect(moduleSixScopes.map((scope) => scope.entries.length)).toEqual([40, 41]);
    expect(moduleSixScopes.map((scope) => scope.label)).toEqual(["Módulo 6 1-40", "Módulo 6 41-81"]);

    expect(moduleTwoScopes).toHaveLength(1);
    expect(moduleTwoScopes[0].entries.length).toBe(39);
    expect(moduleTwoScopes[0].label).toBe("Módulo 2");
  });

  it("blanks the target word in the Portuguese example sentence", () => {
    expect(buildClozeSentence(vocabulary[0])).toBe("A minha ____ fica perto.");
  });

  it("uses the actual sentence form as the cloze answer", () => {
    const refeicao = vocabulary.find((entry) => entry.id === "m10-refeicao");
    const sentirFalta = vocabulary.find((entry) => entry.id === "m10-sentir-falta-de");
    const dependerDe = vocabulary.find((entry) => entry.id === "m10-depender-de");
    const stress = vocabulary.find((entry) => entry.id === "m10-stress");

    expect(refeicao).toBeDefined();
    expect(sentirFalta).toBeDefined();
    expect(dependerDe).toBeDefined();
    expect(stress).toBeDefined();

    expect(buildClozeSentence(refeicao!)).toBe("Come as ____ a horas?");
    expect(buildClozeAnswer(refeicao!)).toBe("refeições");
    expect(buildClozeSentence(sentirFalta!)).toBe("Têm ____ do calor.");
    expect(buildClozeAnswer(sentirFalta!)).toBe("sentido falta");
    expect(buildClozeSentence(dependerDe!)).toBe("Lá em casa ____ mim.");
    expect(buildClozeAnswer(dependerDe!)).toBe("dependem de");
    expect(buildClozeAnswer(stress!)).toBeUndefined();
  });

  it("builds a 20-question multiple-choice quiz from a scope", () => {
    const scope = buildModuleQuizScopes(vocabulary).find((candidate) => candidate.modulo === "Módulo 1");
    expect(scope).toBeDefined();

    const questions = buildModuleQuizQuestions(scope!, vocabulary, "pt-en", {
      rng: createSeededRng(12)
    });

    expect(questions).toHaveLength(MODULE_QUIZ_SIZE);
    expect(questions[0].clozeSentence).toContain("____");
    expect(questions[0].translation).toBeTruthy();
    expect(questions[0].choices).toHaveLength(4);
    expect(questions[0].choices).toContain(questions[0].answer);
    expect(questions.slice(0, MODULE_QUIZ_CLOZE_SIZE).every((question) => question.format === "cloze")).toBe(true);
    expect(questions.slice(MODULE_QUIZ_CLOZE_SIZE).every((question) => question.format === "audioMeaning")).toBe(true);
    expect(questions.slice(MODULE_QUIZ_CLOZE_SIZE).every((question) => question.choices.length === MODULE_QUIZ_AUDIO_MEANING_CHOICE_COUNT)).toBe(true);
    expect(new Set(questions.map((question) => question.id)).size).toBe(questions.length);
  });

  it("keeps multiple-choice answers inside the active scope when possible", () => {
    const scope = buildModuleQuizScopes(vocabulary).find((candidate) => candidate.modulo === "Módulo 1");
    expect(scope).toBeDefined();

    const scopeAnswers = new Set(scope!.entries.map(buildClozeAnswer).filter(Boolean));
    const questions = buildModuleQuizQuestions(scope!, vocabulary, "pt-en", {
      rng: createSeededRng(33)
    });

    const clozeQuestions = questions.filter((question) => question.format === "cloze");
    expect(clozeQuestions.every((question) => question.choices.every((choice) => scopeAnswers.has(choice)))).toBe(true);
  });

  it("can generate a different randomized 20 for a separate quiz run", () => {
    const scope = buildModuleQuizScopes(vocabulary).find((candidate) => candidate.modulo === "Módulo 1");
    expect(scope).toBeDefined();

    const firstRun = buildModuleQuizQuestions(scope!, vocabulary, "pt-en", { rng: createSeededRng(101) }).map(
      (question) => question.id
    );
    const secondRun = buildModuleQuizQuestions(scope!, vocabulary, "pt-en", { rng: createSeededRng(202) }).map(
      (question) => question.id
    );

    expect(secondRun).not.toEqual(firstRun);
  });
});
