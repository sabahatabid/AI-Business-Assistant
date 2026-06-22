export interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
  color: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
}

export interface Stat {
  label: string;
  value: string;
  change: string;
  positive: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}
