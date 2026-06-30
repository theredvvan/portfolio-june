/**
 * Article data layer. Single source of truth for the blog — homepage preview,
 * blog index, and individual article pages all read from here. Content is
 * stored as typed structured blocks (no markdown/CMS dependency) so it renders
 * with the site's own styling and is easy to migrate to a CMS later.
 */

export type ArticleBlock =
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] }
  | { type: "image"; src: string; alt: string };

export interface Article {
  /** URL-friendly identifier (used in /blog/[slug]) */
  slug: string;
  title: string;
  category: string;
  /** ISO date (YYYY-MM-DD) — formatted for display via formatDate() */
  date: string;
  /** estimated read time in minutes */
  readTime: number;
  excerpt: string;
  coverImage: string;
  content: ArticleBlock[];
  tags: string[];
}

export const AUTHOR = {
  name: "Redwan Outhouna",
  avatar: "/images/redwan.png",
} as const;

export const ARTICLES: Article[] = [
  {
    slug: "brand-manipulation-how-brands-manipulate-you-to-buy-more-stuff",
    title: "Brand manipulation: how brands manipulate you to buy more stuff",
    category: "Marketing",
    date: "2024-05-04",
    readTime: 3,
    excerpt:
      "We like to think we're in control of our purchasing decisions, but brands use sophisticated tactics and psychological manipulation to influence us and pull more money out of our wallets.",
    coverImage: "/images/brand manipulation.png",
    tags: ["marketing", "branding", "psychology"],
    content: [
      {
        type: "paragraph",
        text: "We like to think we're in full control of our purchasing decisions, but the reality is far more complex. Brands use sophisticated tactics and subtle psychological manipulation to influence what we do and pull more money out of our wallets. In this article I want to highlight some of these strategies and expose the quiet ways they shape our behavior.",
      },
      {
        type: "heading",
        text: "1. Fear of Missing Out (FOMO)",
      },
      {
        type: "paragraph",
        text: "Have you ever felt that pang of disappointment when a friend shows off something rare or exclusive that you didn't get? Or that urgent desire to buy something before it's gone for good? That's the Fear of Missing Out, and it's a powerful emotion that pushes consumers into impulsive purchases just to avoid feeling left out. Brands manufacture this urgency with limited-time sales, exclusive deals, and artificial scarcity. The message is simple: act now, or miss out forever, and that fear is often enough to make you buy.",
      },
      {
        type: "heading",
        text: "2. Targeting insecurities",
      },
      {
        type: "paragraph",
        text: "We all have insecurities, and brands are experts at finding and exploiting them. Ads for beauty products prey on anxieties about aging or body image; toothpaste brands tie their products to self-confidence and a bright white smile. Nobody wants to feel awkward or judged. By quietly amplifying these insecurities, brands convince us that their product is the thing standing between us and the version of ourselves we're afraid of.",
      },
      {
        type: "image",
        src: "/images/colgate_campaign.webp",
        alt: "Colgate campaign tying the product to confidence and a bright smile",
      },
      {
        type: "heading",
        text: "3. Linking the brand with positive emotions",
      },
      {
        type: "paragraph",
        text: "Brands work hard to associate themselves with positive emotions like happiness, optimism, and joy. Coca-Cola's iconic \"Share a Coke\" campaign and Colgate's \"Free Your Smile\" are prime examples of tying a product to feelings of joy, connection, and shared experience. Through these emotional links, brands become more than products, they turn into symbols of our aspirations and desires.",
      },
      {
        type: "heading",
        text: "4. Design and visual signaling",
      },
      {
        type: "paragraph",
        text: "From logos and colors to packaging and website design, every visual element of a brand is crafted to trigger specific emotions and associations. Luxury brands use sleek, minimalist design to signal exclusivity, while fast-food brands lean on bright colors to project warmth, energy, and happiness. These cues bypass our conscious thinking and speak directly to our desires. Brands even tweak product design purely to look more impressive, notice how large some phone camera modules are. The size often has little to do with performance, and some additions are essentially fake, but they make the product feel more powerful than it really is.",
      },
      {
        type: "image",
        src: "/images/branding-services-redwan-outhouna.png",
        alt: "How visual design and branding shape what we buy",
      },
      {
        type: "heading",
        text: "5. Social proof",
      },
      {
        type: "paragraph",
        text: "Social proof is the influence that other people's behavior has on our own. Humans are social creatures, deeply shaped by the actions and opinions of those around us. Brands tap into this with customer testimonials, influencer endorsements, and \"most popular\" labels. Seeing others enjoy a product creates a sense of validation and trust, making us far more likely to follow the crowd and buy it too.",
      },
      {
        type: "quote",
        text: "Marketing is no longer just about making you buy things you don't need, it's about making you part of a community a brand has built.",
      },
      {
        type: "paragraph",
        text: "Once you understand these tactics, you can become a more conscious consumer. You can question the motivation behind a marketing message and make decisions based on your real needs and values, instead of giving in to the quiet pressure of brand manipulation.",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

/** Format an ISO date (YYYY-MM-DD) as e.g. "Jan 15, 2025". */
export function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
