import { Brain, ChevronLeft, Download, Printer, Save, Search, Settings, Volume2 } from "lucide-react";
import { type ChangeEvent, type ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { Flashcard } from "./components/Flashcard";
import { GuidedTour } from "./components/GuidedTour";
import { GlobalSearchView } from "./components/GlobalSearchView";
import { ModuleQuiz } from "./components/ModuleQuiz";
import { ProgressDashboard } from "./components/ProgressDashboard";
import { RetrievalReview } from "./components/RetrievalReview";
import { SituacaoTabs } from "./components/SituacaoTabs";
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
import {
  buildRetrievalReviewPrompts,
  createSeededRng,
  expandRepeatReviewQueue,
  shuffleWithRng,
  type RetrievalReviewResult
} from "./lib/retrievalReview";
import { playPortugueseAudio, speakWithBrowserVoice } from "./lib/portugueseAudio";
import { buildSessionPlan, type VocabularySession } from "./lib/sessionPlan";
import {
  clearActiveSession,
  exportAll,
  getActiveSession,
  getLastLocation,
  getProgress as loadStoredProgress,
  getSetting,
  hasFreshStudyLocation,
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
type AppView = "entry" | "study";
type SituacaoTab = "vocabulario" | "dialogo" | "cartao";
const DEFAULT_SITUACAO_ID = situacaoGroups[0]?.items[0]?.id ?? "banco";
const DEFAULT_MODULO = "Módulo 1";
const RESUME_MAX_AGE_MS = 30 * 24 * 60 * 60 * 1000;
const LANGUAGE_SETTING = "translationLanguage";
const GUIDED_TOUR_SETTING = "guidedTour";
const STUDY_TOUR_STEPS = [
  { targetSelector: ".study-entry-back" },
  { targetSelector: ".study-selector-pill" },
  { targetSelector: ".flip-tile" },
  { targetSelector: ".review-again" },
  { targetSelector: ".review-known" },
  { targetSelector: ".card-previous" },
  { targetSelector: ".module-quiz-start" }
] as const;
const SITUACAO_TOUR_STEPS = [
  ...STUDY_TOUR_STEPS.slice(0, -1),
  { targetSelector: ".situacao-conversation-tab" },
  { targetSelector: ".dialogue-turn" }
] as const;
const SITUACAO_DIALOGUE_TOUR_STEP = SITUACAO_TOUR_STEPS.length - 1;
const STUDY_TOUR_COPY: Record<"en" | "zhHans" | "zhHant", readonly string[]> = {
  en: [
    "Tap ‹ to go back and switch between Manual and Situações.",
    "Use this menu to choose the module you want to study.",
    "Tap the tile to check the meaning.",
    "Tap Again if you want to see this word again soon.",
    "Tap Known if you've got it. It'll come back later, less often.",
    "Swipe right on the tile, or tap here, to go back a word.",
    "Test yourself on the words you've studied. After 40 words, a quiz will appear automatically."
  ],
  zhHans: [
    "点击 ‹ 返回并切换“课本”和“场景”。",
    "使用此菜单选择想学习的单元。",
    "点击卡片查看词义。",
    "如果想很快再看到这个词，请点击“再练习”。",
    "如果已经掌握，请点击“已掌握”。之后它会降低出现频率。",
    "在卡片上向右滑，或点击这里，返回上一个词。",
    "用小测验检查学过的词。学习 40 个词后，小测验会自动出现。"
  ],
  zhHant: [
    "點擊 ‹ 返回並切換「課本」和「場景」。",
    "使用此選單選擇想學習的單元。",
    "點擊卡片查看單字意思。",
    "如果想很快再看到這個單字，請點擊「再練習」。",
    "如果已經掌握，請點擊「已掌握」。之後它會降低出現頻率。",
    "在卡片上向右滑，或點擊這裡，返回上一個單字。",
    "用小測驗檢查學過的單字。學習 40 個單字後，小測驗會自動出現。"
  ]
};
const SITUACAO_SELECTOR_TOUR_COPY: Record<"en" | "zhHans" | "zhHant", string> = {
  en: "Use this menu to choose the real-life situation you want to practise.",
  zhHans: "使用此菜单选择想练习的真实生活场景。",
  zhHant: "使用此選單選擇想練習的真實生活場景。"
};
const SITUACAO_EXTRA_TOUR_COPY: Record<"en" | "zhHans" | "zhHant", readonly [string, string]> = {
  en: [
    "Practise real-life conversations in Dialogue, and use Cheat sheet to review key phrases at a glance.",
    "In Dialogue, tap any sentence to reveal its meaning."
  ],
  zhHans: [
    "在“对话”中练习日常生活中用得到的对话，并通过“速查卡”快速查看重点短语。",
    "在“对话”中，点击任意句子即可查看意思。"
  ],
  zhHant: [
    "在「對話」中練習日常生活中用得到的對話，並透過「速查卡」快速查看重點短語。",
    "在「對話」中，點擊任意句子即可查看意思。"
  ]
};
const LANGUAGE_OPTIONS: Array<{ value: Direction; label: string }> = [
  { value: "pt-en", label: "English" },
  { value: "pt-zh-hant", label: "\u7e41\u9ad4\u4e2d\u6587" },
  { value: "pt-zh-hans", label: "\u7b80\u4f53\u4e2d\u6587" }
];
const SUPPORTED_DIRECTIONS = new Set<Direction>(LANGUAGE_OPTIONS.map((option) => option.value));
const MODULE_THEME_LABELS: Record<string, Record<"en" | "zhHans" | "zhHant", string>> = {
  "Módulo 1": { en: "Basics", zhHans: "基础", zhHant: "基礎" },
  "Módulo 2": { en: "Routines", zhHans: "作息", zhHant: "作息" },
  "Módulo 3": { en: "Food", zhHans: "饮食", zhHant: "飲食" },
  "Módulo 4": { en: "Leisure", zhHans: "休闲", zhHant: "休閒" },
  "Módulo 5": { en: "Services", zhHans: "办事", zhHant: "辦事" },
  "Módulo 6": { en: "Health", zhHans: "健康", zhHant: "健康" },
  "Módulo 7": { en: "Workplace", zhHans: "职场", zhHant: "職場" },
  "Módulo 8": { en: "Jobs", zhHans: "求职", zhHant: "求職" },
  "Módulo 9": { en: "People", zhHans: "描述", zhHant: "描述" },
  "Módulo 10": { en: "Lifestyle", zhHans: "生活", zhHant: "生活" },
  "Módulo 11": { en: "Writing", zhHans: "沟通", zhHant: "溝通" },
  "Módulo 12": { en: "Civic", zhHans: "公民", zhHant: "公民" }
};
const MODULE_THEME_LABELS_PT: Record<string, string> = {
  "Módulo 1": "Básico",
  "Módulo 2": "Rotinas",
  "Módulo 3": "Alimentação",
  "Módulo 4": "Lazer",
  "Módulo 5": "Serviços",
  "Módulo 6": "Saúde",
  "Módulo 7": "Trabalho",
  "Módulo 8": "Emprego",
  "Módulo 9": "Descrições",
  "Módulo 10": "Estilo de vida",
  "Módulo 11": "Comunicação",
  "Módulo 12": "Cidadania"
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
  farmacia: { en: "pharmacy", zhHans: "药房", zhHant: "藥房" },
  supermercado_mercado: { en: "supermarket and market", zhHans: "超市与市场", zhHant: "超市與市場" },
  cafe_restaurante: { en: "café and restaurant", zhHans: "咖啡馆与餐厅", zhHant: "咖啡店與餐廳" },
  consultorio_medico: { en: "doctor's office", zhHans: "医生诊所", zhHant: "醫生診所" },
  casa_reparacoes: { en: "home repairs", zhHans: "家居维修", zhHant: "家居維修" },
  agua_luz_gas: { en: "water, electricity and gas", zhHans: "水电燃气", zhHant: "水電煤氣" },
  telemovel_internet: { en: "mobile and internet", zhHans: "手机与网络", zhHant: "手機與網絡" },
  trocas_devolucoes: { en: "exchanges and returns", zhHans: "换货与退货", zhHant: "換貨與退貨" },
  policia_documentos: { en: "police and lost documents", zhHans: "警察与证件遗失", zhHant: "警察與證件遺失" },
  espaco_cidadao: { en: "Citizen's Desk", zhHans: "市民服务中心", zhHant: "市民服務中心" },
  imt_carta_conducao: { en: "IMT and driving licence", zhHans: "交通局与驾驶证", zhHant: "交通局與駕駛執照" },
  conservatoria_registo_civil: { en: "registry and civil records", zhHans: "登记处与民事登记", zhHant: "登記處與民事登記" },
  camara_municipal: { en: "city council", zhHans: "市政府", zhHant: "市政府" },
  reconhecimento_diplomas: { en: "diploma recognition", zhHans: "文凭认可", zhHant: "文憑認可" },
  consulado_documentos: { en: "consulate and foreign documents", zhHans: "领事馆与外国文件", zhHant: "領事館與外國文件" }
};
const SITUACAO_GROUP_LABELS: Record<string, Record<"en" | "zhHans" | "zhHant", string>> = {
  Burocracia: { en: "Bureaucracy", zhHans: "行政办事", zhHant: "行政辦事" },
  "Vida prática": { en: "Practical life", zhHans: "日常生活", zhHant: "日常生活" },
  Trabalho: { en: "Work", zhHans: "工作", zhHant: "工作" }
};

interface RetrievalState {
  title: string;
  context: RetrievalContext;
  prompts: ReturnType<typeof buildRetrievalReviewPrompts>;
}

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
}

interface GuidedTourProgress {
  completed: boolean;
  step: number;
}

export default function App() {
  const [progress, setProgress] = useState<ProgressState>({});
  const [storageReady, setStorageReady] = useState(false);
  const [appView, setAppView] = useState<AppView>(() =>
    hasFreshStudyLocation(RESUME_MAX_AGE_MS) ? "study" : "entry"
  );
  const [appMode, setAppMode] = useState<AppMode>("manual");
  const [globalSearchOpen, setGlobalSearchOpen] = useState(false);
  const [modulo, setModulo] = useState(DEFAULT_MODULO);
  const [situacaoId, setSituacaoId] = useState(DEFAULT_SITUACAO_ID);
  const [situacaoTab, setSituacaoTab] = useState<SituacaoTab>("vocabulario");
  const [situacaoCardIndex, setSituacaoCardIndex] = useState(0);
  const [situacaoRevealed, setSituacaoRevealed] = useState(false);
  const [situacaoVocabularyComplete, setSituacaoVocabularyComplete] = useState(false);
  const [revealedDialogueIds, setRevealedDialogueIds] = useState<Set<string>>(() => new Set());
  const [dialoguePlaybackActive, setDialoguePlaybackActive] = useState(false);
  const [activeDialogueLineId, setActiveDialogueLineId] = useState<string | null>(null);
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
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [guidedTourProgress, setGuidedTourProgress] = useState<GuidedTourProgress | null>(null);
  const [progressFileMessage, setProgressFileMessage] = useState("");
  const [importCandidate, setImportCandidate] = useState<unknown | null>(null);
  const [resumeSession, setResumeSession] = useState<ActiveSessionState | null>(null);
  const [manualQueueOverrideIds, setManualQueueOverrideIds] = useState<string[] | null>(null);
  const [situacaoQueueOverrideIds, setSituacaoQueueOverrideIds] = useState<string[] | null>(null);
  const progressFileInputRef = useRef<HTMLInputElement | null>(null);
  const activeSessionRef = useRef<ActiveSessionState | null>(null);
  const restoredNavigationRef = useRef(false);
  const dialoguePlaybackTokenRef = useRef(0);
  const dialoguePauseTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    Promise.all([
      loadStoredProgress(),
      getActiveSession(),
      getLastLocation(),
      getSetting<Direction>(LANGUAGE_SETTING),
      getSetting<GuidedTourProgress>(GUIDED_TOUR_SETTING)
    ])
      .then(([storedProgress, storedSession, storedLocation, storedDirection, storedTour]) => {
        if (cancelled) return;
        setProgress((current) => (Object.keys(current).length > 0 ? current : storedProgress));
        if (isFreshActiveSession(storedSession)) {
          applyActiveSessionLocation(storedSession);
          setAppView("study");
          setResumeSession(storedSession);
          activeSessionRef.current = storedSession;
          prepareRestoredHistory();
        } else if (isFreshLastLocation(storedLocation)) {
          applyLastLocation(storedLocation);
          setAppView("study");
          prepareRestoredHistory();
        }
        if (storedDirection) setDirection(normalizeSupportedDirection(storedDirection));
        setGuidedTourProgress(normalizeGuidedTourProgress(storedTour));
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
    setSetting(LANGUAGE_SETTING, normalizeSupportedDirection(direction)).catch((error) => {
      console.error("Could not save the translation language.", error);
    });
  }, [direction, storageReady]);

  useEffect(() => {
    if (!storageReady || appView !== "study") return;
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
  }, [appMode, appView, direction, modulo, situacaoId, situacaoTab, storageReady]);

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
      setAppView("entry");
      setGlobalSearchOpen(false);
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

  useEffect(() => {
    dialoguePlaybackTokenRef.current += 1;
    if (dialoguePauseTimeoutRef.current !== null) window.clearTimeout(dialoguePauseTimeoutRef.current);
    dialoguePauseTimeoutRef.current = null;
    setDialoguePlaybackActive(false);
    setActiveDialogueLineId(null);
    setRevealedDialogueIds(new Set());
  }, [situacaoId, direction]);

  useEffect(() => {
    if (situacaoTab === "dialogo") return;
    dialoguePlaybackTokenRef.current += 1;
    if (dialoguePauseTimeoutRef.current !== null) window.clearTimeout(dialoguePauseTimeoutRef.current);
    dialoguePauseTimeoutRef.current = null;
    setDialoguePlaybackActive(false);
    setActiveDialogueLineId(null);
  }, [situacaoTab]);

  useEffect(
    () => () => {
      dialoguePlaybackTokenRef.current += 1;
      if (dialoguePauseTimeoutRef.current !== null) window.clearTimeout(dialoguePauseTimeoutRef.current);
    },
    []
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
  const guidedTourSteps = appMode === "manual" ? STUDY_TOUR_STEPS : SITUACAO_TOUR_STEPS;
  const guidedTourTotalSteps = guidedTourSteps.length;
  const guidedTourActive = Boolean(
    storageReady &&
      appView === "study" &&
      guidedTourProgress &&
      !guidedTourProgress.completed &&
      guidedTourProgress.step < guidedTourTotalSteps
  );

  useEffect(() => {
    if (!guidedTourActive) return;
    setGlobalSearchOpen(false);
    if (phase !== "study") setPhase("study");
    if (appMode === "situacoes") {
      const guidedTab = guidedTourProgress?.step === SITUACAO_DIALOGUE_TOUR_STEP ? "dialogo" : "vocabulario";
      if (situacaoTab !== guidedTab) setSituacaoTab(guidedTab);
    }
  }, [appMode, guidedTourActive, guidedTourProgress?.step, phase, situacaoTab]);

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
    setSituacaoCardIndex(nextIndex);
  }

  function movePreviousSituacaoCard() {
    if (selectedSituacaoQueueEntries.length === 0) return;
    setSituacaoRevealed(false);
    setSituacaoVocabularyComplete(false);
    const previousIndex = (situacaoCardIndex - 1 + selectedSituacaoQueueEntries.length) % selectedSituacaoQueueEntries.length;
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

  function enterStudyMode(mode: AppMode) {
    setAppMode(mode);
    setGlobalSearchOpen(false);
    setSettingsOpen(false);
    if (guidedTourProgress && !guidedTourProgress.completed) {
      setPhase("study");
      setRevealed(false);
      setSituacaoRevealed(false);
      if (mode === "situacoes") setSituacaoTab("vocabulario");
    }
    setAppView("study");
    window.scrollTo({ top: 0 });
  }

  function persistGuidedTour(progress: GuidedTourProgress) {
    setGuidedTourProgress(progress);
    setSetting(GUIDED_TOUR_SETTING, progress).catch((error) => {
      console.error("Could not save guided tour progress.", error);
    });
  }

  function advanceGuidedTour() {
    if (!guidedTourProgress || guidedTourProgress.completed) return;
    if (guidedTourProgress.step === 2) {
      if (appMode === "manual") setRevealed(true);
      else setSituacaoRevealed(true);
    }

    const nextStep = guidedTourProgress.step + 1;
    if (appMode === "situacoes" && nextStep === SITUACAO_DIALOGUE_TOUR_STEP) setSituacaoTab("dialogo");
    persistGuidedTour(
      nextStep >= guidedTourTotalSteps ? { completed: true, step: guidedTourTotalSteps } : { completed: false, step: nextStep }
    );
  }

  function skipGuidedTour() {
    persistGuidedTour({ completed: true, step: guidedTourTotalSteps });
  }

  function replayGuidedTour() {
    setSettingsOpen(false);
    setGlobalSearchOpen(false);
    setPhase("study");
    setRevealed(false);
    setSituacaoRevealed(false);
    if (appMode === "situacoes") setSituacaoTab("vocabulario");
    persistGuidedTour({ completed: false, step: 0 });
    if (appView === "study") window.scrollTo({ top: 0 });
  }

  function renderGuidedTour() {
    if (!guidedTourActive || !guidedTourProgress) return null;
    const step = guidedTourSteps[guidedTourProgress.step];
    if (!step) return null;

    const situationExtraCopyIndex = guidedTourProgress.step - (SITUACAO_TOUR_STEPS.length - 2);
    const copy =
      appMode === "situacoes" && guidedTourProgress.step === 1
        ? SITUACAO_SELECTOR_TOUR_COPY[ui.locale]
        : appMode === "situacoes" && situationExtraCopyIndex >= 0
          ? SITUACAO_EXTRA_TOUR_COPY[ui.locale][situationExtraCopyIndex]
          : STUDY_TOUR_COPY[ui.locale][guidedTourProgress.step];

    return (
      <GuidedTour
        targetSelector={step.targetSelector}
        copy={copy}
        step={guidedTourProgress.step}
        totalSteps={guidedTourTotalSteps}
        labels={getGuidedTourLabels(ui.locale)}
        onAdvance={advanceGuidedTour}
        onSkip={skipGuidedTour}
      />
    );
  }

  function returnToEntryScreen() {
    setGlobalSearchOpen(false);
    setSettingsOpen(false);
    setAppView("entry");
    window.scrollTo({ top: 0 });
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

  function moveNext() {
    setRevealed(false);
    const nextIndex = cardIndex + 1;

    if (phase === "sessionAgainFlashcards") {
      if (nextIndex >= reviewQueue.length) {
        finishSessionReview();
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
    const previousIndex = (cardIndex - 1 + entries.length) % entries.length;
    setCardIndex(previousIndex);
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

  function renderEntryScreen() {
    const entryCopy = getEntryScreenCopy(ui.locale);

    return (
      <section className="workspace entry-screen">
        <header className="app-header entry-header">
          <div className="app-header-top">
            <p className="eyebrow">European Portuguese A1 + A2</p>
            {renderSettingsControl("entry-settings-button")}
          </div>
          <h1>Azulejo</h1>
          <p className="app-subtitle">your Portuguese, tile by tile</p>
        </header>

        <div className="entry-mode-cards" aria-label="Study mode">
          <button type="button" className="entry-mode-card" onClick={() => enterStudyMode("manual")}>
            <strong>{entryCopy.manualLabel}</strong>
            <span>{entryCopy.manualDescription}</span>
          </button>
          <button type="button" className="entry-mode-card" onClick={() => enterStudyMode("situacoes")}>
            <strong>{entryCopy.situacoesLabel}</strong>
            <span>{entryCopy.situacoesDescription}</span>
          </button>
        </div>

        <label className="entry-language-control">
          <select
            aria-label={entryCopy.languageLabel}
            value={normalizeSupportedDirection(direction)}
            onChange={(event) => setDirection(event.target.value as Direction)}
          >
            {LANGUAGE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <p className="entry-guide">{entryCopy.guide}</p>
      </section>
    );
  }

  function renderManualControls() {
    return (
      <>
        {renderStudyContent()}

        <div className="study-toggles">
          {quizScopes.length > 0 && phase === "study" && (
            <button className="secondary module-quiz-start" type="button" onClick={() => startModuleQuiz("study")}>
              <Brain size={16} aria-hidden="true" />
              {ui.startQuiz}
            </button>
          )}
        </div>
      </>
    );
  }

  function renderSituacaoControls() {
    return (
      <>
        {renderSituacoesContent()}
      </>
    );
  }

  function renderStudySelector() {
    if (appMode === "manual") {
      if (phase === "quiz") return null;
      return (
        <select
          className="study-selector-pill"
          aria-label={ui.module}
          value={modulo}
          onChange={(event) => setModulo(event.target.value)}
        >
          {modulos.map((item) => (
            <option key={item} value={item}>
              {getModuleSelectorLabel(item, ui.moduloLabel(item), ui.locale)}
            </option>
          ))}
          <option value="all">{ui.allModules}</option>
        </select>
      );
    }

    return (
      <select
        className="study-selector-pill"
        aria-label="Situação"
        value={situacaoId}
        onChange={(event) => setSituacaoId(event.target.value)}
      >
        {situacaoGroups.map((group) => (
          <optgroup key={group.label} label={getSituacaoGroupSelectorLabel(group.label, ui.locale)}>
            {group.items.map((item) => (
              <option key={item.id} value={item.id}>
                {getSituacaoSelectorLabel(item.id, item.label, ui.locale)}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
    );
  }

  function renderSettingsControl(className = "") {
    const settingsLabel = getSettingsLabel(ui.locale);
    return (
      <div className="settings-control">
        <button
          className={`icon-button settings-button ${className}`.trim()}
          type="button"
          aria-label={settingsLabel}
          aria-expanded={settingsOpen}
          title={settingsLabel}
          onClick={() => setSettingsOpen((current) => !current)}
        >
          <Settings size={19} aria-hidden="true" />
        </button>
        {settingsOpen && (
          <div className="settings-popover" role="dialog" aria-label={settingsLabel}>
            <label className="toggle auto-audio-toggle">
              <input
                type="checkbox"
                checked={autoPlayPronunciation}
                onChange={(event) => setAutoPlayPronunciation(event.target.checked)}
              />
              {ui.autoPlayPronunciation}
            </label>
            <button className="settings-replay-tour" type="button" onClick={replayGuidedTour}>
              {getReplayTourLabel(ui.locale)}
            </button>
          </div>
        )}
      </div>
    );
  }

  function renderSituacoesContent() {
    return (
      <section className="situacao-mode">
        <SituacaoTabs
          activeTab={situacaoTab}
          locale={ui.locale}
          onChange={setSituacaoTab}
        />

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
            key={`${activeSituacaoEntry.id}:${direction}`}
            entry={activeSituacaoEntry}
            direction={direction}
            revealed={situacaoRevealed}
            autoPlayPronunciation={autoPlayPronunciation}
            ui={ui}
          onToggleReveal={() => setSituacaoRevealed((current) => !current)}
          onPrevious={movePreviousSituacaoCard}
          canSwipePrevious={situacaoCardIndex > 0}
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

  function toggleDialogueTranslation(lineId: string) {
    setRevealedDialogueIds((current) => {
      const next = new Set(current);
      if (next.has(lineId)) next.delete(lineId);
      else next.add(lineId);
      return next;
    });
  }

  function cancelDialoguePlayback() {
    dialoguePlaybackTokenRef.current += 1;
    if (dialoguePauseTimeoutRef.current !== null) window.clearTimeout(dialoguePauseTimeoutRef.current);
    dialoguePauseTimeoutRef.current = null;
    setDialoguePlaybackActive(false);
    setActiveDialogueLineId(null);
  }

  function playDialogueLine(line: SituacaoContentLine) {
    cancelDialoguePlayback();
    const playbackToken = dialoguePlaybackTokenRef.current;
    setActiveDialogueLineId(line.id);
    playPortugueseAudio(`audio/pt/situacoes/dialogo/${line.id}.m4a`, line.pt, () => {
      if (dialoguePlaybackTokenRef.current === playbackToken) setActiveDialogueLineId(null);
    });
  }

  function playWholeDialogue() {
    if (selectedSituacaoDialogue.length === 0) return;
    cancelDialoguePlayback();
    const playbackToken = dialoguePlaybackTokenRef.current;
    setDialoguePlaybackActive(true);

    const playTurn = (index: number) => {
      if (dialoguePlaybackTokenRef.current !== playbackToken) return;
      const line = selectedSituacaoDialogue[index];
      if (!line) {
        setDialoguePlaybackActive(false);
        setActiveDialogueLineId(null);
        return;
      }

      setActiveDialogueLineId(line.id);
      playPortugueseAudio(`audio/pt/situacoes/dialogo/${line.id}.m4a`, line.pt, () => {
        if (dialoguePlaybackTokenRef.current !== playbackToken) return;
        if (index === selectedSituacaoDialogue.length - 1) {
          setDialoguePlaybackActive(false);
          setActiveDialogueLineId(null);
          return;
        }
        dialoguePauseTimeoutRef.current = window.setTimeout(() => {
          dialoguePauseTimeoutRef.current = null;
          playTurn(index + 1);
        }, 300);
      });
    };

    playTurn(0);
  }

  function renderSituacaoDialogue() {
    return (
      <section className="situacao-list dialogue-list" aria-label="Diálogo">
        <div className="dialogue-panel-toolbar">
          <button
            className="secondary dialogue-play-all"
            type="button"
            disabled={dialoguePlaybackActive || selectedSituacaoDialogue.length === 0}
            onClick={playWholeDialogue}
          >
            <Volume2 size={16} aria-hidden="true" />
            {getPlayDialogueLabel(ui.locale)}
          </button>
        </div>
        <div className="dialogue-turns">
          {selectedSituacaoDialogue.map((line, index) => {
            const translationVisible = revealedDialogueIds.has(line.id);
            return (
              <article
                className={`situacao-line dialogue-turn ${index % 2 === 0 ? "is-learner" : "is-other"}`}
                key={line.id}
                role="button"
                tabIndex={0}
                aria-expanded={translationVisible}
                onClick={() => toggleDialogueTranslation(line.id)}
                onKeyDown={(event) => {
                  if (event.key !== "Enter" && event.key !== " ") return;
                  event.preventDefault();
                  toggleDialogueTranslation(line.id);
                }}
              >
                <button
                  className={`icon-button situacao-listen${activeDialogueLineId === line.id ? " is-playing" : ""}`}
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    playDialogueLine(line);
                  }}
                  aria-label={`${ui.listen}: ${line.pt}`}
                  title={ui.listen}
                >
                  <Volume2 size={18} aria-hidden="true" />
                </button>
                <div className="dialogue-turn-copy">
                  <p className="situacao-pt">{line.pt}</p>
                  {translationVisible && <p className="situacao-translation">{getSituacaoTranslation(line)}</p>}
                  {line.note && <p className="situacao-note">{line.note}</p>}
                </div>
              </article>
            );
          })}
        </div>
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
                onClick={() =>
                  line.audioMode === "browser"
                    ? speakWithBrowserVoice(line.pt)
                    : playPortugueseAudio(`audio/pt/situacoes/cartao/${line.id}.m4a`, line.pt)
                }
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
              key={`${activeEntry.id}:${direction}`}
              entry={activeEntry}
              direction={direction}
              revealed={revealed}
              autoPlayPronunciation={autoPlayPronunciation}
              ui={ui}
              onToggleReveal={() => setRevealed((current) => !current)}
              onPrevious={movePrevious}
              canSwipePrevious={cardIndex > 0}
              onAgain={() => handleReview("again")}
              onKnown={() => handleReview("known")}
            />
          </div>
        ) : (
          <Flashcard
            key={`${activeEntry.id}:${direction}`}
            entry={activeEntry}
            direction={direction}
            revealed={revealed}
            autoPlayPronunciation={autoPlayPronunciation && phase === "study"}
            ui={ui}
            onToggleReveal={() => setRevealed((current) => !current)}
            onPrevious={movePrevious}
            canSwipePrevious={cardIndex > 0}
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

  const appShellClassName = [
    "app-shell",
    appView === "entry" ? "entry-app-shell" : "study-app-shell",
    appView === "study" ? `study-mode-${appMode}` : "",
    appView === "study" && appMode === "situacoes" ? `situacao-tab-${situacaoTab}` : "",
    appView === "study" ? `study-phase-${phase}` : ""
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <main className={appShellClassName}>
      <span
        className="authorship-fingerprint"
        data-author={AUTHORSHIP_OWNER}
        data-fingerprint={AUTHORSHIP_FINGERPRINT}
        aria-hidden="true"
      >
        {AUTHORSHIP_FINGERPRINT}
      </span>
      {appView === "entry" ? (
        renderEntryScreen()
      ) : (
        <>
          <section className="workspace study-workspace">
            <nav className="study-page-nav" aria-label="Study navigation">
              <button className="icon-button study-entry-back" type="button" onClick={returnToEntryScreen} aria-label="Back to modes">
                <ChevronLeft size={20} aria-hidden="true" />
              </button>
              {!globalSearchOpen && renderStudySelector()}
              <span className="study-nav-spacer" />
              <button
                className={`icon-button header-search-button${globalSearchOpen ? " is-active" : ""}`}
                type="button"
                aria-label={ui.search}
                aria-pressed={globalSearchOpen}
                title={ui.search}
                onClick={() => {
                  setSettingsOpen(false);
                  setGlobalSearchOpen((current) => !current);
                }}
              >
                <Search size={17} aria-hidden="true" />
              </button>
              {renderSettingsControl()}
            </nav>

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
            getSituacaoLabel={(id, portugueseLabel) => getSituacaoTargetLabel(id, portugueseLabel, ui.locale)}
            getSituacaoGroupLabel={(portugueseLabel) => SITUACAO_GROUP_LABELS[portugueseLabel]?.[ui.locale] ?? portugueseLabel}
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
        </>
      )}
      {renderGuidedTour()}
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
          <button
            key={action.id}
            className={`${index === 0 ? "primary" : "secondary"}${action.id === "quiz" ? " milestone-quiz-action" : ""}`}
            type="button"
            onClick={action.onClick}
          >
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

function normalizeSupportedDirection(direction: Direction) {
  return SUPPORTED_DIRECTIONS.has(direction) ? direction : "pt-en";
}

function normalizeGuidedTourProgress(value: GuidedTourProgress | undefined): GuidedTourProgress {
  if (!value || typeof value.completed !== "boolean" || !Number.isInteger(value.step) || value.step < 0) {
    return { completed: false, step: 0 };
  }
  return { completed: value.completed, step: Math.min(value.step, Math.max(STUDY_TOUR_STEPS.length, SITUACAO_TOUR_STEPS.length)) };
}

function getModuleThemeLabel(modulo: string, locale: "en" | "zhHans" | "zhHant") {
  return MODULE_THEME_LABELS[modulo]?.[locale];
}

function getModuleSelectorLabel(modulo: string, moduleLabel: string, locale: "en" | "zhHans" | "zhHant") {
  const targetTheme = MODULE_THEME_LABELS[modulo]?.[locale];
  const portugueseTheme = MODULE_THEME_LABELS_PT[modulo];
  if (!targetTheme || !portugueseTheme) return moduleLabel;
  return `${moduleLabel} · ${targetTheme} - ${portugueseTheme}`;
}

function getSituacaoTargetLabel(situacaoId: string, fallback: string, locale: "en" | "zhHans" | "zhHant") {
  return localizeSituacaoTargetLabel(SITUACAO_TARGET_LABELS[situacaoId]?.[locale], locale) ?? fallback;
}

function getSituacaoSelectorLabel(situacaoId: string, portugueseLabel: string, locale: "en" | "zhHans" | "zhHant") {
  const targetLabel = getSituacaoTargetLabel(situacaoId, portugueseLabel, locale);
  return targetLabel === portugueseLabel ? portugueseLabel : `${targetLabel} · ${portugueseLabel}`;
}

function getSituacaoGroupSelectorLabel(portugueseLabel: string, locale: "en" | "zhHans" | "zhHant") {
  const targetLabel = SITUACAO_GROUP_LABELS[portugueseLabel]?.[locale];
  return targetLabel ? `${targetLabel} · ${portugueseLabel}` : portugueseLabel;
}

function localizeSituacaoTargetLabel(label: string | undefined, locale: "en" | "zhHans" | "zhHant") {
  if (!label || locale !== "en") return label;
  return `${label.charAt(0).toUpperCase()}${label.slice(1)}`;
}

function getSituacaoControlLabel(locale: "en" | "zhHans" | "zhHant") {
  if (locale === "zhHans") return "场景";
  if (locale === "zhHant") return "場景";
  return "Situation";
}

function getSettingsLabel(locale: "en" | "zhHans" | "zhHant") {
  if (locale === "zhHans") return "设置";
  if (locale === "zhHant") return "設定";
  return "Settings";
}

function getReplayTourLabel(locale: "en" | "zhHans" | "zhHant") {
  if (locale === "zhHans") return "重新查看导览";
  if (locale === "zhHant") return "重新查看導覽";
  return "Replay tour";
}

function getGuidedTourLabels(locale: "en" | "zhHans" | "zhHant") {
  if (locale === "zhHans") {
    return { dialog: "学习导览", continue: "继续导览", skip: "跳过导览", gotIt: "了解" };
  }
  if (locale === "zhHant") {
    return { dialog: "學習導覽", continue: "繼續導覽", skip: "略過導覽", gotIt: "了解" };
  }
  return { dialog: "Guided tour", continue: "Continue tour", skip: "Skip tour", gotIt: "Got it" };
}

function getPlayDialogueLabel(locale: "en" | "zhHans" | "zhHant") {
  if (locale === "zhHans") return "播放对话";
  if (locale === "zhHant") return "播放對話";
  return "Play dialogue";
}

function getEntryScreenCopy(locale: "en" | "zhHans" | "zhHant") {
  if (locale === "zhHans") {
    return {
      manualLabel: "课本",
      manualDescription: "按顺序学习十二个课本单元。",
      situacoesLabel: "场景",
      situacoesDescription: "在真实生活场景中学习。",
      guide: "选择学习模式。你可以在此页面更改语言。",
      languageLabel: "语言"
    };
  }

  if (locale === "zhHant") {
    return {
      manualLabel: "課本",
      manualDescription: "按順序學習十二個課本單元。",
      situacoesLabel: "場景",
      situacoesDescription: "在真實生活場景中學習。",
      guide: "選擇學習模式。你可以在此頁面更改語言。",
      languageLabel: "語言"
    };
  }

  return {
    manualLabel: "Manual",
    manualDescription: "Work through the 12 textbook modules.",
    situacoesLabel: "Situation",
    situacoesDescription: "Learn by real-life situation.",
    guide: "Select your study mode. You can change the language on this screen.",
    languageLabel: "Language"
  };
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
