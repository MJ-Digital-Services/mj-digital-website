"use client";

import Link from "next/link";
import {
  ArrowRight, ExternalLink, Download,
  Smartphone, Receipt, Wallet, Plane, Tv, ShoppingBag,
  Coins, Gift, TrendingUp, Shield,
  Zap, BadgePercent, CreditCard, Sparkles,
  CheckCircle2, Star,
} from "lucide-react";

// Zoki website URL
const ZOKI_URL = "https://zoki-website.vercel.app/";

// ─── Hero stats (matches Zoki site) ──────────────────────────────────────────
const heroStats = [
  { value: "50+",   label: "Services in one app" },
  { value: "₹ Crores", label: "Cashback & rewards paid out" },
  { value: "24×7",  label: "Instant recharges & payments" },
  { value: "100%",  label: "Secure, bank-grade encryption" },
];

// ─── Service categories ──────────────────────────────────────────────────────
const services = [
  {
    icon: Smartphone,
    title: "Recharges",
    desc: "Mobile, DTH, data card & landline — instant top-ups with rewards.",
    items: ["Mobile Recharge", "DTH Recharge", "Data Card", "Landline"],
  },
  {
    icon: Receipt,
    title: "Bill Payments",
    desc: "Pay every bill in one place — electricity, gas, water, broadband, more.",
    items: ["Electricity", "Gas", "Water", "Broadband", "Insurance Premium"],
  },
  {
    icon: Wallet,
    title: "Loans & Finance",
    desc: "Quick personal loans, EMI payments, and financial services on tap.",
    items: ["Personal Loans", "EMI Payments", "Credit Lines"],
  },
  {
    icon: Shield,
    title: "Insurance",
    desc: "Health, motor, and life insurance — buy and renew without the paperwork.",
    items: ["Health Insurance", "Motor Insurance", "Term Plans"],
  },
  {
    icon: Plane,
    title: "Travel Booking",
    desc: "Flights, trains, buses, and hotels — book it all and earn ZOKI Coins.",
    items: ["Flights", "Trains", "Buses", "Hotels"],
  },
  {
    icon: Tv,
    title: "OTT & Subscriptions",
    desc: "Renew your favourite OTT services and digital subscriptions.",
    items: ["OTT Subscriptions", "Streaming", "Digital Services"],
  },
];

// ─── Why Zoki — value props ──────────────────────────────────────────────────
const benefits = [
  {
    icon: Coins,
    title: "Earn ZOKI Coins",
    desc: "Collect ZOKI Coins on every transaction. Redeem them for cashback, recharges, or shopping vouchers.",
  },
  {
    icon: BadgePercent,
    title: "Instant Cashback",
    desc: "Get cashback the moment your transaction completes — no waiting, no minimum threshold.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    desc: "Recharges and bill payments processed in seconds. Track everything in real time from the app.",
  },
  {
    icon: Shield,
    title: "Bank-Grade Security",
    desc: "End-to-end encryption, tokenized payments, and PCI-DSS compliant infrastructure on every transaction.",
  },
];

// ─── How rewards work ───────────────────────────────────────────────────────
const howItWorks = [
  {
    step: "01",
    icon: Download,
    title: "Download the App",
    desc: "Get the Zoki app on your phone in under a minute. Sign up with your number — no paperwork.",
  },
  {
    step: "02",
    icon: CreditCard,
    title: "Make Any Transaction",
    desc: "Pay a bill, recharge your phone, book a trip, or buy insurance — anything inside Zoki.",
  },
  {
    step: "03",
    icon: Gift,
    title: "Earn Coins & Cashback",
    desc: "Get instant cashback plus ZOKI Coins on every payment. The more you transact, the more you earn.",
  },
  {
    step: "04",
    icon: TrendingUp,
    title: "Redeem Or Grow",
    desc: "Use ZOKI Coins for recharges, vouchers, or cashback. Watch your savings grow over time.",
  },
];

export default function ZokiPage() {
  return (
    <main style={{ background: "var(--background)", minHeight: "100vh" }}>

      {/* ── Breadcrumb ── */}
      <div className="zk-crumb-wrap">
        <div className="zk-crumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/products">Products</Link>
          <span>/</span>
          <span className="zk-crumb-current">Zoki</span>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="zk-hero">
        <div className="zk-hero-bg-grid" />
        <div className="zk-hero-glow zk-hero-glow-1" />
        <div className="zk-hero-glow zk-hero-glow-2" />

        <div className="zk-hero-inner">
          <div className="zk-hero-left">
            <div className="zk-hero-badge">
              <Sparkles size={13} />
              India&apos;s Smart Rewards &amp; Financial Services App
            </div>

            <h1 className="zk-hero-title">
              Recharge, Pay Bills,<br />
              <span className="zk-hero-title-accent">Earn Rewards</span> &amp;<br />
              Grow Your Income.
            </h1>

            <p className="zk-hero-sub">
              Pay, earn &amp; grow with every transaction — recharges, bills,
              loans, insurance &amp; bookings with cashback and{" "}
              <strong>ZOKI Coins</strong> on everything.
            </p>

            <div className="zk-hero-ctas">
              <a
                href={ZOKI_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="zk-btn-primary"
              >
                <Download size={15} /> Download App
              </a>
              <a
                href={ZOKI_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="zk-btn-outline"
              >
                Explore Services <ArrowRight size={15} />
              </a>
            </div>

            <div className="zk-hero-perks">
              <div className="zk-hero-perk">
                <CheckCircle2 size={14} /> No hidden charges
              </div>
              <div className="zk-hero-perk">
                <CheckCircle2 size={14} /> Instant cashback
              </div>
              <div className="zk-hero-perk">
                <CheckCircle2 size={14} /> 100% secure
              </div>
            </div>
          </div>

          {/* Right — Phone mockup */}
          <div className="zk-hero-right">
            <div className="zk-phone">
              <div className="zk-phone-notch" />
              <div className="zk-phone-screen">
                <div className="zk-phone-greeting">
                  <div className="zk-phone-hello">Hi, Welcome!</div>
                  <div className="zk-phone-coins">
                    <Coins size={12} />
                    1,240
                  </div>
                </div>

                <div className="zk-phone-card">
                  <div className="zk-phone-card-label">ZOKI Coins Balance</div>
                  <div className="zk-phone-card-value">₹ 1,240.50</div>
                  <div className="zk-phone-card-sub">+ ₹120 this week</div>
                </div>

                <div className="zk-phone-section-label">Quick Services</div>
                <div className="zk-phone-grid">
                  {[
                    { name: "Mobile", icon: Smartphone },
                    { name: "DTH", icon: Tv },
                    { name: "Bills", icon: Receipt },
                    { name: "Travel", icon: Plane },
                    { name: "Loans", icon: Wallet },
                    { name: "Shop", icon: ShoppingBag },
                  ].map((s) => (
                    <div key={s.name} className="zk-phone-tile">
                      <div className="zk-phone-tile-icon">
                        <s.icon size={15} />
                      </div>
                      <span>{s.name}</span>
                    </div>
                  ))}
                </div>

                <div className="zk-phone-toast">
                  <CheckCircle2 size={13} />
                  <div>
                    <strong>+50 ZOKI Coins</strong>
                    <div>earned on last recharge</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="zk-float zk-float-coin">
              <Coins size={22} />
            </div>
            <div className="zk-float zk-float-badge">
              <BadgePercent size={20} />
            </div>
            <div className="zk-float zk-float-star">
              <Star size={18} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <section className="zk-stats">
        <div className="zk-stats-inner">
          {heroStats.map((s) => (
            <div key={s.label} className="zk-stat">
              <div className="zk-stat-value">{s.value}</div>
              <div className="zk-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services ── */}
      <section className="zk-services">
        <div className="zk-section-header">
          <div className="zk-section-label">All Services</div>
          <h2 className="zk-section-title">
            Every bill, one app —{" "}
            <span className="zk-section-title-accent">rewards on each</span>
          </h2>
          <p className="zk-section-sub">
            From your mobile recharge to your insurance premium — Zoki covers
            50+ services with cashback and ZOKI Coins on every transaction.
          </p>
        </div>

        <div className="zk-services-grid">
          {services.map((s) => (
            <div key={s.title} className="zk-service-card">
              <div className="zk-service-icon">
                <s.icon size={22} />
              </div>
              <h3 className="zk-service-title">{s.title}</h3>
              <p className="zk-service-desc">{s.desc}</p>
              <div className="zk-service-tags">
                {s.items.map((item) => (
                  <span key={item} className="zk-service-tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Why Zoki ── */}
      <section className="zk-benefits">
        <div className="zk-section-header">
          <div className="zk-section-label">Why Zoki</div>
          <h2 className="zk-section-title">
            More than just an app —{" "}
            <span className="zk-section-title-accent">a smarter way to spend</span>
          </h2>
          <p className="zk-section-sub">
            Every rupee you spend on Zoki comes back to you in some form. Coins,
            cashback, vouchers — your transactions never go to waste.
          </p>
        </div>

        <div className="zk-benefits-grid">
          {benefits.map((b) => (
            <div key={b.title} className="zk-benefit-card">
              <div className="zk-benefit-icon">
                <b.icon size={22} />
              </div>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="zk-how">
        <div className="zk-section-header">
          <div className="zk-section-label">How It Works</div>
          <h2 className="zk-section-title">
            Start earning in <span className="zk-section-title-accent">four simple steps</span>
          </h2>
        </div>

        <div className="zk-how-grid">
          {howItWorks.map((step, i) => (
            <div key={step.step} className="zk-how-card">
              <div className="zk-how-step">{step.step}</div>
              <div className="zk-how-icon">
                <step.icon size={22} />
              </div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
              {i < howItWorks.length - 1 && <div className="zk-how-arrow" />}
            </div>
          ))}
        </div>
      </section>

      {/* ── ZOKI Coins Feature ── */}
      <section className="zk-coins-feature">
        <div className="zk-coins-inner">
          <div className="zk-coins-left">
            <div className="zk-section-label zk-section-label-light">
              ZOKI Coins
            </div>
            <h2 className="zk-coins-title">
              The currency of your everyday transactions
            </h2>
            <p className="zk-coins-desc">
              Every time you pay a bill, recharge your phone, or book a ticket
              on Zoki — you earn ZOKI Coins. They&apos;re yours to keep, stack
              up, and redeem whenever you want.
            </p>

            <div className="zk-coins-uses">
              <div className="zk-coins-use">
                <CheckCircle2 size={16} />
                <div>
                  <strong>Redeem as cashback</strong>
                  <span>Convert coins directly into wallet balance</span>
                </div>
              </div>
              <div className="zk-coins-use">
                <CheckCircle2 size={16} />
                <div>
                  <strong>Use for free recharges</strong>
                  <span>Coins cover your mobile, DTH, and bill payments</span>
                </div>
              </div>
              <div className="zk-coins-use">
                <CheckCircle2 size={16} />
                <div>
                  <strong>Shopping vouchers</strong>
                  <span>Exchange for vouchers from top brands</span>
                </div>
              </div>
            </div>

            <a
              href={ZOKI_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="zk-btn-primary"
            >
              Start Earning Coins <ArrowRight size={15} />
            </a>
          </div>

          <div className="zk-coins-right">
            <div className="zk-coin-stack">
              <div className="zk-coin zk-coin-1">
                <Coins size={28} />
              </div>
              <div className="zk-coin zk-coin-2">
                <Coins size={32} />
              </div>
              <div className="zk-coin zk-coin-3">
                <Coins size={38} />
              </div>
              <div className="zk-coin zk-coin-4">
                <Coins size={32} />
              </div>
              <div className="zk-coin zk-coin-5">
                <Coins size={28} />
              </div>
            </div>

            <div className="zk-coin-display">
              <div className="zk-coin-display-num">10,000+</div>
              <div className="zk-coin-display-label">Coins earned daily</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="zk-cta">
        <div className="zk-cta-glow" />
        <div className="zk-cta-inner">
          <div className="zk-cta-badge">
            <Sparkles size={13} /> Free To Download
          </div>
          <h2 className="zk-cta-title">
            Ready to make every rupee <br />
            <span className="zk-cta-title-accent">earn you something?</span>
          </h2>
          <p className="zk-cta-sub">
            Join thousands of users who are already saving and earning with
            Zoki. Download the app and turn your everyday payments into rewards.
          </p>
          <div className="zk-cta-buttons">
            <a
              href={ZOKI_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="zk-btn-primary zk-btn-primary-lg"
            >
              <Download size={15} /> Download Zoki App
            </a>
            <a
              href={ZOKI_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="zk-btn-ghost zk-btn-ghost-lg"
            >
              Visit zoki.app <ExternalLink size={14} />
            </a>
          </div>
          <div className="zk-cta-note">
            Zoki is a product of MJ Digital Services Pvt. Ltd. · Building
            digital products. Powering businesses.
          </div>
        </div>
      </section>

      {/* ── Styles ── */}
      <style>{`
        /* ============================================================
           BREADCRUMB
           ============================================================ */
        .zk-crumb-wrap {
          background: var(--surface);
          border-bottom: 1px solid var(--border);
        }
        .zk-crumb {
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
        .zk-crumb a {
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.2s;
        }
        .zk-crumb a:hover { color: #7c3aed; }
        .zk-crumb-current { color: var(--text-primary); font-weight: 600; }
        .zk-crumb span:not(.zk-crumb-current) { opacity: 0.5; }

        /* ============================================================
           HERO
           ============================================================ */
        .zk-hero {
          background: linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%);
          padding: 80px 24px 100px;
          position: relative;
          overflow: hidden;
        }
        .zk-hero-bg-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
        }
        .zk-hero-glow {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(80px);
        }
        .zk-hero-glow-1 {
          top: -80px;
          left: -100px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(250,204,21,0.2) 0%, transparent 70%);
        }
        .zk-hero-glow-2 {
          bottom: -120px;
          right: -100px;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(124,58,237,0.4) 0%, transparent 70%);
        }

        .zk-hero-inner {
          position: relative;
          z-index: 1;
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 64px;
          align-items: center;
        }

        .zk-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(250,204,21,0.12);
          border: 1px solid rgba(250,204,21,0.3);
          border-radius: 100px;
          font-size: 12px;
          font-weight: 600;
          color: #facc15;
          letter-spacing: 0.04em;
          margin-bottom: 24px;
          font-family: var(--font-sans);
        }

        .zk-hero-title {
          font-family: var(--font-display);
          font-size: clamp(34px, 5vw, 64px);
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.025em;
          line-height: 1.05;
          margin-bottom: 24px;
        }
        .zk-hero-title-accent {
          color: #facc15;
        }

        .zk-hero-sub {
          font-size: clamp(15px, 1.5vw, 17px);
          color: rgba(255,255,255,0.65);
          line-height: 1.75;
          margin-bottom: 32px;
          max-width: 520px;
        }
        .zk-hero-sub strong {
          color: #facc15;
          font-weight: 700;
        }

        .zk-hero-ctas {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 28px;
        }

        /* Buttons */
        .zk-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 26px;
          background: linear-gradient(135deg, #facc15 0%, #f59e0b 100%);
          color: #1e1b4b;
          border-radius: 100px;
          font-size: 14px;
          font-weight: 700;
          font-family: var(--font-sans);
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
          border: none;
          cursor: pointer;
        }
        .zk-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(250,204,21,0.4);
        }
        .zk-btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 26px;
          background: rgba(255,255,255,0.06);
          color: #fff;
          border: 1.5px solid rgba(255,255,255,0.18);
          border-radius: 100px;
          font-size: 14px;
          font-weight: 600;
          font-family: var(--font-sans);
          text-decoration: none;
          transition: all 0.2s;
          backdrop-filter: blur(10px);
        }
        .zk-btn-outline:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.4);
          transform: translateY(-2px);
        }
        .zk-btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 26px;
          background: transparent;
          color: rgba(255,255,255,0.7);
          border: none;
          font-size: 14px;
          font-weight: 600;
          font-family: var(--font-sans);
          text-decoration: none;
          transition: color 0.2s;
        }
        .zk-btn-ghost:hover { color: #facc15; }
        .zk-btn-primary-lg, .zk-btn-ghost-lg, .zk-btn-outline-lg {
          padding: 16px 32px;
          font-size: 15px;
        }

        .zk-hero-perks {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }
        .zk-hero-perk {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: rgba(255,255,255,0.55);
          font-family: var(--font-sans);
        }
        .zk-hero-perk svg { color: #4ade80; }

        /* ── Phone Mockup ── */
        .zk-hero-right {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        .zk-phone {
          width: 260px;
          aspect-ratio: 9 / 18.5;
          background: #0a0612;
          border-radius: 36px;
          padding: 8px;
          box-shadow:
            0 30px 80px rgba(124,58,237,0.4),
            0 0 0 1.5px rgba(255,255,255,0.05);
          position: relative;
        }
        .zk-phone-notch {
          position: absolute;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 18px;
          background: #0a0612;
          border-radius: 0 0 14px 14px;
          z-index: 2;
        }
        .zk-phone-screen {
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, #5b21b6 0%, #7c3aed 60%, #6366f1 100%);
          border-radius: 28px;
          padding: 30px 16px 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          overflow: hidden;
        }
        .zk-phone-greeting {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .zk-phone-hello {
          color: #fff;
          font-size: 13px;
          font-weight: 600;
        }
        .zk-phone-coins {
          display: flex;
          align-items: center;
          gap: 5px;
          background: rgba(250,204,21,0.2);
          color: #facc15;
          padding: 4px 10px;
          border-radius: 100px;
          font-size: 11.5px;
          font-weight: 700;
        }
        .zk-phone-card {
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 14px;
          padding: 14px;
        }
        .zk-phone-card-label {
          font-size: 10px;
          color: rgba(255,255,255,0.6);
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 4px;
        }
        .zk-phone-card-value {
          color: #fff;
          font-family: var(--font-display);
          font-size: 22px;
          font-weight: 800;
          line-height: 1;
          margin-bottom: 4px;
        }
        .zk-phone-card-sub {
          font-size: 10px;
          color: #4ade80;
          font-weight: 600;
        }
        .zk-phone-section-label {
          font-size: 9.5px;
          color: rgba(255,255,255,0.6);
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-top: 4px;
        }
        .zk-phone-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 7px;
        }
        .zk-phone-tile {
          background: rgba(255,255,255,0.95);
          border-radius: 10px;
          padding: 9px 4px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }
        .zk-phone-tile-icon {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: linear-gradient(135deg, #7c3aed 0%, #6366f1 100%);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .zk-phone-tile span {
          font-size: 9px;
          font-weight: 600;
          color: #1e1b4b;
        }
        .zk-phone-toast {
          background: rgba(74,222,128,0.95);
          backdrop-filter: blur(10px);
          border-radius: 10px;
          padding: 10px 12px;
          display: flex;
          align-items: center;
          gap: 8px;
          color: #052e16;
          margin-top: auto;
        }
        .zk-phone-toast strong {
          font-size: 11px;
          font-weight: 800;
          display: block;
        }
        .zk-phone-toast div:last-child div {
          font-size: 9px;
          font-weight: 600;
          opacity: 0.85;
        }

        /* Floating bits */
        .zk-float {
          position: absolute;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }
        .zk-float-coin {
          top: 12%;
          left: -5px;
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg, #facc15 0%, #f59e0b 100%);
          color: #1e1b4b;
          animation: zkFloat1 4s ease-in-out infinite;
        }
        .zk-float-badge {
          bottom: 18%;
          right: -5px;
          width: 52px;
          height: 52px;
          background: linear-gradient(135deg, #4ade80 0%, #22c55e 100%);
          color: #fff;
          animation: zkFloat2 5s ease-in-out infinite;
        }
        .zk-float-star {
          top: 45%;
          right: 0;
          width: 42px;
          height: 42px;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.2);
          color: #facc15;
          animation: zkFloat3 6s ease-in-out infinite;
        }
        @keyframes zkFloat1 {
          0%, 100% { transform: translateY(0) rotate(-5deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        @keyframes zkFloat2 {
          0%, 100% { transform: translateY(0) rotate(5deg); }
          50% { transform: translateY(-12px) rotate(-5deg); }
        }
        @keyframes zkFloat3 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        /* ============================================================
           STATS STRIP
           ============================================================ */
        .zk-stats {
          background: var(--background);
          padding: 40px 24px;
          border-bottom: 1px solid var(--border);
        }
        .zk-stats-inner {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .zk-stat {
          text-align: center;
        }
        .zk-stat-value {
          font-family: var(--font-display);
          font-size: clamp(22px, 2.6vw, 32px);
          font-weight: 800;
          color: #7c3aed;
          letter-spacing: -0.02em;
          line-height: 1;
          margin-bottom: 8px;
        }
        .zk-stat-label {
          font-size: 13px;
          color: var(--text-muted);
          font-weight: 500;
        }

        /* ============================================================
           SHARED SECTION HEADERS
           ============================================================ */
        .zk-section-header {
          max-width: 720px;
          margin: 0 auto 56px;
          text-align: center;
        }
        .zk-section-label {
          display: inline-flex;
          align-items: center;
          padding: 5px 14px;
          border-radius: 100px;
          background: rgba(124,58,237,0.08);
          border: 1px solid rgba(124,58,237,0.18);
          font-size: 11px;
          font-weight: 700;
          color: #7c3aed;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 16px;
          font-family: var(--font-sans);
        }
        .zk-section-label-light {
          background: rgba(250,204,21,0.12);
          border-color: rgba(250,204,21,0.3);
          color: #facc15;
        }
        .zk-section-title {
          font-family: var(--font-display);
          font-size: clamp(26px, 3.4vw, 42px);
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.02em;
          line-height: 1.15;
          margin-bottom: 16px;
        }
        .zk-section-title-accent {
          background: linear-gradient(135deg, #7c3aed 0%, #6366f1 50%, #facc15 120%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .zk-section-sub {
          font-size: 15.5px;
          color: var(--text-muted);
          line-height: 1.75;
        }

        /* ============================================================
           SERVICES
           ============================================================ */
        .zk-services {
          padding: 100px 24px;
          background: var(--background);
        }
        .zk-services-grid {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .zk-service-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 18px;
          padding: 28px 24px;
          transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
        }
        .zk-service-card:hover {
          border-color: rgba(124,58,237,0.4);
          box-shadow: 0 12px 40px rgba(124,58,237,0.1);
          transform: translateY(-3px);
        }
        .zk-service-icon {
          width: 50px;
          height: 50px;
          border-radius: 14px;
          background: linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(99,102,241,0.08) 100%);
          color: #7c3aed;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }
        .zk-service-title {
          font-family: var(--font-display);
          font-size: 19px;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.01em;
          margin-bottom: 8px;
        }
        .zk-service-desc {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 16px;
        }
        .zk-service-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .zk-service-tag {
          font-size: 12px;
          font-weight: 500;
          color: var(--text-muted);
          padding: 4px 10px;
          background: var(--background);
          border: 1px solid var(--border);
          border-radius: 100px;
          font-family: var(--font-sans);
        }

        /* ============================================================
           BENEFITS
           ============================================================ */
        .zk-benefits {
          padding: 100px 24px;
          background: var(--surface);
        }
        .zk-benefits-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .zk-benefit-card {
          background: var(--background);
          border: 1px solid var(--border);
          border-radius: 18px;
          padding: 28px 24px;
          transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
        }
        .zk-benefit-card:hover {
          border-color: rgba(124,58,237,0.4);
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(124,58,237,0.1);
        }
        .zk-benefit-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: linear-gradient(135deg, #7c3aed 0%, #6366f1 100%);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }
        .zk-benefit-card h3 {
          font-family: var(--font-display);
          font-size: 17px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 10px;
          letter-spacing: -0.01em;
        }
        .zk-benefit-card p {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.7;
        }

        /* ============================================================
           HOW IT WORKS
           ============================================================ */
        .zk-how {
          padding: 100px 24px;
          background: var(--background);
        }
        .zk-how-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .zk-how-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 18px;
          padding: 28px 24px;
          position: relative;
          transition: border-color 0.25s, transform 0.25s;
        }
        .zk-how-card:hover {
          border-color: rgba(124,58,237,0.4);
          transform: translateY(-3px);
        }
        .zk-how-step {
          font-family: var(--font-display);
          font-size: 36px;
          font-weight: 800;
          color: transparent;
          -webkit-text-stroke: 1.5px rgba(124,58,237,0.25);
          line-height: 1;
          letter-spacing: -0.02em;
          margin-bottom: 14px;
        }
        .zk-how-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(124,58,237,0.1);
          color: #7c3aed;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }
        .zk-how-card h3 {
          font-family: var(--font-display);
          font-size: 17px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 10px;
          letter-spacing: -0.01em;
        }
        .zk-how-card p {
          font-size: 13.5px;
          color: var(--text-muted);
          line-height: 1.7;
        }
        .zk-how-arrow {
          position: absolute;
          right: -14px;
          top: 50%;
          transform: translateY(-50%);
          width: 14px;
          height: 14px;
          border-top: 2px solid rgba(124,58,237,0.3);
          border-right: 2px solid rgba(124,58,237,0.3);
          transform: translateY(-50%) rotate(45deg);
          z-index: 1;
        }

        /* ============================================================
           ZOKI COINS FEATURE
           ============================================================ */
        .zk-coins-feature {
          padding: 100px 24px;
          background: linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%);
          position: relative;
          overflow: hidden;
        }
        .zk-coins-feature::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
        }
        .zk-coins-inner {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 72px;
          align-items: center;
        }
        .zk-coins-title {
          font-family: var(--font-display);
          font-size: clamp(28px, 3.4vw, 44px);
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.02em;
          line-height: 1.15;
          margin-bottom: 18px;
        }
        .zk-coins-desc {
          font-size: 16px;
          color: rgba(255,255,255,0.6);
          line-height: 1.75;
          margin-bottom: 32px;
        }
        .zk-coins-uses {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 36px;
        }
        .zk-coins-use {
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }
        .zk-coins-use svg {
          color: #facc15;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .zk-coins-use strong {
          display: block;
          font-size: 15px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 2px;
          font-family: var(--font-sans);
        }
        .zk-coins-use span {
          font-size: 13.5px;
          color: rgba(255,255,255,0.5);
        }

        /* Coin stack visual */
        .zk-coins-right {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 380px;
        }
        .zk-coin-stack {
          position: relative;
          width: 280px;
          height: 280px;
        }
        .zk-coin {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(135deg, #facc15 0%, #f59e0b 100%);
          color: #1e1b4b;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow:
            0 12px 30px rgba(250,204,21,0.3),
            inset 0 -4px 8px rgba(0,0,0,0.15);
          border: 2px solid #fef3c7;
        }
        .zk-coin-1 {
          width: 70px;
          height: 70px;
          top: 10%;
          left: 5%;
          animation: zkCoinFloat 5s ease-in-out infinite;
        }
        .zk-coin-2 {
          width: 80px;
          height: 80px;
          top: 0;
          right: 20%;
          animation: zkCoinFloat 6s ease-in-out infinite 0.5s;
        }
        .zk-coin-3 {
          width: 110px;
          height: 110px;
          top: 35%;
          left: 30%;
          animation: zkCoinFloat 7s ease-in-out infinite 1s;
          box-shadow:
            0 16px 40px rgba(250,204,21,0.4),
            inset 0 -6px 12px rgba(0,0,0,0.15);
        }
        .zk-coin-4 {
          width: 80px;
          height: 80px;
          bottom: 15%;
          left: 8%;
          animation: zkCoinFloat 5.5s ease-in-out infinite 1.5s;
        }
        .zk-coin-5 {
          width: 65px;
          height: 65px;
          bottom: 5%;
          right: 10%;
          animation: zkCoinFloat 4.5s ease-in-out infinite 2s;
        }
        @keyframes zkCoinFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(8deg); }
        }

        .zk-coin-display {
          position: absolute;
          bottom: -10px;
          right: 0;
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 16px;
          padding: 18px 24px;
          text-align: center;
        }
        .zk-coin-display-num {
          font-family: var(--font-display);
          font-size: 28px;
          font-weight: 800;
          color: #facc15;
          line-height: 1;
          margin-bottom: 4px;
        }
        .zk-coin-display-label {
          font-size: 11px;
          color: rgba(255,255,255,0.55);
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        /* ============================================================
           CTA
           ============================================================ */
        .zk-cta {
          background: var(--background);
          padding: 100px 24px;
          position: relative;
          overflow: hidden;
          text-align: center;
        }
        .zk-cta-glow {
          position: absolute;
          top: -100px;
          left: 50%;
          transform: translateX(-50%);
          width: 700px;
          height: 400px;
          background: radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 70%);
          pointer-events: none;
        }
        .zk-cta-inner {
          position: relative;
          z-index: 1;
          max-width: 720px;
          margin: 0 auto;
        }
        .zk-cta-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: 100px;
          background: rgba(124,58,237,0.08);
          border: 1px solid rgba(124,58,237,0.2);
          font-size: 11px;
          font-weight: 700;
          color: #7c3aed;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 24px;
        }
        .zk-cta-title {
          font-family: var(--font-display);
          font-size: clamp(30px, 4vw, 52px);
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.02em;
          line-height: 1.15;
          margin-bottom: 18px;
        }
        .zk-cta-title-accent {
          background: linear-gradient(135deg, #7c3aed 0%, #6366f1 50%, #facc15 120%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .zk-cta-sub {
          font-size: 16px;
          color: var(--text-muted);
          line-height: 1.75;
          margin-bottom: 40px;
        }
        .zk-cta-buttons {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 32px;
        }
        .zk-cta .zk-btn-ghost {
          color: var(--text-muted);
        }
        .zk-cta .zk-btn-ghost:hover { color: #7c3aed; }
        .zk-cta-note {
          font-size: 12px;
          color: var(--text-muted);
          letter-spacing: 0.02em;
          opacity: 0.7;
        }

        /* ============================================================
           RESPONSIVE
           ============================================================ */
        @media (max-width: 1100px) {
          .zk-hero-inner,
          .zk-coins-inner {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .zk-hero-right { order: -1; }
          .zk-services-grid {
            grid-template-columns: 1fr 1fr;
          }
          .zk-benefits-grid,
          .zk-how-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .zk-how-arrow { display: none; }
        }

        @media (max-width: 768px) {
          .zk-crumb { padding: 12px 20px; font-size: 12px; }
          .zk-hero {
            padding: 56px 20px 80px;
          }
          .zk-hero-perks { gap: 14px; }
          .zk-stats {
            padding: 32px 20px;
          }
          .zk-stats-inner {
            grid-template-columns: 1fr 1fr;
            gap: 24px;
          }
          .zk-services,
          .zk-benefits,
          .zk-how,
          .zk-coins-feature,
          .zk-cta {
            padding: 64px 20px;
          }
          .zk-section-header { margin-bottom: 40px; }
          .zk-services-grid,
          .zk-benefits-grid,
          .zk-how-grid {
            grid-template-columns: 1fr;
          }
          .zk-phone { width: 230px; }
          .zk-float-coin { width: 48px; height: 48px; left: 0; }
          .zk-float-badge { width: 44px; height: 44px; right: 0; }
          .zk-float-star { width: 36px; height: 36px; }
          .zk-coin-stack {
            width: 240px;
            height: 240px;
            margin: 0 auto;
          }
          .zk-coin-display {
            position: relative;
            bottom: auto;
            right: auto;
            margin-top: 20px;
            display: inline-block;
          }
        }

        @media (max-width: 480px) {
          .zk-hero { padding: 48px 16px 64px; }
          .zk-hero-ctas { flex-direction: column; }
          .zk-btn-primary, .zk-btn-outline {
            width: 100%;
            justify-content: center;
          }
          .zk-stats-inner { grid-template-columns: 1fr; gap: 20px; }
          .zk-services,
          .zk-benefits,
          .zk-how,
          .zk-coins-feature,
          .zk-cta {
            padding: 56px 16px;
          }
          .zk-cta-buttons { flex-direction: column; width: 100%; }
          .zk-cta-buttons .zk-btn-primary,
          .zk-cta-buttons .zk-btn-ghost { width: 100%; justify-content: center; }
          .zk-phone { width: 210px; }
        }
      `}</style>
    </main>
  );
}