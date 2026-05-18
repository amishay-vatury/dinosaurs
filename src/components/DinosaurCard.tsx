import { Link } from 'react-router-dom';
import type { Dinosaur } from '../data/dinosaurs';
import { periodColors } from '../data/dinosaurs';
import styles from './DinosaurCard.module.css';

const DIET_EMOJI: Record<string, string> = {
  Carnivore: '🥩',
  Herbivore: '🌿',
  Omnivore: '🌾',
  Piscivore: '🐟',
};

const PERIOD_EMOJI: Record<string, string> = {
  Triassic: '🏜️',
  Jurassic: '🌴',
  Cretaceous: '🌋',
};

interface Props {
  dinosaur: Dinosaur;
}

export function DinosaurCard({ dinosaur }: Props) {
  const periodColor = periodColors[dinosaur.period];

  return (
    <Link to={`/dinosaur/${dinosaur.id}`} className={styles.card}>
      <div
        className={styles.periodBadge}
        style={{ backgroundColor: periodColor }}
      >
        {PERIOD_EMOJI[dinosaur.period]} {dinosaur.period}
      </div>
      <div className={styles.avatar} style={{ borderColor: periodColor }}>
        <DinoSilhouette name={dinosaur.name} color={periodColor} />
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{dinosaur.name}</h3>
        <div className={styles.meta}>
          <span className={styles.metaItem}>
            {DIET_EMOJI[dinosaur.diet]} {dinosaur.diet}
          </span>
          <span className={styles.metaItem}>📏 {dinosaur.length}</span>
        </div>
        <p className={styles.location}>📍 {dinosaur.location}</p>
      </div>
    </Link>
  );
}

function DinoSilhouette({ name, color }: { name: string; color: string }) {
  const initial = name.charAt(0).toUpperCase();
  return (
    <div className={styles.silhouette} style={{ color }}>
      <span className={styles.initial}>{initial}</span>
      <svg viewBox="0 0 80 60" className={styles.svg} aria-hidden>
        <path
          d="M10 50 Q15 30 25 28 Q30 20 35 22 Q40 15 50 18 Q60 16 65 22 Q70 20 72 28 Q75 35 70 42 Q65 48 55 50 Q40 52 25 50 Z"
          fill={color}
          opacity="0.18"
        />
        <circle cx="62" cy="22" r="7" fill={color} opacity="0.22" />
        <path
          d="M55 18 Q58 12 65 14 Q68 16 66 20"
          fill="none"
          stroke={color}
          strokeWidth="2"
          opacity="0.3"
        />
      </svg>
    </div>
  );
}
