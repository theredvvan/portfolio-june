"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { STATS } from "@/lib/content";
import { PlusCircle } from "@/components/icons";
import type { Stat } from "@/types";

function CountUp({ stat }: { stat: Stat }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const duration = 1600;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setValue(Math.round(eased * stat.value));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [stat.value]);

  return (
    <span ref={ref}>
      {value}
      {stat.suffix}
    </span>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="bg-[#f5f5f5] py-24 md:py-32">
      <div className="mx-auto max-w-[1296px] px-6">
        <div className="reveal flex items-center gap-3 text-base font-medium text-[var(--muted-foreground)]">
          <PlusCircle className="h-5 w-5 text-[#0a0a0a]" />
          <span>About us</span>
        </div>

        <h2 className="reveal mt-8 max-w-[680px] text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.15] tracking-[-0.02em]">
          A creative agency is a company that provides specialized services to
          help businesses build and promote.
        </h2>

        <div className="mt-20 grid grid-cols-1 items-end gap-10 md:grid-cols-2">
          <div className="reveal relative aspect-[592/520] w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/about-portrait.png"
              alt="About Norell"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <p className="reveal max-w-[420px] text-[clamp(1.25rem,2vw,1.75rem)] font-medium leading-snug text-[#0a0a0a] md:pb-6">
            We turn ideas into visuals that speak with purpose. We&apos;re here to
            bring your vision to life.
          </p>
        </div>

        <div className="mt-24 grid grid-cols-2 gap-y-12 border-t border-[var(--border)] pt-16 md:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="reveal">
              <p className="text-[clamp(3.5rem,7vw,5.5rem)] font-semibold leading-none tracking-[-0.03em]">
                <CountUp stat={stat} />
              </p>
              <p className="mt-4 max-w-[200px] text-base text-[var(--muted-foreground)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
