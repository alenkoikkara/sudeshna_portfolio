import { useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { caseStudiesData } from '../data/caseStudiesData'

gsap.registerPlugin(ScrollTrigger)

export default function CaseStudyPage() {
  const { projectId } = useParams()
  const navigate = useNavigate()
  const containerRef = useRef(null)

  const data = caseStudiesData[projectId]

  useEffect(() => {
    window.scrollTo(0, 0)
    
    if (!data || !containerRef.current) return

    const sections = gsap.utils.toArray('.reveal-section')
    
    sections.forEach((section) => {
      gsap.fromTo(section,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
          }
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [data])

  if (!data) {
    return (
      <div style={{ padding: '4rem', textAlign: 'center', fontFamily: 'inherit' }}>
        <h2>Project Not Found</h2>
        <button onClick={() => navigate('/home')} style={backButtonStyle}>
          Back to Home
        </button>
      </div>
    )
  }

  return (
    <div ref={containerRef} style={{ background: '#fafafa', minHeight: '100vh', paddingBottom: '4rem', color: '#111118' }}>
      
      {/* Navigation */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, padding: '1.5rem', zIndex: 50, background: 'rgba(250,250,250,0.8)', backdropFilter: 'blur(10px)' }}>
        <button 
          onClick={() => navigate('/home')}
          style={backButtonStyle}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.5'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          &larr; Back to Home
        </button>
      </nav>

      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '6rem 1.5rem 2rem 1.5rem' }}>
        
        {/* Hero Section */}
        <section className="reveal-section" style={{ marginBottom: '4rem' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 700, margin: '0 0 1rem 0', letterSpacing: '-0.02em' }}>{data.title}</h1>
          <h2 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', fontWeight: 400, color: '#555', margin: '0 0 2rem 0' }}>{data.subtitle}</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', fontSize: '0.9rem', padding: '2rem 0', borderTop: '1px solid #ddd', borderBottom: '1px solid #ddd' }}>
            {data.client && <div><strong>Client</strong><br/><span style={{color: '#555'}}>{data.client}</span></div>}
            {data.role && <div><strong>Role</strong><br/><span style={{color: '#555'}}>{data.role}</span></div>}
            {data.timeline && <div><strong>Timeline</strong><br/><span style={{color: '#555'}}>{data.timeline}</span></div>}
            {data.services && <div><strong>Services</strong><br/><span style={{color: '#555'}}>{data.services}</span></div>}
          </div>
        </section>

        {/* About Project */}
        {data.aboutTitle && data.aboutText && (
          <section className="reveal-section" style={sectionStyle}>
            <h3>{data.aboutTitle}</h3>
            <p style={pStyle}>{data.aboutText}</p>
          </section>
        )}

        {/* Images array (first batch) */}
        {data.images && data.images.slice(0, 2).map((img, i) => (
          <section key={`img-top-${i}`} className="reveal-section" style={{ marginBottom: '4rem' }}>
            <img src={img} alt={`${data.title} screenshot ${i+1}`} style={{ width: '100%', borderRadius: '12px' }} />
          </section>
        ))}

        {/* Problem Section */}
        {data.problemHeading && (
          <section className="reveal-section" style={sectionStyle}>
            <h3>{data.problemHeading}</h3>
            {data.problemText && <p style={pStyle}>{data.problemText}</p>}
            {data.problemQuote && (
              <blockquote style={{ fontSize: '1.2rem', fontStyle: 'italic', borderLeft: '3px solid #111', paddingLeft: '1.5rem', margin: '2rem 0', color: '#333' }}>
                {data.problemQuote}
                {data.problemQuoteAuthor && <footer style={{ fontSize: '0.9rem', marginTop: '0.5rem', fontStyle: 'normal', color: '#666' }}>— {data.problemQuoteAuthor}</footer>}
              </blockquote>
            )}
          </section>
        )}

        {/* Metrics */}
        {data.metrics && (
          <section className="reveal-section" style={sectionStyle}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
              {data.metrics.map((m, i) => (
                <div key={i}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 700 }}>{m.value}</div>
                  <div style={{ fontSize: '0.9rem', color: '#555' }}>{m.label}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* AI Phases */}
        {data.aiHeading && data.aiPhases && (
          <section className="reveal-section" style={sectionStyle}>
            <h3>{data.aiHeading}</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '2rem' }}>
              {data.aiPhases.map((phase, i) => (
                <div key={i} style={{ background: '#fff', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.05em', color: '#888', marginBottom: '0.5rem' }}>{phase.phase}</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1rem' }}>Tools: {phase.tools.join(', ')}</div>
                  <p style={{...pStyle, marginBottom: '1rem'}}>{phase.desc}</p>
                  <p style={{...pStyle, fontSize: '0.9rem', padding: '1rem', background: '#f5f5f5', borderRadius: '8px', margin: 0 }}><strong>Insight:</strong> {phase.insight}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Solutions */}
        {data.solutionsHeading && data.solutionsList && (
          <section className="reveal-section" style={sectionStyle}>
            <h3>{data.solutionsHeading}</h3>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '1.1rem', color: '#444', lineHeight: 1.6 }}>
              {data.solutionsList.map((sol, i) => <li key={i}>{sol}</li>)}
            </ul>
            {data.solutionsQuote && <p style={{ fontSize: '1.2rem', fontWeight: 500, marginTop: '2rem', textAlign: 'center' }}>"{data.solutionsQuote}"</p>}
          </section>
        )}

        {/* Images array (rest) */}
        {data.images && data.images.slice(2).map((img, i) => (
          <section key={`img-bottom-${i}`} className="reveal-section" style={{ marginBottom: '4rem' }}>
            <img src={img} alt={`${data.title} screenshot ${i+3}`} style={{ width: '100%', borderRadius: '12px' }} />
          </section>
        ))}

        {/* Insights / Research / Pivot / Lessons - Dynamic Rendering */}
        {['insight', 'research', 'pivot', 'lessons', 'reflections'].map(sectionKey => {
          // A bit manual, but we handle the known structures dynamically if they exist
          if (sectionKey === 'insight' && data.insightHeading) {
            return (
              <section key="insight" className="reveal-section" style={sectionStyle}>
                <h3>{data.insightHeading}</h3>
                {data.insightText && <p style={pStyle}>{data.insightText}</p>}
                {data.insightGrid && (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
                    {data.insightGrid.map((item, i) => (
                      <div key={i} style={{ padding: '1.5rem', background: '#fff', borderRadius: '8px', border: '1px solid #eaeaea' }}>
                        <div style={{ fontWeight: 600 }}>{item.name}</div>
                        <div style={{ fontSize: '0.8rem', color: '#888', marginBottom: '0.8rem' }}>{item.tag}</div>
                        <div style={{ fontSize: '0.95rem', color: '#444' }}>{item.desc}</div>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            )
          }
          if (sectionKey === 'research' && data.researchHeading) {
            return (
              <section key="research" className="reveal-section" style={sectionStyle}>
                <h3>{data.researchHeading}</h3>
                {data.researchSubheading && <p style={pStyle}>{data.researchSubheading}</p>}
                {data.researchFindings && (
                   <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
                     {data.researchFindings.map((item, i) => (
                        <div key={i}>
                          <h4 style={{ margin: '0 0 0.5rem 0' }}>{item.title}</h4>
                          <p style={{ margin: 0, color: '#555', fontSize: '0.95rem' }}>{item.desc}</p>
                        </div>
                     ))}
                   </div>
                )}
              </section>
            )
          }
          if (sectionKey === 'pivot' && data.pivotHeading) {
            return (
              <section key="pivot" className="reveal-section" style={sectionStyle}>
                <h3>{data.pivotHeading}</h3>
                {data.pivotSubheading && <p style={pStyle}>{data.pivotSubheading}</p>}
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginTop: '2rem' }}>
                  {[data.pivotBefore, data.pivotAfter].filter(Boolean).map((item, i) => (
                    <div key={i} style={{ flex: '1 1 300px', background: i === 0 ? '#fcf0f0' : '#f0fcf4', padding: '2rem', borderRadius: '12px' }}>
                      <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: i===0?'#d9534f':'#5cb85c', marginBottom: '1rem' }}>{item.label}</div>
                      <h4 style={{ fontSize: '1.2rem', margin: '0 0 0.5rem 0' }}>{item.title}</h4>
                      <p style={{ margin: 0, fontSize: '0.95rem', color: '#444' }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
                {data.pivotCaption && <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '1.5rem', fontStyle: 'italic', textAlign: 'center' }}>{data.pivotCaption}</p>}
              </section>
            )
          }
          if (sectionKey === 'lessons' && data.lessons) {
             return (
               <section key="lessons" className="reveal-section" style={sectionStyle}>
                 <h3>Lessons Learned</h3>
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                   {data.lessons.map((item, i) => (
                     <div key={i}>
                       <h4 style={{ margin: '0 0 0.5rem 0' }}>{item.title}</h4>
                       <p style={{ margin: 0, color: '#555', fontSize: '0.95rem' }}>{item.desc}</p>
                     </div>
                   ))}
                 </div>
               </section>
             )
          }
          if (sectionKey === 'reflections' && data.reflections) {
            return (
              <section key="reflections" className="reveal-section" style={sectionStyle}>
                <h3>Reflections</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                  {data.reflections.map((item, i) => (
                    <div key={i}>
                      <h4 style={{ margin: '0 0 0.5rem 0' }}>{item.title}</h4>
                      <p style={{ margin: 0, color: '#555', fontSize: '0.95rem' }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
                {data.conclusion && <p style={{ fontSize: '1.3rem', fontWeight: 500, marginTop: '3rem', textAlign: 'center' }}>{data.conclusion}</p>}
              </section>
            )
          }
          return null
        })}

      </main>
    </div>
  )
}

// Styles
const backButtonStyle = {
  background: 'none',
  border: 'none',
  fontSize: '1rem',
  fontWeight: 600,
  cursor: 'pointer',
  padding: 0,
  color: '#111118',
  transition: 'opacity 0.2s',
  fontFamily: 'inherit'
}

const sectionStyle = {
  marginBottom: '5rem'
}

const pStyle = {
  fontSize: '1.1rem',
  lineHeight: 1.7,
  color: '#444',
  margin: '0 0 1rem 0'
}
