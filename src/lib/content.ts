import type {
  Award,
  BlogPost,
  NavLink,
  PricingPlan,
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
  { label: "hellonoreel.com", href: "mailto:hellonoreel@example.com" },
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
    image: "/images/service-branding.png",
  },
  {
    id: "development",
    title: "Development",
    number: "(02)",
    label: "Development",
    description:
      "In software and product contexts, development includes planning, building, testing, and optimizing solutions",
    image: "/images/service-development.png",
  },
  {
    id: "motion",
    title: "Motion",
    number: "(03)",
    label: "Motion",
    description:
      "Whether used in user form the interfaces, branding advertising or storytelling, motion design enhances user experience",
    image: "/images/service-motion.png",
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    number: "(04)",
    label: "UI/UX Design",
    description:
      "Together, they ensure that a product is not only visually appealing but also easy to use, helping users smoothly.",
    image: "/images/service-uiux.png",
  },
];

export const STATS: Stat[] = [
  { value: 120, suffix: "+", label: "Brands empowered with strategic design" },
  { value: 75, suffix: "%", label: "Average increase in user engagement" },
  { value: 8, suffix: "+", label: "Years of industry experience" },
  { value: 99, suffix: "%", label: "Project delivery satisfaction" },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Basic Plan",
    badgeVariant: "dark",
    pricePerProject: "$999",
    priceMonthly: "$799",
    unit: "/Per Project",
    description:
      "For small business or startups building their first digital presence.",
    ctaVariant: "light",
    features: [
      "Competitor analysis",
      "Design a Home page +10 inner page",
      "Setup basic contact form",
      "Bug fixing & 24/7 Support",
    ],
  },
  {
    name: "Pro Plan",
    badgeVariant: "accent",
    pricePerProject: "$4999",
    priceMonthly: "$3999",
    unit: "/month",
    description:
      "For established brands looking for a fully tailored esperienced.",
    ctaVariant: "dark",
    features: [
      "Custom blog design + setup",
      "Monthly analytics",
      "E commerce functionality",
      "Priority support for 6 month",
    ],
  },
];

export const AWARDS: Award[] = [
  { year: "2016", title: "Best Visual Identity", org: "Creative Excellence Awards" },
  { year: "2017", title: "Top Brand Agency of the Year", org: "Design Leaders Summit" },
  { year: "2018", title: "Creative Impact Award", org: "Branding & Identity" },
  { year: "2019", title: "Visual Mastery Award", org: "UI/UX Design" },
  { year: "2020", title: "Strategic Design Award", org: "Brand Strategy" },
  { year: "2021", title: "Top Brand Agency of the Year", org: "Design Leaders Summit" },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    category: "Design",
    title: "The Art of Minimal Branding Less But Impactful",
    image: "/images/blog-1.png",
  },
  {
    category: "Visual Design",
    title: "The Role of Storytelling in Modern Design",
    image: "/images/blog-2.png",
  },
  {
    category: "Creative Design",
    title: "Design Trends We're Watching in 2025",
    image: "/images/blog-3.png",
  },
];

export const FOOTER_COLUMNS: NavLink[][] = [
  [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Contact us", href: "#contact" },
  ],
  [
    { label: "Privacy policy", href: "#" },
    { label: "Blog", href: "#blog" },
  ],
  [
    { label: "Projects", href: "#work" },
    { label: "Terms & conditions", href: "#" },
    { label: "404", href: "#" },
  ],
];

export const CONTACT = {
  phone: "+1 (208) 555-0112",
  site: "hellonoreel.com",
  email: "demonoreel@mail.com",
  socials: [
    { label: "LinkedIn", href: "#" },
    { label: "X.com", href: "#" },
    { label: "Facebook", href: "#" },
  ],
};
