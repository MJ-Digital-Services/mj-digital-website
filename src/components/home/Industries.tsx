"use client";

import type { CSSProperties } from "react";
import {
  Landmark,
  ShoppingCart,
  GraduationCap,
  HeartPulse,
  Truck,
  Building2,
  TowerControl,
  ShieldCheck,
  BriefcaseBusiness,
} from "lucide-react";

const OUTER = [
  { icon: Landmark, name: "Fintech & Banking", angle: 0 },
  { icon: ShoppingCart, name: "Retail & Commerce", angle: 72 },
  { icon: GraduationCap, name: "Education", angle: 144 },
  { icon: HeartPulse, name: "Healthcare", angle: 216 },
  { icon: Truck, name: "Logistics", angle: 288 },
];

const INNER = [
  { icon: Building2, name: "Real Estate", angle: 45 },
  { icon: TowerControl, name: "Telecom", angle: 135 },
  { icon: ShieldCheck, name: "Government", angle: 225 },
  { icon: BriefcaseBusiness, name: "MSMEs", angle: 315 },
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
          {OUTER.map((it) => {
            const Icon = it.icon;

            return (
              <div
                key={it.name}
                className="orbit-item"
                style={{ "--angle": `${it.angle}deg` } as CSSProperties}
              >
                <div className="orbit-chip orbit-chip-rev">
                  <span className="orbit-chip-icon">
                    <Icon size={20} strokeWidth={2} />
                  </span>

                  <span className="orbit-chip-name">
                    {it.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="orbit-ring orbit-ring-inner">
          {INNER.map((it) => {
            const Icon = it.icon;

            return (
              <div
                key={it.name}
                className="orbit-item"
                style={{ "--angle": `${it.angle}deg` } as CSSProperties}
              >
                <div className="orbit-chip orbit-chip-fwd">
                  <span className="orbit-chip-icon">
                    <Icon size={20} strokeWidth={2} />
                  </span>

                  <span className="orbit-chip-name">
                    {it.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="orbit-hub">
          <div className="orbit-hub-core">
            <img
              src="/mj-icon.png"
              alt="MJ Digital Services"
              className="orbit-hub-logo"
            />
          </div>
        </div>
      </div>

      {/* Pill list — mobile + screen readers + SEO */}
      <div className="ind2-pills">
        {ALL.map((it) => {
          const Icon = it.icon;

          return (
            <div key={it.name} className="industry-pill ind2-pill-dark">
              <span className="industry-pill-icon">
                <Icon size={18} strokeWidth={2} />
              </span>

              {it.name}
            </div>
          );
        })}
      </div>
    </section>
  );
}