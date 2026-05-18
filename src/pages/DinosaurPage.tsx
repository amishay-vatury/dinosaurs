import { useParams, Link, Navigate } from 'react-router-dom';
import { useMemo, useEffect, useState } from 'react';
import { dinosaurs, periodColors } from '../data/dinosaurs';
import { quizData } from '../data/quizData';
import { useSpeech } from '../hooks/useSpeech';
import { WordHighlighter } from '../components/WordHighlighter';
import { QuizSection } from '../components/QuizSection';
import { DinoImage } from '../components/DinoImage';
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
  const [activeFact, setActiveFact] = useState<number | null>(null);
  const [speakingTarget, setSpeakingTarget] = useState<'desc' | number | null>(null);

  useEffect(() => {
    speech.stop();
    setActiveFact(null);
    setSpeakingTarget(null);
    window.scrollTo(0, 0);
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!dinosaur) return <Navigate to="/" replace />;

  const questions = quizData[dinosaur.id] ?? [];
  const periodColor = periodColors[dinosaur.period];
  const currentIdx = dinosaurs.findIndex((d) => d.id === id);
  const prev = currentIdx > 0 ? dinosaurs[currentIdx - 1] : null;
  const next = currentIdx < dinosaurs.length - 1 ? dinosaurs[currentIdx + 1] : null;

  const handleDescPlay = () => {
    if (speech.isPaused && speakingTarget === 'desc') {
      speech.resume();
    } else {
      setSpeakingTarget('desc');
      setActiveFact(null);
      speech.speak(dinosaur.description);
    }
  };

  const handleFactPlay = (i: number, text: string) => {
    if (speakingTarget === i && speech.isPlaying) {
      speech.stop();
      setSpeakingTarget(null);
      setActiveFact(null);
      return;
    }
    setSpeakingTarget(i);
    setActiveFact(i);
    speech.speak(text);
  };

  const handleStop = () => {
    speech.stop();
    setSpeakingTarget(null);
    setActiveFact(null);
  };

  const isDescPlaying = speakingTarget === 'desc' && (speech.isPlaying || speech.isPaused);
  const isDescActive = speakingTarget === 'desc' && (speech.isPlaying || speech.isPaused);

  return (
    <div className={styles.page}>
      {/* Top nav */}
      <nav className={styles.topNav}>
        <Link to="/" className={styles.backBtn} onClick={handleStop}>
          ← Back to Dinosaurs Land
        </Link>
        <div className={styles.arrows}>
          {prev ? (
            <Link to={`/dinosaur/${prev.id}`} className={styles.arrow} onClick={handleStop}>
              ← {prev.name}
            </Link>
          ) : <span />}
          {next ? (
            <Link to={`/dinosaur/${next.id}`} className={styles.arrow} onClick={handleStop}>
              {next.name} →
            </Link>
          ) : <span />}
        </div>
      </nav>

      {/* Two-column layout */}
      <div className={styles.layout}>
        {/* ── Left: Quiz ── */}
        <aside className={styles.quizCol}>
          {questions.length > 0 ? (
            <QuizSection questions={questions} accentColor={periodColor} />
          ) : (
            <div className={styles.noQuiz}>No quiz available for this dinosaur.</div>
          )}
        </aside>

        {/* ── Right: Main content ── */}
        <main className={styles.mainCol}>
          {/* Hero image */}
          <div className={styles.imageWrap} style={{ borderBottomColor: periodColor }}>
            <DinoImage
              dinoId={dinosaur.id}
              dinoName={dinosaur.name}
              accentColor={periodColor}
              variant="hero"
            />
            <div className={styles.imageOverlay}>
              <span className={styles.periodPill} style={{ backgroundColor: periodColor }}>
                {dinosaur.period} · {dinosaur.periodRange}
              </span>
              <h1 className={styles.dinoName} style={{ color: '#fff' }}>
                {dinosaur.name}
              </h1>
            </div>
          </div>

          {/* Stats */}
          <div className={styles.statsRow}>
            {[
              { label: 'Diet', value: `${DIET_EMOJI[dinosaur.diet]} ${dinosaur.diet}` },
              { label: 'Length', value: `📏 ${dinosaur.length}` },
              { label: 'Weight', value: `⚖️ ${dinosaur.weight}` },
              { label: 'Found in', value: `📍 ${dinosaur.location}` },
            ].map(({ label, value }) => (
              <div key={label} className={styles.stat}>
                <span className={styles.statLabel}>{label}</span>
                <span className={styles.statValue}>{value}</span>
              </div>
            ))}
          </div>

          {/* Description */}
          <section className={styles.section}>
            <div className={styles.sectionHead}>
              <h2 className={styles.sectionTitle}>Description</h2>
            </div>
            <div className={styles.descBox} style={{ borderColor: periodColor + '33' }}>
              <WordHighlighter
                text={dinosaur.description}
                wordPositions={speakingTarget === 'desc' ? speech.wordPositions : []}
                currentWordIndex={speakingTarget === 'desc' ? speech.currentWordIndex : -1}
                isActive={isDescActive}
              />
            </div>

            {speech.supported && (
              <div className={styles.ttsRow}>
                <button
                  className={styles.listenBtn}
                  style={{ '--accent': periodColor } as React.CSSProperties}
                  onClick={handleDescPlay}
                  disabled={isDescPlaying && !speech.isPaused}
                >
                  {speech.isPlaying && speakingTarget === 'desc' ? (
                    <>▶ Playing… <SoundBars /></>
                  ) : speech.isPaused && speakingTarget === 'desc' ? (
                    '▶ Resume'
                  ) : (
                    '▶ Listen'
                  )}
                </button>
                {speech.isPlaying && speakingTarget === 'desc' && (
                  <button className={styles.ctrlBtn} onClick={speech.pause}>⏸ Pause</button>
                )}
                {(speech.isPlaying || speech.isPaused) && (
                  <button className={styles.ctrlBtn} onClick={handleStop}>⏹ Stop</button>
                )}
                {isDescPlaying && (
                  <div className={styles.progress}>
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
            <p className={styles.factHint}>Click a fact to hear it read aloud</p>
            <ul className={styles.facts}>
              {dinosaur.funFacts.map((fact, i) => {
                const isThisPlaying = activeFact === i && speech.isPlaying;
                return (
                  <li
                    key={i}
                    className={`${styles.fact} ${activeFact === i ? styles.factActive : ''}`}
                    style={{ borderLeftColor: periodColor }}
                    onClick={() => handleFactPlay(i, fact)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && handleFactPlay(i, fact)}
                    aria-label={`Fact ${i + 1}: ${fact}. Click to hear.`}
                  >
                    <span className={styles.factNum} style={{ color: periodColor }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className={styles.factText}>{fact}</span>
                    <button
                      className={`${styles.factPlayBtn} ${isThisPlaying ? styles.factPlayBtnActive : ''}`}
                      style={{ color: periodColor }}
                      aria-label={isThisPlaying ? 'Stop' : 'Play'}
                      onClick={(e) => { e.stopPropagation(); handleFactPlay(i, fact); }}
                    >
                      {isThisPlaying ? '⏹' : '🔊'}
                    </button>
                  </li>
                );
              })}
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}

function SoundBars() {
  return (
    <span className={styles.soundBars}>
      <span /><span /><span /><span />
    </span>
  );
}
