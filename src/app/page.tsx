"use client"

import React, { useState, useCallback, useMemo, useEffect } from "react"
import { Mail, Github, Linkedin, Check, User, Code, Terminal as TerminalIcon, FolderGit2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { APIPlayground } from "@/components/api-playground"
import { TerminalSimulator } from "@/components/terminal-simulator"
import { GitHubProjects } from "@/components/github-projects"
import { PDFExportButton } from "@/components/pdf-export-button"

export default function Home() {
  const [emailCopied, setEmailCopied] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const techLogos = useMemo(() => [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg' },
    { name: 'Spring Boot', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg' },
    { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
    { name: 'C#', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-plain.svg' },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
    { name: 'Flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' }
  ], [])

  const copyEmailToClipboard = useCallback(async () => {
    try {
      await navigator.clipboard.writeText('quinonesjorge83@gmail.com')
      setEmailCopied(true)
      setTimeout(() => setEmailCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy email: ', err)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const navItems = [
    { id: 'about', label: 'Sobre mí', icon: User },
    { id: 'api', label: 'API', icon: Code },
    { id: 'terminal', label: 'Terminal', icon: TerminalIcon },
    { id: 'projects', label: 'Proyectos', icon: FolderGit2 }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-[#0D0D0D]">
      {/* Dynamic Island Navigation */}
      <motion.header 
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <motion.nav
          animate={{
            width: scrolled ? "auto" : "auto",
            padding: scrolled ? "8px 12px" : "12px 16px",
          }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="bg-white/80 dark:bg-[#0D0D0D]/90 backdrop-blur-xl rounded-full shadow-lg border border-[#B56E74]/20 dark:border-[#B56E74]/40"
        >
          <div className="flex items-center gap-1 sm:gap-2">
            <AnimatePresence mode="wait">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-[#B56E74]/10 dark:hover:bg-[#B56E74]/20 transition-all group overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <item.icon className={`h-3.5 w-3.5 sm:h-4 sm:w-4 transition-all ${scrolled ? 'scale-100' : 'scale-90'}`} />
                    <motion.span
                      animate={{
                        opacity: scrolled ? 0 : 1,
                        width: scrolled ? 0 : "auto",
                        marginLeft: scrolled ? 0 : "0.25rem"
                      }}
                      transition={{ duration: 0.2 }}
                      className="hidden sm:inline whitespace-nowrap overflow-hidden"
                    >
                      {item.label}
                    </motion.span>
                  </div>
                  
                  {/* Hover effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#B56E74]/20 to-[#B56E74]/10 rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        </motion.nav>

        {/* Scroll indicator */}
        <AnimatePresence>
          {!scrolled && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-8 left-1/2 -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1 h-6 bg-gradient-to-b from-[#B56E74] to-transparent rounded-full"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer for fixed header */}
      <div className="h-20" />

      {/* Main Content */}
      <main>
        {/* About Section - Clean fade in */}
        <motion.section 
          id="about" 
          className="py-12 sm:py-20 bg-white dark:bg-[#0D0D0D]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            {/* Personal Info */}
            <div className="mb-12 sm:mb-16 text-center">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4 animate-fade-in">
                Johan Jorge Quiñones Tintaya
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                Full Stack Developer & Software Engineer
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-8 text-gray-500 dark:text-gray-400 mb-8 sm:mb-12 text-sm sm:text-base animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <span>Ingeniería de Software</span>
                <span className="hidden sm:inline">•</span>
                <span>7mo Ciclo - UPC</span>
              </div>
              
              <div className="flex justify-center gap-2 sm:gap-4 mb-12 sm:mb-16 animate-slide-up flex-wrap" style={{ animationDelay: '0.3s' }}>
                <button
                  onClick={copyEmailToClipboard}
                  className="flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 bg-[#141414] text-white rounded-lg hover:bg-[#141414]/80 transition-colors text-xs sm:text-sm"
                  title={emailCopied ? "¡Copiado!" : "Email"}
                >
                  {emailCopied ? <Check className="h-4 w-4" /> : <Mail className="h-4 w-4" />}
                  <span className="hidden sm:inline">{emailCopied ? "¡Copiado!" : "Email"}</span>
                </button>
                <a
                  href="https://github.com/johaanq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 border border-[#B56E74]/40 dark:border-[#B56E74]/60 rounded-lg hover:bg-[#B56E74]/10 dark:hover:bg-[#B56E74]/20 transition-colors text-gray-700 dark:text-gray-300 text-xs sm:text-sm"
                >
                  <Github className="h-4 w-4" />
                  <span className="hidden sm:inline">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/johan-qui%C3%B1ones-tintaya-b0654b2b5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 border border-[#B56E74]/40 dark:border-[#B56E74]/60 rounded-lg hover:bg-[#B56E74]/10 dark:hover:bg-[#B56E74]/20 transition-colors text-gray-700 dark:text-gray-300 text-xs sm:text-sm"
                >
                  <Linkedin className="h-4 w-4" />
                  <span className="hidden sm:inline">LinkedIn</span>
                </a>
                <a
                  href="https://johanq.vercel.app/#projects"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 border border-[#B56E74]/40 dark:border-[#B56E74]/60 rounded-lg hover:bg-[#B56E74]/10 dark:hover:bg-[#B56E74]/20 transition-colors text-gray-700 dark:text-gray-300 text-xs sm:text-sm"
                  title="Portfolio"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                  <span className="hidden sm:inline">Portfolio</span>
                </a>
              </div>
            </div>

            {/* About Me */}
            <div className="mb-12 sm:mb-16">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 sm:mb-8 text-center animate-fade-in">
                Perfil Profesional
              </h2>
              
              <div className="prose prose-sm sm:prose-lg max-w-none text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
                <p className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
                  Estudiante de 7mo ciclo de <span className="highlight-keyword">Ingeniería de Software</span> en la UPC con experiencia práctica en desarrollo Full Stack. Especializado en la construcción de aplicaciones web y móviles utilizando <span className="highlight-keyword">React</span>, <span className="highlight-keyword">Next.js</span>, <span className="highlight-keyword">Spring Boot</span> y <span className="highlight-keyword">Flutter</span>.
                </p>
                
                <p className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  He contribuido activamente en proyectos colaborativos, acumulando más de 200 commits y trabajando en equipos multidisciplinarios. Aplico metodologías ágiles (Scrum) y arquitecturas escalables para entregar soluciones de software robustas y mantenibles.
                </p>
                
                <p className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
                  Busco una posición donde pueda aplicar mis conocimientos técnicos, continuar desarrollándome profesionalmente y contribuir al éxito de proyectos tecnológicos de impacto.
                </p>
              </div>
        
              <div className="mt-8 sm:mt-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 justify-items-center">
                  {techLogos.map((tech, index) => (
                    <div key={tech.name} className="flex items-center justify-center animate-slide-up" style={{ animationDelay: `${0.5 + index * 0.05}s` }}>
                      <img 
                        src={tech.logo} 
                        alt={`${tech.name} logo`}
                        className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain hover:scale-110 transition-transform duration-200"
                        style={{
                          filter: 'brightness(0) saturate(100%) invert(50%) sepia(35%) saturate(1500%) hue-rotate(320deg) brightness(110%) contrast(95%)'
                        }}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-center mt-6 sm:mt-8 animate-slide-up" style={{ animationDelay: '1.0s' }}>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-[#B56E74] text-white rounded-lg hover:bg-[#B56E74]/80 transition-colors text-base sm:text-lg font-medium"
                >
                  <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                  Mis Proyectos
                </button>
              </div>
            </div>

            {/* Education & Certifications */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              <div className="animate-slide-up" style={{ animationDelay: '1.1s' }}>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 sm:mb-6">
                  Formación Académica
                </h2>
                <div className="border-l-4 border-[#B56E74] dark:border-[#B56E74]/80 pl-4 sm:pl-6">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
                    Ingeniería de Software
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-2 text-sm sm:text-base">
                    Universidad Peruana de Ciencias Aplicadas (UPC)
                  </p>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2 py-1 bg-[#B56E74]/10 dark:bg-[#B56E74]/20 text-[#B56E74] dark:text-[#B56E74]/90 rounded text-xs sm:text-sm">
                      7mo Ciclo
                    </span>
                    <span className="px-2 py-1 bg-[#B56E74]/10 dark:bg-[#B56E74]/20 text-[#B56E74] dark:text-[#B56E74]/90 rounded text-xs sm:text-sm">
                      En curso
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="animate-slide-up" style={{ animationDelay: '1.2s' }}>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 sm:mb-6">
                  Certificaciones
                </h2>
                <div className="space-y-3 sm:space-y-4">
                  <div className="border-l-4 border-[#B56E74] dark:border-[#B56E74]/80 pl-4 sm:pl-6">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm sm:text-base">
                      Google IT Automation with Python
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Coursera - Google</p>
                  </div>
                  <div className="border-l-4 border-[#B56E74] dark:border-[#B56E74]/80 pl-4 sm:pl-6">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm sm:text-base">
                      Introduction to Web Development
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Coursera - UC Davis</p>
                  </div>
                  <div className="border-l-4 border-[#B56E74] dark:border-[#B56E74]/80 pl-4 sm:pl-6">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm sm:text-base">
                      MongoDB Basics
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">MongoDB University</p>
                  </div>
                  <div className="border-l-4 border-[#B56E74] dark:border-[#B56E74]/80 pl-4 sm:pl-6">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm sm:text-base">
                      Scrum Fundamentals Certified
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">SCRUMstudy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* API Section - Subtle slide from left */}
        <motion.section 
          id="api" 
          className="py-12 sm:py-20 bg-gray-50 dark:bg-[#0D0D0D]/50"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <APIPlayground />
          </div>
        </motion.section>

        {/* Terminal Section - Subtle slide from right */}
        <motion.section 
          id="terminal" 
          className="py-12 sm:py-20 bg-white dark:bg-[#0D0D0D]"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <TerminalSimulator />
          </div>
        </motion.section>

        {/* GitHub Projects Section - Clean scale with subtle blur */}
        <motion.section 
          id="projects" 
          className="py-12 sm:py-20 bg-gray-50 dark:bg-[#0D0D0D]/50"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <GitHubProjects />
          </div>
        </motion.section>
      </main>

      {/* Footer - Fade in from bottom */}
      <motion.footer 
        className="border-t border-[#B56E74]/20 dark:border-[#B56E74]/40 py-8 sm:py-12 bg-gray-50 dark:bg-[#0D0D0D]/50"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © 2025 Johan Jorge Quiñones Tintaya. Todos los derechos reservados.
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-xs mt-2">
            Desarrollado con Next.js y Tailwind CSS
          </p>
        </div>
      </motion.footer>

      {/* PDF Export Button */}
      <PDFExportButton />
    </div>
  )
}
