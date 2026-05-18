import { useWikipediaImage } from '../hooks/useWikipediaImage';
import styles from './DinoImage.module.css';

interface Props {
  dinoId: string;
  dinoName: string;
  accentColor: string;
  className?: string;
  variant?: 'card' | 'hero';
}

export function DinoImage({ dinoId, dinoName, accentColor, className = '', variant = 'hero' }: Props) {
  const { imageUrl, loading } = useWikipediaImage(dinoId);

  if (loading) {
    return (
      <div className={`${styles.wrapper} ${styles[variant]} ${className}`}>
        <div className={styles.skeleton} />
      </div>
    );
  }

  if (imageUrl) {
    return (
      <div className={`${styles.wrapper} ${styles[variant]} ${className}`}>
        <img
          src={imageUrl}
          alt={`${dinoName} illustration`}
          className={styles.img}
          loading="lazy"
        />
      </div>
    );
  }

  // Fallback avatar
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
