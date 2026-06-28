"use client";

import Image from "next/image";
import { motion } from "motion/react";

interface ClientTestimonial {
  quote: string;
  name: string;
  title: string;
  photo: string;
  logo: string;
}

const testimonials: ClientTestimonial[] = [
  {
    quote:
      "Redwan is a team player and an empathetic creator. He takes direction well but has the ability to offer his own strategies and ideas.",
    name: "RichUx",
    title: "CEO of Rich+Niche Marketing Academy",
    photo: "/images/testimonial-richux.png",
    logo: "/images/logo-rich-niche.png",
  },
  {
    quote:
      "I was amazed by how creative and high-quality the designs were. The work that he did improved my brand image.",
    name: "Tal Koren",
    title: "Digital Marketer",
    photo: "/images/talkoren.jpeg",
    logo: "/images/Clicks4you_blue.png",
  },
];

export function Testimonial() {
  return (
    <section className="bg-[#f5f5f5] pt-12 pb-24 md:pt-16 md:pb-32">
      <div className="mx-auto grid max-w-[1296px] grid-cols-1 gap-12 px-6 md:grid-cols-2 md:gap-16">
        {/* Left column — sticky, vertically centered on desktop */}
        <div className="self-start md:sticky md:top-1/2 md:h-fit md:-translate-y-1/2">
          <h2 className="reveal text-[clamp(2.75rem,6vw,5rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
            What Clients <span className="heading-muted">say</span>
          </h2>
        </div>

        {/* Right column — testimonials scroll past naturally */}
        <div className="flex flex-col gap-[60px]">
          {testimonials.map((item) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col justify-center"
            >
              {/* Avatar: person photo + company logo overlapping */}
              <div className="relative h-16 w-[6.3625rem]">
                <div className="absolute left-0 top-0 z-[1] h-16 w-16 overflow-hidden rounded-full ring-2 ring-[#f5f5f5]">
                  <Image
                    src={item.photo}
                    alt={item.name}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div className="absolute left-[37.8px] top-0 z-[2] flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border-2 border-[#9ca3af] bg-white">
                  <Image
                    src={item.logo}
                    alt={`${item.name} company logo`}
                    width={64}
                    height={64}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <blockquote className="mt-8 max-w-[640px] text-[clamp(1.44rem,2.34vw,2.16rem)] font-semibold leading-[1.25] tracking-[-0.01em] text-[#0a0a0a]">
                {item.quote}
              </blockquote>

              <div className="mt-8">
                <p className="text-lg font-medium text-[#0a0a0a]">{item.name}</p>
                <p className="mt-1 text-base font-light text-[var(--muted-foreground)]">
                  {item.title}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
