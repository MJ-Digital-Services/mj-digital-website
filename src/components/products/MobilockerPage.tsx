"use client";

import Link from "next/link";
import {
  ArrowRight, ExternalLink, Phone, Mail,
  Lock, Unlock, Shield, TrendingUp,
  Smartphone, Key, BarChart3, HeadphonesIcon,
  CheckCircle2, Zap, Users, ChartBar,
  Quote,
} from "lucide-react";

const MOBILOCKER_URL = "https://mobilocker.app";

// ─── Hero stats ──────────────────────────────────────────────────────────────
const heroStats = [
  { value: "95%", label: "EMI recovery rate" },
  { value: "60% → 95%", label: "Recovery improvement" },
  { value: "10+", label: "States onboarded" },
  { value: "24×7", label: "Auto-lock system" },
];

// ─── Core features ───────────────────────────────────────────────────────────
const features = [
  {
    icon: Lock,
    title: "Auto Device Lock",
    desc: "If a customer misses their EMI, the phone automatically locks. No phone calls, no chasing — the system handles it.",
  },
  {
    icon: Unlock,
    title: "Instant Unlock on Payment",
    desc: "As soon as the EMI is paid, the phone unlocks within seconds. Transparent for customers, hassle-free for you.",
  },
  {
    icon: Key,
    title: "License Key Management",
    desc: "Generate and manage unique license keys for every device sold. Full audit trail of every activation.",
  },
  {
    icon: BarChart3,
    title: "Real-time EMI Tracking",
    desc: "Track active devices, paid EMIs, defaulters, and recovery rates from one dashboard. Know your numbers anytime.",
  },
];

// ─── Why retailers choose us ─────────────────────────────────────────────────
const benefits = [
  {
    icon: TrendingUp,
    title: "Attract More Customers",
    desc: "Flexible EMI options bring more foot traffic to your store. Stand out from competitors who only accept full payment.",
  },
  {
    icon: ChartBar,
    title: "Increase Your Sales",
    desc: "Make high-end smartphones accessible to a broader audience. Customers buy more when they have flexible payment options.",
  },
  {
    icon: Shield,
    title: "Reliable Financing",
    desc: "Backed by trusted financial institutions. Secure and reliable payment processing for both you and your customers.",
  },
  {
    icon: HeadphonesIcon,
    title: "End-to-End Support",
    desc: "From initial integration to ongoing assistance — our team is with you every step. Hindi and English support both available.",
  },
];

// ─── How it works ───────────────────────────────────────────────────────────
const howItWorks = [
  {
    step: "01",
    title: "Customer Buys Phone on EMI",
    desc: "Retailer sells a phone with an EMI plan. Customer signs up, pays the down payment, and walks out with the device.",
  },
  {
    step: "02",
    title: "Mobilocker is Installed",
    desc: "Mobilocker software is activated on the device with a unique license key tied to the EMI schedule.",
  },
  {
    step: "03",
    title: "Auto-Lock on Missed EMI",
    desc: "If the customer misses a payment, the device locks automatically. The customer sees a payment prompt to unlock.",
  },
  {
    step: "04",
    title: "Auto-Unlock on Payment",
    desc: "Customer pays the EMI through the app or retailer. The phone unlocks instantly and the cycle continues.",
  },
];

// ─── Real testimonials from mobilocker.app ──────────────────────────────────
const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Delhi",
    quote: "Mobilocker ne hamare shop ka pura EMI system manage karna bahut easy bana diya hai. Ab kisi ko baar baar call karne ki zarurat nahi padti — phone block ho jaata hai to customer khud payment karta hai!",
    color: "#06b6d4",
  },
  {
    name: "Faisal Khan",
    location: "Lucknow, UP",
    quote: "Starting mein customers thoda confused the, lekin ab sabko pata hai system kaise kaam karta hai. Recovery 90% se upar ho gayi hai.",
    color: "#0891b2",
  },
  {
    name: "Rina Das",
    location: "Kolkata, WB",
    quote: "Earlier I had huge EMI collection issues. After using Mobilocker, my recovery has improved a lot. Very useful software for small mobile shop owners like me.",
    color: "#0e7490",
  },
  {
    name: "Deepak Rawat",
    location: "Dehradun, UK",
    quote: "Maine do mahine se use karna shuru kiya hai. EMI recovery pehle sirf 60% thi, ab 95% tak ho gayi hai. Excellent experience.",
    color: "#06b6d4",
  },
  {
    name: "Kavita Reddy",
    location: "Hyderabad, TS",
    quote: "Phone locking feature is effective but fair. As soon as the EMI is paid, the phone unlocks — very transparent system.",
    color: "#0891b2",
  },
  {
    name: "Nishant Shah",
    location: "Ahmedabad, GJ",
    quote: "Interface simple hai, aur training lene ke baad staff bhi easily use kar raha hai. Pehle EMI ke liye 10 baar phone karte the — ab customer khud call karta hai.",
    color: "#0e7490",
  },
];

export default function MobilockerPage() {
  return (
    <main style={{ background: "var(--background)", minHeight: "100vh" }}>

      {/* ── Breadcrumb ── */}
      <div className="ml-crumb-wrap">
        <div className="ml-crumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/products">Products</Link>
          <span>/</span>
          <span className="ml-crumb-current">Mobilocker</span>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="ml-hero">
        <div className="ml-hero-grid" />
        <div className="ml-hero-glow ml-hero-glow-1" />
        <div className="ml-hero-glow ml-hero-glow-2" />

        <div className="ml-hero-inner">
          <div className="ml-hero-left">
            <div className="ml-hero-badge">
              <Shield size={13} />
              A Product of Ezeepay · By MJ Digital Services
            </div>

            <h1 className="ml-hero-title">
              Sell phones on EMI.<br />
              <span className="ml-hero-title-accent">Recover every rupee.</span>
            </h1>

            <p className="ml-hero-sub">
              Mobilocker is the EMI locker software trusted by mobile retailers
              across India. If a customer misses a payment, the phone locks
              automatically. The moment they pay, it unlocks. Your EMI recovery
              jumps from 60% to <strong>95%</strong> — without a single chase
              call.
            </p>

            <div className="ml-hero-ctas">
              <a
                href={MOBILOCKER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-btn-primary"
              >
                Get Started <ArrowRight size={15} />
              </a>
              <a
                href={MOBILOCKER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-btn-outline"
              >
                Visit mobilocker.app <ExternalLink size={14} />
              </a>
            </div>

            <div className="ml-hero-perks">
              <div className="ml-hero-perk">
                <CheckCircle2 size={14} /> Auto lock / unlock
              </div>
              <div className="ml-hero-perk">
                <CheckCircle2 size={14} /> License key system
              </div>
              <div className="ml-hero-perk">
                <CheckCircle2 size={14} /> Real-time tracking
              </div>
            </div>
          </div>

          {/* Right — Device lock visual */}
          <div className="ml-hero-right">
            <div className="ml-device-stack">
              {/* Locked device */}
              <div className="ml-device ml-device-locked">
                <div className="ml-device-status ml-device-status-locked">
                  <Lock size={11} />
                  LOCKED · EMI Due
                </div>
                <div className="ml-device-content">
                  <div className="ml-device-lock-icon">
                    <Lock size={28} />
                  </div>
                  <div className="ml-device-label">Payment Required</div>
                  <div className="ml-device-amount">₹ 2,499</div>
                  <div className="ml-device-cta">Pay to Unlock</div>
                </div>
              </div>

              {/* Unlocked device */}
              <div className="ml-device ml-device-unlocked">
                <div className="ml-device-status ml-device-status-unlocked">
                  <Unlock size={11} />
                  ACTIVE · EMI Paid
                </div>
                <div className="ml-device-content">
                  <div className="ml-device-success">
                    <CheckCircle2 size={28} />
                  </div>
                  <div className="ml-device-label">Device Unlocked</div>
                  <div className="ml-device-meta">EMI 4 of 12 paid</div>
                  <div className="ml-device-progress">
                    <div className="ml-device-progress-fill" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stat */}
            <div className="ml-float-stat">
              <div className="ml-float-stat-num">95%</div>
              <div className="ml-float-stat-label">Recovery Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <section className="ml-stats">
        <div className="ml-stats-inner">
          {heroStats.map((s) => (
            <div key={s.label} className="ml-stat">
              <div className="ml-stat-value">{s.value}</div>
              <div className="ml-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Core Features ── */}
      <section className="ml-features">
        <div className="ml-section-header">
          <div className="ml-section-label">Core Features</div>
          <h2 className="ml-section-title">
            Everything you need to{" "}
            <span className="ml-section-title-accent">sell EMI safely</span>
          </h2>
          <p className="ml-section-sub">
            Mobilocker handles the entire EMI lifecycle automatically. You sell
            phones — we handle the recovery.
          </p>
        </div>

        <div className="ml-features-grid">
          {features.map((f) => (
            <div key={f.title} className="ml-feature-card">
              <div className="ml-feature-icon">
                <f.icon size={24} />
              </div>
              <h3 className="ml-feature-title">{f.title}</h3>
              <p className="ml-feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="ml-how">
        <div className="ml-section-header">
          <div className="ml-section-label">How It Works</div>
          <h2 className="ml-section-title">
            A simple loop that{" "}
            <span className="ml-section-title-accent">protects every sale</span>
          </h2>
        </div>

        <div className="ml-how-flow">
          {howItWorks.map((step, i) => (
            <div key={step.step} className="ml-how-card">
              <div className="ml-how-step">{step.step}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
              {i < howItWorks.length - 1 && (
                <div className="ml-how-connect">
                  <ArrowRight size={16} />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Why Retailers ── */}
      <section className="ml-benefits">
        <div className="ml-section-header">
          <div className="ml-section-label">For Retailers</div>
          <h2 className="ml-section-title">
            Built for mobile shop owners,{" "}
            <span className="ml-section-title-accent">big and small</span>
          </h2>
          <p className="ml-section-sub">
            Whether you run a single shop or a chain — Mobilocker grows with you
            and protects every device you sell.
          </p>
        </div>

        <div className="ml-benefits-grid">
          {benefits.map((b) => (
            <div key={b.title} className="ml-benefit-card">
              <div className="ml-benefit-icon">
                <b.icon size={22} />
              </div>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="ml-testimonials">
        <div className="ml-section-header">
          <div className="ml-section-label">Trusted Across India</div>
          <h2 className="ml-section-title">
            Real retailers,{" "}
            <span className="ml-section-title-accent">real recovery rates</span>
          </h2>
          <p className="ml-section-sub">
            From Delhi to Hyderabad, Kolkata to Ahmedabad — mobile shop owners
            across India are using Mobilocker to grow their business safely.
          </p>
        </div>

        <div className="ml-testimonials-grid">
          {testimonials.map((t) => (
            <div key={t.name} className="ml-testimonial-card">
              <Quote className="ml-testimonial-quote" size={22} />
              <p className="ml-testimonial-text">{t.quote}</p>
              <div className="ml-testimonial-author">
                <div
                  className="ml-testimonial-avatar"
                  style={{ background: `linear-gradient(135deg, ${t.color} 0%, ${t.color}aa 100%)` }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="ml-testimonial-name">{t.name}</div>
                  <div className="ml-testimonial-location">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="ml-cta">
        <div className="ml-cta-grid" />
        <div className="ml-cta-glow" />
        <div className="ml-cta-inner">
          <div className="ml-cta-badge">
            <Zap size={13} /> Get Started Today
          </div>
          <h2 className="ml-cta-title">
            Stop chasing EMIs. <br />
            <span className="ml-cta-title-accent">Start growing your business.</span>
          </h2>
          <p className="ml-cta-sub">
            Join mobile retailers across India who are using Mobilocker to
            protect every device sold on EMI. Quick setup, full training, and
            24×7 support included.
          </p>

          <div className="ml-cta-contact">
            <a href="tel:+919289910487" className="ml-cta-contact-item">
              <Phone size={16} />
              <div>
                <span>Call us</span>
                <strong>+91 92899 10487</strong>
              </div>
            </a>
            <a href="mailto:sales@ezeepay.app" className="ml-cta-contact-item">
              <Mail size={16} />
              <div>
                <span>Email us</span>
                <strong>sales@ezeepay.app</strong>
              </div>
            </a>
          </div>

          <div className="ml-cta-buttons">
            <a
              href={MOBILOCKER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-btn-primary ml-btn-primary-lg"
            >
              Visit Mobilocker.app <ExternalLink size={15} />
            </a>
            <Link href="/contact" className="ml-btn-outline ml-btn-outline-lg">
              Talk to MJ Digital
            </Link>
          </div>

          <div className="ml-cta-note">
            Mobilocker is a product of Ezeepay, a brand under MJ Digital Services
            Pvt. Ltd.
          </div>
        </div>
      </section>

      {/* ── Styles ── */}
      <style>{`
        /* ============================================================
           BREADCRUMB
           ============================================================ */
        .ml-crumb-wrap {
          background: var(--surface);
          border-bottom: 1px solid var(--border);
        }
        .ml-crumb {
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
        .ml-crumb a {
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.2s;
        }
        .ml-crumb a:hover { color: #06b6d4; }
        .ml-crumb-current { color: var(--text-primary); font-weight: 600; }
        .ml-crumb span:not(.ml-crumb-current) { opacity: 0.5; }

        /* ============================================================
           HERO
           ============================================================ */
        .ml-hero {
          background: #0a0a0b;
          padding: 80px 24px 100px;
          position: relative;
          overflow: hidden;
          color: #fff;
        }
        .ml-hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(6,182,212,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6,182,212,0.04) 1px, transparent 1px);
          background-size: 50px 50px;
          mask-image: radial-gradient(ellipse 60% 80% at 50% 50%, black 30%, transparent 80%);
          -webkit-mask-image: radial-gradient(ellipse 60% 80% at 50% 50%, black 30%, transparent 80%);
          pointer-events: none;
        }
        .ml-hero-glow {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(100px);
        }
        .ml-hero-glow-1 {
          top: -80px;
          right: 5%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(6,182,212,0.25) 0%, transparent 70%);
        }
        .ml-hero-glow-2 {
          bottom: -100px;
          left: -50px;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(34,211,238,0.15) 0%, transparent 70%);
        }

        .ml-hero-inner {
          position: relative;
          z-index: 1;
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 64px;
          align-items: center;
        }

        .ml-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 14px;
          background: rgba(6,182,212,0.1);
          border: 1px solid rgba(6,182,212,0.3);
          border-radius: 100px;
          font-size: 12px;
          font-weight: 600;
          color: #22d3ee;
          letter-spacing: 0.04em;
          margin-bottom: 24px;
          font-family: var(--font-sans);
        }

        .ml-hero-title {
          font-family: var(--font-display);
          font-size: clamp(34px, 5vw, 64px);
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.025em;
          line-height: 1.05;
          margin-bottom: 24px;
        }
        .ml-hero-title-accent {
          background: linear-gradient(135deg, #22d3ee 0%, #06b6d4 50%, #0891b2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .ml-hero-sub {
          font-size: clamp(15px, 1.5vw, 17px);
          color: rgba(255,255,255,0.6);
          line-height: 1.75;
          margin-bottom: 32px;
          max-width: 540px;
        }
        .ml-hero-sub strong {
          color: #22d3ee;
          font-weight: 700;
        }

        .ml-hero-ctas {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 28px;
        }

        /* Buttons */
        .ml-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 26px;
          background: linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%);
          color: #0a0a0b;
          border-radius: 100px;
          font-size: 14px;
          font-weight: 700;
          font-family: var(--font-sans);
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
          border: none;
          cursor: pointer;
        }
        .ml-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(6,182,212,0.4);
        }
        .ml-btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 26px;
          background: rgba(255,255,255,0.05);
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
        .ml-btn-outline:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(34,211,238,0.5);
          color: #22d3ee;
          transform: translateY(-2px);
        }
        .ml-btn-primary-lg, .ml-btn-outline-lg {
          padding: 16px 32px;
          font-size: 15px;
        }

        .ml-hero-perks {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }
        .ml-hero-perk {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: rgba(255,255,255,0.55);
          font-family: var(--font-sans);
        }
        .ml-hero-perk svg { color: #22d3ee; }

        /* ── Device Stack Visual ── */
        .ml-hero-right {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 460px;
        }
        .ml-device-stack {
          position: relative;
          width: 100%;
          max-width: 380px;
          height: 420px;
        }
        .ml-device {
          position: absolute;
          width: 220px;
          aspect-ratio: 9 / 18;
          border-radius: 28px;
          padding: 10px;
          overflow: hidden;
          background: #0a0a0b;
          box-shadow:
            0 25px 70px rgba(0,0,0,0.5),
            0 0 0 1.5px rgba(255,255,255,0.06);
        }
        .ml-device-locked {
          top: 0;
          left: 0;
          transform: rotate(-6deg);
          z-index: 1;
        }
        .ml-device-unlocked {
          bottom: 0;
          right: 0;
          transform: rotate(4deg);
          z-index: 2;
        }
        .ml-device::before {
          content: "";
          position: absolute;
          top: 10px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 14px;
          background: #000;
          border-radius: 0 0 10px 10px;
          z-index: 3;
        }

        .ml-device-status {
          position: absolute;
          top: 32px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 4px 9px;
          border-radius: 100px;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.05em;
        }
        .ml-device-status-locked {
          background: rgba(239,68,68,0.95);
          color: #fff;
        }
        .ml-device-status-unlocked {
          background: rgba(34,197,94,0.95);
          color: #fff;
        }

        .ml-device-content {
          width: 100%;
          height: 100%;
          border-radius: 20px;
          padding: 60px 16px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          text-align: center;
        }
        .ml-device-locked .ml-device-content {
          background: linear-gradient(180deg, #1a0a0a 0%, #2a0a0a 50%, #1a0a0a 100%);
        }
        .ml-device-unlocked .ml-device-content {
          background: linear-gradient(180deg, #052e16 0%, #064e3b 50%, #052e16 100%);
        }

        .ml-device-lock-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(239,68,68,0.15);
          color: #fca5a5;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 4px;
          border: 1.5px solid rgba(239,68,68,0.3);
        }
        .ml-device-success {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(34,197,94,0.15);
          color: #86efac;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 4px;
          border: 1.5px solid rgba(34,197,94,0.3);
        }

        .ml-device-label {
          font-size: 11px;
          color: rgba(255,255,255,0.5);
          font-weight: 600;
          letter-spacing: 0.04em;
        }
        .ml-device-amount {
          font-family: var(--font-display);
          font-size: 22px;
          font-weight: 800;
          color: #fff;
          line-height: 1;
        }
        .ml-device-cta {
          background: rgba(239,68,68,0.9);
          color: #fff;
          font-size: 10px;
          font-weight: 700;
          padding: 6px 14px;
          border-radius: 100px;
          margin-top: 4px;
        }
        .ml-device-meta {
          font-size: 10.5px;
          color: rgba(255,255,255,0.6);
          font-weight: 600;
        }
        .ml-device-progress {
          width: 80%;
          height: 4px;
          background: rgba(255,255,255,0.1);
          border-radius: 100px;
          margin-top: 6px;
          overflow: hidden;
        }
        .ml-device-progress-fill {
          width: 33%;
          height: 100%;
          background: #4ade80;
          border-radius: 100px;
        }

        .ml-float-stat {
          position: absolute;
          top: -10px;
          right: -20px;
          background: linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%);
          color: #0a0a0b;
          padding: 14px 20px;
          border-radius: 16px;
          z-index: 5;
          box-shadow: 0 12px 30px rgba(6,182,212,0.4);
        }
        .ml-float-stat-num {
          font-family: var(--font-display);
          font-size: 26px;
          font-weight: 800;
          line-height: 1;
          margin-bottom: 4px;
        }
        .ml-float-stat-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        /* ============================================================
           STATS STRIP
           ============================================================ */
        .ml-stats {
          background: var(--background);
          padding: 40px 24px;
          border-bottom: 1px solid var(--border);
        }
        .ml-stats-inner {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .ml-stat {
          text-align: center;
        }
        .ml-stat-value {
          font-family: var(--font-display);
          font-size: clamp(22px, 2.6vw, 32px);
          font-weight: 800;
          color: #06b6d4;
          letter-spacing: -0.02em;
          line-height: 1;
          margin-bottom: 8px;
        }
        .ml-stat-label {
          font-size: 13px;
          color: var(--text-muted);
          font-weight: 500;
        }

        /* ============================================================
           SHARED SECTION HEADERS
           ============================================================ */
        .ml-section-header {
          max-width: 720px;
          margin: 0 auto 56px;
          text-align: center;
        }
        .ml-section-label {
          display: inline-flex;
          align-items: center;
          padding: 5px 14px;
          border-radius: 100px;
          background: rgba(6,182,212,0.08);
          border: 1px solid rgba(6,182,212,0.2);
          font-size: 11px;
          font-weight: 700;
          color: #0891b2;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 16px;
          font-family: var(--font-sans);
        }
        .ml-section-title {
          font-family: var(--font-display);
          font-size: clamp(26px, 3.4vw, 42px);
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.02em;
          line-height: 1.15;
          margin-bottom: 16px;
        }
        .ml-section-title-accent {
          background: linear-gradient(135deg, #0891b2 0%, #06b6d4 50%, #22d3ee 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .ml-section-sub {
          font-size: 15.5px;
          color: var(--text-muted);
          line-height: 1.75;
        }

        /* ============================================================
           FEATURES
           ============================================================ */
        .ml-features {
          padding: 100px 24px;
          background: var(--background);
        }
        .ml-features-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .ml-feature-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 18px;
          padding: 28px 24px;
          transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
        }
        .ml-feature-card:hover {
          border-color: rgba(6,182,212,0.4);
          box-shadow: 0 12px 40px rgba(6,182,212,0.1);
          transform: translateY(-3px);
        }
        .ml-feature-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: linear-gradient(135deg, #0a0a0b 0%, #1a1a1b 100%);
          color: #22d3ee;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
          box-shadow: 0 8px 20px rgba(6,182,212,0.15);
        }
        .ml-feature-title {
          font-family: var(--font-display);
          font-size: 18px;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.01em;
          margin-bottom: 10px;
        }
        .ml-feature-desc {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.7;
        }

        /* ============================================================
           HOW IT WORKS
           ============================================================ */
        .ml-how {
          padding: 100px 24px;
          background: var(--surface);
        }
        .ml-how-flow {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .ml-how-card {
          background: var(--background);
          border: 1px solid var(--border);
          border-radius: 18px;
          padding: 32px 24px 24px;
          position: relative;
          transition: border-color 0.25s, transform 0.25s;
        }
        .ml-how-card:hover {
          border-color: rgba(6,182,212,0.4);
          transform: translateY(-3px);
        }
        .ml-how-step {
          font-family: var(--font-display);
          font-size: 14px;
          font-weight: 800;
          color: #06b6d4;
          letter-spacing: 0.1em;
          margin-bottom: 16px;
          padding: 5px 12px;
          background: rgba(6,182,212,0.1);
          border-radius: 100px;
          display: inline-block;
        }
        .ml-how-card h3 {
          font-family: var(--font-display);
          font-size: 17px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 10px;
          letter-spacing: -0.01em;
        }
        .ml-how-card p {
          font-size: 13.5px;
          color: var(--text-muted);
          line-height: 1.7;
        }
        .ml-how-connect {
          position: absolute;
          right: -16px;
          top: 50%;
          transform: translateY(-50%);
          width: 32px;
          height: 32px;
          background: var(--background);
          border: 1px solid var(--border);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #06b6d4;
          z-index: 2;
        }

        /* ============================================================
           BENEFITS
           ============================================================ */
        .ml-benefits {
          padding: 100px 24px;
          background: var(--background);
        }
        .ml-benefits-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .ml-benefit-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 18px;
          padding: 28px 24px;
          transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
        }
        .ml-benefit-card:hover {
          border-color: rgba(6,182,212,0.4);
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(6,182,212,0.1);
        }
        .ml-benefit-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: linear-gradient(135deg, rgba(6,182,212,0.15) 0%, rgba(34,211,238,0.08) 100%);
          color: #06b6d4;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }
        .ml-benefit-card h3 {
          font-family: var(--font-display);
          font-size: 17px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 10px;
          letter-spacing: -0.01em;
        }
        .ml-benefit-card p {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.7;
        }

        /* ============================================================
           TESTIMONIALS
           ============================================================ */
        .ml-testimonials {
          padding: 100px 24px;
          background: var(--surface);
        }
        .ml-testimonials-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .ml-testimonial-card {
          background: var(--background);
          border: 1px solid var(--border);
          border-radius: 18px;
          padding: 28px 24px;
          position: relative;
          transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
        }
        .ml-testimonial-card:hover {
          border-color: rgba(6,182,212,0.4);
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(6,182,212,0.08);
        }
        .ml-testimonial-quote {
          color: rgba(6,182,212,0.4);
          margin-bottom: 12px;
        }
        .ml-testimonial-text {
          font-size: 14.5px;
          color: var(--text-primary);
          line-height: 1.75;
          margin-bottom: 20px;
          font-family: var(--font-sans);
        }
        .ml-testimonial-author {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-top: 16px;
          border-top: 1px solid var(--border);
        }
        .ml-testimonial-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          color: #fff;
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .ml-testimonial-name {
          font-size: 14px;
          font-weight: 700;
          color: var(--text-primary);
          font-family: var(--font-sans);
        }
        .ml-testimonial-location {
          font-size: 12px;
          color: var(--text-muted);
          margin-top: 2px;
        }

        /* ============================================================
           CTA
           ============================================================ */
        .ml-cta {
          background: #0a0a0b;
          padding: 100px 24px;
          position: relative;
          overflow: hidden;
          text-align: center;
          color: #fff;
        }
        .ml-cta-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(6,182,212,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6,182,212,0.04) 1px, transparent 1px);
          background-size: 40px 40px;
          mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 80%);
          -webkit-mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 80%);
          pointer-events: none;
        }
        .ml-cta-glow {
          position: absolute;
          top: -100px;
          left: 50%;
          transform: translateX(-50%);
          width: 700px;
          height: 400px;
          background: radial-gradient(ellipse, rgba(6,182,212,0.25) 0%, transparent 70%);
          pointer-events: none;
          filter: blur(60px);
        }
        .ml-cta-inner {
          position: relative;
          z-index: 1;
          max-width: 720px;
          margin: 0 auto;
        }
        .ml-cta-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: 100px;
          background: rgba(6,182,212,0.1);
          border: 1px solid rgba(6,182,212,0.3);
          font-size: 11px;
          font-weight: 700;
          color: #22d3ee;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 24px;
        }
        .ml-cta-title {
          font-family: var(--font-display);
          font-size: clamp(30px, 4vw, 52px);
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.02em;
          line-height: 1.15;
          margin-bottom: 18px;
        }
        .ml-cta-title-accent {
          background: linear-gradient(135deg, #22d3ee 0%, #06b6d4 50%, #0891b2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .ml-cta-sub {
          font-size: 16px;
          color: rgba(255,255,255,0.6);
          line-height: 1.75;
          margin-bottom: 40px;
        }
        .ml-cta-contact {
          display: flex;
          gap: 16px;
          justify-content: center;
          margin-bottom: 36px;
          flex-wrap: wrap;
        }
        .ml-cta-contact-item {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 14px 22px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 14px;
          color: #fff;
          text-decoration: none;
          transition: all 0.2s;
        }
        .ml-cta-contact-item:hover {
          background: rgba(6,182,212,0.08);
          border-color: rgba(6,182,212,0.3);
        }
        .ml-cta-contact-item svg {
          color: #22d3ee;
          flex-shrink: 0;
        }
        .ml-cta-contact-item span {
          display: block;
          font-size: 10.5px;
          color: rgba(255,255,255,0.5);
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 2px;
        }
        .ml-cta-contact-item strong {
          display: block;
          font-size: 14px;
          color: #fff;
          font-weight: 700;
          font-family: var(--font-sans);
        }

        .ml-cta-buttons {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 32px;
        }
        .ml-cta .ml-btn-outline {
          color: rgba(255,255,255,0.85);
        }
        .ml-cta-note {
          font-size: 12px;
          color: rgba(255,255,255,0.4);
          letter-spacing: 0.02em;
        }

        /* ============================================================
           RESPONSIVE
           ============================================================ */
        @media (max-width: 1100px) {
          .ml-hero-inner {
            grid-template-columns: 1fr;
            gap: 64px;
          }
          .ml-hero-right { order: -1; }
          .ml-features-grid,
          .ml-how-flow,
          .ml-benefits-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .ml-how-connect { display: none; }
          .ml-testimonials-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 768px) {
          .ml-crumb { padding: 12px 20px; font-size: 12px; }
          .ml-hero {
            padding: 56px 20px 80px;
          }
          .ml-hero-right { min-height: 380px; }
          .ml-device-stack {
            max-width: 320px;
            height: 360px;
          }
          .ml-device { width: 180px; }
          .ml-float-stat {
            top: 0;
            right: 0;
            padding: 12px 16px;
          }
          .ml-float-stat-num { font-size: 22px; }
          .ml-stats {
            padding: 32px 20px;
          }
          .ml-stats-inner {
            grid-template-columns: 1fr 1fr;
            gap: 24px;
          }
          .ml-features,
          .ml-how,
          .ml-benefits,
          .ml-testimonials,
          .ml-cta {
            padding: 64px 20px;
          }
          .ml-section-header { margin-bottom: 40px; }
          .ml-features-grid,
          .ml-how-flow,
          .ml-benefits-grid,
          .ml-testimonials-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .ml-hero { padding: 48px 16px 64px; }
          .ml-hero-ctas { flex-direction: column; }
          .ml-btn-primary, .ml-btn-outline {
            width: 100%;
            justify-content: center;
          }
          .ml-stats-inner { grid-template-columns: 1fr; gap: 20px; }
          .ml-features,
          .ml-how,
          .ml-benefits,
          .ml-testimonials,
          .ml-cta {
            padding: 56px 16px;
          }
          .ml-cta-contact {
            flex-direction: column;
          }
          .ml-cta-contact-item {
            width: 100%;
            justify-content: center;
          }
          .ml-cta-buttons { flex-direction: column; width: 100%; }
          .ml-cta-buttons .ml-btn-primary,
          .ml-cta-buttons .ml-btn-outline { width: 100%; }
          .ml-device-stack {
            max-width: 280px;
          }
        }
      `}</style>
    </main>
  );
}