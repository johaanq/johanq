"use client"

import React from "react"
import { APIPlayground } from "@/components/api-playground"
import CVLayout from "@/components/cv-layout"

export default function APIPage() {
  return (
    <CVLayout>
      <div className="max-w-7xl mx-auto px-6 py-8">
        <APIPlayground />
      </div>
    </CVLayout>
  )
}
