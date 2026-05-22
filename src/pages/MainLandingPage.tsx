import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { categoryColors, categoryInfo, animalsByCategory } from '../data/animalsData';
import type { AnimalCategory } from '../data/animalsData';
import { useSpeech } from '../hooks/useSpeech';
import { useWikipediaImage } from '../hooks/useWikipediaImage';
import styles from './MainLandingPage.module.css';

const CATEGORIES: AnimalCategory[] = ['mammals', 'birds', 'reptiles', 'amphibians', 'invertebrates', 'fish'];

function DinoCard({ pending, onClick }: { pending: boolean; onClick: () => void }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgErr, setImgErr] = useState(false);
  return (
    <button
      className={`${styles.card} ${pending ? styles.cardPending : ''}`}
      onClick={onClick}
      style={{ '--accent': '#B8540A' } as React.CSSProperties}
    >
      <div className={styles.cardImg}>
        {!imgLoaded && !imgErr && <div className={styles.cardSkeleton} />}
        {!imgErr && (
          <img
            src="/landing_page.png"
            alt="Dinosaurs"
            className={`${styles.cardPhoto} ${imgLoaded ? styles.cardPhotoLoaded : ''}`}
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgErr(true)}
          />
        )}
        {imgErr && (
          <span className={styles.cardEmoji}>🦕</span>
        )}
      </div>
      <div className={styles.cardBody}>
        <span className={styles.cardEmoji2}>🦕</span>
        <span className={styles.cardName}>Dinosaurs</span>
        <span className={styles.cardTagline}>Prehistoric giants of the ancient world</span>
      </div>
      {pending && (
        <div className={styles.cardHint}>Tap again to explore →</div>
      )}
    </button>
  );
}

function CategoryCard({
  category,
  pending,
  onClick,
}: {
  category: AnimalCategory;
  pending: boolean;
  onClick: () => void;
}) {
  const info = categoryInfo[category];
  const color = categoryColors[category];
  const { imageUrl, loading } = useWikipediaImage(info.representative);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgErr, setImgErr] = useState(false);

  return (
    <button
      className={`${styles.card} ${pending ? styles.cardPending : ''}`}
      onClick={onClick}
      style={{ '--accent': color } as React.CSSProperties}
    >
      <div className={styles.cardImg}>
        {(loading || !imgLoaded) && !imgErr && <div className={styles.cardSkeleton} />}
        {!loading && imageUrl && !imgErr && (
          <img
            src={imageUrl}
            alt={info.name}
            className={`${styles.cardPhoto} ${imgLoaded ? styles.cardPhotoLoaded : ''}`}
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgErr(true)}
          />
        )}
        {(!imageUrl || imgErr) && !loading && (
          <span className={styles.cardEmoji}>{info.emoji}</span>
        )}
      </div>
      <div className={styles.cardBody}>
        <span className={styles.cardEmoji2}>{info.emoji}</span>
        <span className={styles.cardName}>{info.name}</span>
        <span className={styles.cardTagline}>{info.tagline}</span>
      </div>
      {pending && (
        <div className={styles.cardHint}>Tap again to explore →</div>
      )}
    </button>
  );
}

export function MainLandingPage() {
  const navigate = useNavigate();
  const speech = useSpeech();
  const [pending, setPending] = useState<string | null>(null);
  const pendingRef = useRef<string | null>(null);

  useEffect(() => {
    sessionStorage.removeItem('dinoInstructionsPlayed');

    let spoken = false;
    const onFirst = () => {
      if (spoken) return;
      spoken = true;
      speech.speak(
        'Welcome to Cool Creatures We Love! ' +
        'Tap any creature group to start exploring amazing animals from around the world!'
      );
      document.removeEventListener('pointerdown', onFirst);
    };
    document.addEventListener('pointerdown', onFirst);
    return () => {
      document.removeEventListener('pointerdown', onFirst);
      speech.stop();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleCategory = (id: string, displayName: string, destination: () => void) => {
    if (pendingRef.current === id) {
      speech.stop();
      setPending(null);
      pendingRef.current = null;
      destination();
    } else {
      pendingRef.current = id;
      setPending(id);
      speech.speak(`Click again if you want to see more about ${displayName}!`);
    }
  };

  const gotoDinosaurs = () => navigate('/dinosaurs');
  const gotoCategory = (cat: AnimalCategory) => {
    const animals = animalsByCategory[cat];
    if (animals.length > 0) navigate(`/animals/${cat}/${animals[0].id}`);
  };

  return (
    <div className={styles.page}>
      <div className={styles.overlay} />

      <div className={styles.content}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Discover our amazing planet</p>
          <h1 className={styles.title}>Cool Creatures<br />We Love</h1>
          <p className={styles.tagline}>Seven kingdoms of incredible animals await you</p>
        </header>

        <div className={styles.grid}>
          <DinoCard
            pending={pending === 'dinosaurs'}
            onClick={() => handleCategory('dinosaurs', 'Dinosaurs', gotoDinosaurs)}
          />
          {CATEGORIES.map(cat => (
            <CategoryCard
              key={cat}
              category={cat}
              pending={pending === cat}
              onClick={() => handleCategory(cat, categoryInfo[cat].name, () => gotoCategory(cat))}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
