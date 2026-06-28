"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { useReveal } from "@/hooks/use-reveal";
import { setLenis } from "@/lib/smooth-scroll";

/** Initializes Lenis smooth scroll for the whole page. */
export function SmoothScroll() {
  useReveal();

  useEffect(() => {
    // Stop the browser from restoring the previous scroll position on refresh
    // so the page always reloads at the top with the reveal animation.
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    setLenis(lenis);
    lenis.scrollTo(0, { immediate: true });

    let raf = 0;
    function loop(time: number) {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    }
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  return null;
}
