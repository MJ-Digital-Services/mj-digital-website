"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll, useSpring } from "motion/react";

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (!contentRef.current) return;
    const observer = new ResizeObserver(() => {
      if (contentRef.current) {
        setSvgHeight(contentRef.current.offsetHeight);
      }
    });
    observer.observe(contentRef.current);
    setSvgHeight(contentRef.current.offsetHeight);
    return () => observer.disconnect();
  }, []);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
    { stiffness: 500, damping: 90 }
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
    { stiffness: 500, damping: 90 }
  );

  return (
    <div ref={ref} style={{ position: "relative", width: "100%" }} className={className}>
      {/* Beam */}
      <div style={{ position: "absolute", top: 12, left: -150, pointerEvents: "none" }}>
        <motion.div
          style={{
            marginLeft: 15,
            height: 16,
            width: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            border: "1px solid rgba(229,24,42,0.4)",
            boxShadow: "0 0 8px rgba(229,24,42,0.3)",
          }}
        >
          <div
            style={{
              height: 8,
              width: 8,
              borderRadius: "50%",
              background: "#e5182a",
            }}
          />
        </motion.div>
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight}
          style={{ marginLeft: 4, display: "block" }}
          aria-hidden="true"
        >
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="rgba(229,24,42,0.12)"
            strokeWidth="1.5"
          />
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="url(#redGradient)"
            strokeWidth="2"
          />
          <defs>
            <motion.linearGradient
              id="redGradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor="#e5182a" stopOpacity="0" />
              <stop stopColor="#e5182a" />
              <stop offset="0.5" stopColor="#ff6b6b" />
              <stop offset="1" stopColor="#b91220" stopOpacity="0" />
            </motion.linearGradient>
          </defs>
        </svg>
      </div>

      {/* Content */}
      <div ref={contentRef}>{children}</div>
    </div>
  );
};