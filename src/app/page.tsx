import Link from "next/link"

import { Container } from "@/components/site/Container"
import { Reveal } from "@/components/site/Reveal"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Banknote,
  Boxes,
  Building2,
  ChevronRight,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react"

const featureCards = [
  {
    title: "Multi-tenant by design",
    description:
      "Separate data, roles, and workflows per tenant — with a foundation meant to scale with your network.",
    icon: Building2,
  },
  {
    title: "Scheduling that stays calm",
    description:
      "Appointments, staff availability, and services — optimized for fast daily operations across locations.",
    icon: UsersRound,
  },
  {
    title: "Inventory that doesn’t drift",
    description:
      "Track products and usage with a clean baseline structure. Expand into deeper stock flows later.",
    icon: Boxes,
  },
  {
    title: "Payments strategy-ready",
    description:
      "Design the customer and financial flows without over-claiming. Integrate providers when you’re ready.",
    icon: Banknote,
  },
  {
    title: "Safe Mode PIN privacy",
    description:
      "Hide financial dashboards and sensitive analytics behind a PIN — ideal for shared screens.",
    icon: LockKeyhole,
  },
] as const

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_10%,hsl(var(--foreground)/0.06),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(700px_circle_at_80%_20%,hsl(var(--foreground)/0.04),transparent_55%)]" />
      </div>

      <Container className="py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="secondary" className="gap-1">
                  <ShieldCheck className="size-3.5" aria-hidden="true" />
                  Built to last
                </Badge>
                <Badge variant="secondary">Multi-tenant</Badge>
                <Badge className="gap-1">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />
                  Safe Mode PIN
                </Badge>
              </div>

              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                VisaxaCRM for salons and networks.
                <span className="text-muted-foreground">
                  {" "}
                  Privacy-first by default.
                </span>
              </h1>

              <p className="max-w-xl text-pretty text-lg leading-8 text-muted-foreground">
                A clean foundation for scheduling, inventory, and payments
                strategy — designed for multi-location teams that need reliability
                and financial privacy on shared screens.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Request demo <ChevronRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/features">Explore features</Link>
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 pt-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Building2 className="size-4" aria-hidden="true" />
                  Networks & multi-location
                </div>
                <div className="flex items-center gap-2">
                  <LockKeyhole className="size-4" aria-hidden="true" />
                  Financial privacy
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="size-4" aria-hidden="true" />
                  Premium, minimal UX
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <Card className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 via-transparent to-transparent" />
              <CardHeader className="relative">
                <CardTitle className="flex items-center gap-2">
                  <LockKeyhole className="size-5" aria-hidden="true" />
                  Safe Mode PIN (financial privacy)
                </CardTitle>
                <CardDescription>
                  Keep sensitive dashboards hidden until a PIN is entered.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative space-y-4">
                <div className="grid grid-cols-4 gap-2">
                  {["•", "•", "•", "•"].map((d, i) => (
                    <div
                      key={i}
                      className="grid h-12 place-items-center rounded-lg border bg-background/70 text-lg"
                      aria-hidden="true"
                    >
                      {d}
                    </div>
                  ))}
                </div>

                <div className="rounded-xl border bg-background/70 p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">Financial overview</div>
                    <Badge variant="secondary" className="gap-1">
                      <LockKeyhole className="size-3.5" aria-hidden="true" />
                      Locked
                    </Badge>
                  </div>
                  <div className="mt-4 grid grid-cols-12 items-end gap-2">
                    {[18, 26, 16, 30, 20, 28, 14, 32, 22, 27, 19, 31].map(
                      (h, idx) => (
                        <div
                          key={idx}
                          className="rounded-md bg-foreground/10"
                          style={{ height: `${h}px` }}
                        />
                      )
                    )}
                  </div>
                  <div className="mt-3 text-xs text-muted-foreground">
                    Unlock for breakdowns, filters, and export history.
                  </div>
                </div>

                <Button asChild className="w-full" variant="secondary">
                  <Link href="/features" className="justify-between">
                    See what Safe Mode protects
                    <ChevronRight className="size-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </Reveal>
        </div>

        <Separator className="my-14" />

        <Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featureCards.map((f) => (
              <Card key={f.title}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <f.icon className="size-4" aria-hidden="true" />
                    {f.title}
                  </CardTitle>
                  <CardDescription>{f.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Reveal>

        <div className="py-14">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2">
                  <Badge>Built for networks</Badge>
                  <span className="text-sm text-muted-foreground">
                    multi-location + roles
                  </span>
                </div>
                <h2 className="text-balance text-3xl font-semibold tracking-tight">
                  One system for many salons — without losing control.
                </h2>
                <p className="text-pretty text-muted-foreground">
                  Networks need consistent operations and clear boundaries. Visaxa
                  is designed for multi-tenant growth: tenants, locations, roles
                  and reporting that can evolve without a rewrite.
                </p>

                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <ChevronRight className="mt-0.5 size-4 text-primary" />
                    Central services catalog with location-specific overrides.
                  </li>
                  <li className="flex gap-2">
                    <ChevronRight className="mt-0.5 size-4 text-primary" />
                    Tenant isolation and least-privilege roles.
                  </li>
                  <li className="flex gap-2">
                    <ChevronRight className="mt-0.5 size-4 text-primary" />
                    Reliable workflows for busy front desks.
                  </li>
                </ul>
              </div>

              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-base">Network-ready baseline</CardTitle>
                  <CardDescription>
                    A minimal set of primitives you can scale for years.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-3 sm:grid-cols-2">
                  {[
                    { label: "Tenants", icon: Building2 },
                    { label: "Locations", icon: Building2 },
                    { label: "Teams & roles", icon: UsersRound },
                    { label: "Catalog", icon: Boxes },
                    { label: "Privacy", icon: LockKeyhole },
                    { label: "Reliability", icon: ShieldCheck },
                  ].map((t) => (
                    <div
                      key={t.label}
                      className="flex items-center justify-between rounded-lg border bg-background px-3 py-2 text-sm"
                    >
                      <span className="font-medium">{t.label}</span>
                      <t.icon className="size-4 text-muted-foreground" aria-hidden="true" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <section className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-balance text-2xl font-semibold tracking-tight">
                Built for operators planning to scale.
              </h3>
              <p className="max-w-2xl text-pretty text-muted-foreground">
                Privacy on shared screens, role isolation, and multi-location
                control — designed for calm operations as you grow.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <LockKeyhole className="size-4" aria-hidden="true" />
                    Safe Mode PIN
                  </CardTitle>
                  <CardDescription>
                    Hide finance and sensitive analytics on shared screens until
                    a PIN is entered.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <UsersRound className="size-4" aria-hidden="true" />
                    Role isolation
                  </CardTitle>
                  <CardDescription>
                    Boundaries that keep teams focused — and reduce accidental
                    exposure as headcount grows.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Building2 className="size-4" aria-hidden="true" />
                    Multi-location ready
                  </CardTitle>
                  <CardDescription>
                    Networks, reporting boundaries, and rollout reality — without
                    reworking the foundation later.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <ShieldCheck className="size-4" aria-hidden="true" />
                    Audit-friendly (future-proof)
                  </CardTitle>
                  <CardDescription>
                    Designed so sensitive actions can be logged and reviewed as
                    workflows mature.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild>
                <Link href="/contact">Request demo</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/blog">Read Research</Link>
              </Button>
            </div>
          </section>
        </Reveal>

        <div className="pt-14">
          <Reveal>
            <Card className="overflow-hidden">
              <CardContent className="p-8 sm:p-10">
                <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
                  <div className="space-y-2">
                    <h3 className="text-balance text-2xl font-semibold tracking-tight">
                      Want to see VisaxaCRM in your workflow?
                    </h3>
                    <p className="text-muted-foreground">
                      Request a demo — we’ll tailor it to your locations, roles,
                      and privacy needs.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                    <Button asChild size="lg">
                      <Link href="/contact">Request demo</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                      <Link href="/pricing">View pricing</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </Container>
    </div>
  )
}

