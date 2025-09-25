"use client"

import React from "react"
import { Code, Server, Terminal, Database, Wrench } from "lucide-react"

interface Skill {
  name: string
  level: number
  logo: string
}

interface Category {
  id: string
  name: string
  icon: React.ReactNode
  skills: Skill[]
}

export function SimpleSkillsBoard() {
  const categories: Category[] = [
    {
      id: 'frontend',
      name: 'Frontend',
      icon: <Code className="w-3 h-3 text-white" />,
      skills: [
        { name: 'React', level: 90, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
        { name: 'Next.js', level: 85, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg' },
        { name: 'TypeScript', level: 80, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg' },
        { name: 'Tailwind CSS', level: 95, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'JavaScript', level: 90, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg' }
      ]
    },
    {
      id: 'backend',
      name: 'Backend',
      icon: <Server className="w-3 h-3 text-white" />,
      skills: [
        { name: 'Spring Boot', level: 75, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg' },
        { name: 'C#', level: 70, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-plain.svg' },
        { name: 'Python', level: 75, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
        { name: 'Java', level: 80, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
        { name: 'Node.js', level: 85, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg' }
      ]
    },
    {
      id: 'mobile',
      name: 'Mobile',
      icon: <Terminal className="w-3 h-3 text-white" />,
      skills: [
        { name: 'Flutter', level: 75, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
        { name: 'Android', level: 65, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg' },
        { name: 'Dart', level: 70, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg' }
      ]
    },
    {
      id: 'database',
      name: 'Database',
      icon: <Database className="w-3 h-3 text-white" />,
      skills: [
        { name: 'MySQL', level: 80, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
        { name: 'PostgreSQL', level: 70, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg' },
        { name: 'MongoDB', level: 65, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
        { name: 'Supabase', level: 75, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg' }
      ]
    },
    {
      id: 'tools',
      name: 'Tools & DevOps',
      icon: <Wrench className="w-3 h-3 text-white" />,
      skills: [
        { name: 'Git', level: 90, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
        { name: 'Docker', level: 60, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
        { name: 'VS Code', level: 95, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
        { name: 'Postman', level: 85, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-plain.svg' }
      ]
    }
  ]

  const getLogoStyle = (skillName: string) => {
    // Logos que necesitan filtro especial para el color secundario #B56E74
    const needsFilter = ['React', 'TypeScript', 'JavaScript', 'Spring Boot', 'C#', 'Python', 'Java', 'Node.js', 'Flutter', 'Android', 'Dart', 'MySQL', 'PostgreSQL', 'MongoDB', 'Supabase', 'Git', 'Docker', 'VS Code', 'Postman']
    
    if (needsFilter.includes(skillName)) {
      return {
        filter: 'brightness(0) saturate(100%) invert(50%) sepia(35%) saturate(1500%) hue-rotate(320deg) brightness(110%) contrast(95%)'
      }
    }
    
    // Next.js y Tailwind CSS mantienen su color original pero con mejor visibilidad
    if (skillName === 'Next.js' || skillName === 'Tailwind CSS') {
      return {
        filter: 'brightness(0) saturate(100%) invert(50%) sepia(35%) saturate(1500%) hue-rotate(320deg) brightness(110%) contrast(95%)'
      }
    }
    
    return {}
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Skills Board
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Mis habilidades técnicas organizadas por categorías
        </p>
      </div>

      <div className="space-y-6">
        {categories.map((category) => (
          <div key={category.id} className="border-l-4 border-[#B56E74] dark:border-[#B56E74]/80 pl-6 py-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-6 bg-[#B56E74] dark:bg-[#B56E74]/80 rounded flex items-center justify-center">
                {category.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {category.name}
              </h3>
              <span className="px-3 py-1 bg-[#B56E74] dark:bg-[#B56E74]/80 text-white rounded-full text-xs font-medium">
                {category.skills.length} skills
              </span>
            </div>
            
            <div className="flex flex-wrap gap-6">
              {category.skills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                  {/* Circular Progress with Logo */}
                  <div className="relative w-16 h-16">
                    {/* Progress Circle Only */}
                    <svg className="w-16 h-16" viewBox="0 0 64 64">
                      <circle
                        cx="32"
                        cy="32"
                        r="28"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 28}`}
                        strokeDashoffset={`${2 * Math.PI * 28 * (1 - skill.level / 100)}`}
                        className="text-[#B56E74] dark:text-[#B56E74]/90 transition-all duration-1000 ease-out"
                        strokeLinecap="round"
                        transform="rotate(-90 32 32)"
                      />
                    </svg>
                    
                    {/* Logo in Center */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img 
                        src={skill.logo} 
                        alt={`${skill.name} logo`}
                        className="w-8 h-8 object-contain"
                        style={getLogoStyle(skill.name)}
                      />
                    </div>
                  </div>
                  
                  {/* Skill Name */}
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
