"use client"

import React from "react"
import { SimpleSkillsBoard } from "@/components/simple-skills-board"
import CVLayout from "@/components/cv-layout"

export default function SkillsPage() {
  return (
    <CVLayout>
      <div className="max-w-7xl mx-auto px-6 py-8">
        <SimpleSkillsBoard />
      </div>
    </CVLayout>
  )
}
