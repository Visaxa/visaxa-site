import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function ArticleLayout({
  title,
  subtitle,
  description,
  date,
  readingTimeText,
  tags,
  children,
}: {
  title: string
  subtitle?: string
  description?: string
  date?: string
  readingTimeText?: string
  tags?: string[]
  children: React.ReactNode
}) {
  return (
    <main className="px-4 pb-16 pt-10">
      <article className="mx-auto max-w-3xl">
        <header>
          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            {date ? <time dateTime={date}>{date}</time> : null}
            {date && readingTimeText ? <span>•</span> : null}
            {readingTimeText ? <span>{readingTimeText}</span> : null}
          </div>

          <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h1>

          {subtitle ? (
            <p className="mt-3 text-pretty text-lg text-muted-foreground">
              {subtitle}
            </p>
          ) : null}

          {description ? (
            <p className="mt-4 text-pretty text-base text-muted-foreground">
              {description}
            </p>
          ) : null}

          {tags?.length ? (
            <div className="mt-5 flex flex-wrap gap-2">
              {tags.map((t) => (
                <Badge key={t} variant="secondary">
                  {t}
                </Badge>
              ))}
            </div>
          ) : null}

          <div className="mt-8 h-px w-full bg-border" />
        </header>

        {/* Typography: keep it “journal”, minimal */}
        <div
          className={cn(
            "prose prose-neutral mt-8 max-w-none",
            "prose-headings:scroll-mt-24",
            "prose-a:font-medium prose-a:underline prose-a:underline-offset-4",
            "prose-strong:text-foreground",
            "prose-blockquote:border-l-2 prose-blockquote:border-border prose-blockquote:text-muted-foreground",
            "prose-hr:border-border"
          )}
        >
          {children}
        </div>

        <div className="mt-12 rounded-2xl border bg-muted/20 p-6">
          <div className="text-base font-semibold">Want a practical answer?</div>
          <p className="mt-2 text-sm text-muted-foreground">
            We focus on operational reality: scheduling constraints, privacy on
            shared screens, and long-term control.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/pricing">Request demo</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/blog">Back to Research</Link>
            </Button>
          </div>
        </div>
      </article>
    </main>
  )
}