"use client"

import React, { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, GitBranch, Star, Eye, Users, Calendar, Code, Activity, ChevronLeft, ChevronRight, ChevronDown, ChevronUp, ExternalLink } from "lucide-react"

interface Repository {
  name: string
  title: string
  description: string
  language: string
  stars: number
  forks: number
  watchers: number
  size: number
  lastUpdate: string
  url: string
  liveUrl?: string
  isPrivate: boolean
  technologies: string[]
  achievements: string[]
  context: string
  period: string
  type: 'academic' | 'personal'
  relatedRepos?: {
    name: string
    url: string
    type: string
    language: string
    technologies: string[]
    description: string
    lastUpdate: string
  }[]
}

interface GitHubStats {
  totalRepos: number
  totalCommits: number
  totalStars: number
  totalForks: number
  languages: { [key: string]: number }
  contributionStreak: number
  joinDate: string
}

export function GitHubProjects() {
  const [selectedRepo, setSelectedRepo] = useState<Repository | null>(null)
  const [currentRepoIndex, setCurrentRepoIndex] = useState(0)
  const [isReposExpanded, setIsReposExpanded] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Datos locales basados en tus proyectos reales
  const stats: GitHubStats = {
    totalRepos: 12,
    totalCommits: 247,
    totalStars: 8,
    totalForks: 3,
    languages: {
      "JavaScript": 35,
      "Java": 25,
      "TypeScript": 20,
      "Python": 10,
      "C#": 8,
      "Dart": 7
    },
    contributionStreak: 15,
    joinDate: "2023"
  }

  const repositories: Repository[] = [
    {
      name: "lawconnect-backend",
      title: "LawConnect",
      description: "Aplicación multiplataforma para conectar abogados con clientes, facilitando servicios legales digitales.",
      context: "DartlinWave",
      period: "Abril - Julio 2025",
      technologies: ["Flutter", "Android", "Spring Boot", "API RESTful", "Git"],
      achievements: [
        "Arquitectura escalable multiplataforma",
        "Sistema de autenticación completo",
        "Más de 200 commits colaborativos"
      ],
      language: "Java",
      stars: 2,
      forks: 1,
      watchers: 3,
      size: 1250,
      lastUpdate: "2025-07-15",
      url: "https://github.com/DartlinWave/lawconnect-backend",
      isPrivate: false,
      type: "academic",
      relatedRepos: [
        { 
          name: "Backend", 
          url: "https://github.com/DartlinWave/lawconnect-backend", 
          type: "Backend",
          language: "Java",
          technologies: ["Spring Boot", "Java", "MySQL", "JWT", "REST API"],
          description: "API RESTful para gestión de servicios legales con autenticación y autorización",
          lastUpdate: "2025-07-15"
        },
        { 
          name: "Flutter", 
          url: "https://github.com/DartlinWave/LawConnect-Mobile-Flutter", 
          type: "Mobile",
          language: "Dart",
          technologies: ["Flutter", "Dart", "Provider", "HTTP", "Material Design"],
          description: "Aplicación móvil multiplataforma para clientes y abogados",
          lastUpdate: "2025-07-10"
        },
        { 
          name: "Android", 
          url: "https://github.com/DartlinWave/lawconnect-android", 
          type: "Mobile",
          language: "Java",
          technologies: ["Android", "Java", "Retrofit", "Room", "Material Design"],
          description: "Aplicación nativa Android para gestión de casos legales",
          lastUpdate: "2025-07-08"
        },
        { 
          name: "Documentación", 
          url: "https://github.com/DartlinWave/lawconnect-report", 
          type: "Docs",
          language: "Markdown",
          technologies: ["Markdown", "Documentación", "Arquitectura", "API Docs"],
          description: "Documentación completa del proyecto, arquitectura y guías de uso",
          lastUpdate: "2025-07-20"
        }
      ]
    },
    {
      name: "saifu-backend",
      title: "Saifu",
      description: "Sistema de gestión empresarial con arquitectura separada frontend/backend para procesos empresariales.",
      context: "Upecinos-AI",
      period: "2024-2025",
      technologies: ["React", "C#", "API RESTful", "Frontend", "Backend"],
      achievements: [
        "Desarrollo de arquitectura frontend/backend separada",
        "Implementación de sistema de gestión completo",
        "Integración de servicios web modernos"
      ],
      language: "C#",
      stars: 1,
      forks: 0,
      watchers: 2,
      size: 980,
      lastUpdate: "2024-12-20",
      url: "https://github.com/Upecinos-AI-AplicacionesWeb/Saifu-BackEnd",
      isPrivate: false,
      type: "academic",
      relatedRepos: [
        { 
          name: "Frontend", 
          url: "https://github.com/Upecinos-AI-AplicacionesWeb/Saifu-FrontEnd", 
          type: "Frontend",
          language: "JavaScript",
          technologies: ["React", "JavaScript", "CSS3", "Axios", "Material-UI"],
          description: "Interfaz de usuario para gestión empresarial con componentes modernos",
          lastUpdate: "2024-12-15"
        },
        { 
          name: "Backend", 
          url: "https://github.com/Upecinos-AI-AplicacionesWeb/Saifu-BackEnd", 
          type: "Backend",
          language: "C#",
          technologies: ["C#", ".NET Core", "Entity Framework", "SQL Server", "REST API"],
          description: "API backend para procesos empresariales con arquitectura escalable",
          lastUpdate: "2024-12-20"
        },
        { 
          name: "Documentación", 
          url: "https://github.com/Upecinos-AI-AplicacionesWeb/Saifu-project-report", 
          type: "Docs",
          language: "Markdown",
          technologies: ["Markdown", "Documentación", "Arquitectura", "Manuales"],
          description: "Documentación técnica y manuales de usuario del sistema",
          lastUpdate: "2024-12-25"
        }
      ]
    },
    {
      name: "excusas-jeans",
      title: "Excusas Jeans",
      description: "Plataforma de comercio electrónico especializada en productos de moda con sistema completo de gestión.",
      context: "Proyecto Personal",
      period: "2025",
      technologies: ["React", "Supabase", "Frontend", "E-commerce"],
      achievements: [
        "Desarrollo de plataforma de comercio electrónico completa",
        "Implementación de sistema de gestión de productos",
        "Diseño responsive y experiencia de usuario optimizada"
      ],
      language: "JavaScript",
      stars: 3,
      forks: 1,
      watchers: 4,
      size: 2100,
      lastUpdate: "2025-08-10",
      url: "https://github.com/johaanq/excusas-jeans",
      liveUrl: "https://excusas-jeans.vercel.app",
      isPrivate: false,
      type: "personal"
    },
    {
      name: "devstarter",
      title: "DevStarter",
      description: "Herramienta de automatización para configuración rápida de proyectos de desarrollo con integración de IA.",
      context: "Proyecto Personal",
      period: "2025",
      technologies: ["React", "Supabase", "Groq AI", "CLI Tools"],
      achievements: [
        "Automatización de configuración de proyectos",
        "Integración de IA para asistencia en desarrollo",
        "Sistema de templates personalizables"
      ],
      language: "TypeScript",
      stars: 2,
      forks: 1,
      watchers: 3,
      size: 1500,
      lastUpdate: "2025-09-01",
      url: "https://github.com/johaanq/devstarter",
      liveUrl: "https://devstarter.vercel.app",
      isPrivate: false,
      type: "personal"
    },
    {
      name: "workshop-ngine-frontend",
      title: "WorkshopNGine",
      description: "Plataforma completa de gestión de talleres con arquitectura frontend/backend separada desarrollada con Angular y Spring Boot.",
      context: "YaraSoftware-Inc",
      period: "2025",
      technologies: ["Angular", "TypeScript", "Spring Boot", "MySQL", "Docker"],
      achievements: [
        "Desarrollo de plataforma completa de gestión de talleres",
        "Arquitectura frontend Angular y backend Spring Boot",
        "Integración con base de datos MySQL",
        "Containerización con Docker para despliegue"
      ],
      language: "TypeScript",
      stars: 0,
      forks: 0,
      watchers: 1,
      size: 3200,
      lastUpdate: "2025-09-15",
      url: "https://github.com/YaraSoftware-Inc/Workshop-N-GINE-FrontEnd",
      isPrivate: false,
      type: "academic",
      relatedRepos: [
        { 
          name: "Frontend", 
          url: "https://github.com/YaraSoftware-Inc/Workshop-N-GINE-FrontEnd", 
          type: "Frontend",
          language: "TypeScript",
          technologies: ["Angular", "TypeScript", "HTML5", "CSS3", "Angular Material"],
          description: "Interfaz de usuario para gestión de talleres con Angular y diseño moderno",
          lastUpdate: "2025-09-15"
        },
        { 
          name: "Backend", 
          url: "https://github.com/YaraSoftware-Inc/Workshop-N-GINE-Platform", 
          type: "Backend",
          language: "Java",
          technologies: ["Spring Boot", "Java", "MySQL", "JPA", "REST API", "Docker"],
          description: "API backend para gestión de talleres con Spring Boot y MySQL",
          lastUpdate: "2025-09-12"
        }
      ]
    }
  ]

  useEffect(() => {
    // Inicializar con el primer repositorio seleccionado
    if (repositories.length > 0) {
      setSelectedRepo(repositories[0])
    }
  }, [])

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      "JavaScript": "bg-yellow-500",
      "TypeScript": "bg-blue-500",
      "Java": "bg-red-500",
      "Python": "bg-green-500",
      "C#": "bg-purple-500",
      "Dart": "bg-cyan-500",
      "HTML": "bg-orange-500",
      "CSS": "bg-pink-500"
    }
    return colors[language] || "bg-gray-500"
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('es-ES', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    })
  }

  const scrollToRepo = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return
    
    const container = scrollContainerRef.current
    const cardWidth = 320 // Approximate width of each repo card
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth
    
    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    })
  }

  const nextRepo = () => {
    const nextIndex = (currentRepoIndex + 1) % repositories.length
    setCurrentRepoIndex(nextIndex)
    setSelectedRepo(repositories[nextIndex])
    setIsReposExpanded(false) // Reset expanded state
  }

  const prevRepo = () => {
    const prevIndex = currentRepoIndex === 0 ? repositories.length - 1 : currentRepoIndex - 1
    setCurrentRepoIndex(prevIndex)
    setSelectedRepo(repositories[prevIndex])
    setIsReposExpanded(false) // Reset expanded state
  }


  return (
    <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
      <div className="text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2 flex items-center justify-center gap-2 animate-fade-in">
          <Github className="h-5 w-5 sm:h-6 sm:w-6" />
          GitHub Projects
        </h2>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Mis repositorios y estadísticas de desarrollo
        </p>
      </div>

      {/* Integrated Repository Section */}
      <div className="py-2 sm:py-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
        <div className="bg-[#0D0D0D]/5 dark:bg-[#0D0D0D]/20 rounded-lg border border-[#B56E74]/20 dark:border-[#B56E74]/40 overflow-hidden">
          {/* Repository Showcase Header */}
          <div className="bg-[#B56E74]/10 dark:bg-[#B56E74]/20 px-4 sm:px-6 py-3 sm:py-4 border-b border-[#B56E74]/20 dark:border-[#B56E74]/40">
            <div className="flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                <Github className="h-4 w-4 sm:h-5 sm:w-5 text-[#B56E74] dark:text-[#B56E74]/90" />
                <span className="hidden sm:inline">Mis Repositorios</span>
                <span className="sm:hidden">Repos</span>
              </h3>
              <div className="flex items-center gap-1 sm:gap-2">
                <button
                  onClick={() => scrollToRepo('left')}
                  className="p-1.5 sm:p-2 border border-[#B56E74]/40 dark:border-[#B56E74]/60 rounded hover:bg-[#B56E74]/10 dark:hover:bg-[#B56E74]/20 transition-colors"
                >
                  <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4 text-gray-700 dark:text-gray-300" />
                </button>
                <button
                  onClick={() => scrollToRepo('right')}
                  className="p-1.5 sm:p-2 border border-[#B56E74]/40 dark:border-[#B56E74]/60 rounded hover:bg-[#B56E74]/10 dark:hover:bg-[#B56E74]/20 transition-colors"
                >
                  <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 text-gray-700 dark:text-gray-300" />
                </button>
              </div>
            </div>
          </div>

          {/* Repository Cards */}
          <div className="p-3 sm:p-6">
            <div 
              ref={scrollContainerRef}
              className="flex gap-3 sm:gap-4 overflow-x-auto pb-3 sm:pb-4 mb-4 sm:mb-6"
            >
              {repositories.map((repo, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 w-56 sm:w-64 p-3 rounded-lg border cursor-pointer transition-all hover:shadow-lg animate-slide-up ${
                    selectedRepo?.name === repo.name 
                      ? 'border-[#B56E74] dark:border-[#B56E74]/80 bg-[#2E2500]/5 dark:bg-[#2E2500]/10 shadow-md ring-2 ring-[#2E2500]/20 dark:ring-[#2E2500]/40' 
                      : 'border-[#B56E74]/20 dark:border-[#B56E74]/40 hover:border-[#2E2500]/40 dark:hover:border-[#2E2500]/60 bg-[#0D0D0D]/5 dark:bg-[#0D0D0D]/20'
                  }`}
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  onClick={() => {
                    setSelectedRepo(repo)
                    setIsReposExpanded(false) // Reset expanded state
                  }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">
                      {repo.title}
                    </h4>
                    <span className="px-2 py-1 bg-[#B56E74]/10 dark:bg-[#B56E74]/20 text-[#B56E74] dark:text-[#B56E74]/90 rounded text-xs capitalize">
                      {repo.type}
                    </span>
                  </div>
                  
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-2 line-clamp-1">
                    {repo.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-2">
                    {repo.technologies.slice(0, 2).map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-[#B56E74]/10 dark:bg-[#B56E74]/20 text-[#B56E74] dark:text-[#B56E74]/90 rounded text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                    {repo.technologies.length > 2 && (
                      <span className="px-2 py-1 bg-[#B56E74]/10 dark:bg-[#B56E74]/20 text-[#B56E74] dark:text-[#B56E74]/90 rounded text-xs font-medium">
                        +{repo.technologies.length - 2}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 pt-2 border-t border-[#B56E74]/20 dark:border-[#B56E74]/40">
                    <div className="flex items-center gap-1">
                      <div className={`w-2 h-2 rounded-full ${getLanguageColor(repo.language)}`}></div>
                      <span>{repo.language}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        {repo.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitBranch className="h-3 w-3" />
                        {repo.forks}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Repository Details */}
            {selectedRepo && (
              <div className="border-t border-[#B56E74]/20 dark:border-[#B56E74]/40 pt-6 animate-slide-up" style={{ animationDelay: '0.8s' }}>
                <div className="flex items-center gap-2 mb-4">
                  <Star className="h-5 w-5 text-[#B56E74] dark:text-[#B56E74]/90" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    Repositorio Destacado
                  </h3>
                </div>
                
                <div className="bg-[#0D0D0D]/5 dark:bg-[#0D0D0D]/20 rounded-lg p-6 space-y-4 border border-[#B56E74]/20 dark:border-[#B56E74]/40">
                  <div>
                    <h4 className="font-semibold text-xl text-gray-900 dark:text-gray-100 mb-2">
                      {selectedRepo.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      {selectedRepo.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <span className="px-2 py-1 bg-[#B56E74]/10 dark:bg-[#B56E74]/20 text-[#B56E74] dark:text-[#B56E74]/90 rounded text-xs">
                        {selectedRepo.context}
                      </span>
                      <span>•</span>
                      <span>{selectedRepo.period}</span>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Logros:</h5>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      {selectedRepo.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-[#2E2500] dark:bg-[#2E2500]/80 rounded-full mt-2 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Repositorios Relacionados */}
                  {selectedRepo.relatedRepos && selectedRepo.relatedRepos.length > 0 && (
                    <div className="border-t border-[#B56E74]/20 dark:border-[#B56E74]/40 pt-6">
                      <button
                        onClick={() => setIsReposExpanded(!isReposExpanded)}
                        className="flex items-center justify-between w-full p-3 bg-[#B56E74]/5 dark:bg-[#B56E74]/10 rounded-lg hover:bg-[#B56E74]/10 dark:hover:bg-[#B56E74]/20 transition-colors group"
                      >
                        <h5 className="font-medium text-gray-900 dark:text-gray-100 flex items-center gap-2">
                          <Github className="h-4 w-4 text-[#B56E74] dark:text-[#B56E74]/90" />
                          Repositorios del Proyecto ({selectedRepo.relatedRepos.length})
                        </h5>
                        {isReposExpanded ? (
                          <ChevronUp className="h-4 w-4 text-gray-500 dark:text-gray-400 group-hover:text-[#B56E74] dark:group-hover:text-[#B56E74]/90 transition-colors" />
                        ) : (
                          <ChevronDown className="h-4 w-4 text-gray-500 dark:text-gray-400 group-hover:text-[#B56E74] dark:group-hover:text-[#B56E74]/90 transition-colors" />
                        )}
                      </button>
                      
                      {isReposExpanded && (
                        <div className="mt-4 space-y-4">
                          {selectedRepo.relatedRepos.map((repo, index) => (
                            <div
                              key={index}
                              className="border border-[#B56E74]/20 dark:border-[#B56E74]/40 rounded-lg p-4 hover:bg-[#B56E74]/5 dark:hover:bg-[#B56E74]/10 transition-colors"
                            >
                              <div className="flex items-start justify-between mb-3">
                                <div className="flex items-center gap-2">
                                  <Github className="h-5 w-5 text-[#B56E74] dark:text-[#B56E74]/90" />
                                  <h6 className="font-semibold text-gray-900 dark:text-gray-100">
                                    {repo.name}
                                  </h6>
                                </div>
                                <span className="px-2 py-1 bg-[#B56E74]/10 dark:bg-[#B56E74]/20 text-[#B56E74] dark:text-[#B56E74]/90 rounded text-xs font-medium">
                                  {repo.type}
                                </span>
                              </div>
                              
                              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                {repo.description}
                              </p>
                              
                              <div className="flex flex-wrap gap-2 mb-3">
                                {repo.technologies.map((tech, techIndex) => (
                                  <span key={techIndex} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded border border-gray-200 dark:border-gray-700">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                              
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                                  <div className="flex items-center gap-1">
                                    <div className={`w-3 h-3 rounded-full ${getLanguageColor(repo.language)}`}></div>
                                    <span>{repo.language}</span>
                                  </div>
                                  <span>Última actualización: {formatDate(repo.lastUpdate)}</span>
                                </div>
                                
                                <a
                                  href={repo.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 px-3 py-1 bg-[#141414] text-white rounded text-xs hover:bg-[#141414]/80 transition-colors"
                                >
                                  <Github className="h-3 w-3" />
                                  Ver Repo
                                </a>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {selectedRepo.liveUrl && (
                    <div className="pt-4 border-t border-[#B56E74]/20 dark:border-[#B56E74]/40">
                      <a
                        href={selectedRepo.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 border border-[#B56E74]/40 dark:border-[#B56E74]/60 rounded-md hover:bg-[#B56E74]/10 dark:hover:bg-[#B56E74]/20 transition-colors text-sm text-gray-700 dark:text-gray-300"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Ver Demo
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
