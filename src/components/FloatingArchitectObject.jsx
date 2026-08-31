import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

export default function FloatingArchitectObject() {
  const containerRef = useRef(null);
  const floatWrapperRef = useRef(null);
  const motionPathRef = useRef(null);
  const waypointRef = useRef(null);

  useGSAP(() => {
    // Register MotionPathPlugin
    gsap.registerPlugin(MotionPathPlugin);

    // 1. Blueprint self-drawing path outlines triggered by scroll
    const paths = containerRef.current.querySelectorAll('.blueprint-path');
    
    paths.forEach((path) => {
      const length = path.getTotalLength();
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      gsap.to(path, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.8,
        },
      });
    });

    // 2. Full-Page Top-to-Bottom Travel Trajectory
    gsap.to(containerRef.current, {
      y: () => window.innerHeight * 0.65,
      x: () => -Math.min(window.innerWidth * 0.25, 140),
      rotation: 120,
      scale: 1.1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.0,
        invalidateOnRefresh: true,
      },
    });

    // 3. MotionPath Waypoint Tracing across scroll
    if (waypointRef.current && motionPathRef.current) {
      gsap.to(waypointRef.current, {
        motionPath: {
          path: motionPathRef.current,
          align: motionPathRef.current,
          alignOrigin: [0.5, 0.5],
        },
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.5,
        }
      });
    }

    // 4. Subtle Independent Floating Drift
    gsap.to(floatWrapperRef.current, {
      y: 14,
      x: 8,
      rotation: 5,
      duration: 5,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
    });
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed right-4 sm:right-12 md:right-20 top-[12%] w-[250px] h-[250px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] z-[1] select-none opacity-75"
    >
      <div ref={floatWrapperRef} className="w-full h-full">
        <svg
          viewBox="0 0 200 200"
          width="100%"
          height="100%"
          className="text-accent"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Technical blueprint background circles & layout guides */}
          <circle cx="100" cy="100" r="95" stroke="rgba(224, 155, 24, 0.15)" strokeWidth="0.6" fill="none" />
          <circle cx="100" cy="100" r="80" stroke="rgba(224, 155, 24, 0.12)" strokeWidth="0.5" fill="none" />
          <circle cx="100" cy="100" r="40" stroke="rgba(224, 155, 24, 0.08)" strokeWidth="0.5" fill="none" />
          
          {/* Technical drafting crosshair lines */}
          <line x1="5" y1="100" x2="195" y2="100" stroke="rgba(224, 155, 24, 0.18)" strokeWidth="0.75" strokeDasharray="3 5" />
          <line x1="100" y1="5" x2="100" y2="195" stroke="rgba(224, 155, 24, 0.18)" strokeWidth="0.75" strokeDasharray="3 5" />
          
          {/* Diagonal drafting angle guides */}
          <line x1="32.8" y1="32.8" x2="167.2" y2="167.2" stroke="rgba(224, 155, 24, 0.1)" strokeWidth="0.5" strokeDasharray="1 4" />
          <line x1="32.8" y1="167.2" x2="167.2" y2="32.8" stroke="rgba(224, 155, 24, 0.1)" strokeWidth="0.5" strokeDasharray="1 4" />

          {/* Outer drafting compass markings */}
          <path d="M 195 100 A 95 95 0 0 1 100 195" fill="none" stroke="rgba(224, 155, 24, 0.18)" strokeWidth="1" strokeDasharray="1 5" />
          <path d="M 100 5 A 95 95 0 0 1 195 100" fill="none" stroke="rgba(224, 155, 24, 0.18)" strokeWidth="1" strokeDasharray="1 5" />

          {/* Curved technical drafting motion path guide */}
          <path 
            ref={motionPathRef}
            d="M 25,25 C 75,5 125,195 175,175" 
            fill="none" 
            stroke="rgba(224, 155, 24, 0.3)" 
            strokeWidth="0.8" 
            strokeDasharray="2 3" 
          />

          {/* 1. ROOM STRUCTURE (Isometric Axonometric Room Outline) */}
          <g>
            {/* Back vertical corner line */}
            <line x1="100" y1="50" x2="100" y2="120" className="blueprint-path" stroke="#e09b18" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            
            {/* Left wall top edge */}
            <path d="M 100,50 L 50,75" className="blueprint-path" stroke="#e09b18" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            {/* Left wall floor edge */}
            <path d="M 100,120 L 50,145" className="blueprint-path" stroke="#e09b18" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            {/* Left wall vertical edge */}
            <path d="M 50,75 L 50,145" className="blueprint-path" stroke="#e09b18" strokeWidth="1.5" fill="none" strokeLinecap="round" />

            {/* Right wall top edge */}
            <path d="M 100,50 L 150,75" className="blueprint-path" stroke="#e09b18" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            {/* Right wall floor edge */}
            <path d="M 100,120 L 150,145" className="blueprint-path" stroke="#e09b18" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            {/* Right wall vertical edge */}
            <path d="M 150,75 L 150,145" className="blueprint-path" stroke="#e09b18" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            
            {/* Front floor corner */}
            <path d="M 50,145 L 100,170 L 150,145" className="blueprint-path" stroke="#e09b18" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          </g>

          {/* 2. MINIMALIST FURNITURE (Isometric Chair & Side Table) */}
          <g>
            {/* Table top */}
            <path d="M 70,125 L 85,117.5 L 95,122.5 L 80,130 Z" className="blueprint-path" stroke="#e09b18" strokeWidth="1.2" fill="none" strokeLinejoin="round" />
            {/* Table legs */}
            <path d="M 70,125 L 70,143" className="blueprint-path" stroke="#e09b18" strokeWidth="1.2" fill="none" />
            <path d="M 80,130 L 80,148" className="blueprint-path" stroke="#e09b18" strokeWidth="1.2" fill="none" />
            <path d="M 95,122.5 L 95,140.5" className="blueprint-path" stroke="#e09b18" strokeWidth="1.2" fill="none" />

            {/* Isometric Designer Chair outline */}
            {/* Seat base */}
            <path d="M 110,135 L 125,127.5 L 135,132.5 L 120,140 Z" className="blueprint-path" stroke="#e09b18" strokeWidth="1.2" fill="none" strokeLinejoin="round" />
            {/* Chair Backrest */}
            <path d="M 125,127.5 L 125,112 L 135,117 L 135,132.5" className="blueprint-path" stroke="#e09b18" strokeWidth="1.2" fill="none" strokeLinejoin="round" />
            {/* Chair Legs */}
            <line x1="110" y1="135" x2="110" y2="149" className="blueprint-path" stroke="#e09b18" strokeWidth="1.2" fill="none" />
            <line x1="120" y1="140" x2="120" y2="154" className="blueprint-path" stroke="#e09b18" strokeWidth="1.2" fill="none" />
            <line x1="135" y1="132.5" x2="135" y2="146.5" className="blueprint-path" stroke="#e09b18" strokeWidth="1.2" fill="none" />
          </g>

          {/* 3. LIGHT SOURCE (Isometric Pendant Light) */}
          <g>
            {/* Hanging cord */}
            <line x1="100" y1="50" x2="100" y2="80" className="blueprint-path" stroke="#e09b18" strokeWidth="0.9" fill="none" />
            {/* Pendant triangle shade */}
            <path d="M 92,92 L 100,80 L 108,92 Z" className="blueprint-path" stroke="#e09b18" strokeWidth="1.2" fill="none" strokeLinejoin="round" />
            {/* Lightbulb circle */}
            <circle cx="100" cy="88" r="2.5" className="blueprint-path" stroke="#e09b18" strokeWidth="0.9" fill="none" />
            {/* Light emission rays */}
            <line x1="90" y1="96" x2="84" y2="100" className="blueprint-path" stroke="rgba(224, 155, 24, 0.6)" strokeWidth="0.6" />
            <line x1="110" y1="96" x2="116" y2="100" className="blueprint-path" stroke="rgba(224, 155, 24, 0.6)" strokeWidth="0.6" />
          </g>

          {/* Blueprint technical dimension labels */}
          <path d="M 68,145 L 78,150" stroke="rgba(224, 155, 24, 0.4)" strokeWidth="0.6" />
          <line x1="66" y1="144" x2="70" y2="146" stroke="rgba(224, 155, 24, 0.6)" strokeWidth="0.6" />
          <line x1="76" y1="149" x2="80" y2="151" stroke="rgba(224, 155, 24, 0.6)" strokeWidth="0.6" />
          <text x="60" y="153" fill="rgba(224, 155, 24, 0.7)" fontSize="4" fontFamily="monospace">600mm</text>

          {/* Main Title blueprint block */}
          <rect x="15" y="15" width="60" height="22" fill="none" stroke="rgba(224, 155, 24, 0.25)" strokeWidth="0.6" />
          <text x="18" y="22" fill="#e09b18" fontSize="4.5" fontWeight="bold" fontFamily="monospace" letterSpacing="0.5">
            AXONOMETRIC
          </text>
          <text x="18" y="28" fill="rgba(224, 155, 24, 0.75)" fontSize="3.5" fontFamily="monospace">
            ROOM CONCEPT
          </text>
          <text x="18" y="34" fill="rgba(224, 155, 24, 0.5)" fontSize="3" fontFamily="monospace">
            STAGE 1 / PLOT 3
          </text>

          {/* Technical signature block */}
          <text x="118" y="22" fill="rgba(224, 155, 24, 0.7)" fontSize="4" fontFamily="monospace" letterSpacing="0.2">
            MODEL: RM-09
          </text>
          <text x="118" y="28" fill="rgba(224, 155, 24, 0.5)" fontSize="3.5" fontFamily="monospace">
            DESIGN BY: AJ
          </text>

          {/* Drafting Waypoint Target Crosshair */}
          <g ref={waypointRef}>
            <circle cx="0" cy="0" r="5" stroke="#e09b18" strokeWidth="0.8" fill="rgba(224, 155, 24, 0.2)" />
            <circle cx="0" cy="0" r="1.5" fill="#e09b18" />
            <line x1="-8" y1="0" x2="8" y2="0" stroke="#e09b18" strokeWidth="0.6" />
            <line x1="0" y1="-8" x2="0" y2="8" stroke="#e09b18" strokeWidth="0.6" />
          </g>
        </svg>
      </div>
    </div>
  );
}
