import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Scale } from "lucide-react"

import { Container } from "@/components/site/Container"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const pageUrl = "https://www.visaxa.app/compare"

export const metadata: Metadata = {
  title: "How to compare salon software",
  description:
    "A research-led path for comparing salon software after defining the operating problem, requirements, exit conditions, and evidence.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "How to compare salon software | Visaxa Research",
    description:
      "Move from the operating problem to a defensible shortlist without fake rankings or unsupported vendor claims.",
  },
}

const decisions = [
  {
    step: "01",
    title: "Is the CRM actually the problem?",
    description:
      "Separate process, practice, configuration, and a genuine software limit before deciding to replace anything.",
    href: "/blog/is-your-salon-crm-actually-the-problem",
  },
  {
    step: "02",
    title: "What must survive a move?",
    description:
      "Build an inventory of the client, appointment, financial, and operational records the business depends on.",
    href: "/blog/before-you-switch-salon-software-client-data",
  },
  {
    step: "03",
    title: "Could the salon really leave?",
    description:
      "Test export scope, cancellation terms, post-cancellation access, and the recovery route before relying on an exit.",
    href: "/blog/can-you-really-leave-your-salon-software",
  },
  {
    step: "04",
    title: "Which candidates meet the requirements?",
    description:
      "Use documented pass conditions to eliminate unsuitable systems instead of accepting a universal ranking.",
    href: "/blog/which-salon-software-should-you-compare",
  },
  {
    step: "05",
    title: "Did the data arrive intact?",
    description:
      "Reconcile identities, relationships, balances, and exceptions rather than trusting an import-success message.",
    href: "/blog/salon-data-imported-how-to-check-nothing-was-lost",
  },
] as const

export default function ComparePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    url: pageUrl,
    name: "How to compare salon software",
    description: metadata.description,
  }

  return (
    <Container className="py-14 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-3xl space-y-5">
        <Badge variant="secondary" className="gap-1">
          <Scale className="size-3.5" aria-hidden="true" />
          Compare with evidence
        </Badge>
        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          The useful comparison starts before the vendor list.
        </h1>
        <p className="text-pretty text-lg leading-8 text-muted-foreground">
          A ranking cannot know which workflow is failing, which records must
          survive, or which uncertainty your salon can accept. Define those
          conditions first. Compare only the systems that can meet them.
        </p>
      </div>

      <section className="mt-14" aria-labelledby="comparison-path">
        <h2 id="comparison-path" className="sr-only">Research comparison path</h2>
        <div className="grid gap-4">
          {decisions.map((decision) => (
            <Card key={decision.href} className="group">
              <CardHeader className="grid gap-4 sm:grid-cols-[3rem_1fr_auto] sm:items-center">
                <div className="font-mono text-sm text-muted-foreground">{decision.step}</div>
                <div>
                  <CardTitle className="text-xl">{decision.title}</CardTitle>
                  <CardDescription className="mt-2 max-w-3xl leading-6">
                    {decision.description}
                  </CardDescription>
                </div>
                <Button asChild variant="ghost" className="justify-start sm:justify-center">
                  <Link href={decision.href} aria-label={`Read: ${decision.title}`}>
                    Read
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </Button>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-14 max-w-3xl border-l-2 border-primary pl-6">
        <h2 className="text-xl font-semibold">What this page does not do</h2>
        <p className="mt-2 leading-7 text-muted-foreground">
          It does not rank vendors, award checkmarks, or imply that Visaxa is the
          answer. Product capabilities, pricing, terms, and migration evidence
          must be checked against current primary sources and the salon&apos;s own
          requirements.
        </p>
      </section>
    </Container>
  )
}
