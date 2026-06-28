import { ChevronLeft, ThumbsDown, ThumbsUp, Volume2 } from "lucide-react";
import { useEffect } from "react";
import type { Direction, VocabularyEntry } from "../types";
import { getAnswer, getPrompt } from "../lib/filtering";
import type { UiCopy } from "../lib/i18n";

let activeAudio: HTMLAudioElement | null = null;
const AUTO_PLAY_DELAY_MS = 400;

interface FlashcardProps {
  entry: VocabularyEntry;
  direction: Direction;
  revealed: boolean;
  autoPlayPronunciation: boolean;
  ui: UiCopy;
  onToggleReveal: () => void;
  onPrevious: () => void;
  onAgain: () => void;
  onKnown: () => void;
}

export function Flashcard({
  entry,
  direction,
  revealed,
  autoPlayPronunciation,
  ui,
  onToggleReveal,
  onPrevious,
  onAgain,
  onKnown
}: FlashcardProps) {
  function speakWithBrowserVoice() {
    if (
      typeof window === "undefined" ||
      !("speechSynthesis" in window) ||
      !("SpeechSynthesisUtterance" in window)
    ) {
      return;
    }

    const utterance = new window.SpeechSynthesisUtterance(entry.portuguese);
    const voices = window.speechSynthesis.getVoices();
    const voice =
      voices.find((candidate) => candidate.lang.toLowerCase() === "pt-pt") ??
      voices.find((candidate) => candidate.lang.toLowerCase().startsWith("pt-pt")) ??
      voices.find((candidate) => candidate.lang.toLowerCase().startsWith("pt"));

    utterance.lang = voice?.lang ?? "pt-PT";
    utterance.voice = voice ?? null;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  }

  function handlePronunciation() {
    if (typeof window === "undefined" || !("Audio" in window)) {
      speakWithBrowserVoice();
      return;
    }

    activeAudio?.pause();
    activeAudio = new Audio(`${import.meta.env.BASE_URL}audio/pt/${entry.id}.m4a`);
    activeAudio.preload = "auto";
    let usedFallback = false;

    const fallbackToBrowserVoice = () => {
      if (usedFallback) return;
      usedFallback = true;
      activeAudio?.pause();
      speakWithBrowserVoice();
    };

    activeAudio.addEventListener("error", fallbackToBrowserVoice, { once: true });
    try {
      const playPromise = activeAudio.play();
      playPromise?.catch(fallbackToBrowserVoice);
    } catch {
      fallbackToBrowserVoice();
    }
  }

  useEffect(() => {
    if (!autoPlayPronunciation) return;

    const timeoutId = window.setTimeout(() => {
      handlePronunciation();
    }, AUTO_PLAY_DELAY_MS);

    return () => window.clearTimeout(timeoutId);
  }, [entry.id, autoPlayPronunciation]);

  function renderPronunciationButton(className: string) {
    return (
      <button
        className={className}
        type="button"
        onClick={handlePronunciation}
        aria-label={ui.listen}
        title={ui.listen}
      >
        <Volume2 size={18} aria-hidden="true" />
        {ui.listen}
      </button>
    );
  }

  return (
    <section className="flashcard" aria-label={ui.flashcard}>
      <p id="flashcard-instruction" className="flashcard-instruction">
        {ui.cardInstruction}
      </p>
      <div className="tile-shell">
        <div className="tile-stage">
          <button
            className={`flip-tile ${revealed ? "is-revealed" : ""}`}
            type="button"
            onClick={onToggleReveal}
            aria-pressed={revealed}
            aria-label={revealed ? ui.hideAnswer : ui.revealAnswer}
            aria-describedby="flashcard-instruction"
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
        </div>
        {!revealed && renderPronunciationButton("pronunciation-control pronunciation-control-front")}
      </div>
      <div className="flashcard-controls">
        {revealed && (
          <div className="card-actions is-visible">
            {renderPronunciationButton("pronunciation-control pronunciation-control-back")}
            <button className="secondary review-again" type="button" onClick={onAgain}>
              <ThumbsDown size={18} aria-hidden="true" />
              {ui.again}
            </button>
            <button className="primary review-known" type="button" onClick={onKnown}>
              <ThumbsUp size={18} aria-hidden="true" />
              {ui.known}
            </button>
          </div>
        )}
        <button className="secondary card-previous" type="button" onClick={onPrevious}>
          <ChevronLeft size={18} aria-hidden="true" />
          {ui.previousWord}
        </button>
      </div>
    </section>
  );
}
