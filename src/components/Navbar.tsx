"use client";

import { useEffect, useState } from "react";
import { MENU_LINKS, MENU_META, NAV_LINKS } from "@/lib/content";
import { cn } from "@/lib/utils";
import { CloseIcon, MenuIcon } from "@/components/icons";

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-[#f5f5f5]">
        <div className="mx-auto flex h-[88px] max-w-[1296px] items-center justify-between px-6">
          <a href="#" className="text-[28px] font-medium tracking-tight text-[#0a0a0a]">
            norell<sup className="top-[-0.7em] text-[14px]">®</sup>
          </a>

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-16 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-base font-medium text-[#0a0a0a] transition-opacity hover:opacity-60"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="flex h-[52px] w-[64px] items-center justify-center rounded-2xl bg-[#0a0a0a] text-white transition-transform active:scale-95"
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Fullscreen menu overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col justify-between overflow-y-auto bg-[#0a0a0a] px-6 pb-10 pt-28 text-white transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          open ? "translate-y-0" : "pointer-events-none -translate-y-full",
        )}
      >
        <nav className="mx-auto flex w-full max-w-[1296px] flex-col">
          {MENU_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="w-fit py-2 text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-tight tracking-tight transition-colors hover:text-[#f9452d]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mx-auto flex w-full max-w-[1296px] flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/60">
          {MENU_META.map((m) => (
            <a key={m.label} href={m.href} className="hover:text-white">
              {m.label}
            </a>
          ))}
          <span>© 2025 norell, Inc.</span>
        </div>
      </div>
    </>
  );
}
