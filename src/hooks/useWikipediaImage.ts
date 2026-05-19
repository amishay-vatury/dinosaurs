import { useState, useEffect } from 'react';

const cache = new Map<string, string | null>();

const SKELETON_WORDS = [
  'skeleton', 'fossil', 'holotype', 'specimen', 'skull', 'bone',
  'mount', 'cast', 'teeth', 'jaw', 'vertebra', 'museum', 'exhibit',
];

function isBadUrl(url: string): boolean {
  const lower = url.toLowerCase();
  if (SKELETON_WORDS.some(w => lower.includes(w))) return false;
  if (lower.includes('map') || lower.includes('logo') || lower.includes('icon')) return false;
  return true; // good
}

// dinosaurpictures.org has an API that returns curated life-reconstruction images
async function fetchDinoPictures(name: string): Promise<string | null> {
  try {
    const r = await fetch(`https://dinosaurpictures.org/api/dinosaur/${encodeURIComponent(name)}`);
    if (!r.ok) return null;
    const data = await r.json();
    const pics: Array<{ url: string }> = data?.pics ?? [];
    for (const pic of pics) {
      // Force https to avoid mixed-content blocks
      const url = (pic.url ?? '').replace(/^http:\/\//i, 'https://');
      if (url && isBadUrl(url)) return url;
    }
  } catch { /* CORS or network error — fall through */ }
  return null;
}

// Fallback 1: Wikipedia REST API summary
async function fetchWikipedia(name: string): Promise<string | null> {
  try {
    const r = await fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(name)}`
    );
    if (!r.ok) return null;
    const data = await r.json();
    const url: string | null = data?.originalimage?.source ?? data?.thumbnail?.source ?? null;
    if (url && isBadUrl(url)) return url;
  } catch {}
  return null;
}

// Fallback 2: Wikimedia Commons search for life-restoration art
async function fetchCommonsRestoration(name: string): Promise<string | null> {
  try {
    const r = await fetch(
      `https://commons.wikimedia.org/w/api.php?action=query` +
      `&generator=search&gsrsearch=${encodeURIComponent(name + ' life restoration')}` +
      `&gsrnamespace=6&gsrlimit=5` +
      `&prop=imageinfo&iiprop=url&iiurlwidth=1200` +
      `&format=json&origin=*`
    );
    if (!r.ok) return null;
    const data = await r.json();
    const pages = Object.values(data?.query?.pages ?? {}) as Array<{
      title: string;
      imageinfo?: Array<{ url: string; thumburl?: string }>;
    }>;
    for (const page of pages) {
      if (!isBadUrl(page.title)) continue;
      const url = page.imageinfo?.[0]?.thumburl ?? page.imageinfo?.[0]?.url;
      if (url && isBadUrl(url)) return url;
    }
  } catch {}
  return null;
}

async function fetchBestImage(name: string): Promise<string | null> {
  const dinoPic = await fetchDinoPictures(name);
  if (dinoPic) return dinoPic;

  const wiki = await fetchWikipedia(name);
  if (wiki) return wiki;

  return fetchCommonsRestoration(name);
}

export function useWikipediaImage(dinoId: string) {
  const name = dinoId.charAt(0).toUpperCase() + dinoId.slice(1);
  const cached = cache.get(name);

  const [imageUrl, setImageUrl] = useState<string | null>(cached !== undefined ? cached : null);
  const [loading, setLoading] = useState(cached === undefined);

  useEffect(() => {
    if (cache.has(name)) {
      setImageUrl(cache.get(name) ?? null);
      setLoading(false);
      return;
    }

    let cancelled = false;
    setLoading(true);

    fetchBestImage(name).then(url => {
      if (cancelled) return;
      cache.set(name, url);
      setImageUrl(url);
      setLoading(false);
    });

    return () => { cancelled = true; };
  }, [name]);

  return { imageUrl, loading };
}
