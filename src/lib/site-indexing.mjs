export const SITE_ORIGIN = "https://www.visaxa.app"

export const STATIC_SITEMAP_ROUTES = [
  { path: "/", lastModified: "2026-08-26", changeFrequency: "weekly", priority: 1 },
  { path: "/features", lastModified: "2026-08-26", changeFrequency: "monthly", priority: 0.8 },
  { path: "/pricing", lastModified: "2026-08-26", changeFrequency: "monthly", priority: 0.7 },
  { path: "/compare", lastModified: "2026-08-26", changeFrequency: "weekly", priority: 0.7 },
  { path: "/blog", lastModified: "latest-post", changeFrequency: "weekly", priority: 0.6 },
  { path: "/research", lastModified: "latest-post", changeFrequency: "weekly", priority: 0.6 },
  { path: "/what-is-visaxa", lastModified: "2026-08-26", changeFrequency: "monthly", priority: 0.6 },
  { path: "/contact", lastModified: "2026-08-26", changeFrequency: "monthly", priority: 0.5 },
  { path: "/privacy", lastModified: "2026-08-26", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", lastModified: "2026-08-26", changeFrequency: "yearly", priority: 0.3 },
]

export function articleLastModified(post) {
  return post.updated ?? post.date
}

export function latestArticleModification(posts) {
  return posts
    .map(articleLastModified)
    .sort((a, b) => new Date(b).getTime() - new Date(a).getTime())[0]
}
