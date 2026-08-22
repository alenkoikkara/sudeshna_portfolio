import { useRef, useEffect, useState, Suspense } from 'react'
import { useNavigate } from 'react-router-dom'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import gsap from 'gsap'

import AsapModel from '../components/AsapModel'
import BottomNav from '../components/BottomNav'
import iphoneMockup from '../assets/iphone mockup/iphone_mockup.png'

import petclearTripVideo from '../assets/videos/petclear/petclear_trip.mov'
import petclearCommentVideo from '../assets/videos/petclear/petclear_comment.mov'
import petclearDocumentVideo from '../assets/videos/petclear/petclear_document.mov'
import petclearLoginFlowVideo from '../assets/videos/petclear/petclear_login_flow.mov'

import returnloopUpdateVideo from '../assets/videos/returnloop/returnloop_update.mov'
import returnloopMapVideo from '../assets/videos/returnloop/returnloop_map.mov'
import returnloopLoginVideo from '../assets/videos/returnloop/returnloop_login.mov'


// ─── Data ────────────────────────────────────────────────────
const BG_TEXTS = ['Sudeshna Gangoli.', 'Work', 'About']

const SECTIONS = [
  { id: 'home', bgText: 0 },
  { id: 'asap', bgText: 1 },
  { id: 'returnloop', bgText: 1 },
  { id: 'petclear', bgText: 1 },
  { id: 'about', bgText: 2 },
]

const KEYFRAMES = [
  // home: huge phone filling the viewport (loading state)
  { posX: 0, posY: 0, posZ: 0, rotX: 0, rotY: 0, rotZ: Math.PI / 2, scale: 8, burst: 0 },
  // asap: replace center block
  { posX: 0, posY: 0, posZ: 0, rotX: 0, rotY: Math.PI, rotZ: 0, scale: 1.09 },
  // returnloop: replace center block
  { posX: 0, posY: 0, posZ: 0, rotX: 0, rotY: Math.PI, rotZ: 0, scale: 1.09 },
  // petclear: replace center block
  { posX: 0, posY: 0, posZ: 0, rotX: 0, rotY: Math.PI, rotZ: 0, scale: 1.09 },
  // about: slide off-screen to the right
  { posX: 4.5, posY: 0, posZ: 0, rotX: 0, rotY: Math.PI - 0.30, rotZ: 0.05, scale: 1.00 },
]

const WORK_PROJECTS = [
  { 
    title: 'ASAP', 
    subtitle: 'AI-Powered Planning', 
    description: 'Helping college students build independent planning skills by breaking assignments into manageable steps until they no longer need the tool.',
    align: 'left' 
  },
  { 
    title: 'ReturnLoop', 
    subtitle: 'Effortless Returns', 
    description: 'Connecting people with neighborhood drivers to eliminate the errand of returning online purchases.',
    align: 'right' 
  },
  { 
    title: 'PetClear', 
    subtitle: 'Pet Travel Guide', 
    description: 'Personalized checklists for pet travel that tell you exactly what documents you need, where to get them, and when they are due.',
    align: 'left' 
  },
]

const GRID_BLOCKS = (() => {
  const blocks = [];
  const cols = 20;
  const rows = 12;
  const w = 260;
  const h = 534.25;
  const gap = 20;

  for (let c = 0; c < cols; c++) {
    // stagger columns vertically to make it asymmetrical
    const staggerY = (c * 239) % 400;
    for (let r = 0; r < rows; r++) {
      const x = c * (w + gap);
      const y = r * (h + gap) + staggerY;

      // Default placeholder colors
      let color = (c + r) % 2 === 0 ? '#e5e7eb' : '#f3f4f6';

      blocks.push({ id: `block-${c}-${r}`, c, r, x, y, w, h, color });
    }
  }

  // Apply mockups
  const applyMockups = (startC, endC, startR, endR) => {
    blocks.forEach(b => {
      if (b.c >= startC && b.c <= endC && b.r >= startR && b.r <= endR) {
        b.isMockup = true;
        b.color = 'transparent'; // Remove background color
      }
    });
  };

  // ASAP: cols 2-5, rows 2-4
  applyMockups(2, 5, 2, 4);
  // ReturnLoop: cols 8-11, rows 6-8
  applyMockups(8, 11, 6, 8);
  // PetClear: cols 14-17, rows 2-4
  applyMockups(14, 17, 2, 4);

  // Color the blocks behind the text areas white
  blocks.forEach(b => {
    // ASAP Text Area (Left)
    if (b.c <= 2 && b.r >= 1 && b.r <= 5) { b.color = 'transparent'; b.isMockup = false; }
    // ReturnLoop Text Area (Right)
    if (b.c >= 11 && b.c <= 13 && b.r >= 5 && b.r <= 9) { b.color = 'transparent'; b.isMockup = false; }
    // PetClear Text Area (Left)
    if (b.c >= 12 && b.c <= 14 && b.r >= 1 && b.r <= 5) { b.color = 'transparent'; b.isMockup = false; }
  });

  // Specific user overrides
  const block7_7 = blocks.find(b => b.c === 7 && b.r === 7);
  if (block7_7) { block7_7.color = 'transparent'; block7_7.isMockup = true; block7_7.video = returnloopLoginVideo; }

  const block16_3 = blocks.find(b => b.c === 16 && b.r === 3);
  if (block16_3) { block16_3.video = petclearLoginFlowVideo; }

  const block16_4 = blocks.find(b => b.c === 16 && b.r === 4);
  if (block16_4) { block16_4.video = petclearTripVideo; }

  const block17_3 = blocks.find(b => b.c === 17 && b.r === 3);
  if (block17_3) { block17_3.video = petclearCommentVideo; }

  const block17_4 = blocks.find(b => b.c === 17 && b.r === 4);
  if (block17_4) { block17_4.video = petclearDocumentVideo; }

  const block8_7 = blocks.find(b => b.c === 8 && b.r === 7);
  if (block8_7) { block8_7.video = returnloopUpdateVideo; }

  const block8_6 = blocks.find(b => b.c === 8 && b.r === 6);
  if (block8_6) { block8_6.video = returnloopMapVideo; }

  const block10_6 = blocks.find(b => b.c === 10 && b.r === 6);
  if (block10_6) { block10_6.color = 'transparent'; block10_6.isMockup = false; }

  const block10_7 = blocks.find(b => b.c === 10 && b.r === 7);
  if (block10_7) { block10_7.color = 'transparent'; block10_7.isMockup = false; }

  // Hide the center blocks so the iPhone can replace them
  const asapTarget = blocks.find(b => b.c === 3 && b.r === 3);
  if (asapTarget) { asapTarget.color = 'transparent'; asapTarget.isMockup = false; }

  const rlTarget = blocks.find(b => b.c === 9 && b.r === 7);
  if (rlTarget) { rlTarget.color = 'transparent'; rlTarget.isMockup = false; }

  const pcTarget = blocks.find(b => b.c === 15 && b.r === 3);
  if (pcTarget) { pcTarget.color = 'transparent'; pcTarget.isMockup = false; }

  return blocks;
})();

const MAP_KEYFRAMES = [
  { x: 0, y: 0, opacity: 0 }, // Home
  { x: -840, y: -1979.75, opacity: 1 }, // ASAP
  { x: -2520, y: -4030.75, opacity: 1 }, // ReturnLoop
  { x: -4200, y: -2047.75, opacity: 1 }, // PetClear
  { x: -4200, y: -2047.75, opacity: 0 }, // About
]

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
  // Individual refs for bg texts (hooks can't be in loops)
  const bgRef0 = useRef(null)
  const bgRef1 = useRef(null)
  const bgRef2 = useRef(null)
  const bgRefs = [bgRef0, bgRef1, bgRef2]
  const [activeDot, setActiveDot] = useState(0)

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

    // ── Hide all elements initially ───
    gsap.set(bgEls, { opacity: 0 })
    gsap.set(canvasWrapperRef.current, { opacity: 0 })
    gsap.set('#home-blur', { opacity: 0 })
    gsap.set('#bottom-nav', { opacity: 0, y: 50 })
    if (heroContent) gsap.set(heroContent.children, { opacity: 0, y: 20 })

    // ── Loading sequence ───────────────────────────────
    const tl = gsap.timeline({ delay: 0.2 })
    
    if (heroContent) {
      tl.to(heroContent.children, { opacity: 1, y: 0, duration: 1.5, stagger: 0.15, ease: 'power3.out' })
    }
    // Only background elements and blur fade in on load, phone remains hidden
    tl.to([bgEls, '#home-blur'], { opacity: 1, duration: 2.0, ease: 'power2.inOut' }, '-=0.5')
    
    tl.to('#bottom-nav', { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }, '<0.5')

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

    // Canvas wrapper is hidden on Home (0) and About (4)
    const animateCanvas = (idx) => {
      gsap.to(canvasWrapperRef.current, {
        opacity: (idx === 0 || idx === 4) ? 0 : 1,
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
        duration: 1.7,
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
        setActiveDot(idx)
        animateTo(KEYFRAMES[idx])
        animateCanvas(idx)
        animateGridMap(idx)
        updateBgText(SECTIONS[idx].bgText)
        gsap.set('#bg-text-container', { zIndex: idx === 0 ? 15 : 0 })
        
        gsap.to('#bottom-nav', {
          background: idx === 0 ? 'transparent' : 'rgba(250,250,250,0.88)',
          backdropFilter: idx === 0 ? 'blur(0px)' : 'blur(16px)',
          WebkitBackdropFilter: idx === 0 ? 'blur(0px)' : 'blur(16px)',
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
              borderRadius: '32px',
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
                    style={{ position: 'absolute', padding: "1% 0%", top: '0%', left: '4%', width: '92%', height: '100%', objectFit: 'contain', borderRadius: '32px', zIndex: 0 }}
                  />
                )}
                <img src={iphoneMockup} alt="" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'contain', zIndex: 1, pointerEvents: 'none' }} />
              </div>
            )}
            {/* <span style={{ position: 'relative', zIndex: 2 }}>{block.c},{block.r}</span> */}
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
                  paddingRight: proj.title === 'ReturnLoop' ? '0' : '0',
                  textAlign: isLeft ? 'left' : 'right',
                  maxWidth: '500px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0rem',
                  pointerEvents: 'auto',
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
                  margin: 0,
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: '#6b6b80',
                  letterSpacing: '-0.01em',
                  textAlign: isLeft ? 'left' : 'right',
                }}>
                  {proj.subtitle}
                </p>
                <p style={{
                  opacity: 0,
                  marginTop: '0.8rem',
                  fontSize: '0.95rem',
                  fontWeight: 400,
                  color: '#8b8b99',
                  lineHeight: 1.5,
                  textAlign: isLeft ? 'left' : 'right',
                }}>
                  {proj.description}
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
                    lineHeight: 1,
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

      {/* ── Intro loading screen removed per user request ───────────────────────────── */}
    </div>
  )
}

// ─── Shared styles ───────────────────────────────────────────
const SECTION_STYLE = {
  height: '100svh',
  width: '100%',
  position: 'relative',
}
