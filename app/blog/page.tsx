import type { Metadata } from "next";
import { Hero, CTABand } from "@/components/Common";
import { Breadcrumbs } from "@/components/Content";
import { BlogCard } from "@/components/BlogCard";
import { blogPosts } from "@/lib/data/blog";
import { SITE } from "@/lib/site";
import { breadcrumbSchema, blogCollectionSchema, socialMeta } from "@/lib/schema";

const pageTitle = "Tupelo, MS Plumbing Guides & Articles";
const fullTitle = `${pageTitle} | ${SITE.name}`;
const description = "Helpful plumbing guides covering water heaters, drains, sewer lines, and emergency plumbing for Tupelo, MS homeowners.";

export const metadata: Metadata = {
  title: pageTitle,
  description,
  alternates: { canonical: "/blog" },
  ...socialMeta(fullTitle, description, "/blog"),
};

export default function BlogIndexPage() {
  const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "Blog" }];
  const categories = Array.from(new Set(blogPosts.map((p) => p.category)));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogCollectionSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbItems)) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <Hero
        h1="Plumbing Guides & Articles"
        subhead="Practical, plain-language guides on common plumbing questions for Tupelo, MS homeowners."
        primaryLabel="Request Service"
      />

      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <span key={c} className="rounded-full border border-black/10 px-3 py-1 text-sm text-ink">
              {c}
            </span>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {blogPosts.map((post, i) => (
            <BlogCard key={post.slug} post={post} featured={i === 0} />
          ))}
        </div>
      </div>

      <CTABand label="Have a Plumbing Question We Didn't Cover?" />
    </>
  );
}