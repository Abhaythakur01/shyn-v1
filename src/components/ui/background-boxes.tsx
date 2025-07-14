// src/components/ui/background-boxes.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  // Much smaller grid for maximum performance
  const rows = new Array(40).fill(1);
  const cols = new Array(30).fill(1);

  const colors = [
    "#03dac6", // Bright Teal
    "#ff0266", // Neon Pink
    "#00ff7f", // Spring Green
    "#ffff00", // Electric Yellow
    "#ff3838", // Fiery Red
    "#9d00ff", // Electric Purple
    "#007bff", // Bright Blue
    "#4d4dff", // Indigo Dye
    "#ff6200", // Vibrant Orange
  ];

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        "absolute left-1/4 p-4 -top-1/4 flex -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 pointer-events-none",
        className
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row` + i}
          className="w-20 h-12 border-l border-slate-700 relative"
        >
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: getRandomColor(),
                transition: { duration: 0.1 },
              }}
              key={`col` + j}
              className="w-20 h-12 border-r border-t border-slate-700 relative pointer-events-auto"
            >
              {j % 3 === 0 && i % 3 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="absolute h-8 w-12 -top-[16px] -left-[24px] text-slate-700 stroke-[1px] pointer-events-none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);