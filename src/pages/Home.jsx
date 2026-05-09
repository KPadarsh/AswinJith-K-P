import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import profileImg from '../assets/profileImg.png';
import highlight1 from '../assets/Higlight1.jpeg';
import highlight2 from '../assets/Higlight2.jpeg';
import highlight3 from '../assets/Higlight3.jpeg';
import highlight4 from '../assets/Higlight4.jpeg';
export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen flex flex-col font-sans text-primary">
      {/* Navigation */}
      <div className='bg-[#fff5d9]'>

      <Navbar />

      {/* Hero Section */}
      <main className="flex-1 flex flex-col md:flex-row items-center justify-center px-12 md:px-24 py-12 gap-16 md:gap-24 w-full">
        {/* Left: Circular Image */}
        <div className="flex-1 flex justify-end">
          <div className="w-[300px] h-[300px] md:w-[480px] md:h-[480px] rounded-full overflow-hidden shrink-0 shadow-sm">
            <img 
              src={profileImg} 
              alt="Aswinjith" 
              className="w-full h-full object-cover object-top"
              />
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="flex-1 flex flex-col items-start max-w-xl">
          <h1 className="font-serif text-4xl md:text-5xl leading-[1.2] text-primary/90">
            Hi, I'm Aswinjith, an <br />
            Interior Designer <br />
            based Saudi Arabia
          </h1>
          <button className="mt-10 bg-accent text-white px-8 py-3.5 rounded-full text-xs md:text-sm font-semibold tracking-widest uppercase shadow-md hover:bg-accent/90 transition-colors">
            Reach Out
          </button>
        </div>
      </main>
      </div>

      {/* About & Experience Section */}
      <section className="px-12 md:px-24 py-24 flex flex-col gap-24 w-full max-w-7xl mx-auto">
        {/* About Row */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-32 items-start">
          <div className="md:w-1/3 pt-1">
            <span className="text-sm tracking-widest text-primary/60 uppercase font-semibold flex items-center gap-4">
              <span className="w-6 md:w-8 h-[1px] bg-primary/40 block"></span>
              About Me
            </span>
          </div>
          <div className="md:w-2/3">
            <p className="font-serif text-[20px] text-primary/90 leading-loose max-w-2xl">
              From a young age, I was fascinated by the art of designing interiors and spaces that create a sense of beauty and harmony.
            </p>
          </div>
        </div>

        {/* Experience Row */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-32 items-start">
          <div className="md:w-1/3 pt-1">
            <span className="text-sm tracking-widest text-primary/60 uppercase font-semibold flex items-center gap-4">
              <span className="w-6 md:w-8 h-[1px] bg-primary/40 block"></span>
              My Experience
            </span>
          </div>
          <div className="md:w-2/3">
            <p className="font-serif text-[20px] text-primary/90 leading-loose max-w-2xl">
              Over the years, I have honed my skills and expanded my knowledge to create interior that are not only visually stunning but also practical and comfortable.
            </p>
          </div>
        </div>
      </section>

      {/* Renderings Intro */}
      <div className="w-full bg-gradient-to-t from-[#ffecb8] to-[#fff6e5]">
        <section className="px-12 md:px-24 py-16 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-sm tracking-widest text-primary/60 uppercase font-semibold flex items-center gap-4 mb-6">
              <span className="w-8 md:w-12 h-[1px] bg-primary/40 block"></span>
              3D Visualizations
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-primary/90 leading-[1.2]">
              Conceptual Renderings &<br className="hidden md:block" /> Digital Realities
            </h2>
          </div>
          <div className="max-w-md">
            <p className="font-serif text-primary/70 leading-relaxed text-[17px]">
              A curated selection of high-fidelity 3D renders. These digital visualizations explore spatial concepts, materials, and lighting before they are brought to life.
            </p>
          </div>
        </section>
      </div>

      {/* Renderings Grid */}
      <div className="w-full bg-gradient-to-b from-[#ffecb8] to-[#fff6e5]">
        <section className="px-12 md:px-24 py-16 md:py-24 w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-start">
            <div 
              className="w-full overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 cursor-pointer"
              onClick={() => setSelectedImage(highlight1)}
            >
              <img 
                src={highlight1} 
                alt="Portfolio Highlight 1" 
                className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-700 ease-out" 
              />
            </div>
            <div 
              className="w-full overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 cursor-pointer lg:mt-8"
              onClick={() => setSelectedImage(highlight2)}
            >
              <img 
                src={highlight2} 
                alt="Portfolio Highlight 2" 
                className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-700 ease-out" 
              />
            </div>
            <div 
              className="w-full overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 cursor-pointer"
              onClick={() => setSelectedImage(highlight3)}
            >
              <img 
                src={highlight3} 
                alt="Portfolio Highlight 3" 
                className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-700 ease-out" 
              />
            </div>
            <div 
              className="w-full overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 cursor-pointer lg:mt-8"
              onClick={() => setSelectedImage(highlight4)}
            >
              <img 
                src={highlight4} 
                alt="Portfolio Highlight 4" 
                className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-700 ease-out" 
              />
            </div>
          </div>
        </section>
      </div>
      <Footer />

      {/* Full Screen Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full px-4 md:px-12 flex justify-center items-center">
            <button 
              className="absolute top-4 right-4 md:right-12 text-white/70 hover:text-white transition-colors p-2"
              onClick={() => setSelectedImage(null)}
              aria-label="Close fullscreen image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <img 
              src={selectedImage} 
              alt="Fullscreen Render" 
              className="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-sm"
              onClick={(e) => e.stopPropagation()} 
            />
          </div>
        </div>
      )}
    </div>
  );
}
