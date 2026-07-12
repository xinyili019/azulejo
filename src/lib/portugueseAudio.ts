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

  const audio = new Audio(`${import.meta.env.BASE_URL}${path}`);
  if (activeAudio) fadeOutAudio(activeAudio);
  activeAudio = audio;
  let usedFallback = false;

  const fallbackToBrowserVoice = () => {
    if (usedFallback) return;
    usedFallback = true;
    speakWithBrowserVoice(fallbackText);
  };

  audio.addEventListener("error", fallbackToBrowserVoice, { once: true });

  try {
    const playPromise = audio.play();
    playPromise?.catch(fallbackToBrowserVoice);
  } catch {
    fallbackToBrowserVoice();
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
