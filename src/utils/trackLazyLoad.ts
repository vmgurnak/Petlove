export function trackLazyLoad<T>(
  loader: () => Promise<{ default: T }>,
  setProgress: (value: number) => void
): () => Promise<{ default: T }> {
  return () => {
    let loaded = 0;

    const interval = setInterval(() => {
      loaded = Math.min(loaded + 5, 95); // псевдо-прогресс
      setProgress(loaded);
    }, 50);

    return loader().then((mod) => {
      clearInterval(interval);
      setProgress(100);
      return mod;
    });
  };
}
