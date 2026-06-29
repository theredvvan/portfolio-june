import { BlurRevealImage } from "@/components/BlurRevealImage";
import type { ArticleBlock } from "@/data/articles";

/**
 * Renders an article's structured content blocks. Server component so the body
 * text is in the initial HTML (SEO); image blocks use the BlurRevealImage
 * client island for the on-scroll reveal.
 */
export function ArticleContent({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="mt-12">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading":
            return (
              <h2
                key={i}
                className="mt-14 mb-5 text-[clamp(1.6rem,3vw,2rem)] font-semibold tracking-[-0.02em] text-[#0a0a0a]"
              >
                {block.text}
              </h2>
            );
          case "subheading":
            return (
              <h3
                key={i}
                className="mt-10 mb-4 text-2xl font-semibold tracking-[-0.01em] text-[#0a0a0a]"
              >
                {block.text}
              </h3>
            );
          case "paragraph":
            return (
              <p key={i} className="mb-7 text-[18px] leading-[1.8] text-[#333]">
                {block.text}
              </p>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="my-10 border-l-4 border-[#0a0a0a] pl-6 text-[18px] italic leading-[1.8] text-[var(--muted-foreground)]"
              >
                {block.text}
              </blockquote>
            );
          case "list":
            return (
              <ul
                key={i}
                className="mb-7 ml-5 list-disc space-y-2 text-[18px] leading-[1.8] text-[#333]"
              >
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            );
          case "image":
            return (
              <figure key={i} className="my-10">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[12px]">
                  <BlurRevealImage
                    src={block.src}
                    alt={block.alt}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </figure>
            );
        }
      })}
    </div>
  );
}
