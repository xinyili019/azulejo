import { ThumbsDown, ThumbsUp } from "lucide-react";
import type { Direction, VocabularyEntry } from "../types";
import { getAnswer, getPrompt } from "../lib/filtering";
import type { UiCopy } from "../lib/i18n";

interface FlashcardProps {
  entry: VocabularyEntry;
  direction: Direction;
  revealed: boolean;
  ui: UiCopy;
  onToggleReveal: () => void;
  onAgain: () => void;
  onKnown: () => void;
}

export function Flashcard({ entry, direction, revealed, ui, onToggleReveal, onAgain, onKnown }: FlashcardProps) {
  return (
    <section className="flashcard" aria-label={ui.flashcard}>
      <button
        className={`flip-tile ${revealed ? "is-revealed" : ""}`}
        type="button"
        onClick={onToggleReveal}
        aria-pressed={revealed}
        aria-label={revealed ? ui.hideAnswer : ui.revealAnswer}
      >
        <span className="tile-face tile-front">
          <span className="tile-content">
            <span className="prompt">{getPrompt(entry, direction)}</span>
          </span>
        </span>
        <span className="tile-face tile-back">
          <span className="tile-content">
            <span className="answer">{getAnswer(entry, direction)}</span>
            {entry.examplePt && <span className="example">{entry.examplePt}</span>}
            {entry.exampleEn && <span className="example muted">{entry.exampleEn}</span>}
          </span>
        </span>
      </button>
      <div className={`card-actions ${revealed ? "is-visible" : ""}`} aria-hidden={!revealed}>
        <button className="secondary" type="button" onClick={onAgain} disabled={!revealed}>
          <ThumbsDown size={18} aria-hidden="true" />
          {ui.again}
        </button>
        <button className="primary" type="button" onClick={onKnown} disabled={!revealed}>
          <ThumbsUp size={18} aria-hidden="true" />
          {ui.known}
        </button>
      </div>
    </section>
  );
}
