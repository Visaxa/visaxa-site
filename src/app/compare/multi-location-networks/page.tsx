import type { Metadata } from "next"

import { Container } from "@/components/site/Container"
import { ComingSoon } from "@/components/site/ComingSoon"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Multi-location networks",
  description:
    "A network-focused guide: tenant boundaries, roles, reporting, and rollout reality for multi-location salon operations.",
}

export default function CompareMultiLocationNetworksPage() {
  return (
    <Container className="py-14 sm:py-16">
      <div className="space-y-4">
        <Badge variant="secondary">Compare</Badge>
        <h1 className="text-balance text-4xl font-semibold tracking-tight">
          Multi-location networks
        </h1>
        <p className="max-w-2xl text-pretty text-muted-foreground">
          This article will focus on what changes once you run more than one
          location: roles, isolation, reporting and rollout.
        </p>
      </div>

      <ComingSoon
        title="Planned structure"
        description="A comparison-ready outline for network operators."
        bullets={[
          "Tenant boundaries and data isolation (what can go wrong)",
          "Roles & permissions: least privilege, auditability",
          "Reporting needs: cross-location vs tenant-specific views",
          "Rollout plan: migration, training, and change management",
        ]}
      />
    </Container>
  )
}

