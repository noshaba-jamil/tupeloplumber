import Link from "next/link";
import { SITE } from "@/lib/site";
import { services } from "@/lib/data/services";
import { locations } from "@/lib/data/locations";

export const metadata = {
  title: `Page Not Found | ${SITE.name}`,
  robots: { index: false, follow: true },
};

export default function NotFound() {
  const popularServices = services.slice(0, 6);
  const tier1 = locations.filter((l) => l.tier === 1).slice(0, 6);

  return (
    <div className="mx-auto max-w-4xl px-4 py-20 text-center">
      <p className="mb-3 text-sm font-extrabold uppercase tracking-widest text-brand">404</p>
      <h1 className="mb-4 font-display text-3xl font-extrabold text-navy md:text-4xl">
        We Couldn&rsquo;t Find That Page
      </h1>
      <p className="mx-auto mb-10 max-w-md text-ink/70">
        The page you were looking for doesn&rsquo;t exist or may have moved. Here are a few places to go instead.
      </p>

      <div className="mb-10 flex flex-wrap justify-center gap-4">
        <Link href="/" className="rounded-full bg-accent px-6 py-3 font-extrabold text-black hover:brightness-95">
          Go to Homepage
        </Link>
        <Link
          href="/contact"
          className="rounded-full border-2 border-navy/20 px-6 py-3 font-bold text-navy hover:bg-navy hover:text-white"
        >
          Contact Us
        </Link>
      </div>

      <div className="grid gap-8 text-left sm:grid-cols-2">
        <div>
          <h2 className="mb-3 font-display font-bold text-navy">Popular Services</h2>
          <ul className="space-y-2 text-sm">
            {popularServices.map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}`} className="text-brand hover:underline">
                  {s.navLabel}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-3 font-display font-bold text-navy">Service Areas</h2>
          <ul className="space-y-2 text-sm">
            {tier1.map((l) => (
              <li key={l.slug}>
                <Link href={`/${l.slug}`} className="text-brand hover:underline">
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
