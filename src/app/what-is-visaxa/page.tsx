import type { Metadata } from "next"
import Link from "next/link"

import { Container } from "@/components/site/Container"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "What is Visaxa?",
  description:
    "Visaxa is a CRM system in development for service-based businesses that depend on scheduling, operational control, and structured workflows.",
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
          Visaxa is a CRM system currently in development for service-based businesses
          that rely on scheduling, structured operations, and day-to-day workflow control.
        </p>

        <div className="mt-10 space-y-8 text-base leading-8 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground">
              Current focus
            </h2>
            <p className="mt-3">
              The product is being designed around practical operational constraints
              commonly found in appointment-based businesses: service duration,
              scheduling consistency, role separation, and workflow reliability.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              Who it is being built for
            </h2>
            <p className="mt-3">
              Visaxa is primarily being developed with service businesses in mind,
              especially businesses where scheduling accuracy and operational clarity
              matter more than generic feature lists.
            </p>
            <p className="mt-3">
              This includes businesses such as salons, clinics, studios, and other
              small service teams that depend on organized appointments, staff
              coordination, and consistent execution.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              What makes the concept different
            </h2>
            <p className="mt-3">
              The working idea behind Visaxa is that software should reflect how
              a business actually operates, not just how it looks in a demo.
            </p>
            <p className="mt-3">
              Rather than starting from marketing features alone, the product is being
              shaped around operational structure: time, services, constraints,
              permissions, and the routines that make a service business run calmly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              Product status
            </h2>
            <p className="mt-3">
              Visaxa is not yet publicly launched. The site currently serves as an
              early foundation for product information, research notes, and structured
              articles related to CRM selection, scheduling, and service business operations.
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

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              Why this page exists
            </h2>
            <p className="mt-3">
              This page exists to define Visaxa clearly as a distinct software project
              and to provide a stable reference point for readers, search systems,
              and AI tools that encounter the name for the first time.
            </p>
          </section>
        </div>
      </div>
    </Container>
  )
}

