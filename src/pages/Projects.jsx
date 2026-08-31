import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingArchitectObject from '../components/FloatingArchitectObject';
import simpleAndLexuryBedRoom from '../assets/simpleAndLexuryBedRoom.jpeg';
import traditionalHome from '../assets/traditionalHome.jpeg';
import lexuryHotel from '../assets/LexuryHotel.jpeg';

export default function Projects() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);

  useGSAP(() => {
    // 1. Page Header animations
    const tl = gsap.timeline();
    tl.fromTo(titleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    );
    tl.fromTo(descRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.5'
    );

    // 2. Staggered reveal for project cards
    gsap.fromTo('.project-card',
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.0,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.project-grid',
          start: 'top 85%',
          toggleActions: 'play none none none',
        }
      }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col font-sans text-primary relative">
      {/* Floating Blueprint Design Object */}
      <FloatingArchitectObject />

      {/* Header section with Navbar */}
      <div className="bg-[#fff5d9] relative z-10">
        <Navbar />
        
        <div className="px-12 md:px-24 py-16 w-full max-w-7xl mx-auto">
          <h1 
            ref={titleRef}
            className="font-serif text-3xl md:text-4xl text-primary/90 mb-10"
          >
            Project showcase
          </h1>
          <p 
            ref={descRef}
            className="text-primary/70 leading-loose max-w-2xl font-serif text-[18px]"
          >
            Each project in my portfolio is a testament to my attention to detail, 
            creativity, and ability to translate the client's vision into a beautiful and 
            practical reality.
          </p>
        </div>
      </div>

      {/* Main Content Area - Light Background */}
      <div className="flex-1 bg-[#fff6e5] py-16 md:py-24 relative z-10">
        <div className="px-12 md:px-24 w-full max-w-7xl mx-auto">
          <div className="project-grid grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            
            {/* Project 1 */}
            <div className="project-card">
              <Link to={`/projects/${encodeURIComponent('Simple & Luxury Bedroom')}`} className="w-full group cursor-pointer block">
                <div className="overflow-hidden shadow-sm group-hover:shadow-xl transition-shadow duration-500 mb-6">
                  <img 
                    src={simpleAndLexuryBedRoom} 
                    alt="Simple and Luxury Bedroom" 
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                  />
                </div>
                <h2 className="font-serif text-2xl text-primary/90 mb-3">Simple & Luxury Bedroom</h2>
                <p className="font-serif text-primary/70 leading-relaxed text-[17px]">
                  A perfect blend of simplicity and luxury, designed to offer comfort and elegance in a serene bedroom setting.
                </p>
              </Link>
            </div>
            
            {/* Project 2 */}
            <div className="project-card">
              <Link to={`/projects/${encodeURIComponent('Traditional Home')}`} className="w-full group cursor-pointer mt-0 md:mt-24 block">
                <div className="overflow-hidden shadow-sm group-hover:shadow-xl transition-shadow duration-500 mb-6">
                  <img 
                    src={traditionalHome} 
                    alt="Traditional Home" 
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                  />
                </div>
                <h2 className="font-serif text-2xl text-primary/90 mb-3">Traditional Home</h2>
                <p className="font-serif text-primary/70 leading-relaxed text-[17px]">
                  A classic interior design that preserves traditional aesthetics while integrating modern comforts seamlessly.
                </p>
              </Link>
            </div>
            
            {/* Project 3 */}
            <div className="project-card">
              <Link to={`/projects/${encodeURIComponent('Luxury Hotel')}`} className="w-full group cursor-pointer block">
                <div className="overflow-hidden shadow-sm group-hover:shadow-xl transition-shadow duration-500 mb-6">
                  <img 
                    src={lexuryHotel} 
                    alt="Luxury Hotel" 
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                  />
                </div>
                <h2 className="font-serif text-2xl text-primary/90 mb-3">Luxury Hotel</h2>
                <p className="font-serif text-primary/70 leading-relaxed text-[17px]">
                  A grand and opulent hotel interior, crafted to provide guests with an unforgettable and premium experience.
                </p>
              </Link>
            </div>
            
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
