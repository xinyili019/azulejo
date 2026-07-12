import { act, fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import App from "../src/App";
import { vocabulary } from "../src/data/vocabulary";
import { wordBank } from "../src/data/wordBank";
import { getActiveSession, getProgress, importAll } from "../src/lib/storage";

function completeVisibleModuleQuiz() {
  let missedAnswerTexts: string[] = [];

  for (let question = 0; question < 20; question += 1) {
    const choices = within(screen.getByRole("list", { name: /multiple choice answers/i })).getAllByRole("button");
    fireEvent.click(choices[0]);
    const correctChoice = document.querySelector(".module-quiz-choice.is-correct span")?.textContent ?? "";
    if (correctChoice && correctChoice !== choices[0].textContent) {
      missedAnswerTexts.push(correctChoice);
    }
    fireEvent.click(screen.getByRole("button", { name: question === 19 ? /finish/i : /next/i }));
  }

  while (screen.queryByRole("button", { name: /retry missed/i })) {
    fireEvent.click(screen.getByRole("button", { name: /retry missed/i }));
    const nextMissedAnswerTexts: string[] = [];

    for (let question = 0; question < missedAnswerTexts.length; question += 1) {
      const choices = within(screen.getByRole("list", { name: /multiple choice answers/i })).getAllByRole("button");
      const answerText = missedAnswerTexts[question];
      const choice = choices.find((candidate) => candidate.textContent === answerText) ?? choices[0];
      fireEvent.click(choice);

      const correctChoice = document.querySelector(".module-quiz-choice.is-correct span")?.textContent ?? "";
      if (correctChoice && correctChoice !== choice.textContent) {
        nextMissedAnswerTexts.push(correctChoice);
      }

      fireEvent.click(screen.getByRole("button", { name: question === missedAnswerTexts.length - 1 ? /finish/i : /next/i }));
    }

    missedAnswerTexts = nextMissedAnswerTexts;
  }
}

function elementsWithText(text: string) {
  return Array.from(document.querySelectorAll("body *")).filter((element) => element.textContent?.trim() === text);
}

describe("App", () => {
  beforeEach(async () => {
    await importAll({ app: "azulejo", progress: {}, settings: {} });
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("reveals a flashcard answer and records progress", async () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: /reveal/i }));
    expect(screen.getByText(vocabulary[0].english)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /known/i }));
    await waitFor(async () => {
      expect(Object.values(await getProgress()).some((entry) => entry.status === "known")).toBe(true);
    });
  });

  it("persists active session position after every answered card", async () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: /reveal/i }));
    fireEvent.click(screen.getByRole("button", { name: /known/i }));

    await waitFor(async () => {
      expect(await getActiveSession()).toMatchObject({
        mode: "manual",
        moduleOrScenarioId: "all",
        direction: "pt-en",
        position: 1
      });
    });
  });

  it("boots into a fresh active session and resumes at the saved queue position", async () => {
    const now = new Date().toISOString();
    const queue = vocabulary.slice(0, 20).map((entry) => entry.id);
    await importAll({
      app: "azulejo",
      progress: {},
      settings: {},
      activeSession: {
        mode: "manual",
        moduleOrScenarioId: "all",
        direction: "pt-en",
        queue,
        position: 8,
        againQueue: [queue[1]],
        phase: "study",
        sessionIndex: 0,
        startedAt: now,
        updatedAt: now
      }
    });

    render(<App />);

    expect(await screen.findByText("Continue session (9/20)")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /^continue session$/i }));

    await waitFor(() => {
      expect(screen.getByRole("button", { name: /reveal/i })).toHaveTextContent(vocabulary[8].portuguese);
    });
  });

  it("clears the active session when the restored queue completes", async () => {
    const now = new Date().toISOString();
    const queue = [vocabulary[0].id];
    await importAll({
      app: "azulejo",
      progress: {},
      settings: {},
      activeSession: {
        mode: "manual",
        moduleOrScenarioId: "all",
        direction: "pt-en",
        queue,
        position: 0,
        againQueue: [],
        phase: "study",
        sessionIndex: 0,
        startedAt: now,
        updatedAt: now
      }
    });

    render(<App />);

    fireEvent.click(await screen.findByRole("button", { name: /^continue session$/i }));
    fireEvent.click(screen.getByRole("button", { name: /reveal/i }));
    fireEvent.click(screen.getByRole("button", { name: /known/i }));

    await waitFor(async () => {
      expect(await getActiveSession()).toBeUndefined();
    });
  });

  it("clears progress and restarts the session from the progress dashboard", async () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: /reveal/i }));
    fireEvent.click(screen.getByRole("button", { name: /known/i }));

    expect(screen.getByRole("button", { name: /reveal/i })).toHaveTextContent(vocabulary[1].portuguese);
    await waitFor(async () => {
      expect(Object.values(await getProgress()).some((entry) => entry.status === "known")).toBe(true);
    });

    fireEvent.click(screen.getByRole("button", { name: /start over/i }));

    expect(screen.getByRole("button", { name: /reveal/i })).toHaveTextContent(vocabulary[0].portuguese);
    await waitFor(async () => {
      expect(await getProgress()).toEqual({});
    });
    expect(screen.getByText("0%")).toBeInTheDocument();
  });

  it("renders the authorship fingerprint in hidden output", () => {
    const { container } = render(<App />);
    const fingerprint = container.querySelector("[data-fingerprint='azulejo.authorship.canary.XinyiLi.2026']");

    expect(fingerprint).toHaveAttribute("data-author", "XinyiLi");
    expect(fingerprint).toHaveTextContent("azulejo.authorship.canary.XinyiLi.2026");
  });

  it("shows add-to-home-screen instructions when no install prompt is available", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: /add to home screen/i }));

    expect(screen.getByText(/tap share/i)).toBeInTheDocument();
  });

  it("shows a first-word tip on a casa and disables the previous word control there", () => {
    render(<App />);

    expect(screen.getByRole("button", { name: /previous word/i })).toBeDisabled();

    fireEvent.click(screen.getByRole("button", { name: /reveal/i }));

    expect(screen.getByText(/tap the tile to flip back to the same word/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /got it/i })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /got it/i }));

    expect(screen.queryByText(/tap the tile to flip back to the same word/i)).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: /previous word/i })).toBeDisabled();
  });

  it("shows the Portuguese example on flip and folds the translation behind a toggle", () => {
    render(<App />);

    expect(screen.queryByRole("button", { name: /translation/i })).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /reveal/i }));

    expect(elementsWithText("a casa").some((element) => element.classList.contains("answer-reference"))).toBe(true);
    expect(document.querySelector(".answer-reference .pt-article")).toHaveTextContent("a");
    expect(screen.getByText("house; home")).toBeInTheDocument();
    expect(screen.getByText("A minha casa fica perto.")).toBeInTheDocument();

    const translationToggle = screen.getByRole("button", { name: /translation/i });
    const translationBody = screen.getByText("My house is nearby.").closest(".example-body");
    const tileBack = screen.getByText("My house is nearby.").closest(".tile-back");

    expect(translationToggle).toHaveAttribute("aria-expanded", "false");
    expect(translationBody).toHaveAttribute("aria-hidden", "true");
    expect(tileBack).not.toHaveClass("translation-is-open");

    fireEvent.click(translationToggle);

    expect(translationToggle).toHaveAttribute("aria-expanded", "true");
    expect(translationBody).toHaveAttribute("aria-hidden", "false");
    expect(tileBack).toHaveClass("translation-is-open");
    expect(screen.getByText("My house is nearby.")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /hide answer/i })).toBeInTheDocument();
  });

  it("uses the active Chinese writing system for example translations", () => {
    render(<App />);

    fireEvent.change(screen.getByLabelText(/language/i), { target: { value: "pt-zh-hans" } });
    fireEvent.click(screen.getByRole("button", { name: "显示" }));
    fireEvent.click(screen.getByRole("button", { name: "翻译" }));

    expect(screen.getByText("我家在附近。")).toBeInTheDocument();
    expect(screen.queryByText("My house is nearby.")).not.toBeInTheDocument();
  });

  it("opens a global word-bank search and updates shared status inline", async () => {
    const station = wordBank.find((entry) => entry.portuguese === "a estação de comboios");
    expect(station).toBeDefined();

    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: /^search$/i }));
    expect(screen.getByText(`${wordBank.length} words`)).toBeInTheDocument();
    expect(screen.queryByRole("searchbox", { name: /^search$/i })).not.toBeInTheDocument();

    fireEvent.change(screen.getByPlaceholderText(/Portuguese, English, or Chinese/i), { target: { value: "estacao" } });

    const headword = await screen.findByText("estação de comboios");
    const rowButton = headword.closest("button");
    expect(rowButton).not.toBeNull();
    expect(rowButton).toHaveTextContent("M2");
    expect(rowButton).toHaveTextContent("unseen");

    fireEvent.click(rowButton!);
    fireEvent.click(screen.getByRole("button", { name: /known/i }));

    await waitFor(async () => {
      expect((await getProgress())[station!.id]?.status).toBe("known");
    });
    expect(rowButton).toHaveTextContent("learned");

    fireEvent.click(screen.getByRole("button", { name: /again/i }));

    await waitFor(async () => {
      expect((await getProgress())[station!.id]?.status).toBe("again");
    });
    expect(rowButton).toHaveTextContent("in review");
  }, 30_000);

  it("labels the direction selector as language", () => {
    render(<App />);

    expect(screen.getByLabelText(/language/i)).toBeInTheDocument();
    expect(screen.getByRole("tablist", { name: /study mode/i })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Manual" })).toHaveAttribute("aria-selected", "true");
    expect(screen.getByText("Módulo 1 · Basics", { selector: ".module-row > span" })).toBeInTheDocument();
  });

  it("switches to Situações with vocabulary, dialogue, card, and readiness views", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("tab", { name: "Situações" }));

    expect(screen.getByRole("combobox", { name: "Situação" })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Vocabulário" })).toHaveAttribute("aria-selected", "true");
    expect(screen.getByText("Banco", { selector: ".module-row > span" })).toBeInTheDocument();
    expect(screen.queryByText(/Banco 0%/)).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("tab", { name: "Diálogo" }));
    expect(screen.getByText("Boa tarde, queria abrir uma conta à ordem.")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("tab", { name: "Cartão" }));
    expect(screen.getByRole("button", { name: "Print" })).toBeInTheDocument();
  });

  it("explains that the tile can be tapped to check the answer", () => {
    render(<App />);

    expect(screen.getAllByText(/know this word\? tap the tile to check!/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getByRole("button", { name: /reveal/i })).toHaveAccessibleDescription(
      /know this word\? tap the tile to check!/i
    );
  });

  it("lets users go back to the previous word", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: /reveal/i }));
    fireEvent.click(screen.getByRole("button", { name: /known/i }));
    fireEvent.click(screen.getByRole("button", { name: /previous word/i }));

    expect(screen.getByRole("button", { name: /reveal/i })).toHaveTextContent(vocabulary[0].portuguese);
  });

  it("places previous word before the revealed review actions", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: /reveal/i }));
    fireEvent.click(screen.getByRole("button", { name: /known/i }));
    fireEvent.click(screen.getByRole("button", { name: /reveal/i }));

    const controls = screen
      .getAllByRole("button")
      .map((button) => button.textContent?.trim())
      .filter((text) => text === "Listen" || text === "Again" || text === "Known" || text === "Previous word");

    expect(controls).toEqual(["Previous word", "Listen", "Again", "Known"]);
  });

  it("starts the next 20-word session after typed session review instead of showing a previous-session word", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("checkbox", { name: /auto audio/i }));

    fireEvent.click(screen.getByRole("button", { name: /reveal/i }));
    fireEvent.click(screen.getByRole("button", { name: /again/i }));

    for (let index = 1; index < 20; index += 1) {
      fireEvent.click(screen.getByRole("button", { name: /reveal/i }));
      fireEvent.click(screen.getByRole("button", { name: /known/i }));
    }

    fireEvent.click(screen.getByRole("button", { name: "Recall new words" }));
    fireEvent.click(screen.getByRole("button", { name: "Reveal" }));
    fireEvent.click(screen.getByRole("button", { name: "Finish" }));

    expect(screen.getByText("Session review complete")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Start next session" }));

    expect(screen.getByRole("button", { name: /reveal/i })).toHaveTextContent(vocabulary[20].portuguese);
  }, 10_000);

  it("opens the first module quiz after the 40-word session boundary", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("checkbox", { name: /auto audio/i }));

    for (let index = 0; index < 20; index += 1) {
      fireEvent.click(screen.getByRole("button", { name: /reveal/i }));
      fireEvent.click(screen.getByRole("button", { name: /known/i }));
    }

    fireEvent.click(screen.getByRole("button", { name: "Start next session" }));

    for (let index = 20; index < 40; index += 1) {
      fireEvent.click(screen.getByRole("button", { name: /reveal/i }));
      fireEvent.click(screen.getByRole("button", { name: /known/i }));
    }

    fireEvent.click(screen.getByRole("button", { name: "Start next session" }));

    expect(screen.queryByLabelText(/quiz scope/i)).not.toBeInTheDocument();
    expect(document.querySelector(".module-control")).not.toBeInTheDocument();
    expect(document.querySelector(".language-control")).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Exit quiz" })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /fresh 20/i })).not.toBeInTheDocument();
  }, 10_000);

  it("starts the next 20-word session after flashcard again review instead of replaying the reviewed word", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("checkbox", { name: /auto audio/i }));

    fireEvent.click(screen.getByRole("button", { name: /reveal/i }));
    fireEvent.click(screen.getByRole("button", { name: /again/i }));

    for (let index = 1; index < 20; index += 1) {
      fireEvent.click(screen.getByRole("button", { name: /reveal/i }));
      fireEvent.click(screen.getByRole("button", { name: /known/i }));
    }

    fireEvent.click(screen.getByRole("button", { name: "Review new words" }));
    fireEvent.click(screen.getByRole("button", { name: /reveal/i }));
    expect(screen.queryByText(/tap the tile to flip back to the same word/i)).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /known/i }));

    expect(screen.getByText("Session review complete")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Start next session" }));

    expect(screen.getByRole("button", { name: /reveal/i })).toHaveTextContent(vocabulary[20].portuguese);
  }, 10_000);

  it("starts the next 20-word session after reviewing missed recall words", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("checkbox", { name: /auto audio/i }));

    fireEvent.click(screen.getByRole("button", { name: /reveal/i }));
    fireEvent.click(screen.getByRole("button", { name: /again/i }));

    for (let index = 1; index < 20; index += 1) {
      fireEvent.click(screen.getByRole("button", { name: /reveal/i }));
      fireEvent.click(screen.getByRole("button", { name: /known/i }));
    }

    fireEvent.click(screen.getByRole("button", { name: "Recall new words" }));
    fireEvent.click(screen.getByRole("button", { name: "Reveal" }));
    fireEvent.click(screen.getByRole("button", { name: "Finish" }));
    expect(screen.getByText("Session review complete")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Review new words" }));
    expect(screen.getByRole("button", { name: /reveal/i })).toHaveTextContent(vocabulary[0].portuguese);
    fireEvent.click(screen.getByRole("button", { name: /reveal/i }));
    fireEvent.click(screen.getByRole("button", { name: /known/i }));

    expect(screen.getByText("Session review complete")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Start next session" }));

    expect(screen.getByRole("button", { name: /reveal/i })).toHaveTextContent(vocabulary[20].portuguese);
  }, 10_000);

  it("starts the next selected module after finishing the current selected module", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("checkbox", { name: /auto audio/i }));

    fireEvent.change(screen.getByLabelText(/module/i), { target: { value: "Módulo 1" } });

    const moduleOneEntries = vocabulary.filter((entry) => entry.modulo === "Módulo 1");
    const firstModuleTwoEntry = vocabulary.find((entry) => entry.modulo === "Módulo 2");

    for (let index = 0; index < moduleOneEntries.length; index += 1) {
      fireEvent.click(screen.getByRole("button", { name: /reveal/i }));
      fireEvent.click(screen.getByRole("button", { name: /known/i }));

      const startNextSession = screen.queryByRole("button", { name: "Start next session" });
      if (startNextSession) {
        fireEvent.click(startNextSession);
        if (screen.queryByRole("list", { name: /multiple choice answers/i })) {
          completeVisibleModuleQuiz();
          fireEvent.click(screen.getByRole("button", { name: "Start next session" }));
        }
      }
    }

    fireEvent.click(screen.getAllByRole("button", { name: "Start quiz" }).at(-1) as HTMLElement);
    expect(screen.queryByLabelText(/quiz scope/i)).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Exit quiz" }));
    fireEvent.click(screen.getByRole("button", { name: "Tap again to exit" }));

    fireEvent.click(screen.getByRole("button", { name: "Start new module" }));

    expect(screen.getByLabelText(/module/i)).toHaveValue("Módulo 2");
    expect(screen.getByRole("button", { name: /reveal/i })).toHaveTextContent(firstModuleTwoEntry?.portuguese ?? "");
  }, 20_000);

  it("keeps listen below the tile with the flashcard controls in every language mode", () => {
    const { container } = render(<App />);
    const languageSelect = screen.getByLabelText(/language/i);
    const directions = Array.from(languageSelect.querySelectorAll("option")).map((option) => option.value);

    for (const direction of directions) {
      fireEvent.change(languageSelect, { target: { value: direction } });

      const tileShell = container.querySelector(".tile-shell");
      const flashcardControls = container.querySelector(".flashcard-controls");
      const listenButton = container.querySelector(".pronunciation-control");

      expect(tileShell).not.toContainElement(listenButton);
      expect(flashcardControls).toContainElement(listenButton);
    }
  });

  it("lets users turn off automatic pronunciation while keeping manual playback", () => {
    render(<App />);
    const play = vi.mocked(window.HTMLMediaElement.prototype.play);

    const autoPlayToggle = screen.getByRole("checkbox", { name: /auto audio/i });
    expect(autoPlayToggle).toBeChecked();

    fireEvent.click(autoPlayToggle);
    expect(autoPlayToggle).not.toBeChecked();

    fireEvent.click(screen.getByRole("button", { name: /listen/i }));
    expect(play).toHaveBeenCalledTimes(1);
  });

  it("uses generated audio for situation-only vocabulary pronunciation", () => {
    render(<App />);
    const play = vi.mocked(window.HTMLMediaElement.prototype.play);
    const speak = vi.mocked(window.speechSynthesis.speak);

    fireEvent.click(screen.getByRole("tab", { name: "Situações" }));
    fireEvent.change(screen.getByRole("combobox", { name: "Situação" }), { target: { value: "financas" } });
    play.mockClear();
    speak.mockClear();
    fireEvent.click(screen.getByRole("button", { name: /listen/i }));

    expect(play).toHaveBeenCalledTimes(1);
    expect(speak).not.toHaveBeenCalled();
  });

  it("plays the Portuguese example sentence from the example audio file", () => {
    render(<App />);
    const play = vi.mocked(window.HTMLMediaElement.prototype.play);

    fireEvent.click(screen.getByRole("button", { name: /reveal/i }));
    fireEvent.click(screen.getByRole("button", { name: /listen example/i }));

    expect(play).toHaveBeenCalledTimes(1);
  });

  it("waits 250ms before automatic pronunciation playback", () => {
    vi.useFakeTimers();
    const play = vi.mocked(window.HTMLMediaElement.prototype.play);

    render(<App />);

    expect(play).not.toHaveBeenCalled();

    act(() => {
      vi.advanceTimersByTime(249);
    });
    expect(play).not.toHaveBeenCalled();

    act(() => {
      vi.advanceTimersByTime(1);
    });
    expect(play).toHaveBeenCalledTimes(1);
  });

});
