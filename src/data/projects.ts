/**
 * Project / case-study data layer. Single source of truth for the homepage
 * work grid, the work index, and individual case-study pages. No CMS
 * dependency — easy to migrate later.
 */

export interface CaseStudy {
  /** URL-friendly identifier (used in /work/[slug]) */
  slug: string;
  title: string;
  client: string;
  category: string;
  year: string;
  coverImage: string;
  thumbnailImage: string;
  /** px the card image overflows its box on each side (slight overscan) */
  thumbnailOverscan?: number;
  /** brand logo shown over the homepage grid card */
  logo: string;
  logoWidth: number;
  excerpt: string;
  challenge: string;
  approach: string;
  outcome: string;
  gallery: string[];
  tags: string[];
  /** slug of the next project for bottom-of-page navigation */
  nextProject: string;
}

export const PROJECTS: CaseStudy[] = [
  {
    slug: "hubwell",
    title: "Hubwell",
    client: "Hubwell",
    category: "Branding",
    year: "2026",
    coverImage: "/images/projects/hubwell/hubwell_board.webp",
    thumbnailImage: "/images/projects/hubwell/hubwell_cover.png",
    logo: "/images/projects/hubwell/hubwell_logo.svg",
    logoWidth: 200,
    excerpt: "A premium real estate brand built on trust, calm, and quiet confidence.",
    challenge:
      "Hubwell is a premium real estate accompaniment firm based in Marrakech, guiding high net worth clients through the construction of luxury villas. The brand needed to hold two qualities at once: the warmth of a trusted human partner, and the rigor of a premium institution. Most real estate brands lean fully into one or the other, so Hubwell risked feeling either cold and corporate or soft and forgettable.",
    approach:
      "The identity was built around a single idea: serenity is constructed, not promised. The wordmark merges the letter H with the silhouette of a house, while quietly forming the shape of a W to signal stability and protection. The palette stays deliberately restrained, with La Salle Green as the signature color, Vert Royal for institutional weight, and Ceramic for approachability. Poppins carries the whole system across three weights, keeping the brand premium without ever feeling stiff.",
    outcome:
      "The result is a complete brand identity and a guidelines document covering logo usage, safe zones, color application, social media templates, stationery, and app iconography. Every touchpoint now reads as the same confident, calm institution, giving Hubwell a presence that matches the level of client it was built to serve.",
    gallery: [
      "/images/projects/hubwell/hubwell_brandboard.webp",
      "/images/projects/hubwell/hubwell_brandidentity.webp",
    ],
    tags: ["Branding", "Identity Design", "Brand Guidelines"],
    nextProject: "l1",
  },
  {
    slug: "l1",
    title: "L1 Corporate Strategies",
    client: "L1 Corporate Strategies LLC",
    category: "Branding",
    year: "2026",
    coverImage: "/images/projects/l1/l1-brand-board.png",
    thumbnailImage: "/images/projects/l1/l1-bg.png",
    thumbnailOverscan: 20,
    logo: "/images/projects/l1/l1-logo.svg",
    logoWidth: 180,
    excerpt: "A full identity built on authority, clarity, and zero compromise.",
    challenge:
      "L1 Corporate Strategies needed a brand that matched the weight of their work. They operate at the intersection of public, private, and nonprofit sectors across the US and Colombia, and their existing presence didn't reflect that level of credibility. The identity had to communicate trust and authority without saying a word.",
    approach:
      "We built the entire identity around a strict black-and-white palette, with no exceptions. The logo, brand guidelines, and social media kit were designed to feel institutional and precise, the kind of brand that walks into a boardroom and doesn't need to explain itself. Every decision, from typography to spacing, was made to reinforce one thing: authority.",
    outcome:
      "L1 launched with a complete brand system, logo, full guidelines, and a social media kit ready to deploy. The identity positioned them clearly in a space where most competitors look generic. Clean, scalable, and built to last.",
    gallery: [
      "/images/projects/l1/l1-logo-presentation.jpg",
      "/images/projects/l1/l1-brand-guidelines.png",
      "/images/projects/l1/l1-socials.png",
      "/images/projects/l1/l1-color-palette.jpg",
    ],
    tags: ["Branding", "Identity", "Brand Guidelines", "Social Media Kit"],
    nextProject: "corehue",
  },
  {
    slug: "corehue",
    title: "Corehue",
    client: "Corehue",
    category: "Social Media",
    year: "2024",
    coverImage: "/images/work-corehue.png",
    thumbnailImage: "/images/work-corehue.png",
    logo: "/images/work-corehue-logo.svg",
    logoWidth: 200,
    excerpt: "A content engine that built a loyal audience.",
    challenge:
      "Corehue posted constantly but grew slowly. The content looked fine in isolation but had no through-line, nothing that made someone stop, follow, and keep coming back. The feed felt busy, not intentional.",
    approach:
      "We defined a clear content strategy and a recognizable visual language, then built a 30-day calendar around themes that actually mattered to their audience. Consistency and point of view replaced random posting.",
    outcome:
      "Engagement and saves climbed within weeks, and the audience started to feel like a community rather than a number. Corehue now has a content system that compounds instead of resetting every month.",
    gallery: [
      "/images/work-corehue.png",
      "/images/content-social-media-services-redwan-outhouna.png",
      "/images/service-motion.png",
      "/images/branding-services-redwan-outhouna.png",
    ],
    tags: ["Social Media", "Content", "Strategy"],
    nextProject: "elevana",
  },
  {
    slug: "elevana",
    title: "Elevana",
    client: "Elevana",
    category: "Branding",
    year: "2023",
    coverImage: "/images/work-elevana.png",
    thumbnailImage: "/images/work-elevana.png",
    logo: "/images/work-elevana-logo.svg",
    logoWidth: 180,
    excerpt: "A premium rebrand for a wellness company.",
    challenge:
      "Elevana wanted to move upmarket, but the existing brand felt budget and generic. It didn't signal the quality or the price point the company was aiming for, and it held back every other part of the business.",
    approach:
      "We crafted an elevated identity rooted in calm, space, and restraint, refined typography, a quiet palette, and photography direction that felt considered. Everything was designed to feel premium without trying too hard.",
    outcome:
      "Elevana now looks the part it wanted to play. The new brand supported higher pricing, attracted a more aligned audience, and gave the team confidence to show up at a level that matched their ambition.",
    gallery: [
      "/images/work-elevana.png",
      "/images/funnels-services-redwan-outhouna.png",
      "/images/service-uiux.png",
      "/images/automation-services-redwan-outhouna.png",
    ],
    tags: ["Branding", "Identity", "Art Direction"],
    nextProject: "hubwell",
  },
];

export function getProject(slug: string): CaseStudy | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
