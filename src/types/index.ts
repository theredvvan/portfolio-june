export interface NavLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  name: string;
  image: string;
  logo: string;
  /** logo intrinsic aspect for sizing */
  logoWidth: number;
}

export interface Service {
  id: string;
  title: string;
  number: string;
  label: string;
  description: string;
  image: string;
  /** descriptive alt text for the service image (accessibility + SEO) */
  alt: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface PricingPlan {
  name: string;
  badgeVariant: "dark" | "accent";
  pricePerProject: string;
  priceMonthly: string;
  unit: string;
  description: string;
  ctaVariant: "light" | "dark";
  features: string[];
}

export interface Award {
  year: string;
  title: string;
  org: string;
}

export interface BlogPost {
  category: string;
  title: string;
  image: string;
}

export interface FooterColumn {
  links: NavLink[];
}
