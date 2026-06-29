import type Lenis from "lenis";

let lenis: Lenis | null = null;

/** Registers the active Lenis instance (called by SmoothScroll). */
export function setLenis(instance: Lenis | null) {
  lenis = instance;
}

/** easeInOutCubic — slow start, slow end. */
const easeInOut = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

/** Removes any hash from the URL without scrolling or adding a history entry. */
function clearHash() {
  if (typeof window === "undefined" || !window.location.hash) return;
  window.history.replaceState(
    null,
    "",
    window.location.pathname + window.location.search,
  );
}

/** Smoothly scrolls to the top (hero) with an ease-in-out curve. */
export function scrollToTop() {
  // Drop the hash (e.g. #contact) so a later refresh lands on the hero.
  clearHash();
  if (lenis) {
    lenis.scrollTo(0, { duration: 1.4, easing: easeInOut });
  } else if (typeof window !== "undefined") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

/** Smoothly scrolls to a hash target (e.g. "#contact"), using Lenis if active. */
export function scrollToHash(hash: string) {
  if (!hash || hash === "#") return;
  const el = document.querySelector(hash);
  if (!el) return;
  if (lenis) {
    lenis.scrollTo(el as HTMLElement, { duration: 1.2, easing: easeInOut });
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
}
