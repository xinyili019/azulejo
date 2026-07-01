import { useEffect, useMemo, useState } from "react";
import { Flashcard } from "./components/Flashcard";
import { ProgressDashboard } from "./components/ProgressDashboard";
import { RetrievalReview } from "./components/RetrievalReview";
import { vocabulary } from "./data/vocabulary";
import { AUTHORSHIP_FINGERPRINT, AUTHORSHIP_OWNER } from "./lib/authorshipFingerprint";
import { getModulos } from "./lib/filtering";
import { getUiCopy } from "./lib/i18n";
import {
  getFinalMilestoneCopy,
  getMilestoneActionLabel,
  getModuleMilestoneCopy,
  getSessionMilestoneCopy,
  REVIEW_MODE,
  type ReviewModeId
} from "./lib/milestoneCopy";
import { getCardProgress, loadProgress, recordReview, saveProgress } from "./lib/progress";
import {
  buildRetrievalReviewPrompts,
  createSeededRng,
  expandRepeatReviewQueue,
  shuffleWithRng,
  type RetrievalReviewResult
} from "./lib/retrievalReview";
import { buildSessionPlan, type VocabularySession } from "./lib/sessionPlan";
import type { CardProgress, CardStatus, Direction, ProgressState, VocabularyEntry } from "./types";
import "./styles.css";

type StudyPhase =
  | "study"
  | "sessionMilestone"
  | "sessionAgainFlashcards"
  | "sessionRetrievalComplete"
  | "moduleMilestone"
  | "finalMilestone"
  | "retrieval"
  | "complete";

type RetrievalContext = "session" | "module" | "final";

interface RetrievalState {
  title: string;
  context: RetrievalContext;
  prompts: ReturnType<typeof buildRetrievalReviewPrompts>;
}

export default function App() {
  const [progress, setProgress] = useState<ProgressState>(() => loadProgress());
  const [modulo, setModulo] = useState("all");
  const [autoPlayPronunciation, setAutoPlayPronunciation] = useState(true);
  const [direction, setDirection] = useState<Direction>("pt-en");
  const [sessionIndex, setSessionIndex] = useState(0);
  const [cardIndex, setCardIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [phase, setPhase] = useState<StudyPhase>("study");
  const [sessionAgainIds, setSessionAgainIds] = useState<string[]>([]);
  const [reviewQueue, setReviewQueue] = useState<VocabularyEntry[]>([]);
  const [retrievalState, setRetrievalState] = useState<RetrievalState | null>(null);

  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  const modulos = useMemo(() => getModulos(vocabulary), []);
  const selectedEntries = useMemo(
    () => (modulo === "all" ? vocabulary : vocabulary.filter((entry) => entry.modulo === modulo)),
    [modulo]
  );
  const sessionPlan = useMemo(() => buildSessionPlan(selectedEntries), [selectedEntries]);
  const currentSession = sessionPlan.sessions[sessionIndex];
  const ui = getUiCopy(direction);

  const visibleEntries =
    phase === "sessionAgainFlashcards" ? reviewQueue : currentSession?.entries ?? selectedEntries;
  const activeEntry = visibleEntries[cardIndex];
  const recognizedCount = selectedEntries.filter((entry) => getCardProgress(progress, entry.id).status === "known").length;

  useEffect(() => {
    resetFlow();
  }, [modulo, direction]);

  function resetFlow() {
    setSessionIndex(0);
    setCardIndex(0);
    setRevealed(false);
    setPhase("study");
    setSessionAgainIds([]);
    setReviewQueue([]);
    setRetrievalState(null);
  }

  function moveNext() {
    setRevealed(false);
    const nextIndex = cardIndex + 1;

    if (phase === "sessionAgainFlashcards") {
      if (nextIndex >= reviewQueue.length) {
        continueAfterSession();
        return;
      }
      setCardIndex(nextIndex);
      return;
    }

    if (!currentSession) return;
    if (nextIndex >= currentSession.entries.length) {
      setPhase("sessionMilestone");
      setCardIndex(0);
      return;
    }

    setCardIndex(nextIndex);
  }

  function movePrevious() {
    setRevealed(false);
    const entries = phase === "sessionAgainFlashcards" ? reviewQueue : currentSession?.entries;
    if (!entries?.length) return;
    setCardIndex((current) => (current - 1 + entries.length) % entries.length);
  }

  function handleReview(status: Exclude<CardStatus, "new">) {
    if (!activeEntry) return;

    const isFirstPass = phase === "study";
    const isSessionReview = phase === "sessionAgainFlashcards";

    setProgress((current) => {
      const reviewed = recordReview(current, activeEntry.id, status);
      const updated = {
        ...getCardProgress(reviewed, activeEntry.id),
        firstPassStatus: isFirstPass ? getCardProgress(current, activeEntry.id).firstPassStatus ?? status : getCardProgress(reviewed, activeEntry.id).firstPassStatus,
        everAgain: status === "again" ? true : getCardProgress(reviewed, activeEntry.id).everAgain,
        sessionTroubleCount:
          isSessionReview && status === "again"
            ? (getCardProgress(reviewed, activeEntry.id).sessionTroubleCount ?? 0) + 1
            : getCardProgress(reviewed, activeEntry.id).sessionTroubleCount
      } satisfies CardProgress;

      return {
        ...reviewed,
        [activeEntry.id]: updated
      };
    });

    if (isFirstPass && status === "again") {
      setSessionAgainIds((current) => (current.includes(activeEntry.id) ? current : [...current, activeEntry.id]));
    }

    moveNext();
  }

  function startSessionAgainFlashcards() {
    const entries = phase === "sessionRetrievalComplete" && reviewQueue.length > 0
      ? reviewQueue
      : getCurrentSessionAgainEntries();
    if (entries.length === 0) {
      continueAfterSession();
      return;
    }

    setReviewQueue(shuffleWithRng(entries));
    setCardIndex(0);
    setRevealed(false);
    setPhase("sessionAgainFlashcards");
  }

  function startSessionTypedReview() {
    const entries = getCurrentSessionAgainEntries();
    if (entries.length === 0) {
      continueAfterSession();
      return;
    }
    startRetrieval(entries, getMilestoneActionLabel(direction, REVIEW_MODE.sessionNewTypedPortuguese), "session");
  }

  function returnToSessionReviewChoice() {
    setRetrievalState(null);
    setReviewQueue([]);
    setCardIndex(0);
    setRevealed(false);
    setPhase("sessionMilestone");
  }

  function continueAfterSession() {
    const completedSessionIndex = sessionIndex;
    const completedSession = sessionPlan.sessions[completedSessionIndex];
    const nextSession = sessionPlan.sessions[completedSessionIndex + 1];
    const finishedModule = !nextSession || nextSession.moduleIndex !== completedSession?.moduleIndex;

    setSessionAgainIds([]);
    setReviewQueue([]);
    setCardIndex(0);
    setRevealed(false);

    if (finishedModule) {
      setPhase("moduleMilestone");
      return;
    }

    setSessionIndex(nextSession.globalSessionIndex);
    setPhase("study");
  }

  function continueAfterModule() {
    const nextSession = sessionPlan.sessions[sessionIndex + 1];
    setCardIndex(0);
    setRevealed(false);

    if (nextSession) {
      setSessionIndex(nextSession.globalSessionIndex);
      setPhase("study");
      return;
    }

    setPhase(modulo === "all" ? "finalMilestone" : "complete");
  }

  function startModuleTypedReview() {
    const moduleEntries = getCurrentModuleEntries();
    const dueEntries = moduleEntries.filter((entry) => getCardProgress(progress, entry.id).everAgain);
    if (dueEntries.length === 0) {
      continueAfterModule();
      return;
    }

    const troubleExtras = moduleEntries.filter((entry) => (getCardProgress(progress, entry.id).sessionTroubleCount ?? 0) > 0);
    startRetrieval([...dueEntries, ...troubleExtras], getMilestoneActionLabel(direction, REVIEW_MODE.sessionNewTypedPortuguese), "module");
  }

  function startFinalTypedReview(mode: ReviewModeId) {
    const baseEntries =
      mode === REVIEW_MODE.finalFirstPassUnknownRandomTypedPortuguese
        ? selectedEntries.filter((entry) => getCardProgress(progress, entry.id).firstPassStatus === "again")
        : selectedEntries;

    const expandedEntries = expandFinalReviewEntries(baseEntries);
    startRetrieval(expandedEntries, "Final typing review", "final");
  }

  function startRetrieval(entries: VocabularyEntry[], title: string, context: RetrievalContext) {
    setRetrievalState({
      title,
      context,
      prompts: buildRetrievalReviewPrompts(entries, direction, createSeededRng(Date.now()))
    });
    setPhase("retrieval");
    setCardIndex(0);
    setRevealed(false);
  }

  function handleRetrievalComplete(results: RetrievalReviewResult[]) {
    const context = retrievalState?.context;

    setProgress((current) =>
      results.reduce<ProgressState>((nextProgress, result) => {
        const status: Exclude<CardStatus, "new"> = result.outcome === "correct" ? "known" : "again";
        const reviewed = recordReview(nextProgress, result.id, status);
        const currentCard = getCardProgress(reviewed, result.id);
        const failed = result.outcome !== "correct";

        return {
          ...reviewed,
          [result.id]: {
            ...currentCard,
            everAgain: failed ? true : currentCard.everAgain,
            sessionTroubleCount:
              failed && context === "session"
                ? (currentCard.sessionTroubleCount ?? 0) + 1
                : currentCard.sessionTroubleCount,
            moduleTroubleCount:
              failed && context === "module" ? (currentCard.moduleTroubleCount ?? 0) + 1 : currentCard.moduleTroubleCount
          }
        };
      }, current)
    );

    setRetrievalState(null);

    if (context === "session") {
      const missed = results.filter((result) => result.outcome !== "correct").map((result) => result.entry);
      if (missed.length > 0) {
        setReviewQueue(missed);
        setCardIndex(0);
        setPhase("sessionRetrievalComplete");
        return;
      }
      continueAfterSession();
      return;
    }

    if (context === "module") {
      continueAfterModule();
      return;
    }

    setPhase("complete");
  }

  function getCurrentSessionAgainEntries() {
    const idSet = new Set(sessionAgainIds);
    return (currentSession?.entries ?? []).filter((entry) => idSet.has(entry.id));
  }

  function getCurrentModuleEntries() {
    if (!currentSession) return selectedEntries;
    return sessionPlan.modules[currentSession.moduleIndex]?.entries ?? [];
  }

  function expandFinalReviewEntries(baseEntries: VocabularyEntry[]) {
    const entries = [...baseEntries];
    const baseIds = new Set(baseEntries.map((entry) => entry.id));
    const moduleTrouble = selectedEntries.filter(
      (entry) => baseIds.has(entry.id) && (getCardProgress(progress, entry.id).moduleTroubleCount ?? 0) > 0
    );
    const sessionTrouble = selectedEntries.filter(
      (entry) =>
        baseIds.has(entry.id) &&
        (getCardProgress(progress, entry.id).sessionTroubleCount ?? 0) > 0 &&
        (getCardProgress(progress, entry.id).moduleTroubleCount ?? 0) === 0
    );

    entries.push(...sessionTrouble);
    entries.push(...moduleTrouble, ...moduleTrouble);

    const fillerItems = selectedEntries.filter((entry) => !baseIds.has(entry.id));
    return expandRepeatReviewQueue(
      entries.map((entry) => ({ id: entry.id, entry, outcome: "again" })),
      { repeatCount: 1, fillerItems }
    );
  }

  function renderStudyContent() {
    if (phase === "retrieval" && retrievalState) {
      return (
        <RetrievalReview
          prompts={retrievalState.prompts}
          direction={direction}
          ui={ui}
          title={retrievalState.title}
          onComplete={handleRetrievalComplete}
          onGoBack={retrievalState.context === "session" ? returnToSessionReviewChoice : undefined}
        />
      );
    }

    if (phase === "sessionMilestone") {
      return (
        <MilestonePanel
          title={getSessionMilestoneCopy(direction, recognizedCount).title}
          actions={
            getCurrentSessionAgainEntries().length === 0
              ? [{ id: "continue", label: "Start next session", onClick: continueAfterSession }]
              : getSessionMilestoneCopy(direction, recognizedCount).actions.map((action) => ({
                  id: action.id,
                  label: action.label,
                  onClick:
                    action.id === REVIEW_MODE.sessionAgainFlashcards
                      ? startSessionAgainFlashcards
                      : startSessionTypedReview
                }))
          }
        />
      );
    }

    if (phase === "moduleMilestone") {
      const copy = currentSession
        ? getModuleMilestoneCopy(direction, currentSession.modulo)
        : { title: "Module complete", actions: [] };
      const dueCount = getCurrentModuleEntries().filter((entry) => getCardProgress(progress, entry.id).everAgain).length;
      return (
        <MilestonePanel
          title={copy.title}
          actions={
            dueCount === 0
              ? [{ id: "continue", label: modulo === "all" ? "Continue" : "Finish", onClick: continueAfterModule }]
              : copy.actions.map((action) => ({
                  id: action.id,
                  label: action.label,
                  onClick: startModuleTypedReview
                }))
          }
        />
      );
    }

    if (phase === "sessionRetrievalComplete") {
      return (
        <MilestonePanel
          title="Session review complete"
          actions={[
            {
              id: REVIEW_MODE.sessionAgainFlashcards,
              label: getSessionMilestoneCopy(direction, recognizedCount).actions[0].label,
              onClick: startSessionAgainFlashcards
            },
            { id: "continue", label: "Start next session", onClick: continueAfterSession }
          ]}
        />
      );
    }

    if (phase === "finalMilestone") {
      const copy = getFinalMilestoneCopy(direction);
      return (
        <MilestonePanel
          title={copy.title}
          actions={copy.actions.map((action) => ({
            id: action.id,
            label: action.label,
            onClick: () => startFinalTypedReview(action.id)
          }))}
        />
      );
    }

    if (phase === "complete") {
      return (
        <section className="empty-state">
          <h2>{ui.noCardsTitle}</h2>
          <p>{ui.noCardsBody}</p>
        </section>
      );
    }

    return activeEntry ? (
      phase === "sessionAgainFlashcards" ? (
        <div className="review-switch-shell">
          <button className="review-switch-back" type="button" onClick={returnToSessionReviewChoice}>
            {ui.goBack}
          </button>
          <Flashcard
            entry={activeEntry}
            direction={direction}
            revealed={revealed}
            autoPlayPronunciation={autoPlayPronunciation}
            showFirstWordTip={false}
            ui={ui}
            onToggleReveal={() => setRevealed((current) => !current)}
            onPrevious={movePrevious}
            onAgain={() => handleReview("again")}
            onKnown={() => handleReview("known")}
          />
        </div>
      ) : (
        <Flashcard
          entry={activeEntry}
          direction={direction}
          revealed={revealed}
          autoPlayPronunciation={autoPlayPronunciation && phase === "study"}
          showFirstWordTip={phase === "study" && sessionIndex === 0 && cardIndex === 0}
          ui={ui}
          onToggleReveal={() => setRevealed((current) => !current)}
          onPrevious={movePrevious}
          onAgain={() => handleReview("again")}
          onKnown={() => handleReview("known")}
        />
      )
    ) : (
      <section className="empty-state">
        <h2>{ui.noCardsTitle}</h2>
        <p>{ui.noCardsBody}</p>
      </section>
    );
  }

  return (
    <main className="app-shell">
      <span
        className="authorship-fingerprint"
        data-author={AUTHORSHIP_OWNER}
        data-fingerprint={AUTHORSHIP_FINGERPRINT}
        aria-hidden="true"
      >
        {AUTHORSHIP_FINGERPRINT}
      </span>
      <section className="workspace">
        <header className="app-header">
          <div>
            <p className="eyebrow">European Portuguese A1 + A2</p>
            <h1>Azulejo</h1>
            <p className="app-subtitle">your Portuguese, tile by tile</p>
          </div>
        </header>

        <section className="study-surface">
          <section className="select-controls" aria-label={ui.studyControls}>
            <label>
              {ui.module}
              <select value={modulo} onChange={(event) => setModulo(event.target.value)}>
                <option value="all">{ui.allModules}</option>
                {modulos.map((item) => (
                  <option key={item} value={item}>
                    {ui.moduloLabel(item)}
                  </option>
                ))}
              </select>
            </label>
            <label>
              {ui.language}
              <select value={direction} onChange={(event) => setDirection(event.target.value as Direction)}>
                <option value="pt-en">Portuguese to English</option>
                <option value="en-pt">English to Portuguese</option>
                <option value="pt-zh-hans">葡萄牙语 → 简体中文</option>
                <option value="zh-hans-pt">简体中文 → 葡萄牙语</option>
                <option value="pt-zh-hant">葡萄牙語 → 繁體中文</option>
                <option value="zh-hant-pt">繁體中文 → 葡萄牙語</option>
              </select>
            </label>
          </section>

          <div className="study-toggles">
            <label className="toggle">
              <input
                type="checkbox"
                checked={autoPlayPronunciation}
                onChange={(event) => setAutoPlayPronunciation(event.target.checked)}
              />
              {ui.autoPlayPronunciation}
            </label>
          </div>

          {renderStudyContent()}
        </section>
      </section>

      <ProgressDashboard entries={vocabulary} progress={progress} ui={ui} />
    </main>
  );
}

interface MilestonePanelProps {
  title: string;
  actions: Array<{
    id: string;
    label: string;
    onClick: () => void;
  }>;
}

function MilestonePanel({ title, actions }: MilestonePanelProps) {
  return (
    <section className="review-panel milestone-panel">
      <h2>{renderMilestoneTitle(title)}</h2>
      <div className="milestone-actions">
        {actions.map((action, index) => (
          <button key={action.id} className={index === 0 ? "primary" : "secondary"} type="button" onClick={action.onClick}>
            {action.label}
          </button>
        ))}
      </div>
    </section>
  );
}

function renderMilestoneTitle(title: string) {
  const countMatch = title.match(/\d+/);

  if (!countMatch || countMatch.index === undefined) return title;

  return (
    <>
      {title.slice(0, countMatch.index)}
      <span className="milestone-count">{countMatch[0]}</span>
      {title.slice(countMatch.index + countMatch[0].length)}
    </>
  );
}
