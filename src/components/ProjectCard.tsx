"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import type { CaseStudy } from "@/data/projects";

const MotionLink = motion.create(Link);

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

export function ProjectCard({
  project,
  index,
  className,
}: {
  project: CaseStudy;
  index: number;
  className: string;
}) {
  return (
    <MotionLink
      href={`/work/${project.slug}`}
      className={`group relative block overflow-hidden rounded-2xl bg-[#0a0a0a] ${className}`}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-80px" }}
    >
      <motion.div
        className="absolute"
        style={{ inset: `${-(project.thumbnailOverscan ?? 0)}px` }}
        variants={imageVariants}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Image
          src={project.thumbnailImage}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </motion.div>
      {project.logo && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          variants={logoVariants}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <Image
            src={project.logo}
            alt={`${project.title} logo`}
            width={project.logoWidth}
            height={Math.round((project.logoWidth * 45) / 250)}
            className="h-auto max-w-[45%] object-contain drop-shadow"
          />
        </motion.div>
      )}
    </MotionLink>
  );
}
