"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Zap, MessageSquare, Lock } from "lucide-react";
import { Boxes } from "@/components/ui/background-boxes";

const stats = [
  { number: "200+", label: "Businesses Served" },
  { number: "50+", label: "APIs Available" },
  { number: "3", label: "Flagship Products" },
  { number: "10+", label: "Industries" },
];

const products = [
  { name: "EzeePay", icon: Zap, desc: "Fintech Platform" },
  { name: "Zoki", icon: MessageSquare, desc: "CPaaS Solution" },
  { name: "Mobilocker", icon: Lock, desc: "Secure Storage" },
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
          <Link href="/services" className="hero-btn-primary">
            Explore Services <ArrowRight size={16} />
          </Link>
          <Link href="/products/ezeepay" className="hero-btn-outline">
            View Products
          </Link>
        </div>

        {/* Product chips */}
        <div className="hero-chips">
          <span className="hero-chips-label">Our Products:</span>
          {products.map((p, i) => (
            <div
              key={p.name}
              className="hero-chip"
              style={{ animationDelay: `${0.6 + i * 0.1}s` }}
            >
              <div className="hero-chip-icon">
                <p.icon size={13} />
              </div>
              <span>{p.name}</span>
              <span className="hero-chip-desc">{p.desc}</span>
            </div>
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