import { useRef, useEffect, Suspense } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Canvas, useThree } from '@react-three/fiber'
import gsap from 'gsap'

import AsapModel from '../components/AsapModel'
import BottomNav from '../components/BottomNav'
import iphoneMockup from '../assets/iphone mockup/iphone_mockup.png'
import asaphome from '../assets/homescreens/asaphome.png'
import returnloophome from '../assets/homescreens/returnloophome.png'
import petclearhome from '../assets/homescreens/petclearhome.png'

import { BG_TEXTS, SECTIONS, KEYFRAMES, WORK_PROJECTS, MAP_KEYFRAMES } from '../utils/homeConstants'
import { generateGridBlocks } from '../utils/gridUtils'

import HeroSection from '../components/home/HeroSection'
import WorkSection from '../components/home/WorkSection'
import AboutSection from '../components/home/AboutSection'

const GRID_BLOCKS = generateGridBlocks();

// ─── Component ───────────────────────────────────────────────

function ResponsiveGroup({ children }) {
  const { size } = useThree()
  // Reduced to 820 to make the 3D phone exactly match the 534px block height
  const scale = 820 / size.height
  return <group scale={scale}>{children}</group>
}

export default function HomePage() {
  const containerRef = useRef(null)
  const canvasWrapperRef = useRef(null)
  const gridMapRef = useRef(null)
  const navRef = useRef(null)
  const scrollStateRef = useRef({ posX: 0, posY: 0, posZ: 0, rotX: 0, rotY: 0, rotZ: Math.PI / 2, scale: 8 })
  const snapToRef = useRef(null)   // stores snapTo fn set inside useEffect
  const navigate = useNavigate()
  const location = useLocation()

  let initialIdx = 0;
  if (location.state && location.state.fromProject) {
    const projectIndex = WORK_PROJECTS.findIndex(p => p.title === location.state.fromProject);
    if (projectIndex !== -1) initialIdx = projectIndex + 1;
  }

  // Individual refs for bg texts (hooks can't be in loops)
  const bgRef0 = useRef(null)
  const bgRef1 = useRef(null)
  const bgRef2 = useRef(null)
  const bgRefs = [bgRef0, bgRef1, bgRef2]
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const N = SECTIONS.length
    const H = () => container.clientHeight

    let currentIdx = 0
    let currentBgIdx = 0
    let isSnapping = false
    let wheelAccum = 0
    let wheelTimer = null
    let touchStartY = 0
    let touchStartST = 0
    let isTouching = false

    const bgEls = bgRefs.map(r => r.current)
    const sectionEls = container.querySelectorAll('.scroll-section')
    const heroContent = sectionEls[0]?.querySelector('.section-content')

    // ── Initial State & Loading sequence ───────────────────────────────
    if (initialIdx > 0) {
      // Returning from a project: skip hero animations, prep layout instantly
      gsap.set(bgEls, { opacity: 1 })
      gsap.set('#home-blur', { opacity: 1 })
      gsap.set('#bottom-nav', { opacity: 1, y: 0 })
      if (heroContent) gsap.set(heroContent.children, { opacity: 1, y: 0 })
      
      // Delay snap slightly so refs and layout are fully ready
      setTimeout(() => snapTo(initialIdx), 50)
    } else {
      // Normal intro load: hide first, then animate
      gsap.set(bgEls, { opacity: 0 })
      gsap.set(canvasWrapperRef.current, { opacity: 0 })
      gsap.set('#home-blur', { opacity: 0 })
      gsap.set('#bottom-nav', { opacity: 0, y: 50 })
      if (heroContent) gsap.set(heroContent.children, { opacity: 0, y: 20 })

      const tl = gsap.timeline({ delay: 0.2 })
      
      if (heroContent) {
        tl.to(heroContent.children, { opacity: 1, y: 0, duration: 1.5, stagger: 0.15, ease: 'power3.out' })
      }
      // Only background elements and blur fade in on load, phone remains hidden
      tl.to([bgEls, '#home-blur'], { opacity: 1, duration: 2.0, ease: 'power2.inOut' }, '-=0.5')
      
      tl.to('#bottom-nav', { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }, '<0.5')
    }

    // ── Init bg text positions ───────────────────────────
    gsap.set(bgEls[0], { y: 0 })
    gsap.set(bgEls[1], { y: H() })
    gsap.set(bgEls[2], { y: H() })

    // ── Bg text transitions ────────────────────────────────
    const updateBgText = (newIdx) => {
      if (newIdx === currentBgIdx) return
      const prev = currentBgIdx
      const goingDown = newIdx > prev
      currentBgIdx = newIdx

      gsap.fromTo(
        bgEls[newIdx],
        { y: goingDown ? H() : -H() },
        { y: 0, duration: 1.5, ease: 'power3.inOut', overwrite: 'auto' }
      )
      gsap.to(bgEls[prev], {
        y: goingDown ? -H() : H(),
        duration: 1.5,
        ease: 'power3.inOut',
        overwrite: 'auto',
      })
    }

    // ── Section content in / out ───────────────────────────
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
        ...kf, duration: 1.5, ease: 'power3.inOut', overwrite: 'auto',
      })
    }

    // Canvas wrapper is hidden on Home (0) and About (4)
    const animateCanvas = (idx) => {
      gsap.to(canvasWrapperRef.current, {
        opacity: (idx === 0 || idx === 4) ? 0 : 1, // Visible ONLY on Work sections (1, 2, 3)
        duration: 1.1,
        ease: 'power2.inOut',
        overwrite: 'auto',
      })
    }

    // Grid map translation and opacity
    const animateGridMap = (idx) => {
      if (!gridMapRef.current) return
      gsap.to(gridMapRef.current, {
        x: MAP_KEYFRAMES[idx].x,
        y: MAP_KEYFRAMES[idx].y,
        opacity: MAP_KEYFRAMES[idx].opacity,
        duration: 1.5,
        ease: 'power3.inOut',
        overwrite: 'auto',
      })
    }

    // ── Elastic snap ───────────────────────────────────────
    const snapTo = (idx, fromTouch = false) => {
      idx = Math.max(0, Math.min(N - 1, idx))
      const prev = currentIdx

      if (idx !== prev) {
        hideSection(prev)
        currentIdx = idx

        animateTo(KEYFRAMES[idx])
        animateCanvas(idx)
        animateGridMap(idx)
        updateBgText(SECTIONS[idx].bgText)
        gsap.set('#bg-text-container', { zIndex: idx === 0 ? 15 : 0 })
        
        // Carousel Overlay Animation
        if (idx >= 1 && idx <= 3) {
          const delayFade = (prev === 0 || prev === 4) ? 1.0 : 0; // Delay fade-in until phone model settles
          gsap.to('#phone-carousel-overlay', {
            opacity: 1,
            x: 0,
            duration: 0.8,
            delay: delayFade,
            ease: 'power2.inOut',
            overwrite: 'auto'
          })
          
          let targetX = 0;
          let targetY = 0;
          if (idx === 1) { targetX = 0; targetY = 0; }
          if (idx === 2) { targetX = 0; targetY = -100; }
          if (idx === 3) { targetX = -100; targetY = -100; }
          
          gsap.to('#phone-carousel-track', {
            xPercent: targetX,
            yPercent: targetY,
            duration: 1.5,
            ease: 'power3.inOut',
            overwrite: 'auto'
          })
        } else {
          gsap.to('#phone-carousel-overlay', {
            opacity: 0,
            x: 0,
            duration: 0.4,
            ease: 'power2.inOut',
            overwrite: 'auto'
          })
          if (idx === 0) {
            gsap.to('#phone-carousel-track', {
              yPercent: 100,
              xPercent: 0,
              duration: 1.5,
              ease: 'power3.inOut',
              overwrite: 'auto'
            })
          }
        }
        
        gsap.to('#bottom-nav', {
          background: (idx === 0 || idx === 4) ? 'transparent' : 'rgba(250,250,250,0.88)',
          backdropFilter: (idx === 0 || idx === 4) ? 'none' : 'blur(16px)',
          WebkitBackdropFilter: (idx === 0 || idx === 4) ? 'none' : 'blur(16px)',
          duration: 0.8, ease: 'power2.inOut', overwrite: 'auto'
        })
        gsap.to('#home-blur', {
          opacity: idx === 0 ? 1 : 0,
          duration: 1.1,
          ease: 'power2.inOut',
          overwrite: 'auto'
        })
        
        gsap.delayedCall(fromTouch ? 0 : 0.08, () => showSection(idx))
      }

      isSnapping = true
      gsap.to(container, {
        scrollTop: idx * H(),
        duration: 1.5,
        ease: 'power3.inOut',
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
      touchStartY = e.touches[0].clientY
      touchStartST = container.scrollTop
      isTouching = true
      gsap.killTweensOf(container)
    }
    const onTouchMove = (e) => {
      if (!isTouching) return
      e.preventDefault()
      const dy = touchStartY - e.touches[0].clientY
      const max = (N - 1) * H()
      let raw = touchStartST + dy
      if (raw < 0) raw = raw * 0.22
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
      if (e.key === 'ArrowUp' || e.key === 'PageUp') { e.preventDefault(); snapTo(currentIdx - 1) }
    }

    container.addEventListener('wheel', onWheel, { passive: false })
    container.addEventListener('touchstart', onTouchStart, { passive: true })
    container.addEventListener('touchmove', onTouchMove, { passive: false })
    container.addEventListener('touchend', onTouchEnd, { passive: true })
    window.addEventListener('keydown', onKeyDown)

    // expose snapTo so BottomNav can call it
    snapToRef.current = snapTo

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
      <div id="bg-text-container" style={{
        position: 'fixed', inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 15,
      }}>
        {BG_TEXTS.map((text, i) => (
          <div
            key={i}
            ref={bgRefs[i]}
            style={{
              position: 'absolute', inset: 0,
              display: 'flex',
              alignItems: i === 2 ? 'flex-start' : 'center',
              justifyContent: i === 2 ? 'flex-end' : 'flex-start',
              padding: i === 2 ? 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 4vw, 4rem) 0' : '0 clamp(1.5rem, 4vw, 4rem)',
              boxSizing: 'border-box',
            }}
          >
            <span style={{
              display: 'block',
              fontSize: 'clamp(6.5rem, 16vw, 18rem)',
              fontWeight: 900,
              lineHeight: 0.87,
              letterSpacing: '-0.028em',
              color: 'rgba(17,17,24,0.12)',
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

      {/* ── Translating Grid Map ─────────────────────────────── */}
      <div
        ref={gridMapRef}
        style={{
          position: 'fixed',
          top: '50%', left: '50%',
          width: 0, height: 0,
          pointerEvents: 'none',
          zIndex: 5,
        }}
      >
        {GRID_BLOCKS.map(block => (
          <div
            key={block.id}
            style={{
              position: 'absolute',
              left: block.x,
              top: block.y,
              width: block.w,
              height: block.h,
              backgroundColor: block.color,
              borderRadius: '44px',
              transform: 'translate(-50%, -50%)',
              boxShadow: block.color === 'transparent' && !block.isMockup ? 'none' : '0 20px 40px rgba(0,0,0,0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: block.color === '#ffffff' || (block.color === 'transparent' && !block.isMockup) ? 'transparent' : 'rgba(0,0,0,0.5)',
              fontSize: '2rem',
              fontWeight: 800,
              fontFamily: 'sans-serif',
              overflow: 'hidden'
            }}
          >
            {block.isMockup && (
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                {block.video && (
                  <video
                    src={block.video}
                    autoPlay loop muted playsInline
                    style={{ position: 'absolute', padding: "1% 0%", top: '0%', left: '4%', width: '92%', height: '100%', objectFit: 'contain', borderRadius: '38px', zIndex: 0 }}
                  />
                )}
                <img src={iphoneMockup} alt="" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'contain', zIndex: 1, pointerEvents: 'none' }} />
              </div>
            )}
            <span style={{ position: 'relative', zIndex: 2 }}>{block.c},{block.r}</span>
          </div>
        ))}
      </div>

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
          {/* <Environment preset="studio" /> */}
          <Suspense fallback={null}>
            <ResponsiveGroup>
              <AsapModel scrollState={scrollStateRef} />
            </ResponsiveGroup>
          </Suspense>
        </Canvas>
      </div>

      {/* ── Phone Screen Carousel Overlay (HTML) ────────────── */}
      <div
        id="phone-carousel-overlay"
        style={{
          position: 'fixed',
          top: '49.8%',
          left: '50%',
          transform: 'translate(-50%, -49.5%)', // Tiny vertical nudge to center in bezels
          width: '255px', 
          height: '539px',
          zIndex: 11,
          opacity: 0,
          pointerEvents: 'auto',
          overflow: 'hidden',
          borderRadius: '45px',
          backgroundColor: '#000',
        }}
      >
        <div 
          id="phone-carousel-track" 
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
        >
          {/* Slide 1 (ASAP) */}
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white font-bold text-2xl" style={{ backgroundColor: '#ef4444' }}>
            <img className="w-full h-full object-cover" src={asaphome} alt="" />
          </div>
          {/* Slide 2 (ReturnLoop) - Below ASAP */}
          <div className="absolute top-full left-0 w-full h-full flex flex-col items-center justify-center text-white font-bold text-2xl" style={{ backgroundColor: '#3b82f6' }}>
            <img className="w-full h-full object-cover" src={returnloophome} alt="" />
          </div>
          {/* Slide 3 (PetClear) - Right of ReturnLoop */}
          <div className="absolute top-full left-full w-full h-full flex flex-col items-center justify-center text-white font-bold text-2xl" style={{ backgroundColor: '#22c55e' }}>
            <img className="w-full h-full object-cover" src={petclearhome} alt="" />
          </div>
        </div>
      </div>

      {/* ── Home Section Blur Layer (Grained Glass) ──────────────────────────── */}
      <div id="home-blur" style={{
        position: 'fixed', inset: 0,
        zIndex: 12,
        pointerEvents: 'none',
        backdropFilter: 'blur(32px)',
        WebkitBackdropFilter: 'blur(32px)',
        backgroundColor: 'rgba(250, 250, 250, 0.08)',
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.12'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '150px 150px',
        opacity: 0,
      }} />

      {/* ── Scrollable sections ─────────────────────────────── */}
      <div style={{ position: 'relative', zIndex: 20 }}>

        {/* Section 0 — Home */}
        <HeroSection />

        {/* Sections 1-3 — Work */}
        {WORK_PROJECTS.map((proj, i) => (
          <WorkSection
            key={proj.title}
            id={SECTIONS[i + 1].id}
            proj={proj}
            isLeft={proj.align === 'left'}
            navigate={navigate}
          />
        ))}

        {/* Section 4 — About */}
        <AboutSection />

      </div>


      {/* ── Bottom navigation bar ──────────────────────────── */}
      <div ref={navRef}>
        <BottomNav onNavigate={(idx) => snapToRef.current?.(idx)} />
      </div>

      {/* ── Intro loading screen removed per user request ───────────────────────────── */}
    </div>
  )
}

