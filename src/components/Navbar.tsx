"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { MENU_LINKS, MENU_META, NAV_LINKS } from "@/lib/content";
import { useReveal } from "@/context/RevealContext";
import { scrollToTop } from "@/lib/smooth-scroll";
import { cn } from "@/lib/utils";

const OVERLAY_LINKS = MENU_LINKS.filter((link) => link.label !== "404");

/**
 * Resolve in-page hash links (e.g. "#about") to home-relative ones ("/#about")
 * so the nav works from any route, not just the homepage. Plain "#" goes home.
 */
function navHref(href: string) {
  if (href === "#") return "/";
  if (href.startsWith("#")) return `/${href}`;
  return href;
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const { isRevealed } = useReveal();
  const pathname = usePathname();

  // Trigger the blur only once the user scrolls down past the top.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Spotlight: when any overlay item is hovered, others dim to grey.
  const spotlight = (key: string) => ({
    color: hovered === null || hovered === key ? "#0a0a0a" : "#aaaaaa",
    transition: "color 0.2s ease",
  });
  const onHover = (key: string) => ({
    onMouseEnter: () => setHovered(key),
  });

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <motion.header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter] duration-700 ease-in-out",
          scrolled
            ? "bg-[#f5f5f5]/70 backdrop-blur-md"
            : "bg-[#f5f5f5] backdrop-blur-0",
        )}
        initial={{ y: -100, opacity: 0 }}
        animate={isRevealed ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >
        <div className="mx-auto flex h-[88px] max-w-[1296px] items-center justify-between px-6">
          <Link
            href="/"
            aria-label="O.REDWAN — home"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                scrollToTop();
              }
            }}
            className="flex items-center"
          >
            <Image
              src="/images/o-redwan-logo.svg"
              alt="O.REDWAN"
              width={511}
              height={77}
              priority
              className="h-[22px] w-auto"
            />
          </Link>

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-16 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={navHref(link.href)}
                className="group relative text-base font-medium text-[#0a0a0a]"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-[#0a0a0a] transition-transform duration-300 ease-in group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <MenuButton
            isOpen={isMenuOpen}
            onClick={() => setIsMenuOpen((v) => !v)}
          />
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[9998] flex flex-col bg-[#f0f0f0]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Top bar */}
            <div className="mx-auto flex h-[88px] w-full max-w-[1296px] flex-shrink-0 items-center justify-between px-6">
              <Link
                href="/"
                onClick={(e) => {
                  setIsMenuOpen(false);
                  if (pathname === "/") {
                    e.preventDefault();
                    scrollToTop();
                  }
                }}
                aria-label="O.REDWAN — home"
                className="flex items-center"
              >
                <Image
                  src="/images/o-redwan-logo.svg"
                  alt="O.REDWAN"
                  width={511}
                  height={77}
                  className="h-[22px] w-auto"
                />
              </Link>
              <MenuButton isOpen onClick={() => setIsMenuOpen(false)} />
            </div>

            {/* Center links */}
            <nav className="flex flex-1 flex-col items-center justify-center gap-[10px] text-center">
              {OVERLAY_LINKS.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={navHref(link.href)}
                  onClick={() => setIsMenuOpen(false)}
                  {...onHover(`link-${link.label}`)}
                  style={spotlight(`link-${link.label}`)}
                  className="text-[clamp(2.5rem,7vw,4.5rem)] font-extrabold leading-[1.1]"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{
                    y: 30,
                    opacity: 0,
                    transition: {
                      duration: 0.25,
                      ease: [0.16, 1, 0.3, 1],
                      delay: (OVERLAY_LINKS.length - 1 - index) * 0.05,
                    },
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.15 + index * 0.07,
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            {/* Bottom footer */}
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-10 py-6 text-[13px]">
              <a href={MENU_META[0].href} {...onHover("email")} style={spotlight("email")}>
                {MENU_META[0].label}
              </a>
              <div className="flex items-center gap-6">
                {MENU_META.slice(1).map((m) => (
                  <a
                    key={m.label}
                    href={m.href}
                    {...onHover(`meta-${m.label}`)}
                    style={spotlight(`meta-${m.label}`)}
                  >
                    {m.label}
                  </a>
                ))}
              </div>
              <span {...onHover("copyright")} style={spotlight("copyright")}>
                © 2026 O.redwan
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MenuButton({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) {
  const lineTransition = { duration: 0.3, ease: "easeInOut" } as const;

  return (
    <button
      type="button"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      onClick={onClick}
      className="relative z-[9999] rounded-[12px] bg-[#0a0a0a] px-6 py-[18px] transition-transform active:scale-95"
    >
      <div className="flex flex-col items-center justify-center gap-[5px]">
        <motion.span
          className="h-[2px] w-[28px] origin-center rounded-[2px] bg-white"
          animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
          transition={lineTransition}
        />
        <motion.span
          className="h-[2px] w-[28px] origin-center rounded-[2px] bg-white"
          animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
          transition={lineTransition}
        />
        <motion.span
          className="h-[2px] w-[28px] origin-center rounded-[2px] bg-white"
          animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
          transition={lineTransition}
        />
      </div>
    </button>
  );
}
