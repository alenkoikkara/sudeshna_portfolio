// Section indices the nav items map to
const NAV_ITEMS = [
  { label: 'Sudeshna Gangoli', section: 0 },
  { label: 'Work',             section: 1 },
  { label: 'About',            section: 4 },
]

const NAV_STYLE = {
  fontSize: '0.78rem',
  fontWeight: 500,
  color: '#111118',
  letterSpacing: '0.005em',
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
  fontFamily: 'inherit',
  transition: 'opacity 0.2s ease',
}

export default function BottomNav({ onNavigate }) {
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
        background: 'rgba(250,250,250,0.88)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
    >
      {NAV_ITEMS.map(({ label, section }) => (
        <button
          key={label}
          style={NAV_STYLE}
          onClick={() => onNavigate?.(section)}
          onMouseEnter={e => { e.currentTarget.style.opacity = '0.45' }}
          onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
          aria-label={`Go to ${label} section`}
        >
          {label}
        </button>
      ))}
    </nav>
  )
}
