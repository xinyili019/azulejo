import { ChevronLeft, ChevronRight, RotateCcw, ThumbsUp, Volume2 } from "lucide-react";
import { useEffect, useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import type { Direction, VocabularyEntry } from "../types";
import { getAnswer, getPrompt } from "../lib/filtering";
import type { UiCopy } from "../lib/i18n";
import { getExampleAudioPath, getWordAudioPath } from "../lib/audioPaths";
import { playPortugueseAudio } from "../lib/portugueseAudio";
import { getPortugueseBareText, getPortugueseTermParts } from "../lib/portugueseDisplay";

const AUTO_PLAY_DELAY_MS = 250;
const FIRST_WORD_IDS = new Set(["az-0077", "m1-casa"]);

interface FlashcardProps {
  entry: VocabularyEntry;
  direction: Direction;
  revealed: boolean;
  autoPlayPronunciation: boolean;
  skipAutoPlayKey?: string | null;
  showFirstWordCue?: boolean;
  showFirstWordTip?: boolean;
  ui: UiCopy;
  onToggleReveal: () => void;
  onPrevious: () => void;
  onAgain: () => void;
  onKnown: () => void;
  onFirstWordTipDismiss?: () => void;
}

export function Flashcard({
  entry,
  direction,
  revealed,
  autoPlayPronunciation,
  skipAutoPlayKey = null,
  showFirstWordCue = false,
  showFirstWordTip = false,
  ui,
  onToggleReveal,
  onPrevious,
  onAgain,
  onKnown,
  onFirstWordTipDismiss
}: FlashcardProps) {
  const [translationOpen, setTranslationOpen] = useState(false);
  const [firstWordTipDismissed, setFirstWordTipDismissed] = useState(false);
  const directAutoPlayRef = useRef<string | null>(null);
  const translationId = `translation-${entry.id}`;
  const prompt = getPrompt(entry, direction);
  const exampleTranslation = getExampleTranslation(entry, direction);
  const hasExample = Boolean(entry.examplePt);
  const hasTranslation = Boolean(exampleTranslation);
  const isFirstWord = FIRST_WORD_IDS.has(entry.id);
  const cardTermSize = getCardTermSize(prompt);
  const portugueseIsFront = isPortugueseFrontDirection(direction);
  const portugueseIsBackAnswer = !portugueseIsFront;
  const shouldAutoPlayPronunciation = autoPlayPronunciation && (portugueseIsFront || revealed);
  const autoPlayTrigger = portugueseIsFront ? `${entry.id}:${direction}` : `${entry.id}:${direction}:${revealed}`;

  useEffect(() => {
    setTranslationOpen(false);
    setFirstWordTipDismissed(false);
  }, [entry.id, direction, revealed]);

  function handleTileKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.target !== event.currentTarget) return;
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    handleTileToggle();
  }

  function handleTileToggle() {
    const willReveal = !revealed;
    if (willReveal && autoPlayPronunciation && portugueseIsBackAnswer) {
      directAutoPlayRef.current = `${entry.id}:${direction}:true`;
      handlePronunciation();
    }
    onToggleReveal();
  }

  function handlePronunciation() {
    playPortugueseAudio(getWordAudioPath(entry), getPortugueseBareText(entry));
  }

  function handleExamplePronunciation() {
    if (!entry.examplePt) return;
    playPortugueseAudio(getExampleAudioPath(entry), entry.examplePt);
  }

  useEffect(() => {
    if (!shouldAutoPlayPronunciation) return;
    if (skipAutoPlayKey === autoPlayTrigger) return;
    if (directAutoPlayRef.current === autoPlayTrigger) {
      directAutoPlayRef.current = null;
      return;
    }

    const timeoutId = window.setTimeout(() => {
      handlePronunciation();
    }, AUTO_PLAY_DELAY_MS);

    return () => window.clearTimeout(timeoutId);
  }, [autoPlayTrigger, shouldAutoPlayPronunciation, skipAutoPlayKey]);

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
      <section
        className="flashcard"
        aria-label={ui.flashcard}
        style={{ "--card-term-size-adjustment": cardTermSize } as CSSProperties}
      >
      {showFirstWordCue && !revealed && (
        <p id="flashcard-instruction" className="flashcard-instruction">
          {ui.cardInstruction}
        </p>
      )}
      <div className="tile-shell">
        <div className="tile-stage">
          <div
            className={`flip-tile ${revealed ? "is-revealed" : ""}`}
            role="button"
            tabIndex={0}
            onClick={handleTileToggle}
            onKeyDown={handleTileKeyDown}
            aria-pressed={revealed}
            aria-label={revealed ? ui.hideAnswer : ui.revealAnswer}
            aria-describedby={showFirstWordCue && !revealed ? "flashcard-instruction" : undefined}
          >
            <span className="tile-face tile-front" aria-hidden={revealed}>
              <span className="tile-content">
                <span className="prompt">{renderTerm(prompt, portugueseIsFront, entry)}</span>
                {showFirstWordCue && !revealed && <span className="tile-face-hint">{ui.cardInstruction}</span>}
              </span>
            </span>
            <span className={`tile-face tile-back ${translationOpen ? "translation-is-open" : ""}`} aria-hidden={!revealed}>
              <span className="tile-content tile-content-back">
                <span className="answer-pair">
                  <span className="answer-reference">{renderTerm(prompt, portugueseIsFront, entry)}</span>
                  <span className="answer">{renderTerm(getAnswer(entry, direction), portugueseIsBackAnswer, entry)}</span>
                </span>
                {(hasExample || hasTranslation) && (
                  <span className={`example-disclosure translation-disclosure ${translationOpen ? "open" : ""}`}>
                    {entry.examplePt && (
                      <span className="example example-with-audio">
                        <span>{entry.examplePt}</span>
                        <button
                          className="icon-button example-audio"
                          type="button"
                          disabled={!revealed}
                          onClick={(event) => {
                            event.stopPropagation();
                            handleExamplePronunciation();
                          }}
                          aria-label={`${ui.listen} ${ui.example}`}
                          title={`${ui.listen} ${ui.example}`}
                        >
                          <Volume2 size={16} aria-hidden="true" />
                        </button>
                      </span>
                    )}
                    {exampleTranslation && (
                      <>
                        <button
                          className="example-toggle"
                          type="button"
                          disabled={!revealed}
                          aria-expanded={translationOpen}
                          aria-controls={translationId}
                          onClick={(event) => {
                            event.stopPropagation();
                            setTranslationOpen((current) => !current);
                          }}
                        >
                          <ChevronRight className="example-chevron" size={14} aria-hidden="true" />
                          {ui.translation}
                        </button>
                        <span id={translationId} className="example-body" aria-hidden={!translationOpen}>
                          <span className="example muted">{exampleTranslation}</span>
                        </span>
                      </>
                    )}
                  </span>
                )}
              </span>
            </span>
          </div>
        </div>
        {showFirstWordTip && revealed && !firstWordTipDismissed && (
          <div className="first-word-tip" role="status" aria-live="polite">
            <p>{getFirstWordTipText(ui)}</p>
            <button
              className="primary first-word-tip-dismiss"
              type="button"
              onClick={() => {
                setFirstWordTipDismissed(true);
                onFirstWordTipDismiss?.();
              }}
            >
              {ui.gotIt}
            </button>
          </div>
        )}
      </div>
      <div className={`flashcard-controls ${revealed ? "is-revealed" : ""}`}>
        {isFirstWord ? (
          <button className="secondary card-previous is-unavailable" type="button" disabled>
            <ChevronLeft size={18} aria-hidden="true" />
            {ui.previousWord}
          </button>
        ) : (
          <button className="secondary card-previous" type="button" onClick={onPrevious}>
            <ChevronLeft size={18} aria-hidden="true" />
            {ui.previousWord}
          </button>
        )}
        {renderPronunciationButton("pronunciation-control")}
        {revealed && (
          <div className="card-actions is-visible">
            <button className="secondary review-again" type="button" onClick={onAgain}>
              <RotateCcw size={18} aria-hidden="true" />
              {ui.again}
            </button>
            <button className="primary review-known" type="button" onClick={onKnown}>
              <ThumbsUp size={18} aria-hidden="true" />
              {ui.known}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function renderTerm(text: string, isPortuguese: boolean, entry: VocabularyEntry) {
  if (!isPortuguese) return text;
  const parts = getPortugueseTermParts(entry);
  if (!parts.article) return parts.word;

  return (
    <>
      <span className="pt-article">{parts.article}</span>{" "}
      <span className="pt-headword">{parts.word}</span>
    </>
  );
}

function getExampleTranslation(entry: VocabularyEntry, direction: Direction) {
  if (direction.includes("zh-hans")) return entry.exampleZhHans;
  if (direction.includes("zh-hant")) return entry.exampleZhHant;
  return entry.exampleEn;
}

function isPortugueseFrontDirection(direction: Direction) {
  return direction.startsWith("pt-");
}

function getFirstWordTipText(ui: UiCopy) {
  if (ui.locale === "zhHans") {
    return "再次点击，回到同一词。点“再练习”或“已掌握”都会到下一词。区别只在安排：“再练习”很快再见；“已掌握”之后再来。";
  }

  if (ui.locale === "zhHant") {
    return "再次點擊，回到同一詞。點「再練習」或「已掌握」都會到下一詞。差別只在安排：「再練習」很快再見；「已掌握」之後再來。";
  }

  return 'Tap the tile to flip back to the same word. Tap "Again" or "Known" to go to the next word. "Again" = you\'ll see it again soon; "Known" = it comes back later.';
}


function getCardTermSize(prompt: string) {
  const length = prompt.trim().length;
  const words = prompt.trim().split(/\s+/).length;

  if (length <= 12 && words <= 2) {
    return "clamp(2rem, 6vw, 5.5rem)";
  }

  if (length <= 18 && words <= 3) {
    return "clamp(1.8rem, 5.2vw, 4.8rem)";
  }

  if (length <= 26) {
    return "clamp(1.55rem, 4.4vw, 4rem)";
  }

  return "clamp(1.35rem, 3.6vw, 3.2rem)";
}
