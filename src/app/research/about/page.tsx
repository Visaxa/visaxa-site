import type { Metadata } from "next"

import { Container } from "@/components/site/Container"

export const metadata: Metadata = {
  title: "About Visaxa Research",
  description:
    "Why we study scheduling systems, CRM platforms, and operational software used by service businesses.",
}

export default function ResearchAboutPage() {
  const pageUrl = "https://www.visaxa.app/research/about"
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "About Visaxa Research",
    description:
      "Why we study scheduling systems, CRM platforms, and operational software used by service businesses.",
    author: {
      "@type": "Organization",
      name: "Visaxa Research",
      url: "https://www.visaxa.app/research",
    },
    publisher: {
      "@type": "Organization",
      name: "Visaxa",
      url: "https://www.visaxa.app",
    },
    datePublished: "2026-06-13",
    dateModified: "2026-06-13",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
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
          About Visaxa Research
        </h1>

        <div className="mt-8 space-y-8 text-base leading-8 text-muted-foreground">
          <section>
            <p>Most software reviews focus on features.</p>

            <p>
              The problem is that businesses rarely struggle because a feature is
              missing.
            </p>

            <p>
              They struggle because everyday operations become more complicated
              than the software was designed to handle.
            </p>

            <p>A scheduling system works until schedules become dense.</p>

            <p>
              Permissions seem sufficient until responsibilities are distributed
              across multiple people.
            </p>

            <p>
              Reporting appears clear until several locations begin operating
              under different conditions.
            </p>

            <p>
              Many operational problems do not appear during demonstrations,
              trials, or feature comparisons. They emerge gradually, often
              months after a system has been adopted.
            </p>

            <p>Visaxa Research exists to study those problems.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              Why This Research Exists
            </h2>

            <p>Most business software is evaluated through feature lists.</p>

            <p>The logic is understandable.</p>

            <p>Features are easy to compare.</p>

            <p>Operations are not.</p>

            <p>
              A vendor can explain what a platform is capable of doing.
            </p>

            <p>
              It is much harder to understand how that platform behaves under
              operational pressure.
            </p>

            <p>What happens when appointment density increases?</p>

            <p>What happens when multiple resources must be coordinated?</p>

            <p>What happens when different locations require different rules?</p>

            <p>What happens when employees need different levels of visibility?</p>

            <p>
              Questions like these often determine whether software remains
              useful over time.
            </p>

            <p>
              Yet they receive surprisingly little attention during the buying
              process.
            </p>

            <p>Our research focuses on those questions.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              What We Study
            </h2>

            <p>
              We primarily study software used by service businesses.
            </p>

            <p>Examples include:</p>

            <ul className="list-disc pl-5">
              <li>scheduling systems</li>
              <li>CRM platforms</li>
              <li>operational management software</li>
              <li>multi-location business systems</li>
              <li>permission and access models</li>
              <li>resource management workflows</li>
              <li>reporting and operational visibility</li>
            </ul>

            <p>
              Rather than concentrating on marketing claims, we examine how
              systems interact with the realities of daily operations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              Why Service Businesses Are Different
            </h2>

            <p>
              Service businesses operate under constraints that are easy to
              underestimate.
            </p>

            <p>Time cannot be stored.</p>

            <p>
              A missed appointment cannot be inventoried and sold tomorrow.
            </p>

            <p>
              People, rooms, equipment, schedules, and client expectations must
              be coordinated simultaneously.
            </p>

            <p>
              As businesses grow, these constraints become increasingly
              interconnected.
            </p>

            <p>
              A small operational weakness may remain invisible for months.
            </p>

            <p>Growth often exposes it.</p>

            <p>
              For this reason, many research notes focus on scalability,
              operational consistency, scheduling architecture, and visibility
              controls.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              How We Approach Evaluation
            </h2>

            <p>
              We do not believe that software can be evaluated solely through
              feature comparison.
            </p>

            <p>Our approach is guided by several principles.</p>

            <ul className="list-disc pl-5">
              <li>
                Operational reality matters more than feature availability.
              </li>
              <li>Scalability matters more than first impressions.</li>
              <li>
                Visibility and permissions are operational concerns, not
                administrative details.
              </li>
              <li>
                Scheduling should be evaluated under pressure, not during quiet
                periods.
              </li>
              <li>
                The cost of leaving a platform deserves attention before the
                platform is adopted.
              </li>
              <li>
                The purpose of research is not to identify universal winners.
              </li>
              <li>The purpose is to help business owners ask better questions.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              What We Do Not Publish
            </h2>

            <p>We do not publish sponsored rankings.</p>
            <p>We do not sell placement within research notes.</p>
            <p>
              We do not maintain &quot;best software&quot; lists based solely on
              marketing materials.
            </p>

            <p>
              Whenever possible, research is structured around operational
              trade-offs, constraints, and long-term consequences rather than
              promotional claims.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">Research Notes</h2>

            <p>
              The articles published by Visaxa Research are intended as
              analytical frameworks rather than buying guides.
            </p>

            <p>
              They are designed to help operators, managers, and business owners
              identify questions that are often overlooked during software
              evaluation.
            </p>

            <p>The goal is not to tell readers what to buy.</p>

            <p>
              The goal is to help them understand what to examine before making
              a decision.
            </p>
          </section>
        </div>
      </div>
    </Container>
  )
}

