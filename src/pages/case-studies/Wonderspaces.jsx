import { useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell,
  FunnelChart, Funnel, LabelList,
} from "recharts";

const funnelData = [
  { name: "Influencers Identified", value: 100, fill: "#2A2A2A" },
  { name: "Accepted Invite (73%)", value: 73, fill: "#C8A96E" },
  { name: "Showed Up Within 30 Days (50%+)", value: 38, fill: "#C8A96E" },
  { name: "Posted Content (~40%)", value: 15, fill: "#7EC8C8" },
];

const signalData = [
  { signal: "Followers", fakeability: 90, reliability: 10, fill: "#B44444" },
  { signal: "Likes", fakeability: 80, reliability: 20, fill: "#B44444" },
  { signal: "Canned Comments", fakeability: 60, reliability: 40, fill: "#B7770D" },
  { signal: "Genuine Comments", fakeability: 15, reliability: 85, fill: "#C8A96E" },
  { signal: "Algo Reach", fakeability: 5, reliability: 95, fill: "#7EC8C8" },
];

const INSIGHTS = [
  {
    id: "signal",
    icon: "◈",
    label: "Signal vs. Noise",
    headline: "Followers can be bought. Genuine comments can't.",
    detail: "The most important targeting insight: engagement quality, not quantity. Follower counts are easily faked. Likes are easily faked. Even comments can be gamed with canned responses. But high volumes of genuine, specific, non-templated comments signal one thing — the algorithm is actively distributing that content to real audiences. That's the signal worth chasing.",
    tag: "Primary Selection Criteria",
    tagColor: "#C8A96E",
  },
  {
    id: "targeting",
    icon: "◎",
    label: "Hashtag-Driven Discovery",
    headline: "Let the algorithm do the targeting work.",
    detail: "Rather than manually searching for influencers, we used relevant local hashtags to surface content the algorithm was already promoting. Top posts in those hashtag feeds had already been validated by the platform — high organic reach, real engagement, local audience. We focused on college students and women 20-30, Wonderspaces' primary demo, filtering for location to ensure relevance to people who could actually visit.",
    tag: "Discovery Methodology",
    tagColor: "#7EC8C8",
  },
  {
    id: "offer",
    icon: "✦",
    label: "Zero-Friction Offer",
    headline: "Two free tickets. No strings attached.",
    detail: "The DM led with value and removed all friction immediately. No lengthy pitch, no contract requirements, no posting obligations. Just: 'We love your content and think you'd love Wonderspaces — here are two free tickets, keep creating great stuff.' The 73% acceptance rate validates the approach. When you lead with genuine value and ask for nothing in return, the response rate speaks for itself.",
    tag: "Outreach Strategy",
    tagColor: "#C8A96E",
  },
  {
    id: "product",
    icon: "▸",
    label: "Product as Content",
    headline: "The museum's exhibits did the creative work.",
    detail: "The core strategic insight: Wonderspaces is inherently photogenic. The immersive, interactive exhibits are designed to be experienced and shared. Rather than briefing influencers on what to post or how to frame the brand, we trusted the product. People who love creating content walked into a space optimized for content creation. The result was authentic, diverse, high-quality posts that no paid campaign brief could have produced.",
    tag: "Strategic Insight",
    tagColor: "#7EC8C8",
  },
];

const TRADITIONAL = [
  { item: "Agency or platform fees", traditional: "$$$$", our: "—" },
  { item: "Influencer fees per post", traditional: "$500–$50,000+", our: "2 tickets (~$40)" },
  { item: "Contract negotiation", traditional: "Weeks", our: "None" },
  { item: "Legal review", traditional: "Required", our: "None" },
  { item: "Creative briefing", traditional: "Required", our: "None" },
  { item: "Post approval process", traditional: "Required", our: "None" },
  { item: "Content authenticity", traditional: "Variable", our: "High" },
  { item: "Acceptance rate", traditional: "10–30%", our: "73%" },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        background: "#0F0F0F",
        border: "1px solid #C8A96E",
        borderRadius: 8,
        padding: "10px 14px",
        fontFamily: "'DM Mono', monospace",
        fontSize: 11,
        color: "#C8A96E",
      }}>
        <div style={{ marginBottom: 4, color: "#666" }}>{label}</div>
        {payload.map((p, i) => (
          <div key={i}>{p.name}: {p.value}%</div>
        ))}
      </div>
    );
  }
  return null;
};

export default function CaseStudyWonderspaces() {
  const [activeInsight, setActiveInsight] = useState("signal");
  const insight = INSIGHTS.find((i) => i.id === activeInsight);

  return (
    <div style={{
      fontFamily: "'Georgia', serif",
      background: "#080808",
      minHeight: "100vh",
      color: "#E8E4DC",
      overflowX: "hidden",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Mono:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .fade-in { animation: fadeUp 0.4s ease forwards; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .insight-btn { transition: all 0.2s ease; cursor: pointer; border: none; }
        .insight-btn:hover { opacity: 0.85; }
        .compare-row:hover { background: rgba(200,169,110,0.04) !important; }
      `}</style>

      {/* Header */}
      <div style={{
        borderBottom: "1px solid #1A1A1A",
        padding: "32px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 16,
      }}>
        <div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.2em", color: "#444", textTransform: "uppercase", marginBottom: 6 }}>
            Paul Koshlap · Case Study 004
          </div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#C8A96E", letterSpacing: "0.1em" }}>
            PORTFOLIO · FIRST-PRINCIPLES MARKETING
          </div>
        </div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#333", letterSpacing: "0.1em" }}>paulkoshlap.com</div>
      </div>

      {/* Hero */}
      <div style={{ padding: "80px 40px 60px", maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
        <div style={{ display: "inline-flex", gap: 10, marginBottom: 28, flexWrap: "wrap", justifyContent: "center" }}>
          <div style={{ background: "rgba(200,169,110,0.08)", border: "1px solid rgba(200,169,110,0.2)", borderRadius: 20, padding: "6px 16px", fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#C8A96E", letterSpacing: "0.15em" }}>
            WONDERSPACES · IMMERSIVE MUSEUM
          </div>
          <div style={{ background: "rgba(126,200,200,0.08)", border: "1px solid rgba(126,200,200,0.2)", borderRadius: 20, padding: "6px 16px", fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#7EC8C8", letterSpacing: "0.15em" }}>
            INFLUENCER STRATEGY · INSTAGRAM
          </div>
          <div style={{ background: "rgba(200,169,110,0.08)", border: "1px solid rgba(200,169,110,0.2)", borderRadius: 20, padding: "6px 16px", fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#C8A96E", letterSpacing: "0.15em" }}>
            3 LOCATIONS
          </div>
        </div>

        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(36px, 6vw, 64px)",
          fontWeight: 600,
          lineHeight: 1.1,
          color: "#E8E4DC",
          marginBottom: 24,
          letterSpacing: "-0.02em",
        }}>
          The Influencer Strategy<br />
          That <em style={{ color: "#C8A96E" }}>Required No Contracts</em>
        </h1>

        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 13, color: "#666", lineHeight: 1.8, maxWidth: 580, margin: "0 auto 48px" }}>
          Instead of the cost, complexity, and friction of traditional influencer marketing, we built a system that activated hundreds of creators across three markets — with nothing but two free tickets and a DM.
        </p>

        {/* Key metrics */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 16, maxWidth: 700, margin: "0 auto" }}>
          {[
            { v: "73%", l: "DM Acceptance Rate" },
            { v: "50%+", l: "Showed Up Within 30 Days" },
            { v: "~40%", l: "Posted Organically" },
            { v: "Millions", l: "Impressions / Month" },
            { v: "$0", l: "Influencer Fees" },
            { v: "None", l: "Contracts Required" },
          ].map((m, i) => (
            <div key={i} style={{
              background: "linear-gradient(135deg, #0F0F0F, #141414)",
              border: `1px solid ${i >= 4 ? "rgba(126,200,200,0.2)" : "#222"}`,
              borderRadius: 12,
              padding: "20px 16px",
              textAlign: "center",
            }}>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: i >= 4 ? 28 : 36,
                fontWeight: 700,
                color: i >= 4 ? "#7EC8C8" : "#C8A96E",
                lineHeight: 1,
                marginBottom: 6,
              }}>{m.v}</div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, color: "#555", letterSpacing: "0.1em", textTransform: "uppercase", lineHeight: 1.5 }}>{m.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* THE INSIGHT */}
      <div style={{ background: "#0C0C0C", borderTop: "1px solid #151515", borderBottom: "1px solid #151515", padding: "64px 40px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#444", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 24 }}>The Core Insight</div>
          <div style={{ borderLeft: "2px solid #C8A96E", paddingLeft: 28, marginBottom: 32 }}>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(20px, 3vw, 30px)",
              fontWeight: 600,
              fontStyle: "italic",
              color: "#E8E4DC",
              lineHeight: 1.5,
            }}>
              "Traditional influencer marketing treats creators as media channels to buy. This strategy treated them as guests to invite — and let the product do the work."
            </p>
          </div>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 13, color: "#555", lineHeight: 1.8 }}>
            Wonderspaces' immersive exhibits are inherently photogenic. People who love creating content walk into a space optimized for content creation. The insight wasn't about influencer marketing tactics — it was about recognizing what the product already was, and removing every obstacle between that product and the people most likely to share it.
          </p>
        </div>
      </div>

      {/* SIGNAL vs NOISE CHART */}
      <div style={{ padding: "64px 40px", maxWidth: 800, margin: "0 auto" }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#444", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>The Selection Framework</div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 600, marginBottom: 12 }}>
          Parsing Signal from Noise on Organic Social
        </h2>
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: "#555", lineHeight: 1.8, maxWidth: 560, marginBottom: 40 }}>
          Most influencer selection is based on the metrics most easily faked. We built our targeting around the signal that actually predicts organic reach — genuine comment quality and algorithm behavior.
        </p>

        <div style={{ height: 280, marginBottom: 24 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={signalData} margin={{ top: 10, right: 20, left: 0, bottom: 10 }} layout="vertical">
              <XAxis type="number" tick={{ fill: "#444", fontSize: 10, fontFamily: "'DM Mono', monospace" }} axisLine={false} tickLine={false} tickFormatter={v => `${v}%`} domain={[0, 100]} />
              <YAxis type="category" dataKey="signal" tick={{ fill: "#666", fontSize: 11, fontFamily: "'DM Mono', monospace" }} axisLine={false} tickLine={false} width={120} />
              <Tooltip content={({ active, payload, label }) => {
                if (active && payload?.length) {
                  return (
                    <div style={{ background: "#0F0F0F", border: "1px solid #1A1A1A", borderRadius: 8, padding: "10px 14px", fontFamily: "'DM Mono', monospace", fontSize: 11 }}>
                      <div style={{ color: "#666", marginBottom: 4 }}>{label}</div>
                      <div style={{ color: payload[0].payload.fill }}>Reliability: {payload[0].payload.reliability}%</div>
                      <div style={{ color: "#B44444" }}>Fakeability: {payload[0].payload.fakeability}%</div>
                    </div>
                  );
                }
                return null;
              }} cursor={{ fill: "rgba(200,169,110,0.04)" }} />
              <Bar dataKey="reliability" radius={[0, 4, 4, 0]} maxBarSize={32}>
                {signalData.map((entry, i) => (
                  <Cell key={i} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
          <div style={{ background: "rgba(180,60,60,0.06)", border: "1px solid rgba(180,60,60,0.15)", borderRadius: 10, padding: "16px 20px" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, color: "#B44444", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8 }}>What Everyone Uses</div>
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: "#555", lineHeight: 1.6 }}>Followers, likes, and generic engagement rates — all easily gamed, all poor predictors of real organic reach.</p>
          </div>
          <div style={{ background: "rgba(200,169,110,0.06)", border: "1px solid rgba(200,169,110,0.2)", borderRadius: 10, padding: "16px 20px" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, color: "#C8A96E", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8 }}>What Actually Works</div>
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: "#555", lineHeight: 1.6 }}>High volumes of genuine, specific, non-templated comments signal algorithm distribution to real audiences. That's the metric that predicts actual reach.</p>
          </div>
        </div>
      </div>

      {/* FOUR INSIGHTS */}
      <div style={{ background: "#0C0C0C", borderTop: "1px solid #151515", borderBottom: "1px solid #151515", padding: "64px 40px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#444", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 32 }}>How It Worked</div>

          <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
            {INSIGHTS.map((ins) => (
              <button
                key={ins.id}
                className="insight-btn"
                onClick={() => setActiveInsight(ins.id)}
                style={{
                  padding: "10px 18px",
                  borderRadius: 8,
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 11,
                  background: activeInsight === ins.id ? "#C8A96E" : "transparent",
                  color: activeInsight === ins.id ? "#080808" : "#555",
                  border: `1px solid ${activeInsight === ins.id ? "#C8A96E" : "#222"}`,
                  letterSpacing: "0.05em",
                }}>
                {ins.icon} {ins.label}
              </button>
            ))}
          </div>

          <div className="fade-in" key={activeInsight} style={{
            background: "#0F0F0F",
            border: "1px solid #1E1E1E",
            borderLeft: "3px solid #C8A96E",
            borderRadius: 12,
            padding: "28px 28px 28px 32px",
          }}>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(18px, 2.5vw, 24px)", fontWeight: 600, fontStyle: "italic", color: "#E8E4DC", marginBottom: 16, lineHeight: 1.4 }}>
              {insight.headline}
            </div>
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: "#555", lineHeight: 1.8, marginBottom: 16 }}>
              {insight.detail}
            </p>
            <div style={{
              display: "inline-block",
              background: `rgba(200,169,110,0.08)`,
              border: `1px solid rgba(200,169,110,0.2)`,
              borderRadius: 8,
              padding: "5px 12px",
              fontFamily: "'DM Mono', monospace",
              fontSize: 9,
              color: insight.tagColor,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}>{insight.tag}</div>
          </div>
        </div>
      </div>

      {/* FUNNEL */}
      <div style={{ padding: "64px 40px", maxWidth: 800, margin: "0 auto" }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#444", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>The Funnel</div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 600, marginBottom: 12 }}>
          From Identification to Impressions
        </h2>
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: "#555", lineHeight: 1.8, maxWidth: 520, marginBottom: 40 }}>
          Indexed to 100 outreach contacts. Every stage outperformed traditional influencer benchmarks — at a fraction of the cost.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {funnelData.map((stage, i) => (
            <div key={i} style={{
              background: "#0C0C0C",
              border: "1px solid #1A1A1A",
              borderRadius: 10,
              padding: "16px 20px",
              position: "relative",
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                top: 0, left: 0, bottom: 0,
                width: `${stage.value}%`,
                background: stage.fill === "#7EC8C8" ? "rgba(126,200,200,0.06)" : "rgba(200,169,110,0.06)",
                transition: "width 1s ease",
              }} />
              <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: "#666" }}>{stage.name}</span>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, fontWeight: 700, color: stage.fill }}>{stage.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* VS TRADITIONAL */}
      <div style={{ background: "#0C0C0C", borderTop: "1px solid #151515", borderBottom: "1px solid #151515", padding: "64px 40px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#444", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>The Comparison</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 600, marginBottom: 40 }}>
            Traditional vs. This Approach
          </h2>

          <div style={{ background: "#0F0F0F", border: "1px solid #1A1A1A", borderRadius: 12, overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", background: "#111", padding: "12px 20px", borderBottom: "1px solid #1A1A1A" }}>
              {["", "Traditional", "This Approach"].map((h, i) => (
                <div key={i} style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, color: i === 2 ? "#C8A96E" : "#444", letterSpacing: "0.15em", textTransform: "uppercase" }}>{h}</div>
              ))}
            </div>
            {TRADITIONAL.map((row, i) => (
              <div key={i} className="compare-row" style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                padding: "14px 20px",
                borderBottom: i < TRADITIONAL.length - 1 ? "1px solid #151515" : "none",
                background: "transparent",
                transition: "background 0.2s ease",
              }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#555" }}>{row.item}</div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#B44444" }}>{row.traditional}</div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#C8A96E" }}>{row.our}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RESULTS */}
      <div style={{ padding: "64px 40px", maxWidth: 800, margin: "0 auto" }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#444", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 32 }}>Results</div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, marginBottom: 24 }}>
          {[
            { v: "73%", l: "Influencer acceptance rate", highlight: true },
            { v: "Millions", l: "Organic impressions / month", highlight: true },
            { v: "$0", l: "Influencer fees across 3 locations", highlight: false, teal: true },
            { v: "None", l: "Contracts or legal review required", highlight: false, teal: true },
          ].map((r, i) => (
            <div key={i} style={{
              background: r.teal ? "rgba(126,200,200,0.04)" : "rgba(200,169,110,0.04)",
              border: `1px solid ${r.teal ? "rgba(126,200,200,0.2)" : "rgba(200,169,110,0.15)"}`,
              borderRadius: 12,
              padding: "24px 20px",
              textAlign: "center",
            }}>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 40,
                fontWeight: 700,
                color: r.teal ? "#7EC8C8" : "#C8A96E",
                lineHeight: 1,
                marginBottom: 10,
              }}>{r.v}</div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#555", lineHeight: 1.5, letterSpacing: "0.05em" }}>{r.l}</div>
            </div>
          ))}
        </div>

        <div style={{
          padding: "20px 24px",
          background: "#0C0C0C",
          border: "1px solid #151515",
          borderLeft: "2px solid #C8A96E",
          borderRadius: 12,
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 18,
          fontStyle: "italic",
          color: "#888",
          lineHeight: 1.7,
        }}>
          "The best influencer strategy isn't about finding the right people to pay. It's about finding the right people to invite — and building a product worth posting about."
        </div>
      </div>

      {/* REPLICABLE FRAMEWORK */}
      <div style={{ background: "#0C0C0C", borderTop: "1px solid #151515", borderBottom: "1px solid #151515", padding: "64px 40px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#444", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 24 }}>The Replicable Framework</div>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(20px, 3vw, 26px)", color: "#BBB", lineHeight: 1.6, marginBottom: 24 }}>
            This isn't a one-off tactic. It's a replicable system for any brand whose product is inherently visual, experiential, or shareable.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              { n: "01", t: "Identify target demo via hashtag research", d: "Let the algorithm surface creators who are already reaching your audience. Top posts in relevant hashtags have been validated by the platform." },
              { n: "02", t: "Filter for genuine engagement signals", d: "Prioritize non-templated comment quality over follower count or likes. Genuine comments signal algorithm distribution — the metric that actually predicts reach." },
              { n: "03", t: "Apply local targeting", d: "Focus on creators whose audience can realistically engage with your product. Reach without proximity is vanity for location-dependent businesses." },
              { n: "04", t: "Lead with value, ask for nothing", d: "A low-friction offer with no posting obligation produces dramatically higher acceptance rates and more authentic content than transactional contracts." },
              { n: "05", t: "Let the product do the creative work", d: "Brief the experience, not the content. Creators produce better, more authentic posts when they're genuinely experiencing something worth sharing." },
            ].map((step, i) => (
              <div key={i} style={{
                background: "#0F0F0F",
                border: "1px solid #1A1A1A",
                borderLeft: "3px solid #C8A96E",
                borderRadius: 8,
                padding: "16px 16px 16px 20px",
              }}>
                <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 700, color: "#222", minWidth: 28 }}>{step.n}</span>
                  <div>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 17, fontWeight: 600, color: "#E8E4DC", marginBottom: 4 }}>{step.t}</div>
                    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#444", lineHeight: 1.6 }}>{step.d}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: "64px 40px", textAlign: "center" }}>
        <div style={{ maxWidth: 500, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 600, color: "#E8E4DC", marginBottom: 16, lineHeight: 1.3 }}>
            Is your product worth<br /><em style={{ color: "#C8A96E" }}>posting about?</em>
          </h2>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: "#444", marginBottom: 28, lineHeight: 1.7 }}>
            If it is, there's a more efficient, more authentic, and more scalable influencer strategy available to you.
          </p>
          <a href="mailto:paul@paulkoshlap.com" className="btn-primary" style={{
            display: "inline-block",
            background: "#C8A96E",
            color: "#080808",
            borderRadius: 8,
            padding: "14px 28px",
            fontFamily: "'DM Mono', monospace",
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: "0.05em",
            cursor: "pointer",
            textDecoration: "none",
          }}>Let's Talk →</a>
        </div>
      </div>

      <div style={{ padding: "24px 40px", textAlign: "center", fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#2A2A2A", letterSpacing: "0.05em" }}>
        © Paul Koshlap · paulkoshlap.com
      </div>
    </div>
  );
}
