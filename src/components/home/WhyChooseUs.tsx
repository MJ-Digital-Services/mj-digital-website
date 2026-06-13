"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Server, Search, Mic, Code2 } from "lucide-react";
import { WorldMap } from "@/components/ui/world-map";
import { Terminal } from "@/components/ui/terminal";
import AnimatedButton from "@/components/ui/AnimatedButton";

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
      <div className="wcu-donut2">
        <svg viewBox="0 0 120 120">
          <circle className="wcu-donut2-track" cx="60" cy="60" r="48" />
          <motion.circle
            className="wcu-donut2-seg-main"
            cx="60" cy="60" r="48"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 0.58 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
          />
          <motion.circle
            className="wcu-donut2-seg-alt"
            cx="60" cy="60" r="48"
            initial={{ pathLength: 0, pathOffset: 0.58 }}
            whileInView={{ pathLength: 0.2, pathOffset: 0.58 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
          />
        </svg>
        <motion.div
          className="wcu-donut2-center"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <span className="wcu-donut2-pct">78%</span>
          <span className="wcu-donut2-label">on track</span>
        </motion.div>
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
const TRACES_TOP = [
  "M241.461 -19.625V7.85497L301.26 68.5597V123.375",
  "M284.045 123.375V77.6201L221.528 15.1033V-19.625",
  "M109.641 -20.625L152.669 26.8818H210.656L265.924 83.0563V123.375",
  "M247.803 122.875V91.2107L200.689 44.0966H79.2799L15.1406 -21.125",
  "M0.640625 -5.625L69.3134 62.2174H192.535L229.683 98.459V123.375",
];
const TRACES_LEFT = [
  "M12.427 165.594V126.58L32.3598 103.929H200.148",
  "M200.148 85.8084H27.8296L0.648438 113.896",
  "M0.648438 70.4057H200.148",
  "M200.148 50.4728H22.3934L0.648438 30.54",
  "M0.648438 0.640625L32.3598 32.352H200.148",
];
const TRACES_RIGHT = [
  "M118.875 0V64.2816L169.613 115.926V142",
  "M99.8516 0V76.966L144.664 121V142",
  "M82.6391 0V83.3087L30.1641 142.5M63.6122 0V74.2483L0.664062 142.5",
  "M136.094 0V51.5975L178.678 96.8995H296.463",
];

function TraceGroup({
  paths, viewBox, gradId, className,
}: { paths: string[]; viewBox: string; gradId: string; className: string }) {
  return (
    <svg className={`wcu-traces ${className}`} viewBox={viewBox} fill="none">
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0" />
          <stop offset="50%" stopColor="var(--primary)" stopOpacity="1" />
          <stop offset="100%" stopColor="#ff6b6b" stopOpacity="0" />
        </linearGradient>
      </defs>
      {paths.map((d, i) => (
        <path key={`base-${i}`} className="wcu-trace2" d={d} />
      ))}
      {paths.map((d, i) => (
        <path
          key={`beam-${i}`}
          className="wcu-beam2"
          d={d}
          pathLength={1}
          stroke={`url(#${gradId})`}
          style={{ animationDelay: `${i * 0.55}s` }}
        />
      ))}
    </svg>
  );
}

const PINS = [0, 1, 2, 3, 4];

function ComponentsVisual() {
  return (
    <div className="wcu-chipscene">
      <TraceGroup paths={TRACES_TOP} viewBox="0 0 303 124" gradId="wcuGradT" className="wcu-traces-top" />
      <TraceGroup paths={TRACES_LEFT} viewBox="0 0 201 166" gradId="wcuGradL" className="wcu-traces-left" />
      <TraceGroup paths={TRACES_RIGHT} viewBox="0 0 167 142" gradId="wcuGradR" className="wcu-traces-right" />

      <div className="wcu-chip2">
        <div className="wcu-pins wcu-pins-l">{PINS.map((i) => <span key={i} />)}</div>
        <div className="wcu-pins wcu-pins-r">{PINS.map((i) => <span key={i} />)}</div>
        <div className="wcu-pins wcu-pins-t">{PINS.map((i) => <span key={i} />)}</div>
        <div className="wcu-pins wcu-pins-b">{PINS.map((i) => <span key={i} />)}</div>
        <div className="wcu-chip2-body">
          <span className="wcu-chip2-sheen wcu-chip2-sheen-1" />
          <span className="wcu-chip2-sheen wcu-chip2-sheen-2" />
          <span className="wcu-chip2-sheen wcu-chip2-sheen-3" />
        </div>
      </div>
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
            <AnimatedButton icon={<Code2 size={16} />} href="/services" className="wcu-card-btn">
              Explore Services <ArrowRight size={14} />
            </AnimatedButton>
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