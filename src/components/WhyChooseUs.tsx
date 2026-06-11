"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Server, Search, Mic } from "lucide-react";
import { WorldMap } from "@/components/ui/world-map";
import { Terminal } from "@/components/ui/terminal";

/* ── Card 2: cycling progress notifications ── */
const updates = [
  { tag: "notification", text: "Design Finalized", by: "AR", color: "#3b82f6" },
  { tag: "deployment", text: "v2.4 Pushed to Production", by: "SK", color: "#f97316" },
  { tag: "milestone", text: "Sprint 12 Completed", by: "MJ", color: "#22c55e" },
];

function UpdatesVisual() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % updates.length), 2600);
    return () => clearInterval(t);
  }, []);
  const u = updates[idx];

  return (
    <div className="wcu-updates-visual">
      <div className="wcu-donut">
        <div className="wcu-donut-hole" />
      </div>
      <div className="wcu-stack">
        <div className="wcu-stack-ghost wcu-stack-ghost-2" />
        <div className="wcu-stack-ghost wcu-stack-ghost-1" />
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={idx}
            className="wcu-notif"
            initial={{ y: 26, opacity: 0, scale: 0.97 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -20, opacity: 0, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div>
              <div className="wcu-notif-tag">{u.tag}</div>
              <div className="wcu-notif-text">{u.text}</div>
            </div>
            <div className="wcu-notif-avatar" style={{ background: u.color }}>{u.by}</div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ── Card 3: world map with avatars popping in ── */
const pins = [
  { by: "AK", color: "#3b82f6", top: "22%", left: "14%" },
  { by: "RS", color: "#f97316", top: "48%", left: "34%" },
  { by: "NP", color: "#22c55e", top: "30%", left: "62%" },
  { by: "VG", color: "#a855f7", top: "62%", left: "78%" },
  { by: "MD", color: "#e5182a", top: "66%", left: "48%" },
];
const servers = [
  { top: "18%", left: "42%" },
  { top: "40%", left: "86%" },
  { top: "72%", left: "20%" },
];

function HostingVisual() {
  return (
    <div className="wcu-map">
      <div className="wcu-map-world">
        <WorldMap dots={[]} />
      </div>
      {servers.map((s, i) => (
        <div key={i} className="wcu-map-server" style={{ top: s.top, left: s.left }}>
          <Server size={13} />
        </div>
      ))}
      {pins.map((p, i) => (
        <motion.div
          key={p.by}
          className="wcu-map-avatar"
          style={{ top: p.top, left: p.left, background: p.color }}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.25 + i * 0.18 }}
        >
          {p.by}
          <span className="wcu-map-ping" style={{ animationDelay: `${i * 0.5}s` }} />
        </motion.div>
      ))}
    </div>
  );
}

/* ── Card 4: Google search with cycling results ── */
const results = [
  { name: "MJ Digital Services", url: "mjdigitalservices.com › fintech › apis", line: "Fintech APIs, CPaaS & software development" },
  { name: "EzeePay by MJ Digital", url: "mjdigitalservices.com › products › ezeepay", line: "AEPS, money transfer & utility payments platform" },
  { name: "Zoki — WhatsApp Suite", url: "mjdigitalservices.com › products › zoki", line: "WhatsApp engagement & marketing automation" },
];

function SeoVisual() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % results.length), 3000);
    return () => clearInterval(t);
  }, []);
  const r = results[idx];

  return (
    <div className="wcu-seo-visual">
      <div className="wcu-search-bar">
        <span className="wcu-google-g">G</span>
        <span className="wcu-search-text">best fintech API provider india</span>
        <Mic size={14} className="wcu-search-mic" />
      </div>
      <div className="wcu-stack wcu-stack-seo">
        <div className="wcu-stack-ghost wcu-stack-ghost-2" />
        <div className="wcu-stack-ghost wcu-stack-ghost-1" />
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={idx}
            className="wcu-result"
            initial={{ y: 26, opacity: 0, scale: 0.97 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -20, opacity: 0, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="wcu-result-icon"><Search size={14} /></div>
            <div className="wcu-result-body">
              <div className="wcu-result-name">{r.name}</div>
              <div className="wcu-result-url">{r.url}</div>
              <div className="wcu-result-line">{r.line}</div>
              <div className="wcu-result-skeleton" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ── Card 5: chip + circuit beams ── */
function ComponentsVisual() {
  return (
    <div className="wcu-circuit">
      <svg viewBox="0 0 360 220" fill="none" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="wcuBeam" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="var(--primary)" stopOpacity="0" />
            <stop offset="0.5" stopColor="var(--primary)" />
            <stop offset="1" stopColor="#ff6b6b" />
          </linearGradient>
          <linearGradient id="wcuChip" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ff6b6b" />
            <stop offset="1" stopColor="var(--primary-dark)" />
          </linearGradient>
        </defs>

        {/* base traces */}
        <path className="wcu-trace" d="M0 40 H140 L175 75 H235" />
        <path className="wcu-trace" d="M0 110 H235" />
        <path className="wcu-trace" d="M0 180 H140 L175 145 H235" />

        {/* animated beams */}
        <path className="wcu-beam" pathLength={1} d="M0 40 H140 L175 75 H235" />
        <path className="wcu-beam wcu-beam-2" pathLength={1} d="M0 110 H235" />
        <path className="wcu-beam wcu-beam-3" pathLength={1} d="M0 180 H140 L175 145 H235" />

        {/* chip pins */}
        {[75, 110, 145].map((y) => (
          <rect key={y} x={228} y={y - 2} width={14} height={4} rx={2} fill="var(--border)" />
        ))}
        {/* chip */}
        <rect x={240} y={55} width={100} height={110} rx={22} fill="url(#wcuChip)" className="wcu-chip" />
        <rect x={262} y={77} width={56} height={66} rx={12} fill="rgba(255,255,255,0.18)" />
      </svg>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="why-section">
      <div className="why-header">
        <div className="why-badge">Why Choose Us</div>
        <h2 className="why-headline">Built for Businesses That Mean Business</h2>
        <p className="why-subtext">
          We don&apos;t just write code — we build products that perform, scale, and deliver real business outcomes.
        </p>
      </div>

      <div className="wcu-bento">
        {/* 1 — tall dark */}
        <div className="wcu-card wcu-card-dark wcu-card-tall">
          <Terminal
            className="max-w-none px-0"
            username="mj-digital"
            enableSound={false}
            typingSpeed={40}
            delayBetweenCommands={900}
            commands={[
              "git clone mj-digital/client-app",
              "npm install",
              "npm run build",
              "vercel deploy --prod",
            ]}
            outputs={{
              0: ["Cloning into 'client-app'...", "✔ Done."],
              1: ["added 412 packages in 8s"],
              2: ["✔ Compiled successfully", "✔ Generating static pages (24/24)"],
              3: ["✔ Production: https://client-app.mjdigital.in"],
            }}
          />
          <div className="wcu-card-content">
            <h3 className="wcu-title wcu-title-light">Design &amp; Development</h3>
            <p className="wcu-desc wcu-desc-light">
              From idea to launch — design, development, QA and DevOps under one roof,
              built to perform and scale with your business.
            </p>
            <Link href="/services" className="wcu-card-btn">
              Explore Services <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* 2 — updates */}
        <div className="wcu-card">
          <h3 className="wcu-title wcu-title-top">Regular updates &amp; progress tracking</h3>
          <UpdatesVisual />
        </div>

        {/* 3 — hosting */}
        <div className="wcu-card wcu-card-dark">
          <h3 className="wcu-title wcu-title-light wcu-title-top">Hosting, Deployment &amp; Maintenance</h3>
          <HostingVisual />
        </div>

        {/* 4 — SEO */}
        <div className="wcu-card">
          <h3 className="wcu-title wcu-title-top">Get found on Google</h3>
          <SeoVisual />
        </div>

        {/* 5 — components */}
        <div className="wcu-card">
          <h3 className="wcu-title wcu-title-top">Components, Dashboards &amp; Everything else</h3>
          <ComponentsVisual />
        </div>
      </div>
    </section>
  );
}