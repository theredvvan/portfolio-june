import { FOOTER_COLUMNS } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-[#f5f5f5]">
      <div className="mx-auto max-w-[1296px] px-6 py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <a href="#" className="text-[clamp(4rem,12vw,11rem)] font-medium leading-none tracking-tight text-[#0a0a0a]">
            norell<sup className="top-[-0.6em] text-[0.25em]">®</sup>
          </a>

          <div className="grid grid-cols-3 gap-6 md:justify-items-end md:self-end">
            {FOOTER_COLUMNS.map((column, i) => (
              <ul key={i} className="flex flex-col gap-4">
                {column.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-base text-[#0a0a0a] transition-opacity hover:opacity-60"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#0a0a0a] text-white">
        <div className="mx-auto flex max-w-[1296px] flex-col items-center justify-between gap-4 px-6 py-6 text-sm sm:flex-row">
          <span>© 2025 norell, Inc. All rights reserved.</span>
          <div className="flex gap-8">
            <a href="#" className="hover:opacity-70">Terms &amp; conditions</a>
            <a href="#" className="hover:opacity-70">Privacy policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
