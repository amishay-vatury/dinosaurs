import { useState, useEffect } from 'react';

const cache = new Map<string, string | null>();

export function useWikipediaImage(dinoId: string) {
  const title = dinoId.charAt(0).toUpperCase() + dinoId.slice(1);
  const cached = cache.get(title);

  const [imageUrl, setImageUrl] = useState<string | null>(
    cached !== undefined ? cached : null
  );
  const [loading, setLoading] = useState(cached === undefined);

  useEffect(() => {
    if (cache.has(title)) {
      setImageUrl(cache.get(title)!);
      setLoading(false);
      return;
    }

    let cancelled = false;
    setLoading(true);

    fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`)
      .then((r) => r.json())
      .then((data) => {
        if (cancelled) return;
        const url: string | null =
          data?.originalimage?.source ?? data?.thumbnail?.source ?? null;
        cache.set(title, url);
        setImageUrl(url);
        setLoading(false);
      })
      .catch(() => {
        if (cancelled) return;
        cache.set(title, null);
        setImageUrl(null);
        setLoading(false);
      });

    return () => { cancelled = true; };
  }, [title]);

  return { imageUrl, loading };
}
