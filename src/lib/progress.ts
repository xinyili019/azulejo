import type { CardProgress, CardStatus, ProgressState, VocabularyEntry } from "../types";

const emptyProgress = (): CardProgress => ({
  status: "new",
  reviewCount: 0,
  knownCount: 0
});

const statusRank: Record<CardStatus, number> = {
  new: 0,
  again: 1,
  known: 2
};

export function getCardProgress(progress: ProgressState, cardId: string): CardProgress {
  return progress[cardId] ?? emptyProgress();
}

export function recordReview(
  progress: ProgressState,
  cardId: string,
  status: Exclude<CardStatus, "new">,
  reviewedAt = new Date().toISOString()
): ProgressState {
  const current = getCardProgress(progress, cardId);

  return {
    ...progress,
    [cardId]: {
      ...current,
      status,
      reviewCount: current.reviewCount + 1,
      knownCount: current.knownCount + (status === "known" ? 1 : 0),
      lastReviewedAt: reviewedAt
    }
  };
}

export function summarizeProgress(entries: VocabularyEntry[], progress: ProgressState) {
  const uniqueEntries = uniqueEntriesById(entries);
  const reviewed = uniqueEntries.filter((entry) => getCardProgress(progress, entry.id).reviewCount > 0).length;
  const known = uniqueEntries.filter((entry) => getCardProgress(progress, entry.id).status === "known").length;

  return {
    total: uniqueEntries.length,
    reviewed,
    known,
    remaining: uniqueEntries.length - known,
    knownPercent: uniqueEntries.length === 0 ? 0 : Math.round((known / uniqueEntries.length) * 100)
  };
}

export function summarizeByModulo(entries: VocabularyEntry[], progress: ProgressState) {
  return entries.reduce<Record<string, ReturnType<typeof summarizeProgress>>>((summary, entry) => {
    if (!entry.modulo) return summary;
    const group = entries.filter((candidate) => candidate.modulo === entry.modulo);
    summary[entry.modulo] = summarizeProgress(group, progress);
    return summary;
  }, {});
}

export function mergeCardProgress(a: CardProgress | undefined, b: CardProgress | undefined): CardProgress {
  if (!a) return b ?? emptyProgress();
  if (!b) return a;

  const status = statusRank[b.status] > statusRank[a.status] ? b.status : a.status;
  const lastReviewedAt =
    !a.lastReviewedAt || (b.lastReviewedAt && b.lastReviewedAt > a.lastReviewedAt) ? b.lastReviewedAt : a.lastReviewedAt;

  return {
    status,
    reviewCount: Math.max(a.reviewCount ?? 0, b.reviewCount ?? 0),
    knownCount: Math.max(a.knownCount ?? 0, b.knownCount ?? 0),
    firstPassStatus: mergeStatus(a.firstPassStatus, b.firstPassStatus),
    everAgain: Boolean(a.everAgain || b.everAgain || a.status === "again" || b.status === "again"),
    retrievalTroubleCount: maxOptional(a.retrievalTroubleCount, b.retrievalTroubleCount),
    sessionTroubleCount: maxOptional(a.sessionTroubleCount, b.sessionTroubleCount),
    moduleTroubleCount: maxOptional(a.moduleTroubleCount, b.moduleTroubleCount),
    lastReviewedAt
  };
}

export function normalizeProgress(value: unknown): ProgressState {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};

  return Object.entries(value).reduce<ProgressState>((normalized, [key, card]) => {
    const progress = normalizeCardProgress(card);
    if (progress) normalized[key] = progress;
    return normalized;
  }, {});
}

export function migrateProgressKeys(progress: ProgressState, entries: VocabularyEntry[]): ProgressState {
  const aliases = buildProgressAliasMap(entries);
  const migrated: ProgressState = {};

  for (const [key, value] of Object.entries(progress)) {
    const normalizedKey = normalizeProgressKey(key);
    const matches = aliases.get(normalizedKey) ?? [];

    if (matches.length === 1) {
      const id = matches[0].id;
      migrated[id] = mergeCardProgress(migrated[id], value);
      continue;
    }

    if (matches.length > 1) {
      console.warn(`Dropping ambiguous progress key "${key}".`, matches.map((entry) => entry.id));
      continue;
    }

    console.warn(`Dropping unmatched progress key "${key}".`);
  }

  return migrated;
}

export function getKnownIdSet(progress: ProgressState): Set<string> {
  return new Set(
    Object.entries(progress)
      .filter(([, value]) => value.status === "known")
      .map(([id]) => id)
  );
}

function uniqueEntriesById(entries: VocabularyEntry[]): VocabularyEntry[] {
  return Array.from(new Map(entries.map((entry) => [entry.id, entry])).values());
}

function normalizeCardProgress(value: unknown): CardProgress | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  const candidate = value as Partial<CardProgress>;
  const status = candidate.status === "known" || candidate.status === "again" || candidate.status === "new" ? candidate.status : "new";

  return {
    status,
    reviewCount: numberOrZero(candidate.reviewCount),
    knownCount: numberOrZero(candidate.knownCount),
    firstPassStatus:
      candidate.firstPassStatus === "known" || candidate.firstPassStatus === "again" ? candidate.firstPassStatus : undefined,
    everAgain: Boolean(candidate.everAgain),
    retrievalTroubleCount: optionalNumber(candidate.retrievalTroubleCount),
    sessionTroubleCount: optionalNumber(candidate.sessionTroubleCount),
    moduleTroubleCount: optionalNumber(candidate.moduleTroubleCount),
    lastReviewedAt: typeof candidate.lastReviewedAt === "string" ? candidate.lastReviewedAt : undefined
  };
}

function buildProgressAliasMap(entries: VocabularyEntry[]) {
  const aliases = new Map<string, VocabularyEntry[]>();

  for (const entry of entries) {
    addAlias(aliases, entry.id, entry);
    for (const legacyId of entry.legacyIds ?? []) addAlias(aliases, legacyId, entry);
    addAlias(aliases, entry.portuguese, entry);
  }

  return aliases;
}

function addAlias(aliases: Map<string, VocabularyEntry[]>, key: string, entry: VocabularyEntry) {
  const normalizedKey = normalizeProgressKey(key);
  const current = aliases.get(normalizedKey) ?? [];
  if (!current.some((candidate) => candidate.id === entry.id)) aliases.set(normalizedKey, [...current, entry]);
}

function normalizeProgressKey(value: string) {
  return value.normalize("NFC").toLowerCase().replace(/\s+/g, " ").trim();
}

function mergeStatus<T extends Exclude<CardStatus, "new"> | undefined>(a: T, b: T): T {
  if (!a) return b;
  if (!b) return a;
  return (statusRank[b] > statusRank[a] ? b : a) as T;
}

function maxOptional(a?: number, b?: number) {
  if (a === undefined) return b;
  if (b === undefined) return a;
  return Math.max(a, b);
}

function optionalNumber(value: unknown) {
  return typeof value === "number" && Number.isFinite(value) ? value : undefined;
}

function numberOrZero(value: unknown) {
  return typeof value === "number" && Number.isFinite(value) ? value : 0;
}
