"use client"

import * as React from "react"
import mermaid from "mermaid"

let initialized = false

export function Mermaid({
  chart,
  className,
}: {
  chart?: string
  className?: string
}) {
  const id = React.useId().replaceAll(":", "")
  const [svg, setSvg] = React.useState<string>("")
  const normalized = React.useMemo(() => {
    const raw = typeof chart === "string" ? chart : ""
    return raw.replaceAll("\r\n", "\n").trim()
  }, [chart])

  React.useEffect(() => {
    if (!initialized) {
      mermaid.initialize({
        startOnLoad: false,
        securityLevel: "strict",
        theme: "base",
        themeVariables: {
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
          primaryColor: "#f5f5f5",
          primaryTextColor: "#111827",
          lineColor: "#4b5563",
          secondaryColor: "#ffffff",
          tertiaryColor: "#ffffff",
        },
      })
      initialized = true
    }

    let cancelled = false

    mermaid
      .render(`m-${id}`, normalized)
      .then((result) => {
        if (!cancelled) setSvg(result.svg)
      })
      .catch(() => {
        if (!cancelled) setSvg("")
      })

    return () => {
      cancelled = true
    }
  }, [chart, id])

  return (
    <div className={className}>
      {svg ? (
        <div
          className="my-8 overflow-x-auto rounded-xl border bg-muted/20 p-4 [&_svg]:mx-auto"
          dangerouslySetInnerHTML={{ __html: svg }}
        />
      ) : normalized ? (
        <pre className="my-8 overflow-x-auto rounded-xl border bg-muted/40 p-4 text-sm text-foreground">
          {normalized}
        </pre>
      ) : null}
    </div>
  )
}

