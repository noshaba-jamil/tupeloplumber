import { MetadataRoute } from "next";
import { services } from "@/lib/data/services";
import { locations } from "@/lib/data/locations";
import { blogPosts } from "@/lib/data/blog";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // No lastModified on static, service, or location routes: we don't track
  // real per-page edit dates, and a build-time `new Date()` would report every
  // page as changed on every deploy. Omitting the field is the honest signal.
  const staticRoutes = ["", "/faq", "/contact", "/about", "/communities-we-also-serve", "/blog"].map((path) => ({
    url: `${SITE.url}${path}`,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${SITE.url}/${s.slug}`,
  }));

  const locationRoutes = locations.map((l) => ({
    url: `${SITE.url}/${l.slug}`,
  }));

  // Blog posts have a real authored date, so this one is a genuine signal.
  const blogRoutes = blogPosts.map((p) => ({
    url: `${SITE.url}/blog/${p.slug}`,
    lastModified: p.publishDate,
  }));

  return [...staticRoutes, ...serviceRoutes, ...locationRoutes, ...blogRoutes];
}