import type { CardProgress, CardStatus, ProgressState, VocabularyEntry } from "../types";

export const PROGRESS_STORAGE_KEY = "pt-a2-vocab-progress";

const emptyProgress = (): CardProgress => ({
  status: "new",
  reviewCount: 0,
  knownCount: 0
});

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

export function loadProgress(storage: Pick<Storage, "getItem"> = window.localStorage): ProgressState {
  const raw = storage.getItem(PROGRESS_STORAGE_KEY);
  if (!raw) return {};

  try {
    const parsed = JSON.parse(raw) as ProgressState;
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

export function saveProgress(
  progress: ProgressState,
  storage: Pick<Storage, "setItem"> = window.localStorage
): void {
  storage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(progress));
}

export function summarizeProgress(entries: VocabularyEntry[], progress: ProgressState) {
  const reviewed = entries.filter((entry) => getCardProgress(progress, entry.id).reviewCount > 0).length;
  const known = entries.filter((entry) => getCardProgress(progress, entry.id).status === "known").length;

  return {
    total: entries.length,
    reviewed,
    known,
    remaining: entries.length - known,
    knownPercent: entries.length === 0 ? 0 : Math.round((known / entries.length) * 100)
  };
}

export function summarizeByModulo(entries: VocabularyEntry[], progress: ProgressState) {
  return entries.reduce<Record<string, ReturnType<typeof summarizeProgress>>>((summary, entry) => {
    const group = entries.filter((candidate) => candidate.modulo === entry.modulo);
    summary[entry.modulo] = summarizeProgress(group, progress);
    return summary;
  }, {});
}
