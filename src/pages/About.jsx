const EXPERIENCE = [
  { role: 'Senior Media Strategist', company: 'Overdrive Interactive', period: 'Current', desc: 'Full-funnel performance marketing strategy across paid social, SEM, and measurement infrastructure for national brands.' },
  { role: 'Associate Director, Paid Social', company: 'DEPT®', period: 'Prior', desc: 'Led paid social practice. Built and scaled performance marketing systems across Meta, TikTok, Pinterest, and Snapchat for enterprise clients.' },
  { role: 'Director of Marketing', company: 'Wonderspaces', period: 'Prior', desc: 'Directed full marketing function for national experiential art brand. Strategy, paid, organic, email, and brand.' },
  { role: 'Director, Social Media & eCommerce', company: 'CC Wellness', period: 'Prior', desc: 'Owned DTC growth across paid social and eCommerce for wellness brand. Built measurement infrastructure from ground up.' },
  { role: 'Digital Marketing Manager', company: 'Media Circus / Digital Media Management', period: 'Earlier', desc: 'Agency-side digital marketing across paid and organic channels. Foundation in direct-response strategy and copywriting.' },
]

const SKILLS = [
  { cat: 'Measurement & Analytics', items: ['Media Mix Modeling (interpretation & application)', 'Incrementality Testing', 'Synthetic Control Geo Tests', 'Attribution Frameworks', 'KPI Framework Design', 'Marketing Analytics'] },
  { cat: 'Paid Media', items: ['Meta Ads', 'Google Ads', 'TikTok Ads', 'Pinterest Ads', 'Snapchat Ads', 'LinkedIn Ads', 'Programmatic'] },
  { cat: 'Full-Stack Marketing', items: ['Full-Funnel Marketing', 'Go-To-Market Strategy', 'Creative Strategy', 'Messaging Strategy', 'Brand Strategy', 'Customer Journey Mapping', 'Content Marketing', 'Organic Social', 'Email Marketing', 'Influencer Marketing'] },
  { cat: 'AI & Systems', items: ['AI Workflow Integration', 'LLM Research Systems', 'Marketing Automation', 'Generative AI for Creative', 'AI-Native Strategy'] },
]

export default function About() {
  return (
    <div style={{ paddingTop: 60 }}>
      <div style={{ padding: '80px 40px 60px', maxWidth: 900, margin: '0 auto' }}>
        <div className="label">About</div>
        <h1 className="display" style={{ marginBottom: 24 }}>
          Paul Koshlap
        </h1>
        <div style={{ display: 'inline-flex', flexWrap: 'wrap', gap: 8, marginBottom: 48 }}>
          <span className="badge">Full-Stack Marketer</span>
          <span className="badge">Growth Strategist</span>
          <span className="badge badge-teal">AI-Native</span>
          <span className="badge">Meta Certified</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 48, marginBottom: 80 }}>
          <div>
            <p style={{ fontSize: 14, color: '#999', lineHeight: 1.9, marginBottom: 20 }}>
              I'm a full-stack marketer and growth strategist with 10 years of experience across every major channel — paid, organic, content, email, and influencer — backed by a deep foundation in measurement, messaging strategy, and copywriting.
            </p>
            <p style={{ fontSize: 14, color: '#888', lineHeight: 1.9, marginBottom: 20 }}>
              What actually sets me apart is what happens after the campaign launches. I build measurement infrastructure. I design incrementality testing frameworks. I work with analytics teams to move past platform-reported vanity metrics toward a clear, defensible picture of what's actually driving growth.
            </p>
            <p style={{ fontSize: 14, color: '#777', lineHeight: 1.9 }}>
              I'm also deeply AI-native — I've built real workflows, frameworks, and systems that integrate AI into strategy, creative development, and analytics in ways that change what's possible. AI fluency and first-principles thinking are inseparable for me — because the people who get the most from AI aren't the ones who learned the tools, they're the ones who understand how to reason from fundamentals to build systems others can't replicate. I design measurement systems and use AI to execute at a level that previously required a dedicated data science team.
            </p>
          </div>
          <div>
            <p style={{ fontSize: 14, color: '#777', lineHeight: 1.9, marginBottom: 20 }}>
              Before a single dollar is spent, I build the messaging architecture — mapping customer belief stages, identifying the narrative bridge, and developing creative strategy grounded in research rather than intuition. Great measurement tells you what worked. Great messaging strategy is why it worked in the first place.
            </p>
            <p style={{ fontSize: 14, color: '#444', lineHeight: 1.9, marginBottom: 32, fontStyle: 'italic', fontFamily: "'Cormorant Garamond', serif", fontSize: 18 }}>
              "The writer in me shows up too. I believe clarity is a competitive advantage — in messaging, in strategy, and in how you present data to a room full of skeptics."
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {['Meta Certified Media Buying Pro', 'UC Berkeley Extension', 'UCSB Film & Media'].map(cert => (
                <span key={cert} style={{ background: '#111', border: '1px solid #2A2A2A', borderRadius: 4, padding: '6px 12px', fontSize: 10, color: '#888' }}>{cert}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* EXPERIENCE */}
      <div className="section-alt">
        <div className="section-alt-inner">
          <div className="label">Experience</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {EXPERIENCE.map((exp, i) => (
              <div key={i} style={{
                background: '#0F0F0F',
                border: '1px solid #151515',
                borderLeft: '3px solid #C8A96E',
                borderRadius: 10,
                padding: '20px 20px 20px 24px',
                marginBottom: 6,
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: 6 }}>
                  <div>
                    <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 600, color: '#E8E4DC' }}>{exp.role}</span>
                    <span style={{ fontSize: 12, color: '#C8A96E', marginLeft: 12 }}>· {exp.company}</span>
                  </div>
                  <span style={{ fontSize: 10, color: '#333', letterSpacing: '0.05em' }}>{exp.period}</span>
                </div>
                <p style={{ fontSize: 12, color: '#777', lineHeight: 1.6 }}>{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SKILLS */}
      <div className="section">
        <div className="label">Skills & Expertise</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
          {SKILLS.map((skill, i) => (
            <div key={i} style={{ background: '#0C0C0C', border: '1px solid #1A1A1A', borderRadius: 12, padding: 20 }}>
              <div className="label" style={{ color: '#C8A96E', marginBottom: 14 }}>{skill.cat}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {skill.items.map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: '#666' }}>
                    <span style={{ color: '#2A2A2A' }}>→</span> {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Platforms */}
        <div style={{ marginTop: 32, background: '#0C0C0C', border: '1px solid #1A1A1A', borderRadius: 12, padding: 20 }}>
          <div className="label" style={{ marginBottom: 14 }}>Platforms & Tools</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {['Meta Ads', 'Google Ads', 'Google Analytics 4', 'TikTok Ads Manager', 'Klaviyo', 'SEMrush', 'HubSpot', 'Claude', 'ChatGPT', 'LinkedIn Campaign Manager', 'Pinterest Ads', 'Snapchat Ads'].map(tool => (
              <span key={tool} style={{ background: '#0F0F0F', border: '1px solid #1E1E1E', borderRadius: 4, padding: '5px 10px', fontSize: 10, color: '#444' }}>{tool}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="section-alt">
        <div className="section-alt-inner" style={{ textAlign: 'center', maxWidth: 500, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 600, marginBottom: 16 }}>
            Let's work together
          </h2>
          <p style={{ fontSize: 12, color: '#777', marginBottom: 28, lineHeight: 1.7 }}>Open to full-time roles and independent consulting engagements.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:paulkoshlap@gmail.com" className="btn-primary">Get In Touch</a>
            <a href="https://linkedin.com/in/paulkoshlap" className="btn-outline" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  )
}
