import { StrictMode } from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { ModuleQuiz } from "../src/components/ModuleQuiz";
import { getUiCopy } from "../src/lib/i18n";
import type { ModuleQuizScope, VocabularyEntry } from "../src/types";

describe("ModuleQuiz audio", () => {
  beforeEach(() => {
    vi.clearAllMocks();
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
});
