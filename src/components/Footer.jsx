import React from 'react';
import { useLenis } from 'lenis/react';

export default function Footer() {
  const lenis = useLenis();

  const handleScroll = (e, selector) => {
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo(selector, { duration: 1.5 });
    } else {
      document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-[#fff6e5]">
      <div className="max-w-7xl mx-auto px-12 md:px-24 py-16 md:py-24 flex flex-col justify-between min-h-[400px]">
        
        {/* Top Section */}
        <div className="max-w-xl">
          <div className="w-12 md:w-16 h-[1px] bg-primary/60 mb-6"></div>
          <p className="font-serif text-base md:text-lg text-primary/90 leading-relaxed mb-8">
            Want to work together or just have some questions? Send me a message and I'll get back to you in one to five business days.
          </p>
          <a href="#contacts" onClick={(e) => handleScroll(e, '#contacts')}>
            <button className="bg-[#f5aa1c] text-white px-8 py-3 rounded-full text-sm md:text-base font-semibold tracking-wider uppercase shadow-md hover:bg-[#e09b18] transition-colors cursor-pointer">
              Send Message
            </button>
          </a>
        </div>

        {/* Bottom Section */}
        <div className="mt-24 flex flex-col-reverse md:flex-row justify-between items-start md:items-end gap-12">
          {/* Left Details */}
          <div className="flex flex-col gap-3">
            <h3 className="font-serif text-xl md:text-2xl text-primary/90 mb-1">Aswinjith</h3>
            <p className="text-base text-primary/60">
              Riyadh, Saudi Arabia | <a href="tel:+966565759456" className="hover:text-primary transition-colors">+966 56 575 9456</a> | <a href="mailto:aswinjithkp0408@gmail.com" className="hover:text-primary transition-colors">aswinjithkp0408@gmail.com</a>
            </p>
            <p className="text-base text-primary/60 mt-1">
              © Aswinjith, {new Date().getFullYear()}
            </p>
          </div>

          {/* Right Links */}
          <div className="flex flex-col gap-3 text-base text-primary/70 items-start md:items-end font-medium">
            <a href="#hero" onClick={(e) => handleScroll(e, '#hero')} className="hover:text-primary transition-colors cursor-pointer">Home</a>
            <a href="#about" onClick={(e) => handleScroll(e, '#about')} className="hover:text-primary transition-colors cursor-pointer">About</a>
            <a href="#projects" onClick={(e) => handleScroll(e, '#projects')} className="hover:text-primary transition-colors cursor-pointer">Projects</a>
            <a href="#gallery" onClick={(e) => handleScroll(e, '#gallery')} className="hover:text-primary transition-colors cursor-pointer">3D Visuals</a>
            <a href="#contacts" onClick={(e) => handleScroll(e, '#contacts')} className="hover:text-primary transition-colors cursor-pointer">Contacts</a>
          </div>
        </div>

      </div>
    </div>
  );
}
