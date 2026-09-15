import React from 'react';

const SECTION_STYLE = {
  height: '100svh',
  width: '100%',
  position: 'relative',
};

export default function HeroSection() {
  return (
    <section id="home" className="scroll-section" style={SECTION_STYLE}>
      <div
        className="section-content"
        style={{
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          left: 'clamp(2rem, 8vw, 6rem)',
          maxWidth: '520px',
          display: 'flex',
          flexDirection: 'column',
          gap: '0',
          pointerEvents: 'none',
        }}
      >
        <p style={{
          opacity: 0,
          margin: 0,
          fontSize: 'clamp(1.5rem, 2.6vw, 3rem)',
          fontWeight: 700,
          color: '#111118',
          lineHeight: 1.18,
          letterSpacing: '-0.025em',
        }}>
          I am a story teller,<br />
          blending visual design<br />
          &amp; strategy.
        </p>
      </div>
    </section>
  );
}
