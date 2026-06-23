import Image from "next/image";
import { BLOG_POSTS } from "@/lib/content";
import { PlusCircle } from "@/components/icons";

export function BlogSection() {
  return (
    <section id="blog" className="bg-[#f5f5f5] py-24 md:py-32">
      <div className="mx-auto max-w-[1296px] px-6">
        <div className="reveal flex items-center gap-3 text-base font-medium text-[#0a0a0a]">
          <PlusCircle className="h-5 w-5 text-[#0a0a0a]" />
          <span>From the journal</span>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-3">
          {BLOG_POSTS.map((post, i) => (
            <article
              key={post.title}
              className={i === 1 ? "reveal md:mt-0" : "reveal"}
            >
              <a href="#" className="group block">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
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
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
