import { useState, useCallback, useRef, useEffect } from 'react';
import { Capacitor, registerPlugin } from '@capacitor/core';

export interface WordPosition {
  word: string;
  start: number;
  end: number;
  index: number;
}

export interface UseSpeechReturn {
  isPlaying: boolean;
  isPaused: boolean;
  currentWordIndex: number;
  wordPositions: WordPosition[];
  speak: (text: string) => void;
  pause: () => void;
  resume: () => void;
  stop: () => void;
  supported: boolean;
}

// ── Native Capacitor TTS (Android / iOS) ─────────────────────────────────────

interface NativeTtsPlugin {
  speak(options: { text: string; rate: number }): Promise<void>;
  stop(): Promise<void>;
  addListener(event: 'ttsDone', listener: () => void): Promise<{ remove(): void }>;
}

const isNative = Capacitor.isNativePlatform();
const NativeTts: NativeTtsPlugin | null = isNative
  ? registerPlugin<NativeTtsPlugin>('Tts')
  : null;

// ── Web Speech helpers ────────────────────────────────────────────────────────

function buildWordPositions(text: string): WordPosition[] {
  const positions: WordPosition[] = [];
  const regex = /\S+/g;
  let match: RegExpExecArray | null;
  let index = 0;
  while ((match = regex.exec(text)) !== null) {
    positions.push({ word: match[0], start: match.index, end: match.index + match[0].length, index: index++ });
  }
  return positions;
}

function pickVoice(): SpeechSynthesisVoice | null {
  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) return null;

  const lc = (v: SpeechSynthesisVoice) => v.name.toLowerCase();

  const natural = voices.find(v => lc(v).includes('natural'));
  if (natural) return natural;

  const googleUS = voices.find(v => lc(v) === 'google us english');
  if (googleUS) return googleUS;
  const googleUK = voices.find(v => lc(v).includes('google') && lc(v).includes('english'));
  if (googleUK) return googleUK;

  for (const name of ['aria', 'jenny', 'sonia', 'libby', 'emma', 'guy']) {
    const found = voices.find(v => lc(v).includes(name));
    if (found) return found;
  }

  for (const name of ['samantha', 'karen', 'moira', 'tessa']) {
    const found = voices.find(v => lc(v).includes(name));
    if (found) return found;
  }

  return voices.find(v => v.lang.startsWith('en')) ?? voices[0];
}

// ── Hook ─────────────────────────────────────────────────────────────────────

export function useSpeech(): UseSpeechReturn {
  const webSupported = !isNative && typeof window !== 'undefined' && 'speechSynthesis' in window;
  const supported = isNative || webSupported;

  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(-1);
  const [wordPositions, setWordPositions] = useState<WordPosition[]>([]);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const fallbackTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearFallback = () => {
    if (fallbackTimerRef.current !== null) {
      clearInterval(fallbackTimerRef.current);
      fallbackTimerRef.current = null;
    }
  };

  useEffect(() => {
    if (!supported) return;

    if (isNative && NativeTts) {
      let removeListener: (() => void) | null = null;
      NativeTts.addListener('ttsDone', () => {
        setIsPlaying(false);
        setIsPaused(false);
        setCurrentWordIndex(-1);
      }).then(handle => {
        removeListener = () => handle.remove();
      });
      return () => {
        NativeTts.stop();
        clearFallback();
        if (removeListener) removeListener();
      };
    }

    // Web Speech setup
    window.speechSynthesis.getVoices();
    const handler = () => window.speechSynthesis.getVoices();
    window.speechSynthesis.addEventListener('voiceschanged', handler);
    return () => {
      window.speechSynthesis.removeEventListener('voiceschanged', handler);
      window.speechSynthesis.cancel();
      clearFallback();
    };
  }, [supported]); // eslint-disable-line react-hooks/exhaustive-deps

  const stop = useCallback(() => {
    if (!supported) return;
    clearFallback();
    if (isNative && NativeTts) {
      NativeTts.stop();
    } else {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
    setIsPaused(false);
    setCurrentWordIndex(-1);
  }, [supported]); // eslint-disable-line react-hooks/exhaustive-deps

  const speak = useCallback((text: string) => {
    if (!supported) return;
    clearFallback();

    if (isNative && NativeTts) {
      setCurrentWordIndex(-1);
      setWordPositions([]);
      setIsPlaying(true);
      setIsPaused(false);
      NativeTts.speak({ text, rate: 0.85 });
      return;
    }

    // Web Speech path
    window.speechSynthesis.cancel();
    setCurrentWordIndex(-1);

    const positions = buildWordPositions(text);
    setWordPositions(positions);

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.pitch = 1.0;
    utterance.rate = 0.85;
    utterance.volume = 1.0;
    // Do NOT set utterance.lang — Chrome may override the explicit voice with a local SAPI
    // voice when lang is set, and local voices don't fire onboundary events.

    const voice = pickVoice();
    if (voice) utterance.voice = voice;

    let boundaryFired = false;

    utterance.onboundary = (event: SpeechSynthesisEvent) => {
      if (event.name !== 'word') return;
      boundaryFired = true;
      const idx = positions.findIndex(wp => wp.start === event.charIndex);
      if (idx !== -1) {
        setCurrentWordIndex(idx);
      } else {
        const fallback = positions.findIndex(
          wp => event.charIndex >= wp.start && event.charIndex < wp.end,
        );
        if (fallback !== -1) setCurrentWordIndex(fallback);
      }
    };

    utterance.onstart = () => {
      setIsPlaying(true);
      setIsPaused(false);
      setTimeout(() => {
        if (boundaryFired || positions.length === 0) return;
        let wordIdx = 0;
        const msPerWord = Math.round(60_000 / (130 * utterance.rate));
        fallbackTimerRef.current = setInterval(() => {
          if (wordIdx < positions.length) {
            setCurrentWordIndex(wordIdx++);
          } else {
            clearFallback();
          }
        }, msPerWord);
      }, 700);
    };

    const cleanup = () => {
      clearFallback();
      setIsPlaying(false);
      setIsPaused(false);
      setCurrentWordIndex(-1);
    };
    utterance.onend = cleanup;
    utterance.onerror = cleanup;

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  }, [supported]); // eslint-disable-line react-hooks/exhaustive-deps

  const pause = useCallback(() => {
    if (!supported || isNative || !isPlaying) return;
    clearFallback();
    window.speechSynthesis.pause();
    setIsPaused(true);
    setIsPlaying(false);
  }, [supported, isPlaying]); // eslint-disable-line react-hooks/exhaustive-deps

  const resume = useCallback(() => {
    if (!supported || isNative || !isPaused) return;
    window.speechSynthesis.resume();
    setIsPaused(false);
    setIsPlaying(true);
  }, [supported, isPaused]);

  return { isPlaying, isPaused, currentWordIndex, wordPositions, speak, pause, resume, stop, supported };
}
