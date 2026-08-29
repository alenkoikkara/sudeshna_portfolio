import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ReactLenis } from 'lenis/react';
import './CaseStudyShell.css';

gsap.registerPlugin(ScrollTrigger);

export default function CaseStudyShell({ 
  projectType, 
  projectName, 
  promiseLine, 
  metaStrip, // { label, value }
  heroVisual, // string (url)
  sections, // Array of { id: '01', title: 'About Project' }
  nextCase, // { url: '/work/PetClear', name: 'PetClear', promise: '...' }
  prevCase, // { url: '/work/ReturnLoop', name: 'ReturnLoop', promise: '...' }
  children 
}) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || '');

  // Scrollspy logic
  useEffect(() => {
    const handleScroll = () => {
      const sectionEls = document.querySelectorAll('.cs-section');
      let current = activeSection;
      
      sectionEls.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 200 && rect.bottom >= 200) {
          current = el.getAttribute('data-id');
        }
      });
      
      if (current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  // Lenis elastic scroll
  const lenisRef = useRef(null);
  const handleNavClick = (e, id) => {
    e.preventDefault();
    if (lenisRef.current?.lenis) {
      lenisRef.current.lenis.scrollTo(`#sec-${id}`, {
        offset: -100, // accommodate some top spacing
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Elastic/smooth out
      });
    } else {
      document.getElementById(`sec-${id}`)?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  // Calculate progress %
  const activeIdx = sections.findIndex(s => s.id === activeSection);
  const progressPercent = sections.length > 1 ? (activeIdx / (sections.length - 1)) * 100 : 0;

  return (
    <ReactLenis root ref={lenisRef}>
      <div style={{ background: '#fafafa', minHeight: '100vh', color: '#111118', fontFamily: 'var(--font-sans)' }}>
      
      {/* ── Top Bar / Navigation ────────────────────────────────────────────── */}
      <div style={{ position: 'absolute', top: '40px', left: 'clamp(1.5rem, 5vw, 3rem)', zIndex: 100 }}>
        <Link to="/home" style={{ fontSize: '0.85rem', fontWeight: 500, color: '#111118', textDecoration: 'none', letterSpacing: '0.005em' }}>
          &larr; Back to work
        </Link>
      </div>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <div className="cs-hero" style={{ maxWidth: '1080px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
          <span style={{ fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.005em', textTransform: 'uppercase', color: 'rgba(17,17,24,0.5)' }}>
            {projectType}
          </span>
          <h1 style={{ margin: 0, fontWeight: 700, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1.08, letterSpacing: '-0.025em', color: '#111118' }}>
            {projectName}
          </h1>
          <p style={{ margin: 0, fontSize: '1.25rem', lineHeight: 1.62, color: 'rgba(17,17,24,0.7)', maxWidth: '720px' }}>
            {promiseLine}
          </p>
        </div>

        {/* Meta Strip */}
        <div className="cs-meta-strip">
          {metaStrip.map((meta, i) => (
            <div key={i} style={{ background: '#fafafa', padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span style={{ fontSize: '0.75rem', letterSpacing: '0.04em', textTransform: 'uppercase', color: 'rgba(17,17,24,0.5)', fontWeight: 500 }}>{meta.label}</span>
              <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#111118' }}>{meta.value}</span>
            </div>
          ))}
        </div>

        {/* Key Visual */}
        <div style={{ width: '100%', aspectRatio: '16/9', background: '#f0f0f0', borderRadius: '8px', overflow: 'hidden' }}>
          <img src={heroVisual} alt={`${projectName} Hero`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>

      {/* ── Body Grid ──────────────────────────────────────────── */}
      <div className="cs-body-grid">
        
        {/* Section Rail */}
        <div className="cs-left-rail">
          <div style={{ width: '160px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {sections.map((sec) => (
              <a 
                key={sec.id}
                href={`#sec-${sec.id}`}
                onClick={(e) => handleNavClick(e, sec.id)}
                style={{
                  display: 'inline-block',
                  fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.005em', textTransform: 'uppercase', textDecoration: 'none',
                  color: activeSection === sec.id ? '#111118' : 'rgba(17,17,24,0.3)',
                  cursor: 'pointer'
                }}
              >
                {sec.title}
              </a>
            ))}
          </div>
        </div>

        {/* Content Slot */}
        <div className="cs-content-slot">
          {children}
        </div>

        {/* Right gutter */}
        <div />
      </div>

      {/* ── Footer ─────────────────────────────────────────────── */}
      <div className="cs-footer">
        <Link to={prevCase.url} className="cs-footer-link" style={{ background: '#fafafa', textDecoration: 'none', color: '#111118', display: 'flex', flexDirection: 'column', gap: '12px' }} onMouseEnter={e => e.currentTarget.style.background = '#f0f0f5'} onMouseLeave={e => e.currentTarget.style.background = '#fafafa'}>
          <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.005em', color: 'rgba(17,17,24,0.5)', fontWeight: 500 }}>&larr; Previous Case</span>
          <span style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.02em' }}>{prevCase.name}</span>
          <span style={{ fontSize: '1rem', color: 'rgba(17,17,24,0.7)' }}>{prevCase.promise}</span>
        </Link>
        <Link to={nextCase.url} className="cs-footer-link cs-footer-link-right" style={{ background: '#fafafa', textDecoration: 'none', color: '#111118', display: 'flex', flexDirection: 'column', gap: '12px' }} onMouseEnter={e => e.currentTarget.style.background = '#f0f0f5'} onMouseLeave={e => e.currentTarget.style.background = '#fafafa'}>
          <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.005em', color: 'rgba(17,17,24,0.5)', fontWeight: 500 }}>Next Case &rarr;</span>
          <span style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.02em' }}>{nextCase.name}</span>
          <span style={{ fontSize: '1rem', color: 'rgba(17,17,24,0.7)' }}>{nextCase.promise}</span>
        </Link>
      </div>
    </div>
    </ReactLenis>
  );
}
