const NAV_STYLE = {
  fontSize: '0.78rem',
  fontWeight: 500,
  color: '#111118',
  letterSpacing: '0.005em',
}

export default function BottomNav() {
  return (
    <nav
      role="navigation"
      aria-label="Site navigation"
      style={{
        position: 'fixed',
        bottom: 0, left: 0, right: 0,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1.1rem clamp(1.5rem, 5vw, 3rem)',
        borderTop: '1px solid rgba(17,17,24,0.07)',
        background: 'rgba(250,250,250,0.88)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
    >
      <span style={NAV_STYLE}>Sudeshna Gangoli</span>
      <span style={NAV_STYLE}>Work</span>
      <span style={NAV_STYLE}>About</span>
    </nav>
  )
}
