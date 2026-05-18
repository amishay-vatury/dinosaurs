import type { WordPosition } from '../hooks/useSpeech';
import styles from './WordHighlighter.module.css';

interface Props {
  text: string;
  wordPositions: WordPosition[];
  currentWordIndex: number;
  isActive: boolean;
}

export function WordHighlighter({ text, wordPositions, currentWordIndex, isActive }: Props) {
  if (!isActive || wordPositions.length === 0) {
    return <p className={styles.text}>{text}</p>;
  }

  const parts: React.ReactNode[] = [];
  let cursor = 0;

  wordPositions.forEach((wp, i) => {
    if (wp.start > cursor) {
      parts.push(
        <span key={`gap-${i}`} className={styles.gap}>
          {text.slice(cursor, wp.start)}
        </span>
      );
    }
    parts.push(
      <span
        key={`word-${i}`}
        className={`${styles.word} ${i === currentWordIndex ? styles.highlighted : ''}`}
      >
        {wp.word}
      </span>
    );
    cursor = wp.end;
  });

  if (cursor < text.length) {
    parts.push(
      <span key="tail" className={styles.gap}>
        {text.slice(cursor)}
      </span>
    );
  }

  return <p className={styles.text}>{parts}</p>;
}
