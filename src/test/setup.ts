import "@testing-library/jest-dom/vitest";
import { beforeAll, vi } from "vitest";
import { loadAllLearningTranslations } from "../lib/learningTranslations";

// Translations are lazy-loaded in the app; tests run against every language up front.
beforeAll(() => loadAllLearningTranslations());

Object.defineProperty(window.HTMLMediaElement.prototype, "play", {
  configurable: true,
  value: vi.fn().mockResolvedValue(undefined)
});

Object.defineProperty(window.HTMLMediaElement.prototype, "pause", {
  configurable: true,
  value: vi.fn()
});

Object.defineProperty(window, "SpeechSynthesisUtterance", {
  configurable: true,
  value: vi.fn().mockImplementation((text: string) => ({ text, lang: "", voice: null }))
});

Object.defineProperty(window, "speechSynthesis", {
  configurable: true,
  value: {
    cancel: vi.fn(),
    getVoices: vi.fn(() => [{ lang: "pt-PT" }]),
    speak: vi.fn()
  }
});

Object.defineProperty(window, "scrollTo", {
  configurable: true,
  value: vi.fn()
});

Object.defineProperty(Element.prototype, "scrollIntoView", {
  configurable: true,
  value: vi.fn()
});
