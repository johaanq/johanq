"use client"

import React, { useRef, useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { PDFExportButton } from "@/components/pdf-export-button"
import { PageTransition } from "@/components/page-transition"
import { MapPin } from "lucide-react"
import { motion } from "framer-motion"

const navigationItems = [
  { id: 'about', label: 'About Me', href: '/' },
  { id: 'api', label: 'API Developer', href: '/api' },
  { id: 'terminal', label: 'Terminal', href: '/terminal' },
  { id: 'skills', label: 'Skills Board', href: '/skills' },
  { id: 'github', label: 'GitHub Projects', href: '/github' }
]

export default function CVLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const navRef = useRef<HTMLDivElement>(null)
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 })
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const updateIndicator = () => {
      if (!navRef.current) return
      
      const activeIndex = navigationItems.findIndex(item => item.href === pathname)
      if (activeIndex === -1) return
      
      // Get all Link elements (skip the indicator which is first child)
      const linkElements = Array.from(navRef.current.children).filter(
        (child, index) => index > 0 // Skip the motion.div indicator
      ) as HTMLElement[]
      
      const activeItem = linkElements[activeIndex]
      
      if (activeItem) {
        const navRect = navRef.current.getBoundingClientRect()
        const itemRect = activeItem.getBoundingClientRect()
        
        setIndicatorStyle({
          width: itemRect.width,
          left: itemRect.left - navRect.left
        })
      }
    }

    // Use requestAnimationFrame to ensure DOM is ready
    const timeoutId = setTimeout(updateIndicator, 100)
    window.addEventListener('resize', updateIndicator)
    
    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener('resize', updateIndicator)
    }
  }, [pathname])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0D0D0D] transition-all duration-500">
      {/* Header */}
      <header className="border-b border-[#2E2500]/30 dark:border-[#2E2500]/50 bg-white dark:bg-[#0D0D0D]/80 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          {/* Mobile Header */}
          <div className="flex justify-between items-center lg:hidden">
            <div className="text-lg font-bold text-gray-900 dark:text-gray-100">
              Johan Q.
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-[#141414] text-white hover:bg-[#141414]/80 transition-colors"
              aria-label="Toggle mobile menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex justify-center items-center">
            <div ref={navRef} className="flex gap-1 relative">
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
                  width: indicatorStyle.width,
                  height: "100%",
                  left: indicatorStyle.left
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

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 border-t border-[#2E2500]/20 dark:border-[#2E2500]/30"
            >
              <div className="py-4 space-y-2">
                {navigationItems.map((section) => (
                  <Link
                    key={section.id}
                    href={section.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg transition-colors text-sm font-medium ${
                      pathname === section.href
                        ? 'bg-[#141414] text-white'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-[#B56E74]/10 dark:hover:bg-[#B56E74]/20'
                    }`}
                  >
                    {section.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>
        <PageTransition>
          {children}
        </PageTransition>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#2E2500]/30 dark:border-[#2E2500]/50 mt-12 sm:mt-20 py-8 sm:py-12 bg-white dark:bg-[#0D0D0D]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {/* Personal Info */}
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4">
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
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4">
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
            <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4">
                Ubicación
              </h3>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-gray-600 dark:text-gray-400 text-sm">
                <MapPin className="h-4 w-4" />
                Lima, Perú
              </div>
            </div>
          </div>
          
          <div className="border-t border-[#2E2500]/20 dark:border-[#2E2500]/30 pt-4 sm:pt-6 text-center">
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
