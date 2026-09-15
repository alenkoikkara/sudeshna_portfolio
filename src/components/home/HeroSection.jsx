import React from 'react';
import { useIsMobile } from '../../hooks/useIsMobile';

const SECTION_STYLE = {
  height: '100svh',
  width: '100%',
  position: 'relative',
};

export default function HeroSection() {
  const isMobile = useIsMobile();
  
  const sectionStyle = isMobile ? {
    width: '100%',
    position: 'relative',
    padding: '6rem 1.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '60svh',
  } : {
    height: '100svh',
    width: '100%',
    position: 'relative',
  };

  return (
    <section id="home" className="scroll-section" style={sectionStyle}>
      <div
        className="section-content"
        style={isMobile ? {
          display: 'flex',
          flexDirection: 'column',
          gap: '0',
          pointerEvents: 'none',
          width: '100%',
          maxWidth: '520px',
        } : {
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
          opacity: isMobile ? 1 : 0,
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
