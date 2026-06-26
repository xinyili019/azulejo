import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import App from "../src/App";
import { vocabulary } from "../src/data/vocabulary";

describe("App", () => {
  beforeEach(() => {
    localStorage.clear();
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
});
