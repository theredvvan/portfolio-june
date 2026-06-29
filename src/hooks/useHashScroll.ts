"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { scrollToHash } from "@/lib/smooth-scroll";

/**
 * When landing on the homepage with a hash (e.g. navigating from /work/hubwell
 * to /#contact), the section isn't mounted yet when the hash fires. This waits
 * for the homepage to render, then smooth-scrolls to the target section.
 */
export function useHashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;
    const hash = window.location.hash;
    if (!hash || hash === "#") return;

    const id = window.setTimeout(() => scrollToHash(hash), 200);
    return () => window.clearTimeout(id);
  }, [pathname]);
}
