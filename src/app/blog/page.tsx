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
  const featured = posts.slice(0, 2)
  const all = posts

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

        <div className="mt-8">
          {posts.length === 0 ? (
            <div className="rounded-2xl border bg-muted/20 p-6">
              <div className="text-base font-semibold">No posts yet</div>
              <p className="mt-2 text-sm text-muted-foreground">
                Add an MDX file in <code>src/content/blog</code> and deploy.
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-sm font-medium text-muted-foreground">
                Featured
              </h2>

              <div className="mt-4 grid gap-4">
                {featured.map((p) => (
                  <article
                    key={p.slug}
                    className="group rounded-2xl border bg-background p-6 shadow-sm transition hover:bg-muted/10"
                  >
                    <Link href={`/blog/${p.slug}`} className="block">
                      <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                        <time dateTime={p.date}>{p.date}</time>
                        <span>•</span>
                        <span>{p.readingTimeText}</span>
                      </div>

                      <h3 className="mt-2 text-xl font-semibold tracking-tight group-hover:underline">
                        {p.title}
                      </h3>

                      {p.description ? (
                        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
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
                          <span>Read</span>
                        </Button>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>

              <h3 className="mt-10 text-sm text-muted-foreground">
                All research notes
              </h3>

              <ul className="mt-4 space-y-2">
                {all.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/blog/${p.slug}`}
                      className="text-sm text-muted-foreground transition hover:text-foreground"
                    >
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </main>
  )
}