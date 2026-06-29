import Link from "next/link";
import { BlurRevealImage } from "@/components/BlurRevealImage";
import { ARTICLES } from "@/data/articles";
import { ArrowUpRight, PlusCircle } from "@/components/icons";

export function BlogSection() {
  const posts = ARTICLES.slice(0, 3);

  return (
    <section id="blog" className="bg-[#f5f5f5] py-24 md:py-32">
      <div className="mx-auto max-w-[1296px] px-6">
        <div className="reveal flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-base font-medium text-[#0a0a0a]">
            <PlusCircle className="h-5 w-5 text-[#0a0a0a]" />
            <span>From the journal</span>
          </div>
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-base font-medium text-[#0a0a0a]"
          >
            View all articles
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-3">
          {posts.map((post, i) => (
            <article
              key={post.slug}
              className={i === 1 ? "reveal md:mt-0" : "reveal"}
            >
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
                  <BlurRevealImage
                    src={post.coverImage}
                    alt={post.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div className="mt-6 border-t border-[var(--border)] pt-6">
                  <p className="text-sm text-[var(--muted-foreground)]">
                    {post.category}
                  </p>
                  <h3 className="mt-3 text-2xl font-medium leading-snug tracking-[-0.01em] text-[#0a0a0a] transition-colors group-hover:text-[#f9452d]">
                    {post.title}
                  </h3>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
