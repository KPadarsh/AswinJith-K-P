import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import Home from './pages/Home';
import MouseHighlight from './components/MouseHighlight';

// Register ScrollTrigger and MotionPath plugins
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

function App() {
  const lenisRef = useRef();

  useEffect(() => {
    // Sync GSAP ticker with Lenis requestAnimationFrame (raf)
    const lenis = lenisRef.current?.lenis;
    if (lenis) {
      // Clean up and update ScrollTrigger on scroll
      lenis.on('scroll', ScrollTrigger.update);
      
      const updateTime = (time) => {
        lenis.raf(time * 1000);
      };
      
      gsap.ticker.add(updateTime);
      
      return () => {
        lenis.off('scroll', ScrollTrigger.update);
        gsap.ticker.remove(updateTime);
      };
    }
  }, []);

  return (
    <ReactLenis root ref={lenisRef} options={{ lerp: 0.08, smoothWheel: true }}>
      <Router>
        <MouseHighlight />
        <Routes>
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </ReactLenis>
  );
}

export default App;
