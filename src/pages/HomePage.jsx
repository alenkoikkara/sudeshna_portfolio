import { useRef, Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import gsap from 'gsap'
import AsapModel from '../components/AsapModel'

// ─── Section data ───────────────────────────────────────────
const SECTIONS = [
  {
    id: 'intro',
    label: '01',
    heading: 'Meet ASAP',
    sub: 'A platform built for creatives who refuse to wait.',
    align: 'left',
  },
  {
    id: 'features',
    label: '02',
    heading: 'Everything\nyou need.',
    sub: 'Instant booking, real-time collab, and a feed that puts your work first.',
    align: 'right',
  },
  {
    id: 'design',
    label: '03',
    heading: 'Designed\nwith intent.',
    sub: 'Every pixel crafted to reduce friction and let your creativity shine through.',
    align: 'left',
  },
  {
    id: 'mobile',
    label: '04',
    heading: 'Always in\nyour pocket.',
    sub: 'Native-feel mobile experience with silky-smooth interactions.',
    align: 'right',
  },
  {
    id: 'launch',
    label: '05',
    heading: 'Ready to\nship.',
    sub: 'From concept to production — built fast, built right.',
    align: 'left',
  },
]

// Phone keyframes per section: { posX, posY, posZ, rotX, rotY, rotZ, scale }
const KEYFRAMES = [
  { posX: 0,    posY: 0,     posZ: 0, rotX: 0,     rotY: 0,     rotZ: 0,    scale: 1     }, // 0 intro
  { posX: 0.8,  posY: 0.1,   posZ: 0, rotX: 0.1,   rotY: -0.5,  rotZ: 0.05, scale: 1.05  }, // 1 features
  { posX: -0.8, posY: -0.1,  posZ: 0, rotX: -0.15, rotY: 0.6,   rotZ: -0.06,scale: 1.1   }, // 2 design
  { posX: 0,    posY: 0.3,   posZ: 0, rotX: 0.35,  rotY: 0.2,   rotZ: 0.08, scale: 1.15  }, // 3 mobile
  { posX: 0,    posY: 0,     posZ: 0, rotX: 0,     rotY: Math.PI * 2, rotZ: 0, scale: 1   }, // 4 launch — full spin
]

export default function HomePage() {
  const containerRef   = useRef(null)
  const scrollStateRef = useRef({ ...KEYFRAMES[0] })
  const activeRef      = useRef(0)
  const [activeDot, setActiveDot] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const sectionEls = container.querySelectorAll('.scroll-section')
    const N = SECTIONS.length
    let currentIdx   = 0
    let isSnapping   = false
    let wheelAccum   = 0
    let wheelCooldown = null
    let touchStartY  = 0
    let touchStartST = 0
    let isTouching   = false

    // ── Phone keyframe tween ────────────────────────
    const animateTo = (kf) => {
      gsap.to(scrollStateRef.current, {
        ...kf,
        duration: 1.3,
        ease: 'power3.inOut',
        overwrite: 'auto',
      })
    }

    // ── Text in / out ───────────────────────────────
    const showSection = (idx) => {
      const el = sectionEls[idx]
      if (!el) return
      const overlay = el.querySelector('.text-overlay')
      if (!overlay) return
      gsap.fromTo(
        overlay.children,
        { opacity: 0, y: 36, filter: 'blur(8px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.9, stagger: 0.11, ease: 'power3.out', overwrite: 'auto' }
      )
    }

    const hideSection = (idx) => {
      const el = sectionEls[idx]
      if (!el) return
      const overlay = el.querySelector('.text-overlay')
      if (!overlay) return
      gsap.to(overlay.children, { opacity: 0, y: -18, filter: 'blur(6px)', duration: 0.38, ease: 'power2.in', overwrite: 'auto' })
    }

    // ── Core: elastic snap to a section index ───────
    const snapTo = (idx, fromTouch = false) => {
      idx = Math.max(0, Math.min(N - 1, idx))
      const prev = currentIdx

      if (idx !== prev) {
        hideSection(prev)
        currentIdx = idx
        activeRef.current = idx
        setActiveDot(idx)
        animateTo(KEYFRAMES[idx])
        // slight delay so hide finishes before show
        gsap.delayedCall(fromTouch ? 0 : 0.08, () => showSection(idx))
      }

      isSnapping = true
      gsap.to(container, {
        scrollTop: idx * container.clientHeight,
        duration: 1.45,
        ease: 'elastic.out(1, 0.75)',
        overwrite: true,
        onComplete: () => { isSnapping = false },
      })
    }

    // ── Wheel ────────────────────────────────────────
    const onWheel = (e) => {
      e.preventDefault()
      if (isSnapping) return

      wheelAccum += e.deltaY
      clearTimeout(wheelCooldown)

      if (Math.abs(wheelAccum) >= 40) {
        const dir = wheelAccum > 0 ? 1 : -1
        wheelAccum = 0
        snapTo(currentIdx + dir)
      }

      // Reset accumulation if user pauses
      wheelCooldown = setTimeout(() => { wheelAccum = 0 }, 150)
    }

    // ── Touch ────────────────────────────────────────
    const onTouchStart = (e) => {
      if (isSnapping) return
      touchStartY  = e.touches[0].clientY
      touchStartST = container.scrollTop
      isTouching   = true
      // stop any in-progress snap so drag takes over
      gsap.killTweensOf(container)
    }

    const onTouchMove = (e) => {
      if (!isTouching) return
      e.preventDefault()
      const dy  = touchStartY - e.touches[0].clientY
      const max = (N - 1) * container.clientHeight
      let raw = touchStartST + dy

      // Rubber-band resistance at edges
      if (raw < 0)   raw = raw * 0.22
      else if (raw > max) raw = max + (raw - max) * 0.22

      container.scrollTop = raw
    }

    const onTouchEnd = (e) => {
      if (!isTouching) return
      isTouching = false
      const dy = touchStartY - e.changedTouches[0].clientY
      const threshold = container.clientHeight * 0.12   // 12% of vh
      let target = currentIdx
      if (Math.abs(dy) > threshold) target += dy > 0 ? 1 : -1
      snapTo(target, true)
    }

    // ── Keyboard ─────────────────────────────────────
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

    showSection(0)

    return () => {
      container.removeEventListener('wheel', onWheel)
      container.removeEventListener('touchstart', onTouchStart)
      container.removeEventListener('touchmove', onTouchMove)
      container.removeEventListener('touchend', onTouchEnd)
      window.removeEventListener('keydown', onKeyDown)
      clearTimeout(wheelCooldown)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100svh',
        overflowY: 'scroll',   /* keep scrollTop writable */
        overflowX: 'hidden',
        background: '#08080f',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
    >
      {/* ── Nav ─────────────────────────────────────── */}
      <nav style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1.5rem 3rem',
        pointerEvents: 'none',
      }}>
        <span style={{ fontWeight: 700, fontSize: '1.05rem', color: '#fff', letterSpacing: '-0.03em', pointerEvents: 'auto' }}>
          asap<span style={{ color: '#a78bfa' }}>.</span>
        </span>
        <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0, pointerEvents: 'auto' }}>
          {['Features', 'Design', 'Launch'].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} style={{
                color: 'rgba(255,255,255,0.45)',
                fontSize: '0.8rem',
                fontWeight: 500,
                letterSpacing: '0.05em',
                textDecoration: 'none',
                textTransform: 'uppercase',
                transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.target.style.color = '#fff'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.45)'}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ── Fixed 3-D Canvas ────────────────────────── */}
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10,
        pointerEvents: 'none',
      }}>
        <Canvas
          camera={{ position: [0, 0, 6], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
          style={{ background: 'transparent', width: '100%', height: '100%' }}
        >
          <ambientLight intensity={1.2} />
          <directionalLight position={[5, 10, 5]} intensity={2.5} castShadow />
          <directionalLight position={[-4, 3, -4]} intensity={0.6} />
          <pointLight position={[0, 4, 2]} intensity={1} color="#a78bfa" />
          <Environment preset="city" />
          <Suspense fallback={null}>
            <AsapModel scrollState={scrollStateRef} />
          </Suspense>
        </Canvas>
      </div>

      {/* ── Radial bg glow ──────────────────────────── */}
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1,
        background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(124,58,237,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* ── Scrollable sections ─────────────────────── */}
      <div style={{ position: 'relative', zIndex: 20 }}>
        {SECTIONS.map((sec, idx) => (
          <section
            key={sec.id}
            id={sec.id}
            className="scroll-section"
            style={{
              height: '100svh',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: sec.align === 'right' ? 'flex-end' : 'flex-start',
              padding: '0 clamp(2rem, 8vw, 8rem)',
              boxSizing: 'border-box',
              pointerEvents: 'none',
            }}
          >
            {/* Text overlay */}
            <div
              className="text-overlay"
              style={{
                maxWidth: '480px',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
              }}
            >
              {/* Section number */}
              <span style={{
                opacity: 0,
                fontFamily: 'inherit',
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#a78bfa',
              }}>
                {sec.label} / {String(SECTIONS.length).padStart(2, '0')}
              </span>

              {/* Heading */}
              <h2 style={{
                opacity: 0,
                margin: 0,
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                fontWeight: 700,
                lineHeight: 1.0,
                letterSpacing: '-0.04em',
                color: '#fff',
                whiteSpace: 'pre-line',
              }}>
                {sec.heading}
              </h2>

              {/* Divider */}
              <div style={{
                opacity: 0,
                width: '2.5rem',
                height: '2px',
                borderRadius: '999px',
                background: 'linear-gradient(90deg, #7c3aed, #06b6d4)',
              }} />

              {/* Subtitle */}
              <p style={{
                opacity: 0,
                margin: 0,
                fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)',
                fontWeight: 400,
                lineHeight: 1.65,
                color: 'rgba(255,255,255,0.5)',
              }}>
                {sec.sub}
              </p>

              {/* CTA on last section */}
              {idx === SECTIONS.length - 1 && (
                <a
                  href="#"
                  style={{
                    opacity: 0,
                    pointerEvents: 'auto',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.8rem 1.75rem',
                    borderRadius: '9999px',
                    background: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
                    color: '#fff',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    boxShadow: '0 0 32px rgba(124,58,237,0.4)',
                    width: 'fit-content',
                    marginTop: '0.5rem',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 0 48px rgba(124,58,237,0.6)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 0 32px rgba(124,58,237,0.4)'
                  }}
                >
                  View case study →
                </a>
              )}
            </div>

            {/* Section indicator dots — driven by activeDot state */}
            {idx === 0 && (
              <div style={{
                position: 'fixed',
                right: '2rem',
                top: '50%',
                transform: 'translateY(-50%)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                zIndex: 30,
              }}>
                {SECTIONS.map((_, dotIdx) => (
                  <div key={dotIdx} style={{
                    width: dotIdx === activeDot ? '6px' : '4px',
                    height: dotIdx === activeDot ? '24px' : '4px',
                    borderRadius: '999px',
                    background: dotIdx === activeDot ? '#a78bfa' : 'rgba(255,255,255,0.2)',
                    transition: 'all 0.4s cubic-bezier(0.34,1.56,0.64,1)',
                  }} />
                ))}
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  )
}
