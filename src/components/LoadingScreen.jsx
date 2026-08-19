import { useRef, useEffect } from 'react'
import gsap from 'gsap'

/**
 * LoadingScreen — cinematic, story-like intro
 *
 *  t = delay + 0.0s : text fades in centered, white (on top of filled-viewport phone)
 *  t = delay + 0.8s : brief hold — white text glowing on dark phone
 *  t = delay + 1.2s : text slides left + color white → dark  (3.0s, phone zooms out simultaneously)
 *  t = delay + 4.2s : text arrives at left, dark — onReveal + onComplete fire
 *  t = delay + 4.3s : loading text disappears, real hero text takes its place
 */
export default function LoadingScreen({ onReveal, onComplete, startDelay = 0.3 }) {
  const textRef = useRef(null)

  useEffect(() => {
    const text = textRef.current
    if (!text) return

    // Target x matches hero section's left: clamp(2rem, 8vw, 6rem)
    const targetX = Math.min(Math.max(32, window.innerWidth * 0.08), 96)

    // Start: centered, invisible, white
    gsap.set(text, {
      xPercent: -50,
      yPercent: -50,
      x: window.innerWidth / 2,
      opacity: 0,
      color: '#ffffff',
    })

    const tl = gsap.timeline({ delay: startDelay })

    // 1 — fade in centered, white (phone still fills viewport)
    tl.to(text, {
      opacity: 1,
      duration: 0.8,
      ease: 'power2.inOut',
    })

    // 2 — hold: white text on dark phone (no movement)
    .to(text, { duration: 0.4 })

    // 3 — phone starts zooming out here (handled in HomePage);
    //     text slides left + color shifts from white → dark
    .to(text, {
      color: '#111118',
      x: targetX,
      xPercent: 0,
      duration: 3.0,
      ease: 'power2.inOut',
    })

    // 4 — nav fades in
    .call(() => onReveal?.())

    // 5 — hero text handoff + loader unmounts
    .call(() => onComplete?.())

    // 6 — loading text quietly disappears
    .to(text, {
      autoAlpha: 0,
      duration: 0.08,
      ease: 'none',
    })

    return () => tl.kill()
  }, [onReveal, onComplete, startDelay])

  return (
    <p
      ref={textRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: '50%',
        left: 0,
        zIndex: 100,
        margin: 0,
        fontSize: 'clamp(1.5rem, 2.6vw, 3rem)',
        fontWeight: 700,
        color: '#ffffff',
        lineHeight: 1.18,
        letterSpacing: '-0.025em',
        maxWidth: '520px',
        pointerEvents: 'none',
      }}
    >
      I am a story teller,<br />
      blending visual design<br />
      &amp; strategy.
    </p>
  )
}
