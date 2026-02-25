import Link from "next/link"

import { Container } from "@/components/site/Container"
import { Separator } from "@/components/ui/separator"
import { ShieldCheck } from "lucide-react"

const productLinks = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/compare", label: "Compare" },
  { href: "/blog", label: "Research" },
] as const

const companyLinks = [
  { href: "/contact", label: "Request demo" },
  { href: "/blog", label: "Updates" },
] as const

const legalLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
] as const

function LinkList({
  title,
  links,
}: {
  title: string
  links: ReadonlyArray<{ href: string; label: string }>
}) {
  return (
    <div className="space-y-3">
      <div className="text-sm font-semibold">{title}</div>
      <ul className="space-y-2 text-sm text-muted-foreground">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="transition-colors hover:text-foreground">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t">
      <Container className="py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 font-semibold tracking-tight">
              <span className="grid size-8 place-items-center rounded-lg bg-primary text-primary-foreground">
                <ShieldCheck className="size-4" aria-hidden="true" />
              </span>
              <span>Visaxa</span>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              Multi-tenant CRM for salons and networks — scheduling, inventory,
              and payments strategy, with Safe Mode PIN for financial privacy.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <LinkList title="Product" links={productLinks} />
            <LinkList title="Company" links={companyLinks} />
            <LinkList title="Legal" links={legalLinks} />
          </div>
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Visaxa. All rights reserved.</div>
          <div className="text-xs">
            Built to scale: clean foundation, minimal dependencies.
          </div>
        </div>
      </Container>
    </footer>
  )
}

