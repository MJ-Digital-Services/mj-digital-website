"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ChevronDown, Menu, X, Zap, MessageSquare,
  Lock, Code2, Globe, Smartphone, Bot,
  LayoutDashboard, ArrowRight, Database, Cpu,
} from "lucide-react";

const products = [
  { name: "EzeePay", description: "AEPS, Money Transfer, Utility & Recharge", href: "/products/ezeepay", icon: Zap },
  { name: "Zoki", description: "WhatsApp Engagement & Marketing Automation", href: "/products/zoki", icon: MessageSquare },
  { name: "Mobilocker", description: "Digital Storage & Secure Document Management", href: "/products/mobilocker", icon: Lock },
];

const serviceGroups = [
  {
    label: "FINTECH & APIs",
    items: [
      { name: "API Solutions", description: "AEPS, DMT, BBPS, KYC APIs", href: "/services/api-solutions", icon: Code2 },
      { name: "White Label Fintech", description: "Merchant & Wallet Platforms", href: "/services/white-label-fintech", icon: LayoutDashboard },
      { name: "Fixed Deposit API", description: "FD booking & interest rates", href: "/developers/fd-api", icon: Database },
    ],
  },
  {
    label: "COMMUNICATION",
    items: [
      { name: "CPaaS Solutions", description: "WhatsApp, SMS, RCS & Voice", href: "/services/cpaas", icon: MessageSquare },
      { name: "WhatsApp Business API", description: "Engage customers at scale", href: "/services/cpaas/whatsapp", icon: MessageSquare },
    ],
  },
  {
    label: "DEVELOPMENT",
    items: [
      { name: "Web Development", description: "Corporate, Ecommerce & Portals", href: "/services/web-development", icon: Globe },
      { name: "Mobile App Development", description: "Android, iOS & Flutter", href: "/services/mobile-apps", icon: Smartphone },
      { name: "CRM / ERP Development", description: "Custom enterprise software", href: "/services/crm-erp", icon: LayoutDashboard },
    ],
  },
  {
    label: "EMERGING TECH",
    items: [
      { name: "AI Solutions", description: "Chatbots, Voice AI & Automation", href: "/services/ai-solutions", icon: Bot },
      { name: "Cloud & DevOps", description: "AWS, Azure, CI/CD pipelines", href: "/services/cloud-devops", icon: Cpu },
    ],
  },
];

const staticLinks = [
  { name: "Developers", href: "/developers" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

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
      <header className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="navbar-inner">

          {/* ── Logo ── */}
          <Link href="/" className="navbar-logo">
            <div className="navbar-logo-icon">MJ</div>
            <span className="navbar-logo-text">
              MJ Digital<span> Services</span>
            </span>
          </Link>

          {/* ── Right Side: Nav + CTA ── */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            {/* ── Desktop Nav Pill ── */}
            <nav className="navbar-pill">

                {/* Products */}
                <div
                className="nav-dropdown"
                onMouseEnter={() => open("products")}
                onMouseLeave={close}
                >
                <button className={`nav-pill-link${activeDropdown === "products" ? " active" : ""}`}>
                    Products
                    <ChevronDown size={13} className={`nav-chevron${activeDropdown === "products" ? " open" : ""}`} />
                </button>

                {activeDropdown === "products" && (
                    <div
                    className="dropdown-simple"
                    onMouseEnter={() => keep("products")}
                    onMouseLeave={close}
                    >
                    {products.map((item) => (
                        <Link key={item.name} href={item.href} className="dropdown-simple-item" onClick={() => setActiveDropdown(null)}>
                        <div className="dropdown-simple-icon">
                            <item.icon size={15} />
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

                {/* Services — mega menu */}
                <div
                className="nav-dropdown"
                onMouseEnter={() => open("services")}
                onMouseLeave={close}
                >
                <button className={`nav-pill-link${activeDropdown === "services" ? " active" : ""}`}>
                    Services
                    <ChevronDown size={13} className={`nav-chevron${activeDropdown === "services" ? " open" : ""}`} />
                </button>

                {activeDropdown === "services" && (
                    <div
                    className="dropdown-mega"
                    onMouseEnter={() => keep("services")}
                    onMouseLeave={close}
                    >
                    {serviceGroups.map((group) => (
                        <div key={group.label} className="mega-group">
                        <div className="mega-group-label">{group.label}</div>
                        {group.items.map((item) => (
                            <Link key={item.name} href={item.href} className="mega-item" onClick={() => setActiveDropdown(null)}>
                            <div className="mega-item-icon">
                                <item.icon size={14} />
                            </div>
                            <div>
                                <div className="mega-item-name">{item.name}</div>
                                <div className="mega-item-desc">{item.description}</div>
                            </div>
                            </Link>
                        ))}
                        </div>
                    ))}
                    </div>
                )}
                </div>

                {/* Static links */}
                {staticLinks.map((link) => (
                <Link key={link.name} href={link.href} className="nav-pill-link">
                    {link.name}
                </Link>
                ))}
            </nav>

            {/* ── CTA ── */}
            <Link href="/contact" className="navbar-cta">
                Let&apos;s Talk <ArrowRight size={14} />
            </Link>
          </div>

          {/* ── Mobile Toggle ── */}
          <button
            className="navbar-mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* ── Mobile Menu ── */}
        <div className={`navbar-mobile-menu${mobileOpen ? " open" : ""}`}>

          {/* Products */}
          <button
            className="mobile-nav-link"
            onClick={() => setMobileExpanded(mobileExpanded === "products" ? null : "products")}
          >
            Products
            <ChevronDown size={16} style={{ color: "var(--text-muted)", transform: mobileExpanded === "products" ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }} />
          </button>
          {mobileExpanded === "products" && (
            <div className="mobile-dropdown-items">
              {products.map((item) => (
                <Link key={item.name} href={item.href} className="mobile-dropdown-item" onClick={() => setMobileOpen(false)}>
                  <item.icon size={14} style={{ color: "var(--primary)", flexShrink: 0 }} />
                  {item.name}
                </Link>
              ))}
            </div>
          )}

          {/* Services */}
          <button
            className="mobile-nav-link"
            onClick={() => setMobileExpanded(mobileExpanded === "services" ? null : "services")}
          >
            Services
            <ChevronDown size={16} style={{ color: "var(--text-muted)", transform: mobileExpanded === "services" ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }} />
          </button>
          {mobileExpanded === "services" && (
            <div className="mobile-dropdown-items">
              {serviceGroups.map((group) =>
                group.items.map((item) => (
                  <Link key={item.name} href={item.href} className="mobile-dropdown-item" onClick={() => setMobileOpen(false)}>
                    <item.icon size={14} style={{ color: "var(--primary)", flexShrink: 0 }} />
                    {item.name}
                  </Link>
                ))
              )}
            </div>
          )}

          {/* Static links */}
          {staticLinks.map((link) => (
            <Link key={link.name} href={link.href} className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
              {link.name}
            </Link>
          ))}

          <div className="mobile-cta-wrap">
            <Link href="/contact" className="mobile-cta" onClick={() => setMobileOpen(false)}>
              Let&apos;s Talk <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </header>

      <div className="navbar-spacer" />
    </>
  );
}