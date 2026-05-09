import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  return (
    <nav className="flex justify-between items-center px-8 md:px-24 py-8 md:py-12 relative z-50">
      <Link to="/" className="font-serif text-2xl tracking-tight text-primary/90">
        AJ Studio
      </Link>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-12 text-md text-primary/70">
        <Link to="/" className={`hover:text-primary transition-colors ${location.pathname === '/' ? 'border-b border-primary/40 pb-0.5 text-primary' : ''}`}>Home</Link>
        <Link to="/projects" className={`hover:text-primary transition-colors ${location.pathname === '/projects' ? 'border-b border-primary/40 pb-0.5 text-primary' : ''}`}>Projects</Link>
        <a href="#" className="hover:text-primary transition-colors">Contacts</a>
      </div>

      {/* Mobile Hamburger Button */}
      <button 
        className="md:hidden text-primary/90 focus:outline-none"
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

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#fff5d9] shadow-lg py-8 flex flex-col items-center space-y-6 md:hidden z-50">
          <Link to="/" onClick={toggleMenu} className={`text-lg hover:text-primary transition-colors ${location.pathname === '/' ? 'border-b border-primary/40 pb-0.5 text-primary font-medium' : 'text-primary/70'}`}>Home</Link>
          <Link to="/projects" onClick={toggleMenu} className={`text-lg hover:text-primary transition-colors ${location.pathname === '/projects' ? 'border-b border-primary/40 pb-0.5 text-primary font-medium' : 'text-primary/70'}`}>Projects</Link>
          <a href="#" onClick={toggleMenu} className="text-lg text-primary/70 hover:text-primary transition-colors">Contacts</a>
        </div>
      )}
    </nav>
  );
}
