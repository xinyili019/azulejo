export type Direction = "pt-en" | "en-pt" | "pt-zh-hans" | "zh-hans-pt" | "pt-zh-hant" | "zh-hant-pt";
export type CardStatus = "new" | "again" | "known";
export type PartOfSpeech = "noun" | "verb" | "adj" | "adv" | "expr" | "prep" | "pron" | "num" | "det" | "other";
export type GrammaticalGender = "m" | "f" | "m-pl" | "f-pl";

export interface VocabularyEntry {
  id: string;
  legacyIds?: string[];
  modulo?: string;
  theme: string;
  portuguese: string;
  english: string;
  zhHans: string;
  zhHant: string;
  pos?: PartOfSpeech;
  gender?: GrammaticalGender;
  examplePt?: string;
  exampleEn?: string;
  exampleZhHans?: string;
  exampleZhHant?: string;
  note?: string;
  situacao?: string;
  situacoes?: string[];
  tipo?: "vocabulário";
  source: "seed" | "pdf" | "situacao";
}

export interface SituacaoGroup {
  label: string;
  items: Array<{
    id: string;
    label: string;
  }>;
}

export interface SituacaoVocabularyRow {
  id: string;
  legacyIds?: string[];
  situacao: string;
  pt: string;
  en: string;
  zhHans: string;
  zhHant: string;
  pos?: PartOfSpeech;
  gender?: GrammaticalGender;
  note?: string;
}

export interface SituacaoContentLine {
  id: string;
  situacao: string;
  order: number;
  pt: string;
  en: string;
  zhHans: string;
  zhHant: string;
  note?: string;
}

export interface ModuleQuizScope {
  id: string;
  modulo: string;
  label: string;
  entries: VocabularyEntry[];
  startIndex: number;
  endIndex: number;
}

export interface ModuleQuizQuestion {
  id: string;
  entry: VocabularyEntry;
  format: "cloze" | "audioMeaning";
  clozeSentence?: string;
  answer: string;
  choices: string[];
  translation?: string;
}

export interface ModuleQuizResult {
  scopeId: string;
  modulo: string;
  label: string;
  correct: number;
  total: number;
  completedAt: string;
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

export interface ActiveSessionState {
  mode: "manual" | "situacoes";
  moduleOrScenarioId: string;
  direction: Direction;
  queue: string[];
  position: number;
  againQueue: string[];
  phase?: "study" | "sessionAgainFlashcards";
  sessionIndex?: number;
  startedAt: string;
  updatedAt: string;
}

export interface LastLocationState {
  view: "manual" | "situacoes";
  params: {
    modulo?: string;
    situacaoId?: string;
    situacaoTab?: "vocabulario" | "dialogo" | "cartao";
    direction?: Direction;
  };
  updatedAt: string;
}
