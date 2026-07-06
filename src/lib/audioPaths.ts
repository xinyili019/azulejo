import type { VocabularyEntry } from "../types";

export function getWordAudioPath(entry: VocabularyEntry): string {
  return `audio/pt/${getAudioFileId(entry)}.m4a`;
}

export function getExampleAudioPath(entry: VocabularyEntry): string {
  return `audio/pt/examples/${getAudioFileId(entry)}.m4a`;
}

function getAudioFileId(entry: VocabularyEntry): string {
  return entry.legacyIds?.[0] ?? entry.id;
}
