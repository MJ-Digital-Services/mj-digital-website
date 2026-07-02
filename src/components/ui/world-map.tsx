"use client";

import { useRef, useMemo } from "react";
import { motion } from "motion/react";

// Pre-generated once and saved as a static asset — the background dot pattern
// is deterministic (same fixed params every time), so there's no reason to
// ship the `dotted-map` + `proj4` libraries (~289 KB) to the client just to
// regenerate an SVG that never changes. This is now a plain cached static file.
const STATIC_SVG_PATH = "/world-map-bg.svg";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
}

export function WorldMap({ dots = [], lineColor = "#e5182a" }: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  const projectedDots = useMemo(() => {
    const projectPoint = (lat: number, lng: number) => {
      const x = (lng + 180) * (800 / 360);
      const y = (90 - lat) * (400 / 180);
      return { x, y };
    };
    const createCurvedPath = (
      start: { x: number; y: number },
      end: { x: number; y: number }
    ) => {
      const midX = (start.x + end.x) / 2;
      const midY = Math.min(start.y, end.y) - 50;
      return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
    };
    return dots.map((dot) => ({
      start: projectPoint(dot.start.lat, dot.start.lng),
      end: projectPoint(dot.end.lat, dot.end.lng),
      path: createCurvedPath(
        projectPoint(dot.start.lat, dot.start.lng),
        projectPoint(dot.end.lat, dot.end.lng)
      ),
    }));
  }, [dots]);

  return (
    <div style={{ width: "100%", aspectRatio: "2/1", position: "relative" }}>
      <img
        src={STATIC_SVG_PATH}
        style={{
          height: "100%",
          width: "100%",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, white 10%, white 90%, transparent)",
          maskImage: "linear-gradient(to bottom, transparent, white 10%, white 90%, transparent)",
          pointerEvents: "none",
          userSelect: "none",
        }}
        alt="world map"
        height="495"
        width="1056"
        draggable={false}
      />
      {projectedDots.length > 0 && (
        <svg
          ref={svgRef}
          viewBox="0 0 800 400"
          style={{ width: "100%", height: "100%", position: "absolute", inset: 0, pointerEvents: "none", userSelect: "none" }}
        >
          {projectedDots.map((d, i) => (
            <g key={`path-group-${i}`}>
              <motion.path
                d={d.path}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
                transition={{ duration: 3, delay: 0.12 * i, ease: "easeOut", repeat: Infinity, repeatDelay: 8 }}
              />
            </g>
          ))}
          <defs>
            <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
              <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
          {projectedDots.map((d, i) => (
            <g key={`points-group-${i}`}>
              <g key={`start-${i}`}>
                <circle cx={d.start.x} cy={d.start.y} r="2" fill={lineColor} />
                <circle cx={d.start.x} cy={d.start.y} r="2" fill={lineColor} opacity="0.5">
                  <animate attributeName="r" from="2" to="8" dur="1.5s" begin="0s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.5" to="0" dur="1.5s" begin="0s" repeatCount="indefinite" />
                </circle>
              </g>
              <g key={`end-${i}`}>
                <circle cx={d.end.x} cy={d.end.y} r="2" fill={lineColor} />
                <circle cx={d.end.x} cy={d.end.y} r="2" fill={lineColor} opacity="0.5">
                  <animate attributeName="r" from="2" to="8" dur="1.5s" begin="0s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.5" to="0" dur="1.5s" begin="0s" repeatCount="indefinite" />
                </circle>
              </g>
            </g>
          ))}
        </svg>
      )}
    </div>
  );
}