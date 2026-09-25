import Link from "next/link";
import { SITE, fullAddress } from "@/lib/site";
import { services } from "@/lib/data/services";
import { locations } from "@/lib/data/locations";
import { Logo } from "@/components/Logo";

export default function Footer() {
  const tier1 = locations.filter((l) => l.tier === 1);

  return (
    <footer className="bg-black text-white/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <Logo dark />
            <span className="font-display text-lg font-bold text-white">{SITE.name}</span>
          </div>
          <p className="text-sm leading-relaxed text-white/60">
            Residential and commercial plumbing services in Tupelo, MS and the surrounding area.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white">Services</h3>
          <ul className="space-y-2 text-sm">
            {services.slice(0, 8).map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}`} className="hover:text-white">
                  {s.navLabel}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white">Areas We Serve</h3>
          <ul className="space-y-2 text-sm">
            {tier1.map((l) => (
              <li key={l.slug}>
                <Link href={`/${l.slug}`} className="hover:text-white">
                  {l.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/communities-we-also-serve" className="hover:text-white">
                Communities We Also Serve
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={`tel:${SITE.phoneTel}`} className="hover:text-white">
                {SITE.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-white">
                {SITE.email}
              </a>
            </li>
            <li className="text-white/60">{fullAddress}</li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact / Request Service
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-white">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/40">
        © {new Date().getFullYear()} {SITE.name}. Serving Tupelo, MS and the surrounding area.
      </div>
    </footer>
  );
}
