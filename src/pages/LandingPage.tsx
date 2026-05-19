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

// Pollinations.ai free AI image: T-Rex, Triceratops, Velociraptor, Spinosaurus,
// Pteranodon, Brachiosaurus together in a prehistoric jungle with volcanoes.
const AI_HERO_URL =
  'https://image.pollinations.ai/prompt/cinematic+prehistoric+landscape+tyrannosaurus+rex+roaring+triceratops+velociraptor+pack+spinosaurus+pteranodon+flying+brachiosaurus+lush+jungle+ferns+volcanic+mountains+erupting+dramatic+storm+sky+lightning+highly+detailed+paleoart+illustration+wide+landscape+16x9?width=1920&height=1080&seed=7842&nologo=true&model=flux';

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
      {/* AI-generated multi-dinosaur background image */}
      <img
        src={AI_HERO_URL}
        className={`${styles.bgImg} ${imgLoaded ? styles.bgImgLoaded : ''}`}
        onLoad={() => setImgLoaded(true)}
        alt=""
        aria-hidden
      />

      {/* Gradient overlay */}
      <div className={styles.overlay} />

      {/* Content */}
      <div className={styles.content}>
        {/* Brand / title */}
        <div className={styles.brand}>
          <p className={styles.eyebrow}>Explore the prehistoric world</p>
          <h1 className={styles.title}>Dinosaurs Land</h1>
          <p className={styles.tagline}>
            186 million years of Earth&apos;s most magnificent creatures
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
