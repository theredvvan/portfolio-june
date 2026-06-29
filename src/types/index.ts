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
  price: string;
  subtitle: string;
  features: string[];
  recommended?: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Certificate {
  logo: string;
  title: string;
  org: string;
  date: string;
  link: string;
}

export interface FooterColumn {
  links: NavLink[];
}
