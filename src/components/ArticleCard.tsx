"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { CategoryPill } from "@/components/CategoryPill";
import { formatDate, type Article } from "@/data/articles";

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
  visible: { scale: 1 },
  hover: { scale: 1.05 },
};

export function ArticleCard({
  article,
  index = 0,
  showExcerpt = false,
}: {
  article: Article;
  index?: number;
  showExcerpt?: boolean;
}) {
  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-80px" }}
    >
      <Link href={`/blog/${article.slug}`} className="group block">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[#0a0a0a]">
          <motion.div
            className="absolute inset-0"
            variants={imageVariants}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Image
              src={article.coverImage}
              alt={article.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
            />
          </motion.div>
        </div>

        <div className="mt-6 border-t border-[var(--border)] pt-6">
          <CategoryPill category={article.category} />
          <h3 className="mt-4 text-2xl font-medium leading-snug tracking-[-0.01em] text-[#0a0a0a] transition-colors group-hover:text-[#f9452d]">
            {article.title}
          </h3>
          {showExcerpt && (
            <p className="mt-3 text-base leading-relaxed text-[var(--muted-foreground)]">
              {article.excerpt}
            </p>
          )}
          <p className="mt-4 text-sm text-[var(--muted-foreground)]">
            {article.readTime} min read · {formatDate(article.date)}
          </p>
        </div>
      </Link>
    </motion.article>
  );
}
