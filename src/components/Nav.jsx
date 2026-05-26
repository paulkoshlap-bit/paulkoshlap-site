import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const links = [
    { label: 'Work', href: '/work' },
    { label: 'Framework', href: '/framework' },
    { label: 'About', href: '/about' },
  ]

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      background: 'rgba(8,8,8,0.92)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid #151515',
      padding: '0 40px',
      height: 60,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
      <Link to="/" style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 20,
        fontWeight: 700,
        color: '#E8E4DC',
        letterSpacing: '-0.02em',
      }}>
        Paul Koshlap
      </Link>

      <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
        {links.map(link => (
          <Link
            key={link.href}
            to={link.href}
            style={{
              fontSize: 10,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: location.pathname.startsWith(link.href) ? '#C8A96E' : '#555',
              transition: 'color 0.2s ease',
              fontFamily: "'DM Mono', monospace",
            }}
          >
            {link.label}
          </Link>
        ))}
        <a href="mailto:paulkoshlap@gmail.com" className="btn-primary" style={{ padding: '8px 18px', fontSize: 11 }}>Let's Talk</a>
      </div>
    </nav>
  )
}
