import type { Direction } from "../types";

type UiLocale = "en" | "zhHans" | "zhHant";

export interface UiCopy {
  locale: UiLocale;
  module: string;
  allModules: string;
  language: string;
  reviewOnlyUnknown: string;
  exportProgress: string;
  importProgress: string;
  importError: string;
  studyControls: string;
  revealAnswer: string;
  checkAnswer: string;
  hideAnswer: string;
  cardInstruction: string;
  listen: string;
  autoPlayPronunciation: string;
  addToHomeScreen: string;
  addToHomeScreenHelp: string;
  previousWord: string;
  example: string;
  translation: string;
  again: string;
  gotIt: string;
  goBack: string;
  known: string;
  startOver: string;
  flashcard: string;
  progressDashboard: string;
  moduleQuiz: string;
  quizScope: string;
  audioMeaningPrompt: string;
  startQuiz: string;
  startNewModule: string;
  startNextSession: string;
  sessionReviewComplete: string;
  freshQuiz: string;
  nextQuestion: string;
  finishQuiz: string;
  correct: string;
  incorrect: string;
  quizScore: (correct: number, total: number) => string;
  finalQuizScore: (correct: number, total: number) => string;
  moduleQuizScores: string;
  readyForExam: string;
  knownVocabulary: string;
  reviewed: string;
  remaining: string;
  noCardsTitle: string;
  noCardsBody: string;
  moduleProgress: (modulo: string) => string;
  moduloLabel: (modulo: string) => string;
}

const copy: Record<UiLocale, UiCopy> = {
  en: {
    locale: "en",
    module: "Module",
    allModules: "All modules",
    language: "Language",
    reviewOnlyUnknown: "Review only unknown",
    exportProgress: "Export progress",
    importProgress: "Import progress",
    importError: "Could not import that progress file.",
    studyControls: "Study controls",
    revealAnswer: "Reveal",
    checkAnswer: "Check",
    hideAnswer: "Hide answer",
    cardInstruction: "Know this word? Tap the tile to check!",
    listen: "Listen",
    autoPlayPronunciation: "Auto audio",
    addToHomeScreen: "Add to Home Screen",
    addToHomeScreenHelp: "On iPhone, tap Share, then choose Add to Home Screen. On Android, use the install prompt or browser menu.",
    previousWord: "Previous word",
    example: "Example",
    translation: "Translation",
    again: "Again",
    gotIt: "Got it",
    goBack: "Go back",
    known: "Known",
    startOver: "Start over",
    flashcard: "Flashcard",
    progressDashboard: "Progress dashboard",
    moduleQuiz: "Module quiz",
    quizScope: "Quiz scope",
    audioMeaningPrompt: "Listen and choose the meaning.",
    startQuiz: "Start quiz",
    startNewModule: "Start new module",
    startNextSession: "Start next session",
    sessionReviewComplete: "Session review complete",
    freshQuiz: "Fresh 20",
    nextQuestion: "Next",
    finishQuiz: "Finish",
    correct: "Correct",
    incorrect: "Incorrect",
    quizScore: (correct, total) => `${correct} / ${total} correct`,
    finalQuizScore: (correct, total) => `You scored ${correct}/${total}!`,
    moduleQuizScores: "Module quiz scores",
    readyForExam: "ready for your exam!",
    knownVocabulary: "known vocabulary",
    reviewed: "reviewed",
    remaining: "remaining",
    noCardsTitle: "No cards to show.",
    noCardsBody: "Choose a module to review.",
    moduleProgress: (modulo) => `${modulo} progress`,
    moduloLabel: (modulo) => modulo
  },
  zhHans: {
    locale: "zhHans",
    module: "模块",
    allModules: "全部模块",
    language: "语言",
    reviewOnlyUnknown: "只复习未掌握",
    exportProgress: "导出进度",
    importProgress: "导入进度",
    importError: "无法导入这个进度文件。",
    studyControls: "学习控件",
    revealAnswer: "显示",
    checkAnswer: "检查",
    hideAnswer: "隐藏答案",
    cardInstruction: "认识这个词吗？点击瓷片查看吧！",
    listen: "听发音",
    autoPlayPronunciation: "自动音频",
    addToHomeScreen: "添加到主屏幕",
    addToHomeScreenHelp: "在 iPhone 上，请点“分享”，再选择“添加到主屏幕”。在 Android 上，请使用安装提示或浏览器菜单。",
    previousWord: "上一个单词",
    example: "例句",
    translation: "翻译",
    again: "再练习",
    gotIt: "了解",
    goBack: "返回",
    known: "已掌握",
    startOver: "重新开始",
    flashcard: "单词卡",
    progressDashboard: "学习进度",
    moduleQuiz: "模块测验",
    quizScope: "测验范围",
    audioMeaningPrompt: "听音频，选择意思。",
    startQuiz: "开始测验",
    startNewModule: "开始新模块",
    startNextSession: "开始下一组",
    sessionReviewComplete: "本组复习完成",
    freshQuiz: "重新抽 20 题",
    nextQuestion: "下一题",
    finishQuiz: "完成",
    correct: "正确",
    incorrect: "不正确",
    quizScore: (correct, total) => `答对 ${correct} / ${total} 题`,
    finalQuizScore: (correct, total) => `你得了 ${correct}/${total} 分！`,
    moduleQuizScores: "模块测验成绩",
    readyForExam: "考试准备度",
    knownVocabulary: "已掌握词汇",
    reviewed: "已复习",
    remaining: "待复习",
    noCardsTitle: "没有可显示的单词卡。",
    noCardsBody: "请选择一个模块复习吧！",
    moduleProgress: (modulo) => `${toChineseModulo(modulo, "模块")}进度`,
    moduloLabel: (modulo) => toChineseModulo(modulo, "模块")
  },
  zhHant: {
    locale: "zhHant",
    module: "模組",
    allModules: "全部模組",
    language: "語言",
    reviewOnlyUnknown: "只複習未掌握",
    exportProgress: "匯出進度",
    importProgress: "匯入進度",
    importError: "無法匯入這個進度檔案。",
    studyControls: "學習控制項",
    revealAnswer: "顯示",
    checkAnswer: "檢查",
    hideAnswer: "隱藏答案",
    cardInstruction: "認識這個單字嗎？點一下瓷片查看吧！",
    listen: "聽發音",
    autoPlayPronunciation: "自動音訊",
    addToHomeScreen: "加入主畫面",
    addToHomeScreenHelp: "在 iPhone 上，請點「分享」，再選擇「加入主畫面」。在 Android 上，請使用安裝提示或瀏覽器選單。",
    previousWord: "上一個單字",
    example: "例句",
    translation: "翻譯",
    again: "再練習",
    gotIt: "了解",
    goBack: "返回",
    known: "已掌握",
    startOver: "重新開始",
    flashcard: "單字卡",
    progressDashboard: "學習進度",
    moduleQuiz: "模組測驗",
    quizScope: "測驗範圍",
    audioMeaningPrompt: "聽音訊，選擇意思。",
    startQuiz: "開始測驗",
    startNewModule: "開始新模組",
    startNextSession: "開始下一組",
    sessionReviewComplete: "本組複習完成",
    freshQuiz: "重新抽 20 題",
    nextQuestion: "下一題",
    finishQuiz: "完成",
    correct: "正確",
    incorrect: "不正確",
    quizScore: (correct, total) => `答對 ${correct} / ${total} 題`,
    finalQuizScore: (correct, total) => `你得了 ${correct}/${total} 分！`,
    moduleQuizScores: "模組測驗成績",
    readyForExam: "考試準備度",
    knownVocabulary: "已掌握單字",
    reviewed: "已複習",
    remaining: "待複習",
    noCardsTitle: "沒有可顯示的單字卡。",
    noCardsBody: "請選擇一個模組複習吧！",
    moduleProgress: (modulo) => `${toChineseModulo(modulo, "模組")}進度`,
    moduloLabel: (modulo) => toChineseModulo(modulo, "模組")
  }
};

export function getUiCopy(direction: Direction) {
  if (direction.includes("zh-hans")) return copy.zhHans;
  if (direction.includes("zh-hant")) return copy.zhHant;
  return copy.en;
}

function toChineseModulo(modulo: string, label: string) {
  const number = modulo.match(/\d+/)?.[0];
  return number ? `${label} ${number}` : modulo;
}
