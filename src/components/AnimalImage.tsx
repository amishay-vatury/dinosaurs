import { useState } from 'react';
import { useWikipediaImage } from '../hooks/useWikipediaImage';
import styles from './DinoImage.module.css';

interface Props {
  animalName: string;
  wikiTitle: string;
  accentColor: string;
  className?: string;
  variant?: 'card' | 'hero';
}

export function AnimalImage({ animalName, wikiTitle, accentColor, className = '', variant = 'hero' }: Props) {
  const { imageUrl, loading } = useWikipediaImage(wikiTitle);
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  if (loading) {
    return (
      <div className={`${styles.wrapper} ${styles[variant]} ${className}`}>
        <div className={styles.skeleton} style={{ position: 'absolute', inset: 0 }} />
      </div>
    );
  }

  if (!imageUrl || errored) {
    return (
      <div
        className={`${styles.wrapper} ${styles[variant]} ${styles.fallback} ${className}`}
        style={{ borderColor: accentColor + '66' }}
      >
        <span className={styles.initial} style={{ color: accentColor }}>
          {animalName.charAt(0)}
        </span>
      </div>
    );
  }

  return (
    <div className={`${styles.wrapper} ${styles[variant]} ${className}`}>
      {!loaded && <div className={styles.skeleton} style={{ position: 'absolute', inset: 0 }} />}
      <img
        src={imageUrl}
        alt={`${animalName} photo`}
        className={styles.img}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setErrored(true)}
      />
    </div>
  );
}
