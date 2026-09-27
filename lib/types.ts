export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] }
  | { type: "note"; text: string } // used for [VERIFY]-style callouts, rendered subtly
  | { type: "citation"; text: string; url: string; source: string }; // real outbound reference to an authoritative source

export type FAQItem = { q: string; a: string };

export type ServicePage = {
  slug: string;
  cluster: string;
  navLabel: string;
  title: string; // SEO title
  metaDescription: string;
  h1: string;
  intro: string; // short hero subhead
  body: ContentBlock[];
  faqs: FAQItem[];
  relatedServiceSlugs: string[];
  ctaLabel: string;
};

export interface LocationPage {
  slug: string;
  tier: number;
  name: string;
  title: string;
  h1: string;
  metaDescription: string;
  distanceNote: string;
  reasoning: string;
  neighborSlugs: string[];
  brief?: boolean;
  faqs: FAQItem[];
};

export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  publishDate: string; // ISO date — the actual date this post was authored, not fabricated
  body: ContentBlock[];
  faqs?: FAQItem[];
  howToSteps?: { name: string; text: string }[]; // only set for genuinely step-by-step posts
  relatedServiceSlugs: string[];
};
