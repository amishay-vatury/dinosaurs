import { useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import { dinosaurs } from '../data/dinosaurs';
import type { Period } from '../data/dinosaurs';
import styles from './LandingPage.module.css';

const PERIODS: { name: Period; range: string; label: string }[] = [
  { name: 'Triassic',   range: '252 – 201 Million Years Ago', label: 'TRIASSIC'   },
  { name: 'Jurassic',   range: '201 – 145 Million Years Ago', label: 'JURASSIC'   },
  { name: 'Cretaceous', range: '145 – 66 Million Years Ago',  label: 'CRETACEOUS' },
];

// Pollinations.ai free AI image generation — no API key needed.
// Seed=42 is widely cached; 800×450 generates fast (~3-5s on first load).
const HERO_URL =
  'https://image.pollinations.ai/prompt/' +
  'prehistoric%20dinosaurs%20T-Rex%20Triceratops%20Velociraptor%20Spinosaurus%20Pteranodon' +
  '%20Brachiosaurus%20dense%20jungle%20volcanic%20mountains%20dramatic%20sky%20wide%20shot' +
  '?width=800&height=450&seed=42&nologo=true';

export function LandingPage() {
  const navigate = useNavigate();

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
      {/*
        AI-generated prehistoric scene — T-Rex, Triceratops, Velociraptor,
        Spinosaurus, Pteranodon, Brachiosaurus in a volcanic jungle.
        Shows as soon as the browser finishes downloading it; the rich
        gradient background is visible instantly while it loads.
      */}
      <img src={HERO_URL} className={styles.bgImg} alt="" aria-hidden />

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
                className={styles.navItem}
                onClick={() => handlePeriod(name)}
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
