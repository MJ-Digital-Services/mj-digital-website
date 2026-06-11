"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { WorldMap } from "@/components/ui/world-map";
import AnimatedButton from "@/components/AnimatedButton";

export default function CTABanner() {
  return (
    <section style={{
      background: "#09090B",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Red glow */}
      <div style={{
        position: "absolute",
        top: -80,
        left: "25%",
        transform: "translateX(-50%)",
        width: 500,
        height: 300,
        // background: "radial-gradient(ellipse, rgba(229,24,42,0.12) 0%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 1,
      }} />

      <div style={{
        maxWidth: 1280,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1.4fr",
        alignItems: "center",
        minHeight: 420,
        position: "relative",
        zIndex: 2,
      }}>

        {/* Left — text */}
        <div style={{ padding: "80px 48px 80px clamp(24px, 4vw, 80px)" }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "5px 14px",
            borderRadius: 100,
            border: "1px solid rgba(229,24,42,0.25)",
            background: "rgba(229,24,42,0.08)",
            fontSize: 11,
            fontWeight: 600,
            color: "#e5182a",
            letterSpacing: "0.06em",
            textTransform: "uppercase" as const,
            marginBottom: 24,
            fontFamily: "var(--font-sans)",
          }}>
            Let's Build Together
          </div>

          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(28px, 3vw, 44px)",
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
            marginBottom: 16,
          }}>
            We Build Technology That Powers Businesses Worldwide.
          </h2>

          <p style={{
            fontSize: 15,
            color: "rgba(255,255,255,0.45)",
            lineHeight: 1.75,
            marginBottom: 36,
            maxWidth: 400,
          }}>
            From fintech APIs to AI solutions — we build end-to-end digital products for businesses across India and the world.
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
            <AnimatedButton
              href="/contact"
              className="cta-btn-primary"
              icon={<MessageCircle size={15} />}
            >
              <MessageCircle size={15} />
              Let's Talk
            </AnimatedButton>
            <Link href="/services" className="cta-btn-outline">
              View Services <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Right — world map */}
        <div style={{ position: "relative", height: "100%", minHeight: 420 }}>
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center" }}>
            <WorldMap
              lineColor="#e5182a"
              dots={[
                { start: { lat: 28.6139, lng: 77.209 }, end: { lat: 51.5074, lng: -0.1278 } },
                { start: { lat: 28.6139, lng: 77.209 }, end: { lat: 40.7128, lng: -74.006 } },
                { start: { lat: 28.6139, lng: 77.209 }, end: { lat: 1.3521, lng: 103.8198 } },
                { start: { lat: 28.6139, lng: 77.209 }, end: { lat: 25.2048, lng: 55.2708 } },
                { start: { lat: 28.6139, lng: 77.209 }, end: { lat: -33.8688, lng: 151.2093 } },
                { start: { lat: 28.6139, lng: 77.209 }, end: { lat: 35.6762, lng: 139.6503 } },
              ]}
            />
            {/* Right fade */}
            <div style={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              width: "20%",
              background: "linear-gradient(to right, transparent, #09090B)",
              pointerEvents: "none",
            }} />
            {/* Left fade */}
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: "15%",
              background: "linear-gradient(to left, transparent, #09090B)",
              pointerEvents: "none",
            }} />
            {/* Bottom fade */}
            <div style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "30%",
              background: "linear-gradient(to bottom, transparent, #09090B)",
              pointerEvents: "none",
            }} />
          </div>
        </div>

      </div>
    </section>
  );
}