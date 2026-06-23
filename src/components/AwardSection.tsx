import { AWARDS } from "@/lib/content";
import { ArrowUpRight } from "@/components/icons";

export function AwardSection() {
  return (
    <section className="bg-[#f5f5f5] py-24 md:py-32">
      <div className="mx-auto max-w-[1296px] px-6">
        <h2 className="reveal text-[clamp(2.75rem,7vw,6rem)] font-semibold leading-none tracking-[-0.03em]">
          Honors <span className="heading-muted">&amp; achievements</span>
        </h2>

        <ul className="mt-16 border-t border-[var(--border)]">
          {AWARDS.map((award, i) => (
            <li
              key={`${award.year}-${i}`}
              className="reveal group grid grid-cols-[80px_1fr_auto] items-center gap-6 border-b border-[var(--border)] py-7 transition-colors md:grid-cols-[120px_1fr_1fr_auto]"
            >
              <span className="text-lg font-medium text-[#0a0a0a]">{award.year}</span>
              <span className="text-lg font-medium text-[#0a0a0a] md:text-xl">
                {award.title}
              </span>
              <span className="hidden text-lg text-[var(--muted-foreground)] md:block">
                {award.org}
              </span>
              <ArrowUpRight className="h-6 w-6 text-[#0a0a0a] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
