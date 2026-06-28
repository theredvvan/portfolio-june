"use client";

import { useEffect, useRef, useState } from "react";
import { BlurRevealImage } from "@/components/BlurRevealImage";
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
    <section id="about" className="bg-[#f5f5f5]">
      <div className="mx-auto max-w-[1296px] px-10 py-20">
        {/* Image (left) + label & heading (right), top-aligned */}
        <div className="reveal flex flex-col items-start gap-10 md:flex-row">
          <div className="relative aspect-[592/520] w-full overflow-hidden rounded-2xl md:w-[45%]">
            <BlurRevealImage
              src="/images/about-portrait.png"
              alt="About O.REDWAN"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="self-start md:w-[55%]">
            {/* Label row */}
            <div className="flex items-center gap-3 text-[14px] font-medium text-[#0a0a0a]">
              <PlusCircle className="h-5 w-5 text-[#0a0a0a]" />
              <span>About us</span>
            </div>

            {/* Heading */}
            <h2 className="mt-6 max-w-[380px] text-[clamp(20px,2.5vw,28px)] font-medium leading-[1.4] text-[#0a0a0a]">
              A creative agency is a company that provides specialized services
              to help businesses build and promote.
            </h2>

            {/* Secondary body text — directly under the heading */}
            <p className="mt-10 max-w-[280px] text-[15px] leading-[1.6] text-[#555]">
              We turn ideas into visuals that speak with purpose. We&apos;re here
              to bring your vision to life.
            </p>
          </div>
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
