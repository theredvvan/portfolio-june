import Image from "next/image";

const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
  { label: "Projects", href: "/#work" },
  { label: "Blog", href: "/#blog" },
];

export function Footer() {
  return (
    <footer className="bg-[#f5f5f5]">
      <div className="mx-auto max-w-[1296px] px-6 py-20">
        <div className="reveal grid grid-cols-1 gap-12 md:grid-cols-2">
          <a href="#" aria-label="O.REDWAN — home" className="block">
            <Image
              src="/images/o-redwan-logo.svg"
              alt="O.REDWAN"
              width={511}
              height={77}
              className="h-auto w-full max-w-[560px]"
            />
          </a>

          <nav className="flex flex-wrap gap-8 md:justify-end md:self-end">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-base text-[#0a0a0a] transition-opacity hover:opacity-60"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#0a0a0a] text-white">
        <div className="mx-auto w-full max-w-[1296px] px-6 py-6 text-center text-sm">
          © 2026 O.REDWAN. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
