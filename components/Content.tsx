"use client";

import Link from "next/link";
import Image from "next/image";
import { ContentBlock, FAQItem, ServicePage } from "@/lib/types";
import { LocationPage } from "@/lib/types";
import { images } from "@/lib/data/images";
import { Icon, clusterIcon } from "@/components/Icon";

export function ContentBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="prose-content max-w-prose">
      {blocks.map((block, i) => {
        if (block.type === "h2") {
          return (
            <h2 key={i} className="mt-8 mb-3 font-display text-xl font-bold text-navy">
              {block.text}
            </h2>
          );
        }
        if (block.type === "p") {
          return (
            <p key={i} className="mb-4 leading-relaxed text-ink/90">
              {block.text}
            </p>
          );
        }
        if (block.type === "list") {
          return (
            <ul key={i} className="mb-4 list-disc space-y-2 pl-5 text-ink/90">
              {block.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          );
        }
        if (block.type === "citation") {
          return (
            <p key={i} className="mb-4 text-sm text-muted">
              {block.text}{" "}
              
                href={block.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-brand underline"
              <a>
                {block.source}
              </a>
              .
            </p>
          );
        }
        // "note" blocks are intentionally never rendered: editorial reminders must not appear on the live site.
        return null;
      })}
    </div>
  );
}

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  return (
    <div className="divide-y divide-black/10 rounded-xl border border-black/10 bg-white">
      {items.map((item, i) => (
        <details key={i} open={i === 0} className="group px-5 py-4">
          <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-navy [&::-webkit-details-marker]:hidden">
            {item.q}
            <span className="ml-4 shrink-0 text-brand">
              <span className="inline group-open:hidden">+</span>
              <span className="hidden group-open:inline">−</span>
            </span>
          </summary>
          <p className="pt-3 text-ink/80">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export function ServiceCard({ service }: { service: ServicePage }) {
  const img = images[service.slug];
  return (
    <Link
      href={`/${service.slug}`}
      className="group block overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="relative h-36 w-full overflow-hidden bg-surface">
        {img ? (
          <Image
            src={img.url}
            alt={img.alt}
            fill
            sizes="(min-width: 1024px) 360px, 90vw"
            className="object-cover transition duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <Icon name={clusterIcon(service.cluster)} className="h-9 w-9 text-brand" />
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="flex items-center justify-between font-display font-bold text-navy group-hover:text-brand">
          {service.navLabel}
          <span className="translate-x-0 text-brand transition group-hover:translate-x-1">→</span>
        </h3>
        <p className="mt-1 text-sm text-muted">{service.intro}</p>
      </div>
    </Link>
  );
}

export function AreaCard({ location }: { location: LocationPage }) {
  return (
    <Link
      href={`/${location.slug}`}
      className="block rounded-lg border border-black/10 bg-white px-4 py-3 text-center font-medium text-navy transition hover:border-brand hover:text-brand"
    >
      {location.name}
    </Link>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-4 pt-4 text-sm text-muted">
      {items.map((item, i) => (
        <span key={i}>
          {item.href ? (
            <Link href={item.href} className="hover:text-brand">
              {item.label}
            </Link>
          ) : (
            <span className="text-ink">{item.label}</span>
          )}
          {i < items.length - 1 && <span className="mx-2">/</span>}
        </span>
      ))}
    </nav>
  );
}