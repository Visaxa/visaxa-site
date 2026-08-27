import type { Metadata } from "next"
import Link from "next/link"
import { Check, CircleDollarSign } from "lucide-react"

import { Container } from "@/components/site/Container"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const pageUrl = "https://www.visaxa.app/pricing"

export const metadata: Metadata = {
  title: "Pricing and access",
  description:
    "Visaxa has not published standard plans yet. Request a walkthrough while access remains limited.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "Pricing and access | Visaxa",
    description:
      "Visaxa pricing has not yet been published for broader access.",
  },
}

export default function PricingPage() {
  return (
    <Container className="py-14 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <Badge variant="secondary" className="gap-1">
          <CircleDollarSign className="size-3.5" aria-hidden="true" />
          Pricing and access
        </Badge>
        <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          Pricing for broader access has not been published yet.
        </h1>
        <p className="mt-5 text-pretty text-lg leading-8 text-muted-foreground">
          Visaxa is currently available for private walkthroughs while access
          remains limited. Standard subscription pricing will be published
          before broader availability. No public trial, discount, or billing
          offer is being made on this site today.
        </p>

        <Card className="mt-10">
          <CardHeader>
            <CardTitle>What we can discuss now</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4 text-sm leading-6 text-muted-foreground">
              {[
                "How your team currently handles appointments, clients, visits, and checkout.",
                "Which Visaxa workflows are relevant to the problems you want to solve.",
                "Whether a closer evaluation makes sense for your salon.",
                "Which commercial terms would need to be confirmed in writing before any commitment.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/contact">Request a walkthrough</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/features">See how Visaxa works</Link>
          </Button>
        </div>
      </div>
    </Container>
  )
}
