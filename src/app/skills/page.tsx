"use client"

import React from "react"
import { SimpleSkillsBoard } from "@/components/simple-skills-board"
import CVLayout from "@/components/cv-layout"

export default function SkillsPage() {
  return (
    <CVLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <SimpleSkillsBoard />
      </div>
    </CVLayout>
  )
}
