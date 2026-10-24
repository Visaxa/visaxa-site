export function shouldEmitPageView(previousPath, nextPath) {
  return typeof nextPath === "string" && nextPath.startsWith("/") && previousPath !== nextPath
}

export function classifyLink(href, currentOrigin, explicitType) {
  let destination
  try { destination = new URL(href, currentOrigin) } catch { return null }
  if (destination.origin === currentOrigin) {
    return {
      type: explicitType ?? "internal_link_click",
      destinationPath: destination.pathname,
      destinationHost: null,
      linkCategory: explicitType === "article_next_click" ? "next_article" : explicitType === "product_cta_click" ? "product_cta" : "editorial",
    }
  }
  return { type: "external_link_click", destinationPath: null, destinationHost: destination.hostname.toLowerCase(), linkCategory: "external_reference" }
}

export function stableLinkId({ sourcePath, destination, occurrence = 1, explicitId }) {
  if (explicitId) return explicitId
  const safeSource = sourcePath.replace(/[^a-zA-Z0-9_-]/g, "-").replace(/-+/g, "-").slice(0, 48) || "root"
  const safeDestination = destination.replace(/[^a-zA-Z0-9._-]/g, "-").replace(/-+/g, "-").slice(0, 48)
  return `link:${safeSource}:${safeDestination}:${Math.max(1, Math.min(occurrence, 99))}`.slice(0, 120)
}
