import type { VocabularyEntry } from "../types";

export const DEFAULT_SESSION_SIZE = 20;
export const DEFAULT_MIN_FINAL_SESSION_SIZE = 10;

export interface SessionPlanOptions {
  targetSessionSize?: number;
  minFinalSessionSize?: number;
}

export interface VocabularySession {
  modulo: string;
  moduleIndex: number;
  sessionIndex: number;
  globalSessionIndex: number;
  entries: VocabularyEntry[];
  startIndex: number;
  endIndex: number;
  size: number;
  moduleKnownCountAtMilestone: number;
  globalKnownCountAtMilestone: number;
}

export interface ModuleSessionPlan {
  modulo: string;
  moduleIndex: number;
  entries: VocabularyEntry[];
  totalEntries: number;
  sessions: VocabularySession[];
}

export interface SessionPlan {
  modules: ModuleSessionPlan[];
  sessions: VocabularySession[];
  totalEntries: number;
  totalSessions: number;
}

interface NormalizedSessionPlanOptions {
  targetSessionSize: number;
  minFinalSessionSize: number;
}

function normalizeOptions(options: SessionPlanOptions = {}): NormalizedSessionPlanOptions {
  const targetSessionSize = options.targetSessionSize ?? DEFAULT_SESSION_SIZE;
  const minFinalSessionSize = options.minFinalSessionSize ?? DEFAULT_MIN_FINAL_SESSION_SIZE;

  if (!Number.isInteger(targetSessionSize) || targetSessionSize < 1) {
    throw new Error("targetSessionSize must be a positive integer");
  }

  if (!Number.isInteger(minFinalSessionSize) || minFinalSessionSize < 1) {
    throw new Error("minFinalSessionSize must be a positive integer");
  }

  return { targetSessionSize, minFinalSessionSize };
}

function splitSessionRanges(
  totalEntries: number,
  { targetSessionSize, minFinalSessionSize }: NormalizedSessionPlanOptions
): Array<{ startIndex: number; endIndex: number }> {
  const ranges: Array<{ startIndex: number; endIndex: number }> = [];

  for (let startIndex = 0; startIndex < totalEntries; startIndex += targetSessionSize) {
    ranges.push({
      startIndex,
      endIndex: Math.min(startIndex + targetSessionSize, totalEntries)
    });
  }

  const finalRange = ranges.at(-1);
  if (ranges.length > 1 && finalRange && finalRange.endIndex - finalRange.startIndex < minFinalSessionSize) {
    const previousRange = ranges[ranges.length - 2];
    previousRange.endIndex = finalRange.endIndex;
    ranges.pop();
  }

  return ranges;
}

export function buildModuleSessionPlan(
  modulo: string,
  entries: VocabularyEntry[],
  moduleIndex = 0,
  globalSessionOffset = 0,
  globalKnownCountOffset = 0,
  options: SessionPlanOptions = {}
): ModuleSessionPlan {
  const normalizedOptions = normalizeOptions(options);
  let moduleKnownCount = 0;

  const sessions = splitSessionRanges(entries.length, normalizedOptions).map((range, sessionIndex) => {
    const sessionEntries = entries.slice(range.startIndex, range.endIndex);
    moduleKnownCount += sessionEntries.length;

    return {
      modulo,
      moduleIndex,
      sessionIndex,
      globalSessionIndex: globalSessionOffset + sessionIndex,
      entries: sessionEntries,
      startIndex: range.startIndex,
      endIndex: range.endIndex,
      size: sessionEntries.length,
      moduleKnownCountAtMilestone: moduleKnownCount,
      globalKnownCountAtMilestone: globalKnownCountOffset + moduleKnownCount
    };
  });

  return {
    modulo,
    moduleIndex,
    entries,
    totalEntries: entries.length,
    sessions
  };
}

export function buildSessionPlan(entries: VocabularyEntry[], options: SessionPlanOptions = {}): SessionPlan {
  const groupedEntries = new Map<string, VocabularyEntry[]>();

  for (const entry of entries) {
    const moduleEntries = groupedEntries.get(entry.modulo) ?? [];
    moduleEntries.push(entry);
    groupedEntries.set(entry.modulo, moduleEntries);
  }

  let globalSessionOffset = 0;
  let globalKnownCountOffset = 0;

  const modules = Array.from(groupedEntries.entries()).map(([modulo, moduleEntries], moduleIndex) => {
    const modulePlan = buildModuleSessionPlan(
      modulo,
      moduleEntries,
      moduleIndex,
      globalSessionOffset,
      globalKnownCountOffset,
      options
    );

    globalSessionOffset += modulePlan.sessions.length;
    globalKnownCountOffset += modulePlan.totalEntries;

    return modulePlan;
  });

  const sessions = modules.flatMap((modulePlan) => modulePlan.sessions);

  return {
    modules,
    sessions,
    totalEntries: entries.length,
    totalSessions: sessions.length
  };
}
