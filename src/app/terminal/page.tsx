"use client"

import React from "react"
import { TerminalSimulator } from "@/components/terminal-simulator"
import CVLayout from "@/components/cv-layout"

export default function TerminalPage() {
  return (
    <CVLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <TerminalSimulator />
      </div>
    </CVLayout>
  )
}
