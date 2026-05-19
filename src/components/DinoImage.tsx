import { useState } from 'react';
import styles from './DinoImage.module.css';

interface Props {
  dinoName: string;
  accentColor: string;
  imageUrl: string;
  className?: string;
  variant?: 'card' | 'hero';
}

export function DinoImage({ dinoName, accentColor, imageUrl, className = '', variant = 'hero' }: Props) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  if (!imageUrl || errored) {
    return (
      <div
        className={`${styles.wrapper} ${styles[variant]} ${styles.fallback} ${className}`}
        style={{ borderColor: accentColor + '66' }}
      >
        <span className={styles.initial} style={{ color: accentColor }}>
          {dinoName.charAt(0)}
        </span>
      </div>
    );
  }

  return (
    <div className={`${styles.wrapper} ${styles[variant]} ${className}`}>
      {!loaded && <div className={styles.skeleton} style={{ position: 'absolute', inset: 0 }} />}
      <img
        src={imageUrl}
        alt={`${dinoName} illustration`}
        className={styles.img}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setErrored(true)}
      />
    </div>
  );
}
