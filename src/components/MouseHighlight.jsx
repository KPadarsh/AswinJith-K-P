import React, { useEffect, useState } from 'react';

export default function MouseHighlight() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 }); // Start off-screen

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-40 transition-opacity duration-300 mix-blend-multiply"
      style={{
        background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(245, 176, 39, 0.3), transparent 60%)`
      }}
    />
  );
}
