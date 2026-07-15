import { Brain, Download, Printer, Save, Search, Volume2 } from "lucide-react";
import { type ChangeEvent, type ReactNode, type TouchEvent, useEffect, useMemo, useRef, useState } from "react";
import { Flashcard } from "./components/Flashcard";
import { GlobalSearchView } from "./components/GlobalSearchView";
import { ModuleQuiz } from "./components/ModuleQuiz";
import { ProgressDashboard } from "./components/ProgressDashboard";
import { RetrievalReview } from "./components/RetrievalReview";
import { situacaoCheatSheetLines, situacaoDialogueLines, situacaoGroups, situacaoLabels } from "./data/situacoes";
import { vocabulary } from "./data/vocabulary";
import { getVocabularyForSituacao, situacaoVocabulary, wordBank, WORDBANK_VERSION } from "./data/wordBank";
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
import { buildModuleQuizScopes } from "./lib/moduleQuiz";
import { getCardProgress, recordReview } from "./lib/progress";
import { getWordAudioPath } from "./lib/audioPaths";
import {
  buildRetrievalReviewPrompts,
  createSeededRng,
  expandRepeatReviewQueue,
  shuffleWithRng,
  type RetrievalReviewResult
} from "./lib/retrievalReview";
import { playPortugueseAudio } from "./lib/portugueseAudio";
import { getPortugueseBareText } from "./lib/portugueseDisplay";
import { buildSessionPlan, type VocabularySession } from "./lib/sessionPlan";
import {
  clearActiveSession,
  exportAll,
  getActiveSession,
  getLastLocation,
  getProgress as loadStoredProgress,
  getSetting,
  importAll,
  setActiveSession,
  setLastLocation,
  setProgress as saveStoredProgress,
  setSetting
} from "./lib/storage";
import type {
  ActiveSessionState,
  CardProgress,
  CardStatus,
  Direction,
  LastLocationState,
  ModuleQuizResult,
  ProgressState,
  SituacaoContentLine,
  VocabularyEntry
} from "./types";
import "./styles.css";

type StudyPhase =
  | "study"
  | "sessionMilestone"
  | "sessionAgainFlashcards"
  | "sessionRetrievalComplete"
  | "moduleMilestone"
  | "finalMilestone"
  | "retrieval"
  | "quiz";

type QuizReturnPhase = Exclude<StudyPhase, "quiz" | "retrieval">;

type RetrievalContext = "session" | "module" | "final";
type AppMode = "manual" | "situacoes";
type SituacaoTab = "vocabulario" | "dialogo" | "cartao";
const DEFAULT_SITUACAO_ID = situacaoGroups[0]?.items[0]?.id ?? "banco";
const DEFAULT_MODULO = "Módulo 1";
const RESUME_MAX_AGE_MS = 48 * 60 * 60 * 1000;
const SITUACAO_SWIPE_TIP_SETTING = "situacaoSwipeTipDismissed";
const LANGUAGE_OPTIONS: Array<{ value: Direction; label: string }> = [
  { value: "pt-en", label: "Portuguese \u2192 English" },
  { value: "pt-zh-hans", label: "\u8461\u8404\u7259\u8bed \u2192 \u7b80\u4f53\u4e2d\u6587" },
  { value: "pt-zh-hant", label: "\u8461\u8404\u7259\u8a9e \u2192 \u7e41\u9ad4\u4e2d\u6587" }
];
const SUPPORTED_DIRECTIONS = new Set<Direction>(LANGUAGE_OPTIONS.map((option) => option.value));
const MODULE_THEME_LABELS: Record<string, Record<"en" | "zhHans" | "zhHant", string>> = {
  "Módulo 1": { en: "Basics", zhHans: "基础", zhHant: "基礎" },
  "Módulo 2": { en: "Daily", zhHans: "日常", zhHant: "日常" },
  "Módulo 3": { en: "Food", zhHans: "饮食", zhHant: "飲食" },
  "Módulo 4": { en: "Leisure", zhHans: "休闲", zhHant: "休閒" },
  "Módulo 5": { en: "Services", zhHans: "办事", zhHant: "辦事" },
  "Módulo 6": { en: "Health", zhHans: "健康", zhHant: "健康" },
  "Módulo 7": { en: "Work", zhHans: "工作", zhHant: "工作" },
  "Módulo 8": { en: "Jobs", zhHans: "求职", zhHant: "求職" },
  "Módulo 9": { en: "Places", zhHans: "地点", zhHant: "地點" },
  "Módulo 10": { en: "Habits", zhHans: "习惯", zhHant: "習慣" },
  "Módulo 11": { en: "Letters", zhHans: "信件", zhHant: "信件" },
  "Módulo 12": { en: "Civic", zhHans: "公民", zhHant: "公民" }
};
const SITUACAO_TARGET_LABELS: Record<string, Record<"en" | "zhHans" | "zhHant", string>> = {
  banco: { en: "bank", zhHans: "银行", zhHant: "銀行" },
  financas: { en: "tax office", zhHans: "税务局", zhHant: "稅務局" },
  correios: { en: "post office", zhHans: "邮局", zhHant: "郵局" },
  junta_de_freguesia: { en: "parish council", zhHans: "堂区委员会", zhHant: "堂區委員會" },
  saude: { en: "healthcare", zhHans: "医疗", zhHant: "醫療" },
  aima: { en: "immigration office", zhHans: "移民局", zhHant: "移民局" },
  escola: { en: "school", zhHans: "学校", zhHant: "學校" },
  iefp: { en: "job centre", zhHans: "就业中心", zhHant: "就業中心" },
  seguranca_social: { en: "social security", zhHans: "社会保障", zhHant: "社會保障" },
  arrendamento: { en: "renting", zhHans: "租房", zhHant: "租屋" },
  transportes: { en: "transport", zhHans: "交通", zhHant: "交通" },
  trabalho_hotelaria: { en: "hotel work", zhHans: "酒店工作", zhHant: "酒店工作" },
  trabalho_restauracao: { en: "restaurant work", zhHans: "餐饮工作", zhHant: "餐飲工作" },
  trabalho_limpezas: { en: "cleaning work", zhHans: "清洁工作", zhHant: "清潔工作" },
  trabalho_construcao: { en: "construction work", zhHans: "建筑工作", zhHant: "建築工作" },
  trabalho_entregas: { en: "delivery work", zhHans: "外送工作", zhHant: "外送工作" },
  veterinario: { en: "vet", zhHans: "兽医", zhHant: "獸醫" },
  ginasio: { en: "gym", zhHans: "健身房", zhHant: "健身房" },
  convivio: { en: "social gathering", zhHans: "聚会", zhHant: "聚會" },
  vizinhos: { en: "neighbours", zhHans: "邻居", zhHant: "鄰居" },
  cabeleireiro_barbeiro: { en: "hairdresser and barber", zhHans: "理发店", zhHant: "理髮店" },
  farmacia: { en: "pharmacy", zhHans: "药房", zhHant: "藥房" }
};

interface RetrievalState {
  title: string;
  context: RetrievalContext;
  prompts: ReturnType<typeof buildRetrievalReviewPrompts>;
}

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
}

export default function App() {
  const [progress, setProgress] = useState<ProgressState>({});
  const [storageReady, setStorageReady] = useState(false);
  const [appMode, setAppMode] = useState<AppMode>("manual");
  const [globalSearchOpen, setGlobalSearchOpen] = useState(false);
  const [modulo, setModulo] = useState(DEFAULT_MODULO);
  const [situacaoId, setSituacaoId] = useState(DEFAULT_SITUACAO_ID);
  const [situacaoTab, setSituacaoTab] = useState<SituacaoTab>("vocabulario");
  const [situacaoCardIndex, setSituacaoCardIndex] = useState(0);
  const [situacaoRevealed, setSituacaoRevealed] = useState(false);
  const [situacaoVocabularyComplete, setSituacaoVocabularyComplete] = useState(false);
  const [autoPlayPronunciation, setAutoPlayPronunciation] = useState(true);
  const [direction, setDirection] = useState<Direction>("pt-en");
  const [sessionIndex, setSessionIndex] = useState(0);
  const [cardIndex, setCardIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [phase, setPhase] = useState<StudyPhase>("study");
  const [sessionAgainIds, setSessionAgainIds] = useState<string[]>([]);
  const [reviewQueue, setReviewQueue] = useState<VocabularyEntry[]>([]);
  const [retrievalState, setRetrievalState] = useState<RetrievalState | null>(null);
  const [quizScopeId, setQuizScopeId] = useState<string | null>(null);
  const [quizReturnPhase, setQuizReturnPhase] = useState<QuizReturnPhase>("study");
  const [moduleQuizResults, setModuleQuizResults] = useState<Record<string, ModuleQuizResult>>({});
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallHelp, setShowInstallHelp] = useState(false);
  const [appInstalled, setAppInstalled] = useState(false);
  const [firstWordTipDismissed, setFirstWordTipDismissed] = useState(false);
  const [situacaoSwipeTipDismissed, setSituacaoSwipeTipDismissed] = useState<boolean | null>(null);
  const [progressFileMessage, setProgressFileMessage] = useState("");
  const [importCandidate, setImportCandidate] = useState<unknown | null>(null);
  const [resumeSession, setResumeSession] = useState<ActiveSessionState | null>(null);
  const [manualQueueOverrideIds, setManualQueueOverrideIds] = useState<string[] | null>(null);
  const [situacaoQueueOverrideIds, setSituacaoQueueOverrideIds] = useState<string[] | null>(null);
  const [directAutoPlayKey, setDirectAutoPlayKey] = useState<string | null>(null);
  const progressFileInputRef = useRef<HTMLInputElement | null>(null);
  const activeSessionRef = useRef<ActiveSessionState | null>(null);
  const restoredNavigationRef = useRef(false);
  const modeSwipeStartRef = useRef<{ x: number; y: number } | null>(null);
  const modeSwipeLastRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    let cancelled = false;

    Promise.all([loadStoredProgress(), getActiveSession(), getLastLocation()])
      .then(([storedProgress, storedSession, storedLocation]) => {
        if (cancelled) return;
        setProgress((current) => (Object.keys(current).length > 0 ? current : storedProgress));
        if (isFreshActiveSession(storedSession)) {
          applyActiveSessionLocation(storedSession);
          setResumeSession(storedSession);
          activeSessionRef.current = storedSession;
          prepareRestoredHistory();
        } else if (isFreshLastLocation(storedLocation)) {
          applyLastLocation(storedLocation);
          prepareRestoredHistory();
        }
      })
      .catch((error) => {
        console.error("Could not load progress.", error);
      })
      .finally(() => {
        if (!cancelled) setStorageReady(true);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    let cancelled = false;
    getSetting<boolean>(SITUACAO_SWIPE_TIP_SETTING)
      .then((dismissed) => {
        if (!cancelled) setSituacaoSwipeTipDismissed(dismissed === true);
      })
      .catch((error) => {
        console.error("Could not load the Situações swipe tip setting.", error);
        if (!cancelled) setSituacaoSwipeTipDismissed(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!storageReady) return;
    saveStoredProgress(progress).catch((error) => {
      console.error("Could not save progress.", error);
    });
  }, [progress, storageReady]);

  useEffect(() => {
    const supportedDirection = normalizeSupportedDirection(direction);
    if (supportedDirection !== direction) {
      setDirection(supportedDirection);
    }
  }, [direction]);

  useEffect(() => {
    if (!storageReady) return;
    const location: LastLocationState = {
      view: appMode,
      params:
        appMode === "manual"
          ? { modulo, direction }
          : { situacaoId, situacaoTab, direction },
      updatedAt: new Date().toISOString()
    };
    setLastLocation(location).catch((error) => {
      console.error("Could not save last location.", error);
    });
  }, [appMode, direction, modulo, situacaoId, situacaoTab, storageReady]);

  useEffect(() => {
    function flushActiveSession() {
      if (!activeSessionRef.current) return;
      persistActiveSession({ ...activeSessionRef.current, updatedAt: new Date().toISOString() });
    }

    function handleVisibilityChange() {
      if (document.visibilityState === "hidden") flushActiveSession();
    }

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("pagehide", flushActiveSession);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("pagehide", flushActiveSession);
    };
  }, []);

  useEffect(() => {
    const standalone =
      window.matchMedia?.("(display-mode: standalone)").matches ||
      ("standalone" in window.navigator && Boolean((window.navigator as Navigator & { standalone?: boolean }).standalone));
    setAppInstalled(standalone);

    function handleBeforeInstallPrompt(event: Event) {
      event.preventDefault();
      setInstallPrompt(event as BeforeInstallPromptEvent);
    }

    function handleAppInstalled() {
      setAppInstalled(true);
      setShowInstallHelp(false);
      setInstallPrompt(null);
    }

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  useEffect(() => {
    function handlePopState() {
      if (!restoredNavigationRef.current) return;
      restoredNavigationRef.current = false;
      setAppMode("manual");
      setGlobalSearchOpen(false);
      setModulo(DEFAULT_MODULO);
      setSituacaoId(DEFAULT_SITUACAO_ID);
      setSituacaoTab("vocabulario");
      setResumeSession(null);
      setManualQueueOverrideIds(null);
      setSituacaoQueueOverrideIds(null);
      resetFlow();
    }

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const modulos = useMemo(() => getModulos(vocabulary), []);
  const wordById = useMemo(() => new Map(wordBank.map((entry) => [entry.id, entry])), []);
  const selectedEntries = useMemo(() => {
    if (modulo === "all") return shuffleWithRng(vocabulary);
    return vocabulary.filter((entry) => entry.modulo === modulo);
  }, [modulo]);
  const selectedSituacaoEntries = useMemo(() => getVocabularyForSituacao(situacaoId), [situacaoId]);
  const selectedSituacaoQueueEntries = useMemo(
    () => (situacaoQueueOverrideIds ? entriesFromIds(situacaoQueueOverrideIds, wordById) : selectedSituacaoEntries),
    [selectedSituacaoEntries, situacaoQueueOverrideIds, wordById]
  );
  const selectedSituacaoDialogue = useMemo(
    () => situacaoDialogueLines.filter((line) => line.situacao === situacaoId),
    [situacaoId]
  );
  const selectedSituacaoCheatSheet = useMemo(
    () => situacaoCheatSheetLines.filter((line) => line.situacao === situacaoId),
    [situacaoId]
  );
  const sessionPlan = useMemo(() => buildSessionPlan(selectedEntries), [selectedEntries]);
  const quizScopes = useMemo(() => buildModuleQuizScopes(selectedEntries), [selectedEntries]);
  const currentSession = sessionPlan.sessions[sessionIndex];
  const ui = getUiCopy(direction);

  const currentStudyEntries = manualQueueOverrideIds ? entriesFromIds(manualQueueOverrideIds, wordById) : currentSession?.entries;
  const visibleEntries =
    phase === "sessionAgainFlashcards" ? reviewQueue : currentStudyEntries ?? selectedEntries;
  const activeEntry = visibleEntries[cardIndex];
  const activeSituacaoEntry = selectedSituacaoQueueEntries[situacaoCardIndex];
  const recognizedCount = new Set(
    selectedEntries.filter((entry) => getCardProgress(progress, entry.id).status === "known").map((entry) => entry.id)
  ).size;
  const completedModuleQuizResults = useMemo(
    () =>
      quizScopes
        .map((scope) => moduleQuizResults[scope.id])
        .filter((result): result is ModuleQuizResult => Boolean(result)),
    [moduleQuizResults, quizScopes]
  );

  useEffect(() => {
    resetFlow();
  }, [modulo, direction]);

  useEffect(() => {
    setSituacaoQueueOverrideIds(null);
    setSituacaoCardIndex(0);
    setSituacaoRevealed(false);
    setSituacaoVocabularyComplete(false);
  }, [situacaoId, direction]);

  function resetFlow() {
    setDirectAutoPlayKey(null);
    setManualQueueOverrideIds(null);
    setSessionIndex(0);
    setCardIndex(0);
    setRevealed(false);
    setPhase("study");
    setSessionAgainIds([]);
    setReviewQueue([]);
    setRetrievalState(null);
    setQuizScopeId(null);
    setQuizReturnPhase("study");
  }

  function handleStartOver() {
    setProgress({});
    setModuleQuizResults({});
    setResumeSession(null);
    clearPersistedActiveSession();
    setSituacaoCardIndex(0);
    setSituacaoRevealed(false);
    resetFlow();
  }

  function handleGlobalSearchStatus(entry: VocabularyEntry, status: Exclude<CardStatus, "new">) {
    const reviewedAt = new Date().toISOString();
    setProgress((current) => {
      const reviewed = recordReview(current, entry.id, status, reviewedAt);
      if (status !== "again") return reviewed;

      return {
        ...reviewed,
        [entry.id]: {
          ...reviewed[entry.id],
          everAgain: true
        }
      };
    });
  }

  function moveNextSituacaoCard() {
    if (selectedSituacaoQueueEntries.length === 0) return;
    setSituacaoRevealed(false);
    const nextIndex = situacaoCardIndex + 1;
    if (nextIndex >= selectedSituacaoQueueEntries.length) {
      clearPersistedActiveSession();
      setSituacaoVocabularyComplete(true);
      return;
    }
    playEntryOnDirectNavigation(selectedSituacaoQueueEntries[nextIndex]);
    setSituacaoCardIndex(nextIndex);
  }

  function movePreviousSituacaoCard() {
    if (selectedSituacaoQueueEntries.length === 0) return;
    setSituacaoRevealed(false);
    setSituacaoVocabularyComplete(false);
    const previousIndex = (situacaoCardIndex - 1 + selectedSituacaoQueueEntries.length) % selectedSituacaoQueueEntries.length;
    playEntryOnDirectNavigation(selectedSituacaoQueueEntries[previousIndex]);
    setSituacaoCardIndex(previousIndex);
  }

  function handleSituacaoReview(status: Exclude<CardStatus, "new">) {
    if (!activeSituacaoEntry) return;

    setProgress((current) => recordReview(current, activeSituacaoEntry.id, status));
    const nextPosition = situacaoCardIndex + 1;
    const queue = selectedSituacaoQueueEntries.map((entry) => entry.id);
    if (nextPosition < queue.length) {
      persistActiveSession(createSituacaoActiveSession(queue, nextPosition, []));
    }
    moveNextSituacaoCard();
  }

  function handleSituacaoSessionBack() {
    if (activeSituacaoEntry && selectedSituacaoQueueEntries.length > 0) {
      persistActiveSession(createSituacaoActiveSession(selectedSituacaoQueueEntries.map((entry) => entry.id), situacaoCardIndex, []));
    }
    setAppMode("manual");
    setGlobalSearchOpen(false);
    window.scrollTo({ top: 0 });
  }

  function showManualMode() {
    if (appMode === "situacoes") {
      handleSituacaoSessionBack();
      return;
    }
    setAppMode("manual");
    setGlobalSearchOpen(false);
  }

  function showSituacoesMode() {
    setAppMode("situacoes");
    setGlobalSearchOpen(false);
  }

  function dismissSituacaoSwipeTip() {
    setSituacaoSwipeTipDismissed(true);
    setSetting(SITUACAO_SWIPE_TIP_SETTING, true).catch((error) => {
      console.error("Could not save the Situações swipe tip setting.", error);
    });
  }

  function handleModeSwipeTouchStart(event: TouchEvent<HTMLElement>) {
    if (!isMobileViewport() || event.touches.length !== 1) return;
    const touch = event.touches[0];
    const startsAtLeftEdge = touch.clientX <= window.innerWidth * 0.15;
    const startsAtRightEdge = touch.clientX >= window.innerWidth * 0.85;
    if (!startsAtLeftEdge && !startsAtRightEdge) return;
    modeSwipeStartRef.current = { x: touch.clientX, y: touch.clientY };
    modeSwipeLastRef.current = { x: touch.clientX, y: touch.clientY };
  }

  function handleModeSwipeTouchMove(event: TouchEvent<HTMLElement>) {
    if (!modeSwipeStartRef.current || event.touches.length !== 1) return;
    const touch = event.touches[0];
    modeSwipeLastRef.current = { x: touch.clientX, y: touch.clientY };
  }

  function handleModeSwipeTouchEnd(event: TouchEvent<HTMLElement>) {
    const start = modeSwipeStartRef.current;
    const changedTouch = event.changedTouches[0];
    const last = changedTouch ? { x: changedTouch.clientX, y: changedTouch.clientY } : modeSwipeLastRef.current;
    modeSwipeStartRef.current = null;
    modeSwipeLastRef.current = null;
    if (!start || !last) return;

    const horizontalDistance = last.x - start.x;
    const verticalDrift = Math.abs(last.y - start.y);
    if (verticalDrift >= 40) return;

    if (start.x <= window.innerWidth * 0.15 && horizontalDistance >= 80) showManualMode();
    if (start.x >= window.innerWidth * 0.85 && horizontalDistance <= -80) showSituacoesMode();
  }

  function handleModeSwipeTouchCancel() {
    modeSwipeStartRef.current = null;
    modeSwipeLastRef.current = null;
  }

  function restartSituacaoVocabulary() {
    setSituacaoCardIndex(0);
    setSituacaoRevealed(false);
    setSituacaoVocabularyComplete(false);
  }

  function saveSituacaoCheatSheet() {
    const label = situacaoLabels[situacaoId] ?? situacaoId;
    const content = selectedSituacaoCheatSheet
      .map((line) => `${line.pt}\n${line.en}\n${getChineseText(line)}${line.note ? `\n${line.note}` : ""}`)
      .join("\n\n");
    const blob = new Blob([`${label}\n\n${content}\n`], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `azulejo-${situacaoId}-cartao.txt`;
    link.click();
    URL.revokeObjectURL(url);
  }

  function dismissFirstWordTip() {
    setFirstWordTipDismissed(true);
  }

  function moveNext() {
    setRevealed(false);
    const nextIndex = cardIndex + 1;

    if (phase === "sessionAgainFlashcards") {
      if (nextIndex >= reviewQueue.length) {
        finishSessionReview();
        return;
      }
      playEntryOnDirectNavigation(reviewQueue[nextIndex]);
      setCardIndex(nextIndex);
      return;
    }

    if (!currentSession) return;
    if (nextIndex >= currentSession.entries.length) {
      setPhase("sessionMilestone");
      setCardIndex(0);
      return;
    }

    playEntryOnDirectNavigation(currentSession.entries[nextIndex]);
    setCardIndex(nextIndex);
  }

  function movePrevious() {
    setRevealed(false);
    const entries = phase === "sessionAgainFlashcards" ? reviewQueue : currentSession?.entries;
    if (!entries?.length) return;
    const previousIndex = (cardIndex - 1 + entries.length) % entries.length;
    playEntryOnDirectNavigation(entries[previousIndex]);
    setCardIndex(previousIndex);
  }

  function playEntryOnDirectNavigation(entry: VocabularyEntry | undefined) {
    if (!entry || !autoPlayPronunciation || !direction.startsWith("pt-")) return;
    const key = `${entry.id}:${direction}`;
    setDirectAutoPlayKey(key);
    playPortugueseAudio(getWordAudioPath(entry), getPortugueseBareText(entry));
  }

  function handleReview(status: Exclude<CardStatus, "new">) {
    if (!activeEntry) return;

    const isFirstPass = phase === "study";
    const isSessionReview = phase === "sessionAgainFlashcards";
    const queue = visibleEntries.map((entry) => entry.id);
    const nextPosition = cardIndex + 1;
    const nextAgainQueue =
      isFirstPass && status === "again" && !sessionAgainIds.includes(activeEntry.id)
        ? [...sessionAgainIds, activeEntry.id]
        : sessionAgainIds;

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
      setSessionAgainIds(nextAgainQueue);
    }

    if (nextPosition >= queue.length) {
      clearPersistedActiveSession();
    } else {
      persistActiveSession(createManualActiveSession(queue, nextPosition, nextAgainQueue, isSessionReview ? "sessionAgainFlashcards" : "study"));
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

    const shuffledEntries = shuffleWithRng(entries);
    setReviewQueue(shuffledEntries);
    setCardIndex(0);
    setRevealed(false);
    setPhase("sessionAgainFlashcards");
    playEntryOnDirectNavigation(shuffledEntries[0]);
    persistActiveSession(createManualActiveSession(shuffledEntries.map((entry) => entry.id), 0, sessionAgainIds, "sessionAgainFlashcards"));
  }

  function startSessionTypedReview() {
    const entries = getCurrentSessionAgainEntries();
    if (entries.length === 0) {
      continueAfterSession();
      return;
    }
    startRetrieval(entries, getMilestoneActionLabel(direction, REVIEW_MODE.sessionNewTypedPortuguese), "session");
  }

  async function handleAddToHomeScreen() {
    if (installPrompt) {
      await installPrompt.prompt();
      setInstallPrompt(null);
      return;
    }

    setShowInstallHelp((current) => !current);
  }

  async function handleExportProgress() {
    try {
      const exportedAt = new Date().toISOString();
      const backup = {
        app: "azulejo",
        version: WORDBANK_VERSION,
        exportedAt,
        data: await exportAll()
      };
      const blob = new Blob([`${JSON.stringify(backup, null, 2)}\n`], { type: "application/json;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `azulejo-progresso-${exportedAt.slice(0, 10)}.json`;
      link.click();
      URL.revokeObjectURL(url);
      setProgressFileMessage(ui.exportProgressSuccess);
    } catch {
      setProgressFileMessage(ui.exportProgressError);
    }
  }

  function handleImportProgressClick() {
    setProgressFileMessage("");
    progressFileInputRef.current?.click();
  }

  async function handleImportProgressFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    event.target.value = "";
    setImportCandidate(null);

    if (!file) return;

    try {
      const parsed = JSON.parse(await file.text()) as unknown;
      if (!parsed || typeof parsed !== "object" || (parsed as { app?: unknown }).app !== "azulejo") {
        throw new Error("Invalid backup.");
      }
      if (!("data" in parsed) || typeof (parsed as { data?: unknown }).data !== "object") {
        throw new Error("Invalid backup.");
      }
      setImportCandidate(parsed);
      setProgressFileMessage("");
    } catch {
      setProgressFileMessage(ui.importError);
    }
  }

  async function confirmImportProgress() {
    if (!importCandidate) return;

    try {
      await importAll(importCandidate);
      setProgress(await loadStoredProgress());
      setImportCandidate(null);
      setProgressFileMessage(ui.importProgressSuccess);
    } catch {
      setProgressFileMessage(ui.importError);
    }
  }

  function cancelImportProgress() {
    setImportCandidate(null);
    setProgressFileMessage("");
  }

  function applyActiveSessionLocation(session: ActiveSessionState) {
    setAppMode(session.mode);
    setDirection(normalizeSupportedDirection(session.direction));

    if (session.mode === "manual") {
      setModulo(session.moduleOrScenarioId || DEFAULT_MODULO);
      setSituacaoQueueOverrideIds(null);
      setPhase("study");
      setCardIndex(0);
      setRevealed(false);
      return;
    }

    setSituacaoId(session.moduleOrScenarioId || DEFAULT_SITUACAO_ID);
    setSituacaoTab("vocabulario");
    setSituacaoCardIndex(0);
    setSituacaoRevealed(false);
    setSituacaoVocabularyComplete(false);
  }

  function applyLastLocation(location: LastLocationState) {
    setAppMode(location.view);
    if (location.params.direction) setDirection(normalizeSupportedDirection(location.params.direction));

    if (location.view === "manual") {
      if (location.params.modulo) setModulo(location.params.modulo);
      return;
    }

    if (location.params.situacaoId) setSituacaoId(location.params.situacaoId);
    if (location.params.situacaoTab) setSituacaoTab(location.params.situacaoTab);
  }

  function prepareRestoredHistory() {
    if (typeof window === "undefined") return;
    window.history.replaceState({ azulejoView: "home" }, "");
    window.history.pushState({ azulejoView: "restored" }, "");
    restoredNavigationRef.current = true;
  }

  function persistActiveSession(session: ActiveSessionState) {
    activeSessionRef.current = session;
    setActiveSession(session).catch((error) => {
      console.error("Could not save active session.", error);
    });
  }

  function clearPersistedActiveSession() {
    activeSessionRef.current = null;
    setResumeSession(null);
    clearActiveSession().catch((error) => {
      console.error("Could not clear active session.", error);
    });
  }

  function createManualActiveSession(
    queue: string[],
    position: number,
    againQueue: string[],
    sessionPhase: ActiveSessionState["phase"] = "study"
  ): ActiveSessionState {
    const now = new Date().toISOString();
    const current = activeSessionRef.current;
    return {
      mode: "manual",
      moduleOrScenarioId: modulo,
      direction,
      queue,
      position,
      againQueue,
      phase: sessionPhase,
      sessionIndex: currentSession?.globalSessionIndex ?? sessionIndex,
      startedAt:
        current?.mode === "manual" && current.moduleOrScenarioId === modulo && current.phase === sessionPhase
          ? current.startedAt
          : now,
      updatedAt: now
    };
  }

  function createSituacaoActiveSession(queue: string[], position: number, againQueue: string[]): ActiveSessionState {
    const now = new Date().toISOString();
    const current = activeSessionRef.current;
    return {
      mode: "situacoes",
      moduleOrScenarioId: situacaoId,
      direction,
      queue,
      position,
      againQueue,
      phase: "study",
      startedAt:
        current?.mode === "situacoes" && current.moduleOrScenarioId === situacaoId ? current.startedAt : now,
      updatedAt: now
    };
  }

  function continueActiveSession() {
    if (!resumeSession) return;
    const position = clampIndex(resumeSession.position, resumeSession.queue.length);

    if (resumeSession.mode === "manual") {
      setAppMode("manual");
      setDirection(normalizeSupportedDirection(resumeSession.direction));
      setModulo(resumeSession.moduleOrScenarioId || DEFAULT_MODULO);
      setSessionIndex(resumeSession.sessionIndex ?? findSessionIndexForQueue(resumeSession.queue));
      setSessionAgainIds(resumeSession.againQueue);
      setCardIndex(position);
      setRevealed(false);

      if (resumeSession.phase === "sessionAgainFlashcards") {
        setManualQueueOverrideIds(null);
        setReviewQueue(entriesFromIds(resumeSession.queue, wordById));
        setPhase("sessionAgainFlashcards");
      } else {
        setManualQueueOverrideIds(resumeSession.queue);
        setReviewQueue([]);
        setPhase("study");
      }
    } else {
      setAppMode("situacoes");
      setDirection(normalizeSupportedDirection(resumeSession.direction));
      setSituacaoId(resumeSession.moduleOrScenarioId || DEFAULT_SITUACAO_ID);
      setSituacaoTab("vocabulario");
      setSituacaoQueueOverrideIds(resumeSession.queue);
      setSituacaoCardIndex(position);
      setSituacaoRevealed(false);
      setSituacaoVocabularyComplete(false);
    }

    const refreshed = { ...resumeSession, position, updatedAt: new Date().toISOString() };
    setResumeSession(null);
    persistActiveSession(refreshed);
  }

  function restartActiveSession() {
    setManualQueueOverrideIds(null);
    setSituacaoQueueOverrideIds(null);
    clearPersistedActiveSession();
    if (appMode === "situacoes") {
      restartSituacaoVocabulary();
      return;
    }
    resetFlow();
  }

  function findSessionIndexForQueue(queue: string[]) {
    const firstId = queue[0];
    const matchingSession = sessionPlan.sessions.find((session) => session.entries.some((entry) => entry.id === firstId));
    return matchingSession?.globalSessionIndex ?? 0;
  }

  function renderResumePrompt() {
    if (!resumeSession || !isResumeSessionForCurrentLocation(resumeSession)) return null;
    const nextPosition = Math.min(resumeSession.position + 1, resumeSession.queue.length);
    const resumeCopy = getResumeSessionCopy(ui.locale);
    return (
      <div className="resume-session-prompt" role="status">
        <span>{`${resumeCopy.title} (${nextPosition}/${resumeSession.queue.length})`}</span>
        <div>
          <button type="button" onClick={continueActiveSession}>
            {resumeCopy.continueLabel}
          </button>
          <button type="button" onClick={restartActiveSession}>
            {resumeCopy.restartLabel}
          </button>
        </div>
      </div>
    );
  }

  function isResumeSessionForCurrentLocation(session: ActiveSessionState) {
    if (session.mode !== appMode || session.direction !== direction) return false;
    if (session.mode === "manual") return session.moduleOrScenarioId === modulo;
    return session.moduleOrScenarioId === situacaoId && situacaoTab === "vocabulario";
  }

  function returnToSessionReviewChoice() {
    clearPersistedActiveSession();
    setRetrievalState(null);
    setReviewQueue([]);
    setCardIndex(0);
    setRevealed(false);
    setPhase("sessionMilestone");
  }

  function finishSessionReview() {
    clearPersistedActiveSession();
    setCardIndex(0);
    setRevealed(false);
    setPhase("sessionRetrievalComplete");
  }

  function continueAfterSession({ skipBoundaryQuiz = false }: { skipBoundaryQuiz?: boolean } = {}) {
    const completedSessionIndex = sessionIndex;
    const completedSession = sessionPlan.sessions[completedSessionIndex];
    const nextSession = sessionPlan.sessions[completedSessionIndex + 1];
    const finishedModule = !nextSession || nextSession.moduleIndex !== completedSession?.moduleIndex;
    const pendingQuizScope = getSessionBoundaryQuizScope(completedSession);

    setSessionAgainIds([]);
    setReviewQueue([]);
    setCardIndex(0);
    setRevealed(false);
    setManualQueueOverrideIds(null);
    clearPersistedActiveSession();

    if (!skipBoundaryQuiz && pendingQuizScope && !moduleQuizResults[pendingQuizScope.id]) {
      setQuizScopeId(pendingQuizScope.id);
      setQuizReturnPhase("sessionRetrievalComplete");
      setPhase("quiz");
      return;
    }

    if (finishedModule) {
      setPhase("moduleMilestone");
      return;
    }

    setSessionIndex(nextSession.globalSessionIndex);
    setPhase("study");
    playEntryOnDirectNavigation(nextSession.entries[0]);
  }

  function continueAfterModule() {
    const nextSession =
      currentSession === undefined
        ? sessionPlan.sessions[sessionIndex + 1]
        : sessionPlan.sessions.find((session) => session.moduleIndex > currentSession.moduleIndex);
    setCardIndex(0);
    setRevealed(false);

    if (nextSession) {
      setSessionIndex(nextSession.globalSessionIndex);
      setPhase("study");
      playEntryOnDirectNavigation(nextSession.entries[0]);
      return;
    }

    if (modulo === "all") {
      setPhase("finalMilestone");
      return;
    }

    const nextStandaloneModulo = getNextStandaloneModulo();
    if (nextStandaloneModulo) {
      setModulo(nextStandaloneModulo);
      resetFlow();
      return;
    }

    resetFlow();
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

  function startModuleQuiz(
    returnPhase: QuizReturnPhase = phase === "moduleMilestone" ? "moduleMilestone" : "study",
    scopeId?: string | null
  ) {
    const initialScope = scopeId ?? getCurrentQuizScope()?.id ?? quizScopes[0]?.id ?? null;
    setQuizScopeId(initialScope);
    setQuizReturnPhase(returnPhase);
    setPhase("quiz");
    setCardIndex(0);
    setRevealed(false);
  }

  function finishModuleQuiz() {
    setPhase(quizReturnPhase);
    setQuizScopeId(null);
  }

  function startNewModuleAfterQuiz() {
    setQuizScopeId(null);
    continueAfterModule();
  }

  function continueAfterSessionQuiz() {
    setQuizScopeId(null);
    continueAfterSession({ skipBoundaryQuiz: true });
  }

  function handleModuleQuizComplete(result: ModuleQuizResult) {
    setModuleQuizResults((current) => ({
      ...current,
      [result.scopeId]: result
    }));
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
        finishSessionReview();
        return;
      }
      setReviewQueue([]);
      finishSessionReview();
      return;
    }

    if (context === "module") {
      continueAfterModule();
      return;
    }

    setPhase("finalMilestone");
  }

  function getCurrentSessionAgainEntries() {
    const idSet = new Set(sessionAgainIds);
    return (currentSession?.entries ?? []).filter((entry) => idSet.has(entry.id));
  }

  function getCurrentModuleEntries() {
    if (!currentSession) return selectedEntries;
    return sessionPlan.modules[currentSession.moduleIndex]?.entries ?? [];
  }

  function getCurrentQuizScope() {
    const moduleEntries = getCurrentModuleEntries();
    const firstEntry = moduleEntries[0];
    if (!firstEntry) return quizScopes[0];
    return quizScopes.find((scope) => scope.modulo === firstEntry.modulo);
  }

  function getModuleCompletionQuizScope() {
    const moduleEntries = getCurrentModuleEntries();
    const firstEntry = moduleEntries[0];
    if (!firstEntry) return quizScopes[0];
    return [...quizScopes]
      .reverse()
      .find((scope) => scope.modulo === firstEntry.modulo && scope.endIndex === moduleEntries.length);
  }

  function getSessionBoundaryQuizScope(session?: VocabularySession) {
    if (!session) return null;
    const modulePlan = sessionPlan.modules[session.moduleIndex];
    if (!modulePlan || session.endIndex >= modulePlan.totalEntries) return null;
    return quizScopes.find((scope) => scope.modulo === session.modulo && scope.endIndex === session.endIndex) ?? null;
  }

  function getNextStandaloneModulo() {
    if (modulo === "all") return null;
    const currentModulo = currentSession?.modulo ?? modulo;
    const currentModuloIndex = modulos.indexOf(currentModulo);
    return currentModuloIndex >= 0 ? modulos[currentModuloIndex + 1] ?? null : null;
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

  function getChineseText(line: SituacaoContentLine) {
    return ui.locale === "zhHans" ? line.zhHans : line.zhHant;
  }

  function getSituacaoTranslation(line: SituacaoContentLine) {
    return direction.includes("zh") ? getChineseText(line) : line.en;
  }

  function renderModeTabs() {
    const showSituacaoSwipeTip =
      appMode === "situacoes" && situacaoTab === "vocabulario" && Boolean(activeSituacaoEntry) && situacaoSwipeTipDismissed === false;
    const modeLabels = getModeTabLabels(ui.locale);

    return (
      <div className="header-nav-actions">
        <div className="mode-tabs" role="tablist" aria-label="Study mode">
          <button
            type="button"
            role="tab"
            aria-selected={appMode === "manual" && !globalSearchOpen}
            className={appMode === "manual" && !globalSearchOpen ? "is-active" : ""}
            onClick={showManualMode}
          >
            {modeLabels.manual}
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={appMode === "situacoes" && !globalSearchOpen}
            className={appMode === "situacoes" && !globalSearchOpen ? "is-active" : ""}
            onClick={showSituacoesMode}
          >
            {modeLabels.situacoes}
          </button>
        </div>
        <button
          className={`icon-button header-search-button${globalSearchOpen ? " is-active" : ""}`}
          type="button"
          aria-label={ui.search}
          aria-pressed={globalSearchOpen}
          title={ui.search}
          onClick={() => setGlobalSearchOpen((current) => !current)}
        >
          <Search size={17} aria-hidden="true" />
        </button>
        {showSituacaoSwipeTip && (
          <aside className="situacao-swipe-tip" role="status">
            <p>{getSituacaoSwipeTipCopy(ui.locale)}</p>
            <button type="button" onClick={dismissSituacaoSwipeTip}>
              {ui.gotIt}
            </button>
          </aside>
        )}
      </div>
    );
  }

  function renderLanguageSelect() {
    return (
      <label className="language-control" data-label={ui.language}>
        <span>{ui.language}</span>
        <select value={normalizeSupportedDirection(direction)} onChange={(event) => setDirection(event.target.value as Direction)}>
          {LANGUAGE_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    );
  }

  function renderManualControls() {
    return (
      <>
        {phase !== "quiz" && (
          <section className="select-controls" aria-label={ui.studyControls}>
            <label className="module-control" data-label={ui.module}>
              <span>{ui.module}</span>
              <select value={modulo} onChange={(event) => setModulo(event.target.value)}>
                {modulos.map((item) => (
                  <option key={item} value={item}>
                    {formatModuloOptionLabel(ui.moduloLabel(item), getModuleThemeLabel(item, ui.locale))}
                  </option>
                ))}
                <option value="all">{ui.allModules}</option>
              </select>
            </label>
            {renderLanguageSelect()}
          </section>
        )}

        {renderStudyContent()}

        <div className="study-toggles">
          {quizScopes.length > 0 && phase === "study" && (
            <button className="secondary module-quiz-start" type="button" onClick={() => startModuleQuiz("study")}>
              <Brain size={16} aria-hidden="true" />
              {ui.startQuiz}
            </button>
          )}
          <label className="toggle auto-audio-toggle">
            <input
              type="checkbox"
              checked={autoPlayPronunciation}
              onChange={(event) => setAutoPlayPronunciation(event.target.checked)}
            />
            {ui.autoPlayPronunciation}
          </label>
        </div>
      </>
    );
  }

  function renderSituacaoControls() {
    return (
      <>
        <section className="select-controls situacao-controls" aria-label="Controlo de Situações">
          <label className="situacao-select-control" data-label={getSituacaoControlLabel(ui.locale)}>
            <span>Situação</span>
            <select value={situacaoId} onChange={(event) => setSituacaoId(event.target.value)}>
              {situacaoGroups.map((group) => (
                <optgroup key={group.label} label={group.label}>
                  {group.items.map((item) => (
                    <option key={item.id} value={item.id}>
                      {formatSituacaoOptionLabel(item.id, item.label, ui.locale)}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </label>
          {renderLanguageSelect()}
        </section>

        <div className="study-toggles situacao-toggles">
          <label className="toggle auto-audio-toggle">
            <input
              type="checkbox"
              checked={autoPlayPronunciation}
              onChange={(event) => setAutoPlayPronunciation(event.target.checked)}
            />
            {ui.autoPlayPronunciation}
          </label>
        </div>

        {renderSituacoesContent()}
      </>
    );
  }

  function renderSituacoesContent() {
    return (
      <section className="situacao-mode">
        <div className="situacao-tabs" role="tablist" aria-label="Conteúdo da situação">
          <button
            type="button"
            role="tab"
            aria-selected={situacaoTab === "vocabulario"}
            className={situacaoTab === "vocabulario" ? "is-active" : ""}
            onClick={() => setSituacaoTab("vocabulario")}
          >
            Vocabulário
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={situacaoTab === "dialogo"}
            className={situacaoTab === "dialogo" ? "is-active" : ""}
            onClick={() => setSituacaoTab("dialogo")}
          >
            Diálogo
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={situacaoTab === "cartao"}
            className={situacaoTab === "cartao" ? "is-active" : ""}
            onClick={() => setSituacaoTab("cartao")}
          >
            Cartão
          </button>
        </div>

        {situacaoTab === "vocabulario" && renderSituacaoVocabulary()}
        {situacaoTab === "dialogo" && renderSituacaoDialogue()}
        {situacaoTab === "cartao" && renderSituacaoCard()}
      </section>
    );
  }

  function renderSituacaoVocabulary() {
    if (situacaoVocabularyComplete) {
      return (
        <MilestonePanel
          title={getSituacaoVocabularyCompleteCopy(direction, selectedSituacaoEntries.length).title}
          actions={[
            {
              id: "review-situacao-vocab",
              label: getSituacaoVocabularyCompleteCopy(direction, selectedSituacaoEntries.length).actionLabel,
              onClick: restartSituacaoVocabulary
            }
          ]}
        />
      );
    }

    return activeSituacaoEntry ? (
      <>
        {renderResumePrompt()}
        <div className="situacao-session-touch-area">
          <Flashcard
            entry={activeSituacaoEntry}
            direction={direction}
            revealed={situacaoRevealed}
            autoPlayPronunciation={autoPlayPronunciation}
            skipAutoPlayKey={directAutoPlayKey}
            showFirstWordTip={false}
            ui={ui}
          onToggleReveal={() => setSituacaoRevealed((current) => !current)}
          onPrevious={movePreviousSituacaoCard}
          onAgain={() => handleSituacaoReview("again")}
          onKnown={() => handleSituacaoReview("known")}
        />
        </div>
      </>
    ) : (
      <section className="empty-state">
        <h2>{ui.noCardsTitle}</h2>
        <p>{ui.noCardsBody}</p>
      </section>
    );
  }

  function renderSituacaoDialogue() {
    return (
      <section className="situacao-list dialogue-list" aria-label="Diálogo">
        {selectedSituacaoDialogue.map((line) => (
          <article className="situacao-line" key={line.id}>
            <button
              className="icon-button situacao-listen"
              type="button"
              onClick={() => playPortugueseAudio(`audio/pt/situacoes/dialogo/${line.id}.m4a`, line.pt)}
              aria-label={`${ui.listen}: ${line.pt}`}
              title={ui.listen}
            >
              <Volume2 size={18} aria-hidden="true" />
            </button>
            <div>
              <p className="situacao-pt">{line.pt}</p>
              <p className="situacao-translation">{getSituacaoTranslation(line)}</p>
              {line.note && <p className="situacao-note">{line.note}</p>}
            </div>
          </article>
        ))}
      </section>
    );
  }

  function renderSituacaoCard() {
    return (
      <section className="situacao-card" aria-label="Cartão">
        <div className="situacao-card-actions">
          <button className="secondary" type="button" onClick={saveSituacaoCheatSheet}>
            <Save size={16} aria-hidden="true" />
            Save
          </button>
          <button className="secondary" type="button" onClick={() => window.print()}>
            <Printer size={16} aria-hidden="true" />
            Print
          </button>
        </div>
        <div className="situacao-card-lines">
          {selectedSituacaoCheatSheet.map((line) => (
            <article className="situacao-card-line" key={line.id}>
              <button
                className="icon-button situacao-listen"
                type="button"
                onClick={() => playPortugueseAudio(`audio/pt/situacoes/cartao/${line.id}.m4a`, line.pt)}
                aria-label={`${ui.listen}: ${line.pt}`}
                title={ui.listen}
              >
                <Volume2 size={18} aria-hidden="true" />
              </button>
              <div>
                <p className="situacao-card-pt">{line.pt}</p>
                <p className="situacao-translation">{getSituacaoTranslation(line)}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  }

  function renderStudyContent() {
    if (phase === "quiz") {
      return (
        <ModuleQuiz
          scopes={quizScopes}
          allEntries={selectedEntries}
          direction={direction}
          initialScopeId={quizScopeId}
          ui={ui}
          onComplete={handleModuleQuizComplete}
          onExit={finishModuleQuiz}
          onCompletionExit={
            quizReturnPhase === "moduleMilestone"
              ? startNewModuleAfterQuiz
              : quizReturnPhase === "sessionRetrievalComplete"
                ? continueAfterSessionQuiz
                : finishModuleQuiz
          }
          completionExitLabel={
            quizReturnPhase === "moduleMilestone"
              ? ui.startNewModule
              : quizReturnPhase === "sessionRetrievalComplete"
                ? ui.startNextSession
                : ui.goBack
          }
        />
      );
    }

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
              ? [{ id: "continue", label: ui.startNextSession, onClick: continueAfterSession }]
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
      const hasNextModule =
        modulo === "all"
          ? Boolean(currentSession && sessionPlan.sessions.some((session) => session.moduleIndex > currentSession.moduleIndex))
          : Boolean(getNextStandaloneModulo());
      const moduleContinueLabel = hasNextModule ? ui.startNewModule : "Finish";
      return (
        <MilestonePanel
          title={copy.title}
          actions={
            dueCount === 0
              ? [
                  { id: "quiz", label: ui.startQuiz, onClick: () => startModuleQuiz("moduleMilestone", getModuleCompletionQuizScope()?.id) },
                  { id: "continue", label: moduleContinueLabel, onClick: continueAfterModule }
                ]
              : [
                  ...copy.actions.map((action) => ({
                    id: action.id,
                    label: action.label,
                    onClick: startModuleTypedReview
                  })),
                  { id: "quiz", label: ui.startQuiz, onClick: () => startModuleQuiz("moduleMilestone", getModuleCompletionQuizScope()?.id) },
                  { id: "continue", label: moduleContinueLabel, onClick: continueAfterModule }
                ]
          }
        />
      );
    }

    if (phase === "sessionRetrievalComplete") {
      return (
        <MilestonePanel
          title={ui.sessionReviewComplete}
          actions={[
            {
              id: REVIEW_MODE.sessionAgainFlashcards,
              label: getSessionMilestoneCopy(direction, recognizedCount).actions[0].label,
              onClick: startSessionAgainFlashcards
            },
            { id: "continue", label: ui.startNextSession, onClick: continueAfterSession }
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
        >
          <ModuleQuizScoreSummary results={completedModuleQuizResults} ui={ui} />
        </MilestonePanel>
      );
    }

    return activeEntry ? (
      <>
        {renderResumePrompt()}
        {phase === "sessionAgainFlashcards" ? (
          <div className="review-switch-shell">
            <button className="review-switch-back" type="button" onClick={returnToSessionReviewChoice}>
              {ui.goBack}
            </button>
            <Flashcard
              entry={activeEntry}
              direction={direction}
              revealed={revealed}
              autoPlayPronunciation={autoPlayPronunciation}
              skipAutoPlayKey={directAutoPlayKey}
              showFirstWordTip={false}
              ui={ui}
              onFirstWordTipDismiss={dismissFirstWordTip}
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
            skipAutoPlayKey={directAutoPlayKey}
            showFirstWordCue={phase === "study" && sessionIndex === 0 && cardIndex === 0}
            showFirstWordTip={phase === "study" && sessionIndex === 0 && cardIndex === 0 && !firstWordTipDismissed}
            ui={ui}
            onFirstWordTipDismiss={dismissFirstWordTip}
            onToggleReveal={() => setRevealed((current) => !current)}
            onPrevious={movePrevious}
            onAgain={() => handleReview("again")}
            onKnown={() => handleReview("known")}
          />
        )}
      </>
    ) : (
      <section className="empty-state">
        <h2>{ui.noCardsTitle}</h2>
        <p>{ui.noCardsBody}</p>
      </section>
    );
  }

  function renderInstallControl() {
    if (appInstalled) return null;

    return (
      <div className="install-app-control">
        <button className="secondary install-app-button" type="button" onClick={handleAddToHomeScreen}>
          <Download size={16} aria-hidden="true" />
          {ui.addToHomeScreen}
        </button>
        {showInstallHelp && (
          <div className="install-app-help" role="status">
            <p>{ui.addToHomeScreenHelp}</p>
            <button className="install-app-dismiss" type="button" onClick={() => setShowInstallHelp(false)}>
              {ui.gotIt}
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <main
      className="app-shell"
      onTouchStart={handleModeSwipeTouchStart}
      onTouchMove={handleModeSwipeTouchMove}
      onTouchEnd={handleModeSwipeTouchEnd}
      onTouchCancel={handleModeSwipeTouchCancel}
    >
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
          <div className="app-header-top">
            <p className="eyebrow">European Portuguese A1 + A2</p>
            {renderModeTabs()}
          </div>
          <h1>Azulejo</h1>
          <p className="app-subtitle">your Portuguese, tile by tile</p>
        </header>

        <section
          className={`study-surface ${appMode === "situacoes" ? "situacao-study-surface" : ""}${globalSearchOpen ? " global-search-study-surface" : ""}`}
        >
          {globalSearchOpen ? (
            <GlobalSearchView
              entries={wordBank}
              progress={progress}
              direction={direction}
              ui={ui}
              onBack={() => setGlobalSearchOpen(false)}
              onSetStatus={handleGlobalSearchStatus}
            />
          ) : appMode === "manual" ? (
            renderManualControls()
          ) : (
            renderSituacaoControls()
          )}
        </section>
      </section>

      <ProgressDashboard
        entries={appMode === "manual" ? vocabulary : situacaoVocabulary}
        progress={progress}
        ui={ui}
        mode={appMode}
        situacaoGroups={situacaoGroups}
        getModuleThemeLabel={(moduleName) => getModuleThemeLabel(moduleName, ui.locale)}
        onStartOver={handleStartOver}
      />
      {renderInstallControl()}
      <footer className="progress-file-footer">
        <input
          ref={progressFileInputRef}
          type="file"
          accept="application/json"
          className="progress-file-input"
          onChange={handleImportProgressFile}
        />
        <div className="progress-file-actions">
          <button type="button" onClick={handleExportProgress}>
            {ui.exportProgress}
          </button>
          <button type="button" onClick={handleImportProgressClick}>
            {ui.importProgress}
          </button>
        </div>
        {progressFileMessage && <p className="progress-file-message">{progressFileMessage}</p>}
        {Boolean(importCandidate) && (
          <div className="progress-file-confirm">
            <p className="progress-file-message">{ui.replaceProgressConfirmation}</p>
            <button type="button" onClick={confirmImportProgress}>
              {ui.replace}
            </button>
            <button type="button" onClick={cancelImportProgress}>
              {ui.cancel}
            </button>
          </div>
        )}
      </footer>
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
  children?: ReactNode;
}

function MilestonePanel({ title, actions, children }: MilestonePanelProps) {
  return (
    <section className="review-panel milestone-panel">
      <h2>{renderMilestoneTitle(title)}</h2>
      {children}
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

interface ModuleQuizScoreSummaryProps {
  results: ModuleQuizResult[];
  ui: ReturnType<typeof getUiCopy>;
}

function ModuleQuizScoreSummary({ results, ui }: ModuleQuizScoreSummaryProps) {
  if (results.length === 0) return null;

  const totalCorrect = results.reduce((sum, result) => sum + result.correct, 0);
  const totalQuestions = results.reduce((sum, result) => sum + result.total, 0);

  return (
    <section className="module-quiz-score-summary" aria-label={ui.moduleQuizScores}>
      <p>{ui.finalQuizScore(totalCorrect, totalQuestions)}</p>
      <div className="module-quiz-score-list">
        {results.map((result) => (
          <div className="module-quiz-score-row" key={result.scopeId}>
            <span>{result.label}</span>
            <strong>{ui.quizScore(result.correct, result.total)}</strong>
          </div>
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

function entriesFromIds(ids: string[], entriesById: Map<string, VocabularyEntry>) {
  return ids.map((id) => entriesById.get(id)).filter((entry): entry is VocabularyEntry => Boolean(entry));
}

function isFreshActiveSession(session: ActiveSessionState | undefined): session is ActiveSessionState {
  return Boolean(session && isFreshTimestamp(session.updatedAt) && session.queue.length > 0 && session.position < session.queue.length);
}

function isFreshLastLocation(location: LastLocationState | undefined): location is LastLocationState {
  return Boolean(location && isFreshTimestamp(location.updatedAt));
}

function isFreshTimestamp(value: string) {
  const timestamp = Date.parse(value);
  return Number.isFinite(timestamp) && Date.now() - timestamp < RESUME_MAX_AGE_MS;
}

function clampIndex(index: number, length: number) {
  if (length <= 0) return 0;
  return Math.min(Math.max(index, 0), length - 1);
}

function formatModuloOptionLabel(moduloLabel: string, themeLabel?: string) {
  return themeLabel ? `${moduloLabel} · ${themeLabel}` : moduloLabel;
}

function normalizeSupportedDirection(direction: Direction) {
  return SUPPORTED_DIRECTIONS.has(direction) ? direction : "pt-en";
}

function isMobileViewport() {
  return window.matchMedia("(max-width: 768px)").matches;
}

function getModuleThemeLabel(modulo: string, locale: "en" | "zhHans" | "zhHant") {
  return MODULE_THEME_LABELS[modulo]?.[locale];
}

function formatSituacaoOptionLabel(situacaoId: string, label: string, locale: "en" | "zhHans" | "zhHant") {
  const targetLabel = SITUACAO_TARGET_LABELS[situacaoId]?.[locale];
  return targetLabel ? `${label} - ${targetLabel}` : label;
}

function getSituacaoControlLabel(locale: "en" | "zhHans" | "zhHant") {
  if (locale === "zhHans") return "场景";
  if (locale === "zhHant") return "場景";
  return "Situation";
}

function getModeTabLabels(locale: "en" | "zhHans" | "zhHant") {
  if (locale === "zhHans") return { manual: "课本", situacoes: "场景" };
  if (locale === "zhHant") return { manual: "課本", situacoes: "場景" };
  return { manual: "Manual", situacoes: "Situations" };
}

function getSituacaoSwipeTipCopy(locale: "en" | "zhHans" | "zhHant") {
  if (locale === "zhHans") return "从右边缘向左滑进入场景，从左边缘向右滑返回手动学习。进度会保存。";
  if (locale === "zhHant") return "從右邊緣向左滑進入場景，從左邊緣向右滑返回手動學習。進度會儲存。";
  return "Swipe left from the right edge for Situations, or right from the left edge for Manual. Your progress is saved.";
}

function getResumeSessionCopy(locale: "en" | "zhHans" | "zhHant") {
  if (locale === "zhHans") {
    return { title: "继续学习", continueLabel: "继续学习", restartLabel: "重新开始" };
  }
  if (locale === "zhHant") {
    return { title: "繼續學習", continueLabel: "繼續學習", restartLabel: "重新開始" };
  }
  return { title: "Continue session", continueLabel: "Continue session", restartLabel: "Restart" };
}

function getSituacaoVocabularyCompleteCopy(direction: Direction, wordCount: number) {
  if (direction.includes("zh-hans")) {
    return {
      title: `恭喜！你已经学完这个场景的 ${wordCount} 个核心词！`,
      actionLabel: "再复习一遍"
    };
  }

  if (direction.includes("zh-hant")) {
    return {
      title: `恭喜！你已經學完這個情境的 ${wordCount} 個核心單字！`,
      actionLabel: "再複習一遍"
    };
  }

  return {
    title: `Congrats! You have learned ${wordCount} essential words for this situation!`,
    actionLabel: "Review again"
  };
}
