import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/Icon";
import { SectionHeading } from "@/components/Common";
import { ServiceCard } from "@/components/Content";
import { services } from "@/lib/data/services";
import { fullAddress, SITE } from "@/lib/site";
import { images } from "@/lib/data/images";
import { blogPosts } from "@/lib/data/blog";
import { BlogCard } from "@/components/BlogCard";
import { Reveal } from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

// ---- Trust stats: real, confirmed business policies only — no invented numbers ----
export function TrustStats() {
  const stats = [
    { icon: "clock", label: "24/7 Emergency Service", detail: "We Answer Every Call" },
    { icon: "alert", label: `${SITE.emergencyArrivalMinutes}-Min Arrival`, detail: "For Emergency Calls" },
    { icon: "shield", label: "$0 Call-Out Fee", detail: "Nothing Charged Just to Show Up" },
    { icon: "building", label: "Upfront Pricing", detail: "You Know the Cost Before We Start" },
  ];
  return (
    <section className="bg-accent py-8">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 80} className="text-center">
            <Icon name={s.icon} className="mx-auto mb-2 h-7 w-7 text-black" />
            <p className="font-display text-base font-extrabold text-black">{s.label}</p>
            <p className="text-sm font-medium text-black/60">{s.detail}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// ---- Why Choose Us: image + checklist split layout, generic defensible claims only ----
export function WhyChooseUs() {
  const points = [
    { title: "Clear Diagnosis First", body: "The problem gets identified before deciding on the right fix." },
    { title: "Local to Tupelo", body: "Serving Tupelo and the surrounding Lee County area." },
    { title: "Straightforward Recommendations", body: "Repair vs. replace, explained plainly, before any work starts." },
    { title: "Residential & Commercial", body: "The same full range of service for homes and businesses." },
  ];
  const img = images["about"];
  return (
    <section className="bg-black py-16 text-white md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2 md:items-center">
        <Reveal>
          <figure className="m-0">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
              <Image src={img.url} alt={img.alt} fill sizes="(min-width: 768px) 40vw, 90vw" className="object-cover" />
            </div>
          </figure>
        </Reveal>
        <Reveal delay={120}>
          <p className="mb-2 text-sm font-extrabold uppercase tracking-widest text-accent">Why Choose Us</p>
          <h2 className="mb-6 font-display text-2xl font-extrabold tracking-tight md:text-4xl">
            A Straightforward Approach to Plumbing
          </h2>
          <ul className="space-y-4">
            {points.map((p) => (
              <li key={p.title} className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent">
                  <CheckIcon />
                </span>
                <div>
                  <p className="font-display font-bold text-white">{p.title}</p>
                  <p className="text-sm text-white/60">{p.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2.5 7.5 5.5 10.5 11.5 3.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ---- Common plumbing emergencies ----
export function PlumbingEmergencies() {
  const items = [
    { title: "Burst Pipes", body: "An actively leaking or ruptured supply line needs immediate attention.", href: "emergency-plumbing-tupelo-ms" },
    { title: "Sewage Backups", body: "Sewage backing up into a sink, tub, or floor drain is a health and property concern.", href: "sewer-line-repair-tupelo-ms" },
    { title: "Severe Drain Clogs", body: "A clog that keeps recurring despite clearing often points to a bigger issue.", href: "hydro-jetting-tupelo-ms" },
    { title: "Water Heater Failure", body: "No hot water, or a leaking unit, especially near electrical components.", href: "water-heater-repair-tupelo-ms" },
    { title: "Hidden Leaks", body: "A rising water bill or damp spot with no clear cause can mean a hidden leak.", href: "leak-detection-tupelo-ms" },
    { title: "Loss of Water Pressure", body: "A sudden or whole-house pressure drop can signal a leak or line problem.", href: "water-pressure-tupelo-ms" },
  ];
  return (
    <section className="bg-black py-16 text-white md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <p className="mb-2 text-sm font-extrabold uppercase tracking-widest text-accent">24/7 Plumbing Emergencies</p>
        <h2 className="mb-8 max-w-2xl font-display text-2xl font-extrabold tracking-tight md:text-4xl">
          Common Plumbing Emergencies We Help With, Day or Night
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <Link
                href={`/${item.href}`}
                className="block rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-accent hover:bg-white/10"
              >
                <h3 className="font-display font-bold text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-white/60">{item.body}</p>
              </Link>
            </Reveal>
          ))}
        </div>
        <a
          href={`tel:${SITE.phoneTel}`}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-extrabold text-black shadow-lg transition hover:brightness-95"
        >
          Call for Plumbing Help
        </a>
      </div>
    </section>
  );
}

// ---- Problem / solution section ----
export function ProblemSolution() {
  const steps = [
    { title: "Identify the Problem", body: "Symptoms get described and the likely cause narrowed down." },
    { title: "Understand the Options", body: "Repair vs. replace, or which service actually applies, explained plainly." },
    { title: "Get the Right Service", body: "The appropriate service is scheduled — not a one-size-fits-all fix." },
    { title: "Resolve the Issue", body: "The work gets done, addressing the actual cause, not just the symptom." },
  ];
  return (
    <section className="bg-surface py-16">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading kicker="How It Works">
          When You Have a Plumbing Problem, You Need a Clear Next Step
        </SectionHeading>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
      </div>
    </section>
  );
}

// ---- "Our Work" — photography illustrating each service ----
export function OurWork() {
  // Prioritize services that have a real photo mapped, so this section actually shows photography.
  const withPhotos = services.filter((s) => images[s.slug]);
  const items = [...withPhotos, ...services.filter((s) => !images[s.slug])].slice(0, 6);
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <SectionHeading kicker="What We Help With">Common Plumbing Work We Help With</SectionHeading>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((s, i) => (
          <Reveal key={s.slug} delay={i * 60}>
            <ServiceCard service={s} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// ---- Quick Contact: inline mini form + call CTA on the homepage itself ----
export function QuickContact() {
  return (
    <section className="bg-surface py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:items-center">
        <Reveal>
          <p className="mb-2 text-sm font-extrabold uppercase tracking-widest text-brand">Get In Touch</p>
          <h2 className="mb-4 font-display text-2xl font-extrabold tracking-tight text-navy md:text-4xl">
            Need a Plumber in Tupelo, MS?
          </h2>
          <p className="mb-6 max-w-md text-ink/80">
            Available 24/7 — call now for emergencies, or send a quick request below and describe what&rsquo;s going on.
          </p>
          <a
            href={`tel:${SITE.phoneTel}`}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-extrabold text-black shadow-lg transition hover:brightness-95"
          >
            Call Now — {SITE.phoneDisplay}
          </a>
        </Reveal>
        <Reveal delay={120}>
          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <ContactForm services={services.map((s) => s.navLabel)} areas={["Tupelo", "Saltillo", "Verona", "Shannon", "Mooreville", "Guntown", "Baldwyn", "Fulton", "Pontotoc", "Nettleton"]} compact />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ---- From the Blog: homepage preview of recent guides ----
export function FromTheBlog() {
  const posts = blogPosts.slice(0, 3);
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-6 flex items-center justify-between">
        <SectionHeading kicker="Plumbing Guides">From the Blog</SectionHeading>
        <Link href="/blog" className="hidden text-sm font-bold text-brand sm:inline-block">
          View All Guides →
        </Link>
      </div>
      <div className="grid gap-6 sm:grid-cols-3">
        {posts.map((post, i) => (
          <Reveal key={post.slug} delay={i * 60}>
            <BlogCard post={post} />
          </Reveal>
        ))}
      </div>
      <Link href="/blog" className="mt-6 block text-sm font-bold text-brand sm:hidden">
        View All Guides →
      </Link>
    </section>
  );
}

// ---- Quick links ----
export function QuickLinks() {
  const links = [
    { label: "Emergency Plumbing", href: "emergency-plumbing-tupelo-ms" },
    { label: "Plumbing Repair", href: "plumbing-repair-tupelo-ms" },
    { label: "Drain Cleaning", href: "drain-cleaning-tupelo-ms" },
    { label: "Hydro Jetting", href: "hydro-jetting-tupelo-ms" },
    { label: "Sewer Line Repair", href: "sewer-line-repair-tupelo-ms" },
    { label: "Water Heater Repair", href: "water-heater-repair-tupelo-ms" },
    { label: "Leak Detection", href: "leak-detection-tupelo-ms" },
    { label: "Water Line Services", href: "water-line-services-tupelo-ms" },
    { label: "Residential Plumbing", href: "residential-plumbing-tupelo-ms" },
    { label: "Commercial Plumbing", href: "commercial-plumbing-tupelo-ms" },
  ];
  const pages = [
    { label: "Service Areas", href: "communities-we-also-serve" },
    { label: "FAQ", href: "faq" },
    { label: "About", href: "about" },
    { label: "Blog", href: "blog" },
    { label: "Contact", href: "contact" },
  ];
  return (
    <section className="border-t border-black/5 bg-white py-14">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-5 font-display text-lg font-bold text-navy">Quick Links</h2>
        <div className="flex flex-wrap gap-3">
          {[...links, ...pages].map((l) => (
            <Link
              key={l.href}
              href={`/${l.href}`}
              className="rounded-full border border-black/10 px-4 py-2 text-sm text-ink hover:border-brand hover:text-brand"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---- Map embed using the real, verified address — no API key required for this embed form ----
export function LocationMap() {
  const query = encodeURIComponent(fullAddress);
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <SectionHeading kicker="Find Us">Serving Tupelo, MS and the Surrounding Area</SectionHeading>
      <div className="overflow-hidden rounded-xl border border-black/10">
        <iframe
          title={`Map of ${SITE.name} service area`}
          src={`https://maps.google.com/maps?q=${query}&z=12&output=embed`}
          width="100%"
          height="360"
          loading="lazy"
          className="block"
        />
      </div>
    </section>
  );
}