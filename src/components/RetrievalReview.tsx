import { ChevronRight, Eye, Volume2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  getCharacterFeedback,
  getRetrievalOutcome,
  type RetrievalReviewPrompt,
  type RetrievalReviewResult
} from "../lib/retrievalReview";
import type { Direction } from "../types";
import type { UiCopy } from "../lib/i18n";

interface PromptReviewState {
  promptId: string | null;
  input: string;
  submitted: boolean;
  revealedBeforeTyped: boolean;
  exampleOpen: boolean;
}

interface RetrievalReviewProps {
  prompts: RetrievalReviewPrompt[];
  direction: Direction;
  ui: UiCopy;
  title: string;
  onComplete: (results: RetrievalReviewResult[]) => void;
}

export function RetrievalReview({ prompts, direction, ui, title, onComplete }: RetrievalReviewProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [promptIndex, setPromptIndex] = useState(0);
  const [promptState, setPromptState] = useState<PromptReviewState>(() => createPromptReviewState(null));
  const [results, setResults] = useState<RetrievalReviewResult[]>([]);

  const activePrompt = prompts[promptIndex];
  const activePromptId = activePrompt?.id ?? null;
  const isActivePromptState = promptState.promptId === activePromptId;
  const input = isActivePromptState ? promptState.input : "";
  const submitted = isActivePromptState ? promptState.submitted : false;
  const revealedBeforeTyped = isActivePromptState ? promptState.revealedBeforeTyped : false;
  const exampleOpen = isActivePromptState ? promptState.exampleOpen : false;
  const hiddenSlotCount = activePrompt ? getHiddenCueSlotCount(activePrompt.cue) : 0;
  const scoredInput = activePrompt ? buildAnswerFromCueInput(input, activePrompt.cue) : input;
  const feedback = activePrompt && submitted ? getCharacterFeedback(scoredInput, activePrompt.answer) : [];
  const outcome = activePrompt && submitted ? getRetrievalOutcome(scoredInput, activePrompt.answer, revealedBeforeTyped) : null;
  const targetExample = activePrompt ? getExampleTranslation(activePrompt.entry, direction) : undefined;
  const revealLabel = ui.revealAnswer;

  useEffect(() => {
    setPromptIndex(0);
    setPromptState(createPromptReviewState(prompts[0]?.id ?? null));
    setResults([]);
  }, [prompts]);

  useEffect(() => {
    setPromptState((current) =>
      current.promptId === activePromptId ? current : createPromptReviewState(activePromptId)
    );
  }, [activePromptId]);

  useEffect(() => {
    if (!activePrompt || submitted || Array.from(input).length < hiddenSlotCount) return;
    submitAnswer(false);
  }, [input, hiddenSlotCount, submitted, activePrompt?.id]);

  if (!activePrompt) {
    return (
      <section className="review-panel">
        <h2>{title}</h2>
        <button className="primary" type="button" onClick={() => onComplete([])}>
          Continue
        </button>
      </section>
    );
  }

  function speak() {
    if (!activePrompt || typeof window === "undefined" || !("Audio" in window)) return;
    const audio = new Audio(`${import.meta.env.BASE_URL}audio/pt/${activePrompt.entry.id}.m4a`);
    audio.play().catch(() => undefined);
  }

  function submitAnswer(revealed: boolean) {
    if (!activePrompt || submitted) return;
    setPromptState((current) => ({
      ...createPromptReviewState(activePrompt.id),
      ...(current.promptId === activePrompt.id ? current : {}),
      revealedBeforeTyped: revealed,
      submitted: true
    }));
  }

  function nextPrompt() {
    if (!activePrompt) return;
    const result: RetrievalReviewResult = {
      id: activePrompt.id,
      entry: activePrompt.entry,
      outcome: getRetrievalOutcome(scoredInput, activePrompt.answer, revealedBeforeTyped)
    };
    const nextResults = [...results, result];

    if (promptIndex >= prompts.length - 1) {
      onComplete(nextResults);
      return;
    }

    setResults(nextResults);
    setPromptIndex((current) => current + 1);
  }

  return (
    <section className="review-panel retrieval-review" aria-label={title}>
      <div className="review-header">
        <p className="eyebrow">{title}</p>
        <strong>
          {promptIndex + 1} / {prompts.length}
        </strong>
      </div>

      <div className="retrieval-prompt">
        <p className="retrieval-prompt-text">{activePrompt.prompt}</p>
        <button className="icon-button retrieval-audio" type="button" onClick={speak} aria-label={ui.listen}>
          <Volume2 size={18} aria-hidden="true" />
        </button>
      </div>

      <div className="retrieval-typing-surface" onClick={() => inputRef.current?.focus()}>
        <div
          className={`retrieval-cue ${submitted ? "retrieval-cue-feedback" : "retrieval-cue-masked"}`}
          aria-label="Portuguese answer cue"
        >
          {renderCueSlots(activePrompt.cue, input, submitted ? feedback : undefined)}
        </div>

        <input
          key={activePrompt.id}
          ref={inputRef}
          className="retrieval-input retrieval-input-overlay"
          name={`retrieval-input-${activePrompt.id}`}
          value={input}
          onChange={(event) =>
            setPromptState((current) => ({
              ...createPromptReviewState(activePrompt.id),
              ...(current.promptId === activePrompt.id ? current : {}),
              input: getSlotInput(event.target.value, activePrompt.cue)
            }))
          }
          disabled={submitted}
          autoComplete="off"
          autoCapitalize="none"
          autoCorrect="off"
          spellCheck={false}
          aria-label="Type the Portuguese word"
        />
      </div>

      <div className="retrieval-actions">
        {!submitted ? (
          <button className="secondary" type="button" onClick={() => submitAnswer(true)}>
            <Eye size={18} aria-hidden="true" />
            {revealLabel}
          </button>
        ) : (
          <>
            <p className={`retrieval-feedback ${outcome === "correct" ? "is-correct" : "is-incorrect"}`}>
              {outcome === "correct" ? "Correct" : "Incorrect"}
            </p>
            <button className="primary" type="button" onClick={nextPrompt}>
              {promptIndex >= prompts.length - 1 ? "Finish" : "Next"}
            </button>
          </>
        )}
      </div>

      {submitted && (activePrompt.entry.examplePt || targetExample) && (
        <div className={`retrieval-example ${exampleOpen ? "open" : ""}`}>
          <button
            className="example-toggle"
            type="button"
            aria-expanded={exampleOpen}
            onClick={() =>
              setPromptState((current) => ({
                ...createPromptReviewState(activePrompt.id),
                ...(current.promptId === activePrompt.id ? current : {}),
                exampleOpen: !exampleOpen
              }))
            }
          >
            <ChevronRight className="example-chevron" size={14} aria-hidden="true" />
            {ui.example}
          </button>
          <div className="example-body" aria-hidden={!exampleOpen}>
            {activePrompt.entry.examplePt && <span className="example">{activePrompt.entry.examplePt}</span>}
            {targetExample && <span className="example muted">{targetExample}</span>}
          </div>
        </div>
      )}
    </section>
  );
}

function createPromptReviewState(promptId: string | null): PromptReviewState {
  return {
    promptId,
    input: "",
    submitted: false,
    revealedBeforeTyped: false,
    exampleOpen: false
  };
}

function renderCueSlots(
  cue: string,
  input: string,
  feedback?: ReturnType<typeof getCharacterFeedback>
) {
  const inputChars = Array.from(input);
  const feedbackByIndex = new Map(feedback?.map((item) => [item.index, item]) ?? []);
  let inputIndex = 0;

  return Array.from(cue).map((cueChar, cueIndex) => {
    if (cueChar !== "_") {
      return (
        <span key={cueIndex} className="cue-char cue-static">
          {displayCueChar(cueChar)}
        </span>
      );
    }

    const typedChar = inputChars[inputIndex] ?? "";
    const item = feedbackByIndex.get(cueIndex);
    inputIndex += 1;

    if (item) {
      return (
        <span
          key={cueIndex}
          className={`cue-char cue-slot ${item.correct ? "is-correct" : "is-incorrect"}`}
        >
          {item.displayChar || displayCueChar(typedChar)}
        </span>
      );
    }

    return (
      <span key={cueIndex} className={`cue-char cue-slot ${typedChar ? "is-filled" : "is-empty"}`}>
        {typedChar || "_"}
      </span>
    );
  });
}

function getHiddenCueSlotCount(cue: string) {
  return Array.from(cue).filter((char) => char === "_").length;
}

function getSlotInput(value: string, cue: string) {
  const valueChars = Array.from(value);
  const cueChars = Array.from(cue);
  const hiddenSlotCount = getHiddenCueSlotCount(cue);
  const slotInput: string[] = [];
  let cueIndex = 0;

  for (const char of valueChars) {
    while (cueIndex < cueChars.length && cueChars[cueIndex] !== "_" && cueChars[cueIndex] !== char) {
      cueIndex += 1;
    }

    if (cueIndex < cueChars.length && cueChars[cueIndex] !== "_" && cueChars[cueIndex] === char) {
      cueIndex += 1;
      continue;
    }

    while (cueIndex < cueChars.length && cueChars[cueIndex] !== "_") {
      cueIndex += 1;
    }

    if (cueIndex >= cueChars.length) break;

    slotInput.push(char);
    cueIndex += 1;

    if (slotInput.length >= hiddenSlotCount) break;
  }

  return slotInput.join("");
}

function buildAnswerFromCueInput(input: string, cue: string) {
  const inputChars = Array.from(input);
  let inputIndex = 0;

  return Array.from(cue, (cueChar) => {
    if (cueChar !== "_") return cueChar;
    const typedChar = inputChars[inputIndex] ?? "";
    inputIndex += 1;
    return typedChar;
  }).join("");
}

function displayCueChar(char: string) {
  return char === " " ? "\u00A0" : char;
}

function getExampleTranslation(entry: RetrievalReviewPrompt["entry"], direction: Direction) {
  if (direction.includes("zh-hans")) return entry.exampleZhHans;
  if (direction.includes("zh-hant")) return entry.exampleZhHant;
  return entry.exampleEn;
}
