import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { RetrievalReview } from "../src/components/RetrievalReview";
import { getUiCopy } from "../src/lib/i18n";
import { buildPortugueseCue, type RetrievalReviewPrompt } from "../src/lib/retrievalReview";
import type { VocabularyEntry } from "../src/types";

function entry(id: string, portuguese: string, english: string): VocabularyEntry {
  return {
    id,
    modulo: "Modulo 1",
    theme: "Tema",
    portuguese,
    english,
    zhHans: `简体 ${id}`,
    zhHant: `繁體 ${id}`,
    examplePt: `Exemplo ${portuguese}`,
    exampleEn: `Example ${english}`,
    source: "seed"
  };
}

function prompt(entry: VocabularyEntry): RetrievalReviewPrompt {
  return {
    id: entry.id,
    entry,
    direction: "en-pt",
    prompt: entry.english,
    promptLanguage: "english",
    answer: entry.portuguese,
    cue: buildPortugueseCue(entry.portuguese)
  };
}

describe("RetrievalReview", () => {
  it("renders typed letters on cue slots while preserving visible separators", () => {
    const prompts = [prompt(entry("a", "pão doce", "sweet bread"))];

    render(
      <RetrievalReview
        prompts={prompts}
        direction="en-pt"
        ui={getUiCopy("en-pt")}
        title="Typed review"
        onComplete={vi.fn()}
      />
    );

    const cue = screen.getByLabelText("Portuguese answer cue");
    const input = screen.getByLabelText("Type the Portuguese word");

    expect(getCueText(cue)).toBe("___ ____");

    fireEvent.change(input, { target: { value: "pao" } });
    expect(getCueText(cue)).toBe("pao ____");

    fireEvent.change(input, { target: { value: "pao " } });
    expect(getCueText(cue)).toBe("pao ____");

    fireEvent.change(input, { target: { value: "pao d" } });
    expect(getCueText(cue)).toBe("pao d___");

    fireEvent.change(input, { target: { value: "pao doce" } });
    expect(getCueText(cue)).toBe("pão doce");
    expect(cue.querySelectorAll(".cue-slot.is-correct")).toHaveLength(7);
  });

  it("resets typed state and remounts the input when advancing prompts", async () => {
    const prompts = [prompt(entry("a", "agua", "water")), prompt(entry("b", "pao", "bread"))];
    const ui = getUiCopy("en-pt");

    render(
      <RetrievalReview
        prompts={prompts}
        direction="en-pt"
        ui={ui}
        title="Typed review"
        onComplete={vi.fn()}
      />
    );

    expect(screen.getByRole("button", { name: "Reveal" })).toBeInTheDocument();

    const firstInput = screen.getByLabelText("Type the Portuguese word") as HTMLInputElement;
    fireEvent.change(firstInput, { target: { value: "agua" } });

    const exampleToggle = await screen.findByRole("button", { name: /example/i });
    expect(exampleToggle).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(exampleToggle);
    expect(exampleToggle).toHaveAttribute("aria-expanded", "true");

    fireEvent.click(screen.getByRole("button", { name: "Next" }));

    const nextInput = screen.getByLabelText("Type the Portuguese word") as HTMLInputElement;
    expect(screen.getByText("bread")).toBeInTheDocument();
    expect(nextInput).not.toBe(firstInput);
    expect(nextInput).toHaveValue("");
    expect(nextInput).toHaveAttribute("name", "retrieval-input-b");
    expect(screen.getByRole("button", { name: "Reveal" })).toBeInTheDocument();
  });
});

function getCueText(element: HTMLElement) {
  return element.textContent?.replace(/\u00a0/g, " ") ?? "";
}
