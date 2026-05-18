import { useState, useMemo } from 'react';
import { dinosaurs, periods, periodColors, periodDescriptions } from '../data/dinosaurs';
import type { Period } from '../data/dinosaurs';
import { DinosaurCard } from '../components/DinosaurCard';
import styles from './HomePage.module.css';

type FilterPeriod = Period | 'All';
type FilterDiet = 'All' | 'Carnivore' | 'Herbivore' | 'Omnivore' | 'Piscivore';

export function HomePage() {
  const [activePeriod, setActivePeriod] = useState<FilterPeriod>('All');
  const [activeDiet, setActiveDiet] = useState<FilterDiet>('All');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return dinosaurs.filter((d) => {
      if (activePeriod !== 'All' && d.period !== activePeriod) return false;
      if (activeDiet !== 'All' && d.diet !== activeDiet) return false;
      if (search && !d.name.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
  }, [activePeriod, activeDiet, search]);

  const counts = useMemo(() => {
    const byPeriod: Record<Period, number> = { Triassic: 0, Jurassic: 0, Cretaceous: 0 };
    dinosaurs.forEach((d) => byPeriod[d.period]++);
    return byPeriod;
  }, []);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>
            <span className={styles.titleIcon}>🦕</span>
            DinoWorld
          </h1>
          <p className={styles.subtitle}>
            Explore {dinosaurs.length} prehistoric creatures across 186 million years of history
          </p>
        </div>
        <div className={styles.periodStats}>
          {periods.map((p) => (
            <div key={p} className={styles.periodStat} style={{ borderColor: periodColors[p] }}>
              <span className={styles.periodStatCount} style={{ color: periodColors[p] }}>
                {counts[p]}
              </span>
              <span className={styles.periodStatName}>{p}</span>
              <span className={styles.periodStatRange}>{periodDescriptions[p]}</span>
            </div>
          ))}
        </div>
      </header>

      <div className={styles.controls}>
        <input
          type="search"
          placeholder="Search dinosaurs…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.searchInput}
        />

        <div className={styles.filterGroup}>
          <span className={styles.filterLabel}>Period:</span>
          <button
            className={`${styles.filterBtn} ${activePeriod === 'All' ? styles.filterBtnActive : ''}`}
            onClick={() => setActivePeriod('All')}
          >
            All ({dinosaurs.length})
          </button>
          {periods.map((p) => (
            <button
              key={p}
              className={`${styles.filterBtn} ${activePeriod === p ? styles.filterBtnActive : ''}`}
              style={activePeriod === p ? { backgroundColor: periodColors[p], borderColor: periodColors[p] } : { borderColor: periodColors[p], color: periodColors[p] }}
              onClick={() => setActivePeriod(p)}
            >
              {p} ({counts[p]})
            </button>
          ))}
        </div>

        <div className={styles.filterGroup}>
          <span className={styles.filterLabel}>Diet:</span>
          {(['All', 'Carnivore', 'Herbivore', 'Omnivore', 'Piscivore'] as FilterDiet[]).map((d) => (
            <button
              key={d}
              className={`${styles.filterBtn} ${activeDiet === d ? styles.filterBtnActive : ''}`}
              onClick={() => setActiveDiet(d)}
            >
              {d === 'All' ? 'All diets' : d}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className={styles.empty}>
          <span>🔍</span>
          <p>No dinosaurs found. Try a different search or filter.</p>
        </div>
      ) : (
        <>
          <p className={styles.resultsCount}>
            Showing {filtered.length} dinosaur{filtered.length !== 1 ? 's' : ''}
          </p>
          <div className={styles.grid}>
            {filtered.map((dino) => (
              <DinosaurCard key={dino.id} dinosaur={dino} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
