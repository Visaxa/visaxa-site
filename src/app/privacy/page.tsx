import type { Metadata } from "next"

import { Container } from "@/components/site/Container"
import { Badge } from "@/components/ui/badge"

const pageUrl = "https://www.visaxa.app/privacy"

export const metadata: Metadata = {
  title: "Public website privacy notice",
  description:
    "How the current Visaxa public information and research website handles direct contact and basic website access.",
  alternates: { canonical: pageUrl },
}

const sections = [
  {
    title: "Scope",
    body: "This notice covers the public website at visaxa.app. The site currently provides product information and research. It does not provide a public VisaxaCRM account, client portal, subscription checkout, or product-data upload.",
  },
  {
    title: "Information you choose to send",
    body: "The walkthrough link opens your email application. If you email Visaxa, the message, sender address, and any details you include are processed through the email services used by you and Visaxa so the request can be reviewed and answered. Do not send client records, payment details, passwords, or other sensitive information.",
  },
  {
    title: "Website access data",
    body: "Like most hosted websites, the delivery infrastructure may process technical request data needed to serve and protect the site, such as an IP address, browser information, requested URL, timestamps, and security events. This page does not claim a retention period that has not been formally established.",
  },
  {
    title: "External sources",
    body: "Research articles link to third-party documentation and government sources. Those sites operate under their own privacy practices. Following a link leaves the Visaxa website.",
  },
  {
    title: "Questions or requests",
    body: "For a question about information you sent directly to Visaxa, email demo@visaxa.app. Identity or other verification may be needed before acting on a request. Applicable rights and obligations depend on the relevant jurisdiction and circumstances.",
  },
] as const

export default function PrivacyPage() {
  return (
    <Container className="py-14 sm:py-20">
      <article className="mx-auto max-w-3xl">
        <Badge variant="secondary">Public website</Badge>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
          Privacy notice
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">Effective August 26, 2026</p>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          This is a narrow notice for the website as it exists today. It is not a
          privacy policy for a future production CRM service or a customer contract.
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
