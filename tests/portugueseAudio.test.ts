import { afterEach, describe, expect, it, vi } from "vitest";
import { playPortugueseAudio } from "../src/lib/portugueseAudio";

describe("Portuguese audio playback", () => {
  afterEach(() => {
    vi.clearAllMocks();
    Object.defineProperty(navigator, "audioSession", {
      configurable: true,
      value: undefined
    });
  });

  it("uses normal media playback without changing the device audio route", () => {
    const audioSession = { type: "ambient" };
    Object.defineProperty(navigator, "audioSession", {
      configurable: true,
      value: audioSession
    });

    playPortugueseAudio("audio/pt/m1-casa.m4a", "casa");

    expect(audioSession.type).toBe("ambient");
    expect(window.HTMLMediaElement.prototype.play).toHaveBeenCalledTimes(1);
  });

  it("keeps the device audio route unchanged across consecutive clips", () => {
    const audioSession = { type: "ambient" };
    Object.defineProperty(navigator, "audioSession", {
      configurable: true,
      value: audioSession
    });

    playPortugueseAudio("audio/pt/m1-casa.m4a", "casa");
    playPortugueseAudio("audio/pt/m1-ola.m4a", "olá");

    expect(audioSession.type).toBe("ambient");
    expect(window.HTMLMediaElement.prototype.play).toHaveBeenCalledTimes(2);
  });
});
