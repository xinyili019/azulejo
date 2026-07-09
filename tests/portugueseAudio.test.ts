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

  it("uses transient prompt audio while a clip plays so background audio is only ducked", () => {
    const audioSession = { type: "ambient" };
    Object.defineProperty(navigator, "audioSession", {
      configurable: true,
      value: audioSession
    });

    playPortugueseAudio("audio/pt/m1-casa.m4a", "casa");

    expect(audioSession.type).toBe("transient");
    expect(window.HTMLMediaElement.prototype.play).toHaveBeenCalledTimes(1);

    document.querySelector("audio")?.dispatchEvent(new Event("ended"));

    expect(audioSession.type).toBe("ambient");
  });

  it("does not let an older clip restore the audio session during a newer app clip", () => {
    const audioSession = { type: "ambient" };
    Object.defineProperty(navigator, "audioSession", {
      configurable: true,
      value: audioSession
    });

    playPortugueseAudio("audio/pt/m1-casa.m4a", "casa");
    const firstAudio = document.querySelector("audio");
    playPortugueseAudio("audio/pt/m1-ola.m4a", "olá");

    expect(audioSession.type).toBe("transient");

    firstAudio?.dispatchEvent(new Event("ended"));

    expect(audioSession.type).toBe("transient");
  });
});
