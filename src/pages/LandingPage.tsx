import { useNavigate, Link } from 'react-router-dom';
import { useMemo, useState, useEffect } from 'react';
import { dinosaurs } from '../data/dinosaurs';
import type { Period } from '../data/dinosaurs';
import { useSpeech } from '../hooks/useSpeech';
import styles from './LandingPage.module.css';

const PERIODS: { name: Period; range: string; label: string }[] = [
  { name: 'Triassic',   range: '252 – 201 Million Years Ago', label: 'TRIASSIC'   },
  { name: 'Jurassic',   range: '201 – 145 Million Years Ago', label: 'JURASSIC'   },
  { name: 'Cretaceous', range: '145 – 66 Million Years Ago',  label: 'CRETACEOUS' },
];

const HERO_PRIMARY = '/landing_page.png';

// Fallback: colorful Hell Creek scene by ABelov2014 (CC BY 3.0, Wikimedia Commons)
const HERO_FALLBACK =
  'https://upload.wikimedia.org/wikipedia/commons/4/41/' +
  'Dakotaraptor%2C_Edmontosaurus%2C_Pachycephalosaurus_and_Tyrannosaurus.jpg';

export function LandingPage() {
  const navigate = useNavigate();
  const [src, setSrc] = useState(HERO_PRIMARY);
  const [loaded, setLoaded] = useState(false);
  const speech = useSpeech();

  useEffect(() => {
    // Reset first-dino instructions so kids get them again each time they return to the menu.
    sessionStorage.removeItem('dinoInstructionsPlayed');

    // Browsers block speech without a prior user gesture. We fire on the first tap/click,
    // which on a tablet happens the moment the child touches anything on the screen.
    let spoken = false;
    const onFirstInteraction = () => {
      if (spoken) return;
      spoken = true;
      speech.speak(
        'Welcome to Dinosaurs Land! Choose a time period to discover amazing dinosaurs. ' +
        'Select Triassic, Jurassic, or Cretaceous to begin your adventure!'
      );
      document.removeEventListener('pointerdown', onFirstInteraction);
    };
    document.addEventListener('pointerdown', onFirstInteraction);
    return () => {
      document.removeEventListener('pointerdown', onFirstInteraction);
      speech.stop();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
      {/* Hero: many dinosaur species with volcano background */}
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
        <Link to="/" className={styles.backLink} onClick={() => speech.stop()}>
          ← Cool Creatures We Love
        </Link>
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
