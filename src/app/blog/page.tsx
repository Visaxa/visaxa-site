import Link from "next/link"

import { getAllPosts } from "@/lib/blog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Research",
  description:
    "Practical notes for owners and operators: comparisons, checklists, and privacy-first workflows.",
}

export default async function BlogIndexPage() {
  const posts = await getAllPosts()

  return (
    <main className="px-4 pb-16 pt-10">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Research
          </h1>
          <p className="max-w-2xl text-muted-foreground">
            Practical comparisons and operational notes — focused on real trade-offs,
            hidden friction, and long-term control.
          </p>
        </div>

        <div className="mt-8 grid gap-4">
          {posts.length === 0 ? (
            <div className="rounded-2xl border bg-muted/20 p-6">
              <div className="text-base font-semibold">No posts yet</div>
              <p className="mt-2 text-sm text-muted-foreground">
                Add an MDX file in <code>src/content/blog</code> and deploy.
              </p>
            </div>
          ) : (
            posts.map((p) => (
              <article
                key={p.slug}
                className="rounded-2xl border bg-background p-6 shadow-sm"
              >
                <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                  <time dateTime={p.date}>{p.date}</time>
                  <span>•</span>
                  <span>{p.readingTimeText}</span>
                </div>

                <h2 className="mt-2 text-xl font-semibold">
                  <Link href={`/blog/${p.slug}`} className="hover:underline">
                    {p.title}
                  </Link>
                </h2>

                {p.subtitle ? (
                  <p className="mt-2 text-sm text-muted-foreground">
                    {p.subtitle}
                  </p>
                ) : null}

                {p.description ? (
                  <p className="mt-3 text-sm text-muted-foreground">
                    {p.description}
                  </p>
                ) : null}

                {p.tags?.length ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Badge key={t} variant="secondary">
                        {t}
                      </Badge>
                    ))}
                  </div>
                ) : null}

                <div className="mt-5">
                  <Button asChild variant="outline">
                    <Link href={`/blog/${p.slug}`}>Read</Link>
                  </Button>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </main>
  )
}