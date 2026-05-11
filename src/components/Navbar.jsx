import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  return (
    <nav className="flex justify-between items-center px-8 md:px-24 py-8 md:py-12 relative z-[100]">
      <Link to="/" className="font-serif text-2xl tracking-tight text-primary/90">
        AswinJith
      </Link>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-12 text-md text-primary/70">
        <Link to="/" className={`hover:text-primary transition-colors ${location.pathname === '/' ? 'border-b border-primary/40 pb-0.5 text-primary' : ''}`}>Home</Link>
        <Link to="/projects" className={`hover:text-primary transition-colors ${location.pathname === '/projects' ? 'border-b border-primary/40 pb-0.5 text-primary' : ''}`}>Projects</Link>
        <Link to="/contacts" className={`hover:text-primary transition-colors ${location.pathname === '/contacts' ? 'border-b border-primary/40 pb-0.5 text-primary' : ''}`}>Contacts</Link>
      </div>

      {/* Mobile Hamburger Button */}
      <button 
        className="md:hidden text-primary/90 focus:outline-none z-[110]"
        onClick={toggleMenu}
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
            <Link to="/" onClick={toggleMenu} className={`text-xl font-serif hover:text-primary transition-colors ${location.pathname === '/' ? 'text-primary font-bold' : 'text-primary/70'}`}>Home</Link>
            <Link to="/projects" onClick={toggleMenu} className={`text-xl font-serif hover:text-primary transition-colors ${location.pathname === '/projects' ? 'text-primary font-bold' : 'text-primary/70'}`}>Projects</Link>
            <Link to="/contacts" onClick={toggleMenu} className={`text-xl font-serif hover:text-primary transition-colors ${location.pathname === '/contacts' ? 'text-primary font-bold' : 'text-primary/70'}`}>Contacts</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
