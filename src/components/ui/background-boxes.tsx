"use client";
import React, { useMemo } from "react";

const COLORS = [
  "#93c5fd", "#f9a8d4", "#86efac", "#fde047",
  "#fca5a5", "#d8b4fe", "#a5b4fc", "#c4b5fd",
];

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  // 40x24 = 960 cells instead of 150x100 = 15,000 — still visually dense given
  // the skew/scale transform, but ~94% fewer DOM nodes and zero JS-driven
  // per-cell motion instances.
  const rows = 50;
  const cols = 60;

  // Precompute each cell's hover color ONCE per mount, not per render/hover.
  const cellColors = useMemo(() => {
    const grid: string[][] = [];
    for (let i = 0; i < rows; i++) {
      const row: string[] = [];
      for (let j = 0; j < cols; j++) {
        row.push(COLORS[Math.floor(Math.random() * COLORS.length)]);
      }
      grid.push(row);
    }
    return grid;
  }, []);

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
        position: "absolute",
        top: "-20%",
        left: "55%",
        zIndex: 0,
        display: "flex",
        height: "100%",
        width: "100%",
        padding: "16px",
      }}
      {...rest}
    >
      {Array.from({ length: rows }).map((_, i) => (
        <div
          key={"row" + i}
          style={{
            position: "relative",
            height: "32px",
            width: "64px",
            borderLeft: "1px solid rgb(51 65 85)",
            flexShrink: 0,
          }}
        >
          {Array.from({ length: cols }).map((_, j) => (
            <div
              key={"col" + j}
              className="bg-box-cell"
              style={{
                "--hover-color": cellColors[i][j],
                position: "relative",
                height: "32px",
                width: "64px",
                borderTop: "1px solid rgb(51 65 85)",
                borderRight: "1px solid rgb(51 65 85)",
              } as React.CSSProperties}
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  style={{
                    pointerEvents: "none",
                    position: "absolute",
                    top: "-14px",
                    left: "-22px",
                    height: "24px",
                    width: "40px",
                    strokeWidth: "1px",
                    color: "rgb(51 65 85)",
                  }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
              ) : null}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);