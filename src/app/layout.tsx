import type { Metadata } from "next"
import { Geist_Mono, Inter } from "next/font/google"

import { SiteFooter } from "@/components/site/SiteFooter"
import { SiteHeader } from "@/components/site/SiteHeader"

import "./globals.css"
import "@/styles/globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
})

const siteUrl = new URL("https://www.visaxa.app")

export const metadata: Metadata = {
  metadataBase: siteUrl,
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Visaxa — Salon operations software",
    template: "Visaxa — %s",
  },
  description:
    "Visaxa is salon operations software in active development, connecting the calendar, client record, visit, and checkout.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Visaxa",
    title: "Visaxa — Salon operations software",
    description:
      "Salon operations software in active development, connecting the calendar, client record, visit, and checkout.",
    locale: "en_US",
  },
  keywords: [
    "salon crm",
    "salon software",
    "scheduling",
    "client records",
    "salon operations",
    "checkout",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Visaxa",
    url: "https://www.visaxa.app",
  } as const

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistMono.variable} min-h-dvh bg-background font-sans text-foreground antialiased`}
      >
        <script
          type="application/ld+json"
          // Intentionally inline: stable entity signal for crawlers.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <div className="flex min-h-dvh flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}
