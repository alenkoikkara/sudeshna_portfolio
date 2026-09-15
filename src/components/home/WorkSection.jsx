import React from 'react';
import { useIsMobile } from '../../hooks/useIsMobile';

export default function WorkSection({ proj, id, isLeft, navigate, image }) {
  const isMobile = useIsMobile();

  const sectionStyle = isMobile ? {
    width: '100%',
    position: 'relative',
    padding: '4rem 1.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  } : {
    height: '100svh',
    width: '100%',
    position: 'relative',
  };

  return (
    <section
      id={id}
      className="scroll-section"
      style={sectionStyle}
    >
      {isMobile ? (
        <a
          className="section-content w-full max-w-sm flex flex-col gap-5 no-underline text-left bg-white rounded-3xl p-5 shadow-[0_12px_40px_rgb(0,0,0,0.06)]"
          href={`/work/${proj.title}`}
          onClick={(e) => {
            e.preventDefault();
            navigate(`/work/${proj.title}`);
          }}
          style={{ pointerEvents: 'auto' }}
        >
          {image && (
            <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden bg-gray-50 mb-1 relative border border-gray-100">
              <img src={image} alt={proj.title} className="w-full h-full object-cover object-top" />
            </div>
          )}
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-extrabold text-[#111118] tracking-tight m-0">{proj.title}</h2>
            <p className="text-sm font-semibold text-[#6b6b80] m-0">{proj.subtitle}</p>
            <p className="text-sm text-[#111111] leading-relaxed mt-1 opacity-80">{proj.description}</p>
            <div className="text-[#7c3aed] font-semibold text-sm mt-2 flex items-center gap-1 transition-all">
              <span>dive in</span>
              <span>→</span>
            </div>
          </div>
        </a>
      ) : (
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
            left: isLeft ? 'clamp(2rem, 8vw, 6rem)' : 'auto',
            right: isLeft ? 'auto' : 'clamp(2rem, 8vw, 6rem)',
            paddingRight: proj.title === 'ReturnLoop' ? '0' : '0',
            textAlign: isLeft ? 'left' : 'right',
            maxWidth: '500px',
            display: 'flex',
            flexDirection: 'column',
            gap: '0rem',
            pointerEvents: 'auto',
            textDecoration: 'none',
            cursor: 'pointer',
            alignItems: isLeft ? 'flex-start' : 'flex-end',
          }}
        >
          <h2 style={{
            opacity: 1,
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
            opacity: 1,
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
            opacity: 0.7,
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
              opacity: 1,
              fontWeight: 600,
              fontSize: '0.85rem',
              marginTop: '0.9rem',
              lineHeight: 1,
              color: '#7c3aed',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              gap: '0.35rem',
              transition: 'gap 0.2s ease',
              alignSelf: isLeft ? 'flex-start' : 'flex-end',
            }}
          >
            <span>dive in</span>
            <span>→</span>
          </div>
        </a>
      )}
    </section>
  );
}
