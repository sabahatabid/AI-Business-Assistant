import type { Feature, Testimonial, PricingPlan, Stat, NavItem } from "@/types";

export const navItems: NavItem[] = [
  { label: "Features", href: "#features" },
  { label: "Demo", href: "#demo" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const features: Feature[] = [
  {
    icon: "Zap",
    title: "Instant AI Responses",
    description:
      "Generate ready-to-use business content instantly — from marketing plans to customer messaging — with one click.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: "TrendingUp",
    title: "Business Strategy Generator",
    description:
      "Build clear growth plans, launch strategies, and product positioning documents with AI-powered structure and insight.",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: "BookOpen",
    title: "Marketing Ideas Creator",
    description:
      "Create fresh campaign ideas, content plans, and promotional roadmaps tailored to your brand and audience.",
    color: "from-blue-400 to-cyan-500",
  },
  {
    icon: "MessageSquare",
    title: "Professional Email Writer",
    description:
      "Draft polished customer replies, sales outreach, and client communications with a professional tone every time.",
    color: "from-green-400 to-emerald-500",
  },
];

export const benefits = [
  {
    metric: "60%",
    title: "Reduce Support Costs",
    description:
      "Cut operational costs significantly by automating repetitive queries and reducing the need for large support teams.",
    icon: "DollarSign",
  },
  {
    metric: "94%",
    title: "Customer Satisfaction",
    description:
      "Achieve industry-leading CSAT scores with instant, accurate, and personalized responses every time.",
    icon: "Heart",
  },
  {
    metric: "10x",
    title: "Faster Response Speed",
    description:
      "Resolve issues 10 times faster than traditional support channels with AI-powered instant resolution.",
    icon: "Rocket",
  },
  {
    metric: "3x",
    title: "More Leads Generated",
    description:
      "Triple your lead generation by engaging every visitor intelligently and qualifying them automatically.",
    icon: "Users",
  },
];

export const dashboardStats: Stat[] = [
  {
    label: "Total Conversations",
    value: "24,521",
    change: "+12.5%",
    positive: true,
  },
  {
    label: "Resolved Tickets",
    value: "22,108",
    change: "+8.2%",
    positive: true,
  },
  {
    label: "Satisfaction Score",
    value: "94.2%",
    change: "+2.1%",
    positive: true,
  },
  {
    label: "Avg Response Time",
    value: "0.8s",
    change: "-15%",
    positive: true,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Head of Customer Success",
    company: "TechFlow Inc.",
    avatar: "SC",
    content:
      "AI Business Assistant transformed our business planning process completely. We went from a 4-hour content cycle to instant strategy drafts. Our team can now deliver polished plans in minutes.",
    rating: 5,
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "CTO",
    company: "Velocity Labs",
    avatar: "MR",
    content:
      "The integration was seamless and the AI learned our product inside out within days. We've reduced content production time by 65% while handling 3x more marketing requests. It's genuinely impressive.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Operations Director",
    company: "Nexus Commerce",
    avatar: "EW",
    content:
      "What sold me was the AI's ability to generate launch messaging and campaign ideas for multiple markets. We operate in 12 countries and the tool handles every brief flawlessly.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Kim",
    role: "CEO",
    company: "StartupBase",
    avatar: "DK",
    content:
      "As a startup, we couldn't afford a full creative team. AI Business Assistant lets us punch above our weight. Our investors are impressed with our polished go-to-market materials.",
    rating: 5,
  },
  {
    id: 5,
    name: "Priya Sharma",
    role: "Customer Experience Lead",
    company: "CloudSoft",
    avatar: "PS",
    content:
      "The lead generation feature alone paid for the entire subscription in the first month. The AI identifies and qualifies prospects while they're browsing, and passes them directly to sales.",
    rating: 5,
  },
  {
    id: 6,
    name: "James O'Brien",
    role: "VP of Support",
    company: "DataBridge",
    avatar: "JO",
    content:
      "We evaluated 5 business AI platforms. AI Business Assistant won on every metric — accuracy, speed, integrations, and pricing. The onboarding team was exceptional and we were live in 48 hours.",
    rating: 5,
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "$49",
    period: "/month",
    description: "Perfect for small businesses getting started with AI support",
    features: [
      "Up to 1,000 conversations/month",
      "1 chatbot widget",
      "Basic FAQ automation",
      "Email support",
      "5 languages supported",
      "Basic analytics",
      "Standard integrations",
    ],
    highlighted: false,
    cta: "Start Free Trial",
  },
  {
    name: "Business",
    price: "$149",
    period: "/month",
    description: "For growing businesses that need powerful AI capabilities",
    features: [
      "Up to 10,000 conversations/month",
      "5 chatbot widgets",
      "Advanced FAQ + AI training",
      "Priority support 24/7",
      "50+ languages supported",
      "Advanced analytics & reports",
      "All integrations + API access",
      "Lead generation tools",
      "Custom branding",
      "Team collaboration (5 seats)",
    ],
    highlighted: true,
    cta: "Start Free Trial",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large-scale enterprise requirements",
    features: [
      "Unlimited conversations",
      "Unlimited chatbot widgets",
      "Custom AI model training",
      "Dedicated account manager",
      "All languages supported",
      "Custom analytics & BI export",
      "Custom integrations & SSO",
      "SLA guarantee (99.9% uptime)",
      "White-label solution",
      "Unlimited team seats",
      "On-premise deployment option",
    ],
    highlighted: false,
    cta: "Contact Sales",
  },
];
