import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="w-full bg-[#fff6e5]">
      <div className="max-w-7xl mx-auto px-12 md:px-24 py-16 md:py-24 flex flex-col justify-between min-h-[400px]">
        
        {/* Top Section */}
        {isHomePage && (
          <div className="max-w-xl">
            <div className="w-12 md:w-16 h-[1px] bg-primary/60 mb-6"></div>
            <p className="font-serif text-base md:text-lg text-primary/90 leading-relaxed mb-8">
              Want to work together or just have some questions? Send me a message and I'll get back to you in one to five business days.
            </p>
            <button className="bg-[#f5aa1c] text-white px-8 py-3 rounded-full text-sm md:text-base font-semibold tracking-wider uppercase shadow-md hover:bg-[#e09b18] transition-colors">
              Send Message
            </button>
          </div>
        )}

        {/* Bottom Section */}
        <div className="mt-24 flex flex-col-reverse md:flex-row justify-between items-start md:items-end gap-12">
          {/* Left Details */}
          <div className="flex flex-col gap-3">
            <h3 className="font-serif text-xl md:text-2xl text-primary/90 mb-1">Aswinjith</h3>
            <p className="text-base text-primary/60">
              Riyadh, Saudi Arabia | <a href="tel:+966500000000" className="hover:text-primary transition-colors">+966 50 000 0000</a> | <a href="mailto:hello@aswinjith.com" className="hover:text-primary transition-colors">hello@aswinjith.com</a>
            </p>
            <p className="text-base text-primary/60 mt-1">
              © Aswinjith, {new Date().getFullYear()}
            </p>
          </div>

          {/* Right Links */}
          <div className="flex flex-col gap-3 text-base text-primary/70 items-start md:items-end">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <Link to="/projects" className="hover:text-primary transition-colors">Projects</Link>
            <a href="#" className="hover:text-primary transition-colors">Contacts</a>
          </div>
        </div>

      </div>
    </div>
  );
}
