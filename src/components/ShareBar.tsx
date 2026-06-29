"use client";

import { useState } from "react";
import type { SVGProps } from "react";

export function ShareBar({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  const open = (href: string) =>
    window.open(href, "_blank", "noopener,noreferrer");

  const shareX = () =>
    open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        title,
      )}&url=${encodeURIComponent(window.location.href)}`,
    );

  const shareLinkedIn = () =>
    open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        window.location.href,
      )}`,
    );

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable — ignore */
    }
  };

  const btn =
    "flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[#0a0a0a] transition-colors hover:bg-[#0a0a0a] hover:text-white";

  return (
    <div className="mt-16 flex items-center justify-between gap-4 rounded-full border border-[var(--border)] bg-white px-6 py-3 md:sticky md:bottom-6">
      <span className="text-sm font-medium text-[#0a0a0a]">
        Share this article
      </span>
      <div className="flex items-center gap-2">
        <button type="button" aria-label="Share on X" onClick={shareX} className={btn}>
          <XIcon className="h-4 w-4" />
        </button>
        <button
          type="button"
          aria-label="Share on LinkedIn"
          onClick={shareLinkedIn}
          className={btn}
        >
          <LinkedInIcon className="h-4 w-4" />
        </button>
        <button
          type="button"
          aria-label="Copy link"
          onClick={copyLink}
          className={
            copied
              ? "flex h-10 items-center justify-center rounded-full bg-[#0a0a0a] px-4 text-xs font-medium text-white"
              : btn
          }
        >
          {copied ? "Copied!" : <LinkIcon className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
}

function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
    </svg>
  );
}

function LinkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
