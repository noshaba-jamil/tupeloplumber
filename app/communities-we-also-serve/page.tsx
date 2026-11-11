import type { Metadata } from "next";
import { Hero, CTABand, SectionHeading } from "@/components/Common";
import { Breadcrumbs, AreaCard, FAQAccordion } from "@/components/Content";
import { locations, extendedCommunities } from "@/lib/data/locations";
import { SITE } from "@/lib/site";
import { breadcrumbSchema, faqPageSchema, socialMeta } from "@/lib/schema";

// "pageTitle" has no brand suffix because the layout template appends it.
const pageTitle = "Plumbing Service Areas Near Tupelo, MS";
const fullTitle = `${pageTitle} | ${SITE.name}`;
const description =
  "Tupelo Plumber serves additional communities near Tupelo, MS. Explore our service areas and call to confirm plumbing availability at your address.";

export const metadata: Metadata = {
  title: pageTitle,
  description,
  alternates: { canonical: "/communities-we-also-serve" },
  ...socialMeta(fullTitle, description, "/communities-we-also-serve"),
};

const services = [
  { label: "Emergency Plumbing", slug: "emergency-plumbing-tupelo-ms", blurb: "Urgent problems, with 24/7 availability" },
  { label: "Plumbing Repair", slug: "plumbing-repair-tupelo-ms", blurb: "Everyday plumbing problems and repairs" },
  { label: "Drain Cleaning", slug: "drain-cleaning-tupelo-ms", blurb: "Blocked sinks, toilets, showers, and drains" },
  { label: "Water Heater Repair", slug: "water-heater-repair-tupelo-ms", blurb: "Hot water problems and replacement needs" },
  { label: "Leak Detection", slug: "leak-detection-tupelo-ms", blurb: "Locating concealed water leaks" },
  { label: "Sewer Line Repair", slug: "sewer-line-repair-tupelo-ms", blurb: "Sewer problems and damaged lines" },
  { label: "Repiping", slug: "repiping-tupelo-ms", blurb: "Replacing deteriorating supply piping" },
  { label: "Commercial Plumbing", slug: "commercial-plumbing-tupelo-ms", blurb: "Plumbing service for businesses" },
];

const faqs = [
  {
    q: "Do you serve communities outside the main service towns?",
    a: "Yes. Tupelo Plumber also serves smaller communities around the main towns. Contact us with your property address to confirm service availability.",
  },
  {
    q: "Do you serve unincorporated communities and rural properties?",
    a: "Often, yes. Coverage depends on the property's location, so give your street address or county-road name and it can be confirmed.",
  },
  {
    q: "Do you cover every address in the counties mentioned on this page?",
    a: "Not necessarily. Community and county names don't always match actual service boundaries, so availability is confirmed using the property's location.",
  },
  {
    q: "Is 24/7 emergency plumbing available in smaller communities?",
    a: "Emergency plumbing is available 24/7. For outlying communities, call right away and give your address so timing can be confirmed.",
  },
  {
    q: "Can I get same-day routine plumbing service?",
    a: "Same-day appointments are available for routine repairs. For outlying communities, call with your address to confirm timing.",
  },
  {
    q: "What plumbing services can I request?",
    a: "Residential and commercial plumbing, including repairs, emergency plumbing, drains, water heaters, leak detection, sewer line repair, and repiping. See the service list on this page for details.",
  },
];

export default function CommunitiesPage() {
  const closest = locations.filter((l) => l.tier === 1);
  const extended = locations.filter((l) => l.tier === 2);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Areas We Serve", href: "/#areas" },
    { label: "Communities We Also Serve" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbItems)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)) }}
      />
      <Breadcrumbs items={breadcrumbItems} />
      <Hero
        h1="Communities We Also Serve Near Tupelo, MS"
        subhead="Plumbing service reaches beyond the main towns to smaller communities and rural areas around Tupelo. Call with your address to confirm coverage."
        primaryLabel="Request Service"
      />

      <div className="mx-auto max-w-5xl px-4 py-12">
        <p className="mb-4 max-w-3xl leading-relaxed text-ink/90">
          Tupelo Plumber serves the main towns around Tupelo, plus smaller communities, rural settlements, and
          unincorporated areas throughout the surrounding region. Many of these places don&rsquo;t have clearly
          defined town boundaries, so service is confirmed using the property&rsquo;s actual street address or
          county-road location.
        </p>
        <p className="mb-12 max-w-3xl leading-relaxed text-ink/90">
          Call with your location to check coverage and scheduling before arranging service.
        </p>

        <section className="mb-12">
          <SectionHeading kicker="Find Your Area">Main Service Areas</SectionHeading>
          <p className="mb-4 max-w-3xl text-ink/80">
            Most customers will find their town below. Each page covers that area&rsquo;s coverage and common
            questions.
          </p>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-ink/80">Closest to Tupelo</h3>
          <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {closest.map((l) => (
              <AreaCard key={l.slug} location={l} />
            ))}
          </div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-ink/80">Further Out</h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {extended.map((l) => (
              <AreaCard key={l.slug} location={l} />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <SectionHeading kicker="Smaller Communities">Other Communities We Serve</SectionHeading>
          <p className="mb-4 max-w-3xl text-ink/80">
            These communities are part of the broader service range. If yours isn&rsquo;t listed, it may still be
            covered — ask rather than assuming it isn&rsquo;t.
          </p>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
            {extendedCommunities.map((c) => (
              <div key={c.name} className="rounded-lg border border-black/10 bg-white px-3 py-2 text-sm">
                <span className="font-medium text-navy">{c.name}</span>
                {c.county && <span className="block text-xs text-muted">{c.county}</span>}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <SectionHeading kicker="What We Do">Plumbing Services Available</SectionHeading>
          <p className="mb-4 max-w-3xl text-ink/80">
            Residential and commercial plumbing service is available across the service area. Exact scheduling
            for a specific address is confirmed when you call.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {services.map((s) => (
              <a
                key={s.slug}
                href={`/${s.slug}`}
                className="rounded-xl border border-black/10 bg-white p-4 transition hover:border-brand"
              >
                <span className="block font-display font-bold text-navy">{s.label}</span>
                <span className="mt-1 block text-sm text-muted">{s.blurb}</span>
              </a>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <SectionHeading kicker="Before You Call">How We Confirm Your Location</SectionHeading>
          <p className="mb-4 max-w-3xl text-ink/80">
            Not every rural community has a widely recognized street address or a clearly defined town boundary.
            Giving your nearest road, intersection, or property address helps confirm whether service can be
            scheduled. Helpful details:
          </p>
          <ul className="max-w-3xl list-disc space-y-2 pl-5 text-ink/90">
            <li>Your community or town name</li>
            <li>Your full street address or county-road number</li>
            <li>Your ZIP code, if you know it</li>
            <li>Whether it&rsquo;s an emergency or a routine repair</li>
            <li>A short description of the plumbing problem</li>
          </ul>
        </section>

        <section className="mb-4">
          <SectionHeading kicker="Questions">Service Area FAQs</SectionHeading>
          <div className="max-w-2xl">
            <FAQAccordion items={faqs} />
          </div>
        </section>
      </div>

      <CTABand label="Not Sure Whether We Serve Your Community? Call With Your Address." />
    </>
  );
}