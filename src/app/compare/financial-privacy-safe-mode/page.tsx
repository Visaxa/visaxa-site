import type { Metadata } from "next"

import { Container } from "@/components/site/Container"
import { ComingSoon } from "@/components/site/ComingSoon"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Financial privacy & Safe Mode PIN",
  description:
    "Why financial privacy matters on shared screens in salons — and how Safe Mode PIN prevents accidental disclosure.",
}

export default function CompareFinancialPrivacySafeModePage() {
  return (
    <Container className="py-14 sm:py-16">
      <div className="space-y-4">
        <Badge variant="secondary">Compare</Badge>
        <h1 className="text-balance text-4xl font-semibold tracking-tight">
          Financial privacy & Safe Mode PIN
        </h1>
        <p className="max-w-2xl text-pretty text-muted-foreground">
          This article will cover shared-screen risks and a pragmatic pattern to
          protect financial data without killing usability.
        </p>
      </div>

      <ComingSoon
        title="Planned structure"
        description="A practical, operator-first article outline."
        bullets={[
          "Shared-screen reality: front desk, TVs, shared offices",
          "What should be locked by default (exports, payouts, margins)",
          "Safe Mode PIN: time-boxed unlock and least-privilege access",
          "Implementation notes and rollout checklist",
        ]}
      />
    </Container>
  )
}

