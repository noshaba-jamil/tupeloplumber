"use client";

import Link from "next/link";
import { useState } from "react";
import { SITE } from "@/lib/site";
import { services } from "@/lib/data/services";
import { locations } from "@/lib/data/locations";
import { Logo } from "@/components/Logo";

const clusters = ["Core Plumbing", "Drain & Sewer", "Water Heaters", "Leaks & Pipes", "Fixtures", "Specialized"];

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<"services" | "areas" | null>(null);

  const tier1 = locations.filter((l) => l.tier === 1);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
          <Logo />
          <span className="font-display text-lg font-bold text-navy">{SITE.name}</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-sm font-medium text-ink md:flex">
          <Link href="/" className="hover:text-brand">
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-brand" aria-expanded={servicesOpen}>
              Services <Chevron />
            </button>
            {servicesOpen && (
              <div className="absolute left-1/2 top-full w-[640px] -translate-x-1/2 rounded-xl border border-black/10 bg-white p-6 shadow-xl">
                <div className="grid grid-cols-3 gap-6">
                  {clusters.map((cluster) => (
                    <div key={cluster}>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">{cluster}</p>
                      <ul className="space-y-1.5">
                        {services
                          .filter((s) => s.cluster === cluster)
                          .map((s) => (
                            <li key={s.slug}>
                              <Link href={`/${s.slug}`} className="text-sm text-ink hover:text-brand">
                                {s.navLabel}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setAreasOpen(true)}
            onMouseLeave={() => setAreasOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-brand" aria-expanded={areasOpen}>
              Service Areas <Chevron />
            </button>
            {areasOpen && (
              <div className="absolute left-1/2 top-full w-72 -translate-x-1/2 rounded-xl border border-black/10 bg-white p-5 shadow-xl">
                <div className="grid grid-cols-2 gap-1.5">
                  {tier1.map((l) => (
                    <Link key={l.slug} href={`/${l.slug}`} className="text-sm text-ink hover:text-brand">
                      {l.name}
                    </Link>
                  ))}
                </div>
                <Link
                  href="/communities-we-also-serve"
                  className="mt-3 block border-t border-black/10 pt-3 text-sm font-medium text-brand"
                >
                  See all service areas →
                </Link>
              </div>
            )}
          </div>

          <Link href="/about" className="hover:text-brand">
            About
          </Link>
          <Link href="/blog" className="hover:text-brand">
            Blog
          </Link>
          <Link href="/faq" className="hover:text-brand">
            FAQ
          </Link>
          <Link href="/contact" className="hover:text-brand">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${SITE.phoneTel}`}
            className="hidden items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-bold text-navy transition hover:brightness-95 sm:inline-flex"
          >
            Call Now — {SITE.phoneDisplay}
          </a>
          <a href={`tel:${SITE.phoneTel}`} aria-label={`Call ${SITE.name}`} className="rounded-full bg-navy p-2 text-white sm:hidden">
            <PhoneIcon />
          </a>
          <button
            className="rounded-lg border border-black/10 p-2 md:hidden"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <BurgerIcon open={mobileOpen} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-black/10 bg-white md:hidden">
          <nav className="mx-auto max-w-6xl px-4 py-4 text-sm">
            <Link href="/" className="block py-2 font-medium text-ink" onClick={() => setMobileOpen(false)}>
              Home
            </Link>

            <button
              className="flex w-full items-center justify-between py-2 font-medium text-ink"
              onClick={() => setMobileSection(mobileSection === "services" ? null : "services")}
            >
              Services <Chevron rotated={mobileSection === "services"} />
            </button>
            {mobileSection === "services" && (
              <div className="mb-2 pl-3">
                {clusters.map((cluster) => (
                  <div key={cluster} className="mb-3">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted">{cluster}</p>
                    {services
                      .filter((s) => s.cluster === cluster)
                      .map((s) => (
                        <Link
                          key={s.slug}
                          href={`/${s.slug}`}
                          className="block py-1 text-ink"
                          onClick={() => setMobileOpen(false)}
                        >
                          {s.navLabel}
                        </Link>
                      ))}
                  </div>
                ))}
              </div>
            )}

            <button
              className="flex w-full items-center justify-between py-2 font-medium text-ink"
              onClick={() => setMobileSection(mobileSection === "areas" ? null : "areas")}
            >
              Service Areas <Chevron rotated={mobileSection === "areas"} />
            </button>
            {mobileSection === "areas" && (
              <div className="mb-2 pl-3">
                {tier1.map((l) => (
                  <Link key={l.slug} href={`/${l.slug}`} className="block py-1 text-ink" onClick={() => setMobileOpen(false)}>
                    {l.name}
                  </Link>
                ))}
                <Link
                  href="/communities-we-also-serve"
                  className="block py-1 font-medium text-brand"
                  onClick={() => setMobileOpen(false)}
                >
                  See all service areas →
                </Link>
              </div>
            )}

            <Link href="/about" className="block py-2 font-medium text-ink" onClick={() => setMobileOpen(false)}>
              About
            </Link>
            <Link href="/blog" className="block py-2 font-medium text-ink" onClick={() => setMobileOpen(false)}>
              Blog
            </Link>
            <Link href="/faq" className="block py-2 font-medium text-ink" onClick={() => setMobileOpen(false)}>
              FAQ
            </Link>
            <Link href="/contact" className="block py-2 font-medium text-ink" onClick={() => setMobileOpen(false)}>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function Chevron({ rotated = false }: { rotated?: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      className={`transition-transform ${rotated ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.9 21 3 13.1 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.3 0 .7-.2 1l-2.2 2.3Z"
        stroke="white"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function BurgerIcon({ open }: { open: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {open ? (
        <path d="M6 6l12 12M18 6L6 18" stroke="#102033" strokeWidth="1.8" strokeLinecap="round" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" stroke="#102033" strokeWidth="1.8" strokeLinecap="round" />
      )}
    </svg>
  );
}
