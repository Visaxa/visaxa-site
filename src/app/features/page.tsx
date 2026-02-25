import type { Metadata } from "next"

import { Container } from "@/components/site/Container"
import { ComingSoon } from "@/components/site/ComingSoon"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore VisaxaCRM capabilities: multi-tenant operations, scheduling, inventory baseline, payments strategy, and Safe Mode PIN privacy.",
}

export default function FeaturesPage() {
  return (
    <Container className="py-14 sm:py-16">
      <div className="space-y-4">
        <Badge variant="secondary">Product</Badge>
        <h1 className="text-balance text-4xl font-semibold tracking-tight">
          Features built for salon networks.
        </h1>
        <p className="max-w-2xl text-pretty text-muted-foreground">
          This page is a placeholder route so navigation stays stable as the site
          evolves.
        </p>
      </div>

      <ComingSoon
        title="A calm operations toolkit"
        description="Clear primitives for busy teams — designed to scale across tenants and locations."
        bullets={[
          "Scheduling primitives: services, staff, availability, and bookings",
          "Inventory baseline: products, usage, and clean reporting hooks",
          "Payments strategy: plan flows and integrate providers later",
          "Safe Mode PIN: lock financial dashboards on shared screens",
        ]}
      />
    </Container>
  )
}

