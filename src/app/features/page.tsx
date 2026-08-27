import type { Metadata } from "next"
import Link from "next/link"
import {
  BadgeDollarSign,
  CalendarDays,
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
  title: "Features for the salon working day",
  description:
    "See how Visaxa connects appointments, clients, visits, checkout, inventory, packages, payroll, and day-to-day controls.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "Features for the salon working day | Visaxa",
    description:
      "See how Visaxa helps a salon run the day, manage the business, and keep sensitive work controlled.",
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

const businessWork = [
  {
    title: "Inventory and products",
    description:
      "Track products through receiving, stock changes, and sales at checkout so the shelf and the sale tell the same story.",
    icon: PackageCheck,
  },
  {
    title: "Packages",
    description:
      "Keep package sales, redemptions, and remaining value connected to the client and the visit where they matter.",
    icon: ClipboardCheck,
  },
  {
    title: "Payroll review",
    description:
      "Review compensation before a payout is finalized and keep a clear statement of what each professional is being paid for.",
    icon: BadgeDollarSign,
  },
] as const

const controlledWork = [
  {
    title: "Requests, waitlist, and follow-up",
    description:
      "Keep booking requests, waitlist work, and communication history visible to the team so follow-up does not disappear between people.",
    icon: MessageSquareText,
  },
  {
    title: "Team access and financial privacy",
    description:
      "Give each role a focused workspace and require a PIN before sensitive finance areas are shown on a shared screen.",
    icon: LockKeyhole,
  },
] as const

export default function FeaturesPage() {
  return (
    <Container className="py-14 sm:py-20">
      <div className="max-w-3xl space-y-5">
        <Badge variant="secondary">Features</Badge>
        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          Salon workflows that stay connected through the day.
        </h1>
        <p className="text-pretty text-lg leading-8 text-muted-foreground">
          Visaxa is built for beauty salons that need the calendar, client
          record, visit, checkout, and business controls to agree with one
          another throughout the working day.
        </p>
      </div>

      <section className="mt-14" aria-labelledby="current-workflows">
        <div className="max-w-2xl space-y-3">
          <h2 id="current-workflows" className="text-3xl font-semibold tracking-tight">
            Run the day without rebuilding the story at every step
          </h2>
          <p className="leading-7 text-muted-foreground">
            Follow an appointment from the calendar to the client record, the
            visit, and checkout with the context needed for the next action.
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

      <section className="mt-16 border-t pt-12" aria-labelledby="business-work">
        <div className="max-w-2xl space-y-3">
          <h2 id="business-work" className="text-3xl font-semibold tracking-tight">
            Run the business around the visit
          </h2>
          <p className="leading-7 text-muted-foreground">
            Keep the products and prepaid services that affect the client
            experience connected to the work that creates or uses them.
          </p>
        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-2">
          {businessWork.map((item) => (
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

      <section className="mt-16 border-t pt-12" aria-labelledby="controlled-work">
        <div className="max-w-2xl space-y-3">
          <h2 id="controlled-work" className="text-3xl font-semibold tracking-tight">
            Keep shared work visible without showing everything to everyone
          </h2>
          <p className="leading-7 text-muted-foreground">
            Bring requests and follow-up into the team&apos;s view while keeping
            sensitive financial information behind an intentional access step.
          </p>
        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-2">
          {controlledWork.map((item) => (
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
              See how Visaxa would fit your salon&apos;s working day.
            </h2>
            <p className="leading-7 text-muted-foreground">
              Start with the workflow your team repeats most often and look at
              how Visaxa carries it from one step to the next.
            </p>
          </div>
          <Button asChild size="lg">
            <Link href="/contact">Request a walkthrough</Link>
          </Button>
        </div>
      </section>
    </Container>
  )
}
