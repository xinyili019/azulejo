import { StrictMode } from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ModuleQuiz } from "../src/components/ModuleQuiz";
import { getUiCopy } from "../src/lib/i18n";
import type { ModuleQuizScope, VocabularyEntry } from "../src/types";

describe("ModuleQuiz audio", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("autoplays an audio-meaning question once in StrictMode and replays on demand", async () => {
    const entries = Array.from({ length: 4 }, (_, index): VocabularyEntry => {
      const number = index + 1;
      return {
        id: `audio-${number}`,
        modulo: "Módulo Teste",
        theme: "Test",
        portuguese: `a palavra ${number}`,
        english: `word ${number}`,
        zhHans: `词 ${number}`,
        zhHant: `詞 ${number}`,
        source: "seed"
      };
    });
    const scope: ModuleQuizScope = {
      id: "audio-scope",
      modulo: "Módulo Teste",
      label: "Módulo Teste",
      entries,
      startIndex: 0,
      endIndex: entries.length
    };
    const play = vi.mocked(window.HTMLMediaElement.prototype.play);

    render(
      <StrictMode>
        <ModuleQuiz
          scopes={[scope]}
          allEntries={entries}
          direction="pt-en"
          ui={getUiCopy("pt-en")}
          onComplete={vi.fn()}
          onExit={vi.fn()}
        />
      </StrictMode>
    );

    await waitFor(() => {
      expect(play).toHaveBeenCalledTimes(1);
    });

    fireEvent.click(screen.getByRole("button", { name: /listen/i }));
    expect(play).toHaveBeenCalledTimes(2);
  });

  it("locks choices, shows feedback, and waits for Next before advancing", () => {
    const entries = createClozeEntries();
    const scope = createScope(entries);

    const { container } = render(
      <ModuleQuiz
        scopes={[scope]}
        allEntries={entries}
        direction="pt-en"
        ui={getUiCopy("pt-en")}
        onComplete={vi.fn()}
        onExit={vi.fn()}
      />
    );

    const initialSegments = container.querySelectorAll(".module-quiz-progress-segment").length;
    const choices = screen.getAllByRole("button").filter((button) => button.closest(".module-quiz-choices"));
    fireEvent.click(choices[0]);

    expect(choices.every((choice) => choice.hasAttribute("disabled"))).toBe(true);
    const wasCorrect = choices[0].classList.contains("is-correct");
    if (!wasCorrect) {
      expect(container.querySelectorAll(".module-quiz-choice.is-correct")).toHaveLength(1);
      expect(choices[0]).toHaveClass("is-incorrect");
    }

    expect(container.querySelector(".module-quiz-top-row strong")).toHaveTextContent(`1 / ${initialSegments}`);
    expect(screen.getByRole("button", { name: "Next" })).toBeEnabled();

    fireEvent.click(screen.getByRole("button", { name: "Next" }));
    expect(container.querySelector(".module-quiz-top-row strong")).toHaveTextContent("2 /");
    expect(container.querySelectorAll(".module-quiz-progress-segment")).toHaveLength(initialSegments + (wasCorrect ? 0 : 1));
  });

  it("requires two taps to exit without scoring the active question", () => {
    const entries = createClozeEntries();
    const onExit = vi.fn();
    const onComplete = vi.fn();

    render(
      <ModuleQuiz
        scopes={[createScope(entries)]}
        allEntries={entries}
        direction="pt-en"
        ui={getUiCopy("pt-en")}
        onComplete={onComplete}
        onExit={onExit}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: "Exit quiz" }));
    expect(onExit).not.toHaveBeenCalled();
    fireEvent.click(screen.getByRole("button", { name: "Tap again to exit" }));
    expect(onExit).toHaveBeenCalledTimes(1);
    expect(onComplete).not.toHaveBeenCalled();
  });
});

function createClozeEntries(): VocabularyEntry[] {
  return Array.from({ length: 4 }, (_, index) => {
    const number = index + 1;
    return {
      id: `cloze-${number}`,
      modulo: "Módulo Teste",
      theme: "Test",
      portuguese: `palavra${number}`,
      english: `word ${number}`,
      zhHans: `词 ${number}`,
      zhHant: `詞 ${number}`,
      examplePt: `Uso palavra${number} hoje.`,
      exampleEn: `I use word ${number} today.`,
      source: "seed"
    };
  });
}

function createScope(entries: VocabularyEntry[]): ModuleQuizScope {
  return {
    id: "cloze-scope",
    modulo: "Módulo Teste",
    label: "Módulo Teste",
    entries,
    startIndex: 0,
    endIndex: entries.length
  };
}
