"use client"

import Link from "next/link"
import * as React from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const items = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/compare", label: "Compare" },
  { href: "/blog", label: "Research" },
] as const

export function SiteHeaderMobile() {
  const [open, setOpen] = React.useState(false)
  const reduced = useReducedMotion()

  return (
    <div className="md:hidden">
      <Button
        type="button"
        variant="ghost"
        size="icon"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X className="size-4" /> : <Menu className="size-4" />}
      </Button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={reduced ? { opacity: 1 } : { opacity: 0, y: -8 }}
            animate={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 1 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute left-0 right-0 top-16 border-b bg-background/95 backdrop-blur"
          >
            <div className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6">
              <div className="flex flex-col gap-2">
                {items.map((i) => (
                  <Link
                    key={i.href}
                    href={i.href}
                    className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                    onClick={() => setOpen(false)}
                  >
                    {i.label}
                  </Link>
                ))}
              </div>

              <Separator className="my-4" />

              <div className="flex gap-2">
                <Button asChild variant="outline" className="w-full">
                  <Link href="/pricing" onClick={() => setOpen(false)}>
                    Pricing
                  </Link>
                </Button>
                <Button asChild className="w-full">
                  <Link href="/contact" onClick={() => setOpen(false)}>
                    Request demo
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

