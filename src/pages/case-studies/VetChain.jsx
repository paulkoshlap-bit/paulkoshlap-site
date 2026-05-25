import { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie, Legend } from 'recharts'

const sentimentData = [
  { name: 'Availability\nConfusion', value: 44, fill: '#C8A96E' },
  { name: 'Scope\nMisperception', value: 31, fill: '#7EC8C8' },
  { name: 'Pricing\nUncertainty', value: 15, fill: '#444' },
  { name: 'Other', value: 10, fill: '#2A2A2A' },
]

const cpaData = [
  { name: 'Before', value: 100, fill: '#444' },
  { name: 'After', value: 83, fill: '#C8A96E' },
]

export default function CaseStudyVetChain() {
  return (
    <div style={{ paddingTop: 60 }}>
      <div style={{ padding: '80px 40px 60px', maxWidth: 900, margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 24 }}>
          <span className="badge">Regional Veterinary Chain · Anonymous</span>
          <span className="badge badge-teal">Meta Ads · Creative Strategy</span>
          <span className="badge">Case Study 002</span>
        </div>

        <h1 className="display" style={{ marginBottom: 20 }}>
          The Question Customers<br />
          <em className="gold">Were Already Asking</em>
        </h1>

        <p style={{ fontSize: 14, color: '#666', lineHeight: 1.8, maxWidth: 580, marginBottom: 48 }}>
          LLM-powered customer research surfaced a pain point the brand didn't know was losing them business. One insight. One message. A 17% reduction in CPA across the entire account.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 16 }}>
          {[
            { v: '17%', l: 'Account-Wide CPA Reduction' },
            { v: '#1', l: 'Pain Point Identified' },
            { v: '< 5min', l: 'Research to Insight' },
            { v: '7 days', l: 'Winning Ad Angle' },
          ].map((m, i) => (
            <div key={i} style={{ background: '#0F0F0F', border: '1px solid #1E1E1E', borderRadius: 12, padding: '20px', textAlign: 'center' }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 36, fontWeight: 700, color: '#C8A96E', lineHeight: 1, marginBottom: 6 }}>{m.v}</div>
              <div style={{ fontSize: 10, color: '#444', letterSpacing: '0.05em' }}>{m.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* SENTIMENT CHART */}
      <div className="section-alt">
        <div className="section-alt-inner">
          <div className="label">Customer Sentiment Distribution</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 600, marginBottom: 12 }}>
            What the Research Surfaced
          </h2>
          <p style={{ fontSize: 12, color: '#555', lineHeight: 1.8, maxWidth: 520, marginBottom: 40 }}>
            LLM-powered analysis of customer reviews, Reddit, and competitor data revealed the dominant pain point — "Are they open today?" — accounting for nearly half of all negative sentiment volume.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 40, alignItems: 'center' }}>
            <div style={{ height: 260 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={sentimentData} layout="vertical" margin={{ top: 0, right: 30, left: 20, bottom: 0 }}>
                  <XAxis type="number" tick={{ fill: '#444', fontSize: 10, fontFamily: "'DM Mono', monospace" }} axisLine={false} tickLine={false} tickFormatter={v => `${v}%`} />
                  <YAxis type="category" dataKey="name" tick={{ fill: '#666', fontSize: 10, fontFamily: "'DM Mono', monospace" }} axisLine={false} tickLine={false} width={90} />
                  <Tooltip contentStyle={{ background: '#0F0F0F', border: '1px solid #1A1A1A', borderRadius: 8, fontFamily: "'DM Mono', monospace", fontSize: 11 }} formatter={v => [`${v}%`, 'Sentiment Share']} cursor={{ fill: 'rgba(200,169,110,0.04)' }} />
                  <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                    {sentimentData.map((entry, i) => <Cell key={i} fill={entry.fill} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div>
              <div style={{ background: '#0F0F0F', border: '1px solid #1E1E1E', borderLeft: '3px solid #C8A96E', borderRadius: 10, padding: '20px 24px', marginBottom: 16 }}>
                <div className="label" style={{ color: '#C8A96E', marginBottom: 8 }}>Top Insight</div>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontStyle: 'italic', color: '#E8E4DC', lineHeight: 1.4, marginBottom: 8 }}>
                  "Are they even open today?"
                </p>
                <p style={{ fontSize: 11, color: '#555', lineHeight: 1.6 }}>
                  Customers were choosing competitors — not because of quality concerns — but because they didn't know the clinic was open 7 days a week.
                </p>
              </div>
              <div style={{ background: '#0F0F0F', border: '1px solid #1E1E1E', borderLeft: '3px solid #7EC8C8', borderRadius: 10, padding: '20px 24px' }}>
                <div className="label" style={{ color: '#7EC8C8', marginBottom: 8 }}>Second Insight</div>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontStyle: 'italic', color: '#E8E4DC', lineHeight: 1.4, marginBottom: 8 }}>
                  "I thought they only did checkups"
                </p>
                <p style={{ fontSize: 11, color: '#555', lineHeight: 1.6 }}>
                  High-value services were completely invisible to the patients who needed them most.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WINNING CREATIVE + CPA CHART */}
      <div className="section">
        <div className="label">The Creative & The Result</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 40, alignItems: 'start' }}>
          <div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 600, marginBottom: 20 }}>
              The Winning Angle
            </h2>
            <div style={{ background: '#0C0C0C', border: '1px solid #2A2A2A', borderRadius: 12, padding: 24, maxWidth: 340 }}>
              <div className="label" style={{ marginBottom: 12 }}>Meta Ad · Headline</div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 700, color: '#C8A96E', lineHeight: 1.2, marginBottom: 10 }}>
                Open 7 Days a Week.
              </div>
              <p style={{ fontSize: 12, color: '#555', lineHeight: 1.6, marginBottom: 16 }}>
                Your pet's health doesn't wait for Monday. Neither do we. Full-service wellness care, every day of the week.
              </p>
              <div style={{ display: 'inline-block', background: '#C8A96E', color: '#080808', borderRadius: 6, padding: '8px 16px', fontSize: 11, fontWeight: 500 }}>
                Book an Appointment →
              </div>
            </div>
            <p style={{ fontSize: 11, color: '#444', lineHeight: 1.7, marginTop: 16 }}>
              The insight was direct, so the creative was direct. No metaphor — just the answer to the question customers were already asking.
            </p>
          </div>

          <div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 600, marginBottom: 8 }}>CPA Impact</h2>
            <p style={{ fontSize: 11, color: '#555', marginBottom: 24 }}>Indexed to baseline = 100. 17% account-wide reduction.</p>
            <div style={{ height: 220 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={cpaData} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
                  <XAxis dataKey="name" tick={{ fill: '#444', fontSize: 10, fontFamily: "'DM Mono', monospace" }} axisLine={{ stroke: '#1A1A1A' }} tickLine={false} />
                  <YAxis tick={{ fill: '#444', fontSize: 10, fontFamily: "'DM Mono', monospace" }} axisLine={false} tickLine={false} domain={[0, 120]} />
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

      <div className="section" style={{ textAlign: 'center', maxWidth: 500, margin: '0 auto' }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 600, marginBottom: 16 }}>
          What are your customers<br /><em className="gold">already trying to tell you?</em>
        </h2>
        <p style={{ fontSize: 12, color: '#555', marginBottom: 28, lineHeight: 1.7 }}>The insight is usually already out there. The system surfaces it in minutes.</p>
        <a href="mailto:paul@paulkoshlap.com" className="btn-primary">Let's Talk →</a>
      </div>
    </div>
  )
}
