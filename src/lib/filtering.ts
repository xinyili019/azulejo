import type { Direction, ProgressState, VocabularyEntry } from "../types";
import { getCardProgress } from "./progress";
import { getPortugueseDisplayText } from "./portugueseDisplay";

export interface FilterOptions {
  modulo: string;
  onlyDue: boolean;
}

export function getModulos(entries: VocabularyEntry[]) {
  return Array.from(new Set(entries.map((entry) => entry.modulo).filter((modulo): modulo is string => Boolean(modulo))));
}

export function filterEntries(
  entries: VocabularyEntry[],
  progress: ProgressState,
  options: FilterOptions
): VocabularyEntry[] {
  return entries.filter((entry) => {
    const matchesModulo = options.modulo === "all" || entry.modulo === options.modulo;
    const cardProgress = getCardProgress(progress, entry.id);
    const matchesDue = !options.onlyDue || cardProgress.status !== "known";

    return matchesModulo && matchesDue;
  });
}

export function getPrompt(entry: VocabularyEntry, direction: Direction) {
  if (direction.startsWith("pt-")) return getPortugueseDisplayText(entry);
  if (direction === "en-pt") return entry.english;
  if (direction === "zh-hans-pt") return entry.zhHans;
  return entry.zhHant;
}

export function getAnswer(entry: VocabularyEntry, direction: Direction) {
  if (direction === "pt-en") return entry.english;
  if (direction === "pt-zh-hans") return entry.zhHans;
  if (direction === "pt-zh-hant") return entry.zhHant;
  return getPortugueseDisplayText(entry);
}
