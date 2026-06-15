"use client";

import Link from "next/link";
import {
  Lightbulb, Shield, Layers, Heart, Rocket,
  ArrowRight, Mail,
  Target, Eye, Sparkles,
} from "lucide-react";

// ─── Stats shown in the hero strip ───────────────────────────────────────────
const stats = [
  { value: "2007",  label: "Founded" },
  { value: "50+",   label: "Clients Served" },
  { value: "3",     label: "Digital Products" },
  { value: "9+",    label: "Industries" },
];

// ─── Values cards ────────────────────────────────────────────────────────────
const values = [
  {
    icon: Lightbulb,
    title: "Innovation Driven",
    desc: "We don't just write code — we engineer solutions that move businesses forward. Every product starts with a problem worth solving.",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    desc: "Built to grow with you. Our infrastructure handles a single merchant or a million transactions — without breaking a sweat.",
  },
  {
    icon: Shield,
    title: "Security First",
    desc: "Bank-grade security, end-to-end encryption, and audit-ready compliance. Trust isn't a feature — it's the foundation.",
  },
  {
    icon: Heart,
    title: "Dedicated Support",
    desc: "From kickoff to scale-up, you get a real team — not a ticket queue. We're invested in your success, every step.",
  },
];

// ─── Products quick-glance ───────────────────────────────────────────────────
const products = [
  {
    name: "EzeePay",
    tag: "Fintech",
    desc: "AEPS, money transfer, bill payments, and Aadhaar services — a complete fintech merchant platform.",
    href: "/products/ezeepay",
    color: "#22c55e",
  },
  {
    name: "Zoki",
    tag: "CPaaS",
    desc: "WhatsApp engagement, customer communication, marketing automation, and lead management — in one inbox.",
    href: "/products/zoki",
    color: "#3b82f6",
  },
  {
    name: "Mobilocker",
    tag: "Security",
    desc: "Digital document storage, secure verification, and data protection for businesses that take privacy seriously.",
    href: "/products/mobilocker",
    color: "#a855f7",
  },
];

// ─── Mission / Vision ────────────────────────────────────────────────────────
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

export default function AboutPage() {
  return (
    <main style={{ background: "var(--background)", minHeight: "100vh" }}>

      {/* ── Hero ── */}
      <section className="about-hero">
        <div className="about-hero-glow" />
        <div className="about-hero-inner">
          <div className="about-hero-badge">About Us</div>

          <h1 className="about-hero-title">
            Building Technology That{" "}
            <span className="about-hero-title-accent">Powers Businesses</span>
          </h1>

          <p className="about-hero-sub">
            MJ Digital Services is a technology and innovation company delivering
            software solutions, fintech infrastructure, APIs, mobile applications,
            cloud platforms, and digital transformation services for startups,
            enterprises, and government-focused organizations.
          </p>

          {/* Stat grid */}
          <div className="about-hero-stats">
            {stats.map((s) => (
              <div key={s.label} className="about-hero-stat">
                <div className="about-hero-stat-value">{s.value}</div>
                <div className="about-hero-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="about-story">
        <div className="about-story-inner">
          <div className="about-story-text">
            <div className="about-section-label">Our Story</div>
            <h2 className="about-section-title">
              Transforming ideas into scalable digital solutions
            </h2>
            <div className="about-story-body">
              <p>
                MJ Digital Services started in <strong>2007</strong> with a simple
                belief — that technology should make business easier, not harder.
                Today, we&apos;re the parent company behind three flagship digital
                products: <strong>EzeePay</strong>, <strong>Zoki</strong>, and{" "}
                <strong>Mobilocker</strong>.
              </p>
              <p>
                What started as a small team of engineers has grown into a
                Noida-based technology company serving{" "}
                <strong>50+ clients</strong> across fintech, retail, education,
                healthcare, logistics, telecom, and government services.
              </p>
              <p>
                Our expertise spans software development, fintech APIs, cloud
                infrastructure, AI, and enterprise solutions — but our focus has
                always stayed the same: helping businesses grow through
                technology that actually works.
              </p>
            </div>
          </div>

          {/* Story side image */}
          <div className="about-story-visual">
            <div className="about-story-image">
              {/* Replace with actual office/team image */}
              <div className="about-image-placeholder">
                <Rocket size={36} />
                <span>office-photo.jpg</span>
                <small>Replace in /public/about-office.jpg</small>
              </div>
            </div>
            {/* Floating stat card */}
            <div className="about-story-floater">
              <div className="about-story-floater-num">17+</div>
              <div className="about-story-floater-label">Years in Business</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission / Vision / Drive ── */}
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
              <div className="about-pillar-icon">
                <p.icon size={22} />
              </div>
              <div className="about-pillar-label">{p.label}</div>
              <h3 className="about-pillar-title">{p.title}</h3>
              <p className="about-pillar-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Founder Spotlight ── */}
      <section className="about-founder">
        <div className="about-founder-inner">
          <div className="about-founder-photo-wrap">
            <div className="about-founder-photo">
              {/* Replace with actual founder photo */}
              <div className="about-image-placeholder">
                <span>founder-photo.jpg</span>
                <small>Replace in /public/about-founder.jpg</small>
              </div>
            </div>
            {/* Decorative frame accent */}
            <div className="about-founder-accent" />
          </div>

          <div className="about-founder-content">
            <div className="about-section-label">Leadership</div>
            <h2 className="about-section-title">
              Meet the founder behind MJ Digital Services
            </h2>

            <blockquote className="about-founder-quote">
              &ldquo;We&apos;re not building software to win awards. We&apos;re
              building it so a kirana shop in a small town can accept a payment,
              so a startup can launch a product in weeks instead of months. The
              real reward is seeing our work move the needle for someone&apos;s
              business.&rdquo;
            </blockquote>

            <div className="about-founder-meta">
              <div className="about-founder-name">Shams Tabrej</div>
              <div className="about-founder-role">
                Founder &amp; CEO, MJ Digital Services
              </div>
              <div className="about-founder-socials">
                <a href="#" aria-label="LinkedIn" className="about-founder-social">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                </a>
                <a href="#" aria-label="X (Twitter)" className="about-founder-social">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
                    </svg>
                </a>
                <a
                  href="mailto:business@mjdigitalservices.com"
                  aria-label="Email"
                  className="about-founder-social"
                >
                  <Mail size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="about-values">
        <div className="about-values-header">
          <div className="about-section-label">Why MJ Digital</div>
          <h2 className="about-section-title">The principles we build on</h2>
          <p className="about-values-sub">
            Four ideas guide every project, every line of code, every customer
            conversation.
          </p>
        </div>

        <div className="about-values-grid">
          {values.map((v) => (
            <div key={v.title} className="about-value-card">
              <div className="about-value-icon">
                <v.icon size={20} />
              </div>
              <h3 className="about-value-title">{v.title}</h3>
              <p className="about-value-desc">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Products Quick Look ── */}
      <section className="about-products">
        <div className="about-products-header">
          <div className="about-section-label">Our Products</div>
          <h2 className="about-section-title">
            Three platforms. One technology vision.
          </h2>
          <p className="about-values-sub">
            MJ Digital Services is the technology arm and parent company behind
            our flagship digital products.
          </p>
        </div>

        <div className="about-products-grid">
          {products.map((p) => (
            <Link key={p.name} href={p.href} className="about-product-card">
              <div
                className="about-product-stripe"
                style={{ background: p.color }}
              />
              <div className="about-product-body">
                <div
                  className="about-product-tag"
                  style={{ color: p.color, borderColor: `${p.color}33`, background: `${p.color}11` }}
                >
                  {p.tag}
                </div>
                <h3 className="about-product-name">{p.name}</h3>
                <p className="about-product-desc">{p.desc}</p>
                <div className="about-product-link">
                  Explore {p.name} <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="about-cta">
        <div className="about-cta-glow" />
        <div className="about-cta-inner">
          <div className="about-cta-badge">Let&apos;s Talk</div>
          <h2 className="about-cta-title">
            Have a project in mind? <br />
            <span className="about-cta-title-accent">Let&apos;s build it together.</span>
          </h2>
          <p className="about-cta-sub">
            Whether you need fintech APIs, a custom platform, or a full digital
            transformation — our team is ready to help.
          </p>
          <div className="about-cta-buttons">
            <Link href="/contact" className="about-cta-btn-primary">
              Get in Touch <ArrowRight size={15} />
            </Link>
            <Link href="/services" className="about-cta-btn-outline">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── Scoped Styles ── */}
      <style>{`
        /* ============================================================
           HERO
           ============================================================ */
        .about-hero {
          background: #09090B;
          padding: 120px 24px 80px;
          position: relative;
          overflow: hidden;
          text-align: center;
        }
        .about-hero-glow {
          position: absolute;
          top: -80px;
          left: 50%;
          transform: translateX(-50%);
          width: 700px;
          height: 320px;
          background: radial-gradient(ellipse, rgba(229,24,42,0.13) 0%, transparent 70%);
          pointer-events: none;
        }
        .about-hero-inner {
          position: relative;
          z-index: 1;
          max-width: 760px;
          margin: 0 auto;
        }
        .about-hero-badge {
          display: inline-flex;
          align-items: center;
          padding: 5px 14px;
          border-radius: 100px;
          border: 1px solid rgba(229,24,42,0.25);
          background: rgba(229,24,42,0.08);
          font-size: 11px;
          font-weight: 600;
          color: var(--primary);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 24px;
          font-family: var(--font-sans);
        }
        .about-hero-title {
          font-family: var(--font-display);
          font-size: clamp(30px, 5vw, 56px);
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.02em;
          line-height: 1.12;
          margin-bottom: 22px;
        }
        .about-hero-title-accent {
          background: linear-gradient(135deg, #ff6b6b 0%, var(--primary) 50%, #c0392b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .about-hero-sub {
          font-size: clamp(14px, 1.6vw, 17px);
          color: rgba(255,255,255,0.5);
          line-height: 1.75;
          margin-bottom: 56px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Stat grid */
        .about-hero-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          max-width: 700px;
          margin: 0 auto;
          padding-top: 36px;
          border-top: 1px solid rgba(255,255,255,0.08);
        }
        .about-hero-stat {
          padding: 0 16px;
          border-right: 1px solid rgba(255,255,255,0.08);
        }
        .about-hero-stat:last-child { border-right: none; }
        .about-hero-stat-value {
          font-family: var(--font-display);
          font-size: clamp(24px, 3vw, 36px);
          font-weight: 800;
          color: #ffffff;
          line-height: 1;
          letter-spacing: -0.02em;
          margin-bottom: 6px;
        }
        .about-hero-stat-label {
          font-size: 12px;
          color: rgba(255,255,255,0.45);
          font-weight: 500;
          letter-spacing: 0.02em;
        }

        /* ============================================================
           SHARED SECTION HEADERS
           ============================================================ */
        .about-section-label {
          display: inline-flex;
          align-items: center;
          padding: 5px 14px;
          border-radius: 100px;
          border: 1px solid var(--border);
          font-size: 11px;
          font-weight: 600;
          color: var(--text-muted);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 16px;
          font-family: var(--font-sans);
        }
        .about-section-title {
          font-family: var(--font-display);
          font-size: clamp(26px, 3vw, 40px);
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.02em;
          line-height: 1.15;
        }

        /* ============================================================
           STORY
           ============================================================ */
        .about-story { padding: 100px 24px; }
        .about-story-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px;
          align-items: center;
        }
        .about-story-text {}
        .about-story-text .about-section-title { margin-bottom: 24px; }
        .about-story-body p {
          font-size: 15.5px;
          color: var(--text-muted);
          line-height: 1.85;
          margin-bottom: 16px;
        }
        .about-story-body p:last-child { margin-bottom: 0; }
        .about-story-body strong { color: var(--text-primary); font-weight: 600; }

        .about-story-visual {
          position: relative;
        }
        .about-story-image {
          aspect-ratio: 4 / 3;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 24px;
          overflow: hidden;
          position: relative;
        }
        .about-story-floater {
          position: absolute;
          bottom: -28px;
          left: -28px;
          background: var(--background);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 18px 24px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.1);
          z-index: 2;
        }
        .about-story-floater-num {
          font-family: var(--font-display);
          font-size: 30px;
          font-weight: 800;
          color: var(--primary);
          line-height: 1;
          margin-bottom: 4px;
        }
        .about-story-floater-label {
          font-size: 12px;
          color: var(--text-muted);
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        /* Generic image placeholder used in story + founder */
        .about-image-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: linear-gradient(135deg, var(--surface) 0%, var(--surface-2) 100%);
          color: var(--text-muted);
        }
        .about-image-placeholder svg {
          opacity: 0.4;
          margin-bottom: 4px;
        }
        .about-image-placeholder span {
          font-size: 13px;
          font-weight: 600;
          color: var(--text-primary);
          font-family: var(--font-sans);
        }
        .about-image-placeholder small {
          font-size: 11px;
          color: var(--text-muted);
          font-family: var(--font-sans);
          opacity: 0.7;
        }

        /* ============================================================
           PILLARS (Mission, Vision, Drive)
           ============================================================ */
        .about-pillars {
          padding: 100px 24px;
          background: var(--surface);
        }
        .about-pillars-header {
          max-width: 700px;
          margin: 0 auto 56px;
          text-align: center;
        }
        .about-pillars-header .about-section-title { margin: 0 auto; }

        .about-pillars-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .about-pillar-card {
          background: var(--background);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 32px 28px;
          transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
        }
        .about-pillar-card:hover {
          border-color: var(--primary);
          box-shadow: 0 12px 40px var(--primary-glow);
          transform: translateY(-3px);
        }
        .about-pillar-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: var(--primary-glow);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }
        .about-pillar-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--primary);
          margin-bottom: 8px;
          font-family: var(--font-sans);
        }
        .about-pillar-title {
          font-family: var(--font-display);
          font-size: 20px;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.01em;
          line-height: 1.3;
          margin-bottom: 12px;
        }
        .about-pillar-desc {
          font-size: 14.5px;
          color: var(--text-muted);
          line-height: 1.75;
        }

        /* ============================================================
           FOUNDER
           ============================================================ */
        .about-founder { padding: 100px 24px; }
        .about-founder-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 380px 1fr;
          gap: 72px;
          align-items: center;
        }

        .about-founder-photo-wrap {
          position: relative;
        }
        .about-founder-photo {
          aspect-ratio: 4 / 5;
          border-radius: 20px;
          overflow: hidden;
          background: var(--surface);
          border: 1px solid var(--border);
          position: relative;
          z-index: 2;
        }
        .about-founder-accent {
          position: absolute;
          inset: 16px -16px -16px 16px;
          border: 2px solid var(--primary);
          border-radius: 20px;
          z-index: 1;
        }

        .about-founder-content {}
        .about-founder-content .about-section-title { margin-bottom: 28px; }

        .about-founder-quote {
          font-family: var(--font-display);
          font-style: italic;
          font-size: 19px;
          line-height: 1.65;
          color: var(--text-primary);
          padding-left: 22px;
          border-left: 3px solid var(--primary);
          margin-bottom: 28px;
        }

        .about-founder-meta {}
        .about-founder-name {
          font-family: var(--font-display);
          font-size: 22px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 4px;
        }
        .about-founder-role {
          font-size: 14px;
          color: var(--text-muted);
          font-family: var(--font-sans);
          margin-bottom: 16px;
        }
        .about-founder-socials {
          display: flex;
          gap: 8px;
        }
        .about-founder-social {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid var(--border);
          background: var(--surface);
          color: var(--text-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: all 0.2s;
        }
        .about-founder-social:hover {
          border-color: var(--primary);
          color: var(--primary);
          background: var(--primary-glow);
          transform: translateY(-2px);
        }

        /* ============================================================
           VALUES
           ============================================================ */
        .about-values {
          padding: 100px 24px;
          background: var(--surface);
        }
        .about-values-header {
          max-width: 700px;
          margin: 0 auto 56px;
          text-align: center;
        }
        .about-values-sub {
          font-size: 15px;
          color: var(--text-muted);
          line-height: 1.7;
          margin-top: 14px;
        }
        .about-values-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .about-value-card {
          background: var(--background);
          border: 1px solid var(--border);
          border-radius: 18px;
          padding: 28px 24px;
          transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
        }
        .about-value-card:hover {
          border-color: var(--primary);
          box-shadow: 0 8px 30px var(--primary-glow);
          transform: translateY(-3px);
        }
        .about-value-icon {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: var(--primary-glow);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }
        .about-value-title {
          font-family: var(--font-display);
          font-size: 17px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 8px;
          letter-spacing: -0.01em;
        }
        .about-value-desc {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.7;
        }

        /* ============================================================
           PRODUCTS
           ============================================================ */
        .about-products { padding: 100px 24px; }
        .about-products-header {
          max-width: 700px;
          margin: 0 auto 56px;
          text-align: center;
        }
        .about-products-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .about-product-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 20px;
          overflow: hidden;
          text-decoration: none;
          color: inherit;
          transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
          display: flex;
          flex-direction: column;
        }
        .about-product-card:hover {
          border-color: var(--primary);
          box-shadow: 0 12px 40px var(--primary-glow);
          transform: translateY(-3px);
        }
        .about-product-stripe {
          height: 4px;
          width: 100%;
        }
        .about-product-body {
          padding: 28px 24px 24px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .about-product-tag {
          display: inline-flex;
          align-self: flex-start;
          padding: 4px 11px;
          border-radius: 100px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 14px;
          font-family: var(--font-sans);
          border: 1px solid;
        }
        .about-product-name {
          font-family: var(--font-display);
          font-size: 24px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 10px;
          letter-spacing: -0.02em;
        }
        .about-product-desc {
          font-size: 14.5px;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 20px;
          flex: 1;
        }
        .about-product-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 600;
          color: var(--primary);
          letter-spacing: 0.01em;
        }

        /* ============================================================
           CTA
           ============================================================ */
        .about-cta {
          background: #09090B;
          padding: 100px 24px;
          position: relative;
          overflow: hidden;
          text-align: center;
        }
        .about-cta-glow {
          position: absolute;
          top: -80px;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 300px;
          background: radial-gradient(ellipse, rgba(229,24,42,0.13) 0%, transparent 70%);
          pointer-events: none;
        }
        .about-cta-inner {
          position: relative;
          z-index: 1;
          max-width: 680px;
          margin: 0 auto;
        }
        .about-cta-badge {
          display: inline-flex;
          padding: 5px 14px;
          border-radius: 100px;
          border: 1px solid rgba(229,24,42,0.25);
          background: rgba(229,24,42,0.08);
          font-size: 11px;
          font-weight: 600;
          color: var(--primary);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 24px;
        }
        .about-cta-title {
          font-family: var(--font-display);
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.02em;
          line-height: 1.15;
          margin-bottom: 18px;
        }
        .about-cta-title-accent {
          background: linear-gradient(135deg, #ff6b6b 0%, var(--primary) 50%, #c0392b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .about-cta-sub {
          font-size: 16px;
          color: rgba(255,255,255,0.5);
          line-height: 1.75;
          margin-bottom: 36px;
        }
        .about-cta-buttons {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .about-cta-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          background: var(--primary);
          color: #fff;
          border-radius: 100px;
          font-size: 14px;
          font-weight: 600;
          font-family: var(--font-sans);
          text-decoration: none;
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
        }
        .about-cta-btn-primary:hover {
          background: var(--primary-dark);
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(229,24,42,0.35);
        }
        .about-cta-btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          background: transparent;
          color: rgba(255,255,255,0.85);
          border: 1.5px solid rgba(255,255,255,0.18);
          border-radius: 100px;
          font-size: 14px;
          font-weight: 600;
          font-family: var(--font-sans);
          text-decoration: none;
          transition: all 0.2s;
        }
        .about-cta-btn-outline:hover {
          border-color: rgba(255,255,255,0.5);
          color: #fff;
          transform: translateY(-2px);
        }

        /* ============================================================
           RESPONSIVE
           ============================================================ */

        /* Tablet ≤ 1024px */
        @media (max-width: 1024px) {
          .about-story-inner,
          .about-founder-inner {
            grid-template-columns: 1fr;
            gap: 56px;
          }
          .about-founder-photo-wrap {
            max-width: 360px;
            margin: 0 auto;
          }
          .about-pillars-grid,
          .about-products-grid {
            grid-template-columns: 1fr 1fr;
          }
          .about-values-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        /* Mobile ≤ 768px */
        @media (max-width: 768px) {
          .about-hero { padding: 100px 20px 60px; }
          .about-hero-stats {
            grid-template-columns: 1fr 1fr;
            gap: 0;
          }
          .about-hero-stat {
            padding: 18px 12px;
            border-right: 1px solid rgba(255,255,255,0.08);
            border-bottom: 1px solid rgba(255,255,255,0.08);
          }
          .about-hero-stat:nth-child(2) { border-right: none; }
          .about-hero-stat:nth-child(3),
          .about-hero-stat:nth-child(4) { border-bottom: none; }
          .about-hero-stat:nth-child(4) { border-right: none; }

          .about-story,
          .about-pillars,
          .about-founder,
          .about-values,
          .about-products,
          .about-cta {
            padding: 64px 20px;
          }
          .about-story-floater {
            bottom: -20px;
            left: -16px;
            padding: 14px 18px;
          }
          .about-story-floater-num { font-size: 24px; }

          .about-pillars-grid,
          .about-products-grid,
          .about-values-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .about-pillar-card,
          .about-value-card { padding: 24px 22px; }

          .about-founder-quote { font-size: 17px; }
        }

        /* Small mobile ≤ 480px */
        @media (max-width: 480px) {
          .about-hero { padding: 90px 16px 50px; }
          .about-hero-stats { padding-top: 28px; }
          .about-hero-stat-value { font-size: 22px; }

          .about-story,
          .about-pillars,
          .about-founder,
          .about-values,
          .about-products,
          .about-cta {
            padding: 56px 16px;
          }

          .about-cta-buttons { flex-direction: column; width: 100%; }
          .about-cta-btn-primary,
          .about-cta-btn-outline {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </main>
  );
}