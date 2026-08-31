import React, { useState } from 'react';
import { useLenis } from 'lenis/react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const lenis = useLenis();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScroll = (e, selector) => {
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo(selector, { duration: 1.5 });
    } else {
      document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMobileClick = (e, selector) => {
    handleScroll(e, selector);
    setIsOpen(false);
  };
  
  return (
    <nav className="flex justify-between items-center px-8 md:px-24 py-8 md:py-12 relative z-[100]">
      <a 
        href="#hero" 
        onClick={(e) => handleScroll(e, '#hero')} 
        className="font-serif text-2xl tracking-tight text-primary/90 cursor-pointer"
      >
        AswinJith
      </a>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-12 text-md text-primary/70 font-medium">
        <a href="#hero" onClick={(e) => handleScroll(e, '#hero')} className="hover:text-primary transition-colors cursor-pointer">Home</a>
        <a href="#about" onClick={(e) => handleScroll(e, '#about')} className="hover:text-primary transition-colors cursor-pointer">About</a>
        <a href="#projects" onClick={(e) => handleScroll(e, '#projects')} className="hover:text-primary transition-colors cursor-pointer">Projects</a>
        <a href="#gallery" onClick={(e) => handleScroll(e, '#gallery')} className="hover:text-primary transition-colors cursor-pointer">3D Visuals</a>
        <a href="#contacts" onClick={(e) => handleScroll(e, '#contacts')} className="hover:text-primary transition-colors cursor-pointer">Contacts</a>
      </div>

      {/* Mobile Hamburger Button */}
      <button 
        className="md:hidden text-primary/90 focus:outline-none z-[110] cursor-pointer"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        {isOpen ? (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        )}
      </button>

      {/* Mobile Popup Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-24 right-8 w-64 bg-[#fff5d9] shadow-2xl rounded-2xl py-6 flex flex-col items-center space-y-6 md:hidden z-[100] border border-primary/5"
          >
            <a href="#hero" onClick={(e) => handleMobileClick(e, '#hero')} className="text-xl font-serif text-primary/80 hover:text-primary transition-colors cursor-pointer">Home</a>
            <a href="#about" onClick={(e) => handleMobileClick(e, '#about')} className="text-xl font-serif text-primary/80 hover:text-primary transition-colors cursor-pointer">About</a>
            <a href="#projects" onClick={(e) => handleMobileClick(e, '#projects')} className="text-xl font-serif text-primary/80 hover:text-primary transition-colors cursor-pointer">Projects</a>
            <a href="#gallery" onClick={(e) => handleMobileClick(e, '#gallery')} className="text-xl font-serif text-primary/80 hover:text-primary transition-colors cursor-pointer">3D Visuals</a>
            <a href="#contacts" onClick={(e) => handleMobileClick(e, '#contacts')} className="text-xl font-serif text-primary/80 hover:text-primary transition-colors cursor-pointer">Contacts</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
