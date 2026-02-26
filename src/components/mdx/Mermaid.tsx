"use client"

import * as React from "react"
import mermaid from "mermaid"

export function Mermaid({
  chart,
  className,
}: {
  chart: string
  className?: string
}) {
  const id = React.useId().replaceAll(":", "")
  const [svg, setSvg] = React.useState<string>("")

  React.useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      securityLevel: "strict",
      theme: "neutral",
    })

    let cancelled = false

    mermaid
      .render(`m-${id}`, chart)
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
          className="my-8 overflow-x-auto rounded-xl border bg-background p-4 [&_svg]:mx-auto"
          dangerouslySetInnerHTML={{ __html: svg }}
        />
      ) : (
        <pre className="my-8 overflow-x-auto rounded-xl border bg-muted p-4 text-sm">
          {chart}
        </pre>
      )}
    </div>
  )
}

