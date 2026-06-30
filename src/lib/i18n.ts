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
  hideAnswer: string;
  cardInstruction: string;
  listen: string;
  autoPlayPronunciation: string;
  previousWord: string;
  example: string;
  translation: string;
  again: string;
  gotIt: string;
  known: string;
  flashcard: string;
  progressDashboard: string;
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
    hideAnswer: "Hide answer",
    cardInstruction: "Know this word? Tap the tile to check!",
    listen: "Listen",
    autoPlayPronunciation: "Play pronunciation automatically",
    previousWord: "Previous word",
    example: "Example",
    translation: "Translation",
    again: "Again",
    gotIt: "Got it",
    known: "Known",
    flashcard: "Flashcard",
    progressDashboard: "Progress dashboard",
    knownVocabulary: "known vocabulary",
    reviewed: "reviewed",
    remaining: "remaining",
    noCardsTitle: "Congratulations! You have mastered all vocabulary.",
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
    hideAnswer: "隐藏答案",
    cardInstruction: "认识这个词吗？点击瓷片查看吧！",
    listen: "听发音",
    autoPlayPronunciation: "自动播放发音",
    previousWord: "上一个单词",
    example: "例句",
    translation: "翻译",
    again: "再练习",
    gotIt: "了解",
    known: "已掌握",
    flashcard: "单词卡",
    progressDashboard: "学习进度",
    knownVocabulary: "已掌握词汇",
    reviewed: "已复习",
    remaining: "待复习",
    noCardsTitle: "恭喜你！你已经掌握全部词汇！",
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
    hideAnswer: "隱藏答案",
    cardInstruction: "認識這個單字嗎？點一下瓷片查看吧！",
    listen: "聽發音",
    autoPlayPronunciation: "自動播放發音",
    previousWord: "上一個單字",
    example: "例句",
    translation: "翻譯",
    again: "再練習",
    gotIt: "了解",
    known: "已掌握",
    flashcard: "單字卡",
    progressDashboard: "學習進度",
    knownVocabulary: "已掌握單字",
    reviewed: "已複習",
    remaining: "待複習",
    noCardsTitle: "恭喜你！你已經掌握全部單字！",
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
