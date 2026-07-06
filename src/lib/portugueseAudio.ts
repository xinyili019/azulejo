let activeAudio: HTMLAudioElement | null = null;

const AUDIO_FADE_STEPS = 6;
const AUDIO_FADE_INTERVAL_MS = 35;

export function speakWithBrowserVoice(text: string) {
  if (
    typeof window === "undefined" ||
    !("speechSynthesis" in window) ||
    !("SpeechSynthesisUtterance" in window)
  ) {
    return;
  }

  const utterance = new window.SpeechSynthesisUtterance(text);
  const voices = window.speechSynthesis.getVoices();
  const voice =
    voices.find((candidate) => candidate.lang.toLowerCase() === "pt-pt") ??
    voices.find((candidate) => candidate.lang.toLowerCase().startsWith("pt-pt")) ??
    voices.find((candidate) => candidate.lang.toLowerCase().startsWith("pt"));

  utterance.lang = voice?.lang ?? "pt-PT";
  utterance.voice = voice ?? null;
  window.speechSynthesis.speak(utterance);
}

export function playPortugueseAudio(path: string, fallbackText: string) {
  if (typeof window === "undefined" || !("Audio" in window)) {
    speakWithBrowserVoice(fallbackText);
    return;
  }

  prepareAmbientAudioSession();
  if (activeAudio) fadeOutAudio(activeAudio);

  activeAudio = new Audio(`${import.meta.env.BASE_URL}${path}`);
  activeAudio.preload = "auto";
  activeAudio.volume = 0.86;
  activeAudio.setAttribute("playsinline", "");
  let usedFallback = false;

  const fallbackToBrowserVoice = () => {
    if (usedFallback) return;
    usedFallback = true;
    speakWithBrowserVoice(fallbackText);
  };

  activeAudio.addEventListener("error", fallbackToBrowserVoice, { once: true });

  try {
    const playPromise = activeAudio.play();
    playPromise?.catch(fallbackToBrowserVoice);
  } catch {
    fallbackToBrowserVoice();
  }
}

function prepareAmbientAudioSession() {
  const audioSession = (navigator as Navigator & { audioSession?: { type?: string } }).audioSession;
  if (audioSession && "type" in audioSession) {
    try {
      audioSession.type = "ambient";
    } catch {
      // Some browsers expose audioSession but keep the type read-only.
    }
  }
}

function fadeOutAudio(audio: HTMLAudioElement) {
  const startVolume = audio.volume;
  let step = 0;

  const intervalId = window.setInterval(() => {
    step += 1;
    audio.volume = Math.max(0, startVolume * (1 - step / AUDIO_FADE_STEPS));

    if (step >= AUDIO_FADE_STEPS) {
      window.clearInterval(intervalId);
      audio.pause();
    }
  }, AUDIO_FADE_INTERVAL_MS);
}
