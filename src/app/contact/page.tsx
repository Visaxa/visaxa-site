import type { Metadata } from "next"
import Link from "next/link"
import { Mail, ShieldCheck } from "lucide-react"

import { Container } from "@/components/site/Container"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const pageUrl = "https://www.visaxa.app/contact"

export const metadata: Metadata = {
  title: "Request a product walkthrough",
  description:
    "Contact Visaxa to discuss a private walkthrough of the current salon operations product and its present limits.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "Request a product walkthrough | Visaxa",
    description:
      "Discuss the current Visaxa product, the workflow you need to evaluate, and what is still in validation.",
  },
}

export default function ContactPage() {
  return (
    <Container className="py-14 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <Badge variant="secondary">Product conversation</Badge>
        <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          Request a product walkthrough
        </h1>
        <p className="mt-5 text-pretty text-lg leading-8 text-muted-foreground">
          Visaxa is not yet publicly launched. A walkthrough is a direct look at
          the current product and its limits, centered on the daily salon
          workflow you need to evaluate.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <Card>
            <CardHeader>
              <Mail className="size-5 text-primary" aria-hidden="true" />
              <CardTitle className="pt-2">Send a request by email</CardTitle>
              <CardDescription className="leading-6">
                The button opens your email application. This site does not send
                a form or show an automated success message.
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
