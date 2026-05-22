import { useParams, Link, useNavigate, Navigate } from 'react-router-dom';
import { useMemo, useEffect, useState } from 'react';
import { animals, animalsByCategory, categoryColors, categoryInfo } from '../data/animalsData';
import type { AnimalCategory, Animal } from '../data/animalsData';
import { animalQuizData } from '../data/animalQuizData';
import { useSpeech } from '../hooks/useSpeech';
import { WordHighlighter } from '../components/WordHighlighter';
import { QuizSection } from '../components/QuizSection';
import { AnimalImage } from '../components/AnimalImage';
import styles from './AnimalDetailPage.module.css';

const DIET_EMOJI: Record<string, string> = {
  Carnivore: '🥩',
  Herbivore: '🌿',
  Omnivore:  '🌾',
  'Carnivore (krill)': '🦐',
  'Carnivore (jellyfish)': '🪼',
  'Carnivore (mainly other snakes)': '🐍',
  'Carnivore (insects)': '🦟',
  'Herbivore (nectar & milkweed)': '🌸',
  'Herbivore (algae)': '🌿',
  'Herbivore (nectar & pollen)': '🌼',
  'Omnivore (nectar & insects)': '🌸',
  'Omnivore (fruit, insects, eggs)': '🍓',
  'Carnivore / Omnivore': '🥩',
  'Carnivore (plankton filter feeder)': '🌊',
};

const DIET_SPOKEN: Record<string, string> = {
  Carnivore: 'meat-eating',
  Herbivore: 'plant-eating',
  Omnivore:  'omnivore',
};

function getDietSpoken(diet: string): string {
  return DIET_SPOKEN[diet] ?? diet.toLowerCase();
}

function getDietEmoji(diet: string): string {
  return DIET_EMOJI[diet] ?? (diet.toLowerCase().includes('carnivore') ? '🥩' : diet.toLowerCase().includes('herbivore') ? '🌿' : '🌾');
}

function statsNarration(a: Animal): string {
  const loc = a.location.replace(/\s*\([^)]*\)/g, '').replace(/\s{2,}/g, ' ').trim();
  return `${a.name} is a ${getDietSpoken(a.diet)} ${categoryInfo[a.category].name.toLowerCase().replace(/s$/, '')}. ` +
    `Its size is ${a.size} and it weighs ${a.weight}. ` +
    `It lives in ${loc}.`;
}

export function AnimalDetailPage() {
  const { category, id } = useParams<{ category: string; id: string }>();
  const navigate = useNavigate();

  const cat = category as AnimalCategory | undefined;
  const animal = useMemo(() => animals.find(a => a.id === id && a.category === cat), [id, cat]);
  const speech = useSpeech();
  const [speakingTarget, setSpeakingTarget] = useState<'desc' | number | null>(null);

  const categoryList = useMemo(() => {
    if (!cat) return [];
    return animalsByCategory[cat] ?? [];
  }, [cat]);

  const currentIdx = useMemo(
    () => categoryList.findIndex(a => a.id === id),
    [categoryList, id]
  );

  const prev = currentIdx > 0 ? categoryList[currentIdx - 1] : null;
  const next = currentIdx < categoryList.length - 1 ? categoryList[currentIdx + 1] : null;

  const navTo = (animalId: string) => `/animals/${cat}/${animalId}`;

  useEffect(() => {
    speech.stop();
    setSpeakingTarget(null);
    window.scrollTo({ top: 0 });

    if (!animal) return;

    const alreadyPlayed = sessionStorage.getItem('animalInstructionsPlayed');
    const stats = statsNarration(animal);
    const catName = categoryInfo[animal.category]?.name ?? 'animals';
    const message = alreadyPlayed
      ? `Meet ${animal.name}! ${stats}`
      : `Meet ${animal.name}! ${stats} ` +
        `Press the play button to hear all about this animal, ` +
        `and tap any fun fact to hear it out loud. ` +
        `Use the arrows at the bottom to explore more ${catName}!`;

    const timer = setTimeout(() => {
      if (!alreadyPlayed) sessionStorage.setItem('animalInstructionsPlayed', 'true');
      speech.speak(message);
    }, 500);
    return () => clearTimeout(timer);
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!animal || !cat) return <Navigate to="/" replace />;

  const questions = animalQuizData[animal.id] ?? [];
  const accentColor = categoryColors[animal.category];
  const catInfo = categoryInfo[animal.category];

  const handleDescPlay = () => {
    if (speech.isPaused && speakingTarget === 'desc') {
      speech.resume();
    } else {
      setSpeakingTarget('desc');
      speech.speak(animal.description);
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
          <span className={styles.logoText}>Cool Creatures We Love</span>
        </Link>
        <span className={styles.categoryCrumb} style={{ color: accentColor }}>
          {catInfo.emoji} {catInfo.name}
        </span>
        <span className={styles.animalCount}>
          {currentIdx + 1} / {categoryList.length}
        </span>
      </header>

      {/* Two-column body */}
      <div className={styles.layout}>
        {/* Quiz sidebar */}
        <aside className={styles.quizCol}>
          {questions.length > 0 ? (
            <QuizSection
              key={animal.id}
              questions={questions}
              accentColor={accentColor}
              speech={speech}
              completionMessage={`🎉 Perfect score! You really know your ${catInfo.name.toLowerCase()}!`}
            />
          ) : (
            <p className={styles.noQuiz}>No quiz for this animal yet.</p>
          )}
        </aside>

        {/* Main content */}
        <main className={styles.mainCol}>
          {/* Hero image */}
          <div className={styles.imageWrap} style={{ borderBottomColor: accentColor }}>
            <AnimalImage
              animalName={animal.name}
              wikiTitle={animal.wikiTitle}
              accentColor={accentColor}
              variant="hero"
            />
            <div className={styles.imageOverlay}>
              <span
                className={styles.categoryPill}
                style={{ backgroundColor: accentColor + 'cc' }}
              >
                {catInfo.emoji} {catInfo.name}
              </span>
              <h1 className={styles.animalName}>{animal.name}</h1>
            </div>
          </div>

          {/* Stats strip */}
          <div className={styles.statsRow}>
            {[
              { label: 'Diet',    value: `${getDietEmoji(animal.diet)} ${animal.diet}` },
              { label: 'Size',    value: `📏 ${animal.size}` },
              { label: 'Weight',  value: `⚖️ ${animal.weight}` },
              { label: 'Habitat', value: `📍 ${animal.location}` },
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
            <div className={styles.descBox} style={{ borderColor: accentColor + '2a' }}>
              <WordHighlighter
                text={animal.description}
                wordPositions={speakingTarget === 'desc' ? speech.wordPositions : []}
                currentWordIndex={speakingTarget === 'desc' ? speech.currentWordIndex : -1}
                isActive={isDescSpeaking}
              />
            </div>
            {speech.supported && (
              <div className={styles.ttsRow}>
                <button
                  className={styles.listenBtn}
                  style={{ '--accent': accentColor } as React.CSSProperties}
                  onClick={handleDescPlay}
                  disabled={speech.isPlaying && speakingTarget === 'desc'}
                  aria-label={
                    speech.isPlaying && speakingTarget === 'desc' ? 'Speaking' :
                    speech.isPaused && speakingTarget === 'desc' ? 'Resume' : 'Listen'
                  }
                >
                  <span className={styles.listenIcon}>{catInfo.emoji}</span>
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
                      backgroundColor: accentColor,
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
              {animal.funFacts.map((fact, i) => {
                const active = speakingTarget === i && speech.isPlaying;
                return (
                  <li
                    key={i}
                    className={`${styles.fact} ${active ? styles.factActive : ''}`}
                    style={{ borderLeftColor: accentColor }}
                    onClick={() => handleFactPlay(i, fact)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={e => e.key === 'Enter' && handleFactPlay(i, fact)}
                  >
                    <span className={styles.factNum} style={{ color: accentColor }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className={styles.factText}>{fact}</span>
                    <span className={styles.factIcon}>{active ? '⏹' : '🔊'}</span>
                  </li>
                );
              })}
            </ul>
          </section>

          {/* Bottom prev / next — sticky so always at bottom */}
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
              <span className={styles.bottomNavHomeLabel}>Cool Creatures</span>
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
