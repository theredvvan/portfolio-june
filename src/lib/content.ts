import type {
  BlogPost,
  Certificate,
  NavLink,
  PricingPlan,
  ProcessStep,
  Project,
  Service,
  Stat,
} from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Works", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export const MENU_LINKS: NavLink[] = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
  { label: "404", href: "#" },
];

export const MENU_META: NavLink[] = [
  { label: "oredwan.com", href: "mailto:hello@oredwan.com" },
  { label: "Privacy policy", href: "#" },
  { label: "Terms & conditions", href: "#" },
];

export const PROJECTS: Project[] = [
  {
    slug: "studiolink",
    name: "Studiolink",
    image: "/images/work-studiolink.png",
    logo: "/images/work-studiolink-logo.svg",
    logoWidth: 250,
  },
  {
    slug: "zentrox",
    name: "Zentrox",
    image: "/images/work-zentrox.png",
    logo: "/images/work-zentrox-logo.svg",
    logoWidth: 200,
  },
  {
    slug: "corehue",
    name: "Corehue",
    image: "/images/work-corehue.png",
    logo: "/images/work-corehue-logo.svg",
    logoWidth: 200,
  },
  {
    slug: "elevana",
    name: "Elevana",
    image: "/images/work-elevana.png",
    logo: "/images/work-elevana-logo.svg",
    logoWidth: 180,
  },
];

export const SERVICES: Service[] = [
  {
    id: "branding",
    title: "Branding",
    number: "(01)",
    label: "Branding",
    description:
      "Strong branding sets you apart in a crowded market and turns first impressions into lasting loyalty.",
    image: "/images/branding-services-redwan-outhouna.png",
    alt: "Brand identity and visual design work",
  },
  {
    id: "development",
    title: "Funnels",
    number: "(02)",
    label: "Funnels",
    description:
      "A high-converting funnel turns strangers into clients systematically. Every touchpoint is designed with intent, from the first impression to the final decision.",
    image: "/images/funnels-services-redwan-outhouna.png",
    alt: "Sales and marketing funnel design",
  },
  {
    id: "motion",
    title: "Content & Social Media",
    number: "(03)",
    label: "Content & Social Media",
    description:
      "Content is your brand speaking before you ever do. I craft stories that stop the scroll, build trust over time, and turn followers into an engaged community.",
    image: "/images/content-social-media-services-redwan-outhouna.png",
    alt: "Content creation and social media management",
  },
  {
    id: "uiux",
    title: "Automation",
    number: "(04)",
    label: "Automation",
    description:
      "The right system works while you sleep. I build automation flows that nurture leads, trigger the right message at the right moment, and scale your marketing without scaling your workload.",
    image: "/images/automation-services-redwan-outhouna.png",
    alt: "Marketing and workflow automation",
  },
];

export const STATS: Stat[] = [
  { value: 40, suffix: "+", label: "Brands shaped from the ground up" },
  { value: 3, suffix: "+", label: "Years building brands and marketing" },
  { value: 4, suffix: "", label: "Disciplines handled under one roof" },
  { value: 90, suffix: "%", label: "Clients who return or refer me" },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start with a conversation, not a pitch. I ask the right questions to understand your business, your audience, and where the gap is. No assumptions, just listening.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Based on what I learn, I put together a clear direction: what we're building, why, and how it connects to your actual goals. You get a proposal within 48 hours.",
  },
  {
    number: "03",
    title: "Execution",
    description:
      "This is where the work happens. Branding, content, funnels, and automation, all built with intention, delivered on time, and refined until it's right.",
  },
  {
    number: "04",
    title: "Handoff",
    description:
      "We launch together. You get everything you need to move forward independently, or we keep building. Either way, nothing gets left unfinished.",
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Brand Starter",
    price: "$999",
    subtitle: "For businesses ready to show up properly.",
    features: [
      "Brand identity (logo + guidelines)",
      "Social media kit",
      "1 week turnaround",
    ],
  },
  {
    name: "Growth Pack",
    price: "$2,499",
    subtitle: "For businesses ready to grow with intention.",
    recommended: true,
    features: [
      "Everything in Brand Starter",
      "Content strategy + 30-day calendar",
      "Funnel design + copywriting",
      "2 weeks turnaround",
    ],
  },
  {
    name: "Full System",
    price: "$4,999",
    subtitle: "For businesses ready to run on autopilot.",
    features: [
      "Everything in Growth Pack",
      "Marketing automation setup (n8n)",
      "Monthly performance reporting",
      "Priority support for 3 months",
    ],
  },
];

export const CERTIFICATES: Certificate[] = [
  {
    logo: "/images/badges/google_logo.webp",
    title: "Google Project Management Certificate",
    org: "Google",
    date: "Nov 2021",
    link: "https://www.coursera.org/account/accomplishments/verify/A5CIW8F35NUU",
  },
  {
    logo: "/images/badges/hubspot.webp",
    title: "SEO Certified",
    org: "HubSpot Academy",
    date: "Mar 2024",
    link: "https://app-eu1.hubspot.com/academy/achievements/x9khp4yt/en/1/redwan-outhouna/seo-certified",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    category: "Branding",
    title: "Why most brands look forgettable, and how to fix it",
    image: "/images/blog-1.png",
  },
  {
    category: "Content",
    title: "Content that builds trust long before you pitch",
    image: "/images/blog-2.png",
  },
  {
    category: "Marketing",
    title: "Funnels and automation, explained without the jargon",
    image: "/images/blog-3.png",
  },
];

export const CONTACT = {
  phone: "+212 7 20 02 94 17",
  site: "redwanouthouna.com",
  email: "hello@redwanouthouna.com",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/redwanouthouna" },
    { label: "X.com", href: "https://x.com/redwanouthouna" },
    { label: "Instagram", href: "https://instagram.com/redwan.outh" },
  ],
};
