export type Direction = "pt-en" | "en-pt" | "pt-zh-hans" | "zh-hans-pt" | "pt-zh-hant" | "zh-hant-pt";
export type CardStatus = "new" | "again" | "known";

export interface VocabularyEntry {
  id: string;
  modulo: string;
  theme: string;
  portuguese: string;
  english: string;
  zhHans: string;
  zhHant: string;
  examplePt?: string;
  exampleEn?: string;
  exampleZhHans?: string;
  exampleZhHant?: string;
  note?: string;
  source: "seed" | "pdf";
}

export interface CardProgress {
  status: CardStatus;
  reviewCount: number;
  knownCount: number;
  firstPassStatus?: Exclude<CardStatus, "new">;
  everAgain?: boolean;
  retrievalTroubleCount?: number;
  sessionTroubleCount?: number;
  moduleTroubleCount?: number;
  lastReviewedAt?: string;
}

export type ProgressState = Record<string, CardProgress>;
