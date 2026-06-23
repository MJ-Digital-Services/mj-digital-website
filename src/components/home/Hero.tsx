"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Rocket } from "lucide-react";
import { Boxes } from "@/components/ui/background-boxes";
import { LinkPreview } from "@/components/ui/link-preview";
import AnimatedButton from "@/components/ui/AnimatedButton";

const stats = [
  { number: "200+", label: "Businesses Served" },
  { number: "50+", label: "APIs Available" },
  { number: "8+", label: "Years of Experience" },
  { number: "4", label: "Flagship Products" },
  { number: "10+", label: "Industries" },
];

const products = [
  { name: "EzeePay", logo: "/ezeepay-logo.png", desc: "Fintech Platform", url: "https://ezeepay.app", isStatic: false },
  { name: "Zoki", logo: "/zoki-logo.jpg", desc: "CPaaS Solution", url: "https://zoki-website.vercel.app/", isStatic: false },
  { name: "Mobilocker", logo: "/mobilocker-logo.png", desc: "Secure Storage", url: "https://mobilocker.app", isStatic: false },
  { name: "Cashlo", logo: "/cashlo-logo.png", desc: "UPI Cashpoint", url: "https://cashlo.vercel.app/", isStatic: false },
];

export default function Hero() {
  return (
    <section className="hero-section">

      {/* Dark bg base */}
      <div className="hero-bg-dark" />

      <div style={{ position: "absolute", inset: 0, zIndex: 10 }}>
        <Boxes />
        </div>

      {/* Background boxes — the interactive grid */}
      <div className="hero-boxes-mask" />
      

      {/* Content — sits above boxes */}
      <div className="hero-content">

        {/* Badge */}
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Technology · Fintech · Innovation
        </div>

        {/* Headline */}
        <h1 className="hero-headline">
          Building Technology That<br />
          <span className="hero-headline-accent">Powers Businesses</span>
        </h1>

        {/* Subtext */}
        <p className="hero-subtext">
          Software solutions, fintech infrastructure, APIs, mobile applications,
          and digital transformation for startups, enterprises &amp; governments.
        </p>

        {/* CTAs */}
        <div className="hero-ctas">
          <AnimatedButton
            href="/services"
            className="hero-btn-primary"
            icon={<Rocket size={16} />}
          >
            Explore Services <ArrowRight size={16} />
          </AnimatedButton>
          <Link href="/products/ezeepay" className="hero-btn-outline">
            View Products
          </Link>
        </div>

        {/* Product chips */}
        <div className="hero-chips">
          {/* <span className="hero-chips-label">Our Products:</span> */}
          {products.map((p, i) => (
            p.isStatic ? (
              <LinkPreview
                key={p.name}
                url={p.url}
                isStatic
                imageSrc={p.logo}
                width={200}
                height={120}
                className="hero-chip"
              >
                <div style={{ display: "flex", alignItems: "center", gap: 7, animationDelay: `${0.6 + i * 0.1}s` }}>
                  <img src={p.logo} alt={p.name} style={{ width: 20, height: 20, borderRadius: "4px", objectFit: "contain", flexShrink: 0, backgroundColor: "white" }} />
                  <span>{p.name}</span>
                  <span className="hero-chip-desc">{p.desc}</span>
                </div>
              </LinkPreview>
            ) : (
              <LinkPreview
                key={p.name}
                url={p.url}
                width={200}
                height={120}
                className="hero-chip"
              >
                <div style={{ display: "flex", alignItems: "center", gap: 7, animationDelay: `${0.6 + i * 0.1}s` }}>
                  <img src={p.logo} alt={p.name} style={{ width: 20, height: 20, borderRadius: "4px", objectFit: "contain", flexShrink: 0, backgroundColor: "white" }} />
                  <span>{p.name}</span>
                  <span className="hero-chip-desc">{p.desc}</span>
                </div>
              </LinkPreview>
            )
          ))}
        </div>
      </div>

      {/* Stats bar */}
      <div className="hero-stats-bar">
        <div className="hero-stats-inner">
          {stats.map((s, i) => (
            <div key={s.label} className="hero-stat">
              <div className="hero-stat-number">{s.number}</div>
              <div className="hero-stat-label">{s.label}</div>
              {i < stats.length - 1 && <div className="hero-stat-divider" />}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}