import type { Metadata } from "next"

import { Container } from "@/components/site/Container"
import { ComingSoon } from "@/components/site/ComingSoon"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Pricing placeholder for VisaxaCRM. Keep navigation stable and iterate plans later.",
}

export default function PricingPage() {
  return (
    <Container className="py-14 sm:py-16">
      <div className="space-y-4">
        <Badge variant="secondary">Pricing</Badge>
        <h1 className="text-balance text-4xl font-semibold tracking-tight">
          Simple pricing, designed to scale.
        </h1>
        <p className="max-w-2xl text-pretty text-muted-foreground">
          This is a placeholder route. Swap in your real plans and comparison
          once positioning is finalized.
        </p>
      </div>

      <ComingSoon
        title="Plans that fit networks"
        description="A clean pricing structure: start small, expand across locations."
        bullets={[
          "Location-based tiers and staff seats",
          "Network-level admin and reporting controls",
          "Safe Mode PIN for financial privacy",
          "Optional integrations as your stack evolves",
        ]}
      />
    </Container>
  )
}

