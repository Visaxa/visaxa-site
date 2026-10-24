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
    }
  }
  return { type: "external_link_click", destinationPath: null, destinationHost: destination.hostname.toLowerCase() }
}
