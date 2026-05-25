import { Link } from 'react-router-dom'

const FRAMEWORK_STEPS = [
  { n: '01', title: 'Goal & Success Alignment', color: '#2D7A5F' },
  { n: '02', title: 'Customer Research', color: '#3A5BA0' },
  { n: '03', title: 'Messaging Strategy', color: '#7D3C98' },
  { n: '04', title: 'Channel Strategy', color: '#B7770D' },
  { n: '05', title: 'Activation', color: '#C0392B' },
  { n: '06', title: 'Reporting & Attribution', color: '#148F77' },
  { n: '07', title: 'Learning & Optimization', color: '#1A5276' },
]

const CASE_STUDIES = [
  {
    num: '003',
    title: 'The Revenue the Platform Couldn\'t See',
    tag: 'Sono Bello · Instagram',
    metric: '$50M',
    metricLabel: 'Incremental Revenue',
    desc: 'Synthetic control geo test revealed $50M in revenue completely invisible to touch-based attribution — and convinced stakeholders to act on the methodology.',
    href: '/work/sono-bello',
    color: '#C8A96E',
  },
  {
    num: '001',
    title: 'AI-Powered Creative Strategy System',
    tag: 'Multi-Vertical',
    metric: '22%',
    metricLabel: 'CPA Reduction',
    desc: 'Built an AI system that compresses weeks of customer research and creative development into under 5 minutes — delivering production-ready strategy grounded in real market intelligence.',
    href: '/work/ai-creative-system',
    color: '#7EC8C8',
  },
  {
    num: '002',
    title: 'Research-Led Creative Wins for Vet Chain',
    tag: 'Veterinary · Meta Ads',
    metric: '17%',
    metricLabel: 'CPA Reduction',
    desc: 'LLM-powered research surfaced the #1 customer pain point the brand didn\'t know was losing them business. One insight. One message. Account-wide impact.',
    href: '/work/vet-chain',
    color: '#C8A96E',
  },
  {
    num: '004',
    title: 'The Influencer Strategy That Required No Contracts',
    tag: 'Wonderspaces · Instagram',
    metric: '73%',
    metricLabel: 'DM Acceptance Rate',
    desc: 'Zero-contract influencer system using hashtag-driven discovery and genuine engagement signal analysis. Millions of organic impressions per month across 3 locations at effectively zero cost.',
    href: '/work/wonderspaces',
    color: '#7EC8C8',
  },
]

export default function Home() {
  return (
    <div style={{ paddingTop: 60 }}>

      {/* HERO */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '80px 40px',
        maxWidth: 900,
        margin: '0 auto',
        position: 'relative',
      }}>
        <div className="label fade-up">paulkoshlap.com</div>

        <h1 className="display fade-up fade-up-delay-1" style={{ marginBottom: 24, maxWidth: 700 }}>
          Growth engineer who drives<br />
          <em className="gold">measurable business outcomes.</em>
        </h1>

        <p className="fade-up fade-up-delay-2" style={{
          fontSize: 14,
          color: '#666',
          lineHeight: 1.8,
          maxWidth: 520,
          marginBottom: 16,
        }}>
          Here's a distinction most marketers gloss over: the revenue Meta or Google reports back to you isn't the same as the revenue your campaigns actually generated.
        </p>

        <p className="fade-up fade-up-delay-2" style={{
          fontSize: 14,
          color: '#555',
          lineHeight: 1.8,
          maxWidth: 520,
          marginBottom: 40,
        }}>
          I build the frameworks to measure that difference — and use it to make smarter decisions about where money should actually go.
        </p>

        <div className="fade-up fade-up-delay-3" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <Link to="/work" className="btn-primary">View My Work</Link>
          <Link to="/framework" className="btn-outline">See The Framework</Link>
        </div>

        <div style={{
          position: 'absolute',
          bottom: 40,
          left: 40,
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          color: '#2A2A2A',
          fontSize: 10,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
        }}>
          <div style={{
            width: 1,
            height: 40,
            background: 'linear-gradient(to bottom, #C8A96E, transparent)',
          }} />
          Scroll
        </div>
      </section>

      {/* CASE STUDY PREVIEWS */}
      <div className="section">
        <div className="label">Selected Work</div>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(24px, 4vw, 40px)',
          fontWeight: 600,
          marginBottom: 48,
        }}>Case Studies</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {CASE_STUDIES.map((cs, i) => (
            <Link key={i} to={cs.href} style={{
              display: 'block',
              background: 'var(--bg-2)',
              border: '1px solid #1A1A1A',
              borderLeft: `3px solid ${cs.color}`,
              borderRadius: 12,
              padding: '28px 28px 28px 32px',
              transition: 'all 0.2s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = cs.color}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '#1A1A1A'
              e.currentTarget.style.borderLeftColor = cs.color
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10, flexWrap: 'wrap' }}>
                    <span style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 13,
                      color: '#333',
                      fontWeight: 700,
                    }}>{cs.num}</span>
                    <span className="badge" style={{ fontSize: 9 }}>{cs.tag}</span>
                  </div>
                  <h3 style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 'clamp(18px, 2.5vw, 24px)',
                    fontWeight: 600,
                    color: '#E8E4DC',
                    marginBottom: 10,
                  }}>{cs.title}</h3>
                  <p style={{ fontSize: 12, color: '#555', lineHeight: 1.7 }}>{cs.desc}</p>
                </div>
                <div style={{ textAlign: 'right', minWidth: 100 }}>
                  <div style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 40,
                    fontWeight: 700,
                    color: cs.color,
                    lineHeight: 1,
                    marginBottom: 4,
                  }}>{cs.metric}</div>
                  <div style={{ fontSize: 10, color: '#444', letterSpacing: '0.05em' }}>{cs.metricLabel}</div>
                  <div style={{ marginTop: 16, fontSize: 12, color: cs.color }}>View Case Study →</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* FRAMEWORK PREVIEW */}
      <div className="section-alt">
        <div className="section-alt-inner">
          <div className="label">The System</div>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(24px, 4vw, 40px)',
            fontWeight: 600,
            marginBottom: 12,
          }}>First-Principles<br /><em className="gold">Marketing Framework</em></h2>
          <p style={{ fontSize: 12, color: '#555', lineHeight: 1.8, maxWidth: 500, marginBottom: 48 }}>
            A comprehensive operating system for marketing — structured upstream to downstream, where the highest-leverage decisions inform everything that follows.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 40 }}>
            {FRAMEWORK_STEPS.map((step, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                background: 'var(--bg-3)',
                border: '1px solid #1A1A1A',
                borderLeft: `3px solid ${step.color}`,
                borderRadius: 8,
                padding: '12px 16px',
                transition: 'transform 0.2s ease',
              }}>
                <span style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 18,
                  fontWeight: 700,
                  color: '#222',
                  minWidth: 28,
                }}>{step.n}</span>
                <span style={{ fontSize: 12, color: '#666' }}>{step.title}</span>
              </div>
            ))}
          </div>

          <Link to="/framework" className="btn-primary">Explore The Framework</Link>
        </div>
      </div>

      {/* BIO SNIPPET */}
      <div className="section">
        <div className="label">About</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 48, alignItems: 'start' }}>
          <div>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(24px, 4vw, 40px)',
              fontWeight: 600,
              marginBottom: 24,
              lineHeight: 1.2,
            }}>
              Most marketers can run campaigns.<br />
              <em className="gold">Fewer can tell you which ones worked.</em>
            </h2>
            <Link to="/about" className="btn-outline">More About Me</Link>
          </div>
          <div>
            <p style={{ fontSize: 13, color: '#666', lineHeight: 1.9, marginBottom: 20 }}>
              I'm a full-funnel digital marketing strategist with 10 years of experience. What sets me apart is what happens after the campaign launches — I build measurement infrastructure, design incrementality testing frameworks, and move past platform-reported vanity metrics toward a clear picture of what's actually driving growth.
            </p>
            <p style={{ fontSize: 13, color: '#555', lineHeight: 1.9 }}>
              I'm also deeply AI-native — I've built real workflows and systems that integrate AI into strategy, creative development, and analytics in ways that change what's possible.
            </p>
            <div style={{ marginTop: 28, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {['Meta Ads', 'Google Ads', 'TikTok', 'Incrementality', 'MMM', 'AI Workflows', 'Creative Strategy', 'SEO/AIO'].map(tag => (
                <span key={tag} style={{
                  background: '#0F0F0F',
                  border: '1px solid #1A1A1A',
                  borderRadius: 4,
                  padding: '4px 10px',
                  fontSize: 10,
                  color: '#555',
                  letterSpacing: '0.05em',
                }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CONTACT */}
      <div className="section-alt" id="contact">
        <div className="section-alt-inner" style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto' }}>
          <div className="label" style={{ textAlign: 'center' }}>Let's Work Together</div>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(28px, 5vw, 48px)',
            fontWeight: 600,
            lineHeight: 1.2,
            marginBottom: 16,
          }}>
            Building something real?<br />
            <em className="gold">Let's talk.</em>
          </h2>
          <p style={{ fontSize: 12, color: '#555', lineHeight: 1.8, marginBottom: 32 }}>
            Whether you need a growth strategist, a measurement architect, or someone who can do both — I'd love to hear about what you're working on.
          </p>
          <a href="mailto:paulkoshlap@gmail.com" className="btn-primary">Get In Touch</a>
        </div>
      </div>

    </div>
  )
}
