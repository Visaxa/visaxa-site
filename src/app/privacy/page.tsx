import type { Metadata } from "next"

import { Container } from "@/components/site/Container"
import { Badge } from "@/components/ui/badge"
import { AnalyticsSettings } from "@/components/site-intelligence/AnalyticsSettings"

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
    body: "The services that deliver and protect this website may process technical request data such as an IP address, browser information, requested URL, timestamps, and security events. Retention depends on the hosting and security services involved and any applicable obligations.",
  },
  {
    title: "Anonymous editorial measurement",
    body: "Optional Site Intelligence remains off unless you choose to allow it. If allowed, Visaxa measures page views and selected interactions such as internal or external link clicks, use of a supported research-question copy button, and product-oriented links. The application records normalized page paths, stable editorial identifiers, external destination domains, coarse device category, limited campaign labels, and a category for the referring service. It does not set an analytics cookie, create a persistent visitor identifier, retain copied question text, or store form contents. Counts are stored as daily aggregates for up to 365 days using private Redis infrastructure provided through Upstash. The application does not retain visitor IP addresses in those aggregates. Vercel and Upstash may independently process network and request information to deliver, secure, and operate their services under their own terms and retention practices.",
  },
  {
    title: "Your analytics choice",
    body: "When optional analytics are available and no choice has been saved, a compact first-visit panel offers Allow analytics and Decline with equal prominence. Your browser stores only the value granted or denied under the local-storage key visaxa:analytics-consent:v1 so the site can remember and respect your choice. The value is not a visitor identifier and is not sent as an analytics event. Choosing Decline or Keep analytics off, including after previously allowing analytics, prevents subsequent optional events from being sent. Clearing site storage removes the saved choice and returns analytics to the off-by-default state. Essential hosting and security request processing by Vercel is separate from this optional setting. Deployment feature flags can keep collection disabled regardless of the saved choice.",
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
        <p className="mt-4 text-sm text-muted-foreground">Effective October 25, 2026</p>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          This notice covers information handled through the current public
          website. Any future product service offered under a separate agreement
          will have privacy terms appropriate to that service.
        </p>

        <div className="mt-12 divide-y border-y">
          {sections.map((section) => (
            <section key={section.title} className="py-7">
              <h2 className="text-xl font-semibold">{section.title}</h2>
              <p className="mt-3 leading-7 text-muted-foreground">{section.body}</p>
            </section>
          ))}
          <AnalyticsSettings />
        </div>
      </article>
    </Container>
  )
}
