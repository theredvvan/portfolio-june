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
    slug: "why-most-brands-fail-before-they-launch",
    title: "Why most brands fail before they launch",
    category: "Branding",
    date: "2025-01-15",
    readTime: 6,
    excerpt:
      "Most brands don't fail in the market. They fail on the whiteboard, long before anyone sees a logo. Here's where it goes wrong.",
    coverImage: "/images/blog-1.png",
    tags: ["branding", "strategy", "positioning"],
    content: [
      {
        type: "paragraph",
        text: "Most people think a brand fails because the logo wasn't good enough, the colors were off, or the website didn't convert. In reality, the failure usually happens much earlier, in the part nobody likes to talk about: strategy. By the time a brand reaches the design stage, its fate is mostly decided.",
      },
      {
        type: "heading",
        text: "It starts with a vague answer",
      },
      {
        type: "paragraph",
        text: "Ask a struggling founder who their brand is for, and you'll hear something like \"everyone who needs our product.\" That's not positioning, that's a wish. A brand that tries to speak to everyone ends up resonating with no one, because it never makes a real choice about who it's fighting for.",
      },
      {
        type: "quote",
        text: "A brand isn't what you say about yourself. It's the gap you fill in someone's mind that nobody else was filling.",
      },
      {
        type: "subheading",
        text: "The three questions I ask first",
      },
      {
        type: "list",
        items: [
          "Who is this for, specifically, and who is it not for?",
          "What does this brand believe that competitors are afraid to say?",
          "If we disappeared tomorrow, what exactly would people miss?",
        ],
      },
      {
        type: "paragraph",
        text: "If a founder can't answer these clearly, no amount of beautiful design will save the launch. Design amplifies clarity. It can't manufacture it.",
      },
      {
        type: "image",
        src: "/images/branding-services-redwan-outhouna.png",
        alt: "Brand strategy work mapped out before any design begins",
      },
      {
        type: "heading",
        text: "Fix the strategy, then make it beautiful",
      },
      {
        type: "paragraph",
        text: "The brands that win aren't the ones with the biggest budgets. They're the ones that decided early exactly who they were for and what they stood for, then built everything on top of that. Get those decisions right, and the logo almost designs itself.",
      },
    ],
  },
  {
    slug: "the-automation-stack-i-use-to-run-my-freelance-business",
    title: "The automation stack I use to run my freelance business",
    category: "Automation",
    date: "2024-11-20",
    readTime: 7,
    excerpt:
      "Running a freelance business solo means your time is the product. Here's the exact stack I use to keep the admin off my plate.",
    coverImage: "/images/blog-2.png",
    tags: ["automation", "freelance", "systems", "n8n"],
    content: [
      {
        type: "paragraph",
        text: "When you freelance alone, every hour spent on admin is an hour not spent on the work clients actually pay for. Early on I was drowning in follow-ups, invoices, and onboarding. So I built a system that handles the boring parts for me.",
      },
      {
        type: "heading",
        text: "The principle: automate the predictable",
      },
      {
        type: "paragraph",
        text: "I don't try to automate creativity. I automate the things that happen the same way every single time, the messages, the reminders, the handoffs. If I do something more than twice and it follows a pattern, it becomes a workflow.",
      },
      {
        type: "subheading",
        text: "What's actually in the stack",
      },
      {
        type: "list",
        items: [
          "n8n for the core workflows that connect everything together",
          "A simple CRM to track leads from first message to signed contract",
          "Automated proposals and invoices triggered when a deal moves stages",
          "Scheduled nurture emails so quiet leads never go cold",
        ],
      },
      {
        type: "quote",
        text: "The goal isn't to remove yourself from the business. It's to remove yourself from the parts that don't need you.",
      },
      {
        type: "image",
        src: "/images/automation-services-redwan-outhouna.png",
        alt: "Automation flows connecting lead capture, follow-up, and onboarding",
      },
      {
        type: "heading",
        text: "The result",
      },
      {
        type: "paragraph",
        text: "A new lead can go from first contact to onboarded client with me touching only the moments that need a human. That's the difference between a freelancer who's always busy and a business that runs without burning you out.",
      },
    ],
  },
  {
    slug: "what-i-learned-building-20-brands-from-scratch",
    title: "What I learned building 20+ brands from scratch",
    category: "Lessons",
    date: "2024-09-05",
    readTime: 5,
    excerpt:
      "Twenty brands in, the patterns become impossible to ignore. These are the lessons I wish I'd known on brand number one.",
    coverImage: "/images/blog-3.png",
    tags: ["branding", "lessons", "process"],
    content: [
      {
        type: "paragraph",
        text: "Every brand teaches you something, but the lessons that stick are the ones that show up again and again. After building more than twenty brands from nothing, here are the truths I keep coming back to.",
      },
      {
        type: "subheading",
        text: "1. The client's first idea is rarely the real brief",
      },
      {
        type: "paragraph",
        text: "People ask for a logo when they need positioning. They ask for a redesign when they need a new audience. My job is to hear the request and find the real problem underneath it.",
      },
      {
        type: "subheading",
        text: "2. Constraints make better work",
      },
      {
        type: "paragraph",
        text: "A blank page is the enemy. The brands I'm proudest of all came from tight constraints, a small budget, a narrow audience, a bold belief. Limits force decisions, and decisions are where brands are born.",
      },
      {
        type: "quote",
        text: "Taste is just a thousand small decisions made in the same direction.",
      },
      {
        type: "image",
        src: "/images/work-corehue.png",
        alt: "A finished brand identity from a recent project",
      },
      {
        type: "subheading",
        text: "3. Consistency beats brilliance",
      },
      {
        type: "paragraph",
        text: "One stunning post won't build a brand. Showing up the same way, with the same voice, for months will. The brands that grow are the ones that stay recognizable long enough for people to trust them.",
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
