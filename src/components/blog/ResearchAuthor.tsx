import Link from "next/link"

const AUTHOR_NAME = "Visaxa Research"
const AUTHOR_BIO =
  "Visaxa Research studies what actually breaks inside service businesses — scheduling, staffing, payroll, retention, operational systems, and scaling — and turns field observations into practical frameworks for owners."

export function ResearchAuthor() {
  return (
    <section className="mt-10 border-t pt-6">
      <div className="text-xs text-muted-foreground">Written by</div>
      <div className="mt-1">
        <Link
          href="/research"
          className="text-sm font-medium text-foreground underline underline-offset-4"
        >
          {AUTHOR_NAME}
        </Link>
      </div>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{AUTHOR_BIO}</p>
    </section>
  )
}

