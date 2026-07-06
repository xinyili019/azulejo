import { Check, ChevronRight, RotateCcw, Volume2, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { buildModuleQuizQuestions } from "../lib/moduleQuiz";
import type { UiCopy } from "../lib/i18n";
import { getExampleAudioPath, getWordAudioPath } from "../lib/audioPaths";
import { playPortugueseAudio } from "../lib/portugueseAudio";
import { getPortugueseBareText, getPortugueseTermParts } from "../lib/portugueseDisplay";
import type { Direction, ModuleQuizQuestion, ModuleQuizResult, ModuleQuizScope, VocabularyEntry } from "../types";

interface ModuleQuizProps {
  scopes: ModuleQuizScope[];
  allEntries: VocabularyEntry[];
  direction: Direction;
  initialScopeId?: string | null;
  ui: UiCopy;
  onComplete: (result: ModuleQuizResult) => void;
  onExit: () => void;
  onCompletionExit?: () => void;
  completionExitLabel?: string;
}

interface QuizResult {
  id: string;
  correct: boolean;
}

interface MissedQuestion {
  question: ModuleQuizQuestion;
  missedCount: number;
}

export function ModuleQuiz({
  scopes,
  allEntries,
  direction,
  initialScopeId,
  ui,
  onComplete,
  onExit,
  onCompletionExit = onExit,
  completionExitLabel = ui.goBack
}: ModuleQuizProps) {
  const [scopeId, setScopeId] = useState(initialScopeId ?? scopes[0]?.id ?? "");
  const [questions, setQuestions] = useState<ModuleQuizQuestion[]>([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [results, setResults] = useState<QuizResult[]>([]);
  const [missedQuestions, setMissedQuestions] = useState<MissedQuestion[]>([]);
  const [retryingMissed, setRetryingMissed] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [translationOpen, setTranslationOpen] = useState(false);
  const autoPlayedQuestionRef = useRef<string | null>(null);
  const activeScope = useMemo(
    () => scopes.find((scope) => scope.id === scopeId) ?? scopes[0],
    [scopeId, scopes]
  );
  const activeQuestion = questions[questionIndex];
  const answered = selectedChoice !== null;
  const selectedCorrect = answered && selectedChoice === activeQuestion?.answer;
  const completed = quizCompleted && !retryingMissed;
  const correctCount = results.filter((result) => result.correct).length;
  const totalCount = results.length || questions.length;
  const missedCount = missedQuestions.length;
  const hasLongChoices = activeQuestion?.choices.some((choice) => choice.length > 18) ?? false;

  useEffect(() => {
    setScopeId(initialScopeId ?? scopes[0]?.id ?? "");
  }, [initialScopeId, scopes]);

  useEffect(() => {
    startFreshQuiz();
  }, [activeScope?.id, direction]);

  useEffect(() => {
    const autoPlayKey = activeQuestion ? `${scopeId}:${activeQuestion.id}:${retryingMissed ? "retry" : "quiz"}` : null;
    if (activeQuestion?.format === "audioMeaning" && autoPlayKey && autoPlayedQuestionRef.current !== autoPlayKey) {
      autoPlayedQuestionRef.current = autoPlayKey;
      playQuestionAudio(activeQuestion);
    }
  }, [activeQuestion?.id, activeQuestion?.format, retryingMissed, scopeId]);

  function startFreshQuiz() {
    if (!activeScope) {
      setQuestions([]);
      return;
    }

    setQuestions(buildModuleQuizQuestions(activeScope, allEntries, direction, { rng: Math.random }));
    setQuestionIndex(0);
    setSelectedChoice(null);
    setResults([]);
    setMissedQuestions([]);
    setRetryingMissed(false);
    setQuizCompleted(false);
    setTranslationOpen(false);
    autoPlayedQuestionRef.current = null;
  }

  function selectChoice(choice: string) {
    if (answered) return;
    setSelectedChoice(choice);
  }

  function continueQuiz() {
    if (!activeQuestion || !answered) return;

    if (retryingMissed) {
      const currentMiss = missedQuestions.find((item) => item.question.id === activeQuestion.id);
      const remainingMisses = selectedCorrect
        ? missedQuestions.filter((item) => item.question.id !== activeQuestion.id)
        : [
            ...missedQuestions.filter((item) => item.question.id !== activeQuestion.id),
            { question: activeQuestion, missedCount: (currentMiss?.missedCount ?? 1) + 1 }
          ];

      setMissedQuestions(remainingMisses);
      setSelectedChoice(null);
      setTranslationOpen(false);

      if (questionIndex < questions.length - 1) {
        setQuestionIndex((current) => current + 1);
        return;
      }

      setRetryingMissed(false);
      setQuizCompleted(true);
      setQuestionIndex(0);
      return;
    }

    const nextResults = [...results, { id: activeQuestion.id, correct: selectedCorrect }];
    const nextMissedQuestions = selectedCorrect
      ? missedQuestions
      : [...missedQuestions, { question: activeQuestion, missedCount: 1 }];

    setResults(nextResults);
    setMissedQuestions(nextMissedQuestions);
    setSelectedChoice(null);
    setTranslationOpen(false);

    if (questionIndex < questions.length - 1) {
      setQuestionIndex((current) => current + 1);
    } else if (activeScope) {
      setQuizCompleted(true);
      onComplete({
        scopeId: activeScope.id,
        modulo: activeScope.modulo,
        label: activeScope.label,
        correct: nextResults.filter((result) => result.correct).length,
        total: questions.length,
        completedAt: new Date().toISOString()
      });
    }
  }

  function startMissedQuestionRetry() {
    if (missedQuestions.length === 0) return;

    setQuestions(missedQuestions.map((item) => item.question));
    setQuestionIndex(0);
    setSelectedChoice(null);
    setRetryingMissed(true);
    setQuizCompleted(false);
    setTranslationOpen(false);
    autoPlayedQuestionRef.current = null;
  }

  function playQuestionAudio(question: ModuleQuizQuestion) {
    const audioPath =
      question.format === "cloze"
        ? getExampleAudioPath(question.entry)
        : getWordAudioPath(question.entry);
    const fallbackText =
      question.format === "cloze" ? question.entry.examplePt ?? getPortugueseBareText(question.entry) : getPortugueseBareText(question.entry);
    playPortugueseAudio(audioPath, fallbackText);
  }

  function speak() {
    if (!activeQuestion) return;
    playQuestionAudio(activeQuestion);
  }

  if ((!activeScope || questions.length === 0) && !completed) {
    return (
      <div className="review-switch-shell">
        <button className="review-switch-back" type="button" onClick={onExit}>
          {ui.goBack}
        </button>
        <section className="review-panel module-quiz" aria-label={ui.moduleQuiz}>
          <h2>{ui.moduleQuiz}</h2>
          <p className="module-quiz-empty">{ui.noCardsBody}</p>
        </section>
      </div>
    );
  }

  if (completed) {
    return (
      <div className="review-switch-shell">
        <button className="review-switch-back" type="button" onClick={onExit}>
          {ui.goBack}
        </button>
        <section className="review-panel module-quiz module-quiz-complete" aria-label={ui.moduleQuiz}>
          <p className="eyebrow">{activeScope.label}</p>
          <h2>{ui.finalQuizScore(correctCount, totalCount)}</h2>
          {missedCount > 0 && <p className="module-quiz-retry-note">{getMissedQuizCopy(direction, missedCount)}</p>}
          <div className="module-quiz-actions">
            {missedCount > 0 ? (
              <button className="primary" type="button" onClick={startMissedQuestionRetry}>
                <RotateCcw size={18} aria-hidden="true" />
                {getRetryMissedLabel(direction)}
              </button>
            ) : (
              <button className="primary" type="button" onClick={startFreshQuiz}>
                <RotateCcw size={18} aria-hidden="true" />
                {ui.freshQuiz}
              </button>
            )}
            {missedCount === 0 && (
              <button className="secondary" type="button" onClick={onCompletionExit}>
                {completionExitLabel}
              </button>
            )}
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="review-switch-shell">
      <button className="review-switch-back" type="button" onClick={onExit}>
        {ui.goBack}
      </button>
      <section className="review-panel module-quiz" aria-label={ui.moduleQuiz}>
        <div className="review-header">
          <p className="eyebrow">{retryingMissed ? getRetryMissedLabel(direction) : ui.moduleQuiz}</p>
          <strong>
            {questionIndex + 1} / {questions.length}
          </strong>
        </div>

        <label className="module-quiz-scope">
          {ui.quizScope}
          <select value={activeScope.id} onChange={(event) => setScopeId(event.target.value)}>
            {scopes.map((scope) => (
              <option key={scope.id} value={scope.id}>
                {scope.label}
              </option>
            ))}
          </select>
        </label>

        {activeQuestion.format === "cloze" ? (
          <div className="module-quiz-prompt">
            <button className="icon-button module-quiz-audio" type="button" onClick={speak} aria-label={ui.listen}>
              <Volume2 size={18} aria-hidden="true" />
            </button>
            <p>{activeQuestion.clozeSentence}</p>
          </div>
        ) : (
          <div className="module-quiz-prompt is-audio-meaning">
            <p>{ui.audioMeaningPrompt}</p>
            <button className="icon-button module-quiz-audio" type="button" onClick={speak} aria-label={ui.listen}>
              <Volume2 size={34} aria-hidden="true" />
            </button>
          </div>
        )}

        {activeQuestion.format === "cloze" && activeQuestion.translation && (
          <div className={`module-quiz-translation ${translationOpen ? "open" : ""}`}>
            <button
              className="example-toggle"
              type="button"
              aria-expanded={translationOpen}
              onClick={() => setTranslationOpen((current) => !current)}
            >
              <ChevronRight className="example-chevron" size={14} aria-hidden="true" />
              {ui.translation}
            </button>
            <div className="example-body" aria-hidden={!translationOpen}>
              <span className="example muted">{activeQuestion.translation}</span>
            </div>
          </div>
        )}

        <div
          className={`module-quiz-choices choices-${activeQuestion.choices.length}${hasLongChoices ? " has-long-choices" : ""}`}
          role="list"
          aria-label="Multiple choice answers"
        >
          {activeQuestion.choices.map((choice) => {
            const isSelected = selectedChoice === choice;
            const isAnswer = choice === activeQuestion.answer;
            const resultClass = answered && isAnswer ? " is-correct" : answered && isSelected ? " is-incorrect" : "";

            return (
              <button
                key={choice}
                className={`module-quiz-choice${isSelected ? " is-selected" : ""}${resultClass}`}
                type="button"
                onClick={() => selectChoice(choice)}
                aria-pressed={isSelected}
              >
                <span>{choice}</span>
                {answered && isAnswer && <Check size={18} aria-hidden="true" />}
                {answered && isSelected && !isAnswer && <X size={18} aria-hidden="true" />}
              </button>
            );
          })}
        </div>

        <div className={`module-quiz-actions${activeQuestion.format === "audioMeaning" ? " has-target-word" : ""}`}>
          {answered && (
            <p className={`retrieval-feedback ${selectedCorrect ? "is-correct" : "is-incorrect"}`}>
              {selectedCorrect ? ui.correct : ui.incorrect}
            </p>
          )}
          <button className="primary" type="button" disabled={!answered} onClick={continueQuiz}>
            {questionIndex >= questions.length - 1 ? ui.finishQuiz : ui.nextQuestion}
          </button>
        </div>
        {answered && activeQuestion.format === "audioMeaning" && (
          <p className="module-quiz-target-word" aria-live="polite">
            {renderPortugueseTerm(activeQuestion.entry)}
          </p>
        )}
      </section>
    </div>
  );
}

function renderPortugueseTerm(entry: VocabularyEntry) {
  const parts = getPortugueseTermParts(entry);
  if (!parts.article) return parts.word;

  return (
    <>
      <span className="pt-article">{parts.article}</span>{" "}
      <span className="pt-headword">{parts.word}</span>
    </>
  );
}

function getRetryMissedLabel(direction: Direction) {
  if (direction.includes("zh-hans")) return "重做错题";
  if (direction.includes("zh-hant")) return "重做錯題";
  return "Retry missed";
}

function getMissedQuizCopy(direction: Direction, count: number) {
  if (direction.includes("zh-hans")) return `请先重做 ${count} 道错题，答对后再继续。`;
  if (direction.includes("zh-hant")) return `請先重做 ${count} 道錯題，答對後再繼續。`;
  return `Review ${count} missed ${count === 1 ? "question" : "questions"} before moving on.`;
}
