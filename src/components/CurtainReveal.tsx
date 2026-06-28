"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useReveal } from "@/context/RevealContext";

const PANEL_COUNT = 5;
const CENTER_INDEX = 2;
const LAST_INDEX = 4;
const START_DELAY = 0.3;
const STAGGER = 0.15;
const PANELS = Array.from({ length: PANEL_COUNT }, (_, i) => i);

const ROWS = [
  { key: "top", className: "top-0", exitY: "-100%" },
  { key: "bottom", className: "bottom-0", exitY: "100%" },
] as const;

export function CurtainReveal() {
  const [done, setDone] = useState(false);
  const { setIsRevealed } = useReveal();

  const handleComplete = () => {
    setIsRevealed(true);
    setDone(true);
  };

  return (
    <AnimatePresence>
      {!done && (
        <div aria-hidden className="pointer-events-none">
          {ROWS.map((row) => (
            <div
              key={row.key}
              className={`fixed left-0 z-[9999] flex h-[50vh] w-screen ${row.className}`}
            >
              {PANELS.map((index) => {
                const isLast = row.key === "bottom" && index === LAST_INDEX;
                return (
                  <motion.div
                    key={index}
                    className="h-full w-[20vw] bg-[#f5f5f5]"
                    initial={{ y: 0 }}
                    animate={{ y: row.exitY }}
                    transition={{
                      duration: 0.9,
                      ease: [0.76, 0, 0.24, 1],
                      delay:
                        START_DELAY + Math.abs(index - CENTER_INDEX) * STAGGER,
                    }}
                    onAnimationComplete={isLast ? handleComplete : undefined}
                  />
                );
              })}
            </div>
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}
