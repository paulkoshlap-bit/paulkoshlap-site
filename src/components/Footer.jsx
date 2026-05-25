import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid #151515',
      padding: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 16,
    }}>
      <div style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 16,
        fontWeight: 600,
        color: '#444',
      }}>Paul Koshlap</div>

      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
        {[
          { label: 'Work', href: '/work' },
          { label: 'Framework', href: '/framework' },
          { label: 'About', href: '/about' },
          { label: 'Services', href: '/services' },
          { label: 'LinkedIn', href: 'https://linkedin.com/in/paulkoshlap' },
        ].map(link => (
          <Link key={link.href} to={link.href} style={{
            fontSize: 10,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#333',
            fontFamily: "'DM Mono', monospace",
            transition: 'color 0.2s ease',
          }}>
            {link.label}
          </Link>
        ))}
      </div>

      <div style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: 10,
        color: '#2A2A2A',
        letterSpacing: '0.05em',
      }}>
        © 2026 paulkoshlap.com
      </div>
    </footer>
  )
}
