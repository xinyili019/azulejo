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
  listen: string;
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
    listen: "Ouvir",
    again: "Again",
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
    mode: "模式",
    reviewOnlyUnknown: "只复习未掌握",
    exportProgress: "导出进度",
    importProgress: "导入进度",
    importError: "无法导入这个进度文件。",
    studyControls: "学习控制",
    revealAnswer: "显示答案",
    hideAnswer: "隐藏答案",
    listen: "听发音",
    again: "再练习",
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
    mode: "模式",
    reviewOnlyUnknown: "只複習未掌握",
    exportProgress: "匯出進度",
    importProgress: "匯入進度",
    importError: "無法匯入這個進度檔案。",
    studyControls: "學習控制",
    revealAnswer: "顯示答案",
    hideAnswer: "隱藏答案",
    listen: "聽發音",
    again: "再練習",
    known: "已掌握",
    flashcard: "單字卡",
    progressDashboard: "學習進度",
    knownVocabulary: "已掌握詞彙",
    reviewed: "已複習",
    remaining: "待複習",
    noCardsTitle: "恭喜你！你已經掌握全部詞彙！",
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
