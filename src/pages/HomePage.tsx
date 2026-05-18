import { useState, useMemo } from 'react';
import { dinosaurs, periods, periodColors, periodDescriptions } from '../data/dinosaurs';
import type { Period, Dinosaur } from '../data/dinosaurs';
import { DinosaurCard } from '../components/DinosaurCard';
import { HeroScene } from '../components/HeroScene';
import styles from './HomePage.module.css';

type FilterPeriod = Period | 'All';

export function HomePage() {
  const [activePeriod, setActivePeriod] = useState<FilterPeriod>('All');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    let list: Dinosaur[] = [...dinosaurs];
    if (activePeriod !== 'All') list = list.filter((d) => d.period === activePeriod);
    if (search) list = list.filter((d) => d.name.toLowerCase().includes(search.toLowerCase()));
    return list.sort((a, b) => a.name.localeCompare(b.name));
  }, [activePeriod, search]);

  const counts = useMemo(() => {
    const c: Record<Period, number> = { Triassic: 0, Jurassic: 0, Cretaceous: 0 };
    dinosaurs.forEach((d) => c[d.period]++);
    return c;
  }, []);

  return (
    <div className={styles.page}>
      {/* ── Hero ── */}
      <div className={styles.hero}>
        <div className={styles.heroArt}>
          <HeroScene />
        </div>
        <div className={styles.heroOverlay}>
          <h1 className={styles.heroTitle}>Dinosaurs Land</h1>
          <p className={styles.heroSub}>
            Journey through {dinosaurs.length} creatures across 186&nbsp;million years of prehistoric Earth
          </p>
        </div>
      </div>

      {/* ── Search ── */}
      <div className={styles.searchBar}>
        <input
          type="search"
          placeholder="🔍  Search dinosaurs…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.searchInput}
        />
      </div>

      {/* ── Body: sidebar + grid ── */}
      <div className={styles.body}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <p className={styles.sidebarLabel}>Periods</p>

          <button
            className={`${styles.periodBtn} ${activePeriod === 'All' ? styles.periodBtnActive : ''}`}
            onClick={() => setActivePeriod('All')}
            style={activePeriod === 'All' ? { backgroundColor: '#3a5a3a', borderColor: '#3a5a3a' } : {}}
          >
            <span className={styles.periodBtnEmoji}>🌍</span>
            <span className={styles.periodBtnContent}>
              <span className={styles.periodBtnName}>All Periods</span>
              <span className={styles.periodBtnCount}>{dinosaurs.length} species</span>
            </span>
          </button>

          {periods.map((p) => (
            <button
              key={p}
              className={`${styles.periodBtn} ${activePeriod === p ? styles.periodBtnActive : ''}`}
              onClick={() => setActivePeriod(p)}
              style={
                activePeriod === p
                  ? { backgroundColor: periodColors[p], borderColor: periodColors[p] }
                  : { borderColor: periodColors[p] + '66', color: periodColors[p] }
              }
            >
              <span className={styles.periodBtnEmoji}>
                {p === 'Triassic' ? '🏜️' : p === 'Jurassic' ? '🌴' : '🌋'}
              </span>
              <span className={styles.periodBtnContent}>
                <span className={styles.periodBtnName}>{p}</span>
                <span className={styles.periodBtnRange}>{periodDescriptions[p]}</span>
                <span className={styles.periodBtnCount}>{counts[p]} species</span>
              </span>
            </button>
          ))}
        </aside>

        {/* Grid */}
        <main className={styles.main}>
          <p className={styles.resultsCount}>
            {filtered.length} dinosaur{filtered.length !== 1 ? 's' : ''}
            {activePeriod !== 'All' ? ` · ${activePeriod}` : ''}
            {search ? ` matching "${search}"` : ''}
            {activePeriod !== 'All' && !search ? ' · alphabetical order' : ''}
          </p>

          {filtered.length === 0 ? (
            <div className={styles.empty}>
              <span>🔍</span>
              <p>No dinosaurs found.</p>
            </div>
          ) : (
            <div className={styles.grid}>
              {filtered.map((dino) => (
                <DinosaurCard key={dino.id} dinosaur={dino} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
