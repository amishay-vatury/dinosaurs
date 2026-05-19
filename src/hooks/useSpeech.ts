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

  // Priority list — child-like, young, or natural-sounding voices first
  const priority = [
    'samantha', 'karen', 'moira', 'tessa', 'victoria', 'fiona',
    'zira', 'aria', 'jenny', 'sonia', 'libby', 'susan',
    'google uk english female', 'google us english',
    'female', 'girl',
  ];

  for (const keyword of priority) {
    const found = voices.find(v => v.name.toLowerCase().includes(keyword));
    if (found) return found;
  }

  // Prefer any en-US / en-GB voice over others
  return voices.find(v => v.lang.startsWith('en')) ?? voices[0];
}

export function useSpeech(): UseSpeechReturn {
  const supported = typeof window !== 'undefined' && 'speechSynthesis' in window;
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(-1);
  const [wordPositions, setWordPositions] = useState<WordPosition[]>([]);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (!supported) return;
    // Pre-load voices (Chrome needs this trigger)
    window.speechSynthesis.getVoices();
    const handler = () => window.speechSynthesis.getVoices();
    window.speechSynthesis.addEventListener('voiceschanged', handler);
    return () => {
      window.speechSynthesis.removeEventListener('voiceschanged', handler);
      window.speechSynthesis.cancel();
    };
  }, [supported]);

  const stop = useCallback(() => {
    if (!supported) return;
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
    setCurrentWordIndex(-1);
  }, [supported]);

  const speak = useCallback((text: string) => {
    if (!supported) return;
    window.speechSynthesis.cancel();
    setCurrentWordIndex(-1);

    const positions = buildWordPositions(text);
    setWordPositions(positions);

    const utterance = new SpeechSynthesisUtterance(text);

    // Child-like voice settings: high pitch, light pace
    utterance.pitch = 1.55;
    utterance.rate = 0.87;
    utterance.volume = 1.0;

    const voice = pickVoice();
    if (voice) utterance.voice = voice;

    utterance.onboundary = (event: SpeechSynthesisEvent) => {
      if (event.name === 'word') {
        const idx = positions.findIndex(wp => wp.start === event.charIndex);
        if (idx !== -1) {
          setCurrentWordIndex(idx);
        } else {
          const fallback = positions.findIndex(wp => event.charIndex >= wp.start && event.charIndex < wp.end);
          if (fallback !== -1) setCurrentWordIndex(fallback);
        }
      }
    };

    utterance.onstart = () => { setIsPlaying(true); setIsPaused(false); };
    utterance.onend = () => { setIsPlaying(false); setIsPaused(false); setCurrentWordIndex(-1); };
    utterance.onerror = () => { setIsPlaying(false); setIsPaused(false); setCurrentWordIndex(-1); };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  }, [supported]);

  const pause = useCallback(() => {
    if (!supported || !isPlaying) return;
    window.speechSynthesis.pause();
    setIsPaused(true);
    setIsPlaying(false);
  }, [supported, isPlaying]);

  const resume = useCallback(() => {
    if (!supported || !isPaused) return;
    window.speechSynthesis.resume();
    setIsPaused(false);
    setIsPlaying(true);
  }, [supported, isPaused]);

  return { isPlaying, isPaused, currentWordIndex, wordPositions, speak, pause, resume, stop, supported };
}
