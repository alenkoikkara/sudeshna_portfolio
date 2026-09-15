import React from 'react';
import sudeshnaPolaroid from '../../assets/about/sudeshna-polaroid.png';

const SECTION_STYLE = {
  height: '100svh',
  width: '100%',
  position: 'relative',
};

export default function AboutSection() {
  return (
    <section id="about" className="scroll-section" style={SECTION_STYLE}>
      <div
        className="section-content w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center px-6 md:px-12 lg:px-24"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'auto',
          width: '100%',
        }}
      >
        {/* Left Column: Visuals */}
        <div style={{ opacity: 0 }} className="relative flex flex-col items-center md:items-end w-full">
          {/* Polaroid Image Placeholder */}
          <div className="w-full max-w-90 bg-[#fdfdfd] p-4 pb-20 shadow-[0_20px_40px_rgba(0,0,0,0.15),0_0_2px_rgba(0,0,0,0.1)] transform -rotate-3 z-10 relative">

            {/* Glossy Photo Area (Standard Polaroid 1:1) */}
            <div className="w-full aspect-square bg-linear-to-br from-gray-700 to-gray-900 shadow-[inset_0_0_15px_rgba(0,0,0,0.8)] relative overflow-hidden flex items-center justify-center">
              {/* Fake glossy reflection */}
              <div className="absolute inset-0 bg-linear-to-tr from-transparent via-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.15)] pointer-events-none"></div>

              <img src={sudeshnaPolaroid} alt="Sudeshna" className="w-full h-full object-cover scale-[1.4] object-[center_20%] z-0" />
            </div>

            {/* Polaroid Caption */}
            <div className="absolute bottom-6 left-0 w-full text-center">
              <span style={{ fontFamily: "'Comic Sans MS', 'Comic Sans', cursive" }} className="text-gray-700 text-xl font-medium opacity-90 transform -rotate-2 inline-block">
                hello world!
              </span>
            </div>
          </div>

          {/* Apple Notes Card (Yellow Variant) */}
          <div className="w-75 h-75 bg-[#fef3c7] rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.15),0_0_1px_rgba(0,0,0,0.2)] -mt-12 md:-mr-12 z-20 relative flex flex-col justify-start border border-[#fde68a]">

            {/* Lined Paper Background (Apple Notes Style) */}
            <div className="absolute inset-0 pointer-events-none rounded-2xl overflow-hidden"
              style={{
                backgroundSize: '100% 28px',
                backgroundImage: 'linear-gradient(transparent 27px, rgba(0,0,0,0.06) 27px, rgba(0,0,0,0.06) 28px)',
                backgroundPosition: '0 52px' // offset so lines start below the date
              }}>
              {/* Subtle Texture */}
              <div className="absolute inset-0 mix-blend-multiply opacity-[0.1]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
            </div>

            {/* Graphical Push Pin */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-30">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="filter drop-shadow-[0_3px_3px_rgba(0,0,0,0.25)] transform rotate-15">
                <line x1="12" y1="17" x2="12" y2="23.5" stroke="#64748b" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z" fill="#ef4444" stroke="#991b1b" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M10 6a2 2 0 0 1 2-2" stroke="#fca5a5" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>

            {/* Content */}
            <div className="relative z-10 px-6 pt-5 pb-6 flex flex-col h-full text-left">
              {/* Date Header */}
              <div className="text-center mb-3">
                <span className="text-caption font-medium text-[rgba(0,0,0,0.4)] font-sans tracking-wide">August 29, 2026 at 2:28 PM</span>
              </div>

              {/* Body text aligned with lines (line-height 28px) */}
              <div style={{ fontFamily: "'Comic Sans MS', 'Comic Sans', cursive" }} className="text-[19px] leading-7 text-gray-800 font-normal">
                <p className="font-bold">UI/UX Designer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Text */}
        <div style={{ opacity: 0 }} className="flex flex-col justify-center max-w-lg pt-12 md:pt-0 text-left">
          <h2 className="text-xl md:text-2xl font-medium text-gray-800 mb-8">Building for the whole user.</h2>

          <div className="space-y-6 text-base md:text-lg text-gray-700 font-medium">
            <p>
              I like starting with a question, not a screen, who's using this, what they need to do, and where it's currently falling apart for them? Design, to me, is less about making something look good and more about making it make sense: the flow feels obvious, the friction disappears, the thing just works.
            </p>
            <p>
              I do my best thinking out loud sketching early, testing rough ideas before they're precious, and letting real feedback shape the direction. I'm drawn to teams that treat design as a way of thinking through a problem together, not a coat of paint at the end.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
