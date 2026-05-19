import { useState, useCallback, useRef, useEffect } from 'react';

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

  // Edge neural voices are the best available in any browser
  const natural = voices.find(v => lc(v).includes('natural'));
  if (natural) return natural;

  // Chrome cloud voices — prefer US over UK for more natural prosody
  const googleUS = voices.find(v => lc(v) === 'google us english');
  if (googleUS) return googleUS;
  const googleUK = voices.find(v => lc(v).includes('google') && lc(v).includes('english'));
  if (googleUK) return googleUK;

  // Microsoft online voices (Edge without Neural tag)
  for (const name of ['aria', 'jenny', 'sonia', 'libby', 'emma', 'guy']) {
    const found = voices.find(v => lc(v).includes(name));
    if (found) return found;
  }

  // macOS / iOS voices
  for (const name of ['samantha', 'karen', 'moira', 'tessa']) {
    const found = voices.find(v => lc(v).includes(name));
    if (found) return found;
  }

  return voices.find(v => v.lang.startsWith('en')) ?? voices[0];
}

export function useSpeech(): UseSpeechReturn {
  const supported = typeof window !== 'undefined' && 'speechSynthesis' in window;
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
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
    setCurrentWordIndex(-1);
  }, [supported]); // eslint-disable-line react-hooks/exhaustive-deps

  const speak = useCallback((text: string) => {
    if (!supported) return;
    clearFallback();
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
      // If no boundary events arrive within 700ms, fall back to time-based highlighting.
      // Chrome cloud voices sometimes don't fire onboundary despite playing fine.
      setTimeout(() => {
        if (boundaryFired || positions.length === 0) return;
        let wordIdx = 0;
        // 130 WPM baseline scaled by rate — gives ms per word
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
    if (!supported || !isPlaying) return;
    clearFallback();
    window.speechSynthesis.pause();
    setIsPaused(true);
    setIsPlaying(false);
  }, [supported, isPlaying]); // eslint-disable-line react-hooks/exhaustive-deps

  const resume = useCallback(() => {
    if (!supported || !isPaused) return;
    window.speechSynthesis.resume();
    setIsPaused(false);
    setIsPlaying(true);
  }, [supported, isPaused]);

  return { isPlaying, isPaused, currentWordIndex, wordPositions, speak, pause, resume, stop, supported };
}
