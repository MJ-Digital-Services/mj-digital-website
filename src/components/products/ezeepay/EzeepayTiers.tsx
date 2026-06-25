import { Users, Network, Building2, CheckCircle2, ArrowRight } from "lucide-react";

const tiers = [
  {
    tier: "Agent", icon: Users, earning: "₹30,000+", period: "per month",
    desc: "Become an EzeePay agent and offer all 60+ services. Earn commissions on every transaction.",
    perks: ["Low one-time investment", "Commission on every service", "Full training & support", "Marketing materials provided"],
  },
  {
    tier: "Distributor", icon: Network, earning: "₹50,000+", period: "per month",
    desc: "Build a network of agents. Earn up to 25% commission on every transaction across your network.",
    perks: ["No physical store needed", "25% commission rate", "Telecom · Pharma · Retail · FMCG", "10,000+ active distributors"],
  },
  {
    tier: "Master Distributor", icon: Building2, earning: "₹1,00,000+", period: "per month",
    desc: "Set up a full distribution chain. Manage multiple distributors and agents under one banner.",
    perks: ["Highest commission tier", "Multi-level network", "Griha Udyog & Self Help Groups", "Dedicated business support"],
    highlight: true,
  },
];

export default function EzeepayTiers() {
  return (
    <section className="ezp2-section ezp2-section-surface">
      <div className="ezp2-section-hd">
        <div className="ezp2-label">Become a Part of Us</div>
        <h2 className="ezp2-title">Three ways to earn with EzeePay</h2>
        <p className="ezp2-desc">Whether you want to run a single shop, build a distribution network, or launch a full chain.</p>
      </div>
      <div className="ezp2-tiers-grid">
        {tiers.map((t) => (
          <div key={t.tier} className={`ezp2-tier-card${t.highlight ? " ezp2-tier-highlight" : ""}`}>
            {t.highlight && <div className="ezp2-tier-ribbon">Highest Earning</div>}
            <div className="ezp2-tier-icon"><t.icon size={20} /></div>
            <div className="ezp2-tier-name">{t.tier}</div>
            <div className="ezp2-tier-earning">
              <span className="ezp2-tier-num">{t.earning}</span>
              <span className="ezp2-tier-period">{t.period}</span>
            </div>
            <p className="ezp2-tier-desc">{t.desc}</p>
            <ul className="ezp2-tier-perks">
              {t.perks.map((p) => (
                <li key={p}><CheckCircle2 size={12} />{p}</li>
              ))}
            </ul>
            <a href="https://ezeepay.app" target="_blank" rel="noopener noreferrer" className="ezp2-tier-cta">
              Apply as {t.tier} <ArrowRight size={13} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}