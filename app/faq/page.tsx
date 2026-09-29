import type { Metadata } from "next";
import { Hero, CTABand, SectionHeading } from "@/components/Common";
import { FAQAccordion, Breadcrumbs } from "@/components/Content";
import { faqCategories } from "@/lib/data/faq";
import { breadcrumbSchema, faqPageSchema, socialMeta } from "@/lib/schema";

const pageTitle = "Plumbing FAQs | Tupelo, MS Plumber Questions Answered";
const description = "Common questions about plumbing service in Tupelo, MS — service areas, emergencies, scheduling, and more.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description,
  alternates: { canonical: "/faq" },
  ...socialMeta(pageTitle, description, "/faq"),
};

export default function FAQPage() {
  const allFaqs = faqCategories.flatMap((c) => c.items);

  const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "FAQ" }];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(allFaqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbItems)) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <Hero h1="Frequently Asked Questions" subhead="Common questions about plumbing service in Tupelo, MS." primaryLabel="Request Service" />

      <div className="mx-auto max-w-3xl px-4 py-12 space-y-10">
        {faqCategories.map((cat) => (
          <div key={cat.category}>
            <SectionHeading>{cat.category}</SectionHeading>
            <FAQAccordion items={cat.items} />
          </div>
        ))}
      </div>

      <CTABand label="Have Another Question?" />
    </>
  );
}