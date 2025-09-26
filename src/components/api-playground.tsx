"use client"

import React, { useState } from "react"
import { Play, Copy, Check, Server, Code, Zap } from "lucide-react"

interface APIEndpoint {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  path: string
  title: string
  description: string
  response: Record<string, unknown>
  project: string
  status: number
}

export function APIPlayground() {
  const [selectedEndpoint, setSelectedEndpoint] = useState(0)
  const [isExecuting, setIsExecuting] = useState(false)
  const [response, setResponse] = useState<Record<string, unknown> | null>(null)
  const [copied, setCopied] = useState(false)

  const myAPIs: APIEndpoint[] = [
    {
      method: 'GET',
      path: '/api/developer/profile',
      title: 'Obtener Perfil del Desarrollador',
      description: 'Información completa sobre Johan Quiñones',
      project: 'Portfolio API',
      status: 200,
      response: {
        name: "Johan Jorge Quiñones Tintaya",
        role: "Full Stack Developer",
        university: "Universidad Peruana de Ciencias Aplicadas (UPC)",
        semester: "7mo Ciclo",
        location: "Lima, Perú",
        email: "quinonesjorge83@gmail.com",
        github: "https://github.com/johaanq",
        linkedin: "https://www.linkedin.com/in/johan-qui%C3%B1ones-tintaya-b0654b2b5",
        skills: ["React", "Spring Boot", "Flutter", "C#", "Python", "JavaScript"],
        yearsOfStudy: 3.5,
        projectsCompleted: 8,
        certifications: 4
      }
    },
    {
      method: 'GET',
      path: '/api/developer/projects',
      title: 'Listar Mis Proyectos',
      description: 'Todos los proyectos desarrollados por Johan',
      project: 'Portfolio API',
      status: 200,
      response: {
        total: 4,
        projects: [
          {
            id: 1,
            title: "LawConnect",
            description: "Aplicación multiplataforma para conectar abogados con clientes",
            technologies: ["Flutter", "Android", "Spring Boot", "API RESTful"],
            status: "completed",
            collaborators: 3,
            commits: 200,
            github: "https://github.com/DartlinWave/lawconnect-backend"
          },
          {
            id: 2,
            title: "Saifu",
            description: "Sistema de gestión empresarial con arquitectura separada",
            technologies: ["React", "C#", "API RESTful"],
            status: "completed",
            collaborators: 2,
            commits: 150,
            github: "https://github.com/Upecinos-AI-AplicacionesWeb/Saifu-BackEnd"
          }
        ]
      }
    },
    {
      method: 'GET',
      path: '/api/developer/skills',
      title: 'Mis Habilidades Técnicas',
      description: 'Tecnologías y frameworks que domino',
      project: 'Portfolio API',
      status: 200,
      response: {
        categories: {
          frontend: {
            technologies: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"],
            experience_level: "Advanced",
            years: 2.5
          },
          backend: {
            technologies: ["Spring Boot", "C#", ".NET", "Python", "Java"],
            experience_level: "Intermediate",
            years: 2
          },
          mobile: {
            technologies: ["Flutter", "Android", "Dart"],
            experience_level: "Intermediate",
            years: 1.5
          },
          database: {
            technologies: ["MySQL", "PostgreSQL", "MongoDB", "Supabase"],
            experience_level: "Intermediate",
            years: 2
          },
          tools: {
            technologies: ["Git", "Docker", "Postman", "VS Code", "IntelliJ"],
            experience_level: "Advanced",
            years: 3
          }
        }
      }
    },
    {
      method: 'POST',
      path: '/api/developer/contact',
      title: 'Contactar al Desarrollador',
      description: 'Enviar mensaje de contacto a Johan',
      project: 'Portfolio API',
      status: 201,
      response: {
        message: "Mensaje enviado correctamente",
        id: "msg_12345",
        status: "pending",
        estimated_response_time: "24 horas",
        contact_methods: [
          "Email: quinonesjorge83@gmail.com",
          "LinkedIn: johan-quiñones-tintaya",
          "GitHub: johaanq"
        ]
      }
    }
  ]

  const getMethodColor = (method: string) => {
    switch (method) {
      case 'GET': return 'bg-blue-600 text-white'
      case 'POST': return 'bg-green-600 text-white'
      case 'PUT': return 'bg-yellow-600 text-white'
      case 'DELETE': return 'bg-red-600 text-white'
      default: return 'bg-gray-600 text-white'
    }
  }

  const executeAPI = async () => {
    setIsExecuting(true)
    setResponse(null)
    
    // Simular llamada a API
    setTimeout(() => {
      setResponse(myAPIs[selectedEndpoint].response)
      setIsExecuting(false)
    }, 1500)
  }

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2 animate-fade-in">
          API Developer Playground
        </h2>
        <p className="text-gray-600 dark:text-gray-400 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Explora las APIs que he desarrollado - Datos reales sobre mi perfil profesional
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-3">
        {/* Endpoints List */}
        <div className="py-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="bg-[#0D0D0D]/5 dark:bg-[#0D0D0D]/20 rounded-lg border border-[#B56E74]/20 dark:border-[#B56E74]/40 overflow-hidden">
            <div className="bg-[#B56E74]/10 dark:bg-[#B56E74]/20 px-6 py-4 border-b border-[#B56E74]/20 dark:border-[#B56E74]/40">
              <div className="flex items-center gap-2">
                <Code className="h-4 w-4 text-[#B56E74] dark:text-[#B56E74]/90" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Endpoints Disponibles
                </h3>
              </div>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                {myAPIs.map((endpoint, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border cursor-pointer transition-all animate-slide-up ${
                      selectedEndpoint === index 
                        ? 'border-[#B56E74] dark:border-[#B56E74]/80 bg-[#B56E74]/5 dark:bg-[#B56E74]/10 shadow-md ring-2 ring-[#B56E74]/20 dark:ring-[#B56E74]/40' 
                        : 'border-[#B56E74]/20 dark:border-[#B56E74]/40 hover:border-[#B56E74]/40 dark:hover:border-[#B56E74]/60 bg-[#0D0D0D]/5 dark:bg-[#0D0D0D]/20'
                    }`}
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                    onClick={() => setSelectedEndpoint(index)}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-3 py-1 rounded text-xs font-medium ${getMethodColor(endpoint.method)}`}>
                        {endpoint.method}
                      </span>
                      <code className="text-sm text-[#B56E74] dark:text-[#B56E74]/90">
                        {endpoint.path}
                      </code>
                    </div>
                    <h4 className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                      {endpoint.title}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {endpoint.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* API Response */}
        <div className="py-6 animate-slide-up" style={{ animationDelay: '0.7s' }}>
          <div className="bg-[#0D0D0D]/5 dark:bg-[#0D0D0D]/20 rounded-lg border border-[#B56E74]/20 dark:border-[#B56E74]/40 overflow-hidden">
            <div className="bg-[#B56E74]/10 dark:bg-[#B56E74]/20 px-6 py-4 border-b border-[#B56E74]/20 dark:border-[#B56E74]/40">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Server className="h-4 w-4 text-[#B56E74] dark:text-[#B56E74]/90" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    Respuesta de la API
                  </h3>
                </div>
                <button
                  onClick={executeAPI}
                  disabled={isExecuting}
                  className="px-4 py-1.5 bg-[#141414] hover:bg-[#141414]/80 text-white rounded-md transition-colors text-xs disabled:opacity-50"
                >
                  {isExecuting ? (
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Ejecutando...
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5">
                      <Play className="h-3 w-3" />
                      Ejecutar API
                    </div>
                  )}
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="mb-4">
                <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                  <span className="px-3 py-1 bg-[#B56E74]/10 dark:bg-[#B56E74]/20 text-[#B56E74] dark:text-[#B56E74]/90 rounded text-xs font-medium">
                    {myAPIs[selectedEndpoint].project}
                  </span>
                  <span className="text-green-600 dark:text-green-400 font-normal">
                    Status: {myAPIs[selectedEndpoint].status}
                  </span>
                </div>
              </div>

              {response ? (
                <div className="relative">
                  <div className="bg-[#0D0D0D]/5 dark:bg-[#0D0D0D]/20 rounded-lg border border-[#B56E74]/20 dark:border-[#B56E74]/40 overflow-hidden">
                    <div className="bg-[#B56E74]/10 dark:bg-[#B56E74]/20 px-4 py-3 border-b border-[#B56E74]/20 dark:border-[#B56E74]/40">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-900 dark:text-gray-100">JSON Response</span>
                        <button
                          onClick={() => copyToClipboard(JSON.stringify(response, null, 2))}
                          className="text-gray-400 hover:text-white transition-colors p-1 rounded hover:bg-gray-800"
                        >
                          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="max-h-80 overflow-y-auto">
                        <pre className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
                          <code>{JSON.stringify(response, null, 2)}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-[#0D0D0D]/5 dark:bg-[#0D0D0D]/20 rounded-lg border border-[#B56E74]/20 dark:border-[#B56E74]/40 overflow-hidden">
                  <div className="bg-[#B56E74]/10 dark:bg-[#B56E74]/20 px-4 py-3 border-b border-[#B56E74]/20 dark:border-[#B56E74]/40">
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Estado de Respuesta</span>
                  </div>
                  <div className="p-12 text-center">
                    <Zap className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500 dark:text-gray-400 text-lg">
                      Haz clic en &quot;Ejecutar API&quot; para ver la respuesta
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
