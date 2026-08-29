import React from 'react';

const SECTION_STYLE = {
  height: '100svh',
  width: '100%',
  position: 'relative',
};

export default function WorkSection({ proj, id, isLeft, navigate }) {
  return (
    <section
      id={id}
      className="scroll-section"
      style={SECTION_STYLE}
    >
      <a
        className="section-content"
        href={`/work/${proj.title}`}
        onClick={(e) => {
          e.preventDefault();
          navigate(`/work/${proj.title}`);
        }}
        onMouseEnter={(e) => {
          const link = e.currentTarget.querySelector('.dive-link');
          if (link) link.style.gap = '0.6rem';
        }}
        onMouseLeave={(e) => {
          const link = e.currentTarget.querySelector('.dive-link');
          if (link) link.style.gap = '0.35rem';
        }}
        style={{
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          [isLeft ? 'left' : 'right']: 'clamp(2rem, 8vw, 6rem)',
          paddingRight: proj.title === 'ReturnLoop' ? '0' : '0',
          textAlign: isLeft ? 'left' : 'right',
          maxWidth: '500px',
          display: 'flex',
          flexDirection: 'column',
          gap: '0rem',
          pointerEvents: 'auto',
          textDecoration: 'none',
          cursor: 'pointer',
        }}
      >
        <h2 style={{
          opacity: 0,
          margin: 0,
          fontSize: 'clamp(3.5rem, 6vw, 5.5rem)',
          fontWeight: 800,
          color: '#111118',
          lineHeight: 1.2,
          letterSpacing: '-0.03em',
          textAlign: isLeft ? 'left' : 'right',
        }}>
          {proj.title}
        </h2>
        <p style={{
          opacity: 0,
          marginTop: '2rem',
          fontSize: '1rem',
          fontWeight: 600,
          color: '#6b6b80',
          letterSpacing: '-0.0em',
          textAlign: isLeft ? 'left' : 'right',
        }}>
          {proj.subtitle}
        </p>
        <p style={{
          opacity: .7,
          marginTop: '0rem',
          fontSize: '0.95rem',
          fontWeight: 400,
          color: '#111111',
          lineHeight: 1.4,
          textAlign: isLeft ? 'left' : 'right',
        }}>
          {proj.description}
        </p>
        <div
          className="dive-link"
          style={{
            opacity: 0,
            fontWeight: 600,
            fontSize: '0.85rem',
            marginTop: '0.9rem',
            lineHeight: 1,
            color: '#7c3aed',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            transition: 'gap 0.2s ease',
            alignSelf: isLeft ? 'flex-start' : 'flex-end',
          }}
        >
          <span>dive in</span>
          <span>→</span>
        </div>
      </a>
    </section>
  );
}
