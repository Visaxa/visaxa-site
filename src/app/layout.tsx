import type { Metadata } from "next"
import { Geist_Mono, Inter } from "next/font/google"

import { SiteFooter } from "@/components/site/SiteFooter"
import { SiteHeader } from "@/components/site/SiteHeader"

import "./globals.css"

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

const siteUrl = new URL("https://visaxa.app")

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Visaxa — Salon CRM built for networks",
    template: "Visaxa — %s",
  },
  description:
    "Visaxa is a multi-tenant CRM for salons and networks: scheduling, inventory, and payments strategy — with Safe Mode PIN for financial privacy.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Visaxa",
    title: "Visaxa — Salon CRM built for networks",
    description:
      "Multi-tenant salon CRM for networks: scheduling, inventory, payments strategy, and Safe Mode PIN financial privacy.",
    locale: "en_US",
  },
  keywords: [
    "salon crm",
    "multi-tenant",
    "salon software",
    "scheduling",
    "inventory",
    "payments",
    "privacy",
    "pin",
    "networks",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistMono.variable} min-h-dvh bg-background font-sans text-foreground antialiased`}
      >
        <div className="flex min-h-dvh flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}

