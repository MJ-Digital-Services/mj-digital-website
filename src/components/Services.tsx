"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import {
  Code2, MessageSquare, Globe, Smartphone,
  LayoutDashboard, Bot, Database, Cloud,
  ArrowRight, CheckCircle2,
} from "lucide-react";

const services = [
  {
    id: "api-solutions",
    icon: Code2,
    label: "PRIORITY SERVICE",
    title: "API Solutions",
    description: "Integrate powerful fintech APIs into your platform — AEPS, DMT, BBPS, KYC, PAN verification, bank account validation, and more. Built for reliability with 99.9% uptime SLA.",
    features: ["AEPS Cash Withdrawal", "Domestic Money Transfer", "BBPS Bill Payments", "PAN & Aadhaar KYC", "Bank Account Verification"],
    href: "/services/api-solutions",
    visual: "api",
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
  },
];

function ServiceVisual({ type }: { type: string }) {
  const base: React.CSSProperties = {
    width: "100%",
    height: "100%",
    minHeight: 340,
    borderRadius: 12,
    padding: 24,
    display: "flex",
    flexDirection: "column",
    gap: 12,
    background: "#0f172a",
    border: "1px solid rgba(255,255,255,0.08)",
    overflow: "hidden",
  };

  if (type === "api") return (
    <div style={base}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e" }} />
        <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, fontFamily: "monospace" }}>API Explorer</span>
      </div>
      {[
        { method: "POST", path: "/kyc/pan/verify", color: "#f97316" },
        { method: "GET",  path: "/interest-rates",  color: "#22c55e" },
        { method: "POST", path: "/fd/create",        color: "#f97316" },
        { method: "POST", path: "/customer/onboard", color: "#f97316" },
        { method: "GET",  path: "/masterdata",       color: "#22c55e" },
        { method: "POST", path: "/fd/payment/url",   color: "#f97316" },
      ].map((ep, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", background: "rgba(255,255,255,0.04)", borderRadius: 8, border: "1px solid rgba(255,255,255,0.06)" }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: ep.color, fontFamily: "monospace", minWidth: 40 }}>{ep.method}</span>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", fontFamily: "monospace" }}>{ep.path}</span>
        </div>
      ))}
    </div>
  );

  if (type === "cpaas") return (
    <div style={base}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e" }} />
        <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 11 }}>WhatsApp Business</span>
      </div>
      {[
        { msg: "Your OTP is 847291. Valid for 5 mins.", time: "10:42 AM", sent: true },
        { msg: "Thanks! Can I check my balance?",      time: "10:43 AM", sent: false },
        { msg: "Your current balance is ₹12,450. How else can I help?", time: "10:43 AM", sent: true },
        { msg: "Please send last 3 transactions.",     time: "10:44 AM", sent: false },
        { msg: "Here are your last 3 transactions: ₹4,200 | ₹1,800 | ₹900", time: "10:44 AM", sent: true },
      ].map((msg, i) => (
        <div key={i} style={{ display: "flex", justifyContent: msg.sent ? "flex-end" : "flex-start" }}>
          <div style={{ maxWidth: "80%", padding: "8px 12px", borderRadius: msg.sent ? "12px 12px 2px 12px" : "12px 12px 12px 2px", background: msg.sent ? "#25d366" : "rgba(255,255,255,0.08)", fontSize: 12, color: "#fff", lineHeight: 1.4 }}>
            {msg.msg}
            <div style={{ fontSize: 10, opacity: 0.6, marginTop: 2, textAlign: "right" }}>{msg.time}</div>
          </div>
        </div>
      ))}
    </div>
  );

  if (type === "web") return (
    <div style={base}>
      <div style={{ display: "flex", gap: 6, marginBottom: 4 }}>
        {["#ff5f57","#febc2e","#28c840"].map((c,i) => <div key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />)}
      </div>
      <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 8, padding: "8px 14px", display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(255,255,255,0.15)" }} />
        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", fontFamily: "monospace" }}>https://yourcompany.com</span>
      </div>
      <div style={{ background: "linear-gradient(135deg, rgba(229,24,42,0.15), rgba(229,24,42,0.05))", borderRadius: 10, padding: "20px", textAlign: "center", flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8 }}>
        <div style={{ width: 44, height: 44, borderRadius: 10, background: "#e5182a", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: 16 }}>MJ</div>
        <div style={{ color: "#fff", fontSize: 15, fontWeight: 700 }}>MJ Digital Services</div>
        <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 12 }}>Fintech · CPaaS · Development</div>
      </div>
      {["Home","Services","Products","Contact"].map((item,i) => (
        <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.5)", fontSize: 12 }}>
          <span>{item}</span><ArrowRight size={12} />
        </div>
      ))}
    </div>
  );

  if (type === "mobile") return (
    <div style={{ ...base, alignItems: "center", justifyContent: "center" }}>
      <div style={{ width: 180, height: 320, borderRadius: 28, border: "6px solid rgba(255,255,255,0.15)", background: "#1e293b", overflow: "hidden" }}>
        <div style={{ height: 24, background: "#0f172a", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div style={{ width: 60, height: 6, borderRadius: 3, background: "rgba(255,255,255,0.15)" }} />
        </div>
        <div style={{ padding: "14px 12px", display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ background: "linear-gradient(135deg, #e5182a, #b91220)", borderRadius: 12, padding: "14px", color: "#fff" }}>
            <div style={{ fontSize: 10, opacity: 0.7 }}>Total Balance</div>
            <div style={{ fontSize: 22, fontWeight: 700, fontFamily: "monospace" }}>₹24,850</div>
          </div>
          {[["Send Money","#22c55e"],["Pay Bills","#3b82f6"],["Recharge","#f97316"]].map(([label,color],i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 10px", background: "rgba(255,255,255,0.04)", borderRadius: 8 }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: `${color}22`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: 10, height: 10, borderRadius: 3, background: color }} />
              </div>
              <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 12 }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  if (type === "fintech") return (
    <div style={base}>
      <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, marginBottom: 4 }}>Merchant Dashboard</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        {[
          { label: "Today's Revenue", value: "₹1.2L",  color: "#22c55e" },
          { label: "Transactions",    value: "342",     color: "#3b82f6" },
          { label: "Active Merchants",value: "28",      color: "#f97316" },
          { label: "Success Rate",    value: "98.4%",   color: "#a855f7" },
        ].map((stat,i) => (
          <div key={i} style={{ background: "rgba(255,255,255,0.04)", borderRadius: 10, padding: 12 }}>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", marginBottom: 6 }}>{stat.label}</div>
            <div style={{ fontSize: 20, fontWeight: 700, color: stat.color, fontFamily: "monospace" }}>{stat.value}</div>
          </div>
        ))}
      </div>
      {[
        { name: "Rahul Stores",   amount: "+₹4,200", status: "Success" },
        { name: "Priya Traders",  amount: "+₹1,800", status: "Success" },
        { name: "Kumar Shop",     amount: "+₹900",   status: "Pending" },
      ].map((tx,i) => (
        <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 12px", background: "rgba(255,255,255,0.03)", borderRadius: 8 }}>
          <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 12 }}>{tx.name}</span>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <span style={{ color: "#22c55e", fontSize: 12, fontFamily: "monospace" }}>{tx.amount}</span>
            <span style={{ fontSize: 10, padding: "2px 6px", borderRadius: 4, background: tx.status === "Success" ? "#22c55e22" : "#f9731622", color: tx.status === "Success" ? "#22c55e" : "#f97316" }}>{tx.status}</span>
          </div>
        </div>
      ))}
    </div>
  );

  if (type === "ai") return (
    <div style={base}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
        <div style={{ width: 28, height: 28, borderRadius: 8, background: "#a855f722", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Bot size={14} color="#a855f7" />
        </div>
        <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 11 }}>AI Agent · Online</span>
        <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", marginLeft: "auto" }} />
      </div>
      {[
        { from: "user", msg: "I want to open an FD" },
        { from: "ai",   msg: "Sure! I can help. What amount would you like to invest?" },
        { from: "user", msg: "₹50,000 for 12 months" },
        { from: "ai",   msg: "Great! Shriram Finance offers 7.5% p.a. You'd receive ₹53,807 at maturity. Shall I proceed?" },
        { from: "user", msg: "Yes please" },
      ].map((msg,i) => (
        <div key={i} style={{ display: "flex", justifyContent: msg.from === "user" ? "flex-end" : "flex-start", gap: 8, alignItems: "flex-end" }}>
          {msg.from === "ai" && <div style={{ width: 22, height: 22, borderRadius: 6, background: "#a855f722", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Bot size={11} color="#a855f7" /></div>}
          <div style={{ maxWidth: "78%", padding: "7px 11px", borderRadius: 9, background: msg.from === "user" ? "#e5182a" : "rgba(255,255,255,0.07)", fontSize: 12, color: "#fff", lineHeight: 1.4 }}>{msg.msg}</div>
        </div>
      ))}
    </div>
  );

  if (type === "crm") return (
    <div style={base}>
      <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, marginBottom: 4 }}>CRM Pipeline</div>
      {[
        { stage: "New Leads",  count: 24, color: "#3b82f6" },
        { stage: "Contacted",  count: 18, color: "#f97316" },
        { stage: "Qualified",  count: 11, color: "#a855f7" },
        { stage: "Proposal",   count: 7,  color: "#eab308" },
        { stage: "Won",        count: 4,  color: "#22c55e" },
      ].map((stage,i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", minWidth: 80 }}>{stage.stage}</span>
          <div style={{ flex: 1, height: 8, background: "rgba(255,255,255,0.06)", borderRadius: 4, overflow: "hidden" }}>
            <div style={{ width: `${(stage.count/24)*100}%`, height: "100%", background: stage.color, borderRadius: 4 }} />
          </div>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", fontFamily: "monospace", minWidth: 20 }}>{stage.count}</span>
        </div>
      ))}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginTop: 8 }}>
        {[["Total Deals","64"],["Conversion","16.6%"],["Avg. Value","₹48K"]].map(([label,val],i) => (
          <div key={i} style={{ background: "rgba(255,255,255,0.04)", borderRadius: 8, padding: "10px 8px", textAlign: "center" }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#fff", fontFamily: "monospace" }}>{val}</div>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>{label}</div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div style={base}>
      <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, marginBottom: 4 }}>Infrastructure Status</div>
      {[
        { service: "API Gateway",       status: "Healthy", uptime: "99.98%" },
        { service: "Database Cluster",  status: "Healthy", uptime: "99.95%" },
        { service: "CDN",               status: "Healthy", uptime: "100%" },
        { service: "Auth Service",      status: "Healthy", uptime: "99.99%" },
      ].map((svc,i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", padding: "10px 12px", background: "rgba(255,255,255,0.04)", borderRadius: 8, gap: 10 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", flexShrink: 0 }} />
          <span style={{ flex: 1, color: "rgba(255,255,255,0.7)", fontSize: 12 }}>{svc.service}</span>
          <span style={{ fontSize: 11, color: "#22c55e", fontFamily: "monospace" }}>{svc.uptime}</span>
        </div>
      ))}
      <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 12px", background: "rgba(34,197,94,0.08)", borderRadius: 8, border: "1px solid rgba(34,197,94,0.2)", marginTop: 4 }}>
        <CheckCircle2 size={14} color="#22c55e" />
        <span style={{ fontSize: 12, color: "#22c55e" }}>All systems operational</span>
      </div>
    </div>
  );
}

// Hook to track opacity + translateY for each row
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
  const [textY, setTextY]             = useState(0);
  const [imageY, setImageY]           = useState(0);

  useEffect(() => {
    if (disabled) {
      setTextOpacity(1);
      setTextY(0);
      setImageY(0);
      return;
    }
    const el = ref.current;
    if (!el) return;

    function update() {
      if (!el) return;
      const rect       = el.getBoundingClientRect();
      const winH       = window.innerHeight;
      const centre     = rect.top + rect.height / 2;
      const fromCentre = centre - winH / 2;
      const range      = winH * 0.55;

      // Text: slow fade
      const rawText  = 1 - Math.abs(fromCentre) / (range * 1.6);
      const tOpacity = Math.max(0, Math.min(1, rawText));
      const tY       = (1 - tOpacity) * 40 * Math.sign(fromCentre || 1);

      // Image: always opacity 1, fast parallax
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
  const rowRef   = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const { textOpacity, textY, imageY } = useScrollAnimation(rowRef, isMobile);

  return (
    <div
      ref={rowRef}
      style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 2fr",
        gap: isMobile ? 24 : 48,
        marginTop: isMobile ? 64 : 160,
        marginBottom: isMobile ? 64 : 160,
        alignItems: "start",
      }}
    >
      {/* On mobile: image first, then text */}
      {isMobile && (
        <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 8px 32px rgba(0,0,0,0.1)" }}>
          <ServiceVisual type={service.visual} />
        </div>
      )}

      {/* Left — text */}
      <div
        style={{
          opacity: textOpacity,
          transform: `translateY(${textY}px)`,
          transition: "opacity 0.05s linear, transform 0.05s linear",
          willChange: "opacity, transform",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
          <div style={{ width: 38, height: 38, borderRadius: 10, background: "var(--primary-glow)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)" }}>
            <service.icon size={18} />
          </div>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "var(--primary)", textTransform: "uppercase" }}>{service.label}</span>
        </div>

        <h3 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(26px, 2.6vw, 40px)",
          fontWeight: 700,
          color: "var(--text-primary)",
          letterSpacing: "-0.02em",
          marginBottom: 14,
          lineHeight: 1.15,
        }}>
          {service.title}
        </h3>

        <p style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.75, marginBottom: 24 }}>
          {service.description}
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 28 }}>
          {service.features.map((f) => (
            <div key={f} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <CheckCircle2 size={14} color="var(--primary)" style={{ flexShrink: 0 }} />
              <span style={{ fontSize: 13, color: "var(--text-primary)", fontWeight: 500 }}>{f}</span>
            </div>
          ))}
        </div>

        <Link
          href={service.href}
          style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "11px 22px", background: "var(--primary)", color: "#fff", borderRadius: 100, fontSize: 13, fontWeight: 600, textDecoration: "none" }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--primary-dark)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "var(--primary)"; }}
        >
          Learn More <ArrowRight size={13} />
        </Link>
      </div>

      {/* Right — visual panel (desktop only) */}
      {!isMobile && <div
        style={{
          opacity: 1,
          transform: `translateY(${imageY}px)`,
          transition: "opacity 0.05s linear, transform 0.05s linear",
          willChange: "opacity, transform",
          padding: 16,
          background: "#0f172a",
          borderRadius: 16,
          border: "1px solid rgba(255,255,255,0.07)",
          boxShadow: "0 25px 60px rgba(0,0,0,0.25)",
          position: "relative",
        }}
      >
        <ServiceVisual type={service.visual} />
        {/* bottom glow line like the reference */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, background: "linear-gradient(to right, transparent, rgba(255,255,255,0.12), transparent)", borderRadius: "0 0 16px 16px" }} />
      </div>}
    </div>
  );
}

export default function Services() {
  return (
    <section style={{ background: "var(--background)", padding: "100px 0" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 20, padding: "0 24px" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 14px", borderRadius: 100, border: "1px solid var(--border)", fontSize: 11, fontWeight: 600, color: "var(--text-muted)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 16 }}>
          What We Build
        </div>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, color: "var(--text-primary)", letterSpacing: "-0.02em", marginBottom: 16 }}>
          Services That Drive Growth
        </h2>
        <p style={{ fontSize: 17, color: "var(--text-muted)", maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
          From fintech APIs to AI solutions — everything your business needs to scale in the digital economy.
        </p>
      </div>

      {/* Rows */}
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 clamp(16px, 4vw, 48px)" }}>
        {services.map((service) => (
          <ServiceRow key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}