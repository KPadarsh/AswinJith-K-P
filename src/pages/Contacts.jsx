import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingArchitectObject from '../components/FloatingArchitectObject';
import useMagnetic from '../hooks/useMagnetic';

export default function Contacts() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const magneticMailBtnRef = useMagnetic();
  const magneticWaBtnRef = useMagnetic();
  const magneticInstaBtnRef = useMagnetic();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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

  useGSAP(() => {
    // 1. Entrance timeline
    const tl = gsap.timeline();

    tl.fromTo(titleRef.current,
      { opacity: 0, y: 35 },
      { opacity: 1, y: 0, duration: 1.0, ease: 'power4.out' }
    );

    tl.fromTo('.contacts-left-item',
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', stagger: 0.15 },
      '-=0.6'
    );

    tl.fromTo('.contacts-form-item',
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1 },
      '-=0.8'
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col font-sans text-primary relative">
      {/* Floating Blueprint Design Object */}
      <FloatingArchitectObject />

      {/* Navigation */}
      <div className="bg-[#fff5d9] relative z-10">
        <Navbar />
      </div>

      <main className="flex-1 w-full max-w-7xl mx-auto px-12 md:px-24 py-16 md:py-24 overflow-hidden relative z-10">
        <h1 
          ref={titleRef}
          className="font-serif text-3xl md:text-5xl text-primary/90 leading-[1.2] mb-16"
        >
          Contact me here
        </h1>
        
        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
          {/* Left Column */}
          <div className="flex-1 flex flex-col gap-8">
            <p className="contacts-left-item font-serif text-[18px] md:text-[20px] text-primary/90 leading-relaxed">
              If you are interested in learning more about my work, discussing a potential project, or have any questions or comments, please feel free to contact me using the following information:
            </p>
            <div className="contacts-left-item font-serif text-[18px] md:text-[20px] text-primary/90 leading-relaxed">
              <p>Tel.: +966 56 575 9456</p>
              <p>Email: aswinjithkp0408@gmail.com</p>
            </div>
            <p className="contacts-left-item font-serif text-[18px] md:text-[20px] text-primary/90 leading-relaxed">
              I look forward to hearing from you and the opportunity to collaborate on your next project.
            </p>
          </div>

          {/* Right Column */}
          <div className="flex-1 w-full max-w-xl">
            <form className="flex flex-col gap-6">
              <div className="contacts-form-item flex flex-col gap-2">
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
              <div className="contacts-form-item flex flex-col gap-2">
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
              <div className="contacts-form-item flex flex-col gap-2">
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
              
              <div className="contacts-form-item flex flex-wrap items-center gap-4 mt-4">
                <button 
                  ref={magneticMailBtnRef}
                  type="button" 
                  onClick={handleSendMail}
                  className="bg-accent text-white px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider shadow-md hover:bg-accent/90 transition-colors cursor-pointer"
                >
                  SEND MAIL
                </button>
                
                <div className="flex items-center gap-3">
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
                    className="p-3 rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] text-white shadow-md hover:brightness-110 transition-all flex items-center justify-center cursor-pointer"
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
      </main>
      
      <Footer />
    </div>
  );
}
