import { Lightbulb, Layers, Shield, Headphones, Code2, Rocket } from "lucide-react";

function InnovationVisual() {
  return (
    <div style={{ width: "100%", padding: "20px 24px", display: "flex", flexDirection: "column", gap: 10 }}>
      {["AI Integration", "Cloud Native", "API First", "Real-time"].map((tag, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--primary)", flexShrink: 0 }} />
          <div style={{ flex: 1, height: 8, borderRadius: 4, background: `linear-gradient(to right, var(--primary-glow), transparent)`, maxWidth: `${[80, 60, 90, 50][i]}%` }} />
          <span style={{ fontSize: 11, color: "var(--text-muted)", fontFamily: "monospace" }}>{tag}</span>
        </div>
      ))}
    </div>
  );
}

function ScaleVisual() {
  return (
    <div style={{ width: "100%", padding: "20px 24px", display: "flex", alignItems: "flex-end", gap: 8, justifyContent: "center" }}>
      {[40, 55, 70, 85, 100, 85, 95].map((h, i) => (
        <div key={i} style={{ flex: 1, borderRadius: 6, background: i === 4 ? "var(--primary)" : "var(--primary-glow)", height: h, transition: "height 0.3s" }} />
      ))}
    </div>
  );
}

function SecurityVisual() {
  return (
    <div style={{ width: "100%", padding: "20px 24px", display: "flex", flexDirection: "column", gap: 8 }}>
      {["Encrypted APIs", "Role-based Access", "Compliance Ready"].map((item, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 12px", borderRadius: 8, background: "var(--surface-2)", border: "1px solid var(--border)" }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", flexShrink: 0 }} />
          <span style={{ fontSize: 12, color: "var(--text-muted)" }}>{item}</span>
        </div>
      ))}
    </div>
  );
}

function SupportVisual() {
  return (
    <div style={{ width: "100%", padding: "20px 24px", display: "flex", flexDirection: "column", gap: 8 }}>
      {[
        { label: "Response Time", value: "< 2hrs" },
        { label: "Uptime SLA", value: "99.9%" },
        { label: "Availability", value: "24 / 7" },
      ].map((stat, i) => (
        <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", borderBottom: "1px solid var(--border)" }}>
          <span style={{ fontSize: 12, color: "var(--text-muted)" }}>{stat.label}</span>
          <span style={{ fontSize: 13, fontWeight: 700, color: "var(--primary)", fontFamily: "monospace" }}>{stat.value}</span>
        </div>
      ))}
    </div>
  );
}

function DevVisual() {
  return (
    <div style={{ width: "100%", padding: "16px 20px", display: "flex", flexDirection: "column", gap: 6 }}>
      {[
        { color: "#f97316", text: "Design  →  Develop" },
        { color: "#3b82f6", text: "QA  →  DevOps" },
        { color: "#22c55e", text: "Deploy  →  Maintain" },
      ].map((row, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 12px", borderRadius: 8, background: "var(--surface-2)" }}>
          <div style={{ width: 10, height: 10, borderRadius: 3, background: row.color, flexShrink: 0 }} />
          <span style={{ fontSize: 12, color: "var(--text-muted)", fontFamily: "monospace" }}>{row.text}</span>
        </div>
      ))}
    </div>
  );
}

function SpeedVisual() {
  return (
    <div style={{ width: "100%", padding: "20px 24px", display: "flex", gap: 12, justifyContent: "center" }}>
      {[
        { label: "Design", days: "3d", color: "#3b82f6" },
        { label: "Build",  days: "14d", color: "#f97316" },
        { label: "Ship",   days: "2d", color: "#22c55e" },
      ].map((phase, i) => (
        <div key={i} style={{ flex: 1, textAlign: "center", padding: "12px 8px", borderRadius: 12, background: "var(--surface-2)", border: "1px solid var(--border)" }}>
          <div style={{ fontSize: 18, fontWeight: 800, color: phase.color, fontFamily: "monospace" }}>{phase.days}</div>
          <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 4 }}>{phase.label}</div>
        </div>
      ))}
    </div>
  );
}

const cards = [
  {
    icon: Lightbulb,
    title: "Innovation Driven",
    description: "We stay ahead of the curve — adopting the latest technologies like AI, RCS, and cloud-native architectures to give your business a competitive edge.",
    visual: <InnovationVisual />,
    className: "",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    description: "From 100 users to 10 million — our systems grow with your business without breaking a sweat.",
    visual: <ScaleVisual />,
    className: "",
  },
  {
    icon: Code2,
    title: "End-to-End Development",
    description: "Design, development, QA, DevOps, and maintenance — all under one roof so you can focus on your business.",
    visual: <DevVisual />,
    className: "",
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Enterprise-grade security baked into every layer — encrypted APIs, role-based access, and compliance-ready infrastructure.",
    visual: <SecurityVisual />,
    className: "why-card-wide",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Real team, not a ticket queue. Dedicated account managers, fast response times, and 24/7 monitoring.",
    visual: <SupportVisual />,
    className: "",
  },
  
];

export default function WhyChooseUs() {
  return (
    <section className="why-section">
      <div className="why-header">
        <div className="why-badge">Why Choose Us</div>
        <h2 className="why-headline">Built for Businesses That Mean Business</h2>
        <p className="why-subtext">
          We don't just write code — we build products that perform, scale, and deliver real business outcomes.
        </p>
      </div>

      <div className="why-bento">
        {cards.map((card) => (
          <div key={card.title} className={`why-card ${card.className}`}>
            <div className="why-card-visual">
              {card.visual}
            </div>
            <div className="why-card-icon">
              <card.icon size={20} />
            </div>
            <div className="why-card-title">{card.title}</div>
            <p className="why-card-desc">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}