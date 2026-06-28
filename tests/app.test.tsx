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

    fireEvent.click(screen.getByRole("button", { name: /reveal answer/i }));
    expect(screen.getByText(vocabulary[0].english)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /known/i }));
    expect(localStorage.getItem("pt-a2-vocab-progress")).toContain("known");
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

  it("explains that the card can be tapped to reveal the meaning", () => {
    render(<App />);

    expect(screen.getByText(/tap the card to see what it means/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /reveal answer/i })).toHaveAccessibleDescription(
      /tap the card to see what it means/i
    );
  });

  it("lets users go back to the previous word", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: /previous word/i }));

    expect(screen.getByText(vocabulary[vocabulary.length - 1].portuguese)).toBeInTheDocument();
  });

  it("lets users turn off automatic pronunciation while keeping manual playback", () => {
    render(<App />);
    const play = vi.mocked(window.HTMLMediaElement.prototype.play);

    const autoPlayToggle = screen.getByRole("checkbox", { name: /play pronunciation automatically/i });
    expect(autoPlayToggle).toBeChecked();

    fireEvent.click(autoPlayToggle);
    expect(autoPlayToggle).not.toBeChecked();

    fireEvent.click(screen.getByRole("button", { name: /ouvir/i }));
    expect(play).toHaveBeenCalledTimes(1);
  });

  it("waits 400ms before automatic pronunciation playback", () => {
    vi.useFakeTimers();
    const play = vi.mocked(window.HTMLMediaElement.prototype.play);

    render(<App />);

    expect(play).not.toHaveBeenCalled();

    act(() => {
      vi.advanceTimersByTime(399);
    });
    expect(play).not.toHaveBeenCalled();

    act(() => {
      vi.advanceTimersByTime(1);
    });
    expect(play).toHaveBeenCalledTimes(1);
  });
});
