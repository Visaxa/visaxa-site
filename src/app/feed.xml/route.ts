import { getAllPosts } from "@/lib/blog"

const baseUrl = "https://visaxa.app"

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;")
}

export async function GET() {
  const posts = await getAllPosts()

  const items = posts
    .map((p) => {
      const link = `${baseUrl}/blog/${p.slug}`
      const pubDate = new Date(p.date).toUTCString()

      return [
        "<item>",
        `<title>${escapeXml(p.title)}</title>`,
        `<link>${escapeXml(link)}</link>`,
        `<guid isPermaLink="true">${escapeXml(link)}</guid>`,
        `<pubDate>${escapeXml(pubDate)}</pubDate>`,
        `<description>${escapeXml(p.description)}</description>`,
        "</item>",
      ].join("")
    })
    .join("")

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0">',
    "<channel>",
    `<title>${escapeXml("Visaxa Research")}</title>`,
    `<link>${escapeXml(`${baseUrl}/blog`)}</link>`,
    `<description>${escapeXml(
      "Research and practical notes for salon owners and networks."
    )}</description>`,
    `<language>en</language>`,
    items,
    "</channel>",
    "</rss>",
  ].join("")

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  })
}

