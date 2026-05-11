import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import lexuryBedRoomLightPNG from '../assets/lexuryBedRoomLightPNG.png';
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

export default function ProjectDetails() {
  const { id } = useParams();

  const title = id ? decodeURIComponent(id) : "Modern loft";
  const isTraditional = title === "Traditional Home";
  const isLuxuryHotel = title === "Luxury Hotel";

  // Upper Area Images
  const planImg = isTraditional ? traditionalHomeInterior1 : isLuxuryHotel ? lexuryHotelInterior1 : lexuryBedRoomPlan;
  const interiorImg1 = isTraditional ? traditionalHomeInterior2 : isLuxuryHotel ? lexuryHotelInterior2 : lexuryBedRoomInterior;
  const interiorImg2 = isTraditional ? traditionalHomeInterior3 : isLuxuryHotel ? lexuryHotelInterior3 : lexuryBedRoomInterior2;
  const showLightPNG = (!isTraditional && !isLuxuryHotel);

  // Lower Area Images
  const resultImg1 = isTraditional ? traditionalHome1 : isLuxuryHotel ? lexuryHotel1 : lexuryBed1;
  const resultImg2 = isTraditional ? traditionalHome2 : isLuxuryHotel ? lexuryHotel2 : lexuryBed2;
  const resultImg3 = isTraditional ? traditionalHome3 : isLuxuryHotel ? lexuryHotel3 : lexuryBed3;

  // Text Content
  const projectDescription1 = isTraditional 
    ? "This project embraces the elegance and warmth of classic architecture, blending timeless materials with modern sensibilities. The focus was to preserve the heritage feel while creating a highly functional and cozy living environment suitable for a contemporary family." 
    : isLuxuryHotel 
      ? "An ambitious project aimed at creating a five-star luxury experience. The design concept revolves around opulence, seamless service flow, and breathtaking aesthetics to provide guests with an unforgettable stay from the moment they enter the lobby." 
      : "This project aims to transform an existing loft apartment into a more spacious and versatile living area, through strategic configuration and design enhancements. The project focuses on optimizing the available space to create an open and inviting environment with better lit rooms.";

  const projectDescription2 = isTraditional
    ? "I focused on restoring key traditional elements and selecting culturally rich decor, ensuring the space feels both majestic and inviting. Every wooden texture and fabric was curated to maintain historical authenticity."
    : isLuxuryHotel
      ? "My role involved orchestrating a grand interior scheme, selecting premium materials, bespoke furniture, and atmospheric lighting that elevate the guest experience. I collaborated closely with hospitality experts to ensure perfection."
      : "My contributions have been instrumental in shaping the overall vision and design of the project. I oversaw every aspect of design and construction administration.";

  const projectDetails = {
    area: isTraditional ? "3200 ft²" : isLuxuryHotel ? "15,000 ft²" : "2800 ft²",
    date: isTraditional ? "2023" : isLuxuryHotel ? "2024" : "2022",
    status: isTraditional ? "Completed" : isLuxuryHotel ? "In Progress" : "Under construction",
    tools: "AutoCAD | SketchUp | Coohom | D5 Render"
  };

  const resultLabels = {
    label1: isTraditional ? "Classic Living Room" : isLuxuryHotel ? "Grand Lobby" : "Master Bedroom",
    label2: isTraditional ? "Heritage Interior" : isLuxuryHotel ? "Premium Suite" : "Bedroom Interior",
    label3: isTraditional ? "Courtyard View" : isLuxuryHotel ? "Lounge Area" : "Relaxation Area"
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-primary">
      {/* Top Navbar Section */}
      <div className='bg-[#fff6e5]'>
        <Navbar />
      </div>

      <div className="flex-1 bg-[#fff6e5]">
        <div className="px-12 md:px-24 py-16 w-full max-w-7xl mx-auto">
          {/* Main Title */}
          <h1 className="font-serif text-5xl md:text-6xl text-primary/90 mb-24 mt-8">
            {title}
          </h1>

          {/* Project Details Section */}
          <div className="flex flex-col md:flex-row gap-12 md:gap-24 mb-32">
            <div className="w-full md:w-1/3">
              <h2 className="font-serif text-3xl text-primary/90">Project details</h2>
            </div>
            
            <div className="w-full md:w-2/3">
              <p className="text-primary/70 leading-relaxed font-serif text-[17px] mb-6">
                {projectDescription1}
              </p>
              <p className="text-primary/70 leading-relaxed font-serif text-[17px] mb-12">
                {projectDescription2}
              </p>
              
              <div className="grid grid-cols-2 gap-y-6 text-primary/70 font-serif text-[17px]">
                <div>Area of site</div>
                <div>{projectDetails.area}</div>
                
                <div>Date</div>
                <div>{projectDetails.date}</div>
                
                <div>Status of the project</div>
                <div>{projectDetails.status}</div>
                
                <div>Tools used</div>
                <div>{projectDetails.tools}</div>
              </div>
            </div>
          </div>

          {/* Design Plans Section */}
          <div className="mb-24">
            <h2 className="font-serif text-3xl text-primary/90 mb-16">Design plans</h2>
            
            <div className="flex flex-col md:flex-row gap-8 items-stretch">
              {/* Left Blueprint */}
              <div className="w-full md:w-1/2 min-h-[400px] bg-white flex items-center justify-center text-gray-400 font-serif border border-gray-100 shadow-sm overflow-hidden relative">
                <img src={planImg} alt="Blueprint" className="w-full h-full object-cover absolute inset-0" />
              </div>
              
              {/* Right Collage */}
              <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-[500px]">
                {/* Top right image (Interior/Plants) */}
                <div className="absolute top-0 right-0 w-[65%] h-[60%] bg-[#e8e8e8] flex items-center justify-center text-gray-500 text-sm overflow-hidden shadow-sm">
                  <img src={interiorImg1} alt="Interior" className="w-full h-full object-cover" />
                </div>
                
                {/* Bottom left image (Kitchen/Counter) */}
                <div className="absolute bottom-16 left-0 w-[60%] h-[50%] bg-[#dcdcdc] flex items-center justify-center text-gray-500 text-sm overflow-hidden shadow-sm z-10">
                  <img src={interiorImg2} alt="Interior Details" className="w-full h-full object-cover" />
                </div>

                {/* Middle overlapping transparent image (Table/Light) */}
                {showLightPNG && (
                  <div className="absolute top-[20%] left-[5%] w-[90%] h-[50%] flex items-center justify-center z-30">
                    <img src={lexuryBedRoomLightPNG} alt="Light Details" className="w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" style={{ filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.3))' }} />
                  </div>
                )}

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
          <div className="mb-32">
            <h2 className="font-serif text-3xl text-primary/90 mb-16">Results</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              {/* Result Image 1 */}
              <div className="w-full">
                <div className="w-full aspect-[3/4] bg-[#e8e8e8] flex items-center justify-center text-gray-500 text-sm overflow-hidden mb-4 shadow-sm">
                  <img src={resultImg1} alt="Master Bedroom" className="w-full h-full object-cover" />
                </div>
                <span className="font-serif text-primary/70 text-[17px]">{resultLabels.label1}</span>
              </div>

              {/* Result Image 2 */}
              <div className="w-full">
                <div className="w-full aspect-[2/3] bg-[#dcdcdc] flex items-center justify-center text-gray-500 text-sm overflow-hidden mb-4 shadow-sm">
                  <img src={resultImg2} alt="Bedroom Interior" className="w-full h-full object-cover" />
                </div>
                <span className="font-serif text-primary/70 text-[17px]">{resultLabels.label2}</span>
              </div>

              {/* Result Image 3 */}
              <div className="w-full">
                <div className="w-full aspect-[4/3] bg-[#e8e8e8] flex items-center justify-center text-gray-500 text-sm overflow-hidden mb-4 shadow-sm">
                  <img src={resultImg3} alt="Relaxation Area" className="w-full h-full object-cover" />
                </div>
                <span className="font-serif text-primary/70 text-[17px]">{resultLabels.label3}</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
