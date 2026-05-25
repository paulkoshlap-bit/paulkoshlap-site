import { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, LineChart, Line, CartesianGrid, ReferenceLine, Legend } from 'recharts'

const cpaCompare = [
  { name: 'Platform\nReported', value: 1500, fill: '#B44444' },
  { name: 'Incremental\nReality', value: 235, fill: '#C8A96E' },
]

const geoLift = [
  { week: 'Week 1', test: 100, control: 100 },
  { week: 'Week 2', test: 106, control: 101 },
  { week: 'Week 3', test: 111, control: 100 },
  { week: 'Week 4', test: 113, control: 99 },
]

const CustomTooltipCPA = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        background: '#0F0F0F',
        border: `1px solid ${payload[0].payload.fill}`,
        borderRadius: 8,
        padding: '10px 14px',
        fontFamily: "'DM Mono', monospace",
        fontSize: 12,
        color: payload[0].payload.fill,
      }}>
        ${payload[0].value.toLocaleString()} CPA
      </div>
    )
  }
  return null
}

const PHASES = [
  {
    n: '01', title: 'Signal Detection',
    desc: 'Small-scale synthetic control geo test identified promising incremental lift signal in high-propensity zip codes.',
    highlight: false,
  },
  {
    n: '02', title: 'Stakeholder Education & Buy-In',
    desc: 'Bridged the gap between platform attribution and incremental measurement — translating measurement science into business language that earned stakeholder confidence.',
    highlight: true,
  },
  {
    n: '03', title: 'Full-Scale Test Execution',
    desc: 'Deployed awareness objective in high-propensity zip codes with synthetic control geo selection. 4-week test window.',
    highlight: false,
  },
  {
    n: '04', title: 'Analysis & Projection',
    desc: '13% lift confirmed in targeted geos. Nationalized to project $50M incremental revenue at 3x ROI.',
    highlight: false,
  },
]

export default function CaseStudySonoBello() {
  const [activePhase, setActivePhase] = useState(null)

  return (
    <div style={{ paddingTop: 60 }}>
      {/* Header */}
      <div style={{ padding: '80px 40px 60px', maxWidth: 900, margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 24 }}>
          <span className="badge">Sono Bello · National Plastic Surgery</span>
          <span className="badge badge-teal">Instagram · Synthetic Control Geo Test</span>
          <span className="badge">Case Study 003</span>
        </div>

        <h1 className="display" style={{ marginBottom: 20 }}>
          The Revenue the Platform<br />
          <em className="gold">Couldn't See</em>
        </h1>

        <p style={{ fontSize: 14, color: '#666', lineHeight: 1.8, maxWidth: 580, marginBottom: 48 }}>
          Touch-based attribution was blind to Sono Bello's highest-value customers. A synthetic control geo test revealed what the platform couldn't measure — and projected $50M in incremental revenue at a 3x ROI.
        </p>

        {/* Metrics */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 16 }}>
          {[
            { v: '$50M', l: 'Incremental Revenue' },
            { v: '3x', l: 'Return on Investment' },
            { v: '13%', l: 'Geo Lift' },
            { v: '4 wks', l: 'Test Duration' },
          ].map((m, i) => (
            <div key={i} style={{
              background: '#0F0F0F',
              border: '1px solid #1E1E1E',
              borderRadius: 12,
              padding: '20px',
              textAlign: 'center',
            }}>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 38,
                fontWeight: 700,
                color: '#C8A96E',
                lineHeight: 1,
                marginBottom: 6,
              }}>{m.v}</div>
              <div style={{ fontSize: 10, color: '#444', letterSpacing: '0.05em' }}>{m.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* THE KEY INSIGHT */}
      <div className="section-alt">
        <div className="section-alt-inner">
          <div className="label">The Core Insight</div>

          <div style={{
            borderLeft: '2px solid #C8A96E',
            paddingLeft: 28,
            marginBottom: 40,
          }}>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(20px, 3vw, 28px)',
              fontStyle: 'italic',
              color: '#E8E4DC',
              lineHeight: 1.5,
            }}>
              "Platform attribution and incremental measurement aren't competing versions of the truth. They answer completely different questions — and confusing the two is one of the most expensive mistakes in performance marketing."
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            <div style={{ background: 'rgba(180,60,60,0.06)', border: '1px solid rgba(180,60,60,0.15)', borderRadius: 12, padding: 20 }}>
              <div className="label" style={{ color: '#B44444', marginBottom: 10 }}>Touch-Based Attribution Asks</div>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, color: '#888', fontStyle: 'italic', lineHeight: 1.5, marginBottom: 12 }}>
                "Which touchpoints did this customer hit before converting?"
              </p>
              <p style={{ fontSize: 11, color: '#444', lineHeight: 1.6 }}>Best for: tactical optimization, bid strategy, creative testing signals</p>
            </div>
            <div style={{ background: 'rgba(200,169,110,0.06)', border: '1px solid rgba(200,169,110,0.2)', borderRadius: 12, padding: 20 }}>
              <div className="label" style={{ color: '#C8A96E', marginBottom: 10 }}>Incrementality Asks</div>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, color: '#E8E4DC', fontStyle: 'italic', lineHeight: 1.5, marginBottom: 12 }}>
                "Would this conversion have happened without our ads?"
              </p>
              <p style={{ fontSize: 11, color: '#444', lineHeight: 1.6 }}>Best for: budget allocation, channel ROI, strategic investment decisions</p>
            </div>
          </div>
        </div>
      </div>

      {/* CPA COMPARISON CHART */}
      <div className="section">
        <div className="label">The Measurement Gap · Visualized</div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 600, marginBottom: 12 }}>
          Platform-Reported CPA vs. Incremental Reality
        </h2>
        <p style={{ fontSize: 12, color: '#555', lineHeight: 1.8, maxWidth: 520, marginBottom: 40 }}>
          The platform said each acquisition cost over $1,500. Incremental measurement revealed the real cost was $235. The difference wasn't a rounding error — it was the entire strategic narrative for the channel.
        </p>

        <div style={{ height: 320, marginBottom: 16 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={cpaCompare} margin={{ top: 10, right: 40, left: 40, bottom: 10 }}>
              <XAxis
                dataKey="name"
                tick={{ fill: '#444', fontSize: 11, fontFamily: "'DM Mono', monospace" }}
                axisLine={{ stroke: '#1A1A1A' }}
                tickLine={false}
              />
              <YAxis
                tick={{ fill: '#444', fontSize: 10, fontFamily: "'DM Mono', monospace" }}
                axisLine={false}
                tickLine={false}
                tickFormatter={v => `$${v.toLocaleString()}`}
              />
              <Tooltip content={<CustomTooltipCPA />} cursor={{ fill: 'rgba(200,169,110,0.04)' }} />
              <Bar dataKey="value" radius={[6, 6, 0, 0]} maxBarSize={120}>
                {cpaCompare.map((entry, i) => (
                  <Cell key={i} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div style={{
          background: 'rgba(180,60,60,0.04)',
          border: '1px solid rgba(180,60,60,0.15)',
          borderLeft: '2px solid #B44444',
          borderRadius: 10,
          padding: '16px 20px',
          fontSize: 12,
          color: '#555',
          lineHeight: 1.8,
        }}>
          <span style={{ color: '#B44444' }}>The invisible revenue problem: </span>
          Every dollar of this $50M would have been defunded as "unproven" based on platform numbers alone. Without incremental measurement, the entire channel investment would have been cut — eliminating the very spend driving real business outcomes.
        </div>
      </div>

      {/* GEO LIFT CHART */}
      <div className="section-alt">
        <div className="section-alt-inner">
          <div className="label">Geo Test Results</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 600, marginBottom: 12 }}>
            Test vs. Control Performance · 4-Week Window
          </h2>
          <p style={{ fontSize: 12, color: '#555', lineHeight: 1.8, maxWidth: 520, marginBottom: 40 }}>
            Indexed to baseline = 100. Targeted zip codes diverged from control geos over the 4-week test period, confirming 13% incremental lift attributable to the awareness campaign.
          </p>

          <div style={{ height: 280 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={geoLift} margin={{ top: 10, right: 30, left: 0, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1A1A1A" />
                <XAxis dataKey="week" tick={{ fill: '#444', fontSize: 10, fontFamily: "'DM Mono', monospace" }} axisLine={{ stroke: '#1A1A1A' }} tickLine={false} />
                <YAxis tick={{ fill: '#444', fontSize: 10, fontFamily: "'DM Mono', monospace" }} axisLine={false} tickLine={false} domain={[95, 120]} tickFormatter={v => `${v}`} />
                <Tooltip
                  contentStyle={{ background: '#0F0F0F', border: '1px solid #1A1A1A', borderRadius: 8, fontFamily: "'DM Mono', monospace", fontSize: 11 }}
                  labelStyle={{ color: '#666' }}
                  itemStyle={{ color: '#C8A96E' }}
                />
                <ReferenceLine y={100} stroke="#2A2A2A" strokeDasharray="4 4" />
                <Legend wrapperStyle={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: '#444' }} />
                <Line type="monotone" dataKey="test" stroke="#C8A96E" strokeWidth={2} dot={{ fill: '#C8A96E', r: 4 }} name="Test Geos (Targeted)" />
                <Line type="monotone" dataKey="control" stroke="#444" strokeWidth={1.5} dot={{ fill: '#444', r: 3 }} strokeDasharray="4 4" name="Control Geos" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* PROCESS */}
      <div className="section">
        <div className="label">The Process</div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 600, marginBottom: 32 }}>
          From Signal to $50M
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {PHASES.map((phase, i) => (
            <div
              key={i}
              onClick={() => setActivePhase(activePhase === i ? null : i)}
              style={{
                background: phase.highlight ? 'rgba(126,200,200,0.04)' : '#0C0C0C',
                border: `1px solid ${phase.highlight ? 'rgba(126,200,200,0.2)' : activePhase === i ? '#C8A96E' : '#1A1A1A'}`,
                borderLeft: phase.highlight ? '3px solid #7EC8C8' : undefined,
                borderRadius: 12,
                padding: '20px 24px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 700, color: '#1E1E1E', minWidth: 36 }}>{phase.n}</span>
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 20,
                    fontWeight: 600,
                    color: phase.highlight ? '#7EC8C8' : '#E8E4DC',
                    marginBottom: 6,
                  }}>{phase.title}</div>
                  <div style={{ fontSize: 12, color: '#555', lineHeight: 1.7 }}>{phase.desc}</div>
                </div>
                <div style={{ color: '#2A2A2A', fontSize: 16, transition: 'transform 0.2s ease', transform: activePhase === i ? 'rotate(180deg)' : 'none' }}>▾</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LESSON */}
      <div className="section-alt">
        <div className="section-alt-inner">
          <div className="label">The Broader Lesson</div>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(20px, 3vw, 28px)', color: '#BBB', lineHeight: 1.6, marginBottom: 20 }}>
            The measurement gap isn't just a technical problem — it's an organizational one. Closing it requires translating measurement science into business language that earns confidence and drives action.
          </p>
          <p style={{ fontSize: 12, color: '#555', lineHeight: 1.8 }}>
            The $50M didn't exist until someone asked the right question, designed the right test, and convinced the right people to run it. That translation layer — knowing which methodology to use and being able to explain it to a CMO in a way that moves the conversation forward — is as valuable as the measurement itself.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="section" style={{ textAlign: 'center', maxWidth: 500, margin: '0 auto' }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 600, marginBottom: 16 }}>
          What is your platform<br /><em className="gold">not able to see?</em>
        </h2>
        <p style={{ fontSize: 12, color: '#555', marginBottom: 28, lineHeight: 1.7 }}>
          The most valuable revenue is often the revenue your current measurement system can't measure.
        </p>
        <a href="mailto:paul@paulkoshlap.com" className="btn-primary">Let's Talk →</a>
      </div>
    </div>
  )
}
