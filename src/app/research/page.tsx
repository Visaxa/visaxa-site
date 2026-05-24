import type { Metadata } from "next"
import Link from "next/link"

import { getAllPosts } from "@/lib/blog"
import { Container } from "@/components/site/Container"

export const metadata: Metadata = {
  title: "Visaxa Research",
  description:
    "Operational research notes on what breaks in service businesses: scheduling conflicts, staff workflows, payroll friction, privacy mistakes, and scaling problems.",
}

const CATEGORIES = [
  "Scheduling systems",
  "Service operations",
  "Staff workflows",
  "Payroll & incentives",
  "Multi-location operations",
  "Privacy & access",
  "Scaling problems",
] as const

export default async function ResearchPage() {
  const posts = await getAllPosts()

  return (
    <Container className="py-14 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Visaxa Research
        </h1>

        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Most software advice is written to sell software. We document
          operational patterns that repeatedly break service businesses —
          scheduling conflicts, staff coordination, payroll friction, privacy
          mistakes, retention failures, and scaling problems.
        </p>

        <section className="mt-12">
          <h2 className="text-xl font-semibold text-foreground">
            What we research
          </h2>
          <ul className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
            {CATEGORIES.map((c) => (
              <li key={c} className="rounded-lg border bg-muted/10 px-3 py-2">
                {c}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold text-foreground">Research notes</h2>
          {posts.length === 0 ? (
            <p className="mt-4 text-sm text-muted-foreground">
              No published notes yet.
            </p>
          ) : (
            <ul className="mt-4 space-y-3">
              {posts.map((p) => (
                <li key={p.slug} className="rounded-xl border bg-background p-4">
                  <div className="text-xs text-muted-foreground">
                    <time dateTime={p.date}>{p.date}</time>
                  </div>
                  <div className="mt-1">
                    <Link
                      href={`/blog/${p.slug}`}
                      className="font-medium text-foreground underline underline-offset-4"
                    >
                      {p.title}
                    </Link>
                  </div>
                  {p.description ? (
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {p.description}
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </Container>
  )
}

