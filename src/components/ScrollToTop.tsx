"use client";

import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    // On any page load/refresh, instantly jump to top before anything renders.
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  return null;
}
