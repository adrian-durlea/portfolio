import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", ...projects.map(project => `/projects/${project.slug}`)].map(path => ({ url: `${siteConfig.url}${path}`, changeFrequency: "monthly", priority: path === "" ? 1 : 0.8 }));
}
