import type { Metadata } from "next"

import { Container } from "@/components/site/Container"
import { Badge } from "@/components/ui/badge"

const pageUrl = "https://www.visaxa.app/terms"

export const metadata: Metadata = {
  title: "Public website terms",
  description:
    "Terms for using the current Visaxa public information and research website.",
  alternates: { canonical: pageUrl },
}

const sections = [
  {
    title: "Scope of these terms",
    body: "These terms apply only to the public information and research website at visaxa.app. The website does not currently sell a subscription, create a VisaxaCRM customer account, or publish product-service commercial terms.",
  },
  {
    title: "Product status",
    body: "Visaxa is in active development and is not yet publicly launched. Product descriptions distinguish current workflows from areas still being validated. Website content is not a promise that a capability, price, release date, or commercial arrangement will be available.",
  },
  {
    title: "Research content",
    body: "Research is provided for general informational purposes. It is not legal, financial, accounting, employment, privacy, or migration advice. Readers should verify current primary sources and obtain appropriate professional advice for decisions that depend on jurisdiction or individual circumstances.",
  },
  {
    title: "Third-party information",
    body: "Links and citations may lead to third-party sites. Visaxa does not control their availability, terms, documentation, or later changes. A citation records the source used for a claim; it is not an endorsement of the publisher or product.",
  },
  {
    title: "Acceptable use",
    body: "Do not attempt to disrupt the website, gain unauthorized access, introduce malicious code, or use the site in a way that violates applicable law or the rights of others.",
  },
  {
    title: "Questions",
    body: "Questions about these website terms can be sent to demo@visaxa.app. Any future product evaluation or commercial relationship requires separate written terms.",
  },
] as const

export default function TermsPage() {
  return (
    <Container className="py-14 sm:py-20">
      <article className="mx-auto max-w-3xl">
        <Badge variant="secondary">Public website</Badge>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
          Website terms
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">Effective August 26, 2026</p>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          These terms describe the current public site. They are deliberately
          separate from product-service terms that do not yet exist on this website.
        </p>

        <div className="mt-12 divide-y border-y">
          {sections.map((section) => (
            <section key={section.title} className="py-7">
              <h2 className="text-xl font-semibold">{section.title}</h2>
              <p className="mt-3 leading-7 text-muted-foreground">{section.body}</p>
            </section>
          ))}
        </div>
      </article>
    </Container>
  )
}
