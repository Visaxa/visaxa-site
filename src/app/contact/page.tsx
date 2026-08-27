import type { Metadata } from "next"
import Link from "next/link"
import { Mail, ShieldCheck } from "lucide-react"

import { Container } from "@/components/site/Container"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const pageUrl = "https://www.visaxa.app/contact"

export const metadata: Metadata = {
  title: "Request a walkthrough",
  description:
    "Request a private Visaxa walkthrough centered on the daily salon workflow you want to improve.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "Request a walkthrough | Visaxa",
    description:
      "See how Visaxa connects appointments, clients, visits, and checkout in a salon working day.",
  },
}

export default function ContactPage() {
  return (
    <Container className="py-14 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <Badge variant="secondary">See Visaxa</Badge>
        <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          Request a walkthrough
        </h1>
        <p className="mt-5 text-pretty text-lg leading-8 text-muted-foreground">
          Visaxa is currently available for private walkthroughs while broader
          access remains limited. We will center the conversation on the daily
          salon workflow you want to improve and show how Visaxa approaches it.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <Card>
            <CardHeader>
              <Mail className="size-5 text-primary" aria-hidden="true" />
              <CardTitle className="pt-2">Send a request by email</CardTitle>
              <CardDescription className="leading-6">
                Tell us about your salon and the workflow you would most like to
                see. The button below opens your email application.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full sm:w-auto">
                <a href="mailto:demo@visaxa.app?subject=Visaxa%20product%20walkthrough&body=Name%3A%0ASalon%3A%0ANumber%20of%20locations%3A%0ATeam%20size%3A%0AWorkflow%20I%20want%20to%20evaluate%3A%0A">
                  <Mail className="size-4" aria-hidden="true" />
                  Email demo@visaxa.app
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <ShieldCheck className="size-5 text-primary" aria-hidden="true" />
              <CardTitle className="pt-2">What to include</CardTitle>
              <CardDescription className="leading-6">
                Your salon, team size, number of locations, current system, and
                the one workflow or problem you most need to test. Do not send
                client records, payment details, passwords, or other sensitive data.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Prefer to review first?{" "}
              <Link href="/features" className="font-medium text-foreground underline underline-offset-4">
                See current capabilities
              </Link>
              .
            </CardContent>
          </Card>
        </div>
      </div>
    </Container>
  )
}
