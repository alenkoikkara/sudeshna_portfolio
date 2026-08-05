import { useRef, useEffect } from 'react'
import gsap from 'gsap'

/**
 * LoadingScreen
 *
 * Shows the hero copy centered on a white screen.
 * After a short delay:
 *   1. Text slides from center → its final left position
 *   2. onReveal fires → page elements start fading in
 *   3. Overlay fades to transparent
 *   4. onComplete fires → component unmounts
 */
export default function LoadingScreen({ onReveal, onComplete }) {
  const overlayRef = useRef(null)
  const textRef    = useRef(null)

  useEffect(() => {
    const overlay = overlayRef.current
    const text    = textRef.current
    if (!overlay || !text) return

    // Target x matches the hero section's left: clamp(2rem, 8vw, 6rem)
    const targetX = Math.min(Math.max(32, window.innerWidth * 0.08), 96)

    // Place text at horizontal center, vertically centered via yPercent
    gsap.set(text, {
      xPercent: -50,
      yPercent: -50,
      x: window.innerWidth / 2,
    })

    const tl = gsap.timeline({ delay: 0.8 })

    // 1 — slide text to its final left position
    tl.to(text, {
      x: targetX,
      xPercent: 0,
      duration: 1.1,
      ease: 'power3.inOut',
    })

    // 2 — fire onReveal the moment text arrives so page elements start fading in
    .call(() => onReveal?.())

    // 3 — fade out the overlay background (text stays in place)
    .to(overlay, {
      autoAlpha: 0,
      duration: 0.55,
      ease: 'power2.inOut',
      onComplete: () => onComplete?.(),
    }, '-=0.15')

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
        background: '#fafafa',
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
