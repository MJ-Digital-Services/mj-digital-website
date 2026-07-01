"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

const products = [
  {
    name: "EzeePay",
    badge: "Fintech Platform",
    src: "/products/ezeepay-screenshot.png",
    mobileSrc: "/products/ezeepay-mobile-screenshot.png",
    color: "#f97316",
    desc: "AEPS, Money Transfer & Utility Payments",
  },
  {
    name: "Zoki",
    badge: "CPaaS Platform",
    src: "/products/zoki-screenshot.png",
    mobileSrc: "/products/zoki-mobile-screenshot.png",
    color: "#22c55e",
    desc: "WhatsApp Engagement & Marketing Automation",
  },
  {
    name: "Mobilocker",
    badge: "Digital Storage",
    src: "/products/mobilocker-screenshot.png",
    mobileSrc: "/products/mobilocker-mobile-screenshot.png",
    color: "#3b82f6",
    desc: "Secure Document Management & Verification",
  },
  {
    name: "Cashlo",
    badge: "UPI Cashpoint",
    src: "/products/cashlo-screenshot.png",
    mobileSrc: "/products/cashlo-mobile-screenshot.png",
    color: "#a3e635",
    desc: "UPI Cashpoint Platform for Every Shopkeeper",
  },
];

export default function ProductShowcase() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % products.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{ background: "#0f172a", overflow: "hidden" }}>
      <ContainerScroll
        titleComponent={
          <div style={{ textAlign: "center" }}>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "5px 14px",
              borderRadius: 100,
              border: "1px solid rgba(255,255,255,0.12)",
              fontSize: 11,
              fontWeight: 600,
              color: "rgba(255,255,255,0.5)",
              letterSpacing: "0.06em",
              textTransform: "uppercase" as const,
              marginBottom: 16,
              fontFamily: "var(--font-sans)",
            }}>
              Our Products
            </div>

            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 3.5vw, 46px)",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              marginBottom: 16,
            }}>
              Flagship Products Built for Scale
            </h2>

            <p style={{
              fontSize: 16,
              color: "rgba(255,255,255,0.45)",
              maxWidth: 520,
              margin: "0 auto 32px",
              lineHeight: 1.75,
              fontFamily: "var(--font-sans)",
            }}>
              Three powerful platforms — each solving a distinct problem in fintech, communication, and digital infrastructure.
            </p>

            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px",
              borderRadius: 100,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              marginBottom: 8,
            }}>
              {products.map((p, i) => (
                <button
                  key={p.name}
                  onClick={() => setActive(i)}
                  style={{
                    padding: "8px 20px",
                    borderRadius: 100,
                    border: "none",
                    cursor: "pointer",
                    fontSize: 13,
                    fontWeight: 600,
                    fontFamily: "var(--font-sans)",
                    transition: "all 0.3s ease",
                    background: active === i ? p.color : "transparent",
                    color: active === i ? "#ffffff" : "rgba(255,255,255,0.5)",
                  }}
                >
                  {p.name}
                </button>
              ))}
            </div>

            <p style={{
              fontSize: 13,
              color: "rgba(255,255,255,0.35)",
              fontFamily: "var(--font-sans)",
              marginTop: 8,
            }}>
              {products[active].desc}
            </p>

            <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 16 }}>
              {products.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setActive(i)}
                  style={{
                    width: active === i ? 24 : 6,
                    height: 6,
                    borderRadius: 100,
                    background: active === i ? products[active].color : "rgba(255,255,255,0.2)",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                />
              ))}
            </div>
          </div>
        }
      >
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          {products.map((p, i) => {
            // Only mount images that are active, or adjacent to active (next/prev in the
            // auto-rotation), so we're never downloading all 8 assets on page load.
            const isNear =
              i === active ||
              i === (active + 1) % products.length ||
              i === (active - 1 + products.length) % products.length;

            if (!isNear) return null;

            return (
              <React.Fragment key={p.name}>
                {/* Desktop */}
                <div
                  className="hidden md:block"
                  style={{
                    position: "absolute",
                    inset: 0,
                    opacity: active === i ? 1 : 0,
                    transition: "opacity 0.6s ease",
                  }}
                >
                  <Image
                    src={p.src}
                    alt={`${p.name} — ${p.desc}`}
                    fill
                    priority={i === 0}
                    sizes="(min-width: 768px) 1200px, 100vw"
                    quality={80}
                    style={{
                      objectFit: "cover",
                      objectPosition: "left top",
                      borderRadius: 16,
                    }}
                  />
                </div>

                {/* Mobile */}
                <div
                  className="block md:hidden"
                  style={{
                    position: "absolute",
                    inset: 0,
                    opacity: active === i ? 1 : 0,
                    transition: "opacity 0.6s ease",
                  }}
                >
                  <Image
                    src={p.mobileSrc}
                    alt={`${p.name} — ${p.desc}`}
                    fill
                    priority={i === 0}
                    sizes="100vw"
                    quality={80}
                    style={{
                      objectFit: "cover",
                      objectPosition: "top center",
                      borderRadius: 16,
                    }}
                  />
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </ContainerScroll>
    </section>
  );
}