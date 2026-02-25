import type { Metadata } from "next"

import { Container } from "@/components/site/Container"
import { Badge } from "@/components/ui/badge"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy policy placeholder for Visaxa.",
}

export default function PrivacyPage() {
  return (
    <Container className="py-14 sm:py-16">
      <div className="space-y-4">
        <Badge variant="secondary">Legal</Badge>
        <h1 className="text-balance text-4xl font-semibold tracking-tight">Privacy</h1>
        <p className="max-w-2xl text-pretty text-muted-foreground">
          Placeholder route. Replace with your real privacy policy before launch.
        </p>
      </div>

      <Card className="mt-10">
        <CardHeader>
          <CardTitle className="text-base">Coming soon</CardTitle>
          <CardDescription>
            Add policy sections: data collected, processing, retention, and contact.
          </CardDescription>
        </CardHeader>
      </Card>
    </Container>
  )
}

