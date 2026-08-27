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
    "Visaxa has not published standard plans yet. Learn what can be confirmed during an early product conversation.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "Pricing and access | Visaxa",
    description:
      "An honest explanation of Visaxa pricing and access before public launch.",
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
          Public plans are not available yet.
        </h1>
        <p className="mt-5 text-pretty text-lg leading-8 text-muted-foreground">
          Visaxa is still in active product validation. We have not published a
          standard subscription price, trial, discount, or billing commitment.
          We would rather leave those details open than publish terms that are
          not ready to be relied on.
        </p>

        <Card className="mt-10">
          <CardHeader>
            <CardTitle>What a product conversation can establish</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4 text-sm leading-6 text-muted-foreground">
              {[
                "Whether the current product covers the daily workflow you need to evaluate.",
                "Which capabilities are working today and which remain in validation.",
                "Whether an early evaluation is appropriate for your salon at all.",
                "What commercial terms would need to be agreed before any commitment.",
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
            <Link href="/contact">Discuss an early evaluation</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/features">Review current capabilities</Link>
          </Button>
        </div>
      </div>
    </Container>
  )
}
