import type { Direction, ProgressState, VocabularyEntry } from "../types";
import { getCardProgress } from "./progress";

export interface FilterOptions {
  modulo: string;
  onlyDue: boolean;
}

export function getModulos(entries: VocabularyEntry[]) {
  return Array.from(new Set(entries.map((entry) => entry.modulo)));
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
  return direction === "pt-en" ? entry.portuguese : entry.english;
}

export function getAnswer(entry: VocabularyEntry, direction: Direction) {
  return direction === "pt-en" ? entry.english : entry.portuguese;
}
