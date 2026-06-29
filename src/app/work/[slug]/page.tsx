import type { Metadata } from "next";
import { Fragment } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { BlurRevealImage } from "@/components/BlurRevealImage";
import { FadeIn } from "@/components/FadeIn";
import { PROJECTS, getProject } from "@/data/projects";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const description = `${project.category} · ${project.excerpt}`;
  return {
    title: `${project.title} — Work — O.REDWAN`,
    description,
    openGraph: {
      title: project.title,
      description,
      type: "article",
      images: [{ url: project.coverImage, alt: project.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description,
      images: [project.coverImage],
    },
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const next = getProject(project.nextProject);

  const sections = [
    { num: "01", heading: "The Challenge", body: project.challenge },
    { num: "02", heading: "The Approach", body: project.approach },
    { num: "03", heading: "The Outcome", body: project.outcome },
  ];

  return (
    <>
      <SmoothScroll />
      <Navbar />

      <main className="bg-[#f5f5f5]">
        {/* Hero */}
        <section className="relative h-[90vh] w-full overflow-hidden">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-[#0a0a0a]/10 to-transparent" />

          {/* Top-left: back button + tag (offset to clear the navbar) */}
          <div className="absolute left-6 top-28 flex flex-col items-start gap-4 md:left-12">
            <Link
              href="/#work"
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              ← Work
            </Link>
            <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
              {project.category} · {project.year}
            </span>
          </div>

          {/* Bottom-left: title */}
          <div className="absolute inset-x-0 bottom-0 px-6 pb-10 md:px-12 md:pb-12">
            <h1 className="max-w-[1296px] text-[clamp(40px,6vw,80px)] font-bold leading-[1.02] tracking-[-0.03em] text-white">
              {project.title}
            </h1>
          </div>
        </section>

        {/* Project info row */}
        <section className="mx-auto max-w-[1296px] px-6 py-12 md:py-16">
          <div className="grid grid-cols-3 divide-x divide-[var(--border)]">
            <InfoCol label="Client" value={project.client} className="pr-6" />
            <InfoCol
              label="Category"
              value={project.category}
              className="px-6"
            />
            <InfoCol label="Year" value={project.year} className="px-6" />
          </div>
        </section>

        {/* Case study body, with large images flowing inside the article */}
        <section className="py-12 md:py-16">
          <div className="flex flex-col gap-16 md:gap-24">
            {sections.map((s, idx) => (
              <Fragment key={s.num}>
                <FadeIn className="mx-auto w-full max-w-[800px] px-6">
                  <p className="text-sm font-medium text-[var(--muted-foreground)]">
                    {s.num}
                  </p>
                  <h2 className="mt-3 text-[clamp(1.75rem,4vw,2.5rem)] font-semibold tracking-[-0.02em] text-[#0a0a0a]">
                    {s.heading}
                  </h2>
                  <p className="mt-5 text-[18px] leading-[1.8] text-[#333]">
                    {s.body}
                  </p>
                </FadeIn>
                {project.gallery[idx] && (
                  <div className="mx-auto w-full max-w-[1100px] px-6">
                    <BlurRevealImage
                      src={project.gallery[idx]}
                      alt={`${project.title} — image ${idx + 1}`}
                      className="w-full rounded-[12px]"
                    />
                  </div>
                )}
              </Fragment>
            ))}

            {/* Any remaining images beyond the sections */}
            {project.gallery.slice(sections.length).map((src, i) => (
              <div
                key={src + i}
                className="mx-auto w-full max-w-[1100px] px-6"
              >
                <BlurRevealImage
                  src={src}
                  alt={`${project.title} — image ${sections.length + i + 1}`}
                  className="w-full rounded-[12px]"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Next project */}
        {next && (
          <Link
            href={`/work/${next.slug}`}
            className="group relative block overflow-hidden bg-[#0a0a0a]"
          >
            <Image
              src={next.coverImage}
              alt={next.title}
              fill
              sizes="100vw"
              className="object-cover opacity-30 transition-all duration-500 group-hover:opacity-40 group-hover:brightness-110"
            />
            <div className="absolute inset-0 bg-[#0a0a0a]/50" />
            <div className="relative mx-auto max-w-[1296px] px-6 py-28 text-center md:py-40">
              <p className="text-sm font-medium uppercase tracking-[0.15em] text-white/60">
                Next Project
              </p>
              <h2 className="mt-4 inline-block text-[clamp(2.5rem,7vw,6rem)] font-semibold leading-none tracking-[-0.03em] text-white underline-offset-[12px] group-hover:underline">
                {next.title}
              </h2>
            </div>
          </Link>
        )}
      </main>

      <Footer />
    </>
  );
}

function InfoCol({
  label,
  value,
  className = "",
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="text-sm text-[var(--muted-foreground)]">{label}</p>
      <p className="mt-2 text-lg font-medium text-[#0a0a0a] md:text-xl">
        {value}
      </p>
    </div>
  );
}
