import type { Metadata } from "next";
import { Hero, SectionHeading, CTABand } from "@/components/Common";
import { ServiceCard, AreaCard, FAQAccordion } from "@/components/Content";
import {
  TrustStats,
  WhyChooseUs,
  PlumbingEmergencies,
  ProblemSolution,
  OurWork,
  QuickContact,
  QuickLinks,
  LocationMap,
  FromTheBlog,
} from "@/components/HomeSections";
import { services } from "@/lib/data/services";
import { locations } from "@/lib/data/locations";
import { SITE } from "@/lib/site";
import { faqPageSchema, socialMeta } from "@/lib/schema";
import { images } from "@/lib/data/images";
import { Reveal } from "@/components/Reveal";

const homePageTitle = "Plumber in Tupelo, MS | Local Plumbing Services";
const homeFullTitle = `Plumber in Tupelo, MS | ${SITE.name}`;
const homeDescription =
  "Plumbing services in Tupelo, MS — emergency repairs, drain cleaning, water heaters, and more. Serving Tupelo and nearby communities. Request service today.";

export const metadata: Metadata = {
  title: homePageTitle,
  description: homeDescription,
  alternates: { canonical: "/" },
  ...socialMeta(homeFullTitle, homeDescription, "/"),
};

const clusters = ["Core Plumbing", "Drain & Sewer", "Water Heaters", "Leaks & Pipes", "Fixtures", "Specialized"];

export default function HomePage() {
  const tier1 = locations.filter((l) => l.tier === 1);
  const emergency = services.find((s) => s.slug === "emergency-plumbing-tupelo-ms")!;

  const homeFaqs = [
    {
      q: "What plumbing services are available in Tupelo, MS?",
      a: "Everything from everyday repairs and emergency plumbing to drain and sewer services, water heaters, leak detection, repiping, and more.",
    },
    {
      q: "When should I call an emergency plumber?",
      a: "For active leaks, burst pipes, sewage backups, or a complete loss of water.",
    },
    { q: "Do you serve residential and commercial customers?", a: "Yes." },
    {
      q: "What areas near Tupelo do you serve?",
      a: "Tupelo and surrounding communities including Saltillo, Verona, Shannon, Mooreville, Guntown, Baldwyn, Fulton, Pontotoc, and Nettleton.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(homeFaqs)) }}
      />
      <Hero
        eyebrow="24/7 Plumbing Services in Tupelo, MS"
        h1="Plumber in Tupelo, MS"
        subhead="Residential and commercial plumbing services for Tupelo, MS and the surrounding area — from everyday repairs to the kind of problem that needs someone out the same day."
        primaryLabel="Request Service"
        image={images.hero}
      />

      <TrustStats />

      <QuickContact />

      {/* Emergency triage */}
      <section className="border-b border-black/5 bg-red-50">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="mb-3 font-display text-xl font-bold text-red-900">Is This a Plumbing Emergency?</h2>
          <p className="mb-4 max-w-2xl text-red-900/80">
            A burst pipe, an active leak, or a sewage backup needs attention right away — waiting can turn a repair
            into a much larger job, or cause damage to floors, walls, and belongings.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            
              href={`/${emergency.slug}`}
              className="rounded-full bg-red-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-red-700"
            <a>
              Call the Emergency Line →
            </a>
            <a href="/plumbing-repair-tupelo-ms" className="text-sm font-semibold text-red-900 underline">
              Something that can be scheduled instead? See Plumbing Repair →
            </a>
          </div>
        </div>
      </section>

      {/* Common problems routing */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionHeading kicker="Not Sure Where to Start?">Common Plumbing Problems in Tupelo Homes</SectionHeading>
        <p className="mb-6 max-w-2xl text-ink/80">
          A few issues account for most plumbing calls — knowing which category a problem falls into gets you to the
          right page faster.
        </p>
        <ul className="space-y-3 text-ink/90">
          <li>
            <strong>Drains that clog repeatedly in the same spot</strong> usually mean buildup along the pipe wall, not
            just a single blockage — see <a href="/drain-cleaning-tupelo-ms" className="text-brand underline">Drain Cleaning</a> and{" "}
            <a href="/hydro-jetting-tupelo-ms" className="text-brand underline">Hydro Jetting</a>.
          </li>
          <li>
            <strong>No hot water, or water that&rsquo;s lukewarm and inconsistent</strong>, is almost always a water
            heater issue — see <a href="/water-heater-repair-tupelo-ms" className="text-brand underline">Water Heater Repair</a>.
          </li>
          <li>
            <strong>A rising water bill with no obvious cause</strong> often points to a hidden leak — see{" "}
            <a href="/leak-detection-tupelo-ms" className="text-brand underline">Leak Detection</a>.
          </li>
          <li>
            <strong>Multiple drains backing up at once</strong>, or sewage odor in the yard, usually means the main
            sewer line — see <a href="/sewer-line-repair-tupelo-ms" className="text-brand underline">Sewer Line Repair</a>.
          </li>
          <li>
            <strong>Leaks that show up in different places over time</strong>, or discolored water, often mean the pipe
            material itself is aging out — see <a href="/repiping-tupelo-ms" className="text-brand underline">Repiping</a>.
          </li>
          <li>
            <strong>Weak or fluctuating water pressure</strong> can come from several different causes — see{" "}
            <a href="/water-pressure-tupelo-ms" className="text-brand underline">Low Water Pressure Repair</a>.
          </li>
        </ul>
        <p className="mt-6 text-sm text-muted">
          If none of these match what you&rsquo;re seeing,{" "}
          <a href="/plumbing-repair-tupelo-ms" className="font-medium text-brand">
            Plumbing Repair
          </a>{" "}
          is the right starting point — or call and describe what&rsquo;s happening.
        </p>
      </section>

      <WhyChooseUs />

      <section id="services" className="bg-surface py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading kicker="What We Do">Plumbing Services in Tupelo, MS</SectionHeading>
          {clusters.map((cluster) => (
            <div key={cluster} className="mb-10 last:mb-0">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted">{cluster}</h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {services
                  .filter((s) => s.cluster === cluster)
                  .map((s, i) => (
                    <Reveal key={s.slug} delay={i * 60}>
                      <ServiceCard service={s} />
                    </Reveal>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <PlumbingEmergencies />

      <ProblemSolution />

      <OurWork />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionHeading kicker="Why It Matters">Why a Licensed Local Plumber Matters</SectionHeading>
        <p className="max-w-3xl leading-relaxed text-ink/80">
          Some plumbing issues are genuinely simple — a plunger clears most everyday clogs, and a worn washer is an
          easy fix. Others aren&rsquo;t as simple as they look: a slow leak that seems minor can be a sign of pipe
          material failing throughout a home, and a drain that clears temporarily but keeps coming back is usually a
          symptom of a bigger blockage further down the line. Knowing the difference — and having it diagnosed
          correctly the first time — is usually what separates a quick fix from a repeat call for the same problem a
          few months later.
        </p>
      </section>

      <section id="areas" className="bg-surface py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading kicker="Where We Work">Areas We Serve</SectionHeading>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {tier1.map((l) => (
              <AreaCard key={l.slug} location={l} />
            ))}
          </div>

          <div className="mt-8 overflow-x-auto rounded-xl border border-black/10 bg-white">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-black/10 text-muted">
                  <th className="px-4 py-3 font-semibold">Town</th>
                  <th className="px-4 py-3 font-semibold">Distance from Tupelo</th>
                </tr>
              </thead>
              <tbody>
                {tier1.map((l) => (
                  <tr key={l.slug} className="border-b border-black/5 last:border-0">
                    <td className="px-4 py-2.5">
                      <a href={`/${l.slug}`} className="font-medium text-brand hover:underline">
                        {l.name}
                      </a>
                    </td>
                    <td className="px-4 py-2.5 text-ink/70">{l.distanceNote}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-sm text-muted">
            Service also extends to New Albany, Amory, Booneville, Mantachie, Okolona, Belden, Plantersville, and
            several smaller communities throughout the area.{" "}
            <a href="/communities-we-also-serve" className="font-medium text-brand">
              See all service areas →
            </a>
          </p>
          <p className="mt-4 text-sm text-muted">
            Also serving Joyner, Highland Circle, Barnes Crossing, West Jackson Street, South Tupelo/Eason
            Boulevard, and Downtown Tupelo within Tupelo itself.
          </p>
        </div>
      </section>

      <LocationMap />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionHeading kicker="Questions">Frequently Asked Questions</SectionHeading>
        <div className="max-w-2xl">
          <FAQAccordion items={homeFaqs} />
        </div>
        <a href="/faq" className="mt-4 inline-block text-sm font-medium text-brand">
          View All FAQs →
        </a>
      </section>

      <FromTheBlog />

      <QuickLinks />

      <CTABand label="Ready to Schedule Service?" />
    </>
  );
}