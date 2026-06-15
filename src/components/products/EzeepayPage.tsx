"use client";

import Link from "next/link";
import {
  ArrowRight, ExternalLink, Download,
  Banknote, Receipt, Plane, Tv, Smartphone, MoreHorizontal,
  Shield, TrendingUp, Award, Wallet,
  Building2, MapPin, Users, Network,
  CheckCircle2, Sparkles,
} from "lucide-react";

// ─── Live stats from EzeePay ─────────────────────────────────────────────────
const heroStats = [
  { value: "5L+",   label: "Active Agents",       icon: Users },
  { value: "8.3K+", label: "Distributors",        icon: Network },
  { value: "100+",  label: "District Franchises", icon: MapPin },
  { value: "60+",   label: "Digital Services",    icon: Sparkles },
];

// ─── Service categories ──────────────────────────────────────────────────────
const services = [
  {
    icon: Banknote,
    title: "Banking Services",
    items: ["AEPS Cash Withdrawal", "Aadhaar Pay", "Money Transfer", "Micro ATM", "Open Bank Account"],
    color: "#5b21b6",
  },
  {
    icon: Receipt,
    title: "Bill Payments",
    items: ["Electricity Bills", "Water Bills", "Gas Bills", "Insurance Premium", "Loan EMI"],
    color: "#1d4ed8",
  },
  {
    icon: Plane,
    title: "Travel Booking",
    items: ["Flight Tickets", "Bus Booking", "Train Reservations", "Hotel Booking"],
    color: "#0891b2",
  },
  {
    icon: Smartphone,
    title: "Recharge & DTH",
    items: ["Mobile Recharge", "DTH Recharge", "Data Card Recharge", "Landline"],
    color: "#ea580c",
  },
  {
    icon: Tv,
    title: "OTT & Subscriptions",
    items: ["OTT Subscriptions", "Streaming Services", "Digital Subscriptions"],
    color: "#6d28d9",
  },
  {
    icon: MoreHorizontal,
    title: "60+ More Services",
    items: ["Insurance", "E-Governance", "Neo Banking", "PAN Card Services", "And more..."],
    color: "#0f766e",
  },
];

// ─── Why become an agent — value props ───────────────────────────────────────
const benefits = [
  {
    icon: Wallet,
    title: "Minimum Investment",
    desc: "Start with very low capital. Turn your existing shop into a full-service banking outlet — no separate setup needed.",
  },
  {
    icon: Sparkles,
    title: "60+ Services Ready",
    desc: "One platform, multiple revenue streams. Serve your customers across banking, bills, travel, and recharge from one app.",
  },
  {
    icon: TrendingUp,
    title: "Earn on Every Transaction",
    desc: "Commission on every service you provide. Distributors earn up to 25% — and there's no cap on your monthly income.",
  },
  {
    icon: Award,
    title: "Trust & Credibility",
    desc: "Part of India's largest agent network — 5 lakh+ agents already serving customers across 100+ districts.",
  },
];

// ─── Partner tiers ───────────────────────────────────────────────────────────
const partnerTiers = [
  {
    tier: "Agent",
    icon: Users,
    earning: "₹50,000+",
    period: "per month",
    desc: "Become an EzeePay agent and offer all 60+ services to your customers. Earn commissions on every transaction.",
    perks: [
      "Low one-time investment",
      "Commission on every service",
      "Full training & support",
      "Marketing materials provided",
    ],
  },
  {
    tier: "Distributor",
    icon: Network,
    earning: "₹50,000+",
    period: "per month",
    desc: "Build a network of agents. Earn up to 25% commission on the transactions of all the agents in your network.",
    perks: [
      "No physical store needed",
      "25% commission rate",
      "Telecom · Pharma · Retail · FMCG",
      "10,000+ active distributors",
    ],
  },
  {
    tier: "Master Distributor",
    icon: Building2,
    earning: "₹1,50,000+",
    period: "per month",
    desc: "Set up a full distribution chain. Manage multiple distributors and agents under one banner.",
    perks: [
      "Highest commission tier",
      "Multi-level network",
      "Griha Udyog & Self Help Groups",
      "Dedicated business support",
    ],
    highlight: true,
  },
];

// ─── Official trust partners ─────────────────────────────────────────────────
const trustPartners = [
  { name: "Protean",              logo: "/partners/protean.png" },
  { name: "Mantra",               logo: "/partners/mantra.png" },
  { name: "Mentation Technologies", logo: "/partners/mentation.png" },
  { name: "Noble Web Studio",     logo: "/partners/noble-web-studio.png" },
  { name: "CredoPay",             logo: "/partners/credopay.png" },
  { name: "Arthmate",             logo: "/partners/arthmate.png" },
];

export default function EzeepayPage() {
  return (
    <main style={{ background: "var(--background)", minHeight: "100vh" }}>

      {/* ── Breadcrumb ── */}
      <div className="ezp-crumb-wrap">
        <div className="ezp-crumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/products">Products</Link>
          <span>/</span>
          <span className="ezp-crumb-current">EzeePay</span>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="ezp-hero">
        <div className="ezp-hero-glow" />
        <div className="ezp-hero-inner">
          <div className="ezp-hero-left">
            <div className="ezp-hero-badge">
              <span className="ezp-hero-badge-dot" />
              A Product of MJ Digital Services
            </div>

            <h1 className="ezp-hero-title">
              Make Your Shop a{" "}
              <span className="ezp-hero-title-accent">Mini ATM</span>{" "}
              with EzeePay
            </h1>

            <p className="ezp-hero-sub">
              India&apos;s largest agent banking network. Offer 60+ digital
              services from your shop — AEPS, money transfer, bill payments,
              recharge, travel booking — and earn commissions on every
              transaction.
            </p>

            {/* Trust line */}
            <div className="ezp-hero-trust">
              <span>Trusted by</span>
              <strong>5,00,000+ agents</strong>
              <span>across India</span>
            </div>

            {/* CTAs */}
            <div className="ezp-hero-ctas">
              <a
                href="https://ezeepay.app"
                target="_blank"
                rel="noopener noreferrer"
                className="ezp-btn-primary"
              >
                Visit EzeePay <ExternalLink size={15} />
              </a>
              <a
                href="https://ezeepay.app"
                target="_blank"
                rel="noopener noreferrer"
                className="ezp-btn-outline"
              >
                <Download size={15} /> Download App
              </a>
            </div>
          </div>

          {/* Right — product showcase mock */}
          <div className="ezp-hero-right">
            <div className="ezp-phone-mock">
              <div className="ezp-phone-screen">
                <div className="ezp-phone-header">
                  <div className="ezp-phone-logo">
                    <Wallet size={14} /> ezeepay
                  </div>
                  <div className="ezp-phone-bal">₹90.7</div>
                </div>
                <div className="ezp-phone-grid">
                  {[
                    { name: "AePS", icon: Banknote, color: "#5b21b6" },
                    { name: "Micro ATM", icon: Smartphone, color: "#7c3aed" },
                    { name: "UPI ATM", icon: Wallet, color: "#5b21b6" },
                    { name: "Bank", icon: Building2, color: "#7c3aed" },
                    { name: "Transfer", icon: Network, color: "#5b21b6" },
                    { name: "Bills", icon: Receipt, color: "#7c3aed" },
                    { name: "Recharge", icon: Smartphone, color: "#5b21b6" },
                    { name: "Travel", icon: Plane, color: "#7c3aed" },
                  ].map((s) => (
                    <div key={s.name} className="ezp-phone-tile">
                      <div
                        className="ezp-phone-tile-icon"
                        style={{ background: `${s.color}22`, color: s.color }}
                      >
                        <s.icon size={16} />
                      </div>
                      <span>{s.name}</span>
                    </div>
                  ))}
                </div>
                <div className="ezp-phone-bottom">
                  <div className="ezp-phone-action ezp-phone-action-success">
                    <CheckCircle2 size={14} /> Transaction Successful · ₹500
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stat badges */}
            <div className="ezp-float ezp-float-1">
              <div className="ezp-float-num">5L+</div>
              <div className="ezp-float-label">Active Agents</div>
            </div>
            <div className="ezp-float ezp-float-2">
              <div className="ezp-float-num">60+</div>
              <div className="ezp-float-label">Services</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Live Stats Strip ── */}
      <section className="ezp-stats">
        <div className="ezp-stats-inner">
          {heroStats.map((s) => (
            <div key={s.label} className="ezp-stat">
              <div className="ezp-stat-icon">
                <s.icon size={18} />
              </div>
              <div>
                <div className="ezp-stat-value">{s.value}</div>
                <div className="ezp-stat-label">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services Overview ── */}
      <section className="ezp-services">
        <div className="ezp-section-header">
          <div className="ezp-section-label">One App, Multiple Services</div>
          <h2 className="ezp-section-title">
            60+ digital services <br />
            <span className="ezp-section-title-accent">from a single platform</span>
          </h2>
          <p className="ezp-section-sub">
            From banking to bill payments, travel to entertainment — EzeePay
            agents offer their customers everything they need, all from one app.
          </p>
        </div>

        <div className="ezp-services-grid">
          {services.map((s) => (
            <div key={s.title} className="ezp-service-card">
              <div
                className="ezp-service-icon"
                style={{ background: `${s.color}15`, color: s.color }}
              >
                <s.icon size={22} />
              </div>
              <h3 className="ezp-service-title">{s.title}</h3>
              <ul className="ezp-service-list">
                {s.items.map((item) => (
                  <li key={item}>
                    <CheckCircle2 size={13} /> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Why EzeePay (benefits) ── */}
      <section className="ezp-benefits">
        <div className="ezp-section-header">
          <div className="ezp-section-label">Why EzeePay</div>
          <h2 className="ezp-section-title">
            The benefits of joining{" "}
            <span className="ezp-section-title-accent">India&apos;s biggest network</span>
          </h2>
          <p className="ezp-section-sub">
            Whether you&apos;re a kirana store, retail shop, or aspiring
            entrepreneur — EzeePay gives you a tested, profitable way to grow.
          </p>
        </div>

        <div className="ezp-benefits-grid">
          {benefits.map((b) => (
            <div key={b.title} className="ezp-benefit-card">
              <div className="ezp-benefit-icon">
                <b.icon size={22} />
              </div>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Partner Tiers ── */}
      <section className="ezp-tiers">
        <div className="ezp-section-header">
          <div className="ezp-section-label">Become A Part Of Us</div>
          <h2 className="ezp-section-title">
            Three ways to earn with EzeePay
          </h2>
          <p className="ezp-section-sub">
            Whether you want to run a single shop, build a distribution network,
            or launch a full chain — we have a tier that fits.
          </p>
        </div>

        <div className="ezp-tiers-grid">
          {partnerTiers.map((t) => (
            <div
              key={t.tier}
              className={`ezp-tier-card ${t.highlight ? "ezp-tier-highlight" : ""}`}
            >
              {t.highlight && (
                <div className="ezp-tier-ribbon">Highest Earning</div>
              )}
              <div className="ezp-tier-icon">
                <t.icon size={22} />
              </div>
              <div className="ezp-tier-name">{t.tier}</div>
              <div className="ezp-tier-earning">
                <span className="ezp-tier-earning-num">{t.earning}</span>
                <span className="ezp-tier-earning-period">{t.period}</span>
              </div>
              <p className="ezp-tier-desc">{t.desc}</p>
              <ul className="ezp-tier-perks">
                {t.perks.map((p) => (
                  <li key={p}>
                    <CheckCircle2 size={13} /> {p}
                  </li>
                ))}
              </ul>
              <a
                href="https://ezeepay.app"
                target="_blank"
                rel="noopener noreferrer"
                className="ezp-tier-cta"
              >
                Apply as {t.tier} <ArrowRight size={13} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ── Trust Partners ── */}
      <section className="ezp-partners">
        <div className="ezp-section-header">
          <div className="ezp-section-label">Trust & Partnerships</div>
          <h2 className="ezp-section-title">
            Backed by India&apos;s leading{" "}
            <span className="ezp-section-title-accent">technology partners</span>
          </h2>
        </div>

        <div className="ezp-partners-grid">
            {trustPartners.map((p) => (
                <div key={p.name} className="ezp-partner-card">
                <img src={p.logo} alt={`${p.name} logo`} />
                </div>
            ))}
        </div>

        <div className="ezp-trust-strip">
          <Shield size={18} />
          <span>
            Registered with <strong>Dun &amp; Bradstreet</strong> · Lending
            partnership with <strong>Arthmate</strong> (Grievance:
            statutory.compliance@arthmate.com)
          </span>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="ezp-cta">
        <div className="ezp-cta-glow" />
        <div className="ezp-cta-inner">
          <div className="ezp-cta-badge">Start Earning Today</div>
          <h2 className="ezp-cta-title">
            Ready to make your shop a <br />
            <span className="ezp-cta-title-accent">Mini ATM?</span>
          </h2>
          <p className="ezp-cta-sub">
            Join 5,00,000+ agents earning with EzeePay. Visit our dedicated
            platform to sign up, download the app, and start serving customers
            from day one.
          </p>
          <div className="ezp-cta-buttons">
            <a
              href="https://ezeepay.app"
              target="_blank"
              rel="noopener noreferrer"
              className="ezp-btn-primary ezp-btn-primary-lg"
            >
              Visit EzeePay.app <ExternalLink size={15} />
            </a>
            <Link href="/contact" className="ezp-btn-outline ezp-btn-outline-lg">
              Talk to MJ Digital
            </Link>
          </div>
          <div className="ezp-cta-note">
            EzeePay is a product of MJ Digital Services Pvt. Ltd. · Building
            digital products. Powering businesses.
          </div>
        </div>
      </section>

      {/* ── Styles ── */}
      <style>{`
        /* ============================================================
           BREADCRUMB
           ============================================================ */
        .ezp-crumb-wrap {
          background: var(--surface);
          border-bottom: 1px solid var(--border);
        }
        .ezp-crumb {
          max-width: 1280px;
          margin: 0 auto;
          padding: 14px 24px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          color: var(--text-muted);
          font-family: var(--font-sans);
        }
        .ezp-crumb a {
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.2s;
        }
        .ezp-crumb a:hover { color: var(--primary); }
        .ezp-crumb-current { color: var(--text-primary); font-weight: 600; }
        .ezp-crumb span:not(.ezp-crumb-current) { opacity: 0.5; }

        /* ============================================================
           HERO
           ============================================================ */
        .ezp-hero {
          padding: 80px 24px 100px;
          position: relative;
          overflow: hidden;
          background:
            linear-gradient(180deg, var(--surface) 0%, var(--background) 100%);
        }
        .ezp-hero-glow {
          position: absolute;
          top: -160px;
          right: -180px;
          width: 700px;
          height: 700px;
          background: radial-gradient(circle, rgba(91,33,182,0.13) 0%, transparent 70%);
          pointer-events: none;
        }
        .ezp-hero-inner {
          position: relative;
          z-index: 1;
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 64px;
          align-items: center;
        }

        .ezp-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 6px 14px;
          border-radius: 100px;
          background: rgba(91,33,182,0.08);
          border: 1px solid rgba(91,33,182,0.2);
          font-size: 12px;
          font-weight: 600;
          color: #5b21b6;
          letter-spacing: 0.04em;
          margin-bottom: 24px;
          font-family: var(--font-sans);
        }
        .ezp-hero-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #5b21b6;
          animation: ezpPulse 2s ease-in-out infinite;
        }
        @keyframes ezpPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        .ezp-hero-title {
          font-family: var(--font-display);
          font-size: clamp(32px, 4.8vw, 58px);
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.02em;
          line-height: 1.08;
          margin-bottom: 22px;
        }
        .ezp-hero-title-accent {
          background: linear-gradient(135deg, #ea580c 0%, #f97316 50%, #fb923c 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .ezp-hero-sub {
          font-size: clamp(15px, 1.6vw, 17px);
          color: var(--text-muted);
          line-height: 1.75;
          margin-bottom: 24px;
          max-width: 560px;
        }

        .ezp-hero-trust {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 100px;
          font-size: 13px;
          color: var(--text-muted);
          font-family: var(--font-sans);
          margin-bottom: 32px;
        }
        .ezp-hero-trust strong {
          color: var(--text-primary);
          font-weight: 700;
        }

        .ezp-hero-ctas {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        /* Buttons (shared) */
        .ezp-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 26px;
          background: linear-gradient(135deg, #5b21b6 0%, #7c3aed 100%);
          color: #fff;
          border-radius: 100px;
          font-size: 14px;
          font-weight: 600;
          font-family: var(--font-sans);
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
          border: none;
          cursor: pointer;
        }
        .ezp-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(91,33,182,0.35);
        }
        .ezp-btn-outline {
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
        .ezp-btn-outline:hover {
          border-color: #5b21b6;
          color: #5b21b6;
          transform: translateY(-2px);
        }
        .ezp-btn-primary-lg, .ezp-btn-outline-lg {
          padding: 15px 32px;
          font-size: 15px;
        }

        /* ── Hero Right — Phone Mock ── */
        .ezp-hero-right {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ezp-phone-mock {
          width: 280px;
          aspect-ratio: 9 / 19;
          background: #1f0a4a;
          border-radius: 36px;
          padding: 14px;
          box-shadow:
            0 30px 80px rgba(91,33,182,0.35),
            0 0 0 1px rgba(255,255,255,0.05);
          position: relative;
        }
        .ezp-phone-screen {
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, #6d28d9 0%, #5b21b6 100%);
          border-radius: 24px;
          padding: 18px 14px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .ezp-phone-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .ezp-phone-logo {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #fff;
          font-size: 13px;
          font-weight: 700;
          background: rgba(255,255,255,0.12);
          padding: 4px 10px;
          border-radius: 100px;
        }
        .ezp-phone-bal {
          color: #fbbf24;
          font-size: 14px;
          font-weight: 700;
          font-family: monospace;
        }
        .ezp-phone-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
        }
        .ezp-phone-tile {
          background: rgba(255,255,255,0.95);
          border-radius: 12px;
          padding: 10px 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }
        .ezp-phone-tile-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ezp-phone-tile span {
          font-size: 10px;
          font-weight: 600;
          color: #1f0a4a;
        }
        .ezp-phone-bottom {
          margin-top: auto;
        }
        .ezp-phone-action-success {
          background: #22c55e;
          color: #fff;
          padding: 8px 12px;
          border-radius: 8px;
          font-size: 11px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        /* Floating badges */
        .ezp-float {
          position: absolute;
          background: var(--background);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 14px 18px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          z-index: 2;
        }
        .ezp-float-1 {
          top: 10%;
          left: -10px;
        }
        .ezp-float-2 {
          bottom: 12%;
          right: -10px;
        }
        .ezp-float-num {
          font-family: var(--font-display);
          font-size: 22px;
          font-weight: 800;
          color: #5b21b6;
          line-height: 1;
          margin-bottom: 4px;
        }
        .ezp-float-label {
          font-size: 11px;
          color: var(--text-muted);
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        /* ============================================================
           STATS STRIP
           ============================================================ */
        .ezp-stats {
          background: linear-gradient(135deg, #1f0a4a 0%, #5b21b6 100%);
          padding: 36px 24px;
          position: relative;
          overflow: hidden;
        }
        .ezp-stats::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px) 0 0 / 20px 20px;
          pointer-events: none;
        }
        .ezp-stats-inner {
          position: relative;
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .ezp-stat {
          display: flex;
          align-items: center;
          gap: 14px;
          color: #fff;
        }
        .ezp-stat-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(251,191,36,0.15);
          color: #fbbf24;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .ezp-stat-value {
          font-family: var(--font-display);
          font-size: clamp(20px, 2.4vw, 28px);
          font-weight: 800;
          line-height: 1;
          margin-bottom: 4px;
        }
        .ezp-stat-label {
          font-size: 12px;
          color: rgba(255,255,255,0.65);
          letter-spacing: 0.02em;
        }

        /* ============================================================
           SHARED SECTION HEADERS
           ============================================================ */
        .ezp-section-header {
          max-width: 720px;
          margin: 0 auto 56px;
          text-align: center;
        }
        .ezp-section-label {
          display: inline-flex;
          align-items: center;
          padding: 5px 14px;
          border-radius: 100px;
          background: rgba(91,33,182,0.08);
          border: 1px solid rgba(91,33,182,0.18);
          font-size: 11px;
          font-weight: 700;
          color: #5b21b6;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 16px;
          font-family: var(--font-sans);
        }
        .ezp-section-title {
          font-family: var(--font-display);
          font-size: clamp(26px, 3.4vw, 42px);
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.02em;
          line-height: 1.15;
          margin-bottom: 16px;
        }
        .ezp-section-title-accent {
          background: linear-gradient(135deg, #5b21b6 0%, #7c3aed 50%, #a855f7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .ezp-section-sub {
          font-size: 15.5px;
          color: var(--text-muted);
          line-height: 1.75;
        }

        /* ============================================================
           SERVICES
           ============================================================ */
        .ezp-services {
          padding: 100px 24px;
        }
        .ezp-services-grid {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .ezp-service-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 18px;
          padding: 28px 24px;
          transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
        }
        .ezp-service-card:hover {
          border-color: rgba(91,33,182,0.4);
          box-shadow: 0 12px 40px rgba(91,33,182,0.1);
          transform: translateY(-3px);
        }
        .ezp-service-icon {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }
        .ezp-service-title {
          font-family: var(--font-display);
          font-size: 19px;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.01em;
          margin-bottom: 14px;
        }
        .ezp-service-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .ezp-service-list li {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13.5px;
          color: var(--text-muted);
          font-family: var(--font-sans);
        }
        .ezp-service-list li svg {
          color: #5b21b6;
          flex-shrink: 0;
        }

        /* ============================================================
           BENEFITS
           ============================================================ */
        .ezp-benefits {
          padding: 100px 24px;
          background: var(--surface);
        }
        .ezp-benefits-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .ezp-benefit-card {
          background: var(--background);
          border: 1px solid var(--border);
          border-radius: 18px;
          padding: 28px 24px;
          transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
        }
        .ezp-benefit-card:hover {
          border-color: rgba(91,33,182,0.4);
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(91,33,182,0.1);
        }
        .ezp-benefit-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(91,33,182,0.15) 0%, rgba(124,58,237,0.1) 100%);
          color: #5b21b6;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }
        .ezp-benefit-card h3 {
          font-family: var(--font-display);
          font-size: 17px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 10px;
          letter-spacing: -0.01em;
        }
        .ezp-benefit-card p {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.7;
        }

        /* ============================================================
           TIERS
           ============================================================ */
        .ezp-tiers {
          padding: 100px 24px;
        }
        .ezp-tiers-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .ezp-tier-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 32px 28px;
          position: relative;
          display: flex;
          flex-direction: column;
          transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
        }
        .ezp-tier-card:hover {
          border-color: rgba(91,33,182,0.4);
          transform: translateY(-4px);
          box-shadow: 0 16px 50px rgba(91,33,182,0.12);
        }
        .ezp-tier-highlight {
          background: linear-gradient(180deg, var(--background) 0%, rgba(91,33,182,0.04) 100%);
          border: 2px solid #5b21b6;
          box-shadow: 0 16px 50px rgba(91,33,182,0.15);
        }
        .ezp-tier-ribbon {
          position: absolute;
          top: -12px;
          right: 20px;
          background: linear-gradient(135deg, #5b21b6 0%, #7c3aed 100%);
          color: #fff;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.05em;
          padding: 5px 14px;
          border-radius: 100px;
          box-shadow: 0 4px 12px rgba(91,33,182,0.3);
        }
        .ezp-tier-icon {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          background: rgba(91,33,182,0.1);
          color: #5b21b6;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }
        .ezp-tier-name {
          font-family: var(--font-display);
          font-size: 22px;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.01em;
          margin-bottom: 10px;
        }
        .ezp-tier-earning {
          display: flex;
          align-items: baseline;
          gap: 6px;
          margin-bottom: 16px;
          padding-bottom: 16px;
          border-bottom: 1px dashed var(--border);
        }
        .ezp-tier-earning-num {
          font-family: var(--font-display);
          font-size: 28px;
          font-weight: 800;
          color: #5b21b6;
          letter-spacing: -0.02em;
        }
        .ezp-tier-earning-period {
          font-size: 13px;
          color: var(--text-muted);
        }
        .ezp-tier-desc {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 20px;
        }
        .ezp-tier-perks {
          list-style: none;
          padding: 0;
          margin: 0 0 24px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .ezp-tier-perks li {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13.5px;
          color: var(--text-primary);
          font-family: var(--font-sans);
        }
        .ezp-tier-perks li svg {
          color: #5b21b6;
          flex-shrink: 0;
        }
        .ezp-tier-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 12px 20px;
          background: var(--text-primary);
          color: var(--background);
          border-radius: 100px;
          font-size: 13.5px;
          font-weight: 600;
          font-family: var(--font-sans);
          text-decoration: none;
          margin-top: auto;
          transition: background 0.2s, transform 0.2s;
        }
        .ezp-tier-cta:hover {
          background: #5b21b6;
          transform: translateY(-1px);
        }
        .ezp-tier-highlight .ezp-tier-cta {
          background: linear-gradient(135deg, #5b21b6 0%, #7c3aed 100%);
          color: #fff;
        }

        /* ============================================================
           PARTNERS
           ============================================================ */
        .ezp-partners {
          padding: 100px 24px;
          background: var(--surface);
        }
        .ezp-partners-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 16px;
        }
        .ezp-partner-card {
            background: var(--background);
            border: 1px solid var(--border);
            border-radius: 12px;
            padding: 24px 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 90px;
            transition: border-color 0.2s, transform 0.2s;
            }
            .ezp-partner-card:hover {
            border-color: rgba(91,33,182,0.4);
            transform: translateY(-2px);
            }
            .ezp-partner-card img {
            max-width: 100%;
            max-height: 44px;
            width: auto;
            height: auto;
            object-fit: contain;
            filter: grayscale(100%) opacity(0.6);
            transition: filter 0.25s;
            }
            .ezp-partner-card:hover img {
            filter: grayscale(0%) opacity(1);
        }

        .ezp-trust-strip {
          max-width: 1200px;
          margin: 36px auto 0;
          padding: 16px 22px;
          background: rgba(91,33,182,0.05);
          border: 1px solid rgba(91,33,182,0.15);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          font-size: 13.5px;
          color: var(--text-muted);
          font-family: var(--font-sans);
          text-align: center;
        }
        .ezp-trust-strip svg {
          color: #5b21b6;
          flex-shrink: 0;
        }
        .ezp-trust-strip strong {
          color: var(--text-primary);
          font-weight: 700;
        }

        /* ============================================================
           CTA
           ============================================================ */
        .ezp-cta {
          background: linear-gradient(135deg, #1f0a4a 0%, #5b21b6 100%);
          padding: 100px 24px;
          position: relative;
          overflow: hidden;
          text-align: center;
        }
        .ezp-cta-glow {
          position: absolute;
          top: -120px;
          left: 50%;
          transform: translateX(-50%);
          width: 700px;
          height: 400px;
          background: radial-gradient(ellipse, rgba(251,191,36,0.15) 0%, transparent 70%);
          pointer-events: none;
        }
        .ezp-cta-inner {
          position: relative;
          z-index: 1;
          max-width: 720px;
          margin: 0 auto;
        }
        .ezp-cta-badge {
          display: inline-flex;
          padding: 6px 14px;
          border-radius: 100px;
          background: rgba(251,191,36,0.15);
          border: 1px solid rgba(251,191,36,0.3);
          font-size: 11px;
          font-weight: 700;
          color: #fbbf24;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 24px;
        }
        .ezp-cta-title {
          font-family: var(--font-display);
          font-size: clamp(30px, 4vw, 52px);
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.02em;
          line-height: 1.15;
          margin-bottom: 18px;
        }
        .ezp-cta-title-accent {
          background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #ea580c 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .ezp-cta-sub {
          font-size: 16px;
          color: rgba(255,255,255,0.65);
          line-height: 1.75;
          margin-bottom: 40px;
        }
        .ezp-cta-buttons {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 32px;
        }
        .ezp-cta .ezp-btn-primary {
          background: linear-gradient(135deg, #fbbf24 0%, #ea580c 100%);
          color: #1f0a4a;
        }
        .ezp-cta .ezp-btn-primary:hover {
          box-shadow: 0 10px 30px rgba(251,191,36,0.4);
        }
        .ezp-cta .ezp-btn-outline {
          color: rgba(255,255,255,0.85);
          border-color: rgba(255,255,255,0.2);
        }
        .ezp-cta .ezp-btn-outline:hover {
          border-color: #fff;
          color: #fff;
        }
        .ezp-cta-note {
          font-size: 12px;
          color: rgba(255,255,255,0.4);
          letter-spacing: 0.02em;
        }

        /* ============================================================
           RESPONSIVE
           ============================================================ */
        @media (max-width: 1100px) {
          .ezp-hero-inner {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .ezp-hero-right { order: -1; }
          .ezp-services-grid,
          .ezp-tiers-grid {
            grid-template-columns: 1fr 1fr;
          }
          .ezp-benefits-grid {
            grid-template-columns: 1fr 1fr;
          }
          .ezp-partners-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .ezp-crumb { padding: 12px 20px; font-size: 12px; }
          .ezp-hero {
            padding: 56px 20px 80px;
          }
          .ezp-stats {
            padding: 28px 20px;
          }
          .ezp-stats-inner {
            grid-template-columns: 1fr 1fr;
            gap: 20px;
          }
          .ezp-services,
          .ezp-benefits,
          .ezp-tiers,
          .ezp-partners,
          .ezp-cta {
            padding: 64px 20px;
          }
          .ezp-section-header { margin-bottom: 40px; }
          .ezp-services-grid,
          .ezp-tiers-grid,
          .ezp-benefits-grid {
            grid-template-columns: 1fr;
          }
          .ezp-partners-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .ezp-phone-mock { width: 240px; }
          .ezp-float-1 { left: -5px; top: 5%; }
          .ezp-float-2 { right: -5px; bottom: 8%; }
          .ezp-float-num { font-size: 18px; }
          .ezp-trust-strip {
            flex-direction: column;
            gap: 8px;
            text-align: center;
            font-size: 12.5px;
          }
        }

        @media (max-width: 480px) {
          .ezp-hero { padding: 48px 16px 64px; }
          .ezp-hero-ctas { flex-direction: column; }
          .ezp-btn-primary, .ezp-btn-outline {
            width: 100%;
            justify-content: center;
          }
          .ezp-stats-inner { grid-template-columns: 1fr; }
          .ezp-services,
          .ezp-benefits,
          .ezp-tiers,
          .ezp-partners,
          .ezp-cta {
            padding: 56px 16px;
          }
          .ezp-cta-buttons { flex-direction: column; width: 100%; }
          .ezp-cta-buttons .ezp-btn-primary,
          .ezp-cta-buttons .ezp-btn-outline { width: 100%; }
          .ezp-partners-grid { grid-template-columns: 1fr; }
          .ezp-phone-mock { width: 220px; }
        }
      `}</style>
    </main>
  );
}