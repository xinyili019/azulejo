import { ChevronLeft, ChevronRight, RotateCcw, ThumbsUp, Volume2 } from "lucide-react";
import { useEffect, useState, type CSSProperties, type KeyboardEvent } from "react";
import type { Direction, VocabularyEntry } from "../types";
import { getAnswer, getPrompt } from "../lib/filtering";
import type { UiCopy } from "../lib/i18n";

let activeAudio: HTMLAudioElement | null = null;
const AUTO_PLAY_DELAY_MS = 250;
const AUDIO_FADE_STEPS = 6;
const AUDIO_FADE_INTERVAL_MS = 35;

interface FlashcardProps {
  entry: VocabularyEntry;
  direction: Direction;
  revealed: boolean;
  autoPlayPronunciation: boolean;
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
  const translationId = `translation-${entry.id}`;
  const prompt = getPrompt(entry, direction);
  const exampleTranslation = getExampleTranslation(entry, direction);
  const hasExample = Boolean(entry.examplePt);
  const hasTranslation = Boolean(exampleTranslation);
  const isFirstWord = entry.id === "m1-casa";
  const cardTermSize = getCardTermSize(prompt);
  const portugueseIsFront = isPortugueseFrontDirection(direction);
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
    onToggleReveal();
  }

  function speakWithBrowserVoice(text: string) {
    if (
      typeof window === "undefined" ||
      !("speechSynthesis" in window) ||
      !("SpeechSynthesisUtterance" in window)
    ) {
      return;
    }

    const utterance = new window.SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    const voice =
      voices.find((candidate) => candidate.lang.toLowerCase() === "pt-pt") ??
      voices.find((candidate) => candidate.lang.toLowerCase().startsWith("pt-pt")) ??
      voices.find((candidate) => candidate.lang.toLowerCase().startsWith("pt"));

    utterance.lang = voice?.lang ?? "pt-PT";
    utterance.voice = voice ?? null;
    window.speechSynthesis.speak(utterance);
  }

  function fadeOutAudio(audio: HTMLAudioElement) {
    const startVolume = audio.volume;
    let step = 0;

    const intervalId = window.setInterval(() => {
      step += 1;
      audio.volume = Math.max(0, startVolume * (1 - step / AUDIO_FADE_STEPS));

      if (step >= AUDIO_FADE_STEPS) {
        window.clearInterval(intervalId);
        audio.pause();
      }
    }, AUDIO_FADE_INTERVAL_MS);
  }

  function playPortugueseAudio(path: string, fallbackText: string) {
    if (typeof window === "undefined" || !("Audio" in window)) {
      speakWithBrowserVoice(fallbackText);
      return;
    }

    if (activeAudio) {
      fadeOutAudio(activeAudio);
    }
    activeAudio = new Audio(`${import.meta.env.BASE_URL}${path}`);
    activeAudio.preload = "auto";
    activeAudio.volume = 0.86;
    let usedFallback = false;

    const fallbackToBrowserVoice = () => {
      if (usedFallback) return;
      usedFallback = true;
      speakWithBrowserVoice(fallbackText);
    };

    activeAudio.addEventListener("error", fallbackToBrowserVoice, { once: true });
    try {
      const playPromise = activeAudio.play();
      playPromise?.catch(fallbackToBrowserVoice);
    } catch {
      fallbackToBrowserVoice();
    }
  }

  function handlePronunciation() {
    playPortugueseAudio(`audio/pt/${entry.id}.m4a`, entry.portuguese);
  }

  function handleExamplePronunciation() {
    if (!entry.examplePt) return;
    playPortugueseAudio(`audio/pt/examples/${entry.id}.m4a`, entry.examplePt);
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
            onClick={onToggleReveal}
            onKeyDown={handleTileKeyDown}
            aria-pressed={revealed}
            aria-label={revealed ? ui.hideAnswer : ui.revealAnswer}
            aria-describedby={showFirstWordCue && !revealed ? "flashcard-instruction" : undefined}
          >
            <span className="tile-face tile-front" aria-hidden={revealed}>
              <span className="tile-content">
                <span className="prompt">{prompt}</span>
                {showFirstWordCue && !revealed && <span className="tile-face-hint">{ui.cardInstruction}</span>}
              </span>
            </span>
            <span className={`tile-face tile-back ${translationOpen ? "translation-is-open" : ""}`} aria-hidden={!revealed}>
              <span className="tile-content tile-content-back">
                <span className="answer-pair">
                  <span className="answer-reference">{prompt}</span>
                  <span className="answer">{getAnswer(entry, direction)}</span>
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
    return "再次点击，回到同一词。选择“已掌握”，该词将不再进入“复习”或“回想”环节；选择“再练习”，该词将再次出现。";
  }

  if (ui.locale === "zhHant") {
    return "再次點擊，回到同一詞。選擇「已掌握」，該詞將不再進入「複習」或「回想」環節；選擇「再練習」，該詞將再次出現。";
  }

  return 'Tap the tile to flip back to the same word. "Known" skips Review and Recall. "Again" sends the word to Review and Recall.';
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
