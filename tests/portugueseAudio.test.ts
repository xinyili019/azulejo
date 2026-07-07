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

  it("uses playback audio while a clip plays so iPhone speaker output is audible", () => {
    const audioSession = { type: "ambient" };
    Object.defineProperty(navigator, "audioSession", {
      configurable: true,
      value: audioSession
    });

    playPortugueseAudio("audio/pt/m1-casa.m4a", "casa");

    expect(audioSession.type).toBe("playback");
    expect(window.HTMLMediaElement.prototype.play).toHaveBeenCalledTimes(1);

    document.querySelector("audio")?.dispatchEvent(new Event("ended"));

    expect(audioSession.type).toBe("ambient");
  });
});
