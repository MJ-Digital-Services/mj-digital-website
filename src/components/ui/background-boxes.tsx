"use client";
import React from "react";
import { motion } from "motion/react";

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const rows = new Array(150).fill(1);
  const cols = new Array(100).fill(1);
  const colors = [
    "#93c5fd", "#f9a8d4", "#86efac", "#fde047",
    "#fca5a5", "#d8b4fe", "#a5b4fc", "#c4b5fd",
  ];
  const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
        position: "absolute",
        top: "-25%",
        left: "25%",
        zIndex: 0,
        display: "flex",
        height: "100%",
        width: "100%",
        padding: "16px",
      }}
      {...rest}
    >
      {rows.map((_, i) => (
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
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: getRandomColor(),
                transition: { duration: 0 },
              }}
              animate={{ transition: { duration: 2 } }}
              key={"col" + j}
              style={{
                position: "relative",
                height: "32px",
                width: "64px",
                borderTop: "1px solid rgb(51 65 85)",
                borderRight: "1px solid rgb(51 65 85)",
              }}
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
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);