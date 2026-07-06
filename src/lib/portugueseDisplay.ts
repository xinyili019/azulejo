import type { GrammaticalGender, VocabularyEntry } from "../types";

const articleByGender: Record<GrammaticalGender, string> = {
  m: "o",
  f: "a",
  "m-pl": "os",
  "f-pl": "as"
};

export interface PortugueseTermParts {
  article?: string;
  word: string;
  text: string;
}

export function getPortugueseTermParts(entry: VocabularyEntry): PortugueseTermParts {
  if (entry.pos !== "noun" || !entry.gender) {
    return {
      word: entry.portuguese,
      text: entry.portuguese
    };
  }

  const article = articleByGender[entry.gender];
  const word = stripLeadingDefiniteArticle(entry.portuguese);

  return {
    article,
    word,
    text: `${article} ${word}`
  };
}

export function getPortugueseDisplayText(entry: VocabularyEntry): string {
  return getPortugueseTermParts(entry).text;
}

export function getPortugueseBareText(entry: VocabularyEntry): string {
  return entry.pos === "noun" && entry.gender ? stripLeadingDefiniteArticle(entry.portuguese) : entry.portuguese;
}

export function stripLeadingDefiniteArticle(value: string): string {
  return value.replace(/^(?:o|a|os|as)\s+/iu, "").trim();
}
