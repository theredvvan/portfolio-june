"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { BlurRevealImage } from "@/components/BlurRevealImage";
import { SERVICES } from "@/lib/content";
import { cn } from "@/lib/utils";

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "O.REDWAN",
  description:
    "Creative studio offering branding, funnels, content & social media, and automation services.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: SERVICES.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
      },
    })),
  },
};

export function ServiceSection() {
  const [active, setActive] = useState(0);

  return (
    <section
      aria-labelledby="services-heading"
      className="bg-[#0a0a0a] py-24 text-white md:py-32"
    >
      <h2 id="services-heading" className="sr-only">
        Services
      </h2>
      <div className="mx-auto grid max-w-[1296px] grid-cols-1 gap-12 px-6 lg:grid-cols-[1fr_360px] lg:gap-20">
        {/* Service list */}
        <ul className="reveal flex flex-col">
          {SERVICES.map((service, i) => {
            const isActive = i === active;
            return (
              <li
                key={service.id}
                className="border-b border-white/10 first:border-t-0"
              >
                <h3 className="m-0">
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-pressed={isActive}
                    className="group block w-full py-6 text-left"
                  >
                    <span
                      className={cn(
                        // Base (resting) timing controls the hover-OUT — long & smooth.
                        "inline-block origin-left text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-none tracking-[-0.02em] transition-[color,transform] duration-1000 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]",
                        isActive
                          ? "scale-105 text-white"
                          : // group-hover timing controls the hover-IN — lazy & delayed.
                            "text-white/25 group-hover:scale-105 group-hover:text-white/70 group-hover:delay-150 group-hover:duration-[900ms] group-hover:[transition-timing-function:cubic-bezier(0.16,1,0.3,1)]",
                      )}
                    >
                      {service.title}
                      <span
                        className={cn(
                          "ml-3 align-baseline text-xl font-medium transition-colors duration-300",
                          isActive
                            ? "text-white"
                            : "text-white/25 group-hover:text-white/70",
                        )}
                      >
                        {service.number}
                      </span>
                    </span>
                  </button>
                </h3>
              </li>
            );
          })}
        </ul>

        {/* Active card — all kept in the DOM for crawlability, stacked in one
            grid cell so they crossfade with a blur when switching. */}
        <div className="reveal grid lg:pt-2">
          {SERVICES.map((service, i) => {
            const isActive = i === active;
            return (
              <motion.div
                key={service.id}
                className="[grid-area:1/1]"
                initial={false}
                animate={
                  isActive
                    ? { opacity: 1, filter: "blur(0px)" }
                    : { opacity: 0, filter: "blur(12px)" }
                }
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                style={{ pointerEvents: isActive ? "auto" : "none" }}
                aria-hidden={!isActive}
              >
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
                  <BlurRevealImage
                    src={service.image}
                    alt={service.alt}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <p className="mt-6 text-sm text-white/40">{service.label}</p>
                <p className="mt-3 text-lg leading-relaxed text-white/90">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
    </section>
  );
}
