import type { Direction } from "../types";

type UiLocale = "en" | "zhHans" | "zhHant";

export interface UiCopy {
  locale: UiLocale;
  module: string;
  allModules: string;
  mode: string;
  reviewOnlyUnknown: string;
  exportProgress: string;
  importProgress: string;
  importError: string;
  studyControls: string;
  revealAnswer: string;
  hideAnswer: string;
  again: string;
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
    mode: "Mode",
    reviewOnlyUnknown: "Review only unknown",
    exportProgress: "Export progress",
    importProgress: "Import progress",
    importError: "Could not import that progress file.",
    studyControls: "Study controls",
    revealAnswer: "Reveal answer",
    hideAnswer: "Hide answer",
    again: "Again",
    known: "Known",
    flashcard: "Flashcard",
    progressDashboard: "Progress dashboard",
    knownVocabulary: "known vocabulary",
    reviewed: "reviewed",
    remaining: "remaining",
    noCardsTitle: "No cards match these filters",
    noCardsBody: "Include known cards or choose another module to continue reviewing.",
    moduleProgress: (modulo) => `${modulo} progress`,
    moduloLabel: (modulo) => modulo
  },
  zhHans: {
    locale: "zhHans",
    module: "模块",
    allModules: "全部模块",
    mode: "模式",
    reviewOnlyUnknown: "只复习未掌握",
    exportProgress: "导出进度",
    importProgress: "导入进度",
    importError: "无法导入这个进度文件。",
    studyControls: "学习控制",
    revealAnswer: "显示答案",
    hideAnswer: "隐藏答案",
    again: "再练习",
    known: "已掌握",
    flashcard: "单词卡",
    progressDashboard: "学习进度",
    knownVocabulary: "已掌握词汇",
    reviewed: "已复习",
    remaining: "待复习",
    noCardsTitle: "没有符合条件的卡片",
    noCardsBody: "请显示已掌握卡片，或选择另一个模块继续复习。",
    moduleProgress: (modulo) => `${toChineseModulo(modulo, "模块")}进度`,
    moduloLabel: (modulo) => toChineseModulo(modulo, "模块")
  },
  zhHant: {
    locale: "zhHant",
    module: "模組",
    allModules: "全部模組",
    mode: "模式",
    reviewOnlyUnknown: "只複習未掌握",
    exportProgress: "匯出進度",
    importProgress: "匯入進度",
    importError: "無法匯入這個進度檔案。",
    studyControls: "學習控制",
    revealAnswer: "顯示答案",
    hideAnswer: "隱藏答案",
    again: "再練習",
    known: "已掌握",
    flashcard: "單字卡",
    progressDashboard: "學習進度",
    knownVocabulary: "已掌握詞彙",
    reviewed: "已複習",
    remaining: "待複習",
    noCardsTitle: "沒有符合條件的卡片",
    noCardsBody: "請顯示已掌握卡片，或選擇另一個模組繼續複習。",
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
