import Link from "next/link";
import { BlogPost } from "@/lib/types";

export function BlogCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group block overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <div className="p-6">
        <span className="mb-3 inline-block rounded-full bg-surface px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand">
          {post.category}
        </span>
        <h3 className={`font-display font-extrabold text-navy group-hover:text-brand ${featured ? "text-2xl" : "text-lg"}`}>
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand">
          Read Article <span className="transition group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  );
}
