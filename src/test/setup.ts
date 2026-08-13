import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

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
