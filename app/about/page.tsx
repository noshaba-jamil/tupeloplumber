import type { Metadata } from "next";
import { Hero, SectionHeading, CTABand } from "@/components/Common";
import { Breadcrumbs } from "@/components/Content";
import { Icon } from "@/components/Icon";
import { SITE } from "@/lib/site";
import { aboutPageSchema, breadcrumbSchema, socialMeta } from "@/lib/schema";
import { images } from "@/lib/data/images";

const title = `About | ${SITE.name}`;
const description = "Plumbing services for Tupelo, MS and the surrounding area, focused on clear diagnosis and straightforward recommendations.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  ...socialMeta(title, description, "/about"),
};

export default function AboutPage() {
  const values = [
    {
      icon: "wrench",
      title: "Diagnose Before Recommending",
      body: "The actual cause gets identified before deciding on repair, replacement, or a specific service — not a generic default.",
    },
    {
      icon: "pin",
      title: "Genuinely Local",
      body: "Focused on Tupelo, MS and the surrounding Lee County area, not a broad multi-state footprint.",
    },
    {
      icon: "shield",
      title: "Plain, Direct Communication",
      body: "Options are explained clearly — repair vs. replace, what a service actually involves — so the decision is an informed one.",
    },
    {
      icon: "home",
      title: "Residential & Commercial",
      body: "The same attention to diagnosis and communication applies whether it's a home or a business.",
    },
    {
      icon: "alert",
      title: "24/7 Emergency Availability",
      body: "Emergency plumbing service is available around the clock, every day of the week.",
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema()) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ label: "Home", href: "/" }, { label: "About" }])) }}
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
      <Hero
        h1={`About ${SITE.name}`}
        subhead="Plumbing services for Tupelo, MS and the surrounding area."
        primaryLabel="Request Service"
        image={images.about}
      />

      <div className="mx-auto max-w-4xl px-4 py-12">
        <p className="mb-8 max-w-prose leading-relaxed text-ink/90">
          {SITE.name} connects homeowners and businesses in Tupelo, MS with plumbing service covering everyday
          repairs, emergencies, drains and sewer lines, water heaters, leak detection, and more. The approach is
          straightforward: identify the actual problem, explain the real options, and get the appropriate service
          scheduled.
        </p>

        <SectionHeading kicker="Our Values">What Guides the Work</SectionHeading>
        <div className="grid gap-6 sm:grid-cols-2">
          {values.map((v) => (
            <div key={v.title} className="rounded-xl border border-black/10 bg-white p-6">
              <Icon name={v.icon} className="h-7 w-7 text-brand" />
              <h3 className="mt-3 font-display font-bold text-navy">{v.title}</h3>
              <p className="mt-1 text-sm text-muted">{v.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-prose text-sm text-muted">
          Service areas, current offerings, and other business details are kept up to date on the{" "}
          <a href="/#areas" className="font-medium text-brand">
            service areas
          </a>{" "}
          and{" "}
          <a href="/faq" className="font-medium text-brand">
            FAQ
          </a>{" "}
          pages.
        </p>
      </div>

      <CTABand label="Have a Plumbing Question?" />
    </>
  );
}
