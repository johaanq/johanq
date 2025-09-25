"use client"

import React, { useState, useCallback, useMemo } from "react"
import { Mail, Github, Linkedin, Check } from "lucide-react"
import CVLayout from "@/components/cv-layout"

export default function Home() {
  const [emailCopied, setEmailCopied] = useState(false)

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
      setTimeout(() => setEmailCopied(false), 2000) // Hide message after 2 seconds
    } catch (err) {
      console.error('Failed to copy email: ', err)
    }
  }, [])

  return (
    <CVLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
              {/* Personal Info */}
              <section className="mb-12 sm:mb-16 text-center">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4">
                  Johan Jorge Quiñones Tintaya
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">
                  Full Stack Developer & Software Engineer
                </p>
                
                {/* Info */}
                <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-8 text-gray-500 dark:text-gray-400 mb-8 sm:mb-12 text-sm sm:text-base">
                  <span>Ingeniería de Software</span>
                  <span className="hidden sm:inline">•</span>
                  <span>7mo Ciclo - UPC</span>
                  <span className="hidden sm:inline">•</span>
                  <span>Lima, Perú</span>
                </div>
                
                {/* Contact Links */}
                <div className="flex justify-center gap-2 sm:gap-4 mb-12 sm:mb-16">
                  <button
                    onClick={copyEmailToClipboard}
                    className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 bg-[#141414] text-white rounded-lg hover:bg-[#141414]/80 transition-colors text-xs sm:text-sm relative"
                  >
                    {emailCopied ? <Check className="h-3 w-3 sm:h-4 sm:w-4" /> : <Mail className="h-3 w-3 sm:h-4 sm:w-4" />}
                    <span className="hidden sm:inline">{emailCopied ? "¡Copiado!" : "Email"}</span>
                    <span className="sm:hidden">{emailCopied ? "✓" : "📧"}</span>
                  </button>
                  <a
                    href="https://github.com/johaanq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 border border-[#B56E74]/40 dark:border-[#B56E74]/60 rounded-lg hover:bg-[#B56E74]/10 dark:hover:bg-[#B56E74]/20 transition-colors text-gray-700 dark:text-gray-300 text-xs sm:text-sm"
                  >
                    <Github className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="hidden sm:inline">GitHub</span>
                    <span className="sm:hidden">GH</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/johan-qui%C3%B1ones-tintaya-b0654b2b5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 border border-[#B56E74]/40 dark:border-[#B56E74]/60 rounded-lg hover:bg-[#B56E74]/10 dark:hover:bg-[#B56E74]/20 transition-colors text-gray-700 dark:text-gray-300 text-xs sm:text-sm"
                  >
              <Linkedin className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">LinkedIn</span>
              <span className="sm:hidden">LI</span>
            </a>
          </div>
        </section>

              {/* About Me Section */}
              <section className="mb-12 sm:mb-16">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 sm:mb-8 text-center">
                  Sobre mí
                </h2>
                
                <div className="prose prose-sm sm:prose-lg max-w-none text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 sm:space-y-6">
                  <p>
                    Soy estudiante de 7mo ciclo de <strong>Ingeniería de Software</strong> en la Universidad Peruana de Ciencias Aplicadas (UPC), 
                    con una sólida formación en desarrollo full-stack y una pasión por crear soluciones tecnológicas innovadoras.
                  </p>
                  
                  <p>
                    Mi experiencia abarca tanto el desarrollo frontend como backend, trabajando con tecnologías modernas como React, Next.js, 
                    Spring Boot y Flutter. He participado en proyectos colaborativos que integran desarrollo web y móvil, 
                    siempre aplicando metodologías ágiles y las mejores prácticas de la industria.
                  </p>
                  
                  <p>
                    Me especializo en la creación de aplicaciones escalables y eficientes, con un enfoque particular en la experiencia 
                    del usuario y la arquitectura de software. Mi formación académica me ha permitido desarrollar una base sólida en 
                    algoritmos, estructuras de datos y patrones de diseño.
                  </p>
                  
                  <p>
                    Constantemente busco aprender nuevas tecnologías y mantenerme actualizado con las tendencias del desarrollo de software. 
                    Mi objetivo es contribuir a proyectos que generen un impacto positivo y continuar creciendo profesionalmente en el 
                    campo de la ingeniería de software.
            </p>
          </div>
          
          {/* Technology Logos */}
          <div className="mt-8 sm:mt-12">
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 justify-items-center">
              {techLogos.map((tech) => (
                <div key={tech.name} className="flex items-center justify-center">
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
          
          {/* GitHub Projects Button */}
          <div className="text-center mt-6 sm:mt-8">
            <a
              href="/github"
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-[#B56E74] text-white rounded-lg hover:bg-[#B56E74]/80 transition-colors text-base sm:text-lg font-medium"
            >
              <Github className="h-4 w-4 sm:h-5 sm:w-5" />
              Mis Proyectos
            </a>
          </div>
        </section>

        {/* Education & Certifications */}
              <section className="mb-12 sm:mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
                  {/* Education */}
                  <div>
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
            
                  {/* Certifications */}
                <div>
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
        </section>
    </div>
    </CVLayout>
  )
}
