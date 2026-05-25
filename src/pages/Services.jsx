const SERVICES = [
  {
    title: 'Growth Strategy',
    icon: '◈',
    color: '#C8A96E',
    desc: 'Full-funnel growth strategy from goal alignment through measurement and optimization. Built on the First-Principles Marketing Framework — upstream decisions that make every downstream dollar more effective.',
    includes: ['Goal & success alignment', 'Customer segmentation & journey mapping', 'Channel strategy & budget allocation', 'KPI framework design', 'Incrementality & MMM strategy'],
  },
  {
    title: 'Measurement Architecture',
    icon: '◎',
    color: '#7EC8C8',
    desc: 'Build the measurement infrastructure to understand what\'s actually driving your business — not just what the platform reports back. From incrementality testing to MMM to predictive KPI frameworks.',
    includes: ['Incrementality test design & execution', 'Measurement framework build', 'Geo lift test strategy', 'Platform vs. incremental gap analysis', 'Stakeholder measurement education'],
  },
  {
    title: 'Paid Media Management',
    icon: '✦',
    color: '#C8A96E',
    desc: 'Performance marketing across Meta, Google, TikTok, Pinterest, Snapchat, and LinkedIn. Strategy, creative direction, build, and optimization — with measurement built in from day one.',
    includes: ['Meta & Google campaign strategy', 'Creative strategy & brief development', 'Campaign build & launch', 'Ongoing optimization', 'Performance reporting'],
  },
  {
    title: 'AI Workflow Integration',
    icon: '▸',
    color: '#7EC8C8',
    desc: 'Integrate AI tools into your marketing workflows in ways that actually move the needle — accelerating research, creative development, reporting, and strategy at a level that changes what\'s possible.',
    includes: ['AI customer research systems', 'Creative brief automation', 'Reporting & insight generation', 'Workflow audit & optimization', 'Team training & frameworks'],
  },
  {
    title: 'AI Marketing Transformation',
    icon: '⟡',
    color: '#C8A96E',
    desc: 'Help marketing organizations restructure operations around AI — identifying where automation, agents, and LLM-powered workflows can replace manual processes, compress timelines, and unlock capabilities that weren\'t previously possible at your budget or headcount. The organizations that figure this out in the next 24 months will have a structural advantage that\'s very hard to close.',
    includes: ['Marketing ops audit & AI opportunity mapping', 'Agent and automation workflow design', 'LLM integration across research, creative, and reporting', 'Team training and AI adoption frameworks', 'Ongoing optimization as tools evolve'],
  },
]

const ENGAGEMENTS = [
  { type: 'Project', desc: 'Defined scope with clear deliverables. Ideal for measurement builds, strategy sprints, and campaign launches.', timeline: '4–12 weeks' },
  { type: 'Retainer', desc: 'Ongoing strategic partnership. Monthly scope with flexibility to address priority needs as they emerge.', timeline: 'Monthly' },
  { type: 'Advisory', desc: 'Strategic guidance and accountability for in-house marketing teams. Regular sessions with async support.', timeline: 'Ongoing' },
]

export default function Services() {
  return (
    <div style={{ paddingTop: 60 }}>
      <div style={{ padding: '80px 40px 60px', maxWidth: 900, margin: '0 auto' }}>
        <div className="label">Services</div>
        <h1 className="display" style={{ marginBottom: 16 }}>
          What I Can<br />
          <em className="gold">Do For You</em>
        </h1>
        <p style={{ fontSize: 13, color: '#555', lineHeight: 1.8, maxWidth: 520, marginBottom: 64 }}>
          Whether you need a growth strategist, a measurement architect, or someone who can do both — engagements are scoped to your specific situation.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
          {SERVICES.map((svc, i) => (
            <div key={i} style={{
              background: '#0C0C0C',
              border: '1px solid #1A1A1A',
              borderTop: `3px solid ${svc.color}`,
              borderRadius: 12,
              padding: 24,
              transition: 'border-color 0.2s ease',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                <span style={{ fontSize: 18, color: svc.color }}>{svc.icon}</span>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 600, color: '#E8E4DC' }}>{svc.title}</span>
              </div>
              <p style={{ fontSize: 12, color: '#555', lineHeight: 1.8, marginBottom: 20 }}>{svc.desc}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {svc.includes.map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 11, color: '#444' }}>
                    <span style={{ color: svc.color, marginTop: 2 }}>→</span> {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ENGAGEMENT MODELS */}
      <div className="section-alt">
        <div className="section-alt-inner">
          <div className="label">Engagement Models</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 600, marginBottom: 40 }}>
            How We Work Together
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
            {ENGAGEMENTS.map((eng, i) => (
              <div key={i} style={{ background: '#0F0F0F', border: '1px solid #1A1A1A', borderRadius: 12, padding: 24 }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, fontWeight: 700, color: '#C8A96E', marginBottom: 6 }}>{eng.type}</div>
                <div style={{ fontSize: 10, color: '#444', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 14 }}>{eng.timeline}</div>
                <p style={{ fontSize: 12, color: '#555', lineHeight: 1.7 }}>{eng.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WHO IT'S FOR */}
      <div className="section">
        <div className="label">Who I Work With</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
          {[
            { type: 'DTC Brands', desc: 'Growth-stage and scaling brands that need measurement infrastructure and creative strategy to drive profitable customer acquisition.' },
            { type: 'B2B Companies', desc: 'SaaS and services companies with complex buyer journeys that need full-funnel strategy aligned to pipeline metrics.' },
            { type: 'Agencies', desc: 'Marketing agencies that need senior strategic support, measurement expertise, or AI workflow integration for client engagements.' },
            { type: 'Funded Startups', desc: 'Startups with budget to invest in growth that need the strategic foundation built right from the beginning.' },
          ].map((w, i) => (
            <div key={i} style={{ background: '#0C0C0C', border: '1px solid #1A1A1A', borderRadius: 10, padding: 20 }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 600, color: '#E8E4DC', marginBottom: 8 }}>{w.type}</div>
              <p style={{ fontSize: 11, color: '#555', lineHeight: 1.6 }}>{w.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="section-alt">
        <div className="section-alt-inner" style={{ textAlign: 'center', maxWidth: 500, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 600, marginBottom: 16 }}>
            Ready to get started?
          </h2>
          <p style={{ fontSize: 12, color: '#555', marginBottom: 28, lineHeight: 1.7 }}>
            Tell me about what you're building and what you're trying to solve. We'll figure out if it's a fit.
          </p>
          <a href="mailto:paul@paulkoshlap.com" className="btn-primary">Let's Talk →</a>
        </div>
      </div>
    </div>
  )
}
