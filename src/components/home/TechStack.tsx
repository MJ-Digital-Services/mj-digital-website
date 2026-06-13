"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
  MotionValue,
} from "motion/react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Tech {
  name: string;
  logo: string | null;
  svg?: boolean;
}

interface Category {
  label: string;
  desc: string;
  techs: Tech[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const categories: Category[] = [
  {
    label: "Frontend",
    desc: "Modern, fast, and SEO-optimised user interfaces built with the best frontend frameworks.",
    techs: [
      { name: "React",   logo: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs/000000" },
      { name: "Angular", logo: "https://cdn.simpleicons.org/angular/DD0031" },
    ],
  },
  {
    label: "Backend",
    desc: "Scalable server-side architecture and APIs powering high-performance applications.",
    techs: [
      { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs/339933" },
      { name: "Laravel", logo: "https://cdn.simpleicons.org/laravel/FF2D20" },
      { name: "Python",  logo: "https://cdn.simpleicons.org/python/3776AB" },
      { name: "Java",    logo: "https://cdn.simpleicons.org/openjdk/000000" },
    ],
  },
  {
    label: "Mobile",
    desc: "Cross-platform and native mobile apps for Android and iOS that users love.",
    techs: [
      { name: "Flutter", logo: "https://cdn.simpleicons.org/flutter/02569B" },
      { name: "Android", logo: "https://cdn.simpleicons.org/android/3DDC84" },
      { name: "iOS",     logo: "https://cdn.simpleicons.org/apple/000000" },
    ],
  },
  {
    label: "Database",
    desc: "Reliable, scalable data storage solutions from relational to NoSQL databases.",
    techs: [
      { name: "MySQL",      logo: "https://cdn.simpleicons.org/mysql/4479A1" },
      { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql/4169E1" },
      { name: "MongoDB",    logo: "https://cdn.simpleicons.org/mongodb/47A248" },
    ],
  },
  {
    label: "Cloud",
    desc: "Enterprise-grade cloud infrastructure and DevOps pipelines for 99.9% uptime.",
    techs: [
      { name: "AWS",   logo: "https://www.svgrepo.com/show/376356/aws.svg" },
      { name: "Azure", logo: null, svg: true },
      { name: "GCP",   logo: "https://cdn.simpleicons.org/googlecloud/4285F4" },
    ],
  },
  {
    label: "DevOps",
    desc: "Automated pipelines, containerisation, and infrastructure tools for reliable deployments.",
    techs: [
      { name: "Docker",     logo: "https://cdn.simpleicons.org/docker/2496ED" },
      { name: "Kubernetes", logo: "https://cdn.simpleicons.org/kubernetes/326CE5" },
      { name: "Jenkins",    logo: "https://cdn.simpleicons.org/jenkins/D24939" },
      { name: "GitHub",     logo: "https://cdn.simpleicons.org/github/000000" },
    ],
  },
];

// ─── Azure SVG (inline, avoids broken simpleicons path) ──────────────────────

function AzureSVG({ size }: { size: number }) {
  return (
    <svg
      height={size}
      width={size}
      viewBox="0 0 96 96"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block" }}
    >
      <defs>
        <linearGradient id="az-a" x1="0.576" x2="0.1" y1="0.019" y2="1.083" gradientUnits="objectBoundingBox">
          <stop offset="0" stopColor="#114a8b" />
          <stop offset="1" stopColor="#0669bc" />
        </linearGradient>
        <linearGradient id="az-b" x1="0.738" x2="0.557" y1="0.176" y2="0.816" gradientUnits="objectBoundingBox">
          <stop offset="0" stopOpacity=".3" />
          <stop offset=".071" stopOpacity=".2" />
          <stop offset=".321" stopOpacity=".1" />
          <stop offset=".623" stopOpacity=".05" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="az-c" x1="0.31" x2="0.707" y1="0.273" y2="1.029" gradientUnits="objectBoundingBox">
          <stop offset="0" stopColor="#3ccbf4" />
          <stop offset="1" stopColor="#2892df" />
        </linearGradient>
      </defs>
      <path d="M33.338 6.544h28.56L32.818 90.513a4.544 4.544 0 01-4.308 3.087H5.605a4.544 4.544 0 01-4.3-6.019L29.03 9.631a4.544 4.544 0 014.308-3.087z" fill="url(#az-a)" />
      <path d="M71.175 60.498H38.205L60.564 6.544H89.13a4.544 4.544 0 013.614 7.267z" fill="url(#az-c)" />
      <path d="M33.338 6.544a4.52 4.52 0 00-4.314 3.134L1.31 87.525a4.544 4.544 0 004.294 6.075H28.64a4.87 4.87 0 003.744-3.14l5.557-16.451 19.864 18.418a4.637 4.637 0 002.913 1.17H85.6l-11.338-32.1-33.065.007L60.564 6.544z" fill="url(#az-b)" />
    </svg>
  );
}

// ─── Dock Item (one logo with magnification) ──────────────────────────────────

function DockItem({
  tech,
  mouseX,
}: {
  tech: Tech;
  mouseX: MotionValue<number>;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  // Distance from mouse to the center of this item
  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // Container size: 36 → 64 → 36  (smaller base, bigger peak than default dock)
  const sizeTransform  = useTransform(distance, [-120, 0, 120], [36, 64, 36]);
  // Icon size inside: 20 → 36 → 20
  const iconTransform  = useTransform(distance, [-120, 0, 120], [20, 36, 20]);

  const size = useSpring(sizeTransform,  { mass: 0.1, stiffness: 180, damping: 14 });
  const icon = useSpring(iconTransform,  { mass: 0.1, stiffness: 180, damping: 14 });

  return (
    <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
      {/* Tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 6, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 4, x: "-50%" }}
            transition={{ duration: 0.15 }}
            style={{
              position: "absolute",
              bottom: "calc(100% + 8px)",
              left: "50%",
              whiteSpace: "pre",
              padding: "4px 10px",
              borderRadius: 6,
              fontSize: 12,
              fontWeight: 600,
              background: "var(--text-primary)",
              color: "var(--background)",
              pointerEvents: "none",
              zIndex: 10,
              fontFamily: "var(--font-sans)",
              letterSpacing: "0.01em",
            }}
          >
            {tech.name}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Icon container */}
      <motion.div
        ref={ref}
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          background: "var(--surface)",
          border: "1px solid var(--border)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "default",
          overflow: "hidden",
          flexShrink: 0,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <motion.div
          style={{
            width: icon,
            height: icon,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {tech.svg ? (
            // Azure — render at icon motion size via a fixed large SVG scaled down
            <AzureSVG size={36} />
          ) : tech.logo ? (
            <img
              src={tech.logo}
              alt={tech.name}
              style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
            />
          ) : null}
        </motion.div>
      </motion.div>
    </div>
  );
}

// ─── Dock Row (tracks mouse X across the whole row) ───────────────────────────

function DockRow({ techs }: { techs: Tech[] }) {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.clientX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      style={{
        display: "flex",
        alignItems: "flex-end",   // bottom-aligned like macOS dock
        gap: 10,
        height: 72,               // fixed height so the card doesn't jump
        paddingBottom: 4,
      }}
    >
      {techs.map((tech) => (
        <DockItem key={tech.name} tech={tech} mouseX={mouseX} />
      ))}
    </motion.div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function TechStack() {
  return (
    <section className="techstack-section">

      <div className="techstack-header">
        <div className="techstack-badge">Technology Stack</div>
        <h2 className="techstack-headline">
          Built With the Best Tools in the Industry
        </h2>
        <p className="techstack-subtext">
          We work with modern, battle-tested technologies across every layer — from frontend to cloud infrastructure.
        </p>
      </div>

      <div className="techstack-grid">
        {categories.map((category) => (
          <div key={category.label} className="techstack-category">
            <GlowingEffect
              spread={40}
              glow={false}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
              borderWidth={2}
            />

            {/* Top: label + description */}
            <div className="techstack-category-top">
              <div className="techstack-category-label">{category.label}</div>
              <p className="techstack-category-desc">{category.desc}</p>
            </div>

            {/* Bottom: floating dock logos */}
            <DockRow techs={category.techs} />
          </div>
        ))}
      </div>

    </section>
  );
}