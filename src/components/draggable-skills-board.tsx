"use client"

import React, { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GripVertical, Plus, X, Edit3, Check } from "lucide-react"

interface Skill {
  id: string
  name: string
  category: string
  level: number
  color: string
}

interface Category {
  id: string
  name: string
  color: string
  skills: Skill[]
}

export function DraggableSkillsBoard() {
  const [categories, setCategories] = useState<Category[]>([
    {
      id: 'frontend',
      name: 'Frontend',
      color: 'bg-blue-500',
      skills: [
        { id: '1', name: 'React', category: 'frontend', level: 90, color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' },
        { id: '2', name: 'Next.js', category: 'frontend', level: 85, color: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200' },
        { id: '3', name: 'TypeScript', category: 'frontend', level: 80, color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' },
        { id: '4', name: 'Tailwind CSS', category: 'frontend', level: 95, color: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200' },
        { id: '5', name: 'JavaScript', category: 'frontend', level: 90, color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' }
      ]
    },
    {
      id: 'backend',
      name: 'Backend',
      color: 'bg-green-500',
      skills: [
        { id: '6', name: 'Spring Boot', category: 'backend', level: 75, color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' },
        { id: '7', name: 'C#', category: 'backend', level: 70, color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' },
        { id: '8', name: 'Python', category: 'backend', level: 75, color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' },
        { id: '9', name: 'Java', category: 'backend', level: 80, color: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' },
        { id: '10', name: 'API RESTful', category: 'backend', level: 85, color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' }
      ]
    },
    {
      id: 'mobile',
      name: 'Mobile',
      color: 'bg-purple-500',
      skills: [
        { id: '11', name: 'Flutter', category: 'mobile', level: 75, color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' },
        { id: '12', name: 'Android', category: 'mobile', level: 65, color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' },
        { id: '13', name: 'Dart', category: 'mobile', level: 70, color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' }
      ]
    },
    {
      id: 'database',
      name: 'Database',
      color: 'bg-orange-500',
      skills: [
        { id: '14', name: 'MySQL', category: 'database', level: 80, color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' },
        { id: '15', name: 'PostgreSQL', category: 'database', level: 70, color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' },
        { id: '16', name: 'MongoDB', category: 'database', level: 65, color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' },
        { id: '17', name: 'Supabase', category: 'database', level: 75, color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' }
      ]
    },
    {
      id: 'tools',
      name: 'Tools & DevOps',
      color: 'bg-gray-500',
      skills: [
        { id: '18', name: 'Git', category: 'tools', level: 90, color: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' },
        { id: '19', name: 'Docker', category: 'tools', level: 60, color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' },
        { id: '20', name: 'VS Code', category: 'tools', level: 95, color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' },
        { id: '21', name: 'Postman', category: 'tools', level: 85, color: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200' }
      ]
    }
  ])

  const [draggedSkill, setDraggedSkill] = useState<Skill | null>(null)
  const [dragOverCategory, setDragOverCategory] = useState<string | null>(null)
  const [editingSkill, setEditingSkill] = useState<string | null>(null)
  const [newSkillName, setNewSkillName] = useState('')
  const [addingToCategory, setAddingToCategory] = useState<string | null>(null)

  const handleDragStart = (e: React.DragEvent, skill: Skill) => {
    setDraggedSkill(skill)
    e.dataTransfer.effectAllowed = 'move'
  }

  const handleDragOver = (e: React.DragEvent, categoryId: string) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
    setDragOverCategory(categoryId)
  }

  const handleDragLeave = () => {
    setDragOverCategory(null)
  }

  const handleDrop = (e: React.DragEvent, targetCategoryId: string) => {
    e.preventDefault()
    
    if (!draggedSkill) return

    setCategories(prev => {
      const newCategories = [...prev]
      
      // Remove skill from source category
      const sourceCategory = newCategories.find(cat => cat.id === draggedSkill.category)
      if (sourceCategory) {
        sourceCategory.skills = sourceCategory.skills.filter(s => s.id !== draggedSkill.id)
      }
      
      // Add skill to target category
      const targetCategory = newCategories.find(cat => cat.id === targetCategoryId)
      if (targetCategory) {
        const updatedSkill = { ...draggedSkill, category: targetCategoryId }
        targetCategory.skills.push(updatedSkill)
      }
      
      return newCategories
    })

    setDraggedSkill(null)
    setDragOverCategory(null)
  }

  const handleDragEnd = () => {
    setDraggedSkill(null)
    setDragOverCategory(null)
  }

  const removeSkill = (skillId: string, categoryId: string) => {
    setCategories(prev => 
      prev.map(cat => 
        cat.id === categoryId 
          ? { ...cat, skills: cat.skills.filter(s => s.id !== skillId) }
          : cat
      )
    )
  }

  const addSkill = (categoryId: string) => {
    if (!newSkillName.trim()) return

    const newSkill: Skill = {
      id: Date.now().toString(),
      name: newSkillName,
      category: categoryId,
      level: 50,
      color: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
    }

    setCategories(prev => 
      prev.map(cat => 
        cat.id === categoryId 
          ? { ...cat, skills: [...cat.skills, newSkill] }
          : cat
      )
    )

    setNewSkillName('')
    setAddingToCategory(null)
  }

  const updateSkillName = (skillId: string, categoryId: string, newName: string) => {
    setCategories(prev => 
      prev.map(cat => 
        cat.id === categoryId 
          ? { 
              ...cat, 
              skills: cat.skills.map(s => 
                s.id === skillId ? { ...s, name: newName } : s
              )
            }
          : cat
      )
    )
    setEditingSkill(null)
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Skills Dashboard Interactivo
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Arrastra las habilidades entre categorías • Edita y personaliza tu stack tecnológico
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`border-2 transition-all duration-200 rounded-lg ${
              dragOverCategory === category.id 
                ? 'border-blue-500 bg-blue-50 dark:bg-blue-950 shadow-lg' 
                : 'border-gray-200 dark:border-gray-800'
            }`}
            onDragOver={(e) => handleDragOver(e, category.id)}
            onDragLeave={handleDragLeave}
            onDrop={(e) => handleDrop(e, category.id)}
          >
            <Card className="h-full">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                  <span className="text-lg">{category.name}</span>
                  <Badge variant="secondary" className="text-xs">
                    {category.skills.length}
                  </Badge>
                </div>
                <button
                  onClick={() => setAddingToCategory(category.id)}
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 min-h-[200px]">
                {category.skills.map((skill) => (
                  <div
                    key={skill.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, skill)}
                    onDragEnd={handleDragEnd}
                    className={`group flex items-center gap-2 p-3 rounded-lg border cursor-move transition-all hover:shadow-md ${
                      draggedSkill?.id === skill.id 
                        ? 'opacity-50 transform rotate-2' 
                        : 'hover:border-gray-300 dark:hover:border-gray-600'
                    } border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800`}
                  >
                    <GripVertical className="h-4 w-4 text-gray-400 group-hover:text-gray-600" />
                    
                    <div className="flex-1">
                      {editingSkill === skill.id ? (
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            defaultValue={skill.name}
                            className="flex-1 px-2 py-1 text-sm border rounded"
                            onKeyPress={(e) => {
                              if (e.key === 'Enter') {
                                updateSkillName(skill.id, category.id, e.currentTarget.value)
                              }
                            }}
                            onBlur={(e) => updateSkillName(skill.id, category.id, e.currentTarget.value)}
                            autoFocus
                          />
                          <button
                            onClick={() => setEditingSkill(null)}
                            className="text-green-500 hover:text-green-700"
                          >
                            <Check className="h-3 w-3" />
                          </button>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between">
                          <Badge className={skill.color}>
                            {skill.name}
                          </Badge>
                          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="text-xs text-gray-500">
                              {skill.level}%
                            </div>
                            <button
                              onClick={() => setEditingSkill(skill.id)}
                              className="text-gray-400 hover:text-blue-500"
                            >
                              <Edit3 className="h-3 w-3" />
                            </button>
                            <button
                              onClick={() => removeSkill(skill.id, category.id)}
                              className="text-gray-400 hover:text-red-500"
                            >
                              <X className="h-3 w-3" />
                            </button>
                          </div>
                        </div>
                      )}
                      
                      <div className="mt-2">
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1">
                          <div 
                            className={`h-1 rounded-full transition-all ${category.color}`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {addingToCategory === category.id && (
                  <div className="flex items-center gap-2 p-3 border-2 border-dashed border-blue-300 rounded-lg">
                    <input
                      type="text"
                      placeholder="Nueva habilidad..."
                      value={newSkillName}
                      onChange={(e) => setNewSkillName(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          addSkill(category.id)
                        }
                        if (e.key === 'Escape') {
                          setAddingToCategory(null)
                          setNewSkillName('')
                        }
                      }}
                      className="flex-1 px-2 py-1 text-sm border rounded"
                      autoFocus
                    />
                    <button
                      onClick={() => addSkill(category.id)}
                      className="text-green-500 hover:text-green-700"
                    >
                      <Check className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => {
                        setAddingToCategory(null)
                        setNewSkillName('')
                      }}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                )}

                {category.skills.length === 0 && addingToCategory !== category.id && (
                  <div className="text-center py-8 text-gray-400">
                    <div className="text-4xl mb-2">📝</div>
                    <p className="text-sm">Arrastra habilidades aquí</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
          </div>
        ))}
      </div>

      <div className="text-center text-sm text-gray-500 dark:text-gray-400">
        💡 <strong>Tip:</strong> Arrastra las habilidades entre categorías, edita nombres haciendo clic en el ícono de lápiz, 
        y agrega nuevas habilidades con el botón +
      </div>
    </div>
  )
}
