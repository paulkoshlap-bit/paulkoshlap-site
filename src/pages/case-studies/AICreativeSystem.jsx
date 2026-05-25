import { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'

const timeData = [
  { name: 'Traditional', days: 42, fill: '#B44444' },
  { name: 'AI System', days: 0.003, fill: '#C8A96E' },
]

const cpaData = [
  { name: 'Before', value: 100, fill: '#444' },
  { name: 'After', value: 78, fill: '#C8A96E' },
]

const VERTICALS = [
  { id: 'dtc', label: 'DTC Medical & Wellness', icon: '◈', challenge: 'High-consideration, emotion-driven purchases with complex belief journeys and regulatory sensitivity.', insight: 'Multi-segment journey maps revealed 4 distinct belief stages with fundamentally different messaging needs — impossible to surface without systematic research.' },
  { id: 'saas', label: 'B2B SaaS', icon: '◎', challenge: 'Multiple buyer personas at different awareness stages, each requiring distinct messaging to move the pipeline.', insight: 'Segmentation surfaced 3 distinct buyer archetypes requiring completely separate creative tracks.' },
  { id: 'vet', label: 'Veterinary Chain', icon: '✦', challenge: 'Trust-based decisions with strong emotional components. Geographic expansion with local authenticity tension.', insight: 'Journey mapping surfaced proactive wellness vs. reactive emergency as the central unmet messaging need.' },
]

export default function CaseStudyAICreative() {
  const [activeVertical, setActiveVertical] = useState('dtc')
  const v = VERTICALS.find(x => x.id === activeVertical)

  return (
    <div style={{ paddingTop: 60 }}>
      <div style={{ padding: '80px 40px 60px', maxWidth: 900, margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 24 }}>
          <span className="badge">Multi-Vertical</span>
          <span className="badge badge-teal">AI Workflows · Creative Strategy</span>
          <span className="badge">Case Study 001</span>
        </div>

        <h1 className="display" style={{ marginBottom: 20 }}>
          From Research to Creative Brief<br />
          <em className="gold">in Under Five Minutes</em>
        </h1>

        <p style={{ fontSize: 14, color: '#666', lineHeight: 1.8, maxWidth: 580, marginBottom: 48 }}>
          An AI system that compresses weeks of strategic research and creative development into a single workflow — delivering production-ready creative strategy grounded in real market intelligence.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 16 }}>
          {[
            { v: '22%', l: 'CPA Reduction' },
            { v: '< 5min', l: 'Research to Brief' },
            { v: '3', l: 'Verticals Validated' },
            { v: '3×', l: 'Angles Per Stage' },
          ].map((m, i) => (
            <div key={i} style={{ background: '#0F0F0F', border: '1px solid #1E1E1E', borderRadius: 12, padding: '20px', textAlign: 'center' }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 36, fontWeight: 700, color: '#C8A96E', lineHeight: 1, marginBottom: 6 }}>{m.v}</div>
              <div style={{ fontSize: 10, color: '#444', letterSpacing: '0.05em' }}>{m.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CHARTS */}
      <div className="section-alt">
        <div className="section-alt-inner">
          <div className="label">The Impact · Visualized</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 40 }}>
            <div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 600, marginBottom: 8 }}>Time to Brief</h3>
              <p style={{ fontSize: 11, color: '#555', marginBottom: 24 }}>Traditional (6 weeks) vs. AI System (5 min) — log scale</p>
              <div style={{ height: 220 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={timeData} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
                    <XAxis dataKey="name" tick={{ fill: '#444', fontSize: 10, fontFamily: "'DM Mono', monospace" }} axisLine={{ stroke: '#1A1A1A' }} tickLine={false} />
                    <YAxis tick={{ fill: '#444', fontSize: 10, fontFamily: "'DM Mono', monospace" }} axisLine={false} tickLine={false} scale="log" domain={[0.001, 100]} tickFormatter={v => v < 1 ? '< 1 day' : `${v}d`} />
                    <Tooltip contentStyle={{ background: '#0F0F0F', border: '1px solid #1A1A1A', borderRadius: 8, fontFamily: "'DM Mono', monospace", fontSize: 11 }} formatter={(v, n, p) => [p.payload.name === 'Traditional' ? '~42 days' : '< 5 minutes', 'Time']} cursor={{ fill: 'rgba(200,169,110,0.04)' }} />
                    <Bar dataKey="days" radius={[4, 4, 0, 0]} maxBarSize={100}>
                      {timeData.map((entry, i) => <Cell key={i} fill={entry.fill} />)}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 600, marginBottom: 8 }}>CPA Performance</h3>
              <p style={{ fontSize: 11, color: '#555', marginBottom: 24 }}>Indexed to baseline = 100. 22% reduction across tested accounts.</p>
              <div style={{ height: 220 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={cpaData} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
                    <XAxis dataKey="name" tick={{ fill: '#444', fontSize: 10, fontFamily: "'DM Mono', monospace" }} axisLine={{ stroke: '#1A1A1A' }} tickLine={false} />
                    <YAxis tick={{ fill: '#444', fontSize: 10, fontFamily: "'DM Mono', monospace" }} axisLine={false} tickLine={false} domain={[0, 120]} tickFormatter={v => `${v}`} />
                    <Tooltip contentStyle={{ background: '#0F0F0F', border: '1px solid #1A1A1A', borderRadius: 8, fontFamily: "'DM Mono', monospace", fontSize: 11 }} formatter={v => [`${v} (indexed)`, 'CPA']} cursor={{ fill: 'rgba(200,169,110,0.04)' }} />
                    <Bar dataKey="value" radius={[4, 4, 0, 0]} maxBarSize={100}>
                      {cpaData.map((entry, i) => <Cell key={i} fill={entry.fill} />)}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* VERTICALS */}
      <div className="section">
        <div className="label">Validated Across Verticals</div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 600, marginBottom: 32 }}>Same system. Three different worlds.</h2>

        <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
          {VERTICALS.map(vert => (
            <button
              key={vert.id}
              onClick={() => setActiveVertical(vert.id)}
              style={{
                padding: '10px 18px',
                borderRadius: 8,
                background: activeVertical === vert.id ? '#C8A96E' : 'transparent',
                color: activeVertical === vert.id ? '#080808' : '#555',
                border: `1px solid ${activeVertical === vert.id ? '#C8A96E' : '#222'}`,
                fontFamily: "'DM Mono', monospace",
                fontSize: 11,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >{vert.icon} {vert.label}</button>
          ))}
        </div>

        <div style={{ background: '#0C0C0C', border: '1px solid #1E1E1E', borderLeft: '3px solid #C8A96E', borderRadius: 12, padding: '28px 28px 28px 32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            <div>
              <div className="label" style={{ color: '#B44444', marginBottom: 8 }}>Challenge</div>
              <p style={{ fontSize: 12, color: '#555', lineHeight: 1.7 }}>{v.challenge}</p>
            </div>
            <div>
              <div className="label" style={{ color: '#C8A96E', marginBottom: 8 }}>Key Insight Surfaced</div>
              <p style={{ fontSize: 12, color: '#666', lineHeight: 1.7 }}>{v.insight}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section" style={{ textAlign: 'center', maxWidth: 500, margin: '0 auto' }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 600, marginBottom: 16 }}>
          Want to apply this<br /><em className="gold">to your brand?</em>
        </h2>
        <p style={{ fontSize: 12, color: '#555', marginBottom: 28, lineHeight: 1.7 }}>The system is running. The question is what it surfaces for you.</p>
        <a href="mailto:paul@paulkoshlap.com" className="btn-primary">Let's Talk →</a>
      </div>
    </div>
  )
}
