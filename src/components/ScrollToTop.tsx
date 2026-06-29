"use client";

import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    // On any page load/refresh, instantly jump to top before anything renders.
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    // Strip any hash (e.g. #contact) on a full load/refresh so refreshing
    // always lands on the hero instead of deep-linking back to a section.
    if (window.location.hash) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search,
      );
    }
    window.scrollTo(0, 0);
  }, []);

  return null;
}
