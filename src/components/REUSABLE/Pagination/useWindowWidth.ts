import { useState, useEffect } from 'react';

export const useWindowWidth = () => {
  const [width, setWidth] = useState(
    typeof window !== 'undefined' ? document.documentElement.clientWidth : 375
  );

  useEffect(() => {
    const handleResize = () => setWidth(document.documentElement.clientWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
};
