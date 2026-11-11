import type { MetadataRoute } from "next";
import { getBlogSlugs } from "@/lib/blog";
import { siteUrl } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "blog", "project", "resume", "work"];
  const blogPages = getBlogSlugs().map((slug) => `blog/${slug}`);

  return [...staticPages, ...blogPages].map((path) => ({
    url: new URL(path, siteUrl).toString(),
  }));
}
