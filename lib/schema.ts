import { SITE, fullAddress } from "@/lib/site";
import { ServicePage, LocationPage, FAQItem, BlogPost } from "@/lib/types";
import { images } from "@/lib/data/images";

// Stable @id values so every schema block references the SAME entities
// instead of duplicating the business object on every page.
export const IDS = {
  business: `${SITE.url}/#business`,
  website: `${SITE.url}/#website`,
};

// One Organization/LocalBusiness entity, defined once, referenced everywhere else.
export function businessSchema() {
  return {
    "@type": "Plumber",
    "@id": IDS.business,
    name: SITE.name,
    url: SITE.url,
    description: "Plumbing services for Tupelo, MS and the surrounding area.",
    telephone: SITE.phoneTel,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.addressLine1,
      addressLocality: SITE.addressCity,
      addressRegion: SITE.addressState,
      postalCode: SITE.addressZip,
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phoneTel,
      email: SITE.email,
      contactType: "customer service",
    },
    openingHoursSpecification: SITE.is24_7
      ? {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        }
      : undefined,
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": IDS.website,
    url: SITE.url,
    name: SITE.name,
    publisher: { "@id": IDS.business },
  };
}

// Site-wide graph, output once in the root layout.
export function rootSchemaGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [businessSchema(), websiteSchema()],
  };
}

// Fix: Google requires every ListItem except the last to carry a real "item" URL.
// A crumb with no href (e.g. an unlinked cluster label like "Drain & Sewer") can't
// satisfy that, so it's dropped from the schema entirely rather than emitted with
// a missing field. Positions are renumbered sequentially after filtering so there
// are no gaps. This only affects the JSON-LD — the visible breadcrumb UI is untouched.
export function breadcrumbSchema(items: { label: string; href?: string }[]) {
  const validItems = items.filter((item, i) => item.href || i === items.length - 1);

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: validItems.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `${SITE.url}${item.href === "/" ? "" : item.href}` } : {}),
    })),
  };
}

export function faqPageSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

// Service schema references the business via @id rather than repeating the full object,
// and uses the page's actual intro/description — never a generic shared blurb.
// `image` is only included when a real photo is actually displayed on that page —
// never a placeholder or unrelated stock URL.
export function servicePageSchema(service: ServicePage) {
  const img = images[service.slug];
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.navLabel,
    name: service.h1,
    description: service.intro,
    url: `${SITE.url}/${service.slug}`,
    provider: { "@id": IDS.business },
    areaServed: {
      "@type": "City",
      name: "Tupelo, MS",
    },
    ...(img ? { image: img.url } : {}),
  };
}

// Location pages get WebPage context only — no fake per-city LocalBusiness entity.
export function locationWebPageSchema(location: LocationPage) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: location.h1,
    description: location.metaDescription,
    url: `${SITE.url}/${location.slug}`,
    about: { "@id": IDS.business },
    isPartOf: { "@id": IDS.website },
  };
}

export function aboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    url: `${SITE.url}/about`,
    about: { "@id": IDS.business },
    isPartOf: { "@id": IDS.website },
  };
}

export function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: `${SITE.url}/contact`,
    about: { "@id": IDS.business },
    isPartOf: { "@id": IDS.website },
  };
}

export function blogCollectionSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    url: `${SITE.url}/blog`,
    name: "Plumbing Guides & Articles",
    isPartOf: { "@id": IDS.website },
    publisher: { "@id": IDS.business },
  };
}

// HowTo schema — only used on genuinely step-by-step posts, with the exact
// visible step text, not a reworded or padded version.
export function howToSchema(title: string, steps: { name: string; text: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: title,
    step: steps.map((s) => ({
      "@type": "HowToStep",
      name: s.name,
      text: s.text,
    })),
  };
}

// BlogPosting schema — only real fields: headline, description, and the actual
// authoring date. No fabricated author name or dateModified beyond what's true.
export function blogPostingSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    url: `${SITE.url}/blog/${post.slug}`,
    datePublished: post.publishDate,
    publisher: { "@id": IDS.business },
    isPartOf: { "@id": IDS.website },
    mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
  };
}

// Shared Open Graph / Twitter metadata builder so every page gets consistent,
// non-duplicated social metadata without hand-repeating it per file.
export function socialMeta(title: string, description: string, path: string) {
  const url = `${SITE.url}${path}`;
  return {
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      locale: "en_US",
      type: "website" as const,
    },
    twitter: {
      card: "summary" as const,
      title,
      description,
    },
  };
}

void fullAddress; // referenced for future GeoCoordinates/PostalAddress reuse if needed