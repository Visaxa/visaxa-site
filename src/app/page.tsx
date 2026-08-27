import Link from "next/link"
import {
  CalendarDays,
  ChevronRight,
  ClipboardList,
  CreditCard,
  SearchCheck,
  UsersRound,
} from "lucide-react"

import { Container } from "@/components/site/Container"
import { Reveal } from "@/components/site/Reveal"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const dailyPath = [
  {
    title: "Plan the day",
    description:
      "Keep appointments tied to the client, service, professional, and available time.",
    icon: CalendarDays,
  },
  {
    title: "Know the client",
    description:
      "Bring the client record and visit context into the work instead of reconstructing it from memory.",
    icon: UsersRound,
  },
  {
    title: "Complete the visit",
    description:
      "Carry the appointment into the visit, checkout, payment record, and receipt without starting over.",
    icon: CreditCard,
  },
] as const

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <Container className="py-16 sm:py-24">
        <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal>
            <div className="max-w-3xl space-y-6">
              <Badge variant="secondary">Built for beauty-salon operations</Badge>
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
                Salon software for the work between booking and closing the day.
              </h1>
              <p className="max-w-2xl text-pretty text-lg leading-8 text-muted-foreground">
                Visaxa connects the calendar, client record, visit, and checkout
                so a salon can follow one operational story instead of repairing
                gaps between separate screens.
              </p>
              <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
                The product is in active development and is not yet publicly
                launched. Private walkthroughs focus on what works now, what is
                still being validated, and whether the current product fits the
                salon workflow being considered.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Request a product walkthrough
                    <ChevronRight className="size-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/features">See current capabilities</Link>
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <Card className="bg-muted/20">
              <CardHeader className="space-y-5 p-7 sm:p-9">
                <div className="flex size-11 items-center justify-center rounded-xl border bg-background">
                  <ClipboardList className="size-5 text-primary" aria-hidden="true" />
                </div>
                <div className="space-y-2">
                  <CardTitle className="text-2xl">One working day, one connected record</CardTitle>
                  <CardDescription className="text-base leading-7">
                    An appointment should not become a disconnected client note,
                    a separate payment, and a report that needs to be reconciled
                    by hand.
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          </Reveal>
        </section>

        <section className="mt-20 border-t pt-14" aria-labelledby="daily-path">
          <Reveal>
            <div className="max-w-2xl space-y-3">
              <h2 id="daily-path" className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Follow the work, not a feature count.
              </h2>
              <p className="text-pretty leading-7 text-muted-foreground">
                The current product starts with the operational chain a salon
                repeats every day.
              </p>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {dailyPath.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <Card className="h-full">
                  <CardHeader>
                    <item.icon className="size-5 text-primary" aria-hidden="true" />
                    <CardTitle className="pt-2 text-lg">{item.title}</CardTitle>
                    <CardDescription className="leading-6">{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mt-20 grid gap-8 rounded-2xl border bg-muted/20 p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <Reveal>
            <div className="max-w-2xl space-y-3">
              <div className="flex items-center gap-2 text-sm font-medium text-primary">
                <SearchCheck className="size-4" aria-hidden="true" />
                Research before a product decision
              </div>
              <h2 className="text-3xl font-semibold tracking-tight">
                Start with the operating problem.
              </h2>
              <p className="leading-7 text-muted-foreground">
                Visaxa Research helps salon owners separate process problems,
                product limits, migration risk, and evidence before comparing
                systems.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <Button asChild size="lg" variant="outline">
              <Link href="/research">Explore Research</Link>
            </Button>
          </Reveal>
        </section>
      </Container>
    </div>
  )
}
