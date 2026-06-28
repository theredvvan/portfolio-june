"use client";

import { motion } from "motion/react";
import { PROCESS_STEPS } from "@/lib/content";
import { PlusCircle } from "@/components/icons";

const EASE = [0.16, 1, 0.3, 1] as const;

export function PricingSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1296px] px-6">
        {/* Section label */}
        <div className="reveal flex items-center gap-3 text-base font-medium text-[#0a0a0a]">
          <PlusCircle className="h-5 w-5 text-[#0a0a0a]" />
          <span>How it works</span>
        </div>

        {/* Section headline */}
        <h2 className="reveal mt-6 max-w-[900px] text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
          How we go from idea to impact.
        </h2>

        {/* Process steps — horizontal on desktop, stacked on mobile */}
        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 md:mt-20 md:grid-cols-4 md:gap-8">
          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 28, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1, ease: EASE, delay: i * 0.12 }}
            >
              <span className="block text-[clamp(3rem,5vw,4.5rem)] font-semibold leading-none tracking-[-0.03em] text-[#0a0a0a]/15">
                {step.number}
              </span>
              <h3 className="mt-5 text-xl font-bold tracking-[-0.01em] text-[#0a0a0a]">
                {step.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.6] text-[var(--muted-foreground)]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
