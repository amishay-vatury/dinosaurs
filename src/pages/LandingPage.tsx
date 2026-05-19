import { useNavigate } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { dinosaurs } from '../data/dinosaurs';
import type { Period } from '../data/dinosaurs';
import styles from './LandingPage.module.css';

const PERIODS: { name: Period; range: string; label: string }[] = [
  { name: 'Triassic',   range: '252 – 201 Million Years Ago', label: 'TRIASSIC'   },
  { name: 'Jurassic',   range: '201 – 145 Million Years Ago', label: 'JURASSIC'   },
  { name: 'Cretaceous', range: '145 – 66 Million Years Ago',  label: 'CRETACEOUS' },
];

// Free AI image from Pollinations.ai — T-Rex, Triceratops, Velociraptor,
// Spinosaurus, Pteranodon, Brachiosaurus in a prehistoric jungle landscape.
// Seed is fixed so the same image loads every time. 960×540 generates fast (~5s).
const HERO_URL =
  'https://image.pollinations.ai/prompt/' +
  'cinematic%20prehistoric%20landscape%20tyrannosaurus%20rex%20roaring%20triceratops%20velociraptor' +
  '%20spinosaurus%20pteranodon%20flying%20brachiosaurus%20lush%20jungle%20volcanic%20mountains' +
  '%20erupting%20dramatic%20stormy%20sky%20lightning%20highly%20detailed%20paleoart%20wide%20shot' +
  '?width=960&height=540&seed=7842&nologo=true';

export function LandingPage() {
  const navigate = useNavigate();
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
      {/* AI-generated prehistoric scene with multiple famous dinosaurs */}
      <img
        src={HERO_URL}
        className={`${styles.bgImg} ${imgLoaded ? styles.bgImgLoaded : ''}`}
        onLoad={() => setImgLoaded(true)}
        alt=""
        aria-hidden
      />

      {/* Gradient overlay */}
      <div className={styles.overlay} />

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.brand}>
          <p className={styles.eyebrow}>Explore the prehistoric world</p>
          <h1 className={styles.title}>Dinosaurs Land</h1>
          <p className={styles.tagline}>
            186 million years of Earth&apos;s most magnificent creatures
          </p>
        </div>

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

        <div className={styles.scrollHint} aria-hidden>
          <span className={styles.scrollLine} />
          <span className={styles.scrollText}>Select a period</span>
        </div>
      </div>
    </div>
  );
}
