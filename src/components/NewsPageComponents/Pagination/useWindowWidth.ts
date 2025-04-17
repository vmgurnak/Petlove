import { useState, useEffect } from 'react';

export const useWindowWidth = () => {
  const [width, setWidth] = useState(
    // typeof window !== 'undefined' ? window.innerWidth : 1024
    typeof window !== 'undefined' ? document.documentElement.clientWidth : 1024
  );

  useEffect(() => {
    // const handleResize = () => setWidth(window.innerWidth);
    const handleResize = () => setWidth(document.documentElement.clientWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
};
