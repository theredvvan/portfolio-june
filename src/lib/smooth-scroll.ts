import type Lenis from "lenis";

let lenis: Lenis | null = null;

/** Registers the active Lenis instance (called by SmoothScroll). */
export function setLenis(instance: Lenis | null) {
  lenis = instance;
}

/** easeInOutCubic — slow start, slow end. */
const easeInOut = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

/** Smoothly scrolls to the top (hero) with an ease-in-out curve. */
export function scrollToTop() {
  if (lenis) {
    lenis.scrollTo(0, { duration: 1.4, easing: easeInOut });
  } else if (typeof window !== "undefined") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
