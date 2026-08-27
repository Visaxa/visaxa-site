import type { Metadata } from "next"
import Link from "next/link"
import {
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  CreditCard,
  LockKeyhole,
  MessageSquareText,
  PackageCheck,
  UsersRound,
} from "lucide-react"

import { Container } from "@/components/site/Container"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const pageUrl = "https://www.visaxa.app/features"

export const metadata: Metadata = {
  title: "Current product capabilities",
  description:
    "See the salon workflows that exist in Visaxa today and the areas still being validated before public launch.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "Current product capabilities | Visaxa",
    description:
      "A reality-based view of the salon workflows currently available in Visaxa.",
  },
}

const dailyWork = [
  {
    title: "Calendar and appointments",
    description:
      "Create and manage appointments around clients, services, professionals, availability, and the working day.",
    icon: CalendarDays,
  },
  {
    title: "Clients and visit context",
    description:
      "Keep client details, visit history, communication history, packages, receipts, and balances connected to the client record.",
    icon: UsersRound,
  },
  {
    title: "Visit to checkout",
    description:
      "Move an appointment into the visit, record services or products, take a manual payment, and preserve a receipt record.",
    icon: CreditCard,
  },
] as const

const validationAreas = [
  {
    title: "Inventory and products",
    description:
      "Product records, stock movements, receiving, adjustments, and checkout linkage exist. Production operator validation is still in progress.",
    icon: PackageCheck,
  },
  {
    title: "Packages and payroll",
    description:
      "Package sale and redemption foundations, payroll previews, payout batches, and statements exist. Edge cases and full operator workflows are still being closed.",
    icon: ClipboardCheck,
  },
  {
    title: "Requests and messaging",
    description:
      "Waitlist, booking-request, and message-workspace foundations exist. Public delivery and production SMS are not yet a current promise.",
    icon: MessageSquareText,
  },
  {
    title: "Roles and financial privacy",
    description:
      "Role-based surfaces and PIN-protected finance areas exist. Identity and permission hardening continues before an external pilot.",
    icon: LockKeyhole,
  },
] as const

export default function FeaturesPage() {
  return (
    <Container className="py-14 sm:py-20">
      <div className="max-w-3xl space-y-5">
        <Badge variant="secondary">Product reality</Badge>
        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          Salon workflows that stay connected through the day.
        </h1>
        <p className="text-pretty text-lg leading-8 text-muted-foreground">
          Visaxa is being built for beauty salons that need the calendar, client
          record, visit, checkout, and operating controls to agree with one
          another. It is in active development and is not yet publicly launched.
        </p>
      </div>

      <section className="mt-14" aria-labelledby="current-workflows">
        <div className="max-w-2xl space-y-3">
          <div className="flex items-center gap-2 text-sm font-medium text-primary">
            <CheckCircle2 className="size-4" aria-hidden="true" />
            Current core workflows
          </div>
          <h2 id="current-workflows" className="text-3xl font-semibold tracking-tight">
            The operational path already in the product
          </h2>
          <p className="leading-7 text-muted-foreground">
            These are working product areas, not roadmap headings. Final
            production deployment and external-pilot acceptance remain separate
            gates.
          </p>
        </div>

        <div className="mt-7 grid gap-4 lg:grid-cols-3">
          {dailyWork.map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <item.icon className="size-5 text-primary" aria-hidden="true" />
                <CardTitle className="pt-2 text-lg">{item.title}</CardTitle>
                <CardDescription className="leading-6">{item.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-16 border-t pt-12" aria-labelledby="validation-areas">
        <div className="max-w-2xl space-y-3">
          <Badge variant="outline">In validation</Badge>
          <h2 id="validation-areas" className="text-3xl font-semibold tracking-tight">
            Useful foundations that still have limits
          </h2>
          <p className="leading-7 text-muted-foreground">
            These areas exist, but they are not presented as finished production
            promises. A product walkthrough should confirm the exact workflow
            and limits that matter to your salon.
          </p>
        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-2">
          {validationAreas.map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <item.icon className="size-5 text-primary" aria-hidden="true" />
                <CardTitle className="pt-2 text-lg">{item.title}</CardTitle>
                <CardDescription className="leading-6">{item.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-2xl border bg-muted/20 p-7 sm:p-9">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-2xl space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight">
              See the current product, including its limits.
            </h2>
            <p className="leading-7 text-muted-foreground">
              A walkthrough is a fit conversation, not a promise that every
              workflow is ready for production use.
            </p>
          </div>
          <Button asChild size="lg">
            <Link href="/contact">Request a product walkthrough</Link>
          </Button>
        </div>
      </section>
    </Container>
  )
}
