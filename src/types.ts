export type Direction = "pt-en" | "en-pt";
export type CardStatus = "new" | "again" | "known";

export interface VocabularyEntry {
  id: string;
  modulo: string;
  theme: string;
  portuguese: string;
  english: string;
  examplePt?: string;
  exampleEn?: string;
  note?: string;
  source: "seed" | "pdf";
}

export interface CardProgress {
  status: CardStatus;
  reviewCount: number;
  knownCount: number;
  lastReviewedAt?: string;
}

export type ProgressState = Record<string, CardProgress>;
