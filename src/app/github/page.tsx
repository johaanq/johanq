"use client"

import React from "react"
import { GitHubProjects } from "@/components/github-projects"
import CVLayout from "@/components/cv-layout"

export default function GitHubPage() {
  return (
    <CVLayout>
      <div className="max-w-7xl mx-auto px-6 py-8">
        <GitHubProjects />
      </div>
    </CVLayout>
  )
}
