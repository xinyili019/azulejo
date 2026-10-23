import uk from "../data/translations/uk.json";
import ne from "../data/translations/ne.json";
import fa from "../data/translations/fa.json";
import ru from "../data/translations/ru.json";
import it from "../data/translations/it.json";
import overrides from "../data/translations/overrides.json";
import fr from "../data/translations/fr.json";
import es from "../data/translations/es.json";
import bn from "../data/translations/bn.json";
import ar from "../data/translations/ar.json";
import hi from "../data/translations/hi.json";
import ur from "../data/translations/ur.json";
import type { Direction } from "../types";

export const learningTranslations: Record<string, Record<string, string>> = Object.fromEntries(
  Object.entries({ fr, es, bn, ar, hi, ur, uk, ne, fa, ru, it }).map(([locale, dictionary]) => [
    locale, { ...dictionary, ...overrides[locale as keyof typeof overrides] }
  ])
);

/** Stored locally so studying works offline and never depends on a translation API. */
export function translateLearningText(text: string, direction: Direction): string;
export function translateLearningText(text: string | undefined, direction: Direction): string | undefined;
export function translateLearningText(text: string | undefined, direction: Direction) {
  if (!text) return text;
  return learningTranslations[direction.slice(3)]?.[text] ?? text;
}
