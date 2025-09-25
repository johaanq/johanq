"use client"

import React, { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Terminal, Folder, FileText, GitBranch, Package } from "lucide-react"

interface Command {
  input: string
  output: string[]
  type?: 'success' | 'error' | 'info'
}

export function TerminalSimulator() {
  const [currentCommand, setCurrentCommand] = useState('')
  const [commandHistory, setCommandHistory] = useState<Command[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const terminalRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const availableCommands = {
    'help': {
      output: [
        'Comandos disponibles:',
        '  ls                 - Listar proyectos',
        '  cd <proyecto>      - Navegar a proyecto',
        '  git status         - Estado del repositorio',
        '  npm run dev        - Ejecutar proyecto',
        '  cat README.md      - Leer documentación',
        '  whoami            - Información del desarrollador',
        '  skills            - Mostrar habilidades técnicas',
        '  projects          - Listar todos los proyectos',
        '  clear             - Limpiar terminal'
      ],
      type: 'info' as const
    },
    'ls': {
      output: [
        'lawconnect-backend/',
        'saifu-frontend/',
        'excusas-jeans/',
        'devstarter/',
        'workshop-n-gine/',
        'portfolio-cv/',
        'README.md',
        'package.json'
      ],
      type: 'success' as const
    },
    'whoami': {
      output: [
        'Johan Jorge Quiñones Tintaya',
        'Full Stack Developer',
        'Estudiante de Ingeniería de Software - UPC',
        '7mo Ciclo | Lima, Perú',
        '',
        '📧 quinonesjorge83@gmail.com',
        '🐙 github.com/johaanq',
        '💼 linkedin.com/in/johan-quiñones-tintaya'
      ],
      type: 'info' as const
    },
    'skills': {
      output: [
        '🚀 Frontend:',
        '  ├── React (Advanced)',
        '  ├── Next.js (Intermediate)',
        '  ├── TypeScript (Intermediate)',
        '  └── Tailwind CSS (Advanced)',
        '',
        '⚙️  Backend:',
        '  ├── Spring Boot (Intermediate)',
        '  ├── C# .NET (Intermediate)',
        '  ├── Python (Intermediate)',
        '  └── Java (Intermediate)',
        '',
        '📱 Mobile:',
        '  ├── Flutter (Intermediate)',
        '  └── Android (Basic)',
        '',
        '🗄️  Database:',
        '  ├── MySQL (Intermediate)',
        '  ├── PostgreSQL (Basic)',
        '  └── MongoDB (Basic)'
      ],
      type: 'success' as const
    },
    'projects': {
      output: [
        '📋 Mis Proyectos:',
        '',
        '1. 🏛️  LawConnect (2025)',
        '   └── Flutter + Spring Boot | Conectar abogados con clientes',
        '',
        '2. 💼 Saifu (2024-2025)',
        '   └── React + C# | Sistema de gestión empresarial',
        '',
        '3. 👕 Excusas Jeans (2025)',
        '   └── React + Supabase | E-commerce de moda',
        '',
        '4. 🛠️  DevStarter (2025)',
        '   └── React + Groq AI | Automatización de proyectos',
        '',
        '📊 Estadísticas:',
        '  ├── Proyectos completados: 8+',
        '  ├── Commits totales: 200+',
        '  └── Colaboradores: 5+'
      ],
      type: 'success' as const
    },
    'git status': {
      output: [
        'On branch main',
        'Your branch is up to date with \'origin/main\'.',
        '',
        'Changes not staged for commit:',
        '  (use "git add <file>..." to update what will be committed)',
        '  (use "git restore <file>..." to discard changes in working directory)',
        '        modified:   src/components/portfolio.tsx',
        '        modified:   src/app/page.tsx',
        '',
        'Untracked files:',
        '  (use "git add <file>..." to include in what will be committed)',
        '        src/components/terminal-simulator.tsx',
        '        src/components/api-playground.tsx',
        '',
        'no changes added to commit (use "git add ." or "git commit -a")'
      ],
      type: 'info' as const
    },
    'npm run dev': {
      output: [
        '> cv-page@0.1.0 dev',
        '> next dev --turbopack',
        '',
        '▲ Next.js 15.5.4 (turbopack)',
        '- Local:        http://localhost:3000',
        '- Network:      http://192.168.1.100:3000',
        '',
        '✓ Starting...',
        '✓ Ready in 1.2s',
        '○ Compiling / ...',
        '✓ Compiled / in 847ms',
        '',
        '🚀 Aplicación ejecutándose correctamente!'
      ],
      type: 'success' as const
    },
    'cat README.md': {
      output: [
        '# Portfolio - Johan Quiñones',
        '',
        '## 🚀 Desarrollador Full Stack',
        '',
        'Estudiante de 7mo ciclo de Ingeniería de Software en UPC,',
        'especializado en desarrollo full-stack con tecnologías modernas.',
        '',
        '### 🛠️ Tecnologías',
        '- Frontend: React, Next.js, TypeScript',
        '- Backend: Spring Boot, C#, Python',
        '- Mobile: Flutter, Android',
        '- Database: MySQL, PostgreSQL, MongoDB',
        '',
        '### 📁 Proyectos Destacados',
        '- LawConnect: App multiplataforma para servicios legales',
        '- Saifu: Sistema de gestión empresarial',
        '- DevStarter: Herramienta de automatización con IA',
        '',
        '### 📞 Contacto',
        'Email: quinonesjorge83@gmail.com',
        'GitHub: github.com/johaanq',
        'LinkedIn: linkedin.com/in/johan-quiñones-tintaya'
      ],
      type: 'info' as const
    },
    'clear': {
      output: [],
      type: 'success' as const
    }
  }

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase()
    
    if (trimmedCmd === 'clear') {
      setCommandHistory([])
      return
    }

    const command = availableCommands[trimmedCmd as keyof typeof availableCommands]
    
    if (command) {
      const newCommand: Command = {
        input: cmd,
        output: command.output,
        type: command.type
      }
      setCommandHistory(prev => [...prev, newCommand])
    } else {
      const errorCommand: Command = {
        input: cmd,
        output: [`Command not found: ${cmd}`, 'Type "help" for available commands'],
        type: 'error'
      }
      setCommandHistory(prev => [...prev, errorCommand])
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && currentCommand.trim()) {
      executeCommand(currentCommand)
      setCurrentCommand('')
    }
  }

  const typewriterDemo = () => {
    const demoCommands = ['whoami', 'skills', 'projects', 'git status']
    let commandIndex = 0
    
    setIsTyping(true)
    
    const typeCommand = () => {
      if (commandIndex >= demoCommands.length) {
        setIsTyping(false)
        return
      }
      
      const command = demoCommands[commandIndex]
      let charIndex = 0
      
      const typeChar = () => {
        if (charIndex <= command.length) {
          setCurrentCommand(command.slice(0, charIndex))
          charIndex++
          setTimeout(typeChar, 100)
        } else {
          setTimeout(() => {
            executeCommand(command)
            setCurrentCommand('')
            commandIndex++
            setTimeout(typeCommand, 1000)
          }, 500)
        }
      }
      
      typeChar()
    }
    
    typeCommand()
  }

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [commandHistory])

  useEffect(() => {
    // Auto-demo cuando se carga el componente
    const timer = setTimeout(() => {
      typewriterDemo()
    }, 2000)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Terminal Simulator
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Explora mi información usando comandos de terminal
        </p>
      </div>

      <div className="pl-6 py-4">
        <div className="bg-[#0D0D0D]/5 dark:bg-[#0D0D0D]/20 rounded-lg border border-[#B56E74]/20 dark:border-[#B56E74]/40 overflow-hidden">
          {/* Terminal Header */}
          <div className="bg-[#B56E74]/10 dark:bg-[#B56E74]/20 px-4 py-3 border-b border-[#B56E74]/20 dark:border-[#B56E74]/40">
            <div className="flex items-center gap-2">
              <Terminal className="h-4 w-4 text-[#B56E74] dark:text-[#B56E74]/90" />
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Terminal Simulator</span>
              <div className="ml-auto flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-[#B56E74] rounded-full"></div>
              </div>
            </div>
          </div>
          
          {/* Terminal Content */}
          <div 
            ref={terminalRef}
            className="bg-black rounded-b-lg p-4 h-96 overflow-y-auto font-mono text-sm"
            onClick={() => inputRef.current?.focus()}
          >
            <div className="text-[#2E2500] mb-2">
              johan@portfolio:~$ echo &quot;Bienvenido a mi terminal interactiva&quot;
            </div>
            <div className="text-gray-300 mb-4">
              Bienvenido a mi terminal interactiva
            </div>
            
            {commandHistory.map((cmd, index) => (
              <div key={index} className="mb-4">
                <div className="text-[#2E2500]">
                  johan@portfolio:~$ {cmd.input}
                </div>
                {cmd.output.map((line, lineIndex) => (
                  <div 
                    key={lineIndex} 
                    className={`${
                      cmd.type === 'error' ? 'text-red-400' : 
                      cmd.type === 'success' ? 'text-[#B56E74] dark:text-[#B56E74]/90' : 
                      'text-gray-300'
                    } ${line.startsWith('  ') ? 'ml-4' : ''}`}
                  >
                    {line}
                  </div>
                ))}
              </div>
            ))}
            
            <div className="flex items-center text-[#2E2500]">
              <span>johan@portfolio:~$ </span>
              <input
                ref={inputRef}
                type="text"
                value={currentCommand}
                onChange={(e) => !isTyping && setCurrentCommand(e.target.value)}
                onKeyPress={handleKeyPress}
                className="bg-transparent border-none outline-none text-[#B56E74] dark:text-[#B56E74]/90 ml-1 flex-1"
                placeholder={isTyping ? "" : "Escribe 'help' para ver comandos disponibles"}
                disabled={isTyping}
              />
              <span className="animate-pulse">|</span>
            </div>
          </div>
        </div>
        
        {/* Command Buttons */}
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            onClick={() => !isTyping && executeCommand('help')}
            className="px-3 py-1 bg-[#141414] text-white rounded text-xs hover:bg-[#141414]/80 transition-colors"
            disabled={isTyping}
          >
            help
          </button>
          <button
            onClick={() => !isTyping && executeCommand('projects')}
            className="px-3 py-1 border border-[#B56E74]/40 dark:border-[#B56E74]/60 rounded text-xs hover:bg-[#B56E74]/10 dark:hover:bg-[#B56E74]/20 transition-colors text-gray-700 dark:text-gray-300"
            disabled={isTyping}
          >
            projects
          </button>
          <button
            onClick={() => !isTyping && executeCommand('skills')}
            className="px-3 py-1 border border-[#B56E74]/40 dark:border-[#B56E74]/60 rounded text-xs hover:bg-[#B56E74]/10 dark:hover:bg-[#B56E74]/20 transition-colors text-gray-700 dark:text-gray-300"
            disabled={isTyping}
          >
            skills
          </button>
          <button
            onClick={typewriterDemo}
            className="px-3 py-1 border border-[#B56E74]/40 dark:border-[#B56E74]/60 rounded text-xs hover:bg-[#B56E74]/10 dark:hover:bg-[#B56E74]/20 transition-colors text-gray-700 dark:text-gray-300"
            disabled={isTyping}
          >
            {isTyping ? 'Ejecutando...' : 'Demo'}
          </button>
          <button
            onClick={() => executeCommand('clear')}
            className="px-3 py-1 border border-[#B56E74]/40 dark:border-[#B56E74]/60 rounded text-xs hover:bg-[#B56E74]/10 dark:hover:bg-[#B56E74]/20 transition-colors text-gray-700 dark:text-gray-300"
            disabled={isTyping}
          >
            clear
          </button>
        </div>
      </div>
    </div>
  )
}
