"use client";

import type { CSSProperties } from "react";

const OUTER = [
  { icon: "🏦", name: "Fintech & Banking", angle: 0 },
  { icon: "🛒", name: "Retail & Commerce", angle: 72 },
  { icon: "🎓", name: "Education", angle: 144 },
  { icon: "🏥", name: "Healthcare", angle: 216 },
  { icon: "🚚", name: "Logistics", angle: 288 },
];

const INNER = [
  { icon: "🏠", name: "Real Estate", angle: 45 },
  { icon: "📡", name: "Telecom", angle: 135 },
  { icon: "🏛️", name: "Government", angle: 225 },
  { icon: "🏢", name: "MSMEs", angle: 315 },
];

const ALL = [...OUTER, ...INNER];

export default function Industries() {
  return (
    <section className="ind2-section">
      <div className="ind2-header">
        <div className="ind2-badge">Industries We Serve</div>
        <h2 className="ind2-headline">Powering Businesses Across Every Sector</h2>
        <p className="ind2-subtext">
          From fintech startups to government organizations — one technology core,
          adapted to every industry&apos;s unique challenges.
        </p>
      </div>

      {/* Orbital system — desktop/tablet */}
      <div className="orbit-stage" aria-hidden="true">
        <div className="orbit-sweep" />

        <div className="orbit-ring orbit-ring-outer">
          {OUTER.map((it) => (
            <div
              key={it.name}
              className="orbit-item"
              style={{ "--angle": `${it.angle}deg` } as CSSProperties}
            >
              <div className="orbit-chip orbit-chip-rev">
                <span className="orbit-chip-icon">{it.icon}</span>
                <span className="orbit-chip-name">{it.name}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="orbit-ring orbit-ring-inner">
          {INNER.map((it) => (
            <div
              key={it.name}
              className="orbit-item"
              style={{ "--angle": `${it.angle}deg` } as CSSProperties}
            >
              <div className="orbit-chip orbit-chip-fwd">
                <span className="orbit-chip-icon">{it.icon}</span>
                <span className="orbit-chip-name">{it.name}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="orbit-hub">
          <div className="orbit-hub-core">MJ</div>
        </div>
      </div>

      {/* Pill list — mobile + screen readers + SEO */}
      <div className="ind2-pills">
        {ALL.map((it) => (
          <div key={it.name} className="industry-pill ind2-pill-dark">
            <span className="industry-pill-icon">{it.icon}</span>
            {it.name}
          </div>
        ))}
      </div>
    </section>
  );
}