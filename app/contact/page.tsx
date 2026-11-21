import type { Metadata } from "next";
import { Hero, SectionHeading } from "@/components/Common";
import { Breadcrumbs } from "@/components/Content";
import { SITE, fullAddress } from "@/lib/site";
import { services } from "@/lib/data/services";
import { locations } from "@/lib/data/locations";
import ContactForm from "@/components/ContactForm";
import { contactPageSchema, breadcrumbSchema, socialMeta } from "@/lib/schema";

// Title intentionally left as it was: this page is currently your best-ranked URL for
// "plumber tupelo", so it is not changed until the homepage rewrite has been recrawled
// and there are a few weeks of data to compare.
const pageTitle = "Call a Plumber in Tupelo, MS | Contact Us";
const description = `Call ${SITE.phoneDisplay} or send a request to Tupelo Plumber. Describe the problem and your address and we'll confirm coverage and scheduling.`;

export const metadata: Metadata = {
  title: {
    absolute: pageTitle,
  },
  description,
  alternates: {
    canonical: "/contact",
  },
  ...socialMeta(pageTitle, description, "/contact"),
};

export default function ContactPage() {
  const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "Contact" }];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbItems)) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <Hero
        h1="Contact Tupelo Plumber"
        subhead="Call, email, or send a request below. For an emergency, call."
        primaryLabel="Call Now"
      />

      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-12 md:grid-cols-2">
        <div>
          <SectionHeading>Get in Touch</SectionHeading>
          <ContactForm
            services={services.map((s) => s.navLabel)}
            areas={["Tupelo", ...locations.map((l) => l.name)]}
          />
        </div>

        <div>
          <SectionHeading>Business Information</SectionHeading>
          <dl className="space-y-3 text-ink/90">
            <div>
              <dt className="text-sm font-semibold text-muted">Phone</dt>
              <dd>
                <a href={`tel:${SITE.phoneTel}`} className="text-brand">
                  {SITE.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-muted">Email</dt>
              <dd>
                <a href={`mailto:${SITE.email}`} className="text-brand">
                  {SITE.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-muted">Address</dt>
              <dd>{fullAddress}</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-muted">Hours</dt>
              <dd>{SITE.hoursLabel}</dd>
            </div>
          </dl>

          <div className="mt-8">
            <h3 className="mb-2 font-display font-bold text-navy">What to Include in Your Request</h3>
            <ul className="list-disc space-y-1 pl-5 text-sm text-ink/80">
              <li>A short description of what&rsquo;s happening</li>
              <li>Your address, or the nearest road or county-road name</li>
              <li>Whether it&rsquo;s an emergency or a routine repair</li>
              <li>The best phone number to reach you</li>
            </ul>
          </div>

          <div className="mt-8 rounded-xl border border-red-200 bg-red-50 p-4">
            <h3 className="mb-1 font-display font-bold text-red-900">Plumbing Emergency?</h3>
            <p className="text-sm text-red-900/80">
              For a burst pipe, an active leak, or a sewage backup, call instead of using the form — emergency
              plumbing is available 24/7.{" "}
              <a href="/emergency-plumbing-tupelo-ms" className="font-medium underline">
                What counts as an emergency →
              </a>
            </p>
          </div>

          <div className="mt-8">
            <h3 className="mb-2 font-display font-bold text-navy">Service Areas</h3>
            <p className="text-sm text-ink/80">
              Serving Tupelo, MS and the surrounding communities. Coverage for a specific address is confirmed when you
              call or send a request.{" "}
              <a href="/communities-we-also-serve" className="font-medium text-brand">
                See all service areas →
              </a>
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-xl border border-black/10">
            <iframe
              title={`Map of ${SITE.name}`}
              src={`https://maps.google.com/maps?q=${encodeURIComponent(fullAddress)}&z=14&output=embed`}
              width="100%"
              height="280"
              loading="lazy"
              className="block"
            />
          </div>
        </div>
      </div>
    </>
  );
}