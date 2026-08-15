import { useRef, Suspense, useEffect, useState, useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import gsap from 'gsap'
import AsapModel from '../components/AsapModel'
import BottomNav from '../components/BottomNav'
import LoadingScreen from '../components/LoadingScreen'

// ─── Data ────────────────────────────────────────────────────
const BG_TEXTS = ['Sudeshna Gangoli.', 'Work', 'About']

const SECTIONS = [
  { id: 'home',       bgText: 0 },
  { id: 'asap',       bgText: 1 },
  { id: 'returnloop', bgText: 1 },
  { id: 'petclear',   bgText: 1 },
  { id: 'about',      bgText: 2 },
]

// Phone world-space keyframes — camera at z=6, fov=45
// rotY values have Math.PI added so front face points toward camera
// (model is back-facing at rotY:0; Math.PI flips it to front-facing)
const KEYFRAMES = [
  // home: phone anchored right, partially cropped off edge
  { posX:  1.5, posY: 0,     posZ: 0, rotX:  0,     rotY: Math.PI - 0.22, rotZ:  0,    scale: 1.30 },
  // asap: right of center, tilted toward viewer
  { posX:  0.9, posY: 0.05,  posZ: 0, rotX:  0.05,  rotY: Math.PI - 0.50, rotZ:  0.03, scale: 1.10 },
  // returnloop: left of center, mirror tilt
  { posX: -0.9, posY:-0.05,  posZ: 0, rotX: -0.05,  rotY: Math.PI + 0.50, rotZ: -0.03, scale: 1.10 },
  // petclear: right of center
  { posX:  0.9, posY: 0.05,  posZ: 0, rotX:  0.05,  rotY: Math.PI - 0.40, rotZ:  0.02, scale: 1.05 },
  // about: slide off-screen to the right
  { posX:  4.5, posY: 0,     posZ: 0, rotX:  0,     rotY: Math.PI - 0.30, rotZ:  0.05, scale: 1.00 },
]

const WORK_PROJECTS = [
  { title: 'ASAP',       subtitle: 'Platform for Creatives', align: 'left'  },
  { title: 'ReturnLoop', subtitle: 'Digital Exhibition',     align: 'right' },
  { title: 'PetClear',   subtitle: 'Interactive Guide',      align: 'left'  },
]

// ─── Component ───────────────────────────────────────────────
export default function HomePage() {
  const containerRef    = useRef(null)
  const canvasWrapperRef = useRef(null)
  const navRef          = useRef(null)
  const scrollStateRef  = useRef({ posX: 0, posY: 0, posZ: 0, rotX: 0, rotY: 0, rotZ: Math.PI / 2, scale: 8 })
  const revealRef       = useRef(null)   // stores reveal fn set inside useEffect
  const snapToRef       = useRef(null)   // stores snapTo fn set inside useEffect
  const navigate        = useNavigate()
  // Individual refs for bg texts (hooks can't be in loops)
  const bgRef0 = useRef(null)
  const bgRef1 = useRef(null)
  const bgRef2 = useRef(null)
  const bgRefs = [bgRef0, bgRef1, bgRef2]
  const [activeDot, setActiveDot] = useState(0) // eslint-disable-line no-unused-vars
  const [showLoader, setShowLoader] = useState(true)

  // A — ghost text, phone, nav start fading in (overlay bg still fading)
  const handleReveal = useCallback(() => {
    revealRef.current?.reveal()
  }, [])

  // B — overlay bg gone; hero text fades in as loading text disappears
  const handleLoadComplete = useCallback(() => {
    revealRef.current?.handoff()
    setShowLoader(false)
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const N   = SECTIONS.length
    const H   = () => container.clientHeight

    let currentIdx   = 0
    let currentBgIdx = 0
    let isSnapping   = false
    let wheelAccum   = 0
    let wheelTimer   = null
    let touchStartY  = 0
    let touchStartST = 0
    let isTouching   = false

    const bgEls = bgRefs.map(r => r.current)

    // ── Hide non-phone elements (phone visible from the start) ───
    gsap.set(bgEls, { opacity: 0 })
    if (navRef.current) gsap.set(navRef.current, { opacity: 0 })

    // ── Loading sequence ───────────────────────────────
    // Zoom phone out from full-viewport fill to its home position
    // Starts after hero text has faded in and held briefly (t=1.5s)
    gsap.to(scrollStateRef.current, {
      ...KEYFRAMES[0], duration: 3.0, ease: 'power2.inOut', delay: 1.5,
    })
    // Ghost bg text fades in midway through the slow zoom-out
    gsap.to(bgEls, { opacity: 1, duration: 2.0, ease: 'power2.inOut', delay: 3.0 })

    // ── Init bg text positions ───────────────────────────
    gsap.set(bgEls[0], { y: 0 })
    gsap.set(bgEls[1], { y: H() })
    gsap.set(bgEls[2], { y: H() })

    // ── Bg text transitions ────────────────────────────────
    const updateBgText = (newIdx) => {
      if (newIdx === currentBgIdx) return
      const prev      = currentBgIdx
      const goingDown = newIdx > prev
      currentBgIdx    = newIdx

      gsap.fromTo(
        bgEls[newIdx],
        { y: goingDown ? H() : -H() },
        { y: 0, duration: 1.8, ease: 'expo.inOut', overwrite: 'auto' }
      )
      gsap.to(bgEls[prev], {
        y: goingDown ? -H() : H(),
        duration: 1.3,
        ease: 'expo.inOut',
        overwrite: 'auto',
      })
    }

    // ── Section content in / out ───────────────────────────
    const sectionEls = container.querySelectorAll('.scroll-section')

    const showSection = (idx) => {
      const content = sectionEls[idx]?.querySelector('.section-content')
      if (!content) return
      gsap.fromTo(
        content.children,
        { opacity: 0, y: 30, filter: 'blur(8px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.3, stagger: 0.12, ease: 'power3.inOut', overwrite: 'auto' }
      )
    }

    const hideSection = (idx) => {
      const content = sectionEls[idx]?.querySelector('.section-content')
      if (!content) return
      gsap.to(content.children, {
        opacity: 0, y: -20, filter: 'blur(5px)',
        duration: 0.55, ease: 'power2.inOut', overwrite: 'auto',
      })
    }

    // ── Phone model ────────────────────────────────────────
    const animateTo = (kf) => {
      gsap.to(scrollStateRef.current, {
        ...kf, duration: 1.7, ease: 'power3.inOut', overwrite: 'auto',
      })
    }

    // Canvas wrapper fades out on About section
    const animateCanvas = (idx) => {
      gsap.to(canvasWrapperRef.current, {
        opacity: idx === 4 ? 0 : 1,
        duration: 1.1,
        ease: 'power2.inOut',
      })
    }

    // ── Elastic snap ───────────────────────────────────────
    const snapTo = (idx, fromTouch = false) => {
      idx = Math.max(0, Math.min(N - 1, idx))
      const prev = currentIdx

      if (idx !== prev) {
        hideSection(prev)
        currentIdx = idx
        setActiveDot(idx)
        animateTo(KEYFRAMES[idx])
        animateCanvas(idx)
        updateBgText(SECTIONS[idx].bgText)
        gsap.delayedCall(fromTouch ? 0 : 0.08, () => showSection(idx))
      }

      isSnapping = true
      gsap.to(container, {
        scrollTop: idx * H(),
        duration: 1.45,
        ease: 'elastic.out(1, 0.75)',
        overwrite: true,
        onComplete: () => { isSnapping = false },
      })
    }

    // ── Wheel ──────────────────────────────────────────────
    const onWheel = (e) => {
      e.preventDefault()
      if (isSnapping) return
      wheelAccum += e.deltaY
      clearTimeout(wheelTimer)
      if (Math.abs(wheelAccum) >= 40) {
        const dir = wheelAccum > 0 ? 1 : -1
        wheelAccum = 0
        snapTo(currentIdx + dir)
      }
      wheelTimer = setTimeout(() => { wheelAccum = 0 }, 150)
    }

    // ── Touch ──────────────────────────────────────────────
    const onTouchStart = (e) => {
      if (isSnapping) return
      touchStartY  = e.touches[0].clientY
      touchStartST = container.scrollTop
      isTouching   = true
      gsap.killTweensOf(container)
    }
    const onTouchMove = (e) => {
      if (!isTouching) return
      e.preventDefault()
      const dy  = touchStartY - e.touches[0].clientY
      const max = (N - 1) * H()
      let raw = touchStartST + dy
      if (raw < 0)        raw = raw * 0.22
      else if (raw > max) raw = max + (raw - max) * 0.22
      container.scrollTop = raw
    }
    const onTouchEnd = (e) => {
      if (!isTouching) return
      isTouching = false
      const dy = touchStartY - e.changedTouches[0].clientY
      let target = currentIdx
      if (Math.abs(dy) > H() * 0.12) target += dy > 0 ? 1 : -1
      snapTo(target, true)
    }

    // ── Keyboard ───────────────────────────────────────────
    const onKeyDown = (e) => {
      if (isSnapping) return
      if (e.key === 'ArrowDown' || e.key === 'PageDown') { e.preventDefault(); snapTo(currentIdx + 1) }
      if (e.key === 'ArrowUp'   || e.key === 'PageUp')   { e.preventDefault(); snapTo(currentIdx - 1) }
    }

    container.addEventListener('wheel', onWheel, { passive: false })
    container.addEventListener('touchstart', onTouchStart, { passive: true })
    container.addEventListener('touchmove', onTouchMove, { passive: false })
    container.addEventListener('touchend', onTouchEnd, { passive: true })
    window.addEventListener('keydown', onKeyDown)

    // expose snapTo so BottomNav can call it
    snapToRef.current = snapTo

    // ── Reveal functions (called by LoadingScreen) ────────
    revealRef.current = {
      // Step A: nav fades in when hero text arrives at left position
      // (bg text is driven by the loading timeline above; canvas always visible)
      reveal: () => {
        if (navRef.current) gsap.to(navRef.current, { opacity: 1, duration: 1.3, ease: 'power2.inOut' })
      },
      // Step B: hero text handoff — fires after overlay bg is fully gone.
      // Use gsap.set (not showSection) so the real hero text appears instantly
      // at the same position as the loading text — no y-offset, no blur, no stagger.
      handoff: () => {
        const content = sectionEls[0]?.querySelector('.section-content')
        if (content) {
          gsap.set(Array.from(content.children), {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
          })
        }
      },
    }

    return () => {
      container.removeEventListener('wheel', onWheel)
      container.removeEventListener('touchstart', onTouchStart)
      container.removeEventListener('touchmove', onTouchMove)
      container.removeEventListener('touchend', onTouchEnd)
      window.removeEventListener('keydown', onKeyDown)
      clearTimeout(wheelTimer)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100svh',
        overflowY: 'scroll',
        overflowX: 'hidden',
        background: '#fafafa',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
    >

      {/* ── Ghost background text ──────────────────────────── */}
      <div style={{
        position: 'fixed', inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}>
        {BG_TEXTS.map((text, i) => (
          <div
            key={i}
            ref={bgRefs[i]}
            style={{
              position: 'absolute', inset: 0,
              display: 'flex',
              alignItems: 'center',
              padding: '0 clamp(1.5rem, 4vw, 4rem)',
              boxSizing: 'border-box',
            }}
          >
            <span style={{
              display: 'block',
              fontSize: 'clamp(6.5rem, 16vw, 18rem)',
              fontWeight: 900,
              lineHeight: 0.87,
              letterSpacing: '-0.028em',
              color: 'rgba(17,17,24,0.07)',
              wordBreak: 'break-word',
              userSelect: 'none',
            }}>
              {text}
            </span>
          </div>
        ))}
      </div>

      {/* ── Decorative oval blob ───────────────────────────── */}
      <div style={{
        position: 'fixed',
        top: '50%', left: '42%',
        transform: 'translate(-50%, -50%)',
        width: '55vw', height: '55vh',
        borderRadius: '50%',
        background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      {/* ── 3-D Canvas ─────────────────────────────────────── */}
      <div ref={canvasWrapperRef} style={{
        position: 'fixed', inset: 0,
        zIndex: 10,
        pointerEvents: 'none',
      }}>
        <Canvas
          camera={{ position: [0, 0, 6], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
          style={{ background: 'transparent', width: '100%', height: '100%' }}
        >
          <ambientLight intensity={0.9} />
          <directionalLight position={[5, 10, 5]} intensity={3.0} castShadow />
          <directionalLight position={[-4, 4, -4]} intensity={0.5} />
          <pointLight position={[-1, 3, 2]} intensity={0.5} color="#7c3aed" />
          <Environment preset="studio" />
          <Suspense fallback={null}>
            <AsapModel scrollState={scrollStateRef} />
          </Suspense>
        </Canvas>
      </div>

      {/* ── Scrollable sections ─────────────────────────────── */}
      <div style={{ position: 'relative', zIndex: 20 }}>

        {/* Section 0 — Home */}
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

        {/* Sections 1-3 — Work */}
        {WORK_PROJECTS.map((proj, i) => {
          const isLeft = proj.align === 'left'
          return (
            <section
              key={proj.title}
              id={SECTIONS[i + 1].id}
              className="scroll-section"
              style={SECTION_STYLE}
            >
              <div
                className="section-content"
                style={{
                  position: 'absolute',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  [isLeft ? 'left' : 'right']: 'clamp(2rem, 8vw, 6rem)',
                  textAlign: isLeft ? 'left' : 'right',
                  maxWidth: '380px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  pointerEvents: 'auto',
                }}
              >
                <span style={{
                  opacity: 0,
                  fontSize: '0.68rem',
                  fontWeight: 600,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: '#7c3aed',
                }}>
                  0{i + 1} / 03
                </span>
                <h2 style={{
                  opacity: 0,
                  margin: 0,
                  fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                  fontWeight: 700,
                  color: '#111118',
                  lineHeight: 1.0,
                  letterSpacing: '-0.03em',
                }}>
                  {proj.title}
                </h2>
                <p style={{
                  opacity: 0,
                  margin: 0,
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: '#6b6b80',
                  letterSpacing: '-0.01em',
                }}>
                  {proj.subtitle}
                </p>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(`/work/${proj.title}`);
                  }}
                  style={{
                    opacity: 0,
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    color: '#7c3aed',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    transition: 'gap 0.2s ease',
                    alignSelf: isLeft ? 'flex-start' : 'flex-end',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={e => { e.currentTarget.style.gap = '0.6rem' }}
                  onMouseLeave={e => { e.currentTarget.style.gap = '0.35rem' }}
                >
                  dive in →
                </a>
              </div>
            </section>
          )
        })}

        {/* Section 4 — About */}
        <section id="about" className="scroll-section" style={SECTION_STYLE}>
          <div
            className="section-content"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              maxWidth: '500px',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              pointerEvents: 'none',
            }}
          >
            <span style={{
              opacity: 0,
              fontSize: '0.68rem',
              fontWeight: 600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#7c3aed',
            }}>
              About
            </span>
            <p style={{
              opacity: 0,
              margin: 0,
              fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)',
              fontWeight: 600,
              color: '#111118',
              lineHeight: 1.55,
              letterSpacing: '-0.015em',
            }}>
              A multidisciplinary designer blending storytelling,
              strategy, and craft to create digital experiences
              that truly resonate.
            </p>
            <p style={{
              opacity: 0,
              margin: 0,
              fontSize: '0.92rem',
              fontWeight: 400,
              color: '#6b6b80',
              lineHeight: 1.7,
            }}>
              Currently available for freelance &amp; full-time opportunities.
            </p>
          </div>
        </section>

      </div>


      {/* ── Bottom navigation bar ──────────────────────────── */}
      <div ref={navRef}>
        <BottomNav onNavigate={(idx) => snapToRef.current?.(idx)} />
      </div>

      {/* ── Intro loading screen ───────────────────────────── */}
      {showLoader && (
        <LoadingScreen
          onReveal={handleReveal}
          onComplete={handleLoadComplete}
          startDelay={0.3}
        />
      )}
    </div>
  )
}

// ─── Shared styles ───────────────────────────────────────────
const SECTION_STYLE = {
  height: '100svh',
  width: '100%',
  position: 'relative',
}
