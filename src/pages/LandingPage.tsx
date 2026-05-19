import { useNavigate } from 'react-router-dom';
import { useMemo, useState, useEffect } from 'react';
import { dinosaurs } from '../data/dinosaurs';
import type { Period } from '../data/dinosaurs';
import styles from './LandingPage.module.css';

const PERIODS: { name: Period; range: string; label: string }[] = [
  { name: 'Triassic',   range: '252 – 201 Million Years Ago', label: 'TRIASSIC'   },
  { name: 'Jurassic',   range: '201 – 145 Million Years Ago', label: 'JURASSIC'   },
  { name: 'Cretaceous', range: '145 – 66 Million Years Ago',  label: 'CRETACEOUS' },
];

// Cycle through several iconic dinosaurs for the hero image
const HERO_IDS = ['tyrannosaurus', 'brachiosaurus', 'spinosaurus', 'triceratops'];

const SKELETON_WORDS = ['skeleton', 'fossil', 'holotype', 'specimen', 'skull', 'bone', 'mount'];

function useHeroImage() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      for (const id of HERO_IDS) {
        try {
          const title = id.charAt(0).toUpperCase() + id.slice(1);
          const res = await fetch(
            `https://en.wikipedia.org/api/rest_v1/page/summary/${title}`
          );
          const data = await res.json();
          const url: string | null =
            data?.originalimage?.source ?? data?.thumbnail?.source ?? null;
          const lower = (url ?? '').toLowerCase();
          const isSkeleton = SKELETON_WORDS.some(w => lower.includes(w));
          if (url && !isSkeleton && !cancelled) { setImageUrl(url); return; }
        } catch { /* try next */ }
      }
    })();
    return () => { cancelled = true; };
  }, []);

  return imageUrl;
}

export function LandingPage() {
  const navigate = useNavigate();
  const heroImage = useHeroImage();
  const [imgLoaded, setImgLoaded] = useState(false);
  const [hoveredPeriod, setHoveredPeriod] = useState<Period | null>(null);

  const firstOfPeriod = useMemo(() => {
    const map: Record<Period, string> = { Triassic: '', Jurassic: '', Cretaceous: '' };
    for (const period of ['Triassic', 'Jurassic', 'Cretaceous'] as Period[]) {
      const sorted = dinosaurs
        .filter(d => d.period === period)
        .sort((a, b) => a.name.localeCompare(b.name));
      map[period] = sorted[0]?.id ?? '';
    }
    return map;
  }, []);

  const handlePeriod = (period: Period) => {
    const id = firstOfPeriod[period];
    if (id) navigate(`/dinosaur/${id}?period=${period}`);
  };

  return (
    <div className={styles.page}>
      {/* Background image */}
      {heroImage && (
        <img
          src={heroImage}
          className={`${styles.bgImg} ${imgLoaded ? styles.bgImgLoaded : ''}`}
          onLoad={() => setImgLoaded(true)}
          alt=""
          aria-hidden
        />
      )}

      {/* Gradient overlay — always present */}
      <div className={styles.overlay} />

      {/* Content */}
      <div className={styles.content}>
        {/* Brand / title */}
        <div className={styles.brand}>
          <p className={styles.eyebrow}>Explore the prehistoric world</p>
          <h1 className={styles.title}>Dinosaurs Land</h1>
          <p className={styles.tagline}>
            186 million years of Earth's most magnificent creatures
          </p>
        </div>

        {/* Period navigation */}
        <nav className={styles.nav} aria-label="Choose a geological period">
          {PERIODS.map(({ name, range, label }, i) => (
            <div key={name} className={styles.navItemWrap}>
              {i > 0 && <span className={styles.separator} aria-hidden />}
              <button
                className={`${styles.navItem} ${hoveredPeriod === name ? styles.navItemHovered : ''}`}
                onClick={() => handlePeriod(name)}
                onMouseEnter={() => setHoveredPeriod(name)}
                onMouseLeave={() => setHoveredPeriod(null)}
              >
                <span className={styles.navLabel}>{label}</span>
                <span className={styles.navRange}>{range}</span>
                <span className={styles.navUnderline} aria-hidden />
              </button>
            </div>
          ))}
        </nav>

        {/* Scroll hint */}
        <div className={styles.scrollHint} aria-hidden>
          <span className={styles.scrollLine} />
          <span className={styles.scrollText}>Select a period</span>
        </div>
      </div>
    </div>
  );
}
