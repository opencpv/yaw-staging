import React from 'react';

const useViewport = () => {
  const [viewport, setViewport] = React.useState<{
    width: number | null;
    height: number | null;
  }>({ width: null, height: null });
  React.useEffect(() => {
    let vh = window.innerHeight * 0.01;
    setViewport({ width: window.innerWidth, height: window.innerHeight });
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    const handleResize = () => {
      setViewport({ width: window.innerWidth, height: window.innerHeight });
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return viewport;
};

export default useViewport;
