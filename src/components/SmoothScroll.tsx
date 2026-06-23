"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { useReveal } from "@/hooks/use-reveal";

/** Initializes Lenis smooth scroll for the whole page. */
export function SmoothScroll() {
  useReveal();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    let raf = 0;
    function loop(time: number) {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    }
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return null;
}
