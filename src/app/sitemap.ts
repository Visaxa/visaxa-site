import type { MetadataRoute } from "next"
import { getAllPosts } from "@/lib/blog"
import {
  articleLastModified,
  latestArticleModification,
  SITE_ORIGIN,
  STATIC_SITEMAP_ROUTES,
} from "@/lib/site-indexing.mjs"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts()
  const latestPostChange = latestArticleModification(posts)

  const staticRoutes: MetadataRoute.Sitemap = STATIC_SITEMAP_ROUTES.map((route) => ({
    url: `${SITE_ORIGIN}${route.path === "/" ? "" : route.path}`,
    lastModified:
      route.lastModified === "latest-post" ? latestPostChange : route.lastModified,
    changeFrequency:
      route.changeFrequency as MetadataRoute.Sitemap[number]["changeFrequency"],
    priority: route.priority,
  }))

  const postRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${SITE_ORIGIN}/blog/${p.slug}`,
    lastModified: articleLastModified(p),
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  return [...staticRoutes, ...postRoutes]
}
