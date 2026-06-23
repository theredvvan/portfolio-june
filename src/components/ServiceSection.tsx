"use client";

import { useState } from "react";
import Image from "next/image";
import { SERVICES } from "@/lib/content";
import { cn } from "@/lib/utils";

export function ServiceSection() {
  const [active, setActive] = useState(0);
  const current = SERVICES[active];

  return (
    <section className="bg-[#0a0a0a] py-24 text-white md:py-32">
      <div className="mx-auto grid max-w-[1296px] grid-cols-1 gap-12 px-6 lg:grid-cols-[1fr_360px] lg:gap-20">
        {/* Service list */}
        <ul className="flex flex-col">
          {SERVICES.map((service, i) => {
            const isActive = i === active;
            return (
              <li key={service.id} className="border-b border-white/10 first:border-t-0">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className="flex w-full items-baseline gap-4 py-6 text-left"
                >
                  <span
                    className={cn(
                      "text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-none tracking-[-0.02em] transition-colors duration-300",
                      isActive ? "text-white" : "text-white/25",
                    )}
                  >
                    {service.title}
                  </span>
                  <span
                    className={cn(
                      "text-xl font-medium transition-colors duration-300",
                      isActive ? "text-[#f9452d]" : "text-white/25",
                    )}
                  >
                    {service.number}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        {/* Active card */}
        <div className="lg:pt-2">
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
            <Image
              key={current.image}
              src={current.image}
              alt={current.label}
              fill
              sizes="360px"
              className="animate-[fadeIn_0.4s_ease] object-cover"
            />
          </div>
          <p className="mt-6 text-sm text-white/40">{current.label}</p>
          <p className="mt-3 text-lg leading-relaxed text-white/90">
            {current.description}
          </p>
        </div>
      </div>
    </section>
  );
}
