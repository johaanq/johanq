"use client"

import React from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'

export function ThemeToggle() {
  const { theme, setTheme, mounted } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  // Evitar hidratación mismatch mostrando el estado por defecto hasta que se monte
  if (!mounted) {
    return (
      <button
        className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg border border-[#B56E74]/20 dark:border-[#B56E74]/40 bg-white dark:bg-[#0D0D0D]/20 hover:bg-[#B56E74]/5 dark:hover:bg-[#B56E74]/10 transition-all duration-200 group"
        title="Cambiar tema"
      >
        <Moon className="h-3 w-3 sm:h-4 sm:w-4 text-gray-600 dark:text-gray-400 group-hover:text-[#B56E74] dark:group-hover:text-[#B56E74]/90 transition-colors" />
      </button>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg border border-[#B56E74]/20 dark:border-[#B56E74]/40 bg-white dark:bg-[#0D0D0D]/20 hover:bg-[#B56E74]/5 dark:hover:bg-[#B56E74]/10 transition-all duration-200 group"
      title={theme === 'light' ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro'}
    >
      {theme === 'light' ? (
        <Moon className="h-3 w-3 sm:h-4 sm:w-4 text-gray-600 dark:text-gray-400 group-hover:text-[#B56E74] dark:group-hover:text-[#B56E74]/90 transition-colors" />
      ) : (
        <Sun className="h-3 w-3 sm:h-4 sm:w-4 text-gray-600 dark:text-gray-400 group-hover:text-[#B56E74] dark:group-hover:text-[#B56E74]/90 transition-colors" />
      )}
    </button>
  )
}
