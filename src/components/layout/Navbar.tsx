"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import {
  ChevronDown, Menu, X, MessageSquare,
  Code2, Globe, Smartphone, Bot,
  LayoutDashboard, ArrowRight, Cpu,
} from "lucide-react";

const products = [
  { name: "EzeePay", description: "AEPS, Money Transfer, Utility & Recharge", href: "/products/ezeepay", logo: "/ezeepay-logo.png" },
  { name: "Zoki", description: "Fastag Solution & Car Care Services", href: "/products/zoki", logo: "/zoki-logo.jpg" },
  { name: "Mobilocker", description: "Secure Device Protection & Insurance Services", href: "/products/mobilocker", logo: "/mobilocker-logo.png" },
  { name: "Cashlo", description: "UPI Cashpoint Platform for Every Shopkeeper", href: "https://cashlo.vercel.app/", logo: "/cashlo-logo.png" }
];

const serviceGroups = [
  {
    label: "FINTECH & APIs",
    items: [
      {
        name: "API Solutions",
        description: "AEPS, DMT, BBPS, KYC APIs",
        fullName: "AEPS, DMT, BBPS & KYC APIs",
        tooltipItems: [
          { term: "AEPS", desc: "Aadhaar Enabled Payment System — cash withdrawal, balance inquiry, mini statement, and banking transactions using Aadhaar authentication." },
          { term: "DMT", desc: "Domestic Money Transfer — instant bank-to-bank transfers across India." },
          { term: "BBPS", desc: "Bharat Bill Payment System — unified utility bill payments." },
          { term: "KYC APIs", desc: "Know Your Customer APIs — digital identity verification and onboarding." },
        ],
        href: "/services/api-solutions",
        icon: Code2,
      },
      {
        name: "White Label Fintech",
        description: "Merchant & Wallet Platforms",
        fullName: "White Label Fintech Platforms",
        tooltip: "Fully branded merchant and digital wallet platforms you can launch under your own brand, built on our fintech infrastructure.",
        href: "/services/white-label-fintech",
        icon: LayoutDashboard,
      },
    ],
  },
  {
    label: "COMMUNICATION",
    items: [
      {
        name: "CPaaS Solutions",
        description: "WhatsApp, SMS, RCS & Voice",
        fullName: "WhatsApp Business API, SMS, RCS & Voice",
        tooltipItems: [
          { term: "WhatsApp Business API", desc: "Customer messaging and support over WhatsApp." },
          { term: "SMS", desc: "Short Message Service — bulk and transactional texts." },
          { term: "RCS", desc: "Rich Communication Services — branded interactive messaging." },
          { term: "Voice", desc: "Voice Communication Solutions — calls and IVR." },
        ],
        href: "/services/cpaas",
        icon: MessageSquare,
      },
    ],
  },
  {
    label: "DEVELOPMENT",
    items: [
      {
        name: "Web Development",
        description: "Corporate, Ecommerce & Portals",
        fullName: "Corporate, Ecommerce & Portal Websites",
        tooltip: "Custom-built corporate websites, ecommerce stores, and customer/admin portals tailored to your business needs.",
        href: "/services/web-development",
        icon: Globe,
      },
      {
        name: "Mobile App Development",
        description: "Android, iOS & Flutter",
        fullName: "Android, iOS & Flutter Apps",
        tooltip: "Native Android and iOS apps, or cross-platform apps built with Flutter for faster delivery across both platforms.",
        href: "/services/mobile-apps",
        icon: Smartphone,
      },
      {
        name: "CRM / ERP Development",
        description: "Custom enterprise software",
        fullName: "CRM & ERP Software",
        tooltip: "CRM (Customer Relationship Management) for sales and support pipelines, and ERP (Enterprise Resource Planning) for unified operations, inventory, and finance management.",
        href: "/services/crm-erp",
        icon: LayoutDashboard,
      },
    ],
  },
  {
    label: "EMERGING TECH",
    items: [
      {
        name: "AI Solutions",
        description: "Chatbots, Voice AI & Automation",
        fullName: "AI Chatbots, Voice AI & Automation",
        tooltip: "AI Chatbots for customer support, Voice AI Assistants for call handling, and Business Process Automation to cut manual work.",
        href: "/services/ai-solutions",
        icon: Bot,
      },
      {
        name: "Cloud & DevOps",
        description: "AWS, Azure, CI/CD pipelines",
        fullName: "AWS, Azure & CI/CD Pipelines",
        tooltip: "Amazon Web Services (AWS) and Microsoft Azure infrastructure, with CI/CD (Continuous Integration & Continuous Deployment) pipelines for reliable, automated releases.",
        href: "/services/cloud-devops",
        icon: Cpu,
      },
    ],
  },
];

const staticLinks = [
  { name: "Developers", href: "/services/api-solutions" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { scrollY } = useScroll();
  // const [expandedPad, setExpandedPad] = useState(64);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const [vw, setVw] = useState(0);
  const [shrunkWidth, setShrunkWidth] = useState<number | null>(null);

  useEffect(() => {
    const update = () => {
      setVw(window.innerWidth);
      const content =
        (logoRef.current?.offsetWidth ?? 0) +
        (rightRef.current?.offsetWidth ?? 0) +
        (toggleRef.current?.offsetWidth ?? 0);
      setShrunkWidth(content + 24 /* row gap */ + 56 /* 2 × 28px scrolled padding */);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const expandedPad = Math.min(150, Math.max(24, vw * 0.104));

  // useEffect(() => {
  //   const update = () =>
  //     setExpandedPad(Math.min(150, Math.max(24, window.innerWidth * 0.104)));
  //   update();
  //   window.addEventListener("resize", update);
  //   return () => window.removeEventListener("resize", update);
  // }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 60);
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const open = (name: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(name);
  };
  const close = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 150);
  };
  const keep = (name: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(name);
  };

  return (
    <>
      {/* Fixed full-width container — transparent, just for positioning */}
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        pointerEvents: "none",
        backgroundColor: scrolled ? "transparent" : "var(--navbar-bg)",
        opacity: mounted ? 1 : 0,
        transition: "opacity 0.15s ease",
      }}>
        {/* 
          This is the only animated element.
          It sits centered, and we animate its width + top margin.
          Content layout never changes — no reflow, no flying elements.
        */}
        <motion.div
          animate={{
            marginTop: scrolled ? 12 : 0,
            width: scrolled ? (shrunkWidth ?? "auto") : vw || "100vw",
            borderRadius: scrolled ? 16 : 0,
            boxShadow: scrolled
              ? "0 4px 30px rgba(0,0,0,0.10), 0 0 0 1px rgba(0,0,0,0.06)"
              : "0 1px 0 0 rgba(0,0,0,0.07)",
          }}
          transition={{ type: "spring", stiffness: 160, damping: 36 }}
          style={{
            backgroundColor: "var(--navbar-bg)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            overflow: "visible",
            pointerEvents: "auto",
            minWidth: scrolled ? "unset" : "unset",   // remove minWidth entirely
            maxWidth: "95vw",                          // ADD this — never wider than viewport
          }}
        >
          {/* Inner row — height animates separately for smoothness */}
          <motion.div
            animate={{
              height: scrolled ? 56 : 72,
              paddingLeft: scrolled ? 28 : expandedPad,
              paddingRight: scrolled ? 28 : expandedPad,
            }}
            transition={{ type: "spring", stiffness: 160, damping: 36 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 24,
            }}
          >
            {/* Logo */}
            <Link href="/" className="navbar-logo" ref={logoRef}>
              <img src="/mj-logo.png" alt="MJ Digital Services" className="navbar-logo-img" />
            </Link>

            {/* Right side */}
            <div className="navbar-right" ref={rightRef}>
              <nav className="navbar-nav">

                {/* Products */}
                <div className="nav-dropdown" onMouseEnter={() => open("products")} onMouseLeave={close}>
                  <button className={`nav-link${activeDropdown === "products" ? " active" : ""}`}>
                    Our Products
                    <ChevronDown size={13} className={`nav-chevron${activeDropdown === "products" ? " open" : ""}`} />
                  </button>
                  {activeDropdown === "products" && (
                    <div className="dropdown-simple" onMouseEnter={() => keep("products")} onMouseLeave={close}>
                      {products.map((item) => (
                        <Link key={item.name} href={item.href} className="dropdown-simple-item" onClick={() => setActiveDropdown(null)}>
                          <div className="dropdown-simple-icon">
                            <img src={item.logo} alt={item.name} style={{ width: 20, height: 20, borderRadius: 4, objectFit: "contain", backgroundColor: "white" }} />
                          </div>
                          <div>
                            <div className="dropdown-simple-name">{item.name}</div>
                            <div className="dropdown-simple-desc">{item.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Services */}
                <div className="nav-dropdown" onMouseEnter={() => open("services")} onMouseLeave={close}>
                  <button className={`nav-link${activeDropdown === "services" ? " active" : ""}`}>
                    Services
                    <ChevronDown size={13} className={`nav-chevron${activeDropdown === "services" ? " open" : ""}`} />
                  </button>
                  {activeDropdown === "services" && (
                    <div className="dropdown-mega" onMouseEnter={() => keep("services")} onMouseLeave={close}>
                      {serviceGroups.map((group) => (
                        <div key={group.label} className="mega-group">
                          <div className="mega-group-label">{group.label}</div>
                          {group.items.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="mega-item mega-item-expandable"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <div className="mega-item-icon"><item.icon size={16} /></div>
                              <div className="mega-item-text">
                                <div className="mega-item-name">{item.name}</div>
                                <div className="mega-item-desc">{item.description}</div>
                              </div>
                              <div className="mega-item-tooltip">
                                <div className="mega-item-tooltip-title">{item.fullName}</div>
                                {item.tooltipItems ? (
                                  <div className="mega-item-tooltip-list">
                                    {item.tooltipItems.map((t) => (
                                      <p key={t.term} className="mega-item-tooltip-row">
                                        <span className="mega-item-tooltip-term">{t.term}</span>
                                        {" — "}
                                        {t.desc}
                                      </p>
                                    ))}
                                  </div>
                                ) : (
                                  <div className="mega-item-tooltip-body">{item.tooltip}</div>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {staticLinks.map((link) => (
                  <Link key={link.name} href={link.href} className="nav-link">{link.name}</Link>
                ))}
              </nav>

              <div className="navbar-divider" />

              <Link href="/contact" className="navbar-cta">
                Let&apos;s Talk <ArrowRight size={14} />
              </Link>
            </div>

            {/* Mobile toggle */}
            <button ref={toggleRef} className="navbar-mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </motion.div>

          {/* Mobile menu */}
          <div className={`navbar-mobile-menu${mobileOpen ? " open" : ""}`}>
            <button className="mobile-nav-link" onClick={() => setMobileExpanded(mobileExpanded === "products" ? null : "products")}>
              Products
              <ChevronDown size={16} style={{ color: "var(--text-muted)", transform: mobileExpanded === "products" ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }} />
            </button>
            {mobileExpanded === "products" && (
              <div className="mobile-dropdown-items">
                {products.map((item) => (
                  <Link key={item.name} href={item.href} className="mobile-dropdown-item" onClick={() => setMobileOpen(false)}>
                    <img src={item.logo} alt={item.name} style={{ width: 16, height: 16, borderRadius: 3, objectFit: "contain", backgroundColor: "white", flexShrink: 0 }} />{item.name}
                  </Link>
                ))}
              </div>
            )}
            <button className="mobile-nav-link" onClick={() => setMobileExpanded(mobileExpanded === "services" ? null : "services")}>
              Services
              <ChevronDown size={16} style={{ color: "var(--text-muted)", transform: mobileExpanded === "services" ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }} />
            </button>
            {mobileExpanded === "services" && (
              <div className="mobile-dropdown-items">
                {serviceGroups.map((group) => group.items.map((item) => (
                  <Link key={item.name} href={item.href} className="mobile-dropdown-item" onClick={() => setMobileOpen(false)}>
                    <item.icon size={14} style={{ color: "var(--primary)", flexShrink: 0 }} />{item.name}
                  </Link>
                )))}
              </div>
            )}
            {staticLinks.map((link) => (
              <Link key={link.name} href={link.href} className="mobile-nav-link" onClick={() => setMobileOpen(false)}>{link.name}</Link>
            ))}
            <div className="mobile-cta-wrap">
              <Link href="/contact" className="mobile-cta" onClick={() => setMobileOpen(false)}>
                Let&apos;s Talk <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="navbar-spacer" />
    </>
  );
}