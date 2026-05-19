import { useState, useEffect } from 'react';

const cache = new Map<string, string | null>();

// Words that indicate a skeletal/fossil image rather than a life reconstruction
const SKELETON_WORDS = [
  'skeleton', 'fossil', 'holotype', 'specimen', 'skull', 'bone',
  'mount', 'cast', 'femur', 'teeth', 'jaw', 'vertebra', 'mold',
];

function isSkeletonImage(url: string): boolean {
  const lower = url.toLowerCase();
  return SKELETON_WORDS.some(w => lower.includes(w));
}

function isUsableImage(url: string): boolean {
  const lower = url.toLowerCase();
  if (isSkeletonImage(url)) return false;
  // Skip maps, logos, icons
  if (lower.includes('map') || lower.includes('logo') || lower.includes('icon') || lower.includes('flag')) return false;
  return lower.endsWith('.jpg') || lower.endsWith('.jpeg') || lower.endsWith('.png') || lower.endsWith('.webp');
}

async function fetchBestImage(title: string): Promise<string | null> {
  // Step 1: page summary — fast, cached by Wikipedia CDN
  try {
    const r = await fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`
    );
    if (r.ok) {
      const data = await r.json();
      const url: string | null = data?.originalimage?.source ?? data?.thumbnail?.source ?? null;
      if (url && !isSkeletonImage(url)) return url;
    }
  } catch { /* network error, continue */ }

  // Step 2: scan all images on the page, pick first life-reconstruction-looking one
  try {
    const r = await fetch(
      `https://en.wikipedia.org/api/rest_v1/page/media-list/${encodeURIComponent(title)}`
    );
    if (r.ok) {
      const data = await r.json();
      const items: Array<{ type: string; original?: { source: string }; srcset?: Array<{ src: string }> }> =
        data?.items ?? [];
      for (const item of items) {
        if (item.type !== 'image') continue;
        const raw = item.original?.source ?? item.srcset?.[0]?.src ?? '';
        const full = raw.startsWith('//') ? 'https:' + raw : raw;
        if (isUsableImage(full)) return full;
      }
    }
  } catch { /* ignore */ }

  return null;
}

export function useWikipediaImage(dinoId: string) {
  // Capitalize first letter — matches Wikipedia article titles for all single-word dino IDs
  const title = dinoId.charAt(0).toUpperCase() + dinoId.slice(1);
  const cached = cache.get(title);

  const [imageUrl, setImageUrl] = useState<string | null>(cached !== undefined ? cached : null);
  const [loading, setLoading] = useState(cached === undefined);

  useEffect(() => {
    if (cache.has(title)) {
      setImageUrl(cache.get(title) ?? null);
      setLoading(false);
      return;
    }

    let cancelled = false;
    setLoading(true);

    fetchBestImage(title).then(url => {
      if (cancelled) return;
      cache.set(title, url);
      setImageUrl(url);
      setLoading(false);
    });

    return () => { cancelled = true; };
  }, [title]);

  return { imageUrl, loading };
}
