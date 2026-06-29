"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useReveal } from "@/context/RevealContext";
import { scrollToHash } from "@/lib/smooth-scroll";

/**
 * Smooth-scrolls to a URL hash section on the homepage.
 *
 * On a full load/refresh the curtain reveal owns the post-reveal hash scroll
 * (see CurtainReveal). This hook only handles client-side navigations — where
 * the curtain doesn't replay — detected by the reveal already being complete
 * when the homepage mounts.
 */
export function useHashScroll() {
  const pathname = usePathname();
  const { isRevealed } = useReveal();
  const revealedAtMount = useRef(isRevealed);

  useEffect(() => {
    if (pathname !== "/") return;
    if (!revealedAtMount.current) return;

    const hash = window.location.hash;
    if (!hash || hash === "#") return;

    const id = window.setTimeout(() => scrollToHash(hash), 200);
    return () => window.clearTimeout(id);
  }, [pathname]);
}
