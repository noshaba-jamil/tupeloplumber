import type { Metadata } from "next";
import { Hero, CTABand } from "@/components/Common";
import { Breadcrumbs } from "@/components/Content";
import { extendedCommunities } from "@/lib/data/locations";
import { SITE } from "@/lib/site";
import { breadcrumbSchema, socialMeta } from "@/lib/schema";

const pageTitle = "Service Areas Near Tupelo, MS";
const fullTitle = `${pageTitle} | ${SITE.name}`;
const description = "Plumbing service extends to smaller communities throughout the greater Tupelo, MS area beyond the primary service towns.";

export const metadata: Metadata = {
  title: pageTitle,
  description,
  alternates: { canonical: "/communities-we-also-serve" },
  ...socialMeta(fullTitle, description, "/communities-we-also-serve"),
};

export default function CommunitiesPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Areas We Serve", href: "/#areas" },
    { label: "Communities We Also Serve" },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbItems)) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <Hero
        h1="Communities We Also Serve"
        subhead="Plumbing service extends beyond the primary service towns to a number of smaller communities throughout the greater Tupelo area."
        primaryLabel="Request Service"
      />

      <div className="mx-auto max-w-4xl px-4 py-12">
        <p className="mb-6 leading-relaxed text-ink/90">
          Beyond Tupelo and the main surrounding towns, plumbing service also extends to a number of smaller
          communities throughout Lee County and the surrounding area. If your community isn&rsquo;t listed among
          the main service areas, it may still be covered — the communities below are all within the broader
          service range.
        </p>

        <div className="mb-8 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
          {extendedCommunities.map((c) => (
            <div key={c.name} className="rounded-lg border border-black/10 bg-white px-3 py-2 text-sm">
              <span className="font-medium text-navy">{c.name}</span>
              {c.county && <span className="block text-xs text-muted">{c.county}</span>}
            </div>
          ))}
        </div>

        <p className="mb-4 rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          Several of these are small, unincorporated communities without widely available public records — only
          county attribution that could be independently confirmed is shown above.
        </p>

        <h2 className="mb-2 font-display text-xl font-bold text-navy">Don&rsquo;t See Your Community Listed?</h2>
        <p className="mb-6 text-ink/90">
          This list isn&rsquo;t necessarily exhaustive. If you&rsquo;re near Tupelo, Lee County, or one of the
          surrounding counties and don&rsquo;t see your specific community listed with confidence, it&rsquo;s worth
          asking directly rather than assuming service isn&rsquo;t available.
        </p>
      </div>

      <CTABand label="Need Plumbing Service?" />
    </>
  );
}