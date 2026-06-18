"use client";

import Link from "next/link";
import {
  ArrowRight, ExternalLink, Download,
  Banknote, Receipt, Plane, Tv, Smartphone, MoreHorizontal,
  Shield, TrendingUp, Award, Wallet,
  Building2, MapPin, Users, Network,
  CheckCircle2, Sparkles, ArrowUpRight,
} from "lucide-react";

const heroStats = [
  { value: "5L+",   label: "Active Agents",       icon: Users },
  { value: "8.3K+", label: "Distributors",         icon: Network },
  { value: "100+",  label: "District Franchises",  icon: MapPin },
  { value: "60+",   label: "Digital Services",     icon: Sparkles },
];

const services = [
  { icon: Banknote,      title: "Banking Services",      items: ["AEPS Cash Withdrawal", "Aadhaar Pay", "Money Transfer", "Micro ATM", "Open Bank Account"] },
  { icon: Receipt,       title: "Bill Payments",         items: ["Electricity Bills", "Water Bills", "Gas Bills", "Insurance Premium", "Loan EMI"] },
  { icon: Plane,         title: "Travel Booking",        items: ["Flight Tickets", "Bus Booking", "Train Reservations", "Hotel Booking"] },
  { icon: Smartphone,    title: "Recharge & DTH",        items: ["Mobile Recharge", "DTH Recharge", "Data Card Recharge", "Landline"] },
  { icon: Tv,            title: "OTT & Subscriptions",   items: ["OTT Subscriptions", "Streaming Services", "Digital Subscriptions"] },
  { icon: MoreHorizontal,title: "60+ More Services",     items: ["Insurance", "E-Governance", "Neo Banking", "PAN Card Services", "And more..."] },
];

const benefits = [
  { icon: Wallet,    title: "Minimum Investment",   desc: "Start with very low capital. Turn your existing shop into a full-service banking outlet — no separate setup needed." },
  { icon: Sparkles,  title: "60+ Services Ready",   desc: "One platform, multiple revenue streams. Serve customers across banking, bills, travel, and recharge from one app." },
  { icon: TrendingUp,title: "Earn on Every Transaction", desc: "Commission on every service you provide. Distributors earn up to 25% — no cap on monthly income." },
  { icon: Award,     title: "Trust & Credibility",  desc: "Part of India's largest agent network — 5 lakh+ agents already serving customers across 100+ districts." },
];

const partnerTiers = [
  {
    tier: "Agent",
    icon: Users,
    earning: "₹50,000+",
    period: "per month",
    desc: "Become an EzeePay agent and offer all 60+ services to your customers. Earn commissions on every transaction.",
    perks: ["Low one-time investment", "Commission on every service", "Full training & support", "Marketing materials provided"],
  },
  {
    tier: "Distributor",
    icon: Network,
    earning: "₹50,000+",
    period: "per month",
    desc: "Build a network of agents. Earn up to 25% commission on every transaction across your agent network.",
    perks: ["No physical store needed", "25% commission rate", "Telecom · Pharma · Retail · FMCG", "10,000+ active distributors"],
  },
  {
    tier: "Master Distributor",
    icon: Building2,
    earning: "₹1,50,000+",
    period: "per month",
    desc: "Set up a full distribution chain. Manage multiple distributors and agents under one banner.",
    perks: ["Highest commission tier", "Multi-level network", "Griha Udyog & Self Help Groups", "Dedicated business support"],
    highlight: true,
  },
];

const trustPartners = [
  { name: "Protean",               logo: "/partners/protean.png" },
  { name: "Mantra",                logo: "/partners/mantra.png" },
  { name: "Mentation Technologies",logo: "/partners/mentation.png" },
  { name: "Noble Web Studio",      logo: "/partners/noble-web-studio.png" },
  { name: "CredoPay",              logo: "/partners/credopay.png" },
  { name: "Arthmate",              logo: "/partners/arthmate.png" },
];

export default function EzeepayPage() {
  return (
    <main style={{ background: "var(--background)", minHeight: "100vh" }}>

      {/* ── Builder ribbon ── */}
      <div className="ezp2-ribbon">
        <div className="ezp2-ribbon-inner">
          <span>Built by</span>
          <Link href="/" className="ezp2-ribbon-brand">MJ Digital Services <ArrowUpRight size={12} /></Link>
          <span className="ezp2-ribbon-sep" />
          <span>A flagship fintech product</span>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="ezp2-hero">
        <div className="ezp2-hero-inner">

          {/* Left */}
          <div className="ezp2-hero-left">
            <div className="ezp2-hero-logo">
              <img src="/ezeepay-logo.png" alt="EzeePay" />
              <span>EzeePay</span>
            </div>

            <h1 className="ezp2-hero-title">
              Make Your Shop a<br />
              <span className="ezp2-hero-accent">Mini ATM</span>
            </h1>

            <p className="ezp2-hero-sub">
              India's largest agent banking network. Offer 60+ digital services — AEPS, money transfer, bill payments, recharge — and earn commissions on every transaction.
            </p>

            <div className="ezp2-hero-trust">
              <CheckCircle2 size={15} style={{ color: "var(--primary)", flexShrink: 0 }} />
              Trusted by <strong>5,00,000+ agents</strong> across India
            </div>

            <div className="ezp2-hero-ctas">
              <a href="https://ezeepay.app" target="_blank" rel="noopener noreferrer" className="ezp2-btn-primary">
                Visit EzeePay <ExternalLink size={14} />
              </a>
              <a href="https://ezeepay.app" target="_blank" rel="noopener noreferrer" className="ezp2-btn-outline">
                <Download size={14} /> Download App
              </a>
            </div>

            {/* Inline stats */}
            <div className="ezp2-hero-stats">
              {heroStats.map((s, i) => (
                <div key={s.label} className="ezp2-hero-stat">
                  <div className="ezp2-hero-stat-val">{s.value}</div>
                  <div className="ezp2-hero-stat-label">{s.label}</div>
                  {i < heroStats.length - 1 && <div className="ezp2-hero-stat-div" />}
                </div>
              ))}
            </div>
          </div>

          {/* Right — real screenshot */}
          <div className="ezp2-hero-right">
            <div className="ezp2-screenshot-frame">
              <img
                src="/products/ezeepay-screenshot.png"
                alt="EzeePay App"
                className="ezp2-screenshot-img"
              />
            </div>
            {/* Floating badge */}
            <div className="ezp2-float-badge ezp2-float-1">
              <div className="ezp2-float-dot" />
              <div>
                <div className="ezp2-float-val">60+</div>
                <div className="ezp2-float-lbl">Services</div>
              </div>
            </div>
            <div className="ezp2-float-badge ezp2-float-2">
              <div className="ezp2-float-dot" />
              <div>
                <div className="ezp2-float-val">5L+</div>
                <div className="ezp2-float-lbl">Agents</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services grid ── */}
      <section className="ezp2-section ezp2-section-surface">
        <div className="ezp2-section-hd">
          <div className="ezp2-label">One App · Multiple Services</div>
          <h2 className="ezp2-title">60+ digital services<br /><span className="ezp2-title-accent">from a single platform</span></h2>
          <p className="ezp2-desc">From banking to bill payments, travel to entertainment — EzeePay agents offer everything from one app.</p>
        </div>
        <div className="ezp2-services-grid">
          {services.map((s) => (
            <div key={s.title} className="ezp2-service-card">
              <div className="ezp2-service-icon"><s.icon size={20} /></div>
              <h3 className="ezp2-service-title">{s.title}</h3>
              <ul className="ezp2-service-list">
                {s.items.map((item) => (
                  <li key={item}><CheckCircle2 size={12} />{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Why EzeePay ── */}
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

      {/* ── Partner tiers ── */}
      <section className="ezp2-section ezp2-section-surface">
        <div className="ezp2-section-hd">
          <div className="ezp2-label">Become a Part of Us</div>
          <h2 className="ezp2-title">Three ways to earn with EzeePay</h2>
          <p className="ezp2-desc">Whether you want to run a single shop, build a distribution network, or launch a full chain.</p>
        </div>
        <div className="ezp2-tiers-grid">
          {partnerTiers.map((t) => (
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

      {/* ── Trust partners ── */}
      <section className="ezp2-section">
        <div className="ezp2-section-hd">
          <div className="ezp2-label">Trust & Partnerships</div>
          <h2 className="ezp2-title">Backed by India's leading<br /><span className="ezp2-title-accent">technology partners</span></h2>
        </div>
        <div className="ezp2-partners-grid">
          {trustPartners.map((p) => (
            <div key={p.name} className="ezp2-partner-card">
              <img src={p.logo} alt={`${p.name} logo`} />
            </div>
          ))}
        </div>
        <div className="ezp2-trust-strip">
          <Shield size={15} />
          Registered with <strong>Dun &amp; Bradstreet</strong> · Lending partnership with <strong>Arthmate</strong>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="ezp2-cta-section">
        <div className="ezp2-cta-inner">
          <div className="ezp2-label ezp2-label-light">Start Earning Today</div>
          <h2 className="ezp2-cta-title">Ready to make your shop<br />a <span className="ezp2-cta-accent">Mini ATM?</span></h2>
          <p className="ezp2-cta-sub">Join 5,00,000+ agents earning with EzeePay. Sign up, download the app, and start serving customers from day one.</p>
          <div className="ezp2-cta-btns">
            <a href="https://ezeepay.app" target="_blank" rel="noopener noreferrer" className="ezp2-cta-btn-primary">
              Visit EzeePay.app <ExternalLink size={14} />
            </a>
            <Link href="/contact" className="ezp2-cta-btn-outline">Talk to MJ Digital</Link>
          </div>
          <div className="ezp2-cta-note">
            EzeePay is a product of <Link href="/" className="ezp2-cta-note-link">MJ Digital Services Pvt. Ltd.</Link>
          </div>
        </div>
      </section>

      <style>{`

        /* ── RIBBON ── */
        .ezp2-ribbon {
          background: var(--surface);
          border-bottom: 1px solid var(--border);
          padding: 10px 24px;
        }
        .ezp2-ribbon-inner {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12.5px;
          color: var(--text-muted);
          font-family: var(--font-sans);
        }
        .ezp2-ribbon-brand {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-weight: 700;
          color: var(--primary);
          text-decoration: none;
          transition: opacity 0.2s;
        }
        .ezp2-ribbon-brand:hover { opacity: 0.75; }
        .ezp2-ribbon-sep {
          width: 1px;
          height: 12px;
          background: var(--border);
          margin: 0 4px;
        }

        /* ── HERO ── */
        .ezp2-hero {
          padding: 64px 24px 80px;
          background: var(--background);
        }
        .ezp2-hero-inner {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .ezp2-hero-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 28px;
        }
        .ezp2-hero-logo img {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          object-fit: contain;
          border: 1px solid var(--border);
          background: #fff;
          padding: 4px;
        }
        .ezp2-hero-logo span {
          font-family: var(--font-display);
          font-size: 20px;
          font-weight: 700;
          color: var(--text-primary);
        }
        .ezp2-hero-title {
          font-family: var(--font-display);
          font-size: clamp(38px, 5vw, 64px);
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.03em;
          line-height: 1.05;
          margin-bottom: 20px;
        }
        .ezp2-hero-accent {
          color: var(--primary);
        }
        .ezp2-hero-sub {
          font-size: 16px;
          color: var(--text-muted);
          line-height: 1.75;
          margin-bottom: 20px;
          max-width: 500px;
        }
        .ezp2-hero-trust {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13.5px;
          color: var(--text-muted);
          font-family: var(--font-sans);
          margin-bottom: 32px;
        }
        .ezp2-hero-trust strong { color: var(--text-primary); font-weight: 700; }
        .ezp2-hero-ctas {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }

        /* Buttons */
        .ezp2-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 26px;
          background: var(--primary);
          color: #fff;
          border-radius: 100px;
          font-size: 14px;
          font-weight: 600;
          font-family: var(--font-sans);
          text-decoration: none;
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
        }
        .ezp2-btn-primary:hover {
          background: var(--primary-dark);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px var(--primary-glow);
        }
        .ezp2-btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 26px;
          background: transparent;
          color: var(--text-primary);
          border: 1.5px solid var(--border);
          border-radius: 100px;
          font-size: 14px;
          font-weight: 600;
          font-family: var(--font-sans);
          text-decoration: none;
          transition: all 0.2s;
        }
        .ezp2-btn-outline:hover {
          border-color: var(--primary);
          color: var(--primary);
          transform: translateY(-2px);
        }

        /* Hero stats */
        .ezp2-hero-stats {
          display: flex;
          align-items: center;
          padding-top: 32px;
          border-top: 1px solid var(--border);
        }
        .ezp2-hero-stat {
          position: relative;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .ezp2-hero-stat-val {
          font-family: var(--font-display);
          font-size: clamp(22px, 2.5vw, 30px);
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: -0.02em;
          line-height: 1;
        }
        .ezp2-hero-stat-label {
          font-size: 12px;
          color: var(--text-muted);
          font-weight: 500;
        }
        .ezp2-hero-stat-div {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 1px;
          height: 28px;
          background: var(--border);
        }

        /* Hero right — screenshot */
        .ezp2-hero-right {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ezp2-screenshot-frame {
          width: 100%;
          max-width: 420px;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid var(--border);
          box-shadow: 0 32px 80px rgba(0,0,0,0.12), 0 0 0 1px var(--border);
          background: var(--surface);
        }
        .ezp2-screenshot-img {
          width: 100%;
          height: auto;
          display: block;
        }

        /* Floating badges */
        .ezp2-float-badge {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          background: var(--background);
          border: 1px solid var(--border);
          border-radius: 14px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
          z-index: 2;
        }
        .ezp2-float-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--primary);
          animation: ezp2Pulse 2s ease-in-out infinite;
          flex-shrink: 0;
        }
        @keyframes ezp2Pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        .ezp2-float-1 { top: 8%; right: -16px; }
        .ezp2-float-2 { bottom: 10%; left: -16px; }
        .ezp2-float-val {
          font-family: var(--font-display);
          font-size: 20px;
          font-weight: 800;
          color: var(--primary);
          line-height: 1;
        }
        .ezp2-float-lbl {
          font-size: 11px;
          color: var(--text-muted);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        /* ── SHARED SECTION ── */
        .ezp2-section {
          padding: 96px 24px;
          background: var(--background);
        }
        .ezp2-section-surface {
          background: var(--surface);
        }
        .ezp2-section-hd {
          max-width: 640px;
          margin: 0 auto 56px;
          text-align: center;
        }
        .ezp2-label {
          display: inline-flex;
          align-items: center;
          padding: 4px 13px;
          border-radius: 100px;
          border: 1px solid rgba(229,24,42,0.2);
          background: var(--primary-glow);
          font-size: 11px;
          font-weight: 700;
          color: var(--primary);
          letter-spacing: 0.07em;
          text-transform: uppercase;
          margin-bottom: 16px;
          font-family: var(--font-sans);
        }
        .ezp2-label-light {
          border-color: rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.85);
        }
        .ezp2-title {
          font-family: var(--font-display);
          font-size: clamp(28px, 3.5vw, 44px);
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.02em;
          line-height: 1.12;
          margin-bottom: 14px;
        }
        .ezp2-title-accent { color: var(--primary); }
        .ezp2-desc {
          font-size: 15.5px;
          color: var(--text-muted);
          line-height: 1.75;
        }

        /* ── SERVICES ── */
        .ezp2-services-grid {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          border: 1px solid var(--border);
          border-radius: 20px;
          overflow: hidden;
          background: var(--border);
        }
        .ezp2-service-card {
          background: var(--background);
          padding: 28px 24px;
          transition: background 0.2s;
        }
        .ezp2-service-card:hover { background: var(--surface); }
        .ezp2-service-icon {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: var(--primary-glow);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
        }
        .ezp2-service-title {
          font-family: var(--font-display);
          font-size: 17px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 12px;
        }
        .ezp2-service-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 7px;
        }
        .ezp2-service-list li {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 13px;
          color: var(--text-muted);
          font-family: var(--font-sans);
        }
        .ezp2-service-list li svg { color: var(--primary); flex-shrink: 0; }

        /* ── BENEFITS ── */
        .ezp2-benefits-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .ezp2-benefit-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 18px;
          padding: 28px 22px;
          transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
        }
        .ezp2-benefit-card:hover {
          border-color: var(--primary);
          transform: translateY(-3px);
          box-shadow: 0 10px 30px var(--primary-glow);
        }
        .ezp2-benefit-icon {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: var(--primary-glow);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }
        .ezp2-benefit-card h3 {
          font-family: var(--font-display);
          font-size: 16px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 8px;
        }
        .ezp2-benefit-card p {
          font-size: 13.5px;
          color: var(--text-muted);
          line-height: 1.7;
        }

        /* ── TIERS ── */
        .ezp2-tiers-grid {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .ezp2-tier-card {
          background: var(--background);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 28px 24px;
          position: relative;
          display: flex;
          flex-direction: column;
          transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
        }
        .ezp2-tier-card:hover {
          border-color: var(--primary);
          transform: translateY(-3px);
          box-shadow: 0 12px 36px var(--primary-glow);
        }
        .ezp2-tier-highlight {
          border: 2px solid var(--primary);
          box-shadow: 0 12px 40px var(--primary-glow);
        }
        .ezp2-tier-ribbon {
          position: absolute;
          top: -12px;
          right: 20px;
          background: var(--primary);
          color: #fff;
          font-size: 11px;
          font-weight: 700;
          padding: 4px 14px;
          border-radius: 100px;
          letter-spacing: 0.04em;
        }
        .ezp2-tier-icon {
          width: 46px;
          height: 46px;
          border-radius: 10px;
          background: var(--primary-glow);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }
        .ezp2-tier-name {
          font-family: var(--font-display);
          font-size: 21px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 8px;
        }
        .ezp2-tier-earning {
          display: flex;
          align-items: baseline;
          gap: 6px;
          padding-bottom: 16px;
          margin-bottom: 14px;
          border-bottom: 1px dashed var(--border);
        }
        .ezp2-tier-num {
          font-family: var(--font-display);
          font-size: 26px;
          font-weight: 800;
          color: var(--primary);
          letter-spacing: -0.02em;
        }
        .ezp2-tier-period { font-size: 13px; color: var(--text-muted); }
        .ezp2-tier-desc {
          font-size: 13.5px;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 18px;
        }
        .ezp2-tier-perks {
          list-style: none;
          padding: 0;
          margin: 0 0 20px;
          display: flex;
          flex-direction: column;
          gap: 9px;
          flex: 1;
        }
        .ezp2-tier-perks li {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: var(--text-primary);
          font-family: var(--font-sans);
        }
        .ezp2-tier-perks li svg { color: var(--primary); flex-shrink: 0; }
        .ezp2-tier-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 11px 18px;
          background: var(--text-primary);
          color: var(--background);
          border-radius: 100px;
          font-size: 13px;
          font-weight: 600;
          font-family: var(--font-sans);
          text-decoration: none;
          margin-top: auto;
          transition: background 0.2s;
        }
        .ezp2-tier-cta:hover { background: var(--primary); }
        .ezp2-tier-highlight .ezp2-tier-cta {
          background: var(--primary);
          color: #fff;
        }
        .ezp2-tier-highlight .ezp2-tier-cta:hover { background: var(--primary-dark); }

        /* ── PARTNERS ── */
        .ezp2-partners-grid {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 14px;
        }
        .ezp2-partner-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 22px 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 80px;
          transition: border-color 0.2s, transform 0.2s;
        }
        .ezp2-partner-card:hover {
          border-color: var(--primary);
          transform: translateY(-2px);
        }
        .ezp2-partner-card img {
          max-width: 100%;
          max-height: 40px;
          object-fit: contain;
          filter: grayscale(100%) opacity(0.55);
          transition: filter 0.2s;
        }
        .ezp2-partner-card:hover img { filter: grayscale(0%) opacity(1); }
        .ezp2-trust-strip {
          max-width: 1100px;
          margin: 28px auto 0;
          padding: 14px 20px;
          background: var(--primary-glow);
          border: 1px solid rgba(229,24,42,0.15);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 13px;
          color: var(--text-muted);
          font-family: var(--font-sans);
          text-align: center;
        }
        .ezp2-trust-strip svg { color: var(--primary); flex-shrink: 0; }
        .ezp2-trust-strip strong { color: var(--text-primary); }

        /* ── CTA ── */
        .ezp2-cta-section {
          background: var(--primary);
          padding: 96px 24px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .ezp2-cta-section::before {
          content: "";
          position: absolute;
          top: -80px; left: 50%;
          transform: translateX(-50%);
          width: 600px; height: 300px;
          background: radial-gradient(ellipse, rgba(255,255,255,0.12) 0%, transparent 70%);
          pointer-events: none;
        }
        .ezp2-cta-inner {
          position: relative;
          z-index: 1;
          max-width: 640px;
          margin: 0 auto;
        }
        .ezp2-cta-title {
          font-family: var(--font-display);
          font-size: clamp(30px, 4vw, 50px);
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.02em;
          line-height: 1.12;
          margin-bottom: 16px;
        }
        .ezp2-cta-accent {
          color: rgba(255,255,255,0.75);
        }
        .ezp2-cta-sub {
          font-size: 15.5px;
          color: rgba(255,255,255,0.72);
          line-height: 1.75;
          margin-bottom: 36px;
        }
        .ezp2-cta-btns {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 28px;
        }
        .ezp2-cta-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 30px;
          background: #fff;
          color: var(--primary);
          border-radius: 100px;
          font-size: 14px;
          font-weight: 700;
          font-family: var(--font-sans);
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .ezp2-cta-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(0,0,0,0.15);
        }
        .ezp2-cta-btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 30px;
          background: transparent;
          color: #fff;
          border: 1.5px solid rgba(255,255,255,0.35);
          border-radius: 100px;
          font-size: 14px;
          font-weight: 600;
          font-family: var(--font-sans);
          text-decoration: none;
          transition: border-color 0.2s, transform 0.2s;
        }
        .ezp2-cta-btn-outline:hover {
          border-color: #fff;
          transform: translateY(-2px);
        }
        .ezp2-cta-note {
          font-size: 12px;
          color: rgba(255,255,255,0.5);
        }
        .ezp2-cta-note-link {
          color: rgba(255,255,255,0.75);
          text-decoration: underline;
          transition: color 0.2s;
        }
        .ezp2-cta-note-link:hover { color: #fff; }

        /* ── RESPONSIVE ── */
        @media (max-width: 1100px) {
          .ezp2-hero-inner { grid-template-columns: 1fr; gap: 48px; }
          .ezp2-hero-right { order: -1; }
          .ezp2-screenshot-frame { max-width: 360px; }
          .ezp2-services-grid { grid-template-columns: repeat(2, 1fr); }
          .ezp2-benefits-grid { grid-template-columns: repeat(2, 1fr); }
          .ezp2-tiers-grid { grid-template-columns: repeat(2, 1fr); }
          .ezp2-partners-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 768px) {
          .ezp2-hero { padding: 48px 20px 64px; }
          .ezp2-section { padding: 64px 20px; }
          .ezp2-cta-section { padding: 64px 20px; }
          .ezp2-float-1 { right: -8px; }
          .ezp2-float-2 { left: -8px; }
        }
        @media (max-width: 640px) {
          .ezp2-services-grid { grid-template-columns: 1fr; border-radius: 14px; }
          .ezp2-benefits-grid { grid-template-columns: 1fr; }
          .ezp2-tiers-grid { grid-template-columns: 1fr; }
          .ezp2-partners-grid { grid-template-columns: repeat(2, 1fr); }
          .ezp2-hero-ctas { flex-direction: column; }
          .ezp2-btn-primary, .ezp2-btn-outline { width: 100%; justify-content: center; }
          .ezp2-cta-btns { flex-direction: column; }
          .ezp2-cta-btn-primary, .ezp2-cta-btn-outline { width: 100%; justify-content: center; }
        }
      `}</style>
    </main>
  );
}