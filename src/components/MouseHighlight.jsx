import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function MouseHighlight() {
  const overlayRef = useRef(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    // Set initial position offscreen
    gsap.set(overlay, {
      opacity: 0,
      '--x': '-1000px',
      '--y': '-1000px',
    });

    // We animate position values in an object and update CSS variables directly
    const pos = { x: -1000, y: -1000 };
    
    // quickTo creates highly optimized, hardware-accelerated setters
    const xTo = gsap.quickTo(pos, 'x', {
      duration: 0.8,
      ease: 'power3.out',
      onUpdate: () => {
        overlay.style.setProperty('--x', `${pos.x}px`);
      }
    });
    
    const yTo = gsap.quickTo(pos, 'y', {
      duration: 0.8,
      ease: 'power3.out',
      onUpdate: () => {
        overlay.style.setProperty('--y', `${pos.y}px`);
      }
    });

    let hasMoved = false;

    const handleMouseMove = (e) => {
      if (!hasMoved) {
        gsap.to(overlay, { opacity: 1, duration: 0.4 });
        hasMoved = true;
      }
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={overlayRef}
      className="pointer-events-none fixed inset-0 z-40 mix-blend-multiply"
      style={{
        background: `radial-gradient(500px circle at var(--x, -1000px) var(--y, -1000px), rgba(245, 176, 39, 0.35), transparent 60%)`
      }}
    />
  );
}
