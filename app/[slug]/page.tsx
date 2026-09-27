import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Hero, CTABand } from "@/components/Common";
import { ContentBlocks, FAQAccordion, Breadcrumbs, ServiceCard, AreaCard } from "@/components/Content";
import { services } from "@/lib/data/services";
import { locations } from "@/lib/data/locations";
import { SITE } from "@/lib/site";
import { servicePageSchema, faqPageSchema, breadcrumbSchema, locationWebPageSchema, socialMeta } from "@/lib/schema";
import { images } from "@/lib/data/images";

export async function generateStaticParams() {
  const serviceParams = services.map((s) => ({ slug: s.slug }));
  const locationParams = locations.map((l) => ({ slug: l.slug }));
  return [...serviceParams, ...locationParams];
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug);
  if (service) {
    return {
      title: service.title,
      description: service.metaDescription,
      alternates: { canonical: `/${service.slug}` },
      ...socialMeta(service.title, service.metaDescription, `/${service.slug}`),
    };
  }
  const location = locations.find((l) => l.slug === params.slug);
  if (location) {
    return {
      title: location.h1,
      description: location.metaDescription,
      alternates: { canonical: `/${location.slug}` },
      ...socialMeta(location.title, location.metaDescription, `/${location.slug}`),
    };
  }
  return {};
}

export default function DynamicPage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (service) return <ServicePageView slug={params.slug} />;

  const location = locations.find((l) => l.slug === params.slug);
  if (location) return <LocationPageView slug={params.slug} />;

  notFound();
}

function ServicePageView({ slug }: { slug: string }) {
  const service = services.find((s) => s.slug === slug)!;
  const related = services.filter((s) => service.relatedServiceSlugs.includes(s.slug));

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: service.cluster },
    { label: service.navLabel },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicePageSchema(service)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(service.faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbItems)) }} />

      <Breadcrumbs items={breadcrumbItems} />
      <Hero
        h1={service.h1}
        subhead={service.intro}
        primaryLabel="Request Service"
        urgent={service.slug === "emergency-plumbing-tupelo-ms"}
        image={images[service.slug]}
      />

      <div className="mx-auto max-w-6xl px-4 py-12 md:grid md:grid-cols-3 md:gap-12">
        <div className="md:col-span-2">
          <ContentBlocks blocks={service.body} />

          <h2 className="mt-10 mb-3 font-display text-xl font-bold text-navy">Frequently Asked Questions</h2>
          <FAQAccordion items={service.faqs} />
        </div>

        <aside className="mt-10 md:mt-0">
          {related.length > 0 && (
            <div className="rounded-xl border border-black/10 bg-white p-5">
              <h3 className="mb-3 font-display font-bold text-navy">Related Services</h3>
              <div className="space-y-3">
                {related.map((r) => (
                  <ServiceCard key={r.slug} service={r} />
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>

      <CTABand label={service.ctaLabel} />
    </>
  );
}

function LocationPageView({ slug }: { slug: string }) {
  const location = locations.find((l) => l.slug === slug)!;
  const neighbors = locations.filter((l) => location.neighborSlugs.includes(l.slug));
  const linkedServices = services.slice(0, 8);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Areas We Serve", href: "/#areas" },
    { label: location.name },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationWebPageSchema(location)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbItems)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(location.faqs)) }} />

      <Breadcrumbs items={breadcrumbItems} />
      <Hero h1={location.h1} subhead={location.distanceNote} primaryLabel="Request Service" />

      <div className="mx-auto max-w-6xl px-4 py-12">
        <p className="mb-6 max-w-prose leading-relaxed text-ink/90">{location.reasoning}</p>

        {!location.brief && (
          <>
            <h2 className="mb-3 font-display text-xl font-bold text-navy">
              Plumbing Services in {location.name}
            </h2>
            <div className="mb-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {linkedServices.map((s) => (
                <ServiceCard key={s.slug} service={s} />
              ))}
            </div>
          </>
        )}

        {location.brief && (
          <p className="mb-8 max-w-prose text-ink/90">
            The same full range of residential and commercial plumbing service available throughout Tupelo and the
            surrounding area is available in {location.name} as well.{" "}
            <a href="/#services" className="font-medium text-brand">
              View all services →
            </a>
          </p>
        )}

        {neighbors.length > 0 && (
          <>
            <h2 className="mb-3 font-display text-xl font-bold text-navy">Nearby Areas</h2>
            <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {neighbors.map((n) => (
                <AreaCard key={n.slug} location={n} />
              ))}
            </div>
          </>
        )}

        <h2 className="mb-3 font-display text-xl font-bold text-navy">What to Expect When You Call</h2>
        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-black/10 bg-white p-5">
            <p className="mb-1 font-display font-bold text-navy">1. Describe the Problem</p>
            <p className="text-sm text-muted">
              Call or request service and describe what&rsquo;s happening — that&rsquo;s enough to get the right next
              step moving, even without knowing the exact cause yet.
            </p>
          </div>
          <div className="rounded-xl border border-black/10 bg-white p-5">
            <p className="mb-1 font-display font-bold text-navy">2. Get an Accurate Diagnosis</p>
            <p className="text-sm text-muted">
              The actual cause gets identified in {location.name} before recommending a fix — not a guess based on
              symptoms alone.
            </p>
          </div>
          <div className="rounded-xl border border-black/10 bg-white p-5">
            <p className="mb-1 font-display font-bold text-navy">3. Same-Day, 24/7 for Emergencies</p>
            <p className="text-sm text-muted">
              Emergency plumbing is available around the clock, and same-day scheduling applies to routine repairs
              too — a plumbing problem in {location.name} doesn&rsquo;t have to wait a week.
            </p>
          </div>
        </div>

        <h2 className="mb-3 font-display text-xl font-bold text-navy">Frequently Asked Questions</h2>
        <FAQAccordion items={location.faqs} />
      </div>

      <CTABand label={`Need a Plumber in ${location.name}?`} />
    </>
  );
}