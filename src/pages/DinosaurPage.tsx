import { useParams, Link, useNavigate, useSearchParams, Navigate } from 'react-router-dom';
import { useMemo, useEffect, useState } from 'react';
import { dinosaurs, periodColors } from '../data/dinosaurs';
import type { Period, Dinosaur } from '../data/dinosaurs';
import { quizData } from '../data/quizData';
import { useSpeech } from '../hooks/useSpeech';
import { WordHighlighter } from '../components/WordHighlighter';
import { QuizSection } from '../components/QuizSection';
import { DinoImage } from '../components/DinoImage';
import styles from './DinosaurPage.module.css';

const DIET_EMOJI: Record<string, string> = {
  Carnivore: '🥩', Herbivore: '🌿', Omnivore: '🌾', Piscivore: '🐟',
};

const DIET_SPOKEN: Record<string, string> = {
  Carnivore: 'meat-eating', Herbivore: 'plant-eating',
  Omnivore: 'omnivore', Piscivore: 'fish-eating',
};

function statsNarration(d: Dinosaur): string {
  const loc = d.location.replace(/\s*\([^)]*\)/g, '').replace(/\s{2,}/g, ' ').trim();
  const len = d.length.replace(/~/g, 'about ').replace(/\bm\b/g, 'meters');
  const wt  = d.weight.replace(/~/g, 'about ').replace(/\bkg\b/g, 'kilograms');
  return `${d.name} was a ${DIET_SPOKEN[d.diet] ?? d.diet.toLowerCase()} dinosaur. ` +
    `It was ${len} long and weighed ${wt}. ` +
    `It was found in ${loc}.`;
}

export function DinosaurPage() {
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const periodParam = searchParams.get('period') as Period | null;
  const dinosaur = useMemo(() => dinosaurs.find(d => d.id === id), [id]);
  const speech = useSpeech();
  const [speakingTarget, setSpeakingTarget] = useState<'desc' | number | null>(null);

  const periodList = useMemo(() => {
    const list = periodParam
      ? dinosaurs.filter(d => d.period === periodParam)
      : dinosaurs;
    return [...list].sort((a, b) => a.name.localeCompare(b.name));
  }, [periodParam]);

  const currentIdx = useMemo(
    () => periodList.findIndex(d => d.id === id),
    [periodList, id]
  );

  const prev = currentIdx > 0 ? periodList[currentIdx - 1] : null;
  const next = currentIdx < periodList.length - 1 ? periodList[currentIdx + 1] : null;

  const navTo = (dinoId: string) =>
    `/dinosaur/${dinoId}${periodParam ? `?period=${periodParam}` : ''}`;

  useEffect(() => {
    speech.stop();
    setSpeakingTarget(null);
    window.scrollTo({ top: 0 });

    if (!dinosaur) return;

    const alreadyPlayed = sessionStorage.getItem('dinoInstructionsPlayed');
    const stats = statsNarration(dinosaur);
    const message = alreadyPlayed
      ? `Meet ${dinosaur.name}! ${stats}`
      : `Meet ${dinosaur.name}! ${stats} ` +
        `Press the play button to hear all about this dinosaur, ` +
        `and tap any fun fact to hear it out loud. ` +
        `Use the arrows at the bottom to explore more dinosaurs!`;

    const timer = setTimeout(() => {
      if (!alreadyPlayed) sessionStorage.setItem('dinoInstructionsPlayed', 'true');
      speech.speak(message);
    }, 500);
    return () => clearTimeout(timer);
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!dinosaur) return <Navigate to="/" replace />;

  const questions = quizData[dinosaur.id] ?? [];
  const periodColor = periodColors[dinosaur.period];

  const handleDescPlay = () => {
    if (speech.isPaused && speakingTarget === 'desc') {
      speech.resume();
    } else {
      setSpeakingTarget('desc');
      speech.speak(dinosaur.description);
    }
  };

  const handleFactPlay = (i: number, text: string) => {
    if (speakingTarget === i && speech.isPlaying) {
      speech.stop(); setSpeakingTarget(null); return;
    }
    setSpeakingTarget(i);
    speech.speak(text);
  };

  const handleStop = () => { speech.stop(); setSpeakingTarget(null); };

  const isDescSpeaking = speakingTarget === 'desc' && (speech.isPlaying || speech.isPaused);

  return (
    <div className={styles.page}>
      {/* Top bar */}
      <header className={styles.topBar}>
        <Link to="/" className={styles.logoLink} onClick={handleStop}>
          <span className={styles.logoText}>Dinosaurs Land</span>
        </Link>
        {periodParam && (
          <span className={styles.periodCrumb} style={{ color: periodColor }}>
            {periodParam}
          </span>
        )}
        <span className={styles.dinoCount}>
          {currentIdx + 1} / {periodList.length}
        </span>
      </header>

      {/* Two-column body */}
      <div className={styles.layout}>
        {/* Quiz sidebar */}
        <aside className={styles.quizCol}>
          {questions.length > 0 ? (
            <QuizSection key={dinosaur.id} questions={questions} accentColor={periodColor} speech={speech} />
          ) : (
            <p className={styles.noQuiz}>No quiz for this dinosaur yet.</p>
          )}
        </aside>

        {/* Main content */}
        <main className={styles.mainCol}>
          {/* Hero image — tall, shows full dinosaur */}
          <div className={styles.imageWrap} style={{ borderBottomColor: periodColor }}>
            <DinoImage
              dinoName={dinosaur.name}
              accentColor={periodColor}
              imageUrl={dinosaur.imageUrl}
              variant="hero"
            />
            <div className={styles.imageOverlay}>
              <span
                className={styles.periodPill}
                style={{ backgroundColor: periodColor + 'cc' }}
              >
                {dinosaur.period} · {dinosaur.periodRange}
              </span>
              <h1 className={styles.dinoName}>{dinosaur.name}</h1>
            </div>
          </div>

          {/* Stats strip */}
          <div className={styles.statsRow}>
            {[
              { label: 'Diet',     value: `${DIET_EMOJI[dinosaur.diet]} ${dinosaur.diet}` },
              { label: 'Length',   value: `📏 ${dinosaur.length}` },
              { label: 'Weight',   value: `⚖️ ${dinosaur.weight}` },
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
            <div className={styles.descBox} style={{ borderColor: periodColor + '2a' }}>
              <WordHighlighter
                text={dinosaur.description}
                wordPositions={speakingTarget === 'desc' ? speech.wordPositions : []}
                currentWordIndex={speakingTarget === 'desc' ? speech.currentWordIndex : -1}
                isActive={isDescSpeaking}
              />
            </div>
            {speech.supported && (
              <div className={styles.ttsRow}>
                <button
                  className={styles.listenBtn}
                  style={{ '--accent': periodColor } as React.CSSProperties}
                  onClick={handleDescPlay}
                  disabled={speech.isPlaying && speakingTarget === 'desc'}
                  aria-label={
                    speech.isPlaying && speakingTarget === 'desc' ? 'Speaking' :
                    speech.isPaused && speakingTarget === 'desc' ? 'Resume' : 'Listen'
                  }
                >
                  <span className={styles.listenDino}>🦕</span>
                  {speech.isPlaying && speakingTarget === 'desc' ? (
                    <SoundBars />
                  ) : (
                    <span className={styles.listenPlay}>▶</span>
                  )}
                </button>
                {speech.isPlaying && speakingTarget === 'desc' && (
                  <button className={styles.ctrlBtn} onClick={speech.pause}>⏸</button>
                )}
                {(speech.isPlaying || speech.isPaused) && (
                  <button className={styles.ctrlBtn} onClick={handleStop}>⏹</button>
                )}
                {isDescSpeaking && speech.wordPositions.length > 0 && (
                  <div className={styles.progress}>
                    <div className={styles.progressFill} style={{
                      backgroundColor: periodColor,
                      width: `${((speech.currentWordIndex + 1) / speech.wordPositions.length) * 100}%`,
                    }} />
                  </div>
                )}
              </div>
            )}
          </section>

          {/* Fun facts */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Fun Facts</h2>
            <p className={styles.factHint}>Tap any fact to hear it</p>
            <ul className={styles.facts}>
              {dinosaur.funFacts.map((fact, i) => {
                const active = speakingTarget === i && speech.isPlaying;
                return (
                  <li
                    key={i}
                    className={`${styles.fact} ${active ? styles.factActive : ''}`}
                    style={{ borderLeftColor: periodColor }}
                    onClick={() => handleFactPlay(i, fact)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={e => e.key === 'Enter' && handleFactPlay(i, fact)}
                  >
                    <span className={styles.factNum} style={{ color: periodColor }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className={styles.factText}>{fact}</span>
                    <span className={styles.factIcon}>{active ? '⏹' : '🔊'}</span>
                  </li>
                );
              })}
            </ul>
          </section>

          {/* Bottom prev / next */}
          <nav className={styles.bottomNav}>
            {prev ? (
              <button
                className={styles.bottomNavItem}
                onClick={() => { handleStop(); navigate(navTo(prev.id)); }}
              >
                <span className={styles.bottomNavDir}>← Previous</span>
                <span className={styles.bottomNavName}>{prev.name}</span>
              </button>
            ) : (
              <span />
            )}
            <Link to="/" className={styles.bottomNavHome} onClick={handleStop}>
              <span className={styles.bottomNavHomeLabel}>Dinosaurs Land</span>
            </Link>
            {next ? (
              <button
                className={`${styles.bottomNavItem} ${styles.bottomNavItemRight}`}
                onClick={() => { handleStop(); navigate(navTo(next.id)); }}
              >
                <span className={styles.bottomNavDir}>Next →</span>
                <span className={styles.bottomNavName}>{next.name}</span>
              </button>
            ) : (
              <span />
            )}
          </nav>
        </main>
      </div>
    </div>
  );
}

function SoundBars() {
  return (
    <span className={styles.bars}>
      <span /><span /><span /><span />
    </span>
  );
}
