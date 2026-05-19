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

// Charles R. Knight's iconic 1927 painting "Tyrannosaurus Rex and Triceratops"
// from the American Museum of Natural History — public domain, Wikimedia Commons.
// Secondary: his "Triceratops and Tyrannosaurus" mural (same scene, different scan).
const HERO_PRIMARY =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/' +
  'Tyrannosaurus_Rex_and_Triceratops%2C_painting_by_Charles_R_Knight.jpg/' +
  '1920px-Tyrannosaurus_Rex_and_Triceratops%2C_painting_by_Charles_R_Knight.jpg';

const HERO_FALLBACK =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/' +
  'Triceratops_and_Tyrannosaurus_by_Knight.jpg/' +
  '1920px-Triceratops_and_Tyrannosaurus_by_Knight.jpg';

export function LandingPage() {
  const navigate = useNavigate();
  const [src, setSrc] = useState(HERO_PRIMARY);
  const [loaded, setLoaded] = useState(false);

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
      {/* Tyrannosaurus Rex & Triceratops — Charles R. Knight, 1927 */}
      <img
        src={src}
        className={`${styles.bgImg} ${loaded ? styles.bgImgLoaded : ''}`}
        onLoad={() => setLoaded(true)}
        onError={() => { if (src === HERO_PRIMARY) setSrc(HERO_FALLBACK); }}
        alt=""
        aria-hidden
      />

      <div className={styles.overlay} />

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
              <button className={styles.navItem} onClick={() => handlePeriod(name)}>
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
