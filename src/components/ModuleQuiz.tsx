import { Check, ChevronRight, RotateCcw, Volume2, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { buildModuleQuizQuestions } from "../lib/moduleQuiz";
import type { UiCopy } from "../lib/i18n";
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
  const [translationOpen, setTranslationOpen] = useState(false);
  const activeScope = useMemo(
    () => scopes.find((scope) => scope.id === scopeId) ?? scopes[0],
    [scopeId, scopes]
  );
  const activeQuestion = questions[questionIndex];
  const answered = selectedChoice !== null;
  const selectedCorrect = answered && selectedChoice === activeQuestion?.answer;
  const completed = questions.length > 0 && results.length === questions.length;
  const correctCount = results.filter((result) => result.correct).length;

  useEffect(() => {
    setScopeId(initialScopeId ?? scopes[0]?.id ?? "");
  }, [initialScopeId, scopes]);

  useEffect(() => {
    startFreshQuiz();
  }, [activeScope?.id, direction]);

  function startFreshQuiz() {
    if (!activeScope) {
      setQuestions([]);
      return;
    }

    setQuestions(buildModuleQuizQuestions(activeScope, allEntries, direction, { rng: Math.random }));
    setQuestionIndex(0);
    setSelectedChoice(null);
    setResults([]);
    setTranslationOpen(false);
  }

  function selectChoice(choice: string) {
    if (answered) return;
    setSelectedChoice(choice);
  }

  function continueQuiz() {
    if (!activeQuestion || !answered) return;

    const nextResults = [...results, { id: activeQuestion.id, correct: selectedCorrect }];
    setResults(nextResults);
    setSelectedChoice(null);
    setTranslationOpen(false);

    if (questionIndex < questions.length - 1) {
      setQuestionIndex((current) => current + 1);
    } else if (activeScope) {
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

  function speak() {
    if (!activeQuestion || typeof window === "undefined" || !("Audio" in window)) return;
    const audio = new Audio(`${import.meta.env.BASE_URL}audio/pt/${activeQuestion.entry.id}.m4a`);
    audio.play().catch(() => undefined);
  }

  if (!activeScope || questions.length === 0) {
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
          <h2>{ui.finalQuizScore(correctCount, questions.length)}</h2>
          <div className="module-quiz-actions">
            <button className="primary" type="button" onClick={startFreshQuiz}>
              <RotateCcw size={18} aria-hidden="true" />
              {ui.freshQuiz}
            </button>
            <button className="secondary" type="button" onClick={onCompletionExit}>
              {completionExitLabel}
            </button>
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
          <p className="eyebrow">{ui.moduleQuiz}</p>
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

        <div className="module-quiz-prompt">
          <button className="icon-button module-quiz-audio" type="button" onClick={speak} aria-label={ui.listen}>
            <Volume2 size={18} aria-hidden="true" />
          </button>
          <p>{activeQuestion.clozeSentence}</p>
        </div>

        {activeQuestion.translation && (
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

        <div className="module-quiz-choices" role="list" aria-label="Multiple choice answers">
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

        <div className="module-quiz-actions">
          {answered && (
            <p className={`retrieval-feedback ${selectedCorrect ? "is-correct" : "is-incorrect"}`}>
              {selectedCorrect ? ui.correct : ui.incorrect}
            </p>
          )}
          <button className="primary" type="button" disabled={!answered} onClick={continueQuiz}>
            {questionIndex >= questions.length - 1 ? ui.finishQuiz : ui.nextQuestion}
          </button>
          <button className="secondary" type="button" onClick={startFreshQuiz}>
            <RotateCcw size={18} aria-hidden="true" />
            {ui.freshQuiz}
          </button>
        </div>
      </section>
    </div>
  );
}
