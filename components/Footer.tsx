import Link from "next/link";
import { SITE, fullAddress } from "@/lib/site";
import { services } from "@/lib/data/services";
import { locations } from "@/lib/data/locations";
import { Logo } from "@/components/Logo";

// Verified real business profiles only.
const SOCIAL_LINKS = [
  { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61594641583908" },
  { name: "Instagram", href: "https://www.instagram.com/tupeloplumber" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/tupelo-plumber/" },
  { name: "YouTube", href: "https://youtube.com/@plumberstupeloms" },
];

function SocialIcon({ name, className = "h-5 w-5" }: { name: string; className?: string }) {
  const props = { className, fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": true };
  if (name === "Facebook") {
    return (
      <svg {...props}>
        <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.16 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.45 2.91h-2.33V22c4.78-.78 8.44-4.94 8.44-9.94Z" />
      </svg>
    );
  }
  if (name === "Instagram") {
    return (
      <svg {...props}>
        <path d="M12 2c-2.72 0-3.06.01-4.12.06-1.06.05-1.78.22-2.41.46a4.87 4.87 0 0 0-1.76 1.15A4.87 4.87 0 0 0 2.56 5.43c-.24.63-.41 1.35-.46 2.41C2.05 8.9 2.04 9.24 2.04 12s.01 3.1.06 4.16c.05 1.06.22 1.78.46 2.41.25.65.6 1.21 1.15 1.76.55.55 1.11.9 1.76 1.15.63.24 1.35.41 2.41.46 1.06.05 1.4.06 4.12.06s3.06-.01 4.12-.06c1.06-.05 1.78-.22 2.41-.46a4.87 4.87 0 0 0 1.76-1.15 4.87 4.87 0 0 0 1.15-1.76c.24-.63.41-1.35.46-2.41.05-1.06.06-1.4.06-4.16s-.01-3.1-.06-4.16c-.05-1.06-.22-1.78-.46-2.41a4.87 4.87 0 0 0-1.15-1.76A4.87 4.87 0 0 0 18.53 2.5c-.63-.24-1.35-.41-2.41-.46C15.06 2.01 14.72 2 12 2Zm0 1.8c2.67 0 2.99.01 4.04.06.98.04 1.51.21 1.86.34.47.18.8.4 1.15.75.35.35.57.68.75 1.15.13.35.3.88.34 1.86.05 1.05.06 1.37.06 4.04s-.01 2.99-.06 4.04c-.04.98-.21 1.51-.34 1.86-.18.47-.4.8-.75 1.15-.35.35-.68.57-1.15.75-.35.13-.88.3-1.86.34-1.05.05-1.37.06-4.04.06s-2.99-.01-4.04-.06c-.98-.04-1.51-.21-1.86-.34a3.09 3.09 0 0 1-1.15-.75 3.09 3.09 0 0 1-.75-1.15c-.13-.35-.3-.88-.34-1.86-.05-1.05-.06-1.37-.06-4.04s.01-2.99.06-4.04c.04-.98.21-1.51.34-1.86.18-.47.4-.8.75-1.15.35-.35.68-.57 1.15-.75.35-.13.88-.3 1.86-.34 1.05-.05 1.37-.06 4.04-.06Zm0 3.07a5.13 5.13 0 1 0 0 10.26 5.13 5.13 0 0 0 0-10.26Zm0 8.46a3.33 3.33 0 1 1 0-6.66 3.33 3.33 0 0 1 0 6.66Zm6.53-8.66a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z" />
      </svg>
    );
  }
  if (name === "LinkedIn") {
    return (
      <svg {...props}>
        <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM8.34 18.34H5.67V9.75h2.67v8.59ZM7 8.6a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1Zm11.34 9.74h-2.67v-4.18c0-1-.02-2.28-1.39-2.28-1.4 0-1.62 1.09-1.62 2.21v4.25H10V9.75h2.56v1.17h.04c.36-.68 1.23-1.39 2.53-1.39 2.71 0 3.21 1.78 3.21 4.1v4.71Z" />
      </svg>
    );
  }
  if (name === "YouTube") {
    return (
      <svg {...props}>
        <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.88.55 9.38.55 9.38.55s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81ZM9.6 15.6V8.4L15.8 12l-6.2 3.6Z" />
      </svg>
    );
  }
  return null;
}

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
          <p className="mb-4 text-sm leading-relaxed text-white/60">
            Residential and commercial plumbing services in Tupelo, MS and the surrounding area.
          </p>
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${SITE.name} on ${social.name}`}
                className="text-white/60 transition hover:text-white"
              >
                <SocialIcon name={social.name} />
              </a>
            ))}
          </div>
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

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/70">
        © {new Date().getFullYear()} {SITE.name}. Serving Tupelo, MS and the surrounding area.
      </div>
    </footer>
  );
}