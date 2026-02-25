import type { Metadata } from "next"
import Link from "next/link"

import { Container } from "@/components/site/Container"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, Scale, ShieldCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Compare",
  description:
    "A high-trust decision hub for salon networks: compare cost structure, operational impact, and privacy — without affiliate bias.",
}

const planned = [
  {
    href: "/compare/square-vs-fresha-vs-mindbody",
    title: "Square vs Fresha vs Mindbody",
    description:
      "A practical comparison: what breaks at scale, what costs creep in, and what operators actually feel day-to-day.",
    comingSoon: true,
  },
  {
    href: "/compare/financial-privacy-safe-mode",
    title: "Financial privacy / Safe Mode PIN",
    description:
      "Why shared-screen privacy matters in real salons, and a simple pattern to prevent financial leakage.",
    comingSoon: true,
  },
  {
    href: "/compare/multi-location-networks",
    title: "Multi-location networks",
    description:
      "Tenant boundaries, roles, reporting, and rollout reality for networks operating more than one location.",
    comingSoon: true,
  },
] as const

export default function ComparePage() {
  return (
    <Container className="py-14 sm:py-16">
      <div className="space-y-4">
        <Badge variant="secondary" className="gap-1">
          <Scale className="size-3.5" aria-hidden="true" />
          Compare
        </Badge>
        <h1 className="text-balance text-4xl font-semibold tracking-tight">
          A decision hub for financial and operational trade-offs.
        </h1>
        <p className="max-w-2xl text-pretty text-muted-foreground">
          Choosing salon software is not a “features” decision. It’s a cost
          structure and operational reliability decision — especially for
          networks.
        </p>

        <ul className="grid max-w-2xl gap-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <ArrowRight className="mt-0.5 size-4 text-primary" aria-hidden="true" />
            <span>
              <span className="font-medium text-foreground">No affiliate bias</span>
              {" — "}we don’t optimize for referrals.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <ArrowRight className="mt-0.5 size-4 text-primary" aria-hidden="true" />
            <span>
              <span className="font-medium text-foreground">
                Operational impact & cost structure
              </span>
              {" — "}hidden fees, rollout reality, and day‑to‑day friction.
            </span>
          </li>
        </ul>
      </div>

      <Separator className="my-10" />

      <section className="space-y-5">
        <div className="flex items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="text-sm font-semibold">Planned comparisons</div>
            <div className="text-sm text-muted-foreground">
              Real internal links, ready to fill with detail articles.
            </div>
          </div>
          <Button asChild variant="outline" className="hidden sm:inline-flex">
            <Link href="/blog">Read Research</Link>
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {planned.map((p) => (
            <Card key={p.href} className="group">
              <CardHeader>
                <div className="flex items-start justify-between gap-3">
                  <CardTitle className="text-base">
                    <Link
                      href={p.href}
                      className="underline-offset-4 group-hover:underline"
                    >
                      {p.title}
                    </Link>
                  </CardTitle>
                  {p.comingSoon ? (
                    <Badge variant="secondary">Coming soon</Badge>
                  ) : null}
                </div>
                <CardDescription>{p.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-10" />

      <section className="space-y-5">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2">
            <Badge>How we compare</Badge>
            <span className="text-sm text-muted-foreground">
              short, operator-first, no fluff
            </span>
          </div>
          <h2 className="text-balance text-2xl font-semibold tracking-tight">
            We focus on what breaks in real operations.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Setup & onboarding reality</CardTitle>
              <CardDescription>
                Time to value, migration pain, and what it takes to roll out
                across locations.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">
                Scheduling constraints & calendar UX
              </CardTitle>
              <CardDescription>
                Services, staff availability, overrides, and the daily front-desk
                flow.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">
                Payments/POS constraints & hidden costs
              </CardTitle>
              <CardDescription>
                Fees, lock‑in, refunds, payout timing, and the real total cost of
                ownership.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">
                Privacy on shared screens (Safe Mode PIN)
              </CardTitle>
              <CardDescription>
                Financial dashboards, exports, and sensitive metrics that should
                stay locked by default.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      <div className="mt-12">
        <div className="sticky bottom-6">
          <div className="rounded-xl border bg-background/80 p-4 backdrop-blur">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2 text-sm">
                <ShieldCheck className="size-4 text-primary" aria-hidden="true" />
                <span className="font-medium">Want a network-ready baseline?</span>
                <span className="hidden sm:inline text-muted-foreground">
                  Request a demo or read our research notes.
                </span>
              </div>
              <div className="flex gap-2">
                <Button asChild>
                  <Link href="/contact">Request demo</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/blog">Read Research</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

