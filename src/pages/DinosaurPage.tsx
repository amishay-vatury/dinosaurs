import { useParams, Link, Navigate } from 'react-router-dom';
import { useMemo, useEffect } from 'react';
import { dinosaurs, periodColors } from '../data/dinosaurs';
import { useSpeech } from '../hooks/useSpeech';
import { WordHighlighter } from '../components/WordHighlighter';
import styles from './DinosaurPage.module.css';

const DIET_EMOJI: Record<string, string> = {
  Carnivore: '🥩',
  Herbivore: '🌿',
  Omnivore: '🌾',
  Piscivore: '🐟',
};

export function DinosaurPage() {
  const { id } = useParams<{ id: string }>();
  const dinosaur = useMemo(() => dinosaurs.find((d) => d.id === id), [id]);
  const speech = useSpeech();

  // Stop speech when navigating away
  useEffect(() => {
    return () => speech.stop();
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!dinosaur) return <Navigate to="/" replace />;

  const periodColor = periodColors[dinosaur.period];
  const currentIndex = dinosaurs.findIndex((d) => d.id === id);
  const prevDino = currentIndex > 0 ? dinosaurs[currentIndex - 1] : null;
  const nextDino = currentIndex < dinosaurs.length - 1 ? dinosaurs[currentIndex + 1] : null;

  const handlePlay = () => {
    if (speech.isPaused) {
      speech.resume();
    } else {
      speech.speak(dinosaur.description);
    }
  };

  const isActive = speech.isPlaying || speech.isPaused;

  return (
    <div className={styles.page}>
      {/* Back nav */}
      <nav className={styles.topNav}>
        <Link to="/" className={styles.backBtn} onClick={speech.stop}>
          ← All Dinosaurs
        </Link>
        <div className={styles.navArrows}>
          {prevDino ? (
            <Link to={`/dinosaur/${prevDino.id}`} className={styles.navArrow} onClick={speech.stop}>
              ← {prevDino.name}
            </Link>
          ) : <span />}
          {nextDino ? (
            <Link to={`/dinosaur/${nextDino.id}`} className={styles.navArrow} onClick={speech.stop}>
              {nextDino.name} →
            </Link>
          ) : <span />}
        </div>
      </nav>

      {/* Hero */}
      <div className={styles.hero} style={{ borderBottomColor: periodColor }}>
        <div className={styles.heroContent}>
          <div
            className={styles.periodPill}
            style={{ backgroundColor: periodColor }}
          >
            {dinosaur.period} · {dinosaur.periodRange}
          </div>
          <h1 className={styles.name} style={{ color: periodColor }}>
            {dinosaur.name}
          </h1>
          <div className={styles.statsRow}>
            <div className={styles.stat}>
              <span className={styles.statLabel}>Diet</span>
              <span className={styles.statValue}>
                {DIET_EMOJI[dinosaur.diet]} {dinosaur.diet}
              </span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statLabel}>Length</span>
              <span className={styles.statValue}>📏 {dinosaur.length}</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statLabel}>Weight</span>
              <span className={styles.statValue}>⚖️ {dinosaur.weight}</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statLabel}>Found in</span>
              <span className={styles.statValue}>📍 {dinosaur.location}</span>
            </div>
          </div>
        </div>
        <div className={styles.heroArt} style={{ borderColor: periodColor }}>
          <span className={styles.heroInitial} style={{ color: periodColor }}>
            {dinosaur.name.charAt(0)}
          </span>
          <svg viewBox="0 0 160 120" className={styles.heroSvg} aria-hidden>
            <path
              d="M20 100 Q30 60 50 56 Q60 40 70 44 Q80 30 100 36 Q120 32 130 44 Q140 40 144 56 Q150 70 140 84 Q130 96 110 100 Q80 104 50 100 Z"
              fill={periodColor}
              opacity="0.12"
            />
            <circle cx="124" cy="44" r="14" fill={periodColor} opacity="0.18" />
            <path
              d="M110 36 Q116 24 130 28 Q136 32 132 40"
              fill="none"
              stroke={periodColor}
              strokeWidth="3"
              opacity="0.28"
            />
          </svg>
        </div>
      </div>

      {/* Main content */}
      <div className={styles.content}>
        {/* Description + TTS */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Description</h2>
            {!speech.supported && (
              <span className={styles.unsupportedNote}>
                ⚠️ Voice not supported in this browser
              </span>
            )}
          </div>

          <div className={styles.descriptionBox} style={{ borderColor: periodColor + '44' }}>
            <WordHighlighter
              text={dinosaur.description}
              wordPositions={speech.wordPositions}
              currentWordIndex={speech.currentWordIndex}
              isActive={isActive}
            />
          </div>

          {/* Voice controls */}
          {speech.supported && (
            <div className={styles.voiceControls}>
              <button
                className={`${styles.playBtn} ${speech.isPlaying ? styles.playBtnActive : ''}`}
                style={{ '--accent': periodColor } as React.CSSProperties}
                onClick={handlePlay}
                disabled={speech.isPlaying}
                aria-label={speech.isPaused ? 'Resume narration' : 'Play narration'}
              >
                {speech.isPlaying ? (
                  <>
                    <span className={styles.playIcon}>▶</span>
                    <span className={styles.playLabel}>Playing…</span>
                    <span className={styles.soundBars}>
                      <span /><span /><span /><span />
                    </span>
                  </>
                ) : speech.isPaused ? (
                  <>
                    <span className={styles.playIcon}>▶</span>
                    <span className={styles.playLabel}>Resume</span>
                  </>
                ) : (
                  <>
                    <span className={styles.playIcon}>▶</span>
                    <span className={styles.playLabel}>Listen</span>
                  </>
                )}
              </button>

              {speech.isPlaying && (
                <button
                  className={styles.controlBtn}
                  onClick={speech.pause}
                  aria-label="Pause narration"
                >
                  ⏸ Pause
                </button>
              )}

              {isActive && (
                <button
                  className={styles.controlBtn}
                  onClick={speech.stop}
                  aria-label="Stop narration"
                >
                  ⏹ Stop
                </button>
              )}

              {isActive && (
                <div className={styles.progressIndicator}>
                  <div
                    className={styles.progressBar}
                    style={{
                      backgroundColor: periodColor,
                      width: speech.wordPositions.length > 0
                        ? `${((speech.currentWordIndex + 1) / speech.wordPositions.length) * 100}%`
                        : '0%',
                    }}
                  />
                </div>
              )}
            </div>
          )}
        </section>

        {/* Fun Facts */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Fun Facts</h2>
          <ul className={styles.factsList}>
            {dinosaur.funFacts.map((fact, i) => (
              <li key={i} className={styles.factItem} style={{ borderLeftColor: periodColor }}>
                <span className={styles.factNum} style={{ color: periodColor }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className={styles.factText}>{fact}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
