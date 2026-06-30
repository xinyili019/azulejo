import { act, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import App from "../src/App";
import { vocabulary } from "../src/data/vocabulary";

describe("App", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("reveals a flashcard answer and records progress", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: /reveal/i }));
    expect(screen.getByText(vocabulary[0].english)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /known/i }));
    expect(localStorage.getItem("pt-a2-vocab-progress")).toContain("known");
  });

  it("shows a first-word tip on a casa and hides the previous word control there", () => {
    render(<App />);

    expect(screen.queryByRole("button", { name: /previous word/i })).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /reveal/i }));

    expect(screen.getByText(/tap the tile to flip back to the same word/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /got it/i })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /got it/i }));

    expect(screen.queryByText(/tap the tile to flip back to the same word/i)).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /previous word/i })).not.toBeInTheDocument();
  });

  it("shows the Portuguese example on flip and folds the translation behind a toggle", () => {
    render(<App />);

    expect(screen.queryByRole("button", { name: /translation/i })).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /reveal/i }));

    expect(screen.getAllByText("a casa").some((element) => element.classList.contains("answer-reference"))).toBe(true);
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

  it("keeps the flipped-card reference in the front prompt language", () => {
    render(<App />);

    const languageSelect = screen.getByLabelText(/language/i);

    fireEvent.change(languageSelect, { target: { value: "en-pt" } });
    fireEvent.click(screen.getByRole("button", { name: /reveal/i }));
    expect(screen.getAllByText("house; home").some((element) => element.classList.contains("answer-reference"))).toBe(
      true
    );
    expect(screen.getByText("a casa")).toHaveClass("answer");

    fireEvent.click(screen.getByRole("button", { name: /hide answer/i }));
    fireEvent.change(languageSelect, { target: { value: "zh-hans-pt" } });
    fireEvent.click(screen.getByRole("button", { name: "显示" }));
    expect(screen.getAllByText("房子/家").some((element) => element.classList.contains("answer-reference"))).toBe(true);
    expect(screen.getByText("a casa")).toHaveClass("answer");
  });

  it("does not render search controls", () => {
    render(<App />);

    expect(screen.queryByPlaceholderText(/term, theme, example/i)).not.toBeInTheDocument();
  });

  it("labels the direction selector as language", () => {
    render(<App />);

    expect(screen.getByLabelText(/language/i)).toBeInTheDocument();
    expect(screen.queryByLabelText(/mode/i)).not.toBeInTheDocument();
  });

  it("explains that the tile can be tapped to check the answer", () => {
    render(<App />);

    expect(screen.getByText(/know this word\? tap the tile to check!/i)).toBeInTheDocument();
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
    fireEvent.click(screen.getByRole("checkbox", { name: /play pronunciation automatically/i }));

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

  it("starts the next 20-word session after flashcard again review instead of replaying the reviewed word", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("checkbox", { name: /play pronunciation automatically/i }));

    fireEvent.click(screen.getByRole("button", { name: /reveal/i }));
    fireEvent.click(screen.getByRole("button", { name: /again/i }));

    for (let index = 1; index < 20; index += 1) {
      fireEvent.click(screen.getByRole("button", { name: /reveal/i }));
      fireEvent.click(screen.getByRole("button", { name: /known/i }));
    }

    fireEvent.click(screen.getByRole("button", { name: "Review new words" }));
    fireEvent.click(screen.getByRole("button", { name: /reveal/i }));
    fireEvent.click(screen.getByRole("button", { name: /known/i }));

    expect(screen.getByRole("button", { name: /reveal/i })).toHaveTextContent(vocabulary[20].portuguese);
  }, 10_000);

  it("starts the next 20-word session after reviewing missed recall words", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("checkbox", { name: /play pronunciation automatically/i }));

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

    expect(screen.getByRole("button", { name: /reveal/i })).toHaveTextContent(vocabulary[20].portuguese);
  }, 10_000);

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

    const autoPlayToggle = screen.getByRole("checkbox", { name: /play pronunciation automatically/i });
    expect(autoPlayToggle).toBeChecked();

    fireEvent.click(autoPlayToggle);
    expect(autoPlayToggle).not.toBeChecked();

    fireEvent.click(screen.getByRole("button", { name: /listen/i }));
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
