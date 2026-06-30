import type { Direction } from "../types";

type MilestoneLocale = "en" | "zhHans" | "zhHant";

export const REVIEW_MODE = {
  sessionAgainFlashcards: "sessionAgainFlashcards",
  sessionNewTypedPortuguese: "sessionNewTypedPortuguese",
  moduleAgainTypedPortuguese: "moduleAgainTypedPortuguese",
  finalAllRandomTypedPortuguese: "finalAllRandomTypedPortuguese",
  finalFirstPassUnknownRandomTypedPortuguese: "finalFirstPassUnknownRandomTypedPortuguese"
} as const;

export type ReviewModeId = (typeof REVIEW_MODE)[keyof typeof REVIEW_MODE];

export interface MilestoneActionCopy {
  id: ReviewModeId;
  label: string;
}

export interface SessionMilestoneCopy {
  title: string;
  actions: [MilestoneActionCopy, MilestoneActionCopy];
}

export interface ModuleMilestoneCopy {
  title: string;
  actions: [MilestoneActionCopy];
}

export interface FinalMilestoneCopy {
  title: string;
  actions: [MilestoneActionCopy, MilestoneActionCopy];
}

interface LocaleCopy {
  sessionTitle: (knownCount: number) => string;
  moduleTitle: (moduleName: string) => string;
  finalTitle: string;
  labels: Record<ReviewModeId, string>;
}

const copy: Record<MilestoneLocale, LocaleCopy> = {
  en: {
    sessionTitle: (knownCount) => `Congrats! You have recognized ${knownCount} ${knownCount === 1 ? "word" : "words"}!`,
    moduleTitle: (moduleName) => `Congrats! You have finished ${moduleName}.`,
    finalTitle: "Congrats! You have finished all modules.",
    labels: {
      [REVIEW_MODE.sessionAgainFlashcards]: "Review new words",
      [REVIEW_MODE.sessionNewTypedPortuguese]: "Recall new words",
      [REVIEW_MODE.moduleAgainTypedPortuguese]: "Recall new words",
      [REVIEW_MODE.finalAllRandomTypedPortuguese]: "Type out all Portuguese words (randomized)",
      [REVIEW_MODE.finalFirstPassUnknownRandomTypedPortuguese]: "Type out first-pass unknown words (randomized)"
    }
  },
  zhHans: {
    sessionTitle: (knownCount) => `恭喜！你已经认出 ${knownCount} 个词！`,
    moduleTitle: (moduleName) => `恭喜！你已经完成${moduleName}。`,
    finalTitle: "恭喜！你已经完成全部模块。",
    labels: {
      [REVIEW_MODE.sessionAgainFlashcards]: "复习生词",
      [REVIEW_MODE.sessionNewTypedPortuguese]: "回想生词",
      [REVIEW_MODE.moduleAgainTypedPortuguese]: "回想生词",
      [REVIEW_MODE.finalAllRandomTypedPortuguese]: "随机输入全部葡语词",
      [REVIEW_MODE.finalFirstPassUnknownRandomTypedPortuguese]: "随机输入第一遍未掌握的葡语词"
    }
  },
  zhHant: {
    sessionTitle: (knownCount) => `恭喜！你已經認出 ${knownCount} 個單字！`,
    moduleTitle: (moduleName) => `恭喜！你已經完成${moduleName}。`,
    finalTitle: "恭喜！你已經完成全部模組。",
    labels: {
      [REVIEW_MODE.sessionAgainFlashcards]: "複習生字",
      [REVIEW_MODE.sessionNewTypedPortuguese]: "回想生字",
      [REVIEW_MODE.moduleAgainTypedPortuguese]: "回想生字",
      [REVIEW_MODE.finalAllRandomTypedPortuguese]: "隨機輸入全部葡語單字",
      [REVIEW_MODE.finalFirstPassUnknownRandomTypedPortuguese]: "隨機輸入第一遍未掌握的葡語單字"
    }
  }
};

export function getSessionMilestoneCopy(direction: Direction, accumulatedKnownCount: number): SessionMilestoneCopy {
  const localeCopy = copy[getMilestoneLocale(direction)];

  return {
    title: localeCopy.sessionTitle(accumulatedKnownCount),
    actions: [
      actionCopy(localeCopy, REVIEW_MODE.sessionAgainFlashcards),
      actionCopy(localeCopy, REVIEW_MODE.sessionNewTypedPortuguese)
    ]
  };
}

export function getModuleMilestoneCopy(direction: Direction, modulo: string): ModuleMilestoneCopy {
  const locale = getMilestoneLocale(direction);
  const localeCopy = copy[locale];

  return {
    title: localeCopy.moduleTitle(toLocalizedModulo(modulo, locale)),
    actions: [actionCopy(localeCopy, REVIEW_MODE.moduleAgainTypedPortuguese)]
  };
}

export function getFinalMilestoneCopy(direction: Direction): FinalMilestoneCopy {
  const localeCopy = copy[getMilestoneLocale(direction)];

  return {
    title: localeCopy.finalTitle,
    actions: [
      actionCopy(localeCopy, REVIEW_MODE.finalAllRandomTypedPortuguese),
      actionCopy(localeCopy, REVIEW_MODE.finalFirstPassUnknownRandomTypedPortuguese)
    ]
  };
}

export function getMilestoneActionLabel(direction: Direction, reviewMode: ReviewModeId): string {
  return copy[getMilestoneLocale(direction)].labels[reviewMode];
}

function actionCopy(localeCopy: LocaleCopy, id: ReviewModeId): MilestoneActionCopy {
  return {
    id,
    label: localeCopy.labels[id]
  };
}

function getMilestoneLocale(direction: Direction): MilestoneLocale {
  if (direction.includes("zh-hans")) return "zhHans";
  if (direction.includes("zh-hant")) return "zhHant";
  return "en";
}

function toLocalizedModulo(modulo: string, locale: MilestoneLocale): string {
  if (locale === "en") return modulo;

  const number = modulo.match(/\d+/)?.[0];
  if (!number) return modulo;

  return locale === "zhHans" ? `模块 ${number}` : `模組 ${number}`;
}
