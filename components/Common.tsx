import { ReactNode } from "react";
import Image from "next/image";
import { SITE } from "@/lib/site";
import { SiteImage } from "@/lib/data/images";
import { Reveal } from "@/components/Reveal";

export function Hero({
  eyebrow,
  h1,
  subhead,
  primaryLabel,
  urgent = false,
  image,
}: {
  eyebrow?: string;
  h1: string;
  subhead: string;
  primaryLabel: string;
  urgent?: boolean;
  image?: SiteImage;
}) {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {image ? (
        <>
          <Image
            src={image.url}
            alt={image.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* Dark gradient overlay so text stays readable over any photo */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </>
      ) : (
        <PipePattern />
      )}

      <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-32">
        <Reveal>
          <div className="max-w-2xl">
            {eyebrow && (
              <span className="mb-5 inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-black">
                {eyebrow}
              </span>
            )}
            <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
              {h1}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80">{subhead}</p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={`tel:${SITE.phoneTel}`}
                className={`rounded-full px-7 py-3.5 text-base font-bold shadow-lg transition hover:scale-[1.03] ${
                  urgent ? "bg-red-600 text-white hover:bg-red-700" : "bg-accent text-black hover:brightness-95"
                }`}
              >
                Call Now — {SITE.phoneDisplay}
              </a>
              <a
                href="/contact"
                className="rounded-full border-2 border-white/40 px-7 py-3.5 text-base font-bold text-white backdrop-blur-sm transition hover:border-white hover:bg-white hover:text-black"
              >
                {primaryLabel}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function SectionHeading({ children, kicker }: { children: ReactNode; kicker?: string }) {
  return (
    <div className="mb-6">
      {kicker && (
        <p className="mb-2 text-sm font-extrabold uppercase tracking-widest text-brand">{kicker}</p>
      )}
      <h2 className="font-display text-2xl font-extrabold tracking-tight text-navy md:text-3xl">{children}</h2>
    </div>
  );
}

export function CTABand({ label }: { label: string }) {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-14 md:flex-row md:items-center">
        <h2 className="max-w-xl font-display text-2xl font-extrabold tracking-tight md:text-3xl">{label}</h2>
        <div className="flex flex-wrap gap-4">
          <a
            href={`tel:${SITE.phoneTel}`}
            className="rounded-full bg-accent px-6 py-3 font-bold text-black transition hover:brightness-95"
          >
            Call Now — {SITE.phoneDisplay}
          </a>
          <a
            href="/contact"
            className="rounded-full border-2 border-white/30 px-6 py-3 font-bold text-white transition hover:bg-white hover:text-black"
          >
            Request Service
          </a>
        </div>
      </div>
    </section>
  );
}

export function StickyMobileCall() {
  return (
    <a
      href={`tel:${SITE.phoneTel}`}
      className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-center gap-2 bg-accent py-3 text-center font-bold text-black shadow-lg md:hidden"
    >
      Call Now — {SITE.phoneDisplay}
    </a>
  );
}

// Original abstract decorative pattern used only when no photo is available for a page.
function PipePattern() {
  return (
    <svg
      className="pointer-events-none absolute inset-y-0 right-0 hidden h-full w-1/2 opacity-[0.08] md:block"
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
    >
      <path d="M0 60h140a30 30 0 0 1 30 30v240" stroke="white" strokeWidth="10" />
      <path d="M80 0v100a30 30 0 0 0 30 30h260" stroke="white" strokeWidth="10" />
      <circle cx="260" cy="130" r="14" stroke="white" strokeWidth="8" />
      <path d="M0 220h100a30 30 0 0 1 30 30v150" stroke="white" strokeWidth="10" />
    </svg>
  );
}
