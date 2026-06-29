"use client";

import { useMemo, useState } from "react";
import { ARTICLES } from "@/data/articles";
import { ArticleCard } from "@/components/ArticleCard";
import { cn } from "@/lib/utils";

export function BlogIndex() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(ARTICLES.map((a) => a.category)))],
    [],
  );
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? ARTICLES
      : ARTICLES.filter((a) => a.category === active);

  return (
    <>
      {/* Filter tabs */}
      <div className="mt-12 flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={cn(
              "rounded-full px-5 py-2 text-sm font-medium transition-colors",
              active === category
                ? "bg-[#0a0a0a] text-white"
                : "bg-[#0a0a0a]/[0.06] text-[#0a0a0a] hover:bg-[#0a0a0a]/[0.1]",
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Article grid */}
      <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((article, i) => (
          <ArticleCard
            key={article.slug}
            article={article}
            index={i}
            showExcerpt
          />
        ))}
      </div>
    </>
  );
}
