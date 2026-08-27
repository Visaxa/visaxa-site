import type { Metadata } from "next"
import Link from "next/link"

import { Container } from "@/components/site/Container"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "What is Visaxa?",
  description:
    "Visaxa is salon operations software connecting the calendar, client record, visit, and checkout.",
  alternates: { canonical: "https://www.visaxa.app/what-is-visaxa" },
}

export default function WhatIsVisaxaPage() {
  return (
    <Container className="py-14 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <Badge variant="secondary">About</Badge>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          What is Visaxa?
        </h1>

        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Visaxa is salon operations software currently in development for beauty
          salons that need the calendar, client record, visit, and checkout to
          remain connected through the working day.
        </p>

        <div className="mt-10 space-y-8 text-base leading-8 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground">
              Current focus
            </h2>
            <p className="mt-3">
              Visaxa focuses on the daily path from appointment to
              visit and checkout, with client context and operating controls kept
              alongside that work.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              Who it is being built for
            </h2>
            <p className="mt-3">
              Visaxa is currently focused on beauty-salon workflows: the work
              that reception, professionals, and owners need to carry from one
              part of the day to the next.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              What makes the concept different
            </h2>
            <p className="mt-3">
              The working idea behind Visaxa is that software should reflect how a
              salon actually operates, not just how it looks in a demo.
            </p>
            <p className="mt-3">
              Rather than starting from a feature count, the product follows the
              records and decisions that staff need to carry through a real working day.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              Availability
            </h2>
            <p className="mt-3">
              Visaxa is currently available for private walkthroughs while
              broader access remains limited. Public pricing and general
              availability have not yet been announced.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              Related reading
            </h2>
            <p className="mt-3">
              To understand the operational ideas behind the project, start with:
            </p>

            <div className="mt-4 space-y-3">
              <div>
                <Link
                  href="/blog/how-to-evaluate-a-crm-framework"
                  className="font-medium text-foreground underline underline-offset-4"
                >
                  How to Evaluate a CRM System: A Practical Framework for Service Businesses
                </Link>
              </div>
              <div>
                <Link
                  href="/blog/why-appointment-scheduling-systems-fail-service-businesses"
                  className="font-medium text-foreground underline underline-offset-4"
                >
                  Why Appointment Scheduling Systems Fail Service Businesses
                </Link>
              </div>
            </div>
          </section>

        </div>
      </div>
    </Container>
  )
}
