import { ChevronLeft, ChevronRight, RotateCcw, ThumbsUp, Volume2 } from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type MouseEvent,
  type TouchEvent
} from "react";
import type { Direction, VocabularyEntry } from "../types";
import { getAnswer, getPrompt } from "../lib/filtering";
import type { UiCopy } from "../lib/i18n";
import { getExampleAudioPath, getWordAudioPath } from "../lib/audioPaths";
import { playPortugueseAudio } from "../lib/portugueseAudio";
import { getPortugueseBareText, getPortugueseTermParts } from "../lib/portugueseDisplay";

const AUTO_PLAY_DELAY_MS = 250;
const PREVIOUS_SWIPE_DISTANCE_PX = 80;
const MAX_SWIPE_VERTICAL_DRIFT_PX = 40;
const HORIZONTAL_SWIPE_RATIO = 1.5;
const FIRST_WORD_IDS = new Set(["az-0077", "m1-casa"]);

interface FlashcardProps {
  entry: VocabularyEntry;
  direction: Direction;
  revealed: boolean;
  autoPlayPronunciation: boolean;
  ui: UiCopy;
  onToggleReveal: () => void;
  onPrevious: () => void;
  canSwipePrevious: boolean;
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
  canSwipePrevious,
  onAgain,
  onKnown
}: FlashcardProps) {
  const [translationOpen, setTranslationOpen] = useState(false);
  const [activeAudioTarget, setActiveAudioTarget] = useState<"word" | "example" | null>(null);
  const audioRequestRef = useRef(0);
  const tileSwipeStartRef = useRef<{ x: number; y: number } | null>(null);
  const tileSwipeLastRef = useRef<{ x: number; y: number } | null>(null);
  const suppressTileClickUntilRef = useRef(0);
  const translationId = `translation-${entry.id}`;
  const prompt = getPrompt(entry, direction);
  const answer = getAnswer(entry, direction);
  const exampleTranslation = getExampleTranslation(entry, direction);
  const hasExample = Boolean(entry.examplePt);
  const hasTranslation = Boolean(exampleTranslation);
  const isFirstWord = FIRST_WORD_IDS.has(entry.id);
  const cardTermSize = getCardTermSize(prompt);
  const cardAnswerSize = getCardTermSize(answer);
  const portugueseIsFront = isPortugueseFrontDirection(direction);
  const portugueseIsBackAnswer = !portugueseIsFront;
  const shouldAutoPlayPronunciation = autoPlayPronunciation && revealed;
  const autoPlayTrigger = `${entry.id}:${direction}:${revealed}`;

  useEffect(() => {
    setTranslationOpen(false);
  }, [entry.id, direction, revealed]);

  function handleTileKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.target !== event.currentTarget) return;
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    onToggleReveal();
  }

  function handleTileClick(event: MouseEvent<HTMLDivElement>) {
    if (Date.now() < suppressTileClickUntilRef.current) {
      event.preventDefault();
      return;
    }
    onToggleReveal();
  }

  function handleTileTouchStart(event: TouchEvent<HTMLDivElement>) {
    if (event.touches.length !== 1) {
      resetTileSwipe();
      return;
    }

    const touch = event.touches[0];
    const point = { x: touch.clientX, y: touch.clientY };
    tileSwipeStartRef.current = point;
    tileSwipeLastRef.current = point;
  }

  function handleTileTouchMove(event: TouchEvent<HTMLDivElement>) {
    if (!tileSwipeStartRef.current || event.touches.length !== 1) return;
    const touch = event.touches[0];
    tileSwipeLastRef.current = { x: touch.clientX, y: touch.clientY };
  }

  function handleTileTouchEnd(event: TouchEvent<HTMLDivElement>) {
    const start = tileSwipeStartRef.current;
    const changedTouch = event.changedTouches[0];
    const end = changedTouch ? { x: changedTouch.clientX, y: changedTouch.clientY } : tileSwipeLastRef.current;
    resetTileSwipe();
    if (!canSwipePrevious || !start || !end) return;

    const horizontalDistance = end.x - start.x;
    const verticalDrift = Math.abs(end.y - start.y);
    const isPredominantlyHorizontal = horizontalDistance > verticalDrift * HORIZONTAL_SWIPE_RATIO;
    if (
      horizontalDistance < PREVIOUS_SWIPE_DISTANCE_PX ||
      verticalDrift >= MAX_SWIPE_VERTICAL_DRIFT_PX ||
      !isPredominantlyHorizontal
    ) {
      return;
    }

    suppressTileClickUntilRef.current = Date.now() + 500;
    onPrevious();
  }

  function resetTileSwipe() {
    tileSwipeStartRef.current = null;
    tileSwipeLastRef.current = null;
  }

  function handlePronunciation() {
    playTrackedAudio("word", getWordAudioPath(entry), getPortugueseBareText(entry));
  }

  function handleExamplePronunciation() {
    if (!entry.examplePt) return;
    playTrackedAudio("example", getExampleAudioPath(entry), entry.examplePt);
  }

  function playTrackedAudio(target: "word" | "example", path: string, text: string) {
    const requestId = audioRequestRef.current + 1;
    audioRequestRef.current = requestId;
    setActiveAudioTarget(target);
    playPortugueseAudio(path, text, () => {
      if (audioRequestRef.current === requestId) setActiveAudioTarget(null);
    });
  }

  function stopTileToggle(event: MouseEvent<HTMLElement>) {
    event.stopPropagation();
  }

  function renderBackAudioButton(target: "word" | "example", label: string, onClick: () => void) {
    return (
      <button
        className={`icon-button tile-audio-icon${activeAudioTarget === target ? " is-playing" : ""}`}
        type="button"
        disabled={!revealed}
        onClick={(event) => {
          event.stopPropagation();
          onClick();
        }}
        aria-label={label}
        title={label}
      >
        <Volume2 size={16} aria-hidden="true" />
      </button>
    );
  }

  useEffect(() => {
    if (!shouldAutoPlayPronunciation) return;

    const timeoutId = window.setTimeout(() => {
      handlePronunciation();
    }, AUTO_PLAY_DELAY_MS);

    return () => window.clearTimeout(timeoutId);
  }, [autoPlayTrigger, shouldAutoPlayPronunciation]);

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
        style={{
          "--card-term-size-adjustment": cardTermSize,
          "--card-answer-size-adjustment": cardAnswerSize
        } as CSSProperties}
      >
      <div className="tile-shell">
        <div
          className={`flip-tile ${revealed ? "is-revealed" : ""}`}
          role="button"
          tabIndex={0}
          onClick={handleTileClick}
          onKeyDown={handleTileKeyDown}
          onTouchStart={handleTileTouchStart}
          onTouchMove={handleTileTouchMove}
          onTouchEnd={handleTileTouchEnd}
          onTouchCancel={resetTileSwipe}
          aria-pressed={revealed}
          aria-label={revealed ? ui.hideAnswer : ui.revealAnswer}
        >
            <span className="tile-face tile-front" aria-hidden={revealed}>
              <span className="tile-content">
                <span className="prompt">{renderTerm(prompt, portugueseIsFront, entry)}</span>
              </span>
            </span>
            <span className={`tile-face tile-back ${translationOpen ? "translation-is-open" : ""}`} aria-hidden={!revealed}>
              <span className="tile-content tile-content-back">
                <span className="answer-pair">
                  <span className={`back-term-row answer-reference-row${portugueseIsFront ? " has-audio" : ""}`}>
                    {portugueseIsFront &&
                      renderBackAudioButton("word", `${ui.listen}: ${getPortugueseBareText(entry)}`, handlePronunciation)}
                    <span className="answer-reference" onClick={portugueseIsFront ? stopTileToggle : undefined}>
                      {renderTerm(prompt, portugueseIsFront, entry)}
                    </span>
                    {portugueseIsFront && <span className="tile-audio-spacer" aria-hidden="true" />}
                  </span>
                  <span className={`back-term-row answer-row${portugueseIsBackAnswer ? " has-audio" : ""}`}>
                    {portugueseIsBackAnswer &&
                      renderBackAudioButton("word", `${ui.listen}: ${getPortugueseBareText(entry)}`, handlePronunciation)}
                    <span className="answer" onClick={portugueseIsBackAnswer ? stopTileToggle : undefined}>
                      {renderTerm(answer, portugueseIsBackAnswer, entry)}
                    </span>
                    {portugueseIsBackAnswer && <span className="tile-audio-spacer" aria-hidden="true" />}
                  </span>
                </span>
                {(hasExample || hasTranslation) && (
                  <span className={`example-disclosure translation-disclosure ${translationOpen ? "open" : ""}`}>
                    {entry.examplePt && (
                      <span className="example example-with-audio">
                        {renderBackAudioButton("example", `${ui.listen} ${ui.example}`, handleExamplePronunciation)}
                        <span>{entry.examplePt}</span>
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
      <div className={`flashcard-controls ${revealed ? "is-revealed" : ""}`}>
        {!revealed && renderPronunciationButton("pronunciation-control")}
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
        {isFirstWord ? (
          <button className="secondary card-previous is-unavailable" type="button" disabled>
            <ChevronLeft size={14} aria-hidden="true" />
            {ui.previousWord}
          </button>
        ) : (
          <button className="secondary card-previous" type="button" onClick={onPrevious}>
            <ChevronLeft size={14} aria-hidden="true" />
            {ui.previousWord}
          </button>
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
