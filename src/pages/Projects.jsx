import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import simpleAndLexuryBedRoom from '../assets/simpleAndLexuryBedRoom.jpeg';
import traditionalHome from '../assets/traditionalHome.jpeg';
import lexuryHotel from '../assets/LexuryHotel.jpeg';

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-primary">
      {/* Header section with Navbar */}
      <div className='bg-[#fff5d9]'>
        <Navbar />
        
        <div className="px-12 md:px-24 py-16 w-full max-w-7xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-3xl md:text-4xl text-primary/90 mb-10"
          >
            Project showcase
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-primary/70 leading-loose max-w-2xl font-serif text-[18px]"
          >
            Each project in my portfolio is a testament to my attention to detail, 
            creativity, and ability to translate the client's vision into a beautiful and 
            practical reality.
          </motion.p>
        </div>
      </div>

      {/* Main Content Area - Light Background */}
      <div className="flex-1 bg-[#fff6e5] py-16 md:py-24">
        <div className="px-12 md:px-24 w-full max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } }
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start"
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}>
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
            </motion.div>
            
            <motion.div variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}>
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
            </motion.div>
            
            <motion.div variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}>
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
            </motion.div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
