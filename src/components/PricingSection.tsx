"use client";

import { useState } from "react";
import { PRICING_PLANS } from "@/lib/content";
import { cn } from "@/lib/utils";

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0">
    <path
      d="m5 12.5 4.5 4.5L19 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function PricingSection() {
  const [monthly, setMonthly] = useState(false);

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1296px] px-6">
        <h2 className="reveal text-center text-[clamp(3rem,7vw,6rem)] font-semibold leading-none tracking-[-0.03em]">
          Let&rsquo;s find the right fit
        </h2>

        {/* Toggle */}
        <div className="mt-10 flex justify-center">
          <div className="flex items-center rounded-full bg-[#f0f0f0] p-1.5">
            {[
              { label: "Per project", value: false },
              { label: "Monthly", value: true },
            ].map((opt) => (
              <button
                key={opt.label}
                type="button"
                onClick={() => setMonthly(opt.value)}
                className={cn(
                  "rounded-full px-7 py-2.5 text-base font-medium transition-colors",
                  monthly === opt.value
                    ? "bg-white text-[#0a0a0a] shadow-sm"
                    : "text-[#0a0a0a]/70",
                )}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.name}
              className="reveal flex flex-col rounded-3xl bg-[#f5f5f5] p-8 md:p-10"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-baseline gap-1">
                  <span className="text-[clamp(3rem,6vw,5rem)] font-semibold leading-none tracking-[-0.03em]">
                    {monthly ? plan.priceMonthly : plan.pricePerProject}
                  </span>
                  <span className="text-base text-[var(--muted-foreground)]">
                    {plan.unit}
                  </span>
                </div>
                <span
                  className={cn(
                    "rounded-full px-5 py-2.5 text-sm font-medium",
                    plan.badgeVariant === "accent"
                      ? "bg-[#f9452d] text-white"
                      : "bg-[#0a0a0a] text-white",
                  )}
                >
                  {plan.name}
                </span>
              </div>

              <p className="mt-6 max-w-[320px] text-base leading-relaxed text-[var(--muted-foreground)]">
                {plan.description}
              </p>

              <button
                type="button"
                className={cn(
                  "mt-8 w-full rounded-full py-4 text-base font-medium transition-opacity hover:opacity-90",
                  plan.ctaVariant === "dark"
                    ? "bg-[#0a0a0a] text-white"
                    : "bg-white text-[#0a0a0a]",
                )}
              >
                Get in touch
              </button>

              <ul className="mt-8 flex flex-col gap-4 border-t border-[var(--border)] pt-8">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-base text-[#0a0a0a]"
                  >
                    <CheckIcon />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
