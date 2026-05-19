import { useState, useEffect } from 'react';

const cache = new Map<string, string | null>();

const SKELETON_WORDS = [
  'skeleton', 'fossil', 'holotype', 'specimen', 'skull', 'bone',
  'mount', 'cast', 'femur', 'teeth', 'jaw', 'vertebra', 'mold',
  'museum', 'exhibit', 'collection',
];

function isSkeletonImage(url: string): boolean {
  const lower = url.toLowerCase();
  return SKELETON_WORDS.some(w => lower.includes(w));
}

function isUsableImage(url: string): boolean {
  const lower = url.toLowerCase();
  if (isSkeletonImage(url)) return false;
  if (lower.includes('map') || lower.includes('logo') || lower.includes('icon') ||
      lower.includes('flag') || lower.includes('symbol') || lower.includes('clade')) return false;
  return /\.(jpg|jpeg|png|webp)/i.test(lower);
}

// One Wikimedia Commons API call: search files + fetch their image URLs together
async function searchCommonsImage(name: string): Promise<string | null> {
  const queries = [
    `${name} life restoration`,
    `${name} restoration`,
    `${name} paleoart`,
    `${name} reconstruction`,
  ];

  for (const query of queries) {
    try {
      const r = await fetch(
        `https://commons.wikimedia.org/w/api.php?action=query` +
        `&generator=search&gsrsearch=${encodeURIComponent(query)}` +
        `&gsrnamespace=6&gsrlimit=8` +
        `&prop=imageinfo&iiprop=url&iiurlwidth=1200` +
        `&format=json&origin=*`
      );
      if (!r.ok) continue;
      const data = await r.json();
      const pages = Object.values(data?.query?.pages ?? {}) as Array<{
        title: string;
        imageinfo?: Array<{ url: string; thumburl?: string }>;
      }>;

      for (const page of pages) {
        // Skip if the file title itself looks like a skeleton
        if (isSkeletonImage(page.title)) continue;
        const imgUrl = page.imageinfo?.[0]?.thumburl ?? page.imageinfo?.[0]?.url;
        if (imgUrl && isUsableImage(imgUrl)) return imgUrl;
      }
    } catch { /* try next query */ }
  }

  return null;
}

async function fetchBestImage(title: string): Promise<string | null> {
  // 1. Wikipedia REST summary — fastest, good for popular dinosaurs
  try {
    const r = await fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`
    );
    if (r.ok) {
      const data = await r.json();
      const url: string | null = data?.originalimage?.source ?? data?.thumbnail?.source ?? null;
      if (url && !isSkeletonImage(url)) return url;
    }
  } catch { /* continue */ }

  // 2. Scan the Wikipedia page's media list for a non-skeleton image
  try {
    const r = await fetch(
      `https://en.wikipedia.org/api/rest_v1/page/media-list/${encodeURIComponent(title)}`
    );
    if (r.ok) {
      const data = await r.json();
      const items: Array<{
        type: string;
        original?: { source: string };
        srcset?: Array<{ src: string }>;
      }> = data?.items ?? [];
      for (const item of items) {
        if (item.type !== 'image') continue;
        const raw = item.original?.source ?? item.srcset?.[0]?.src ?? '';
        const full = raw.startsWith('//') ? 'https:' + raw : raw;
        if (isUsableImage(full)) return full;
      }
    }
  } catch { /* continue */ }

  // 3. Search Wikimedia Commons specifically for life restoration art
  return searchCommonsImage(title);
}

export function useWikipediaImage(dinoId: string) {
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
