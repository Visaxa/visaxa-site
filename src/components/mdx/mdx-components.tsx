import type { MDXComponents } from "mdx/types"
import Image, { type ImageProps } from "next/image"
import Link from "next/link"
import type { ReactNode } from "react"
import { AlertTriangle, CheckCircle2, Info, Quote } from "lucide-react"

import { cn } from "@/lib/utils"

function ArticleImage({
  src,
  alt,
  caption,
  width = 1200,
  height = 630,
}: {
  src: ImageProps["src"]
  alt: string
  caption?: string
  width?: number
  height?: number
}) {
  return (
    <figure className="my-8">
      <div className="mx-auto overflow-hidden rounded-xl border bg-muted/20 shadow-sm">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="(max-width: 768px) 100vw, 768px"
          className="h-auto w-full"
        />
      </div>
      {caption ? (
        <figcaption className="mt-3 text-center text-sm text-muted-foreground">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}

function Callout({
  type,
  title,
  children,
}: {
  type: "info" | "warning" | "success" | "neutral"
  title?: string
  children: ReactNode
}) {
  const config = {
    info: {
      icon: Info,
      className: "border-blue-500/20 bg-blue-500/5",
    },
    warning: {
      icon: AlertTriangle,
      className: "border-amber-500/20 bg-amber-500/5",
    },
    success: {
      icon: CheckCircle2,
      className: "border-emerald-500/20 bg-emerald-500/5",
    },
    neutral: {
      icon: Info,
      className: "border-border bg-muted/30",
    },
  }[type]

  const Icon = config.icon

  return (
    <div className={cn("my-8 rounded-xl border p-5", config.className)}>
      <div className="flex items-start gap-3">
        <div className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg border bg-background/60">
          <Icon className="size-4 text-foreground/80" aria-hidden="true" />
        </div>
        <div className="min-w-0">
          {title ? (
            <div className="text-sm font-semibold text-foreground">{title}</div>
          ) : null}
          <div className="mt-1 text-sm text-muted-foreground [&_p]:mt-2">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

function KeyTakeaway({ children }: { children: ReactNode }) {
  return (
    <div className="my-8 rounded-xl border bg-muted/20 p-5">
      <div className="border-l-2 border-primary/50 pl-4 text-[1.05rem] font-semibold leading-7">
        {children}
      </div>
    </div>
  )
}

function ComparisonTable({ children }: { children: ReactNode }) {
  return (
    <div className="my-8 overflow-x-auto rounded-xl border">
      <div
        className={cn(
          "min-w-[720px] [&_table]:w-full [&_table]:border-separate [&_table]:border-spacing-0",
          "[&_th]:border-b [&_th]:bg-background [&_th]:px-4 [&_th]:py-3 [&_th]:text-left [&_th]:text-sm [&_th]:font-semibold",
          "[&_td]:border-b [&_td]:px-4 [&_td]:py-3 [&_td]:text-sm [&_td]:text-muted-foreground",
          "[&_tbody_tr:nth-child(even)]:bg-muted/20",
          "[&_tbody_tr:last-child_td]:border-b-0"
        )}
      >
        {children}
      </div>
    </div>
  )
}

function QuoteBlock({
  children,
  author,
}: {
  children: ReactNode
  author?: string
}) {
  return (
    <figure className="my-8 rounded-xl border bg-muted/20 p-6">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg border bg-background/60">
          <Quote className="size-4 text-foreground/80" aria-hidden="true" />
        </div>
        <blockquote className="m-0 italic text-muted-foreground">
          {children}
        </blockquote>
      </div>
      {author ? (
        <figcaption className="mt-4 text-sm font-medium text-foreground">
          — {author}
        </figcaption>
      ) : null}
    </figure>
  )
}

function MdxLink({ href = "", className, ...props }: React.ComponentProps<"a">) {
  const isInternal = href.startsWith("/")
  const isHash = href.startsWith("#")
  const isExternal = href.startsWith("http")

  const classes = cn("font-medium underline underline-offset-4", className)

  if (isInternal) {
    return (
      <Link href={href} className={classes}>
        {props.children}
      </Link>
    )
  }

  if (isHash) {
    return <a href={href} className={classes} {...props} />
  }

  return (
    <a
      href={href}
      className={classes}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      {...props}
    />
  )
}

export const mdxComponents: MDXComponents = {
  a: MdxLink,
  ArticleImage,
  Callout,
  KeyTakeaway,
  ComparisonTable,
  QuoteBlock,
}