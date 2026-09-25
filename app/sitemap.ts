import { MetadataRoute } from "next";
import { services } from "@/lib/data/services";
import { locations } from "@/lib/data/locations";
import { blogPosts } from "@/lib/data/blog";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/faq", "/contact", "/about", "/communities-we-also-serve", "/blog"].map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: new Date(),
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${SITE.url}/${s.slug}`,
    lastModified: new Date(),
  }));

  const locationRoutes = locations.map((l) => ({
    url: `${SITE.url}/${l.slug}`,
    lastModified: new Date(),
  }));

  const blogRoutes = blogPosts.map((p) => ({
    url: `${SITE.url}/blog/${p.slug}`,
    lastModified: p.publishDate,
  }));

  return [...staticRoutes, ...serviceRoutes, ...locationRoutes, ...blogRoutes];
}
