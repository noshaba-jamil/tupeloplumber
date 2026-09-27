import type { Metadata } from "next";
import { Hero, SectionHeading } from "@/components/Common";
import { Breadcrumbs } from "@/components/Content";
import { SITE, fullAddress } from "@/lib/site";
import { services } from "@/lib/data/services";
import { locations } from "@/lib/data/locations";
import ContactForm from "@/components/ContactForm";
import { contactPageSchema, breadcrumbSchema, socialMeta } from "@/lib/schema";

const pageTitle = "Call a Plumber in Tupelo, MS | Contact Us";
const description =
  "Contact Tupelo Plumber to request service, ask a question, or schedule an estimate in Tupelo, MS.";

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
      <Hero h1="Contact Us" subhead="Call, email, or send a request below." primaryLabel="Call Now" />

      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-12 md:grid-cols-2">
        <div>
          <SectionHeading>Get in Touch</SectionHeading>
          <ContactForm services={services.map((s) => s.navLabel)} areas={locations.map((l) => l.name)} />
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
            <h3 className="mb-2 font-display font-bold text-navy">Service Areas</h3>
            <p className="text-sm text-ink/80">
              Serving Tupelo, MS and the surrounding communities.{" "}
              <a href="/#areas" className="font-medium text-brand">
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