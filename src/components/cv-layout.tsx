"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { PDFExportButton } from "@/components/pdf-export-button"
import { PageTransition } from "@/components/page-transition"
import { MapPin } from "lucide-react"
import { motion } from "framer-motion"

export default function CVLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const navigationItems = [
    { id: 'about', label: 'About Me', href: '/' },
    { id: 'api', label: 'API Developer', href: '/api' },
    { id: 'terminal', label: 'Terminal', href: '/terminal' },
    { id: 'skills', label: 'Skills Board', href: '/skills' },
    { id: 'github', label: 'GitHub Projects', href: '/github' }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0D0D0D] transition-all duration-500">
      {/* Header */}
      <header className="border-b border-[#2E2500]/30 dark:border-[#2E2500]/50 bg-white dark:bg-[#0D0D0D]/80 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex justify-center items-center">
            {/* Navigation Tabs */}
            <div className="flex gap-1 relative">
              {/* Background indicator */}
              <motion.div
                className="absolute bg-[#141414] rounded-lg"
                layoutId="activeTab"
                transition={{
                  type: "spring",
                  stiffness: 800,
                  damping: 40
                }}
                style={{
                  width: `${100 / navigationItems.length}%`,
                  height: "100%",
                  left: `${navigationItems.findIndex(item => item.href === pathname) * (100 / navigationItems.length)}%`
                }}
              />
              
              {navigationItems.map((section) => (
                <Link
                  key={section.id}
                  href={section.href}
                  className={`relative z-10 px-4 py-2 rounded-lg transition-colors text-sm font-medium ${
                    pathname === section.href
                      ? 'text-white'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-[#B56E74]/10 dark:hover:bg-[#B56E74]/20'
                  }`}
                >
                  <motion.span
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.1 }}
                  >
                    {section.label}
                  </motion.span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <PageTransition>
          {children}
        </PageTransition>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#2E2500]/30 dark:border-[#2E2500]/50 mt-20 py-12 bg-white dark:bg-[#0D0D0D]/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Personal Info */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Johan Jorge Quiñones Tintaya
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                Full Stack Developer
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Estudiante de Ingeniería de Software - UPC
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Enlaces Rápidos
              </h3>
              <div className="space-y-2">
                <a href="mailto:quinonesjorge83@gmail.com" className="block text-gray-600 dark:text-gray-400 hover:text-[#B56E74] dark:hover:text-[#B56E74]/90 transition-colors text-sm">
                  Email
                </a>
                <a href="https://github.com/johaanq" target="_blank" rel="noopener noreferrer" className="block text-gray-600 dark:text-gray-400 hover:text-[#B56E74] dark:hover:text-[#B56E74]/90 transition-colors text-sm">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/johan-qui%C3%B1ones-tintaya-b0654b2b5" target="_blank" rel="noopener noreferrer" className="block text-gray-600 dark:text-gray-400 hover:text-[#B56E74] dark:hover:text-[#B56E74]/90 transition-colors text-sm">
                  LinkedIn
                </a>
              </div>
            </div>
            
            {/* Location */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Ubicación
              </h3>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                <MapPin className="h-4 w-4" />
                Lima, Perú
              </div>
            </div>
          </div>
          
          <div className="border-t border-[#2E2500]/20 dark:border-[#2E2500]/30 pt-6 text-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © 2025 Johan Jorge Quiñones Tintaya. Todos los derechos reservados.
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-xs mt-2">
              Desarrollado con Next.js y Tailwind CSS
            </p>
          </div>
        </div>
      </footer>

      {/* PDF Export Button */}
      <PDFExportButton />
    </div>
  )
}
