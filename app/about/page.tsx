import type { Metadata } from "next";
import { Hero, SectionHeading, CTABand } from "@/components/Common";
import { Breadcrumbs, AreaCard } from "@/components/Content";
import { Icon } from "@/components/Icon";
import { locations } from "@/lib/data/locations";
import { SITE } from "@/lib/site";
import { aboutPageSchema, breadcrumbSchema, socialMeta } from "@/lib/schema";
import { images } from "@/lib/data/images";

const pageTitle = "About Tupelo Plumber | Local Plumbing Service in Tupelo, MS";
const description =
  "Learn about Tupelo Plumber, serving Tupelo, MS and nearby communities with residential, commercial, and 24/7 emergency plumbing services.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description,
  alternates: { canonical: "/about" },
  ...socialMeta(pageTitle, description, "/about"),
};

const values = [
  {
    icon: "wrench",
    title: "Assess Before Recommending",
    body: "The problem is assessed before deciding on repair, replacement, or a specific service — not a generic default.",
  },
  {
    icon: "pin",
    title: "Genuinely Local",
    body: "Focused on Tupelo, MS and the surrounding communities, not a broad multi-state footprint.",
  },
  {
    icon: "shield",
    title: "Plain, Direct Communication",
    body: "Options are explained clearly — repair vs. replace, what a service actually involves — so the decision is an informed one.",
  },
  {
    icon: "home",
    title: "Residential & Commercial",
    body: "The same attention to assessment and communication applies whether it's a home or a business.",
  },
  {
    icon: "alert",
    title: "24/7 Emergency Availability",
    body: "Emergency plumbing is available around the clock, every day of the week.",
  },
];

const steps = [
  {
    title: "Describe the Problem",
    body: "Call or send a request with what's happening and your address. You don't need to know the cause.",
  },
  {
    title: "Get It Assessed",
    body: "The issue is assessed before a repair is recommended, and the findings and next steps are explained.",
  },
  {
    title: "Same-Day or 24/7",
    body: "Same-day appointments are available for routine repairs, and emergency plumbing is available around the clock.",
  },
];

const serviceLinks = [
  { label: "Emergency Plumbing", href: "/emergency-plumbing-tupelo-ms" },
  { label: "Plumbing Repair", href: "/plumbing-repair-tupelo-ms" },
  { label: "Drain Cleaning", href: "/drain-cleaning-tupelo-ms" },
  { label: "Water Heater Repair", href: "/water-heater-repair-tupelo-ms" },
  { label: "Leak Detection", href: "/leak-detection-tupelo-ms" },
  { label: "Commercial Plumbing", href: "/commercial-plumbing-tupelo-ms" },
];

export default function AboutPage() {
  const closest = locations.filter((l) => l.tier === 1);

  const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "About" }];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema()) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbItems)) }}
      />
      <Breadcrumbs items={breadcrumbItems} />
      <Hero
        h1={`About ${SITE.name}`}
        subhead="Local plumbing service for Tupelo, MS and the surrounding area."
        primaryLabel="Request Service"
        image={images.about}
      />

      <div className="mx-auto max-w-5xl px-4 py-12">
        <p className="mb-4 max-w-prose leading-relaxed text-ink/90">
          {SITE.name} provides plumbing service for homeowners and businesses in Tupelo, Mississippi, and the
          surrounding communities — from everyday repairs and water heater problems to drains, leak detection,
          sewer line issues, and emergency plumbing.
        </p>
        <p className="mb-12 max-w-prose leading-relaxed text-ink/90">
          The approach is straightforward: understand the actual problem, explain the real options, and get the
          appropriate service scheduled. Call {SITE.phoneDisplay} or send a request with your address, and
          coverage and scheduling are confirmed from there.
        </p>

        <section className="mb-12">
          <SectionHeading kicker="How It Works">What Happens When You Call</SectionHeading>
          <div className="grid gap-6 sm:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.title} className="rounded-xl border border-black/10 bg-white p-6">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-3 font-display font-bold text-navy">{s.title}</h3>
                <p className="mt-1 text-sm text-muted">{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
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
        </section>

        <section className="mb-12">
          <SectionHeading kicker="What We Do">Plumbing Services</SectionHeading>
          <p className="mb-4 max-w-prose text-ink/80">
            Residential and commercial plumbing, including emergency service. A few of the most common requests:
          </p>
          <div className="flex flex-wrap gap-3">
            {serviceLinks.map((s) => (
              <a
                key={s.href}
                href={s.href}
                className="rounded-full border border-black/10 px-4 py-2 text-sm text-ink hover:border-brand hover:text-brand"
              >
                {s.label}
              </a>
            ))}
          </div>
        </section>

        <section>
          <SectionHeading kicker="Where We Work">Serving Tupelo and Nearby Communities</SectionHeading>
          <div className="mb-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {closest.map((l) => (
              <AreaCard key={l.slug} location={l} />
            ))}
          </div>
          <p className="max-w-prose text-sm text-ink/80">
            Additional communities may also be covered — confirm availability by property address.{" "}
            <a href="/communities-we-also-serve" className="font-medium text-brand">
              See all service areas →
            </a>
          </p>
        </section>
      </div>

      <CTABand label="Need Plumbing Service in Tupelo or Nearby?" />
    </>
  );
}