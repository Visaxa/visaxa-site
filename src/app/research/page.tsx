import type { Metadata } from "next"
import Link from "next/link"

import { Container } from "@/components/site/Container"
import { getAllPosts } from "@/lib/blog"

const pageTitle =
  "Visaxa Research — Operational Decisions Before Software Comparison"
const pageDescription =
  "Visaxa Research examines the operational decisions, evidence, risks, and failure conditions that service businesses should understand before comparing software."
const pageUrl = "https://www.visaxa.app/research"

export const metadata: Metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: pageTitle,
    description: pageDescription,
  },
}

const PRINCIPLES = [
  "The owner’s decision comes before the product.",
  "A recurring operational problem should be distinguished from an isolated incident.",
  "A feature claim is not evidence that the workflow will succeed.",
  "A successful setup or import is not proof that implementation worked.",
  "Pricing should include operational, growth, and exit costs—not only the advertised subscription.",
  "Trust should result from verification, not tone.",
  "Legal, employment, privacy, payroll, and financial questions require jurisdiction-appropriate professional sources.",
  "Uncertainty and limitations should be stated rather than hidden.",
] as const

export default async function ResearchPage() {
  const posts = await getAllPosts()
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: pageTitle,
    description: pageDescription,
    about: {
      "@type": "Organization",
      "@id": `${pageUrl}#organization`,
      name: "Visaxa Research",
      url: pageUrl,
      parentOrganization: {
        "@type": "Organization",
        name: "Visaxa",
        url: "https://www.visaxa.app",
      },
    },
    author: {
      "@type": "Organization",
      "@id": `${pageUrl}#organization`,
      name: "Visaxa Research",
      url: pageUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Visaxa",
      url: "https://www.visaxa.app",
    },
  } as const

  return (
    <Container className="py-14 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Visaxa Research
        </h1>

        <div className="mt-6 space-y-4 text-lg leading-8 text-muted-foreground">
          <p>
            Visaxa Research studies the decisions that service-business owners
            must make before software comparison becomes useful.
          </p>
          <p>
            We focus on the operating questions behind the product search: what
            is actually failing, what must remain flexible, what evidence
            deserves trust, and what a business must be able to recover if the
            decision goes wrong.
          </p>
        </div>

        <section className="mt-16" aria-labelledby="why-research-exists">
          <h2
            id="why-research-exists"
            className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
          >
            Why Visaxa Research Exists
          </h2>

          <div className="mt-8 space-y-6 text-base leading-8 text-muted-foreground">
            <p>Most business software is chosen too late.</p>

            <p>
              Not because owners procrastinate, but because the search often
              begins only after something has already gone wrong.
            </p>

            <div className="space-y-2 text-foreground/90">
              <p>Appointments begin to disappear.</p>
              <p>Employees create workarounds.</p>
              <p>Reports stop matching reality.</p>
              <p>Clients complain.</p>
              <p>Growth makes the business harder to control.</p>
            </div>

            <p>Only then does the search begin.</p>

            <p>The internet immediately offers hundreds of comparisons:</p>

            <div className="space-y-2 border-l border-border pl-5 text-foreground/90">
              <p>“Best CRM.”</p>
              <p>“Top salon software.”</p>
              <p>“Ten systems you should consider.”</p>
            </div>

            <p>
              Yet those lists rarely answer the real question, because choosing
              software is almost never the first decision.
            </p>

            <p>It is usually one of the last.</p>

            <p>
              A salon owner does not necessarily wake up wondering which CRM to
              buy.
            </p>

            <p>
              They may be wondering why employees keep arguing, why numbers no
              longer match, why clients are falling through gaps, or why opening
              a second location suddenly feels dangerous.
            </p>

            <p>Those are not originally software questions.</p>

            <p>They are operational questions.</p>

            <p>Software becomes only one possible answer.</p>

            <p>That is why Visaxa Research exists.</p>

            <p>We do not begin by ranking products.</p>

            <p>
              We begin by examining the decisions that must be understood before
              comparing products becomes meaningful.
            </p>

            <p>
              Some concern trust. Some concern growth. Some concern employees
              and clients. Some concern data, money, or the ability to recover
              from a bad decision.
            </p>

            <p>
              Every research note begins with an operating decision rather than
              a product.
            </p>

            <p>
              We try to separate symptoms from causes, assumptions from
              evidence, and visible features from the conditions under which
              those features must work.
            </p>

            <p>Whenever possible, we prefer:</p>

            <ul className="list-disc space-y-2 pl-5">
              <li>testable questions over feature lists;</li>
              <li>operational models over marketing claims;</li>
              <li>primary evidence over reassurance;</li>
              <li>explicit limitations over false certainty.</li>
            </ul>

            <p>
              We believe useful research should remain valuable even when no
              software is purchased.
            </p>

            <p>
              If an owner reads one of our notes, understands the problem more
              clearly, and decides that the current system should be kept,
              reconfigured, or supplemented rather than replaced, the research
              has still succeeded.
            </p>

            <p>We also believe software should remain possible to question.</p>

            <p>
              A business should not depend on a platform merely because leaving
              has become too expensive, confusing, or dangerous.
            </p>

            <p>
              Trust should be earned through clarity, evidence, reliability,
              and the ability to recover.
            </p>

            <p>Visaxa Research is therefore not a product catalogue.</p>

            <p>
              It is an attempt to describe how service businesses actually work,
              how operational decisions fail, and what evidence can make those
              decisions safer.
            </p>

            <p>
              The better owners understand the decisions in front of them, the
              less they need to depend on marketing—and the easier it becomes to
              recognize software that genuinely fits their business.
            </p>
          </div>
        </section>

        <section
          className="mt-16 border-t border-border pt-12"
          aria-labelledby="research-approach"
        >
          <h2
            id="research-approach"
            className="text-2xl font-semibold tracking-tight text-foreground"
          >
            How We Approach Research
          </h2>

          <p className="mt-5 text-base leading-8 text-muted-foreground">
            Our work follows several principles:
          </p>

          <ul className="mt-5 list-disc space-y-3 pl-5 text-base leading-7 text-muted-foreground">
            {PRINCIPLES.map((principle) => (
              <li key={principle}>{principle}</li>
            ))}
          </ul>

          <p className="mt-8 text-base font-medium leading-8 text-foreground">
            Choosing software is almost never the first decision. It is usually
            one of the last.
          </p>
        </section>

        <section
          className="mt-16 border-t border-border pt-12"
          aria-labelledby="research-notes"
        >
          <h2
            id="research-notes"
            className="text-xl font-semibold text-foreground"
          >
            Research notes
          </h2>

          {posts.length === 0 ? (
            <p className="mt-4 text-sm text-muted-foreground">
              No published notes yet.
            </p>
          ) : (
            <ul className="mt-5 divide-y divide-border border-y border-border">
              {posts.map((post) => (
                <li key={post.slug} className="py-5 first:pt-4 last:pb-4">
                  <time
                    dateTime={post.date}
                    className="text-xs text-muted-foreground"
                  >
                    {post.date}
                  </time>
                  <h3 className="mt-1 text-base font-medium text-foreground">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="underline decoration-border underline-offset-4 hover:decoration-foreground"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  {post.description ? (
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {post.description}
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
