import React, { useEffect, useState } from 'react';

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isVisible]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 100); // Wait for fade out animation
    }, 6000); // Show for 6 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`preloader ${!isVisible ? 'fade-out' : ''}`}>
      {/* Canvas Background */}
      <div className="canvas-background"></div>
      
      {/* Paint Strokes */}
      <div className="paint-strokes">
        <div className="stroke stroke-1"></div>
        <div className="stroke stroke-2"></div>
        <div className="stroke stroke-3"></div>
        <div className="stroke stroke-4"></div>
        <div className="stroke stroke-5"></div>
      </div>

      {/* Paint Splatters */}
      <div className="paint-splatters">
        <div className="splatter splatter-1"></div>
        <div className="splatter splatter-2"></div>
        <div className="splatter splatter-3"></div>
        <div className="splatter splatter-4"></div>
        <div className="splatter splatter-5"></div>
        <div className="splatter splatter-6"></div>
      </div>

      {/* Animated Logo */}
      <div className="logo-container">
        <div className="logo-text">
         
         
          <span className="letter letter-a">A</span>
          <span className="letter letter-r">r</span>
          <span className="letter letter-t2">t</span>
          <span className='n'> 
          <span className="letter letter-f">f</span>
          <span className="letter letter-o">o</span>
          <span className="letter letter-r2">r</span>
          <span className="letter letter-e2">e</span>
          <span className="letter letter-v">v</span>
          <span className="letter letter-e3">e</span>
          <span className="letter letter-r3">r</span>
          </span>
        </div>
        <div className="tagline">Crafting Creativity Forever</div>
      </div>

      {/* Brush Cursor */}
      <div className="brush-cursor"></div>

      {/* Progress Indicator */}
      <div className="progress-container">
        <div className="progress-bar"></div>
      </div>
    </div>
  );
};

export default Preloader;