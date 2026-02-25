import type { MetadataRoute } from "next"
import { getAllPosts } from "@/lib/blog"

const baseUrl = "https://visaxa.app"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/features`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/pricing`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/compare`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/blog`, changeFrequency: "weekly", priority: 0.6 },

    // planned compare routes
    { url: `${baseUrl}/compare/square-vs-fresha-vs-mindbody`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/compare/financial-privacy-safe-mode`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/compare/multi-location-networks`, changeFrequency: "monthly", priority: 0.6 },
  ]

  const postRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: new Date(p.date ?? Date.now()),
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  return [...staticRoutes, ...postRoutes]
}