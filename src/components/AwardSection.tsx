import Image from "next/image";
import { CERTIFICATES } from "@/lib/content";
import { ArrowUpRight } from "@/components/icons";

export function AwardSection() {
  return (
    <section className="bg-[#f5f5f5] py-24 md:py-32">
      <div className="mx-auto max-w-[1296px] px-6">
        <h2 className="reveal text-[clamp(2.75rem,7vw,6rem)] font-semibold leading-none tracking-[-0.03em]">
          The learning <span className="heading-muted">never stops.</span>
        </h2>

        <ul className="mt-16 border-t border-[var(--border)]">
          {CERTIFICATES.map((cert, i) => (
            <li
              key={`${cert.title}-${i}`}
              className="border-b border-[var(--border)]"
            >
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="reveal group grid cursor-pointer grid-cols-[80px_1fr_auto] items-center gap-6 py-7 transition-colors hover:bg-[rgba(0,0,0,0.03)] md:grid-cols-[120px_1fr_1fr_auto]"
              >
                <Image
                  src={cert.logo}
                  alt={`${cert.org} logo`}
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain"
                />
                <div>
                  <p className="text-lg font-medium text-[#0a0a0a] md:text-xl">
                    {cert.title}
                  </p>
                  <p className="mt-1 text-[13px] text-[var(--muted-foreground)]">
                    {cert.date}
                  </p>
                </div>
                <span className="hidden text-lg text-[var(--muted-foreground)] md:block">
                  {cert.org}
                </span>
                <ArrowUpRight className="h-6 w-6 text-[#0a0a0a] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
