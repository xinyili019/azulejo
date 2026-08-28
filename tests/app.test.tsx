import { act, fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import App from "../src/App";
import { situacaoDialogueLines } from "../src/data/situacoes";
import { vocabulary } from "../src/data/vocabulary";
import { wordBank } from "../src/data/wordBank";
import { getActiveSession, getProgress, getSetting, importAll } from "../src/lib/storage";

const STUDY_TOUR_COPY = [
  "Tap ‹ to go back and switch between Manual and Situações.",
  "Use this menu to choose the module you want to study.",
  "Tap the tile to check the meaning.",
  "Tap Again if you want to see this word again soon.",
  "Tap Known if you've got it. It'll come back later, less often.",
  "Swipe right on the tile, or tap here, to go back a word.",
  "Test yourself on the words you've studied. After 40 words, a quiz will appear automatically."
];

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

function toggleAutoAudio() {
  fireEvent.click(screen.getByRole("button", { name: /settings/i }));
  fireEvent.click(screen.getByRole("checkbox", { name: /auto audio/i }));
  fireEvent.click(screen.getByRole("button", { name: /settings/i }));
}

describe("App", () => {
  beforeEach(async () => {
    await importAll({
      app: "azulejo",
      progress: {},
      settings: { translationLanguage: "pt-en", guidedTour: { completed: true, step: 6 } },
      lastLocation: {
        view: "manual",
        params: { modulo: "Módulo 1", direction: "pt-en" },
        updatedAt: new Date().toISOString()
      }
    });
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
        moduleOrScenarioId: "Módulo 1",
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
      settings: { guidedTour: { completed: true, step: 6 } },
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
      settings: { guidedTour: { completed: true, step: 6 } },
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
    }, { timeout: 3000 });
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

  it("keeps previous word disabled on a casa without the replaced static instruction", () => {
    render(<App />);

    expect(screen.getByRole("button", { name: /previous word/i })).toBeDisabled();
    fireEvent.click(screen.getByRole("button", { name: /reveal/i }));
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

    fireEvent.click(screen.getByRole("button", { name: /back to modes/i }));
    fireEvent.change(screen.getByLabelText(/language/i), { target: { value: "pt-zh-hans" } });
    fireEvent.click(screen.getByRole("button", { name: /^课本/ }));
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

  it("renders the entry screen and navigates to Manual and back", async () => {
    await importAll({
      app: "azulejo",
      progress: {},
      settings: { translationLanguage: "pt-en", guidedTour: { completed: true, step: 6 } }
    });
    render(<App />);

    expect(screen.getByText("European Portuguese A1 + A2")).toBeInTheDocument();
    expect(screen.getAllByRole("heading", { name: "Azulejo" })).toHaveLength(1);
    expect(screen.getByText("your Portuguese, tile by tile")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /manual work through the 12 textbook modules/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /situation learn by real-life situation/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /settings/i })).toBeInTheDocument();
    const languageSelect = screen.getByLabelText(/language/i);
    expect(languageSelect).toBeInTheDocument();
    expect(screen.queryByText(/select your study mode|change the language on this screen/i)).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /manual work through/i }));

    const moduleSelect = screen.getByLabelText(/module/i);
    const moduleOptions = within(moduleSelect).getAllByRole("option");
    expect(moduleSelect).toHaveValue("Módulo 1");
    expect(screen.getByRole("option", { name: "Módulo 1 · Basics - Básico" })).toBeInTheDocument();
    expect(moduleOptions.at(-1)).toHaveValue("all");
    expect(screen.queryByLabelText(/language/i)).not.toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "Azulejo" })).not.toBeInTheDocument();
    expect(screen.getByText("1 · Basics", { selector: ".module-row > span" })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /back to modes/i }));
    expect(screen.getByRole("heading", { name: "Azulejo" })).toBeInTheDocument();
  });

  it("restores the last study mode saved within 30 days", async () => {
    await importAll({
      app: "azulejo",
      progress: {},
      settings: { translationLanguage: "pt-en", guidedTour: { completed: true, step: 6 } },
      lastLocation: {
        view: "situacoes",
        params: { situacaoId: "banco", situacaoTab: "dialogo", direction: "pt-en" },
        updatedAt: new Date(Date.now() - 29 * 24 * 60 * 60 * 1000).toISOString()
      }
    });

    render(<App />);

    expect(await screen.findByText("Boa tarde, queria abrir uma conta à ordem.")).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Dialogue" })).toHaveAttribute("aria-selected", "true");
    expect(screen.queryByRole("heading", { name: "Azulejo" })).not.toBeInTheDocument();
  });

  it("localizes entry modes as 课本 and 場景 and preserves Manual state", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: /reveal/i }));
    expect(screen.getByText(vocabulary[0].english)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /back to modes/i }));
    fireEvent.click(screen.getByRole("button", { name: /^situation/i }));
    fireEvent.click(screen.getByRole("button", { name: /back to modes/i }));
    fireEvent.click(screen.getByRole("button", { name: /^manual/i }));
    expect(screen.getByText(vocabulary[0].english)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /back to modes/i }));
    fireEvent.change(screen.getByLabelText(/language/i), { target: { value: "pt-zh-hans" } });
    expect(screen.getByRole("button", { name: /^课本/ })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^场景/ })).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /^课本/ }));
    expect(screen.getByRole("option", { name: "模块 1 · 基础 - Básico" })).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /back to modes/i }));
    fireEvent.click(screen.getByRole("button", { name: /^场景/ }));
    expect(screen.getByRole("option", { name: "兽医 · Veterinário" })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /back to modes/i }));
    fireEvent.change(screen.getByLabelText("语言"), { target: { value: "pt-zh-hant" } });
    expect(screen.getByRole("button", { name: /^課本/ })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^場景/ })).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /^課本/ }));
    expect(screen.getByRole("option", { name: "模組 1 · 基礎 - Básico" })).toBeInTheDocument();
  });

  it("switches to Situations with vocabulary, dialogue, card, and readiness views", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: /back to modes/i }));
    fireEvent.click(screen.getByRole("button", { name: /^situation/i }));

    expect(screen.getByRole("combobox", { name: "Situação" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "Vet · Veterinário" })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Vocabulary" })).toHaveAttribute("aria-selected", "true");
    expect(screen.getByRole("progressbar", { name: "Bureaucracy readiness" })).toBeInTheDocument();
    expect(screen.getByRole("progressbar", { name: "Practical life readiness" })).toBeInTheDocument();
    expect(screen.getByRole("progressbar", { name: "Work readiness" })).toBeInTheDocument();

    const bureaucracySection = screen.getByText("Bureaucracy").closest("details");
    expect(bureaucracySection).not.toHaveAttribute("open");
    fireEvent.click(screen.getByText("Bureaucracy"));
    expect(bureaucracySection).toHaveAttribute("open");
    expect(within(bureaucracySection!).getByText("Bank", { selector: ".module-row > span" })).toBeVisible();
    expect(screen.queryByText(/Banco 0%/)).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("tab", { name: "Dialogue" }));
    expect(screen.getByText("Boa tarde, queria abrir uma conta à ordem.")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("tab", { name: "Cheat sheet" }));
    expect(screen.getByRole("button", { name: "Print" })).toBeInTheDocument();
  });

  it("alternates dialogue speakers, toggles translations, and plays every line in order", () => {
    const endedListeners: EventListener[] = [];
    const playedSources: string[] = [];
    const audioSpy = vi.spyOn(window, "Audio").mockImplementation((source?: string | MediaStream) => {
      const audio = {
        volume: 1,
        pause: vi.fn(),
        play: vi.fn(() => {
          playedSources.push(String(source));
          return Promise.resolve();
        }),
        addEventListener: vi.fn((type: string, listener: EventListenerOrEventListenerObject) => {
          if (type === "ended" && typeof listener === "function") endedListeners.push(listener);
        })
      };
      return audio as unknown as HTMLAudioElement;
    });

    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: /back to modes/i }));
    fireEvent.click(screen.getByRole("button", { name: /^situation/i }));
    fireEvent.click(screen.getByRole("tab", { name: "Dialogue" }));

    const dialogue = situacaoDialogueLines.filter((line) => line.situacao === "banco");
    const firstPortuguese = screen.getByText(dialogue[0].pt);
    const secondPortuguese = screen.getByText(dialogue[1].pt);
    expect(firstPortuguese.closest(".dialogue-turn")).toHaveClass("is-learner");
    expect(secondPortuguese.closest(".dialogue-turn")).toHaveClass("is-other");
    expect(screen.queryByText(dialogue[0].en)).not.toBeInTheDocument();

    fireEvent.click(firstPortuguese);
    expect(screen.getByText(dialogue[0].en)).toBeInTheDocument();
    fireEvent.click(firstPortuguese.closest(".dialogue-turn")!);
    expect(screen.queryByText(dialogue[0].en)).not.toBeInTheDocument();

    vi.useFakeTimers();
    fireEvent.click(screen.getByRole("button", { name: /play dialogue/i }));
    expect(playedSources[0]).toContain(`${dialogue[0].id}.m4a`);

    for (let index = 0; index < dialogue.length; index += 1) {
      const ended = endedListeners.shift();
      expect(ended).toBeDefined();
      act(() => ended?.(new Event("ended")));
      if (index < dialogue.length - 1) act(() => vi.advanceTimersByTime(300));
    }

    expect(playedSources).toHaveLength(dialogue.length);
    expect(playedSources.map((source) => source.slice(source.lastIndexOf("/") + 1))).toEqual(
      dialogue.map((line) => `${line.id}.m4a`)
    );
    audioSpy.mockRestore();
  });

  it("runs and persists the seven-step Manual walkthrough", async () => {
    await importAll({ app: "azulejo", progress: {}, settings: { translationLanguage: "pt-en" } });
    const { unmount } = render(<App />);

    expect(screen.queryByText(STUDY_TOUR_COPY[0])).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /manual work through/i }));

    expect(await screen.findByText(STUDY_TOUR_COPY[0])).toBeInTheDocument();
    expect(screen.getByText("1 / 7")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Got it" }));

    expect(await screen.findByText(STUDY_TOUR_COPY[1])).toBeInTheDocument();
    expect(screen.getByText("2 / 7")).toBeInTheDocument();
    fireEvent.click(screen.getAllByRole("button", { name: "Continue tour" })[0]);

    expect(await screen.findByText(STUDY_TOUR_COPY[2])).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /reveal/i })).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Got it" }));

    expect(await screen.findByText(STUDY_TOUR_COPY[3])).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Got it" }));
    expect(await screen.findByText(STUDY_TOUR_COPY[4])).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Got it" }));
    expect(await screen.findByText(STUDY_TOUR_COPY[5])).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Got it" }));
    expect(await screen.findByText(STUDY_TOUR_COPY[6])).toBeInTheDocument();
    expect(screen.getByText("7 / 7")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Got it" }));

    await waitFor(async () => {
      expect(await getSetting("guidedTour")).toEqual({ completed: true, step: 7 });
      expect(screen.queryByRole("dialog", { name: /tour/i })).not.toBeInTheDocument();
    });

    unmount();
    render(<App />);
    await screen.findByRole("button", { name: /hide answer|reveal/i });
    expect(screen.queryByText(STUDY_TOUR_COPY[0])).not.toBeInTheDocument();
  });

  it("shows only steps 1, 2, 7, and 8 on the first Situation entry after Manual", async () => {
    await importAll({ app: "azulejo", progress: {}, settings: { translationLanguage: "pt-en" } });
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: /manual work through/i }));
    for (let step = 0; step < 7; step += 1) {
      fireEvent.click(await screen.findByRole("button", { name: "Got it" }));
    }
    expect(screen.queryByRole("dialog", { name: /tour/i })).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /back to modes/i }));
    fireEvent.click(screen.getByRole("button", { name: /situation learn by real-life/i }));

    expect(await screen.findByText(STUDY_TOUR_COPY[0])).toBeInTheDocument();
    expect(screen.getByText("1 / 8")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Got it" }));

    expect(
      await screen.findByText("Use this menu to choose the real-life situation you want to practise.")
    ).toBeInTheDocument();
    expect(screen.getByText("2 / 8")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Got it" }));

    expect(
      await screen.findByText(
        "Practise real-life conversations in Dialogue, and use Cheat sheet to review key phrases at a glance."
      )
    ).toBeInTheDocument();
    expect(screen.getByText("7 / 8")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Got it" }));

    expect(await screen.findByText("In Dialogue, tap any sentence to reveal its meaning.")).toBeInTheDocument();
    expect(screen.getByText("8 / 8")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Got it" }));

    await waitFor(async () => {
      expect(await getSetting("situacaoTourCompleted")).toBe(true);
      expect(screen.queryByRole("dialog", { name: /tour/i })).not.toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole("button", { name: /back to modes/i }));
    fireEvent.click(screen.getByRole("button", { name: /situation learn by real-life/i }));
    expect(screen.queryByRole("dialog", { name: /tour/i })).not.toBeInTheDocument();
  });

  it("shows only steps 1, 2, and 7 on the first Manual entry after Situation", async () => {
    await importAll({ app: "azulejo", progress: {}, settings: { translationLanguage: "pt-en" } });
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: /situation learn by real-life/i }));
    for (let step = 0; step < 8; step += 1) {
      fireEvent.click(await screen.findByRole("button", { name: "Got it" }));
    }
    expect(screen.queryByRole("dialog", { name: /tour/i })).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /back to modes/i }));
    fireEvent.click(screen.getByRole("button", { name: /manual work through/i }));

    expect(await screen.findByText(STUDY_TOUR_COPY[0])).toBeInTheDocument();
    expect(screen.getByText("1 / 7")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Got it" }));

    expect(await screen.findByText(STUDY_TOUR_COPY[1])).toBeInTheDocument();
    expect(screen.getByText("2 / 7")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Got it" }));

    expect(await screen.findByText(STUDY_TOUR_COPY[6])).toBeInTheDocument();
    expect(screen.getByText("7 / 7")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Got it" }));

    await waitFor(async () => {
      expect(await getSetting("manualTourCompleted")).toBe(true);
      expect(screen.queryByRole("dialog", { name: /tour/i })).not.toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole("button", { name: /back to modes/i }));
    fireEvent.click(screen.getByRole("button", { name: /manual work through/i }));
    expect(screen.queryByRole("dialog", { name: /tour/i })).not.toBeInTheDocument();
  });

  it("adds Dialogue and Cheat sheet guidance to the eight-step Situações walkthrough", async () => {
    await importAll({ app: "azulejo", progress: {}, settings: { translationLanguage: "pt-en" } });
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: /situation learn by real-life/i }));

    expect(await screen.findByText(STUDY_TOUR_COPY[0])).toBeInTheDocument();
    expect(screen.getByText("1 / 8")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Got it" }));
    expect(
      await screen.findByText("Use this menu to choose the real-life situation you want to practise.")
    ).toBeInTheDocument();
    expect(screen.getByText("2 / 8")).toBeInTheDocument();

    for (let step = 2; step < 7; step += 1) {
      fireEvent.click(screen.getByRole("button", { name: "Got it" }));
    }

    expect(
      await screen.findByText(
        "Practise real-life conversations in Dialogue, and use Cheat sheet to review key phrases at a glance."
      )
    ).toBeInTheDocument();
    expect(screen.getByText("7 / 8")).toBeInTheDocument();
    expect(document.querySelectorAll(".situacao-conversation-tab.tour-spotlight-target")).toHaveLength(2);
    fireEvent.click(screen.getByRole("button", { name: "Got it" }));

    expect(await screen.findByText("In Dialogue, tap any sentence to reveal its meaning.")).toBeInTheDocument();
    expect(screen.getByText("8 / 8")).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Dialogue" })).toHaveAttribute("aria-selected", "true");
    fireEvent.click(screen.getByRole("button", { name: "Skip tour" }));

    await waitFor(async () => {
      expect(await getSetting("guidedTour")).toEqual({ completed: true, step: 8 });
    });
    fireEvent.click(screen.getByRole("button", { name: /settings/i }));
    fireEvent.click(screen.getByRole("button", { name: "Replay tour" }));

    expect(await screen.findByText(STUDY_TOUR_COPY[0])).toBeInTheDocument();
    expect(screen.getByText("1 / 8")).toBeInTheDocument();
  });

  it.each([
    {
      direction: "pt-zh-hans" as const,
      mode: "课本",
      copy: "点击 ‹ 返回并切换“课本”和“场景”。",
      settings: "设置",
      skip: "跳过导览",
      replay: "重新查看导览"
    },
    {
      direction: "pt-zh-hant" as const,
      mode: "課本",
      copy: "點擊 ‹ 返回並切換「課本」和「場景」。",
      settings: "設定",
      skip: "略過導覽",
      replay: "重新查看導覽"
    }
  ])("localizes every walkthrough control for $direction", async ({ direction, mode, copy, settings, skip, replay }) => {
    await importAll({ app: "azulejo", progress: {}, settings: {} });
    render(<App />);

    fireEvent.change(screen.getByRole("combobox", { name: "Language" }), { target: { value: direction } });
    fireEvent.click(screen.getByRole("button", { name: new RegExp(`^${mode}`) }));
    expect(await screen.findByText(copy)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: skip })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "了解" })).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: skip }));
    fireEvent.click(screen.getByRole("button", { name: settings }));
    expect(screen.getByRole("button", { name: replay })).toBeInTheDocument();
  });

  it("lets users go back to the previous word", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: /reveal/i }));
    fireEvent.click(screen.getByRole("button", { name: /known/i }));
    fireEvent.click(screen.getByRole("button", { name: /previous word/i }));

    expect(screen.getByRole("button", { name: /reveal/i })).toHaveTextContent(vocabulary[0].portuguese);
  });

  it("shows each new word front-side-first without animating through its translation", () => {
    render(<App />);

    const firstTile = screen.getByRole("button", { name: /reveal/i });
    fireEvent.click(firstTile);
    expect(firstTile).toHaveClass("is-revealed");

    fireEvent.click(screen.getByRole("button", { name: /known/i }));

    const nextTile = screen.getByRole("button", { name: /reveal/i });
    expect(nextTile).not.toBe(firstTile);
    expect(nextTile).toHaveTextContent(vocabulary[1].portuguese);
    expect(nextTile).toHaveAttribute("aria-pressed", "false");
    expect(nextTile).not.toHaveClass("is-revealed");

    fireEvent.click(nextTile);
    expect(nextTile).toHaveClass("is-revealed");
  });

  it("places previous word below the revealed review actions", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: /reveal/i }));
    fireEvent.click(screen.getByRole("button", { name: /known/i }));
    fireEvent.click(screen.getByRole("button", { name: /reveal/i }));

    const controls = screen
      .getAllByRole("button")
      .map((button) => button.textContent?.trim())
      .filter((text) => text === "Listen" || text === "Again" || text === "Known" || text === "Previous word");

    expect(controls).toEqual(["Again", "Known", "Previous word"]);
  });

  it("uses a right tile swipe only to revisit the previous word without changing progress", async () => {
    render(<App />);
    toggleAutoAudio();

    let tile = screen.getByRole("button", { name: /reveal/i });
    const swipe = (start: { x: number; y: number }, end: { x: number; y: number }) => {
      fireEvent.touchStart(tile, { touches: [{ clientX: start.x, clientY: start.y }] });
      fireEvent.touchMove(tile, { touches: [{ clientX: end.x, clientY: end.y }] });
      fireEvent.touchEnd(tile, { changedTouches: [{ clientX: end.x, clientY: end.y }] });
    };

    swipe({ x: 20, y: 200 }, { x: 120, y: 215 });
    expect(tile).toHaveTextContent(vocabulary[0].portuguese);

    fireEvent.click(tile);
    fireEvent.click(screen.getByRole("button", { name: /known/i }));
    tile = screen.getByRole("button", { name: /reveal/i });
    expect(tile).toHaveTextContent(vocabulary[1].portuguese);

    await waitFor(async () => {
      expect(Object.values(await getProgress()).filter((entry) => entry.status === "known")).toHaveLength(1);
    });
    const progressBeforeSwipe = await getProgress();
    const secondWordText = tile.textContent;

    swipe({ x: 180, y: 200 }, { x: 80, y: 210 });
    expect(tile.textContent).toBe(secondWordText);

    swipe({ x: 40, y: 100 }, { x: 70, y: 210 });
    expect(tile.textContent).toBe(secondWordText);

    swipe({ x: 20, y: 200 }, { x: 120, y: 215 });
    expect(tile).toHaveTextContent(vocabulary[0].portuguese);
    expect(tile).toHaveAttribute("aria-pressed", "false");
    expect(await getProgress()).toEqual(progressBeforeSwipe);
  });

  it("starts the next 20-word session after typed session review instead of showing a previous-session word", () => {
    render(<App />);
    toggleAutoAudio();

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
    toggleAutoAudio();

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
    toggleAutoAudio();

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
    toggleAutoAudio();

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
    toggleAutoAudio();

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
    const directions = ["pt-en", "pt-zh-hant", "pt-zh-hans"];

    for (const direction of directions) {
      fireEvent.click(screen.getByRole("button", { name: /back to modes/i }));
      const languageSelect = screen.getByLabelText(/language|语言|語言/i);
      fireEvent.change(languageSelect, { target: { value: direction } });
      fireEvent.click(screen.getByRole("button", { name: /^(manual|课本|課本)/i }));

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

    fireEvent.click(screen.getByRole("button", { name: /settings/i }));
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

    fireEvent.click(screen.getByRole("button", { name: /back to modes/i }));
    fireEvent.click(screen.getByRole("button", { name: /^situation/i }));
    fireEvent.change(screen.getByRole("combobox", { name: "Situação" }), { target: { value: "financas" } });
    play.mockClear();
    speak.mockClear();
    fireEvent.click(screen.getByRole("button", { name: /listen/i }));

    expect(play).toHaveBeenCalledTimes(1);
    expect(speak).not.toHaveBeenCalled();
  });

  it("speaks rewritten Cartao text instead of playing its superseded recording", () => {
    render(<App />);
    const play = vi.mocked(window.HTMLMediaElement.prototype.play);
    const speak = vi.mocked(window.speechSynthesis.speak);

    fireEvent.click(screen.getByRole("button", { name: /back to modes/i }));
    fireEvent.click(screen.getByRole("button", { name: /^situation/i }));
    fireEvent.click(screen.getByRole("tab", { name: /cheat sheet/i }));
    play.mockClear();
    speak.mockClear();
    fireEvent.click(screen.getByRole("button", { name: /transferência imediata/i }));

    expect(play).not.toHaveBeenCalled();
    expect(speak).toHaveBeenCalledTimes(1);
    expect(speak.mock.calls[0][0]).toMatchObject({
      text: "Gostaria de saber mais sobre a transferência imediata.",
      lang: "pt-PT"
    });
  });

  it("plays the Portuguese example sentence from the example audio file", () => {
    render(<App />);
    const play = vi.mocked(window.HTMLMediaElement.prototype.play);

    fireEvent.click(screen.getByRole("button", { name: /reveal/i }));
    fireEvent.click(screen.getByRole("button", { name: /listen example/i }));

    expect(play).toHaveBeenCalledTimes(1);
  });

  it("uses two matching audio icons on the back without flipping the tile", () => {
    render(<App />);
    const play = vi.mocked(window.HTMLMediaElement.prototype.play);

    fireEvent.click(screen.getByRole("button", { name: /settings/i }));
    fireEvent.click(screen.getByRole("checkbox", { name: /auto audio/i }));
    fireEvent.click(screen.getByRole("button", { name: /settings/i }));
    fireEvent.click(screen.getByRole("button", { name: /reveal/i }));

    const tile = screen.getByRole("button", { name: /hide answer/i });
    const wordAudio = screen.getByRole("button", { name: /listen: casa/i });
    const exampleAudio = screen.getByRole("button", { name: /listen example/i });

    expect(screen.queryByRole("button", { name: /^listen$/i })).not.toBeInTheDocument();
    expect(wordAudio).toHaveClass("tile-audio-icon");
    expect(exampleAudio).toHaveClass("tile-audio-icon");

    fireEvent.click(wordAudio);
    expect(play).toHaveBeenCalledTimes(1);
    expect(tile).toHaveAttribute("aria-pressed", "true");

    fireEvent.click(exampleAudio);
    expect(play).toHaveBeenCalledTimes(2);
    expect(tile).toHaveAttribute("aria-pressed", "true");

    fireEvent.click(document.querySelector(".answer-reference") as HTMLElement);
    expect(tile).toHaveAttribute("aria-pressed", "true");
  });

  it("waits 250ms before automatic pronunciation playback", () => {
    vi.useFakeTimers();
    const play = vi.mocked(window.HTMLMediaElement.prototype.play);

    render(<App />);

    expect(play).not.toHaveBeenCalled();
    fireEvent.click(screen.getByRole("button", { name: /reveal/i }));
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
