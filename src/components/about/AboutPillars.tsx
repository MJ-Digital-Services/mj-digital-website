import { Target, Eye, Sparkles } from "lucide-react";

const pillars = [
  {
    icon: Target,
    label: "Our Mission",
    title: "Build technology that powers businesses",
    desc: "We exist to give startups, enterprises, and government-focused organizations the digital infrastructure they need to grow — without the cost or complexity of building it themselves.",
  },
  {
    icon: Eye,
    label: "Our Vision",
    title: "Make world-class technology accessible to every business in India",
    desc: "From the smallest retail merchant to the largest enterprise, we believe every business deserves software that's fast, secure, and built to scale.",
  },
  {
    icon: Sparkles,
    label: "What Drives Us",
    title: "Solving real problems, one product at a time",
    desc: "Whether it's a kirana store accepting digital payments or a fintech company integrating an AEPS API in under a day — every product we ship makes someone's business easier.",
  },
];

export default function AboutPillars() {
  return (
    <section className="about-pillars">
      <div className="about-pillars-header">
        <div className="about-section-label">What We Stand For</div>
        <h2 className="about-section-title">
          Our mission, vision, and what drives us forward
        </h2>
      </div>
      <div className="about-pillars-grid">
        {pillars.map((p) => (
          <div key={p.label} className="about-pillar-card">
            <div className="about-pillar-icon"><p.icon size={22} /></div>
            <div className="about-pillar-label">{p.label}</div>
            <h3 className="about-pillar-title">{p.title}</h3>
            <p className="about-pillar-desc">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}