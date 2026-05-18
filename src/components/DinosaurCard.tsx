import { Link } from 'react-router-dom';
import type { Dinosaur } from '../data/dinosaurs';
import { periodColors } from '../data/dinosaurs';
import { DinoImage } from './DinoImage';
import styles from './DinosaurCard.module.css';

const DIET_EMOJI: Record<string, string> = {
  Carnivore: '🥩',
  Herbivore: '🌿',
  Omnivore: '🌾',
  Piscivore: '🐟',
};

interface Props {
  dinosaur: Dinosaur;
}

export function DinosaurCard({ dinosaur }: Props) {
  const periodColor = periodColors[dinosaur.period];

  return (
    <Link to={`/dinosaur/${dinosaur.id}`} className={styles.card}>
      <div className={styles.imgWrap} style={{ borderBottomColor: periodColor + '55' }}>
        <DinoImage
          dinoId={dinosaur.id}
          dinoName={dinosaur.name}
          accentColor={periodColor}
          variant="card"
        />
        <div className={styles.periodBadge} style={{ backgroundColor: periodColor }}>
          {dinosaur.period}
        </div>
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
