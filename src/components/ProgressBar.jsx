import React, { useEffect, useState } from 'react';
import './ProgressBar.css';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const total = document.body.scrollHeight - window.innerHeight;
      setProgress((scrolled / total) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <div id="progress" style={{ width: `${progress}%` }}></div>;
};

export default ProgressBar;
