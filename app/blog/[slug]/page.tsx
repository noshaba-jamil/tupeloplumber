import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Hero, CTABand } from "@/components/Common";
import { ContentBlocks, FAQAccordion, Breadcrumbs, ServiceCard } from "@/components/Content";
import { BlogCard } from "@/components/BlogCard";
import { blogPosts } from "@/lib/data/blog";
import { services } from "@/lib/data/services";
import { SITE } from "@/lib/site";
import { blogPostingSchema, breadcrumbSchema, faqPageSchema, howToSchema, socialMeta } from "@/lib/schema";

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};

  const canonicalUrl = `${SITE.url}/blog/${post.slug}`;
  const social = socialMeta(`${post.title} | ${SITE.name}`, post.metaDescription, `/blog/${post.slug}`);

  return {
    title: post.title,
    description: post.metaDescription,
    alternates: { canonical: canonicalUrl },
    ...social,
    openGraph: {
      ...social.openGraph,
      type: "article",
      publishedTime: post.publishDate,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const related = services.filter((s) => post.relatedServiceSlugs.includes(s.slug));
  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: post.title }];

  const publishedLabel = new Date(post.publishDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema(post)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbItems)) }} />
      {post.faqs && post.faqs.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(post.faqs)) }} />
      )}
      {post.howToSteps && post.howToSteps.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema(post.title, post.howToSteps)) }} />
      )}

      <Breadcrumbs items={breadcrumbItems} />
      <Hero h1={post.title} subhead={post.excerpt} primaryLabel="Request Service" />

      <div className="mx-auto max-w-6xl px-4 py-12 md:grid md:grid-cols-3 md:gap-12">
        <article className="md:col-span-2">
          <p className="mb-6 text-sm font-medium text-muted">
            {post.category} · By {SITE.name} · Published{" "}
            <time dateTime={post.publishDate}>{publishedLabel}</time>
          </p>
          <ContentBlocks blocks={post.body} />

          {post.faqs && post.faqs.length > 0 && (
            <>
              <h2 className="mt-10 mb-3 font-display text-xl font-bold text-navy">Frequently Asked Questions</h2>
              <FAQAccordion items={post.faqs} />
            </>
          )}
        </article>

        <aside className="mt-10 space-y-8 md:mt-0">
          {related.length > 0 && (
            <div className="rounded-xl border border-black/10 bg-white p-5">
              <h3 className="mb-3 font-display font-bold text-navy">Related Services</h3>
              <div className="space-y-3">
                {related.map((r) => (
                  <ServiceCard key={r.slug} service={r} />
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>

      {otherPosts.length > 0 && (
        <div className="mx-auto max-w-6xl px-4 pb-16">
          <h2 className="mb-4 font-display text-xl font-bold text-navy">More Guides</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {otherPosts.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      )}

      <CTABand label="Have a Plumbing Question?" />
    </>
  );
}