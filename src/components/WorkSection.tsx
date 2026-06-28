"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useMotionValue } from "motion/react";
import { PROJECTS } from "@/lib/content";
import { CustomCursor } from "@/components/CustomCursor";

export function WorkSection() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const [cursorVisible, setCursorVisible] = useState(false);

  return (
    <section
      id="work"
      onMouseEnter={() => setCursorVisible(true)}
      onMouseLeave={() => setCursorVisible(false)}
      onMouseMove={(e) => {
        x.set(e.clientX - 40);
        y.set(e.clientY - 40);
      }}
      style={{ cursor: cursorVisible ? "none" : undefined }}
      className="bg-[#f5f5f5] pt-24 pb-12 md:pt-32 md:pb-16"
    >
      <div className="mx-auto max-w-[1296px] px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="reveal max-w-[640px] text-[clamp(2.75rem,6vw,5rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
            Projects I&rsquo;m <span className="heading-muted">proud of</span>
          </h2>
          <p className="reveal max-w-[440px] text-balance text-[27px] font-medium leading-snug text-[var(--muted-foreground)] md:text-right">
            This is how I think, how I work, and what I leave behind.
          </p>
        </div>

        {/* One unified mosaic block: rounded + clipped, hairline dividers */}
        <div className="mt-16 flex flex-col gap-5 overflow-hidden rounded-[20px]">
          {/* Top row: 1.4 / 1, height 320px */}
          <div className="flex gap-5">
            <ProjectCard
              project={getProject("studiolink")}
              index={0}
              className="h-[320px] flex-[1.4]"
            />
            <ProjectCard
              project={getProject("zentrox")}
              index={1}
              className="h-[320px] flex-[1]"
            />
          </div>
          {/* Bottom row: 1 / 1.8, height 400px */}
          <div className="flex gap-5">
            <ProjectCard
              project={getProject("corehue")}
              index={2}
              className="h-[400px] flex-[1]"
            />
            <ProjectCard
              project={getProject("elevana")}
              index={3}
              className="h-[400px] flex-[1.8]"
            />
          </div>
        </div>
      </div>
      <CustomCursor x={x} y={y} visible={cursorVisible} />
    </section>
  );
}

function getProject(slug: string): (typeof PROJECTS)[number] {
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) throw new Error(`Unknown project slug: ${slug}`);
  return project;
}

const cardVariants = {
  hidden: { scale: 0.92, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      delay: i * 0.1,
    },
  }),
};

const imageVariants = {
  visible: { scale: 1, filter: "blur(0px)" },
  hover: { scale: 1.05, filter: "blur(4px)" },
};

const logoVariants = {
  visible: { scale: 1 },
  hover: { scale: 1.1 },
};

function ProjectCard({
  project,
  index,
  className,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
  className: string;
}) {
  return (
    <motion.a
      href="#"
      className={`group relative block overflow-hidden rounded-2xl bg-[#0a0a0a] ${className}`}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-80px" }}
    >
      <motion.div
        className="absolute inset-0"
        variants={imageVariants}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </motion.div>
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        variants={logoVariants}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <Image
          src={project.logo}
          alt={`${project.name} logo`}
          width={project.logoWidth}
          height={Math.round((project.logoWidth * 45) / 250)}
          className="h-auto w-auto max-w-[45%] object-contain drop-shadow"
        />
      </motion.div>
    </motion.a>
  );
}
