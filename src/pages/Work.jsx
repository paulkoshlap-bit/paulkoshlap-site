import { Link } from 'react-router-dom'

const CASE_STUDIES = [
  {
    num: '001',
    title: 'AI-Powered Creative Strategy System',
    tags: ['Multi-Vertical', 'Meta Ads', 'AI Workflows'],
    metric: '22%',
    metricLabel: 'CPA Reduction',
    subMetric: '< 5 min research to brief',
    desc: 'Built an AI system that compresses weeks of customer research and creative development into under 5 minutes — delivering production-ready strategy grounded in real market intelligence.',
    href: '/work/ai-creative-system',
    color: '#C8A96E',
    framework: ['02 Customer Research', '03 Messaging Strategy', '05 Activation'],
  },
  {
    num: '002',
    title: 'Research-Led Creative Wins for Regional Vet Chain',
    tags: ['Veterinary', 'Meta Ads', 'Creative Strategy'],
    metric: '17%',
    metricLabel: 'Account-Wide CPA Reduction',
    subMetric: 'Single insight → winning campaign',
    desc: 'LLM-powered customer research surfaced the #1 pain point the brand didn\'t know was losing them business. One insight, one headline, measurable impact across the entire account.',
    href: '/work/vet-chain',
    color: '#7EC8C8',
    framework: ['02 Customer Research', '03 Messaging Strategy', '05 Activation', '06 Reporting'],
  },
  {
    num: '003',
    title: 'The Revenue the Platform Couldn\'t See',
    tags: ['Sono Bello', 'Instagram', 'Incrementality', 'Geo Testing'],
    metric: '$50M',
    metricLabel: 'Incremental Revenue Projected',
    subMetric: '3x ROI · 13% geo lift',
    desc: 'Synthetic control geo test revealed $50M in revenue completely invisible to touch-based attribution — and a stakeholder education effort that changed how the client thinks about measurement.',
    href: '/work/sono-bello',
    color: '#C8A96E',
    framework: ['02 Customer Research', '04 Channel Strategy', '05 Activation', '06 Reporting', '07 Optimization'],
  },
]

export default function Work() {
  return (
    <div style={{ paddingTop: 60 }}>
      <div className="section">
        <div className="label">Selected Work</div>
        <h1 className="display" style={{ marginBottom: 16 }}>
          Case Studies
        </h1>
        <p style={{ fontSize: 13, color: '#555', lineHeight: 1.8, maxWidth: 520, marginBottom: 64 }}>
          Real campaigns. Real results. Each case study demonstrates a different facet of the First-Principles Marketing Framework in action.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {CASE_STUDIES.map((cs, i) => (
            <Link
              key={i}
              to={cs.href}
              style={{
                display: 'block',
                background: '#0C0C0C',
                border: '1px solid #1A1A1A',
                borderRadius: 16,
                padding: '36px',
                transition: 'all 0.25s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = cs.color
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#1A1A1A'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14, flexWrap: 'wrap' }}>
                    <span style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 14,
                      color: '#2A2A2A',
                      fontWeight: 700,
                    }}>{cs.num}</span>
                    {cs.tags.map(tag => (
                      <span key={tag} className="badge" style={{ fontSize: 9 }}>{tag}</span>
                    ))}
                  </div>

                  <h2 style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 'clamp(20px, 3vw, 28px)',
                    fontWeight: 600,
                    color: '#E8E4DC',
                    marginBottom: 14,
                    lineHeight: 1.3,
                  }}>{cs.title}</h2>

                  <p style={{ fontSize: 12, color: '#555', lineHeight: 1.8, marginBottom: 20 }}>{cs.desc}</p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {cs.framework.map(step => (
                      <span key={step} style={{
                        background: '#0F0F0F',
                        border: '1px solid #1E1E1E',
                        borderRadius: 4,
                        padding: '4px 10px',
                        fontSize: 10,
                        color: '#444',
                        letterSpacing: '0.05em',
                      }}>{step}</span>
                    ))}
                  </div>
                </div>

                <div style={{ textAlign: 'right', minWidth: 120 }}>
                  <div style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 52,
                    fontWeight: 700,
                    color: cs.color,
                    lineHeight: 1,
                    marginBottom: 6,
                  }}>{cs.metric}</div>
                  <div style={{ fontSize: 10, color: '#555', letterSpacing: '0.05em', marginBottom: 4 }}>{cs.metricLabel}</div>
                  <div style={{ fontSize: 10, color: '#333', letterSpacing: '0.05em', marginBottom: 20 }}>{cs.subMetric}</div>
                  <div style={{ fontSize: 12, color: cs.color, letterSpacing: '0.05em' }}>Read Case Study →</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
