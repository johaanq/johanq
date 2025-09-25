import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  context: string
  period: string
  technologies: string[]
  achievements: string[]
  githubUrl?: string
  liveUrl?: string
  type: "academic" | "personal"
  onDragStart?: (e: React.DragEvent) => void
  onDragOver?: (e: React.DragEvent) => void
  onDrop?: (e: React.DragEvent) => void
  draggable?: boolean
}

export function ProjectCard({
  title,
  description,
  context,
  period,
  technologies,
  achievements,
  githubUrl,
  liveUrl,
  type,
  onDragStart,
  onDragOver,
  onDrop,
  draggable = false,
}: ProjectCardProps) {
  
  const handleDragStart = (e: React.DragEvent) => {
    if (onDragStart) {
      onDragStart(e)
      const target = e.target as HTMLElement
      setTimeout(() => target.classList.add('dragging'), 0)
    }
  }

  const handleDragEnd = (e: React.DragEvent) => {
    const target = e.target as HTMLElement
    target.classList.remove('dragging')
  }

  return (
    <div 
      className={`minimal-card p-6 ${draggable ? 'cursor-grab active:cursor-grabbing' : ''}`}
      draggable={draggable}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{context} • {period}</p>
        </div>
        <div className="flex gap-2 ml-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              <Github className="h-4 w-4" />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>

      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{description}</p>

      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">Logros principales:</h4>
          <ul className="space-y-1">
            {achievements && achievements.length > 0 ? achievements.map((achievement, index) => (
              <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                <span className="text-gray-400 dark:text-gray-500 mr-2">•</span>
                <span>{achievement}</span>
              </li>
            )) : (
              <li className="text-sm text-gray-500 dark:text-gray-500 italic">No hay logros especificados</li>
            )}
          </ul>
        </div>

        <div>
          <div className="flex flex-wrap gap-2">
            {technologies && technologies.length > 0 ? technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                {tech}
              </Badge>
            )) : (
              <span className="text-sm text-gray-500 dark:text-gray-500 italic">No hay tecnologías especificadas</span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}