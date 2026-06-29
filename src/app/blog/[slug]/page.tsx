import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ArticleContent } from "@/components/ArticleContent";
import { ArticleCard } from "@/components/ArticleCard";
import { ShareBar } from "@/components/ShareBar";
import { CategoryPill } from "@/components/CategoryPill";
import { ARTICLES, AUTHOR, formatDate, getArticle } from "@/data/articles";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  return {
    title: `${article.title} — O.REDWAN`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      images: [{ url: article.coverImage, alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.coverImage],
    },
  };
}

export default async function ArticlePage({ params }: Params) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const upNext = ARTICLES.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <>
      <SmoothScroll />
      <Navbar />

      <main className="bg-[#f5f5f5] pb-24 md:pb-32">
        {/* Full-width cover */}
        <div className="relative h-[480px] w-full overflow-hidden">
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent" />
        </div>

        {/* Article column */}
        <article className="mx-auto max-w-[720px] px-6 pt-12">
          <header>
            <CategoryPill category={article.category} />
            <h1 className="mt-5 text-[clamp(32px,5vw,56px)] font-semibold leading-[1.05] tracking-[-0.03em] text-[#0a0a0a]">
              {article.title}
            </h1>

            {/* Meta row */}
            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[var(--muted-foreground)]">
              <span className="flex items-center gap-2">
                <span className="relative h-8 w-8 overflow-hidden rounded-full">
                  <Image
                    src={AUTHOR.avatar}
                    alt={AUTHOR.name}
                    fill
                    sizes="32px"
                    className="object-cover"
                  />
                </span>
                <span className="font-medium text-[#0a0a0a]">{AUTHOR.name}</span>
              </span>
              <span aria-hidden>·</span>
              <span>{formatDate(article.date)}</span>
              <span aria-hidden>·</span>
              <span>{article.readTime} min read</span>
            </div>
          </header>

          {/* Body */}
          <ArticleContent blocks={article.content} />

          {/* Share */}
          <ShareBar title={article.title} />
        </article>

        {/* Up next */}
        {upNext.length > 0 && (
          <section className="mx-auto mt-24 max-w-[1296px] px-6 md:mt-32">
            <h2 className="reveal text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-none tracking-[-0.03em]">
              Keep <span className="heading-muted">reading.</span>
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2">
              {upNext.map((next, i) => (
                <ArticleCard key={next.slug} article={next} index={i} />
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}
