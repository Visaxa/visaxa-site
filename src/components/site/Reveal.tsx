"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"

export function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode
  delay?: number
}) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      initial={
        reduced ? { opacity: 1 } : { opacity: 0, y: 10, filter: "blur(6px)" }
      }
      whileInView={
        reduced ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)" }
      }
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  )
}

