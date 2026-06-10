"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
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
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { scrollY } = useScroll();

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
            width: scrolled ? "55vw" : "100vw",
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
            minWidth: scrolled ? 700 : "unset",
          }}
        >
          {/* Inner row — height animates separately for smoothness */}
          <motion.div
            animate={{ height: scrolled ? 56 : 72 }}
            transition={{ type: "spring", stiffness: 160, damping: 36 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 64px",
              gap: 24,
            }}
          >
            {/* Logo */}
            <Link href="/" className="navbar-logo">
              <div className="navbar-logo-icon">MJ</div>
              <span className="navbar-logo-text">
                MJ Digital<span> Services</span>
              </span>
            </Link>

            {/* Right side */}
            <div className="navbar-right">
              <nav className="navbar-nav">

                {/* Products */}
                <div className="nav-dropdown" onMouseEnter={() => open("products")} onMouseLeave={close}>
                  <button className={`nav-link${activeDropdown === "products" ? " active" : ""}`}>
                    Products
                    <ChevronDown size={13} className={`nav-chevron${activeDropdown === "products" ? " open" : ""}`} />
                  </button>
                  {activeDropdown === "products" && (
                    <div className="dropdown-simple" onMouseEnter={() => keep("products")} onMouseLeave={close}>
                      {products.map((item) => (
                        <Link key={item.name} href={item.href} className="dropdown-simple-item" onClick={() => setActiveDropdown(null)}>
                          <div className="dropdown-simple-icon"><item.icon size={17} /></div>
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
                            <Link key={item.name} href={item.href} className="mega-item" onClick={() => setActiveDropdown(null)}>
                              <div className="mega-item-icon"><item.icon size={16} /></div>
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
            <button className="navbar-mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
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
                    <item.icon size={14} style={{ color: "var(--primary)", flexShrink: 0 }} />{item.name}
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