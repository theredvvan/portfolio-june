"use client";

import { useEffect } from "react";
import { animate } from "motion";

/**
 * Blur-reveal: every `.reveal` element animates from blurred + faded + slightly
 * raised to sharp + visible the first time it scrolls into view. The trigger is
 * a standard IntersectionObserver; the animation is driven by Framer Motion's
 * `animate()`. Runs once per element.
 */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");

    const prefersReduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Reduced motion (or no IntersectionObserver): just show everything.
    if (prefersReduced || !("IntersectionObserver" in window)) {
      els.forEach((el) => {
        el.style.opacity = "1";
        el.style.filter = "none";
        el.style.transform = "none";
      });
      return;
    }

    const reveal = (el: HTMLElement) => {
      // Set the resting (final) state inline so the WAAPI animation ends on it
      // instead of snapping back to the blurred `.reveal` CSS default.
      el.style.opacity = "1";
      el.style.filter = "none";
      el.style.transform = "none";
      animate(
        el,
        {
          opacity: [0, 1],
          filter: ["blur(12px)", "blur(0px)"],
          transform: [
            "translateY(28px) scale(0.97)",
            "translateY(0px) scale(1)",
          ],
        },
        { duration: 1, ease: [0.16, 1, 0.3, 1] },
      );
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            reveal(entry.target as HTMLElement);
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
