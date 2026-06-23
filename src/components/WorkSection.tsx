import Image from "next/image";
import { PROJECTS } from "@/lib/content";

export function WorkSection() {
  return (
    <section id="work" className="bg-[#f5f5f5] py-24 md:py-32">
      <div className="mx-auto max-w-[1296px] px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="reveal max-w-[640px] text-[clamp(2.75rem,6vw,5rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
            Projects we&rsquo;re <span className="heading-muted">proud of</span>
          </h2>
          <p className="reveal max-w-[320px] text-lg leading-relaxed text-[var(--muted-foreground)] md:text-right">
            A curated collection of projects that showcase my approach to design
            blending creativity.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <a
              key={project.slug}
              href="#"
              className="reveal group relative block aspect-[592/469] overflow-hidden rounded-2xl bg-[#0a0a0a]"
            >
              <Image
                src={project.image}
                alt={project.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src={project.logo}
                  alt={`${project.name} logo`}
                  width={project.logoWidth}
                  height={Math.round((project.logoWidth * 45) / 250)}
                  className="h-auto w-auto max-w-[45%] object-contain drop-shadow"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
