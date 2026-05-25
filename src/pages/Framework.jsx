import { useState } from 'react'

const STEPS = [
  { n: '01', title: 'Goal & Success Alignment', color: '#2D7A5F', desc: 'Define the ultimate business outcome. Every downstream decision is in service of this. Align all stakeholders before anything else moves.', detail: 'The highest-leverage step in the entire system. Misalignment here cascades into wasted budget, wrong channels, and unmeasurable results.', ai: 'Opportunity identification, stakeholder alignment frameworks, success metric modeling' },
  { n: '02', title: 'Customer Segmentation & Research', color: '#3A5BA0', desc: 'Search data, LLM-powered review mining, Reddit & blog analysis, competitor research, surveys, and sales team insights.', detail: 'Understanding who we\'re talking to and what they actually believe, fear, and want. Not assumptions — evidence.', ai: 'LLM research synthesis, sentiment analysis, audience modeling, review mining at scale' },
  { n: '03', title: 'Messaging Strategy', color: '#7D3C98', desc: 'The first phase of creative strategy. Formulate a belief-stage customer journey and core messaging architecture.', detail: 'Built on Eugene Schwartz awareness stages and StoryBrand framework. What does the customer believe now, what do they need to believe, and what\'s the narrative bridge?', ai: 'Message testing, copy generation, belief-stage journey mapping, creative brief development' },
  { n: '04', title: 'Channel Strategy', color: '#B7770D', desc: 'Inbound and outbound channel selection grounded in audience behavior — not platform preference or assumption.', detail: 'Channel follows message. The right channels are where your customer segments actually live at each belief stage.', ai: 'Channel mix modeling, budget allocation modeling, competitive channel analysis' },
  { n: '05', title: 'Activation', color: '#C0392B', desc: 'Building, launching, and managing paid campaigns, organic social, SEO/AIO, influencer, and affiliate.', detail: 'With upstream work done correctly, activation is precise and purposeful rather than experimental and reactive.', ai: 'Campaign builds, creative testing automation, optimization recommendations, bid strategy' },
  { n: '06', title: 'Reporting & Attribution', color: '#148F77', desc: 'Performance reporting grounded in the KPI framework established upstream. Platform data is directional, not gospel.', detail: 'True incrementality — the lift created over what would have happened anyway — is the real signal.', ai: 'Automated reporting, anomaly detection, attribution model comparison, executive summary generation' },
  { n: '07', title: 'Learning & Optimization', color: '#1A5276', desc: 'Insights feed back to the top of the hierarchy, re-informing all upstream steps. The system compounds over time.', detail: 'Every cycle of data makes the next cycle smarter — better segmentation, sharper messaging, more efficient channels.', ai: 'Pattern recognition, strategic recommendations, hypothesis generation for next test cycle' },
]

const MEASUREMENT = [
  { phase: 'I', title: 'Success Definition', desc: 'What is the ultimate business outcome? How will we measure it? All downstream measurement exists to predict and steer toward this.', position: 0 },
  { phase: 'II', title: 'Predictive KPI Framework', desc: 'Leading indicators set before activation. What signals predict success?', position: 3 },
  { phase: 'III', title: 'Reporting & Attribution', desc: 'Incrementality-first. Platform data is directional, not gospel.', position: 5 },
]

export default function Framework() {
  const [activeStep, setActiveStep] = useState(null)
  const [showAI, setShowAI] = useState(true)
  const [showMeasurement, setShowMeasurement] = useState(true)

  return (
    <div style={{ paddingTop: 60 }}>
      <div style={{ padding: '80px 40px 60px', maxWidth: 900, margin: '0 auto' }}>
        <div className="label">The System</div>
        <h1 className="display" style={{ marginBottom: 16 }}>
          First-Principles<br />
          <em className="gold">Marketing Framework</em>
        </h1>
        <p style={{ fontSize: 13, color: '#555', lineHeight: 1.8, maxWidth: 520, marginBottom: 32 }}>
          A comprehensive operating system for marketing — structured upstream to downstream, where the highest-leverage decisions inform everything that follows.
        </p>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 64 }}>
          <button
            onClick={() => setShowAI(!showAI)}
            style={{
              padding: '8px 16px', borderRadius: 20, fontSize: 11, cursor: 'pointer', fontFamily: "'DM Mono', monospace",
              background: showAI ? '#C8A96E' : 'transparent',
              color: showAI ? '#080808' : '#C8A96E',
              border: '1px solid #C8A96E',
              transition: 'all 0.2s ease',
            }}>
            {showAI ? '● AI Layer ON' : '○ AI Layer OFF'}
          </button>
          <button
            onClick={() => setShowMeasurement(!showMeasurement)}
            style={{
              padding: '8px 16px', borderRadius: 20, fontSize: 11, cursor: 'pointer', fontFamily: "'DM Mono', monospace",
              background: showMeasurement ? '#7EC8C8' : 'transparent',
              color: showMeasurement ? '#080808' : '#7EC8C8',
              border: '1px solid #7EC8C8',
              transition: 'all 0.2s ease',
            }}>
            {showMeasurement ? '● Measurement ON' : '○ Measurement OFF'}
          </button>
        </div>

        {/* Measurement I */}
        {showMeasurement && (
          <div style={{ background: 'rgba(13,43,43,0.8)', border: '1px solid #7EC8C8', borderRadius: 10, padding: '14px 20px', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 16 }}>
            <span style={{ background: '#7EC8C8', color: '#080808', borderRadius: 6, padding: '3px 10px', fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', whiteSpace: 'nowrap' }}>MEASUREMENT I</span>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#7EC8C8', marginBottom: 2 }}>Success Definition</div>
              <div style={{ fontSize: 11, color: '#5A8A8A' }}>Define the ultimate business outcome. All measurement downstream exists to predict and steer toward this.</div>
            </div>
          </div>
        )}

        {STEPS.map((step, i) => (
          <div key={i}>
            {showMeasurement && i === 3 && (
              <div style={{ background: 'rgba(13,43,43,0.8)', border: '1px solid #7EC8C8', borderLeft: '3px solid #7EC8C8', borderRadius: 10, padding: '12px 20px', marginBottom: 8, marginLeft: 32, display: 'flex', alignItems: 'center', gap: 16 }}>
                <span style={{ background: '#7EC8C8', color: '#080808', borderRadius: 6, padding: '3px 10px', fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', whiteSpace: 'nowrap' }}>MEASUREMENT II</span>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: '#7EC8C8', marginBottom: 2 }}>Predictive KPI Framework</div>
                  <div style={{ fontSize: 11, color: '#5A8A8A' }}>Leading indicators set before activation. What signals predict success?</div>
                </div>
              </div>
            )}

            {showMeasurement && i === 5 && (
              <div style={{ background: 'rgba(13,43,43,0.8)', border: '1px solid #7EC8C8', borderLeft: '3px solid #7EC8C8', borderRadius: 10, padding: '12px 20px', marginBottom: 8, marginLeft: 32, display: 'flex', alignItems: 'center', gap: 16 }}>
                <span style={{ background: '#7EC8C8', color: '#080808', borderRadius: 6, padding: '3px 10px', fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', whiteSpace: 'nowrap' }}>MEASUREMENT III</span>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: '#7EC8C8', marginBottom: 2 }}>Reporting & Attribution</div>
                  <div style={{ fontSize: 11, color: '#5A8A8A' }}>Incrementality-first. Platform data is directional, not gospel.</div>
                </div>
              </div>
            )}

            <div
              onClick={() => setActiveStep(activeStep === i ? null : i)}
              style={{
                background: activeStep === i ? '#111' : '#0C0C0C',
                border: `1px solid ${activeStep === i ? step.color : '#1A1A1A'}`,
                borderLeft: `4px solid ${step.color}`,
                borderRadius: 10,
                padding: '18px 20px',
                marginBottom: 6,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 900, color: '#222', minWidth: 40, lineHeight: 1, paddingTop: 2 }}>{step.n}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: 4 }}>
                    <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 600, color: '#E8E4DC' }}>{step.title}</span>
                    {showAI && (
                      <span style={{ background: 'rgba(200,169,110,0.08)', border: '1px solid rgba(200,169,110,0.3)', borderRadius: 20, padding: '3px 10px', fontSize: 10, color: '#C8A96E' }}>
                        ✦ AI: {step.ai.split(',')[0]}
                      </span>
                    )}
                  </div>
                  <p style={{ fontSize: 12, color: '#666', lineHeight: 1.6 }}>{step.desc}</p>
                  {activeStep === i && (
                    <div style={{ marginTop: 14, paddingTop: 14, borderTop: '1px solid #1A1A1A' }}>
                      <p style={{ fontSize: 12, color: '#888', lineHeight: 1.7, marginBottom: showAI ? 10 : 0 }}>{step.detail}</p>
                      {showAI && (
                        <div style={{ background: 'rgba(200,169,110,0.04)', border: '1px solid rgba(200,169,110,0.1)', borderRadius: 6, padding: '10px 14px', fontSize: 11, color: '#C8A96E' }}>
                          ✦ AI functions: {step.ai}
                        </div>
                      )}
                    </div>
                  )}
                </div>
                <div style={{ color: '#2A2A2A', fontSize: 16, paddingTop: 4, transition: 'transform 0.2s ease', transform: activeStep === i ? 'rotate(180deg)' : 'none' }}>▾</div>
              </div>
            </div>
          </div>
        ))}

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', gap: 12 }}>
          <div style={{ fontSize: 12, color: '#333', letterSpacing: '0.05em' }}>↑ Learning feeds back upstream — the system compounds over time ↑</div>
        </div>

        <div style={{ borderTop: '1px solid #151515', paddingTop: 24, marginTop: 16, display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          {[
            { color: '#C8A96E', label: 'AI Co-pilot Layer' },
            { color: '#7EC8C8', label: 'Measurement Stream' },
            { color: '#333', label: 'Core Framework Steps' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 12, height: 12, borderRadius: 2, background: item.color }} />
              <span style={{ fontSize: 11, color: '#444' }}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="section-alt">
        <div className="section-alt-inner" style={{ textAlign: 'center', maxWidth: 500, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 600, marginBottom: 16 }}>
            Ready to apply this<br /><em className="gold">to your business?</em>
          </h2>
          <p style={{ fontSize: 12, color: '#555', marginBottom: 28, lineHeight: 1.7 }}>The framework is the system. Let's talk about how it applies to your specific growth challenges.</p>
          <a href="mailto:paul@paulkoshlap.com" className="btn-primary">Let's Talk →</a>
        </div>
      </div>
    </div>
  )
}
