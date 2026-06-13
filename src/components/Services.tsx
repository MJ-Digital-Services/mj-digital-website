"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  Code2, MessageSquare, Globe, Smartphone,
  LayoutDashboard, Bot, Database, Cloud,
  ArrowRight, CheckCircle2,
} from "lucide-react";

const services = [
  {
    id: "api-solutions",
    icon: Code2,
    label: "APIS",
    title: "API Solutions",
    description: "Integrate powerful fintech APIs into your platform — AEPS, DMT, BBPS, KYC, PAN verification, bank account validation, and more. Built for reliability with 99.9% uptime SLA.",
    features: ["AEPS Cash Withdrawal", "Domestic Money Transfer", "BBPS Bill Payments", "PAN & Aadhaar KYC", "Bank Account Verification"],
    href: "/services/api-solutions",
    visual: "api",
    image: "/api-solution.png",
  },
  {
    id: "cpaas",
    icon: MessageSquare,
    label: "COMMUNICATION",
    title: "CPaaS Solutions",
    description: "Send transactional messages, marketing campaigns, and real-time alerts via WhatsApp, SMS, RCS, and Voice. Reach your customers on every channel they use.",
    features: ["WhatsApp Business API", "Bulk SMS Gateway", "RCS Messaging", "IVR & Voice Calls", "Campaign Analytics"],
    href: "/services/cpaas",
    visual: "cpaas",
    image: "/cpass-solution.png"
  },
  {
    id: "web-dev",
    icon: Globe,
    label: "DEVELOPMENT",
    title: "Web Development",
    description: "From corporate websites to complex fintech portals, we build fast, SEO-optimised, and scalable web applications using Next.js, React, and modern tech stacks.",
    features: ["Next.js & React", "Fintech Portals", "Ecommerce Platforms", "Admin Dashboards", "SEO Optimised"],
    href: "/services/web-development",
    visual: "web",
    image: "/web-development.png"
  },
  {
    id: "mobile-apps",
    icon: Smartphone,
    label: "DEVELOPMENT",
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps for Android and iOS. We build fintech apps, customer portals, and enterprise tools with Flutter and React Native.",
    features: ["Flutter & React Native", "iOS & Android", "Fintech Mobile Apps", "Offline Support", "Push Notifications"],
    href: "/services/mobile-apps",
    visual: "mobile",
    image: "/mobile-app-development.png"
  },
  {
    id: "white-label",
    icon: LayoutDashboard,
    label: "FINTECH",
    title: "White Label Fintech",
    description: "Launch your own branded fintech platform in weeks. Our white label solutions include merchant portals, digital wallets, and payment aggregation platforms.",
    features: ["Merchant Portal", "Digital Wallet", "Payment Aggregation", "Custom Branding", "Multi-tenant Architecture"],
    href: "/services/white-label-fintech",
    visual: "fintech",
    image: "/white-label-fintech.png"
  },
  {
    id: "ai",
    icon: Bot,
    label: "EMERGING TECH",
    title: "AI Chatbots & Automation",
    description: "Deploy intelligent chatbots and AI-powered automation workflows. Reduce support costs, qualify leads automatically, and deliver 24/7 customer service.",
    features: ["NLP Chatbots", "WhatsApp AI Agent", "Lead Qualification", "Workflow Automation", "Custom LLM Integration"],
    href: "/services/ai-solutions",
    visual: "ai",
    image: "/ai-chatbot-automation.png"
  },
  {
    id: "crm-erp",
    icon: Database,
    label: "ENTERPRISE",
    title: "CRM / ERP Development",
    description: "Custom CRM and ERP systems built for your exact business processes. Manage leads, inventory, billing, HR, and operations in one unified platform.",
    features: ["Custom CRM", "Inventory Management", "Billing & Invoicing", "HR Management", "Role-based Access"],
    href: "/services/crm-erp",
    visual: "crm",
    image: "/crm-platform.png"
  },
  {
    id: "cloud",
    icon: Cloud,
    label: "INFRASTRUCTURE",
    title: "Cloud & DevOps",
    description: "AWS and Azure cloud infrastructure, CI/CD pipelines, containerisation with Docker and Kubernetes, and 24/7 monitoring to keep your systems running.",
    features: ["AWS & Azure", "CI/CD Pipelines", "Docker & Kubernetes", "24/7 Monitoring", "Auto Scaling"],
    href: "/services/cloud-devops",
    visual: "cloud",
    image: "/cloud-devops.png"
  },
];

function ServiceVisual({ image, title, icon: Icon }: {
  type: string;
  image?: string;
  title: string;
  icon: React.ElementType;
}) {
  if (image) {
    return (
      <div style={{
        width: "100%",
        height: "100%",
        minHeight: 340,
        borderRadius: 12,
        overflow: "hidden",
        position: "relative",
        // backgroundColor: "white"
      }}>
        <img
          src={image}
          alt={title}
          style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
        />
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(15,23,42,0.15), rgba(15,23,42,0.55))",
          // backgroundColor: "white",
          borderRadius: 12,
        }} />
      </div>
    );
  }

  return (
    <div style={{
      width: "100%",
      height: "100%",
      minHeight: 340,
      borderRadius: 12,
      background: "#0f172a",
      border: "1px solid rgba(255,255,255,0.08)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
      opacity: 0.35,
    }}>
      <Icon size={40} color="rgba(255,255,255,0.4)" />
      <span style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-sans)" }}>
        {title}
      </span>
    </div>
  );
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

function useScrollAnimation(ref: React.RefObject<HTMLDivElement | null>, disabled: boolean) {
  const [textOpacity, setTextOpacity] = useState(1);
  const [textY, setTextY] = useState(0);
  const [imageY, setImageY] = useState(0);

  useEffect(() => {
    if (disabled) { setTextOpacity(1); setTextY(0); setImageY(0); return; }
    const el = ref.current;
    if (!el) return;

    function update() {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const winH = window.innerHeight;
      const centre = rect.top + rect.height / 2;
      const fromCentre = centre - winH / 2;
      const range = winH * 0.55;
      const rawText = 1 - Math.abs(fromCentre) / (range * 1.6);
      const tOpacity = Math.max(0, Math.min(1, rawText));
      const tY = (1 - tOpacity) * 40 * Math.sign(fromCentre || 1);
      const iY = -(fromCentre / range) * 60;
      setTextOpacity(tOpacity);
      setTextY(tY);
      setImageY(iY);
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [ref, disabled]);

  return { textOpacity, textY, imageY };
}

function ServiceRow({ service }: { service: typeof services[0] }) {
  return (
    <div style={{ marginBottom: 80 }}>
      {/* Badge */}
      <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "4px 12px", borderRadius: 100, background: "var(--primary-glow)", marginBottom: 16 }}>
        <service.icon size={13} color="var(--primary)" />
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "var(--primary)", textTransform: "uppercase" }}>{service.label}</span>
      </div>

      {/* Title */}
      <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px, 2.6vw, 36px)", fontWeight: 700, color: "var(--text-primary)", letterSpacing: "-0.02em", marginBottom: 12, lineHeight: 1.15 }}>
        {service.title}
      </h3>

      {/* Description */}
      <p style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.75, marginBottom: 16, maxWidth: 600 }}>
        {service.description}
      </p>

      {/* Features */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
        {service.features.map((f) => (
          <div key={f} style={{ display: "flex", alignItems: "center", gap: 6, padding: "5px 12px", borderRadius: 100, background: "var(--surface)", border: "1px solid var(--border)", fontSize: 12, fontWeight: 500, color: "var(--text-primary)" }}>
            <CheckCircle2 size={12} color="var(--primary)" />
            {f}
          </div>
        ))}
      </div>

      {/* Learn More */}
      <Link
        href={service.href}
        style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "11px 22px", background: "var(--primary)", color: "#fff", borderRadius: 100, fontSize: 13, fontWeight: 600, textDecoration: "none", marginBottom: 32 }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--primary-dark)"; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "var(--primary)"; }}
      >
        Learn More <ArrowRight size={13} />
      </Link>

      {/* Image */}
      <div style={{ width: "100%", aspectRatio: "16/9", borderRadius: 16, overflow: "hidden", background: "var(--surface)" }}>
        {service.image ? (
          <img src={service.image} alt={service.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        ) : (
          <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10, opacity: 0.3 }}>
            <service.icon size={40} color="var(--text-muted)" />
            <span style={{ fontSize: 13, color: "var(--text-muted)", fontFamily: "var(--font-sans)" }}>{service.title} — Screenshot coming soon</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Services() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(Number((e.target as HTMLElement).dataset.index));
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    stepRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="svc-section">
      <div className="svc-header">
        <div className="svc-badge">What We Build</div>
        <h2 className="svc-headline">Services That Drive Growth</h2>
        <p className="svc-subtext">
          From fintech APIs to AI solutions — everything your business needs to
          scale in the digital economy.
        </p>
      </div>

      <div className="svc-layout">
        {/* Left — scrolling text steps */}
        <div className="svc-steps">
          {services.map((s, i) => (
            <div
              key={s.id}
              ref={(el) => { stepRefs.current[i] = el; }}
              data-index={i}
              className={`svc-step${active === i ? " active" : ""}`}
            >
              <div className="svc-step-badge">
                <s.icon size={13} />
                {s.label}
              </div>
              <h3 className="svc-step-title">{s.title}</h3>
              <p className="svc-step-desc">{s.description}</p>
              <div className="svc-step-features">
                {s.features.map((f) => (
                  <div key={f} className="svc-step-feature">
                    <CheckCircle2 size={12} />
                    {f}
                  </div>
                ))}
              </div>
              <Link href={s.href} className="svc-step-link">
                Learn More <ArrowRight size={13} />
              </Link>

              {/* Mobile-only inline visual */}
              <div className="svc-step-visual">
                <ServiceVisual
                  type={s.visual}
                  image={s.image}
                  title={s.title}
                  icon={s.icon}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Right — sticky swapping panel */}
        <div className="svc-sticky">
          <div className="svc-panel">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={active}
                className="svc-panel-inner"
                initial={{ opacity: 0, y: 28, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -28, scale: 0.98 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <ServiceVisual
                  type={services[active].visual}
                  image={services[active].image}
                  title={services[active].title}
                  icon={services[active].icon}
                />
              </motion.div>
            </AnimatePresence>
            <div className="svc-panel-meta">
              <span className="svc-panel-count">
                {String(active + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
              </span>
              <div className="svc-panel-dots">
                {services.map((s, i) => (
                  <span key={s.id} className={`svc-dot${active === i ? " active" : ""}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}