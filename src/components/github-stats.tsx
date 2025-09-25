"use client"

import React, { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, GitBranch, Star, Eye, Users, Calendar, Code, Activity } from "lucide-react"

interface Repository {
  name: string
  description: string
  language: string
  stars: number
  forks: number
  watchers: number
  size: number
  lastUpdate: string
  url: string
  isPrivate: boolean
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

export function GitHubStats() {
  const [stats, setStats] = useState<GitHubStats | null>(null)
  const [repositories, setRepositories] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedRepo, setSelectedRepo] = useState<Repository | null>(null)

  // Datos simulados basados en tu perfil real
  const mockStats: GitHubStats = {
    totalRepos: 12,
    totalCommits: 247,
    totalStars: 8,
    totalForks: 3,
    languages: {
      "JavaScript": 35,
      "Java": 25,
      "TypeScript": 15,
      "Python": 10,
      "C#": 8,
      "Dart": 7
    },
    contributionStreak: 15,
    joinDate: "2023"
  }

  const mockRepositories: Repository[] = [
    {
      name: "lawconnect-backend",
      description: "Backend para aplicación de conexión entre abogados y clientes",
      language: "Java",
      stars: 2,
      forks: 1,
      watchers: 3,
      size: 1250,
      lastUpdate: "2025-07-15",
      url: "https://github.com/DartlinWave/lawconnect-backend",
      isPrivate: false
    },
    {
      name: "saifu-backend",
      description: "Sistema de gestión empresarial con arquitectura separada",
      language: "C#",
      stars: 1,
      forks: 0,
      watchers: 2,
      size: 980,
      lastUpdate: "2024-12-20",
      url: "https://github.com/Upecinos-AI-AplicacionesWeb/Saifu-BackEnd",
      isPrivate: false
    },
    {
      name: "excusas-jeans",
      description: "Plataforma de comercio electrónico para productos de moda",
      language: "JavaScript",
      stars: 3,
      forks: 1,
      watchers: 4,
      size: 2100,
      lastUpdate: "2025-08-10",
      url: "https://github.com/johaanq/excusas-jeans",
      isPrivate: false
    },
    {
      name: "devstarter",
      description: "Herramienta de automatización para configuración de proyectos",
      language: "TypeScript",
      stars: 2,
      forks: 1,
      watchers: 3,
      size: 1500,
      lastUpdate: "2025-09-01",
      url: "https://github.com/johaanq/devstarter",
      isPrivate: false
    },
    {
      name: "cv-portfolio",
      description: "Portfolio personal interactivo con funcionalidades avanzadas",
      language: "TypeScript",
      stars: 0,
      forks: 0,
      watchers: 1,
      size: 800,
      lastUpdate: "2025-09-24",
      url: "https://github.com/johaanq/cv-page",
      isPrivate: false
    }
  ]

  useEffect(() => {
    // Simular carga de datos
    const loadData = async () => {
      setLoading(true)
      
      // Simular delay de API
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setStats(mockStats)
      setRepositories(mockRepositories)
      setSelectedRepo(mockRepositories[0])
      setLoading(false)
    }

    loadData()
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

  if (loading) {
    return (
      <Card className="border-gray-200 dark:border-gray-800">
        <CardContent className="p-8">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            <span className="ml-4 text-gray-600 dark:text-gray-400">
              Cargando estadísticas de GitHub...
            </span>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2 flex items-center justify-center gap-2">
          <Github className="h-8 w-8" />
          GitHub Analytics
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Estadísticas reales de mi actividad en GitHub
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card className="border-gray-200 dark:border-gray-800 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {stats?.totalRepos}
            </div>
            <div className="text-sm text-blue-600 dark:text-blue-400 flex items-center justify-center gap-1">
              <Code className="h-4 w-4" />
              Repositorios
            </div>
          </CardContent>
        </Card>

        <Card className="border-gray-200 dark:border-gray-800 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              {stats?.totalCommits}
            </div>
            <div className="text-sm text-green-600 dark:text-green-400 flex items-center justify-center gap-1">
              <GitBranch className="h-4 w-4" />
              Commits
            </div>
          </CardContent>
        </Card>

        <Card className="border-gray-200 dark:border-gray-800 bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-950 dark:to-yellow-900">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
              {stats?.totalStars}
            </div>
            <div className="text-sm text-yellow-600 dark:text-yellow-400 flex items-center justify-center gap-1">
              <Star className="h-4 w-4" />
              Stars
            </div>
          </CardContent>
        </Card>

        <Card className="border-gray-200 dark:border-gray-800 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
              {stats?.contributionStreak}
            </div>
            <div className="text-sm text-purple-600 dark:text-purple-400 flex items-center justify-center gap-1">
              <Activity className="h-4 w-4" />
              Días activo
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Language Distribution */}
        <Card className="border-gray-200 dark:border-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5 text-blue-500" />
              Lenguajes de Programación
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stats && Object.entries(stats.languages).map(([language, percentage]) => (
                <div key={language}>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${getLanguageColor(language)}`}></div>
                      <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        {language}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${getLanguageColor(language)}`}
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Repository Details */}
        <Card className="border-gray-200 dark:border-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Github className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              Repositorio Destacado
            </CardTitle>
          </CardHeader>
          <CardContent>
            {selectedRepo && (
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                    {selectedRepo.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {selectedRepo.description}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <div className={`w-3 h-3 rounded-full ${getLanguageColor(selectedRepo.language)}`}></div>
                    <span>{selectedRepo.language}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    <span>{selectedRepo.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitBranch className="h-4 w-4" />
                    <span>{selectedRepo.forks}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    <span>{selectedRepo.watchers}</span>
                  </div>
                </div>

                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Última actualización: {formatDate(selectedRepo.lastUpdate)}
                </div>

                <a
                  href={selectedRepo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-md hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors text-sm"
                >
                  <Github className="h-4 w-4" />
                  Ver en GitHub
                </a>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Repository List */}
      <Card className="border-gray-200 dark:border-gray-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5 text-green-500" />
            Mis Repositorios
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {repositories.map((repo, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border cursor-pointer transition-all hover:shadow-md ${
                  selectedRepo?.name === repo.name 
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-950' 
                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                }`}
                onClick={() => setSelectedRepo(repo)}
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium text-gray-900 dark:text-gray-100 text-sm truncate">
                    {repo.name}
                  </h4>
                  {!repo.isPrivate && (
                    <Badge variant="outline" className="text-xs">
                      Public
                    </Badge>
                  )}
                </div>
                
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                  {repo.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
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
        </CardContent>
      </Card>
    </div>
  )
}
