import type { MDXComponents } from "mdx/types"
import Image, { type ImageProps } from "next/image"
import Link from "next/link"
import type { ReactNode } from "react"
import { AlertTriangle, CheckCircle2, Info, Quote } from "lucide-react"

import { cn } from "@/lib/utils"
import { Mermaid } from "@/components/mdx/Mermaid"

/**
 * Use images from `public/blog/<slug>/...` and reference as:
 * `<ArticleImage src="/blog/<slug>/hero.png" alt="..." caption="..." />`
 */
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
  const isSvg = typeof src === "string" && src.toLowerCase().endsWith(".svg")

  return (
    <figure className="my-8">
      <div className="mx-auto overflow-hidden rounded-xl border bg-muted/20 shadow-sm">
        {isSvg ? (
          // Avoid Next Image optimizer for SVG.
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="h-auto w-full"
            loading="lazy"
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes="(max-width: 768px) 100vw, 768px"
            className="h-auto w-full"
          />
        )}
      </div>
      {caption ? (
        <figcaption className="mt-3 text-center text-sm text-muted-foreground">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}

function ChartImage(
  props: Omit<React.ComponentProps<typeof ArticleImage>, "width" | "height">
) {
  return <ArticleImage width={1200} height={600} {...props} />
}

function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div className="my-8 overflow-x-auto rounded-xl border">
      <table
        className={cn(
          "min-w-[720px] w-full border-separate border-spacing-0 text-sm",
          className
        )}
        {...props}
      />
    </div>
  )
}

function Thead({ className, ...props }: React.ComponentProps<"thead">) {
  return <thead className={cn("border-b", className)} {...props} />
}

function Tbody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      className={cn("[&_tr:nth-child(even)]:bg-muted/20", className)}
      {...props}
    />
  )
}

function Tr({ className, ...props }: React.ComponentProps<"tr">) {
  return <tr className={cn("border-border", className)} {...props} />
}

function Th({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      className={cn(
        "border-b bg-muted/20 px-4 py-3 text-left text-sm font-semibold",
        className
      )}
      {...props}
    />
  )
}

function Td({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      className={cn(
        "border-b border-border/60 px-4 py-3 text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

function Img(props: React.ComponentProps<"img">) {
  const { src, alt = "", title } = props
  const safeSrc = typeof src === "string" ? src : ""
  return (
    <ArticleImage
      src={safeSrc}
      alt={alt}
      caption={title}
      width={1200}
      height={630}
    />
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

function H1({ className, ...props }: React.ComponentProps<"h1">) {
  return (
    <h1
      className={cn(
        "mt-10 scroll-mt-24 text-3xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  )
}

function H2({ className, ...props }: React.ComponentProps<"h2">) {
  return (
    <h2
      className={cn(
        "mt-10 scroll-mt-24 border-b pb-2 text-2xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  )
}

function H3({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      className={cn(
        "mt-8 scroll-mt-24 text-xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  )
}

function P({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p className={cn("mt-5 leading-8 text-muted-foreground", className)} {...props} />
  )
}

function Ul({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul className={cn("mt-5 list-disc pl-6 text-muted-foreground", className)} {...props} />
  )
}

function Ol({ className, ...props }: React.ComponentProps<"ol">) {
  return (
    <ol
      className={cn("mt-5 list-decimal pl-6 text-muted-foreground", className)}
      {...props}
    />
  )
}

function Li({ className, ...props }: React.ComponentProps<"li">) {
  return <li className={cn("mt-2", className)} {...props} />
}

function Blockquote({ className, ...props }: React.ComponentProps<"blockquote">) {
  return (
    <blockquote
      className={cn(
        "my-8 border-l-2 border-border pl-6 italic text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

function Pre({ className, ...props }: React.ComponentProps<"pre">) {
  return (
    <pre
      className={cn(
        "my-8 overflow-x-auto rounded-xl border bg-muted/40 p-4 text-sm leading-6",
        "[&_code]:bg-transparent [&_code]:p-0 [&_code]:text-inherit",
        className
      )}
      {...props}
    />
  )
}

function Code({ className, ...props }: React.ComponentProps<"code">) {
  const isBlock = typeof className === "string" && className.includes("language-")
  return (
    <code
      className={cn(
        isBlock
          ? "font-mono"
          : "rounded-md border bg-muted px-1.5 py-0.5 font-mono text-[0.9em]",
        className
      )}
      {...props}
    />
  )
}

export const mdxComponents: MDXComponents = {
  a: MdxLink,
  img: Img,
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
  ul: Ul,
  ol: Ol,
  li: Li,
  blockquote: Blockquote,
  pre: Pre,
  code: Code,
  table: Table,
  thead: Thead,
  tbody: Tbody,
  tr: Tr,
  th: Th,
  td: Td,
  ArticleImage,
  ChartImage,
  Callout,
  KeyTakeaway,
  ComparisonTable,
  QuoteBlock,
  Mermaid,
}