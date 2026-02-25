import Link from "next/link"

import { Container } from "@/components/site/Container"
import { SiteHeaderMobile } from "@/components/site/SiteHeaderMobile"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShieldCheck } from "lucide-react"

const nav = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/compare", label: "Compare" },
  { href: "/blog", label: "Research" },
] as const

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <Container className="relative flex h-16 items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-semibold tracking-tight"
            aria-label="Visaxa home"
          >
            <span className="grid size-8 place-items-center rounded-lg bg-primary text-primary-foreground">
              <ShieldCheck className="size-4" aria-hidden="true" />
            </span>
            <span>Visaxa</span>
          </Link>

          <Badge variant="secondary" className="hidden sm:inline-flex">
            Safe Mode PIN
          </Badge>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" className="hidden md:inline-flex">
            <Link href="/pricing">Pricing</Link>
          </Button>
          <Button asChild className="hidden md:inline-flex">
            <Link href="/contact">Request demo</Link>
          </Button>
          <SiteHeaderMobile />
        </div>
      </Container>
    </header>
  )
}

