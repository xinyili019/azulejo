import overrides from "../data/translations/overrides.json";
import type { Direction } from "../types";

type Dictionary = Record<string, string>;

// Each language is a separate chunk, so learners only download the one they study in.
const dictionaryLoaders: Record<string, () => Promise<{ default: Dictionary }>> = {
  fr: () => import("../data/translations/fr.json"),
  es: () => import("../data/translations/es.json"),
  bn: () => import("../data/translations/bn.json"),
  ar: () => import("../data/translations/ar.json"),
  hi: () => import("../data/translations/hi.json"),
  ur: () => import("../data/translations/ur.json"),
  uk: () => import("../data/translations/uk.json"),
  ne: () => import("../data/translations/ne.json"),
  fa: () => import("../data/translations/fa.json"),
  ru: () => import("../data/translations/ru.json"),
  it: () => import("../data/translations/it.json")
};

export const LEARNING_TRANSLATION_LOCALES = Object.keys(dictionaryLoaders);

/** Dictionaries loaded so far, keyed by locale. Filled by loadLearningTranslations. */
export const learningTranslations: Record<string, Dictionary> = {};
const pendingLoads = new Map<string, Promise<void>>();

function localeFor(directionOrLocale: string) {
  return directionOrLocale.startsWith("pt-") ? directionOrLocale.slice(3) : directionOrLocale;
}

export function isLearningTranslationLoaded(directionOrLocale: string) {
  const locale = localeFor(directionOrLocale);
  return !dictionaryLoaders[locale] || Boolean(learningTranslations[locale]);
}

/** Resolves once the dictionary for this direction (or locale) is ready; a no-op for built-in languages. */
export function loadLearningTranslations(directionOrLocale: string): Promise<void> {
  const locale = localeFor(directionOrLocale);
  const loader = dictionaryLoaders[locale];
  if (!loader || learningTranslations[locale]) return Promise.resolve();

  let pending = pendingLoads.get(locale);
  if (!pending) {
    pending = loader()
      .then(({ default: dictionary }) => {
        learningTranslations[locale] = { ...dictionary, ...overrides[locale as keyof typeof overrides] };
      })
      .finally(() => pendingLoads.delete(locale));
    pendingLoads.set(locale, pending);
  }
  return pending;
}

export function loadAllLearningTranslations() {
  return Promise.all(LEARNING_TRANSLATION_LOCALES.map(loadLearningTranslations)).then(() => undefined);
}

/** Stored locally so studying works offline and never depends on a translation API. */
export function translateLearningText(text: string, direction: Direction): string;
export function translateLearningText(text: string | undefined, direction: Direction): string | undefined;
export function translateLearningText(text: string | undefined, direction: Direction) {
  if (!text) return text;
  return learningTranslations[direction.slice(3)]?.[text] ?? text;
}
