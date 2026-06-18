import { Wallet, Sparkles, TrendingUp, Award } from "lucide-react";

const benefits = [
  { icon: Wallet,     title: "Minimum Investment",       desc: "Start with very low capital. Turn your existing shop into a full-service banking outlet — no separate setup needed." },
  { icon: Sparkles,   title: "60+ Services Ready",       desc: "One platform, multiple revenue streams. Serve customers across banking, bills, travel, and recharge from one app." },
  { icon: TrendingUp, title: "Earn on Every Transaction",desc: "Commission on every service you provide. Distributors earn up to 25% — no cap on monthly income." },
  { icon: Award,      title: "Trust & Credibility",      desc: "Part of India's largest agent network — 5 lakh+ agents already serving customers across 100+ districts." },
];

export default function EzeepayBenefits() {
  return (
    <section className="ezp2-section">
      <div className="ezp2-section-hd">
        <div className="ezp2-label">Why EzeePay</div>
        <h2 className="ezp2-title">The benefits of joining<br /><span className="ezp2-title-accent">India's biggest network</span></h2>
      </div>
      <div className="ezp2-benefits-grid">
        {benefits.map((b) => (
          <div key={b.title} className="ezp2-benefit-card">
            <div className="ezp2-benefit-icon"><b.icon size={20} /></div>
            <h3>{b.title}</h3>
            <p>{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}