import type { Metadata } from "next"

import { Container } from "@/components/site/Container"
import { ComingSoon } from "@/components/site/ComingSoon"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Square vs Fresha vs Mindbody",
  description:
    "A practical comparison for salon operators: setup reality, scheduling UX, payments constraints, and hidden costs at scale.",
}

export default function CompareSquareFreshaMindbodyPage() {
  return (
    <Container className="py-14 sm:py-16">
      <div className="space-y-4">
        <Badge variant="secondary">Compare</Badge>
        <h1 className="text-balance text-4xl font-semibold tracking-tight">
          Square vs Fresha vs Mindbody
        </h1>
        <p className="max-w-2xl text-pretty text-muted-foreground">
          This article will focus on operational impact and total cost — not
          feature checklists.
        </p>
      </div>

      <ComingSoon
        title="Planned structure"
        description="A clear layout you can fill without changing routes or navigation."
        bullets={[
          "Setup & onboarding: rollout time and migration pain",
          "Scheduling constraints & calendar UX at the front desk",
          "Payments/POS constraints, fees, and lock‑in risks",
          "Reporting & privacy on shared screens (Safe Mode PIN)",
        ]}
      />
    </Container>
  )
}

