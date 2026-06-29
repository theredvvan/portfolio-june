"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { useReveal } from "@/hooks/use-reveal";
import { useHashScroll } from "@/hooks/useHashScroll";
import { setLenis } from "@/lib/smooth-scroll";

/** Initializes Lenis smooth scroll for the whole page. */
export function SmoothScroll() {
  useReveal();
  useHashScroll();

  useEffect(() => {
    // Stop the browser from restoring the previous scroll position on refresh
    // so the page always reloads at the top with the reveal animation. Skip the
    // reset when there's a hash, so /#contact-style links can scroll to it.
    const hasHash = window.location.hash && window.location.hash !== "#";
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    if (!hasHash) {
      window.scrollTo(0, 0);
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    setLenis(lenis);
    if (!hasHash) {
      lenis.scrollTo(0, { immediate: true });
    }

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
