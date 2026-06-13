"use client";

import { useState } from "react";
import {
  Mail, Phone, MapPin, Clock, ArrowRight,
  CheckCircle2, MessageSquare, Code2, Globe,
} from "lucide-react";

// ─── Contact reasons (for the dropdown) ──────────────────────────────────────
const reasons = [
  "API Integration / Fintech APIs",
  "CPaaS / WhatsApp & SMS Solutions",
  "Web Development",
  "Mobile App Development",
  "White Label Fintech Platform",
  "AI Chatbot & Automation",
  "CRM / ERP Development",
  "Cloud & DevOps",
  "General Inquiry",
  "Partnership / Reseller",
];

// ─── Office info ──────────────────────────────────────────────────────────────
const contactInfo = [
  {
    icon: Mail,
    label: "Email Us",
    value: "business@mjdigitalservices.com",
    sub: "We reply within 24 hours",
    href: "mailto:business@mjdigitalservices.com",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 98765 43210",
    sub: "Mon – Sat, 10 AM – 7 PM IST",
    href: "tel:+919876543210",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "7th Floor AWFIS, Bhutani Techno Park, Sector 127, Noida, UP 201313",
    sub: "Ezeepay Office",
    href: "https://maps.google.com/?q=Bhutani+Techno+Park+Sector+127+Noida+201313",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon – Sat: 9:30 AM – 6:30 PM",
    sub: "Sunday: Closed",
    href: null,
  },
];

// ─── Why reach out cards ──────────────────────────────────────────────────────
const whyCards = [
  {
    icon: Code2,
    title: "Fintech APIs",
    desc: "AEPS, DMT, BBPS, KYC and more — ready to integrate.",
  },
  {
    icon: MessageSquare,
    title: "CPaaS Solutions",
    desc: "WhatsApp, SMS, RCS and Voice for your business.",
  },
  {
    icon: Globe,
    title: "Web & Mobile",
    desc: "End-to-end development from design to deployment.",
  },
];

// ─── Form state type ──────────────────────────────────────────────────────────
interface FormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  reason: string;
  message: string;
}

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  reason: "",
  message: "",
};

// ─── Main Component ───────────────────────────────────────────────────────────
export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in your name, email, and message.");
      return;
    }
    setLoading(true);
    // TODO: wire up to backend / emailjs / formspree
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <main style={{ background: "var(--background)", minHeight: "100vh" }}>

      {/* ── Hero strip ── */}
      <section className="contact-hero">
        <div className="contact-hero-glow" />
        <div className="contact-hero-inner">
          <div className="contact-hero-badge">Get In Touch</div>

          <h1 className="contact-hero-title">
            Let&apos;s Build Something{" "}
            <span className="contact-hero-title-accent">Together</span>
          </h1>

          <p className="contact-hero-sub">
            Tell us what you&apos;re building. Whether it&apos;s a fintech API integration,
            a mobile app, or a full platform — we&apos;ll get back to you within 24 hours.
          </p>

          <div className="contact-hero-chips">
            {whyCards.map((c) => (
              <div key={c.title} className="contact-hero-chip">
                <c.icon size={14} color="var(--primary)" />
                {c.title}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="contact-main">
        <div className="contact-grid">

          {/* ── Left: contact info ── */}
          <div>
            <h2 className="contact-info-title">Contact Information</h2>
            <p className="contact-info-desc">
              Reach us directly or fill in the form and we&apos;ll get back to
              you within one business day.
            </p>

            <div className="contact-info-list">
              {contactInfo.map((item) => (
                <div key={item.label} className="contact-info-card">
                  <div className="contact-info-icon">
                    <item.icon size={18} />
                  </div>
                  <div className="contact-info-body">
                    <div className="contact-info-label">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="contact-info-value contact-info-value-link">
                        {item.value}
                      </a>
                    ) : (
                      <div className="contact-info-value">{item.value}</div>
                    )}
                    <div className="contact-info-sub">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-response">
              <div className="contact-response-dot" />
              <span>
                Average response time: <strong>under 4 hours</strong> on business days
              </span>
            </div>
          </div>

          {/* ── Right: form ── */}
          <div className="contact-form-card">
            {submitted ? (
              <div className="contact-success">
                <div className="contact-success-icon">
                  <CheckCircle2 size={32} color="#22c55e" />
                </div>
                <h3>Message Sent!</h3>
                <p>
                  Thanks for reaching out. We&apos;ll review your message and get
                  back to you within one business day.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm(initialForm); }}
                  className="contact-success-btn"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h2 className="contact-form-title">Send Us a Message</h2>
                <p className="contact-form-sub">
                  Fill in the form and we&apos;ll get back to you shortly.
                </p>

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="contact-form-row">
                    <div className="contact-field">
                      <label>Full Name <span>*</span></label>
                      <input
                        name="name" type="text" placeholder="Rahul Sharma"
                        value={form.name} onChange={handleChange} required
                      />
                    </div>
                    <div className="contact-field">
                      <label>Email Address <span>*</span></label>
                      <input
                        name="email" type="email" placeholder="rahul@company.com"
                        value={form.email} onChange={handleChange} required
                      />
                    </div>
                  </div>

                  <div className="contact-form-row">
                    <div className="contact-field">
                      <label>Phone Number</label>
                      <input
                        name="phone" type="tel" placeholder="+91 98765 43210"
                        value={form.phone} onChange={handleChange}
                      />
                    </div>
                    <div className="contact-field">
                      <label>Company Name</label>
                      <input
                        name="company" type="text" placeholder="Your Company Ltd."
                        value={form.company} onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="contact-field">
                    <label>What are you looking for?</label>
                    <select name="reason" value={form.reason} onChange={handleChange}>
                      <option value="">Select a service...</option>
                      {reasons.map((r) => (
                        <option key={r} value={r}>{r}</option>
                      ))}
                    </select>
                  </div>

                  <div className="contact-field">
                    <label>Message <span>*</span></label>
                    <textarea
                      name="message"
                      placeholder="Tell us about your project, requirements, or questions..."
                      value={form.message} onChange={handleChange}
                      rows={5} required
                    />
                  </div>

                  {error && <div className="contact-error">{error}</div>}

                  <button type="submit" disabled={loading} className="contact-submit">
                    {loading ? (
                      <>
                        <span className="contact-spinner" />
                        Sending...
                      </>
                    ) : (
                      <>Send Message <ArrowRight size={15} /></>
                    )}
                  </button>

                  <p className="contact-form-note">
                    By submitting, you agree to our Privacy Policy. We never share your data.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ── Full width map ── */}
      <div className="contact-map-wrap">
        <div className="contact-map-inner">
          <div className="contact-map-label">
            <div className="contact-map-label-dot" />
            <span>Ezeepay, Bhutani Techno Park, Sector 127, Noida</span>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d696.6734247665905!2d77.34493287597321!3d28.53470422193527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5d5fbe07955%3A0xa455df64d17726cd!2sEzeepay!5e0!3m2!1sen!2sin!4v1781340014741!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, display: "block", filter: "grayscale(15%)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="MJ Digital Services Office Location"
          />
        </div>
      </div>

      {/* ── Scoped styles ── */}
      <style>{`
        /* ============================================================
           HERO
           ============================================================ */
        .contact-hero {
          background: #09090B;
          padding: 120px 24px 80px;
          position: relative;
          overflow: hidden;
          text-align: center;
        }
        .contact-hero-glow {
          position: absolute;
          top: -80px;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 300px;
          background: radial-gradient(ellipse, rgba(229,24,42,0.13) 0%, transparent 70%);
          pointer-events: none;
        }
        .contact-hero-inner {
          position: relative;
          z-index: 1;
          max-width: 640px;
          margin: 0 auto;
        }
        .contact-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
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
        .contact-hero-title {
          font-family: var(--font-display);
          font-size: clamp(28px, 5vw, 56px);
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.02em;
          line-height: 1.12;
          margin-bottom: 18px;
        }
        .contact-hero-title-accent {
          background: linear-gradient(135deg, #ff6b6b 0%, var(--primary) 50%, #c0392b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .contact-hero-sub {
          font-size: clamp(14px, 1.6vw, 17px);
          color: rgba(255,255,255,0.5);
          line-height: 1.75;
          margin-bottom: 40px;
        }
        .contact-hero-chips {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .contact-hero-chip {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 16px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
          border-radius: 100px;
          font-size: 13px;
          font-weight: 500;
          color: rgba(255,255,255,0.75);
          font-family: var(--font-sans);
        }

        /* ============================================================
           MAIN GRID
           ============================================================ */
        .contact-main {
          padding: 80px 24px 100px;
        }
        .contact-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.1fr 1.2fr;
          gap: 64px;
          align-items: start;
        }

        /* ============================================================
           LEFT — INFO
           ============================================================ */
        .contact-info-title {
          font-family: var(--font-display);
          font-size: clamp(22px, 2.5vw, 30px);
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.02em;
          margin-bottom: 10px;
        }
        .contact-info-desc {
          font-size: 15px;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 40px;
        }
        .contact-info-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .contact-info-card {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 20px 22px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 14px;
          transition: border-color 0.2s, transform 0.2s;
        }
        .contact-info-card:hover {
          border-color: var(--primary);
          transform: translateY(-2px);
        }
        .contact-info-icon {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: var(--primary-glow);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: var(--primary);
        }
        .contact-info-body { min-width: 0; flex: 1; }
        .contact-info-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 4px;
          font-family: var(--font-sans);
        }
        .contact-info-value {
          font-size: 15px;
          font-weight: 600;
          color: var(--text-primary);
          font-family: var(--font-sans);
          display: block;
          margin-bottom: 3px;
          word-wrap: break-word;
          overflow-wrap: break-word;
        }
        .contact-info-value-link {
          text-decoration: none;
          transition: color 0.2s;
        }
        .contact-info-value-link:hover { color: var(--primary); }
        .contact-info-sub {
          font-size: 13px;
          color: var(--text-muted);
          font-family: var(--font-sans);
        }

        .contact-response {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 28px;
          padding: 12px 18px;
          background: rgba(34,197,94,0.07);
          border: 1px solid rgba(34,197,94,0.2);
          border-radius: 10px;
          font-size: 13px;
          color: rgba(34,197,94,0.9);
          font-family: var(--font-sans);
          font-weight: 500;
        }
        .contact-response strong { color: rgba(34,197,94,1); }
        .contact-response-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #22c55e;
          flex-shrink: 0;
          animation: contactPulse 2.4s ease-in-out infinite;
        }

        /* ============================================================
           RIGHT — FORM
           ============================================================ */
        .contact-form-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 40px 36px;
        }
        .contact-form-title {
          font-family: var(--font-display);
          font-size: clamp(20px, 2vw, 26px);
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 6px;
        }
        .contact-form-sub {
          font-size: 14px;
          color: var(--text-muted);
          margin-bottom: 32px;
          font-family: var(--font-sans);
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .contact-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        .contact-field label {
          display: block;
          font-size: 13px;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 8px;
          font-family: var(--font-sans);
          letter-spacing: 0.01em;
        }
        .contact-field label span { color: var(--primary); }
        .contact-field input,
        .contact-field select,
        .contact-field textarea {
          width: 100%;
          padding: 11px 14px;
          background: var(--background);
          border: 1.5px solid var(--border);
          border-radius: 10px;
          font-size: 14px;
          color: var(--text-primary);
          font-family: var(--font-sans);
          outline: none;
          transition: border-color 0.2s;
          box-sizing: border-box;
        }
        .contact-field select {
          appearance: none;
          cursor: pointer;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236B6B75' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 14px center;
          padding-right: 36px;
        }
        .contact-field textarea {
          resize: vertical;
          min-height: 120px;
        }
        .contact-field input:focus,
        .contact-field select:focus,
        .contact-field textarea:focus {
          border-color: var(--primary);
        }

        .contact-error {
          font-size: 13px;
          color: var(--primary);
          font-family: var(--font-sans);
          padding: 10px 14px;
          background: var(--primary-glow);
          border-radius: 8px;
          border: 1px solid rgba(229,24,42,0.2);
        }

        .contact-submit {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 28px;
          background: var(--primary);
          color: #fff;
          border: none;
          border-radius: 100px;
          font-size: 15px;
          font-weight: 600;
          font-family: var(--font-sans);
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
          margin-top: 4px;
        }
        .contact-submit:hover:not(:disabled) {
          background: var(--primary-dark);
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(229,24,42,0.3);
        }
        .contact-submit:disabled {
          background: var(--primary-dark);
          cursor: not-allowed;
        }
        .contact-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: contactSpin 0.7s linear infinite;
          display: inline-block;
        }
        .contact-form-note {
          font-size: 12px;
          color: var(--text-muted);
          text-align: center;
          font-family: var(--font-sans);
        }

        /* Success state */
        .contact-success {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          min-height: 400px;
          gap: 20px;
        }
        .contact-success-icon {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: rgba(34,197,94,0.12);
          border: 2px solid rgba(34,197,94,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .contact-success h3 {
          font-family: var(--font-display);
          font-size: 26px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 4px;
        }
        .contact-success p {
          font-size: 15px;
          color: var(--text-muted);
          line-height: 1.7;
          max-width: 340px;
        }
        .contact-success-btn {
          margin-top: 8px;
          padding: 11px 24px;
          background: var(--primary);
          color: #fff;
          border: none;
          border-radius: 100px;
          font-size: 14px;
          font-weight: 600;
          font-family: var(--font-sans);
          cursor: pointer;
          transition: background 0.2s;
        }
        .contact-success-btn:hover { background: var(--primary-dark); }

        /* ============================================================
           MAP
           ============================================================ */
        .contact-map-wrap {
          padding: 0 40px 80px;
        }
        .contact-map-inner {
          height: 420px;
          border: 1px solid var(--border);
          border-radius: 20px;
          overflow: hidden;
          position: relative;
        }
        .contact-map-label {
          position: absolute;
          top: 20px;
          right: 24px;
          z-index: 1;
          background: var(--background);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 10px 16px;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          pointer-events: none;
          max-width: calc(100% - 48px);
        }
        .contact-map-label-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--primary);
          flex-shrink: 0;
        }
        .contact-map-label span {
          font-size: 13px;
          font-weight: 600;
          color: var(--text-primary);
          font-family: var(--font-sans);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* ============================================================
           ANIMATIONS
           ============================================================ */
        @keyframes contactPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.5); }
          50%       { box-shadow: 0 0 0 6px rgba(34,197,94,0); }
        }
        @keyframes contactSpin {
          to { transform: rotate(360deg); }
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-response-dot,
          .contact-spinner { animation: none; }
        }

        /* ============================================================
           RESPONSIVE BREAKPOINTS
           ============================================================ */

        /* Tablet ≤ 1024px */
        @media (max-width: 1024px) {
          .contact-main { padding: 64px 24px 80px; }
          .contact-grid { gap: 48px; }
          .contact-map-wrap { padding: 0 24px 64px; }
          .contact-map-inner { height: 360px; }
        }

        /* Stack columns ≤ 900px */
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .contact-form-card { padding: 36px 32px; }
        }

        /* Mobile ≤ 768px */
        @media (max-width: 768px) {
          .contact-hero {
            padding: 100px 20px 60px;
          }
          .contact-hero-chips {
            gap: 8px;
          }
          .contact-hero-chip {
            padding: 8px 14px;
            font-size: 12px;
          }
          .contact-main {
            padding: 48px 20px 64px;
          }
          .contact-info-desc { margin-bottom: 28px; }
          .contact-info-card {
            padding: 18px;
            gap: 14px;
          }
          .contact-info-value { font-size: 14px; }
          .contact-form-card {
            padding: 32px 24px;
            border-radius: 16px;
          }
          .contact-form-title { font-size: 22px; }
          .contact-form-sub { margin-bottom: 24px; }
          .contact-map-wrap { padding: 0 20px 60px; }
          .contact-map-inner {
            height: 300px;
            border-radius: 14px;
          }
          .contact-map-label {
            top: 12px;
            right: 12px;
            left: 12px;
            padding: 8px 12px;
            max-width: calc(100% - 24px);
            justify-content: flex-start;
          }
          .contact-map-label span { font-size: 12px; }
        }

        /* Small mobile ≤ 640px — form row stacks */
        @media (max-width: 640px) {
          .contact-form-row {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }

        /* Very small ≤ 480px */
        @media (max-width: 480px) {
          .contact-hero {
            padding: 90px 16px 50px;
          }
          .contact-hero-badge {
            font-size: 10px;
            padding: 4px 12px;
            margin-bottom: 20px;
          }
          .contact-hero-title { margin-bottom: 14px; }
          .contact-hero-sub {
            margin-bottom: 28px;
            font-size: 14px;
          }
          .contact-hero-chips { gap: 6px; }
          .contact-hero-chip {
            padding: 7px 12px;
            font-size: 11px;
            gap: 8px;
          }
          .contact-main { padding: 40px 16px 56px; }
          .contact-info-title { font-size: 22px; }
          .contact-info-desc { font-size: 14px; }
          .contact-info-card {
            padding: 16px;
            gap: 12px;
          }
          .contact-info-icon {
            width: 38px;
            height: 38px;
          }
          .contact-info-value { font-size: 13.5px; }
          .contact-info-sub { font-size: 12px; }
          .contact-response {
            padding: 10px 14px;
            font-size: 12px;
          }
          .contact-form-card {
            padding: 24px 18px;
            border-radius: 14px;
          }
          .contact-form-title { font-size: 20px; }
          .contact-field input,
          .contact-field select,
          .contact-field textarea {
            font-size: 14px;
            padding: 11px 13px;
          }
          .contact-field label { font-size: 12.5px; }
          .contact-submit {
            padding: 13px 24px;
            font-size: 14px;
          }
          .contact-map-wrap { padding: 0 16px 48px; }
          .contact-map-inner {
            height: 260px;
            border-radius: 12px;
          }
          .contact-success {
            min-height: 320px;
            gap: 16px;
          }
          .contact-success-icon {
            width: 60px;
            height: 60px;
          }
          .contact-success h3 { font-size: 22px; }
        }

        /* Tiny screens ≤ 360px */
        @media (max-width: 360px) {
          .contact-info-card {
            flex-direction: column;
            align-items: flex-start;
          }
          .contact-hero-chips {
            flex-direction: column;
            align-items: stretch;
          }
          .contact-hero-chip { justify-content: center; }
        }
      `}</style>
    </main>
  );
}