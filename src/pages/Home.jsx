import React, { useState, useRef, useEffect } from 'react';
import Lenis from 'lenis';
import { useLenis } from 'lenis/react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingArchitectObject from '../components/FloatingArchitectObject';
import useMagnetic from '../hooks/useMagnetic';

// Profile & Gallery Assets
import profileImg from '../assets/profileImg.png';
import highlight1 from '../assets/Higlight1.jpeg';
import highlight2 from '../assets/Higlight2.jpeg';
import highlight3 from '../assets/Higlight3.jpeg';
import highlight4 from '../assets/Higlight4.jpeg';

// Featured Projects Assets
import simpleAndLexuryBedRoom from '../assets/simpleAndLexuryBedRoom.jpeg';
import traditionalHome from '../assets/traditionalHome.jpeg';
import lexuryHotel from '../assets/LexuryHotel.jpeg';

// Detailed Project Assets (Modal)
import lexuryBedRoomPlan from '../assets/lexuryBedRoomPlan.png';
import lexuryBedRoomInterior from '../assets/lexuryBedRoomInterior.jpeg';
import lexuryBedRoomInterior2 from '../assets/lexuryBedRoomInterior2.jpeg';
import lexuryBed1 from '../assets/lexuryBed1.jpeg';
import lexuryBed2 from '../assets/lexuryBed2.jpeg';
import lexuryBed3 from '../assets/lexuryBed3.jpeg';
import traditionalHome1 from '../assets/traditionalHome1.jpeg';
import traditionalHome2 from '../assets/traditionalHome2.jpeg';
import traditionalHome3 from '../assets/traditionalHome3.jpeg';
import traditionalHomeInterior1 from '../assets/traditionalHomeInterior1.jpeg';
import traditionalHomeInterior2 from '../assets/traditionalHomeInterior2.jpeg';
import traditionalHomeInterior3 from '../assets/traditionalHomeInterior3.jpeg';
import lexuryHotel1 from '../assets/lexuryHotel1.jpeg';
import lexuryHotel2 from '../assets/lexuryHotel2.jpeg';
import lexuryHotel3 from '../assets/lexuryHotel3.jpeg';
import lexuryHotelInterior1 from '../assets/lexuryHotelInterior1.jpeg';
import lexuryHotelInterior2 from '../assets/lexuryHotelInterior2.jpeg';
import lexuryHotelInterior3 from '../assets/lexuryHotelInterior3.jpeg';

export default function Home() {
  const lenis = useLenis();
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  // Contacts state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Refs for elements to animate
  const containerRef = useRef(null);
  const heroImageRef = useRef(null);
  const heroBtnRef = useRef(null);
  const modalRef = useRef(null);

  // Magnetic refs
  const magneticHeroBtnRef = useMagnetic();
  const magneticMailBtnRef = useMagnetic();
  const magneticWaBtnRef = useMagnetic();
  const magneticInstaBtnRef = useMagnetic();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSendMail = () => {
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    const subject = encodeURIComponent(`Project Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoLink = `mailto:aswinjithkp0408@gmail.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
  };

  // Helper to resolve detailed project data based on the active modal project name
  const getProjectDetails = (title) => {
    const isTraditional = title === "Traditional Home";
    const isLuxuryHotel = title === "Luxury Hotel";

    return {
      title,
      planImg: isTraditional ? traditionalHomeInterior1 : isLuxuryHotel ? lexuryHotelInterior1 : lexuryBedRoomPlan,
      interiorImg1: isTraditional ? traditionalHomeInterior2 : isLuxuryHotel ? lexuryHotelInterior2 : lexuryBedRoomInterior,
      interiorImg2: isTraditional ? traditionalHomeInterior3 : isLuxuryHotel ? lexuryHotelInterior3 : lexuryBedRoomInterior2,
      resultImg1: isTraditional ? traditionalHome1 : isLuxuryHotel ? lexuryHotel1 : lexuryBed1,
      resultImg2: isTraditional ? traditionalHome2 : isLuxuryHotel ? lexuryHotel2 : lexuryBed2,
      resultImg3: isTraditional ? traditionalHome3 : isLuxuryHotel ? lexuryHotel3 : lexuryBed3,
      desc1: isTraditional 
        ? "This project embraces the elegance and warmth of classic architecture, blending timeless materials with modern sensibilities. The focus was to preserve the heritage feel while creating a highly functional and cozy living environment suitable for a contemporary family." 
        : isLuxuryHotel 
          ? "An ambitious project aimed at creating a five-star luxury experience. The design concept revolves around opulence, seamless service flow, and breathtaking aesthetics to provide guests with an unforgettable stay from the moment they enter the lobby." 
          : "This project aims to transform an existing loft apartment into a more spacious and versatile living area, through strategic configuration and design enhancements. The project focuses on optimizing the available space to create an open and inviting environment with better lit rooms.",
      desc2: isTraditional
        ? "I focused on restoring key traditional elements and selecting culturally rich decor, ensuring the space feels both majestic and inviting. Every wooden texture and fabric was curated to maintain historical authenticity."
        : isLuxuryHotel
          ? "My role involved orchestrating a grand interior scheme, selecting premium materials, bespoke furniture, and atmospheric lighting that elevate the guest experience. I collaborated closely with hospitality experts to ensure perfection."
          : "My contributions have been instrumental in shaping the overall vision and design of the project. I oversaw every aspect of design and construction administration.",
      details: {
        area: isTraditional ? "3200 ft²" : isLuxuryHotel ? "15,000 ft²" : "2800 ft²",
        date: isTraditional ? "2023" : isLuxuryHotel ? "2024" : "2022",
        status: isTraditional ? "Completed" : isLuxuryHotel ? "In Progress" : "Under construction",
        tools: "AutoCAD | SketchUp | Coohom | D5 Render"
      },
      labels: {
        label1: isTraditional ? "Classic Living Room" : isLuxuryHotel ? "Grand Lobby" : "Master Bedroom",
        label2: isTraditional ? "Heritage Interior" : isLuxuryHotel ? "Premium Suite" : "Bedroom Interior",
        label3: isTraditional ? "Courtyard View" : isLuxuryHotel ? "Lounge Area" : "Relaxation Area"
      }
    };
  };

  useGSAP(() => {
    // 1. Hero Entrance Timeline
    const tl = gsap.timeline();

    tl.fromTo(heroImageRef.current,
      { opacity: 0, scale: 0.85, x: -40 },
      { opacity: 1, scale: 1, x: 0, duration: 1.4, ease: 'power4.out' }
    );

    tl.fromTo('.hero-text-line',
      { yPercent: 105 },
      { yPercent: 0, duration: 1.2, ease: 'power4.out', stagger: 0.12 },
      '-=1.1'
    );

    tl.fromTo(heroBtnRef.current,
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.7'
    );

    // 2. Scroll-Triggered Reveals for Info Rows
    const rows = gsap.utils.toArray('.scroll-reveal-row');
    rows.forEach((row) => {
      gsap.fromTo(row,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: row,
            start: 'top 85%',
            toggleActions: 'play none none none',
          }
        }
      );
    });

    // 3. Featured Projects Staggered Reveal
    gsap.fromTo('.project-reveal-card',
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.projects-grid',
          start: 'top 85%',
          toggleActions: 'play none none none',
        }
      }
    );

    // 4. Contacts Section Staggered Reveal
    gsap.fromTo('.contacts-reveal-item',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.contacts-section',
          start: 'top 85%',
          toggleActions: 'play none none none',
        }
      }
    );
  }, { scope: containerRef });

  // Modal animations triggered when modal opens/closes
  useGSAP(() => {
    if (activeProjectModal) {
      // Lock body scroll to prevent background movement
      document.body.style.overflow = 'hidden';

      gsap.fromTo(modalRef.current,
        { opacity: 0, scale: 0.96, y: 40 },
        { opacity: 1, scale: 1, y: 0, duration: 0.7, ease: 'power4.out' }
      );

      // Stagger details inside modal
      gsap.fromTo('.modal-stagger-item',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.06, delay: 0.25 }
      );
    } else {
      // Unlock body scroll
      document.body.style.overflow = '';
    }
  }, { dependencies: [activeProjectModal], scope: containerRef });

  // Dedicated buttery-smooth Lenis scroller for the project details modal
  useEffect(() => {
    if (!activeProjectModal || !modalRef.current) return;

    const modalLenis = new Lenis({
      wrapper: modalRef.current,
      lerp: 0.07,
      smoothWheel: true,
      wheelMultiplier: 1.1,
      touchMultiplier: 1.5,
    });

    const updateModalScroll = (time) => {
      modalLenis.raf(time * 1000);
    };

    gsap.ticker.add(updateModalScroll);

    return () => {
      gsap.ticker.remove(updateModalScroll);
      modalLenis.destroy();
    };
  }, [activeProjectModal]);

  const activeProject = activeProjectModal ? getProjectDetails(activeProjectModal) : null;

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col font-sans text-primary relative overflow-x-hidden bg-[#fff6e5]">
      {/* Floating Blueprint Design Object (Layer z-[1]: Strictly behind all text, images, and content) */}
      <FloatingArchitectObject />

      {/* Navigation & Hero */}
      <div id="hero" className="relative z-10 min-h-screen flex flex-col bg-[#fff5d9]/60">
        <Navbar />

        {/* Hero Section */}
        <main className="flex-1 flex flex-col md:flex-row items-center justify-center px-12 md:px-24 py-12 gap-16 md:gap-24 w-full relative z-10">
          {/* Left: Circular Image */}
          <div className="flex-1 flex justify-end relative z-10">
            <div 
              ref={heroImageRef}
              className="w-[300px] h-[300px] md:w-[480px] md:h-[480px] rounded-full overflow-hidden shrink-0 shadow-sm relative z-10"
            >
              <img 
                src={profileImg} 
                alt="Aswinjith" 
                className="w-full h-full object-cover object-top relative z-10"
              />
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="flex-1 flex flex-col items-start max-w-xl relative z-10">
            <h1 className="font-serif text-4xl md:text-5xl leading-[1.2] text-primary/90 relative z-10">
              <span className="block overflow-hidden py-0.5">
                <span className="hero-text-line block">Hi, I'm Aswinjith, an</span>
              </span>
              <span className="block overflow-hidden py-0.5">
                <span className="hero-text-line block">Interior Designer</span>
              </span>
              <span className="block overflow-hidden py-0.5">
                <span className="hero-text-line block">based in Saudi Arabia</span>
              </span>
            </h1>
            
            <div ref={heroBtnRef} className="block mt-10 relative z-10">
              <a 
                href="#contacts" 
                onClick={(e) => {
                  e.preventDefault();
                  lenis?.scrollTo('#contacts', { duration: 1.5 });
                }} 
                ref={magneticHeroBtnRef} 
                className="inline-block relative z-10"
              >
                <button 
                  className="bg-accent text-white px-8 py-3.5 rounded-full text-xs md:text-sm font-semibold tracking-widest uppercase shadow-md hover:bg-accent/90 transition-colors cursor-pointer"
                >
                  Reach Out
                </button>
              </a>
            </div>
          </div>
        </main>
      </div>

      {/* About & Experience Section */}
      <section id="about" className="px-12 md:px-24 py-24 flex flex-col gap-24 w-full max-w-7xl mx-auto relative z-10 border-t border-primary/5">
        {/* About Row */}
        <div className="scroll-reveal-row flex flex-col md:flex-row gap-4 md:gap-32 items-start relative z-10">
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
        <div className="scroll-reveal-row flex flex-col md:flex-row gap-4 md:gap-32 items-start relative z-10">
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

        {/* Technical Skills Row */}
        <div className="scroll-reveal-row flex flex-col md:flex-row gap-4 md:gap-32 items-start relative z-10">
          <div className="md:w-1/3 pt-1">
            <span className="text-sm tracking-widest text-primary/60 uppercase font-semibold flex items-center gap-4">
              <span className="w-6 md:w-8 h-[1px] bg-primary/40 block"></span>
              Technical Skills
            </span>
          </div>
          <div className="md:w-2/3">
            <p className="font-serif text-[18px] text-primary/70 leading-relaxed max-w-2xl">
              AutoCAD | SketchUp | Lumion | Enscape | 3ds Max | V-Ray | Photoshop | Coohom | D5 Render | MS Office
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-24 px-12 md:px-24 bg-[#fff6e5]/60 relative z-10 border-t border-primary/5">
        <div className="w-full max-w-7xl mx-auto relative z-10">
          <h2 className="font-serif text-3xl md:text-4xl text-primary/90 mb-10">
            Featured Projects
          </h2>
          <p className="text-primary/70 leading-loose max-w-2xl font-serif text-[18px] mb-16">
            Each project in my portfolio is a testament to my attention to detail, 
            creativity, and ability to translate the client's vision into a beautiful and 
            practical reality. Click on any card to view detailed blueprints and results.
          </p>

          <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start relative z-10">
            
            {/* Project Card 1 */}
            <div 
              className="project-reveal-card group cursor-pointer block relative z-10"
              onClick={() => setActiveProjectModal('Simple & Luxury Bedroom')}
            >
              <div className="overflow-hidden shadow-sm group-hover:shadow-xl transition-shadow duration-500 mb-6 rounded-sm relative z-10">
                <img 
                  src={simpleAndLexuryBedRoom} 
                  alt="Simple and Luxury Bedroom" 
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700 ease-out relative z-10" 
                />
              </div>
              <h3 className="font-serif text-2xl text-primary/90 mb-3 group-hover:text-accent transition-colors">Simple & Luxury Bedroom</h3>
              <p className="font-serif text-primary/70 leading-relaxed text-[16px]">
                A perfect blend of simplicity and luxury, designed to offer comfort and elegance in a serene bedroom setting.
              </p>
            </div>
            
            {/* Project Card 2 */}
            <div 
              className="project-reveal-card group cursor-pointer block md:mt-12 lg:mt-0 relative z-10"
              onClick={() => setActiveProjectModal('Traditional Home')}
            >
              <div className="overflow-hidden shadow-sm group-hover:shadow-xl transition-shadow duration-500 mb-6 rounded-sm relative z-10">
                <img 
                  src={traditionalHome} 
                  alt="Traditional Home" 
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700 ease-out relative z-10" 
                />
              </div>
              <h3 className="font-serif text-2xl text-primary/90 mb-3 group-hover:text-accent transition-colors">Traditional Home</h3>
              <p className="font-serif text-primary/70 leading-relaxed text-[16px]">
                A classic interior design that preserves traditional aesthetics while integrating modern comforts seamlessly.
              </p>
            </div>
            
            {/* Project Card 3 */}
            <div 
              className="project-reveal-card group cursor-pointer block relative z-10"
              onClick={() => setActiveProjectModal('Luxury Hotel')}
            >
              <div className="overflow-hidden shadow-sm group-hover:shadow-xl transition-shadow duration-500 mb-6 rounded-sm relative z-10">
                <img 
                  src={lexuryHotel} 
                  alt="Luxury Hotel" 
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700 ease-out relative z-10" 
                />
              </div>
              <h3 className="font-serif text-2xl text-primary/90 mb-3 group-hover:text-accent transition-colors">Luxury Hotel</h3>
              <p className="font-serif text-primary/70 leading-relaxed text-[16px]">
                A grand and opulent hotel interior, crafted to provide guests with an unforgettable and premium experience.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Renderings Intro */}
      <div id="gallery" className="w-full bg-gradient-to-t from-[#ffecb8]/40 to-transparent relative z-10 border-t border-primary/5">
        <section className="px-12 md:px-24 py-16 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative z-10">
          <div className="max-w-2xl relative z-10">
            <span className="text-sm tracking-widest text-primary/60 uppercase font-semibold flex items-center gap-4 mb-6">
              <span className="w-8 md:w-12 h-[1px] bg-primary/40 block"></span>
              3D Visualizations
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-primary/90 leading-[1.2]">
              Conceptual Renderings &<br className="hidden md:block" /> Digital Realities
            </h2>
          </div>
          <div className="max-w-md relative z-10">
            <p className="font-serif text-primary/70 leading-relaxed text-[17px]">
              A curated selection of high-fidelity 3D renders. These digital visualizations explore spatial concepts, materials, and lighting before they are brought to life.
            </p>
          </div>
        </section>
      </div>

      {/* Renderings Grid (Original Clean Style - Layer z-10: Behind images/cards) */}
      <div className="w-full bg-gradient-to-b from-[#ffecb8]/40 to-transparent relative z-10 pb-24">
        <section className="px-12 md:px-24 w-full max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-start relative z-10">
            <div 
              className="w-full overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer rounded-sm relative z-10 bg-black/5"
              onClick={() => setSelectedImage(highlight1)}
            >
              <img 
                src={highlight1} 
                alt="Portfolio Highlight 1" 
                className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-700 ease-out relative z-10" 
              />
            </div>
            
            <div 
              className="w-full overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer lg:mt-8 rounded-sm relative z-10 bg-black/5"
              onClick={() => setSelectedImage(highlight2)}
            >
              <img 
                src={highlight2} 
                alt="Portfolio Highlight 2" 
                className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-700 ease-out relative z-10" 
              />
            </div>
            
            <div 
              className="w-full overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer rounded-sm relative z-10 bg-black/5"
              onClick={() => setSelectedImage(highlight3)}
            >
              <img 
                src={highlight3} 
                alt="Portfolio Highlight 3" 
                className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-700 ease-out relative z-10" 
              />
            </div>
            
            <div 
              className="w-full overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer lg:mt-8 rounded-sm relative z-10 bg-black/5"
              onClick={() => setSelectedImage(highlight4)}
            >
              <img 
                src={highlight4} 
                alt="Portfolio Highlight 4" 
                className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-700 ease-out relative z-10" 
              />
            </div>
          </div>
        </section>
      </div>

      {/* Contacts Section */}
      <section id="contacts" className="contacts-section px-12 md:px-24 py-24 bg-[#fff5d9]/60 relative z-10 border-t border-primary/5">
        <div className="w-full max-w-7xl mx-auto relative z-10">
          <h2 className="contacts-reveal-item font-serif text-3xl md:text-5xl text-primary/90 leading-[1.2] mb-16">
            Contact me here
          </h2>
          
          <div className="flex flex-col md:flex-row gap-16 md:gap-24 relative z-10">
            {/* Left Column */}
            <div className="flex-1 flex flex-col gap-8 relative z-10">
              <p className="contacts-reveal-item font-serif text-[18px] md:text-[20px] text-primary/90 leading-relaxed">
                If you are interested in learning more about my work, discussing a potential project, or have any questions or comments, please feel free to contact me using the following information:
              </p>
              <div className="contacts-reveal-item font-serif text-[18px] md:text-[20px] text-primary/90 leading-relaxed font-semibold">
                <p>Tel.: +966 56 575 9456</p>
                <p>Email: aswinjithkp0408@gmail.com</p>
              </div>
              <p className="contacts-reveal-item font-serif text-[18px] md:text-[20px] text-primary/90 leading-relaxed">
                I look forward to hearing from you and the opportunity to collaborate on your next project.
              </p>
            </div>

            {/* Right Column */}
            <div className="flex-1 w-full max-w-xl relative z-10">
              <form className="flex flex-col gap-6 relative z-10">
                <div className="contacts-reveal-item flex flex-col gap-2">
                  <label className="text-primary/70 font-serif text-[15px]">Name*</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name" 
                    className="bg-[#f0eadd] px-4 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-primary/20 w-full placeholder:text-primary/40 font-serif"
                  />
                </div>
                <div className="contacts-reveal-item flex flex-col gap-2">
                  <label className="text-primary/70 font-serif text-[15px]">Email*</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@email.com" 
                    className="bg-[#f0eadd] px-4 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-primary/20 w-full placeholder:text-primary/40 font-serif"
                  />
                </div>
                <div className="contacts-reveal-item flex flex-col gap-2">
                  <label className="text-primary/70 font-serif text-[15px]">Message*</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Start typing your message here..." 
                    rows="6"
                    className="bg-[#f0eadd] px-4 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-primary/20 w-full placeholder:text-primary/40 resize-none font-serif"
                  ></textarea>
                </div>
                
                <div className="contacts-reveal-item flex flex-wrap items-center gap-4 mt-4 relative z-10">
                  <button 
                    ref={magneticMailBtnRef}
                    type="button" 
                    onClick={handleSendMail}
                    className="bg-accent text-white px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider shadow-md hover:bg-accent/90 transition-colors cursor-pointer"
                  >
                    SEND MAIL
                  </button>
                  
                  <div className="flex items-center gap-3 relative z-10">
                    <a 
                      ref={magneticWaBtnRef}
                      href="https://wa.me/966565759456" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-[#25D366] text-white shadow-md hover:bg-[#20ba59] transition-colors flex items-center justify-center cursor-pointer"
                      title="Chat on WhatsApp"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-7.6 8.38 8.38 0 0 1 3.8.9h.5a4.48 4.48 0 0 0 4.48-4.48v.5z"/>
                        <path d="M17.4 6.6c.2.2.5.2.7 0l1.2-1.2c.2-.2.2-.5 0-.7l-.1-.1c-.4-.4-1-.4-1.4 0l-.4.4z"/>
                      </svg>
                    </a>
                    <a 
                      ref={magneticInstaBtnRef}
                      href="https://www.instagram.com/__.aswin._.04.__?igsh=MXRsMG0xdHBpaHE1cw==" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] text-white shadow-md hover:brightness-110 transition-colors flex items-center justify-center cursor-pointer"
                      title="Follow on Instagram"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />

      {/* Full Screen Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[300] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full px-4 md:px-12 flex justify-center items-center">
            <button 
              className="absolute top-4 right-4 md:right-12 text-white/70 hover:text-white transition-colors p-2 cursor-pointer"
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

      {/* Project Details Modal (Single-Page Showcase Overlay with dedicated buttery-smooth Lenis scroller) */}
      {activeProjectModal && activeProject && (
        <div 
          ref={modalRef}
          data-lenis-prevent
          className="fixed inset-0 z-[200] bg-[#fff6e5] overflow-y-auto px-12 md:px-24 py-16"
        >
          <div className="w-full max-w-7xl mx-auto relative min-h-full">
            {/* Close Button */}
            <button 
              onClick={() => setActiveProjectModal(null)}
              className="absolute top-0 right-0 p-3 bg-primary/5 hover:bg-primary/10 text-primary/80 hover:text-primary rounded-full transition-colors cursor-pointer z-50 flex items-center justify-center"
              aria-label="Close details"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Main Title */}
            <h2 className="modal-stagger-item font-serif text-4xl md:text-5xl text-primary/90 mb-20 pr-16">
              {activeProject.title}
            </h2>

            {/* Project Details Section */}
            <div className="flex flex-col md:flex-row gap-12 md:gap-24 mb-24">
              <div className="w-full md:w-1/3">
                <h3 className="modal-stagger-item font-serif text-2xl md:text-3xl text-primary/90">Project details</h3>
              </div>
              
              <div className="w-full md:w-2/3">
                <p className="modal-stagger-item text-primary/70 leading-relaxed font-serif text-[17px] mb-6">
                  {activeProject.desc1}
                </p>
                <p className="modal-stagger-item text-primary/70 leading-relaxed font-serif text-[17px] mb-12">
                  {activeProject.desc2}
                </p>
                
                <div className="modal-stagger-item grid grid-cols-2 gap-y-6 text-primary/70 font-serif text-[17px]">
                  <div className="font-semibold">Area of site</div>
                  <div>{activeProject.details.area}</div>
                  
                  <div className="font-semibold">Date</div>
                  <div>{activeProject.details.date}</div>
                  
                  <div className="font-semibold">Status of the project</div>
                  <div>{activeProject.details.status}</div>
                  
                  <div className="font-semibold">Tools used</div>
                  <div>{activeProject.details.tools}</div>
                </div>
              </div>
            </div>

            {/* Design Plans Section */}
            <div className="mb-24">
              <h3 className="modal-stagger-item font-serif text-2xl md:text-3xl text-primary/90 mb-12">Design plans</h3>
              
              <div className="modal-stagger-item flex flex-col md:flex-row gap-8 items-stretch">
                {/* Left Blueprint */}
                <div className="w-full md:w-1/2 min-h-[350px] bg-white flex items-center justify-center text-gray-400 font-serif border border-gray-100 shadow-sm overflow-hidden relative">
                  <img 
                    src={activeProject.planImg} 
                    alt="Blueprint" 
                    className="w-full h-full object-cover absolute inset-0 cursor-pointer hover:scale-105 transition-transform duration-700" 
                    onClick={() => setSelectedImage(activeProject.planImg)}
                  />
                </div>
                
                {/* Right Collage */}
                <div className="w-full md:w-1/2 relative min-h-[350px] md:min-h-[450px]">
                  {/* Top right image */}
                  <div className="absolute top-0 right-0 w-[65%] h-[60%] bg-[#e8e8e8] flex items-center justify-center text-gray-500 text-sm overflow-hidden shadow-sm">
                    <img 
                      src={activeProject.interiorImg1} 
                      alt="Interior" 
                      className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-700" 
                      onClick={() => setSelectedImage(activeProject.interiorImg1)}
                    />
                  </div>
                  
                  {/* Bottom left image */}
                  <div className="absolute bottom-16 left-0 w-[60%] h-[50%] bg-[#dcdcdc] flex items-center justify-center text-gray-500 text-sm overflow-hidden shadow-sm z-10">
                    <img 
                      src={activeProject.interiorImg2} 
                      alt="Interior Details" 
                      className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-700" 
                      onClick={() => setSelectedImage(activeProject.interiorImg2)}
                    />
                  </div>

                  {/* Color Palette */}
                  <div className="absolute bottom-0 right-0 flex gap-2 z-20">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-[#16151b]"></div>
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-[#766360]"></div>
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-[#d1b39e]"></div>
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-[#557252]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="mb-16">
              <h3 className="modal-stagger-item font-serif text-2xl md:text-3xl text-primary/90 mb-12">Results</h3>
              
              <div className="modal-stagger-item grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                {/* Result Image 1 */}
                <div className="w-full">
                  <div className="w-full aspect-[3/4] bg-[#e8e8e8] overflow-hidden mb-4 shadow-sm">
                    <img 
                      src={activeProject.resultImg1} 
                      alt={activeProject.labels.label1} 
                      className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-700" 
                      onClick={() => setSelectedImage(activeProject.resultImg1)}
                    />
                  </div>
                  <span className="font-serif text-primary/70 text-[16px]">{activeProject.labels.label1}</span>
                </div>

                {/* Result Image 2 */}
                <div className="w-full">
                  <div className="w-full aspect-[2/3] bg-[#dcdcdc] overflow-hidden mb-4 shadow-sm">
                    <img 
                      src={activeProject.resultImg2} 
                      alt={activeProject.labels.label2} 
                      className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-700" 
                      onClick={() => setSelectedImage(activeProject.resultImg2)}
                    />
                  </div>
                  <span className="font-serif text-primary/70 text-[16px]">{activeProject.labels.label2}</span>
                </div>

                {/* Result Image 3 */}
                <div className="w-full">
                  <div className="w-full aspect-[4/3] bg-[#e8e8e8] overflow-hidden mb-4 shadow-sm">
                    <img 
                      src={activeProject.resultImg3} 
                      alt={activeProject.labels.label3} 
                      className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-700" 
                      onClick={() => setSelectedImage(activeProject.resultImg3)}
                    />
                  </div>
                  <span className="font-serif text-primary/70 text-[16px]">{activeProject.labels.label3}</span>
                </div>
              </div>
            </div>

            {/* Back Button */}
            <div className="modal-stagger-item flex justify-center mt-16">
              <button 
                onClick={() => setActiveProjectModal(null)}
                className="bg-primary text-[#fff6e5] px-10 py-3.5 rounded-full text-xs md:text-sm font-semibold tracking-widest uppercase shadow-md hover:bg-primary/95 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                Back to Portfolio
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
