import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, CheckCircle2, Clock } from "lucide-react"

export function ComingSoon({
  title,
  description,
  bullets,
  primaryCta = { label: "Request demo", href: "/contact" },
  secondaryCta = { label: "Back to home", href: "/" },
}: {
  title: string
  description: string
  bullets: string[]
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}) {
  return (
    <section className="mt-10">
      <div className="flex items-center gap-2">
        <Badge variant="secondary" className="gap-1">
          <Clock className="size-3.5" aria-hidden="true" />
          Coming soon
        </Badge>
        <span className="text-sm text-muted-foreground">Structured placeholder</span>
      </div>

      <Separator className="my-6" />

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <CheckCircle2 className="size-4" aria-hidden="true" />
              {title}
            </CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Planned highlights</CardTitle>
            <CardDescription>
              A compact, editable list so you can iterate without rewrites.
            </CardDescription>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <ArrowRight className="mt-0.5 size-4 text-primary" aria-hidden="true" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </CardHeader>
        </Card>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Button asChild>
          <Link href={primaryCta.href}>{primaryCta.label}</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
        </Button>
      </div>
    </section>
  )
}

