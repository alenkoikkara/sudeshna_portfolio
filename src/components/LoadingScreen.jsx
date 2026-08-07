import { useRef, useEffect } from 'react'
import gsap from 'gsap'

/**
 * LoadingScreen
 *
 * Sequence:
 *  1. Hero copy centered on white screen (1.2s delay)
 *  2. Text slides left to its final position  (1.6s, power3.inOut)
 *  3. onReveal fires → background elements start fading in
 *  4. Overlay *background* fades to transparent — text stays visible  (1.0s)
 *  5. onComplete fires → real hero text fades in (handoff)
 *  6. Loading text quickly fades out  (0.08s)
 */
export default function LoadingScreen({ onReveal, onComplete }) {
  const overlayRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const overlay = overlayRef.current
    const text = textRef.current
    if (!overlay || !text) return

    // Match hero section's left: clamp(2rem, 8vw, 6rem)
    const targetX = Math.min(Math.max(32, window.innerWidth * 0.08), 96)

    // Center text horizontally via transform (top: 50% is in CSS)
    gsap.set(text, {
      xPercent: -50,
      yPercent: -50,
      x: window.innerWidth / 2,
    })

    const tl = gsap.timeline({ delay: 1.2 })

    // 1 — slide text to left position
    tl.to(text, {
      x: targetX,
      xPercent: 0,
      duration: 1.6,
      ease: 'power3.inOut',
    })

      // 2 — signal: ghost text / phone / nav can start fading in
      .call(() => onReveal?.())

      // 3 — fade out ONLY the background color; text remains fully visible
      .to(overlay, {
        backgroundColor: 'rgba(250,250,250,0)',
        duration: 1.0,
        ease: 'power2.inOut',
      })

      // 4 — handoff: real hero text appears at the same spot; notify parent to unmount
      .call(() => onComplete?.())

      // 5 — loading text quietly disappears (real hero text is now in its place)
      .to(text, {
        autoAlpha: 0,
        duration: 0.08,
        ease: 'none',
      })

    return () => tl.kill()
  }, [onReveal, onComplete])

  return (
    <div
      ref={overlayRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        backgroundColor: '#fafafa',
        pointerEvents: 'none',
      }}
    >
      <p
        ref={textRef}
        style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          margin: 0,
          fontSize: 'clamp(1.5rem, 2.6vw, 3rem)',
          fontWeight: 700,
          color: '#111118',
          lineHeight: 1.18,
          letterSpacing: '-0.025em',
          maxWidth: '520px',
        }}
      >
        I am a story teller,<br />
        blending visual design<br />
        &amp; strategy.
      </p>
    </div>
  )
}
