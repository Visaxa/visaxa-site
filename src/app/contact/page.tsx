import type { Metadata } from "next"
import Link from "next/link"

import { Container } from "@/components/site/Container"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Request demo",
  description:
    "Request a VisaxaCRM demo. Placeholder route — connect a real form handler later.",
}

export default function ContactPage() {
  return (
    <Container className="py-14 sm:py-16">
      <div className="space-y-4">
        <Badge variant="secondary">Contact</Badge>
        <h1 className="text-balance text-4xl font-semibold tracking-tight">
          Request a demo
        </h1>
        <p className="max-w-2xl text-pretty text-muted-foreground">
          For now this is a static placeholder. When you’re ready, wire it to an
          email provider or form backend — no rewrite needed.
        </p>
      </div>

      <Separator className="my-10" />

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Email</CardTitle>
            <CardDescription>
              Use a mailto link for a minimal, production-safe baseline.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <Button asChild className="w-full sm:w-auto">
              <a href="mailto:demo@visaxa.app?subject=Visaxa%20demo%20request">
                <Mail className="size-4" />
                Email demo@visaxa.app
              </a>
            </Button>
            <div className="text-sm text-muted-foreground">
              Include: number of locations, staff size, and current tools.
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Next step</CardTitle>
            <CardDescription>
              Add a real form when you’re ready (still static-friendly).
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <div>Suggested fields: name, email, locations, staff, notes.</div>
            <div>
              Want to explore first?{" "}
              <Link
                href="/features"
                className="font-medium text-foreground underline underline-offset-4"
              >
                See features
              </Link>
              .
            </div>
          </CardContent>
        </Card>
      </div>
    </Container>
  )
}

