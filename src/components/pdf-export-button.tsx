"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function PDFExportButton() {
  const handleExportPDF = () => {
    // Descargar directamente el archivo PDF estático desde la carpeta public
    // Agregamos timestamp para evitar caché del navegador
    const link = document.createElement('a')
    link.href = `/Johan Quiñones - CV.pdf?v=${Date.now()}`
    link.download = 'Johan Quiñones - CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Función de exportación dinámica preservada para uso futuro
  const handleDynamicPDFExport = () => {
    // Create a print-friendly version
    const printWindow = window.open("", "_blank")
    if (!printWindow) return

    // Get the current page content but optimize for PDF
    const content = document.documentElement.outerHTML

    // Create optimized HTML for PDF
    const pdfHTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Johan Jorge Quiñones Tintaya - Curriculum Vitae</title>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { 
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              font-size: 11px;
              line-height: 1.4;
              color: #1f2937;
              background: white;
              padding: 20px;
            }
            .pdf-container { max-width: 210mm; margin: 0 auto; }
            .pdf-header { text-align: center; margin-bottom: 20px; border-bottom: 2px solid #3b82f6; padding-bottom: 15px; }
            .pdf-header h1 { font-size: 24px; font-weight: bold; color: #1f2937; margin-bottom: 5px; }
            .pdf-header .subtitle { font-size: 14px; color: #3b82f6; font-weight: 600; margin-bottom: 8px; }
            .pdf-header .contact { font-size: 10px; color: #6b7280; }
            .pdf-link { color: #3b82f6; text-decoration: none; cursor: pointer; }
            .pdf-link:hover { text-decoration: underline; }
            .pdf-section { margin-bottom: 18px; }
            .pdf-section h2 { font-size: 14px; font-weight: bold; color: #3b82f6; margin-bottom: 8px; border-bottom: 1px solid #e5e7eb; padding-bottom: 3px; }
            .pdf-section p { margin-bottom: 8px; text-align: justify; }
            .pdf-section p strong { color: #1f2937; font-weight: 600; }
            .pdf-section h3 { font-size: 12px; font-weight: 600; color: #1f2937; margin-bottom: 5px; }
            .pdf-section h4 { font-size: 11px; font-weight: 600; color: #3b82f6; margin-bottom: 3px; }
            .pdf-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
            .pdf-project { margin-bottom: 12px; }
            .pdf-project-header { margin-bottom: 4px; }
            .pdf-project-title { font-size: 11px; font-weight: 600; color: #1f2937; }
            .pdf-project-context { font-size: 9px; color: #6b7280; }
            .pdf-project-period { font-size: 9px; color: #6b7280; }
            .pdf-project-desc { font-size: 10px; margin-bottom: 4px; }
            .pdf-tech { display: inline-block; background: #f3f4f6; padding: 2px 6px; margin: 1px; font-size: 8px; border-radius: 3px; }
            .pdf-achievement { font-size: 9px; margin-bottom: 2px; }
            .pdf-achievement::before { content: "• "; color: #3b82f6; }
            .pdf-skills { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
            .pdf-skill-category h4 { margin-bottom: 4px; }
            .pdf-cert { margin-bottom: 8px; }
            .pdf-cert-title { font-size: 10px; font-weight: 600; color: #1f2937; }
            .pdf-cert-org { font-size: 9px; color: #3b82f6; }
            .pdf-cert-link { font-size: 8px; color: #6b7280; }
            @media print {
              body { padding: 10px; font-size: 10px; }
              .pdf-container { max-width: none; }
              .pdf-section { page-break-inside: avoid; margin-bottom: 15px; }
              .pdf-project { page-break-inside: avoid; }
              @page { margin: 0; }
              body { margin: 0; padding: 0; }
            }
            
            /* Ocultar elementos del navegador en impresión */
            @page {
              margin: 0;
              size: A4;
            }
            
            body {
              margin: 0 !important;
              padding: 20px !important;
            }
            
            /* Ocultar headers y footers del navegador */
            @media print {
              @page {
                margin: 0;
                size: A4;
              }
              
              html, body {
                margin: 0 !important;
                padding: 0 !important;
                height: 100vh;
                overflow: hidden;
              }
              
              .pdf-container {
                margin: 0;
                padding: 20px;
                box-sizing: border-box;
              }
            }
          </style>
        </head>
        <body>
          <div class="pdf-container">
            <div class="pdf-header">
              <h1>Johan Jorge Quiñones Tintaya</h1>
              <div class="subtitle">Full Stack Developer & Software Engineer</div>
              <div class="contact">
                📧 quinonesjorge83@gmail.com | 📞 +51 961 339 606 | 🆔 DNI: 77667906 | 📍 Lima, Perú | 🎓 Ingeniería de Software - 7mo Ciclo UPC | 
                <a href="https://github.com/johaanq" target="_blank" class="pdf-link">🔗 GitHub</a> | 
                <a href="https://linkedin.com/in/johan-quinones-tintaya" target="_blank" class="pdf-link">💼 LinkedIn</a>
              </div>
            </div>

            <div class="pdf-section">
              <h2>Sobre mí</h2>
              <p>Desarrollador Full Stack apasionado por crear soluciones tecnológicas innovadoras. Actualmente en 7mo ciclo de Ingeniería de Software en la UPC, especializado en desarrollo web y móvil con tecnologías modernas.</p>
              
              <p><strong>Especialización:</strong> Dominio de React, Next.js, Spring Boot y Flutter. Experiencia en proyectos colaborativos aplicando arquitecturas escalables y metodologías ágiles. Más de 200 commits en proyectos reales y trabajo en equipo con múltiples desarrolladores.</p>
              
              <p><strong>Enfoque profesional:</strong> Enfocado en entregar código limpio, eficiente y mantenible. Busco constantemente aprender nuevas tecnologías y contribuir en proyectos que generen impacto real.</p>
            </div>

            <div class="pdf-grid">
              <div>
                <div class="pdf-section">
                  <h2>Proyectos</h2>
                  <div class="pdf-project">
                    <div class="pdf-project-header">
                      <div class="pdf-project-title">LawConnect</div>
                      <div class="pdf-project-context">DartlinWave | Abril - Julio 2025</div>
                    </div>
                    <div class="pdf-project-desc">Aplicación multiplataforma para conectar abogados con clientes, facilitando servicios legales digitales.</div>
                    <div style="margin-bottom: 4px;">
                      <span class="pdf-tech">Flutter</span>
                      <span class="pdf-tech">Android</span>
                      <span class="pdf-tech">Spring Boot</span>
                      <span class="pdf-tech">API RESTful</span>
                      <span class="pdf-tech">Git</span>
                    </div>
                    <div class="pdf-achievement">Arquitectura escalable multiplataforma</div>
                    <div class="pdf-achievement">Sistema de autenticación completo</div>
                    <div class="pdf-achievement">Más de 200 commits colaborativos</div>
                  </div>

                  <div class="pdf-project">
                    <div class="pdf-project-header">
                      <div class="pdf-project-title">Saifu</div>
                      <div class="pdf-project-context">Upecinos-AI | 2024-2025</div>
                    </div>
                    <div class="pdf-project-desc">Sistema de gestión empresarial con arquitectura separada frontend/backend para procesos empresariales.</div>
                    <div style="margin-bottom: 4px;">
                      <span class="pdf-tech">React</span>
                      <span class="pdf-tech">C#</span>
                      <span class="pdf-tech">API RESTful</span>
                      <span class="pdf-tech">Frontend</span>
                      <span class="pdf-tech">Backend</span>
                    </div>
                    <div class="pdf-achievement">Desarrollo de arquitectura frontend/backend separada</div>
                    <div class="pdf-achievement">Implementación de sistema de gestión completo</div>
                    <div class="pdf-achievement">Integración de servicios web modernos</div>
                  </div>

                  <div class="pdf-project">
                    <div class="pdf-project-header">
                      <div class="pdf-project-title">Excusas Jeans</div>
                      <div class="pdf-project-context">Proyecto Personal | 2025</div>
                    </div>
                    <div class="pdf-project-desc">Plataforma de comercio electrónico especializada en productos de moda con sistema completo de gestión.</div>
                    <div style="margin-bottom: 4px;">
                      <span class="pdf-tech">React</span>
                      <span class="pdf-tech">Supabase</span>
                      <span class="pdf-tech">Frontend</span>
                      <span class="pdf-tech">E-commerce</span>
                    </div>
                    <div class="pdf-achievement">Desarrollo de plataforma de comercio electrónico completa</div>
                    <div class="pdf-achievement">Implementación de sistema de gestión de productos</div>
                    <div class="pdf-achievement">Diseño responsive y experiencia de usuario optimizada</div>
                  </div>

                  <div class="pdf-project">
                    <div class="pdf-project-header">
                      <div class="pdf-project-title">DevStarter</div>
                      <div class="pdf-project-context">Proyecto Personal | 2025</div>
                    </div>
                    <div class="pdf-project-desc">Herramienta de automatización para configuración rápida de proyectos de desarrollo con integración de IA.</div>
                    <div style="margin-bottom: 4px;">
                      <span class="pdf-tech">React</span>
                      <span class="pdf-tech">Supabase</span>
                      <span class="pdf-tech">Groq AI</span>
                      <span class="pdf-tech">CLI Tools</span>
                    </div>
                    <div class="pdf-achievement">Automatización de configuración de proyectos</div>
                    <div class="pdf-achievement">Integración de IA para asistencia en desarrollo</div>
                    <div class="pdf-achievement">Sistema de templates personalizables</div>
                  </div>

                  <div class="pdf-project">
                    <div class="pdf-project-header">
                      <div class="pdf-project-title">WorkshopNGine</div>
                      <div class="pdf-project-context">YaraSoftware-Inc | 2025</div>
                    </div>
                    <div class="pdf-project-desc">Plataforma completa de gestión de talleres con arquitectura frontend/backend separada.</div>
                    <div style="margin-bottom: 4px;">
                      <span class="pdf-tech">Angular</span>
                      <span class="pdf-tech">TypeScript</span>
                      <span class="pdf-tech">Spring Boot</span>
                      <span class="pdf-tech">MySQL</span>
                      <span class="pdf-tech">Docker</span>
                    </div>
                    <div class="pdf-achievement">Desarrollo de plataforma completa de gestión</div>
                    <div class="pdf-achievement">Arquitectura frontend Angular y backend Spring Boot</div>
                    <div class="pdf-achievement">Integración con base de datos MySQL</div>
                    <div class="pdf-achievement">Containerización con Docker</div>
                  </div>
                </div>
              </div>

              <div>
                <div class="pdf-section">
                  <h2>Educación</h2>
                  <div class="pdf-cert">
                    <div class="pdf-cert-title">Ingeniería de Software</div>
                    <div class="pdf-cert-org">Universidad Peruana de Ciencias Aplicadas (UPC)</div>
                    <div class="pdf-cert-link">7mo Ciclo - En curso</div>
                  </div>
                </div>

                <div class="pdf-section">
                  <h2>Certificaciones</h2>
                  <div class="pdf-cert">
                    <div class="pdf-cert-title">Google IT Automation with Python</div>
                    <div class="pdf-cert-org">Coursera - Google</div>
                    <div class="pdf-cert-link">Especialización Completa</div>
                  </div>
                  <div class="pdf-cert">
                    <div class="pdf-cert-title">Introduction to Web Development</div>
                    <div class="pdf-cert-org">Coursera - UC Davis</div>
                    <div class="pdf-cert-link">Desarrollo Web Fundamentals</div>
                  </div>
                  <div class="pdf-cert">
                    <div class="pdf-cert-title">MongoDB Basics</div>
                    <div class="pdf-cert-org">MongoDB University</div>
                    <div class="pdf-cert-link">Base de Datos NoSQL</div>
                  </div>
                  <div class="pdf-cert">
                    <div class="pdf-cert-title">Scrum Fundamentals Certified</div>
                    <div class="pdf-cert-org">SCRUMstudy</div>
                    <div class="pdf-cert-link">Metodologías Ágiles</div>
                  </div>
                </div>

                <div class="pdf-section">
                  <h2>Tecnologías</h2>
                  <div class="pdf-skills">
                    <div class="pdf-skill-category">
                      <h4>Frontend</h4>
                      <div>React, Next.js, TypeScript, JavaScript</div>
                    </div>
                    <div class="pdf-skill-category">
                      <h4>Backend</h4>
                      <div>Spring Boot, Java, C#, Python</div>
                    </div>
                    <div class="pdf-skill-category">
                      <h4>Mobile</h4>
                      <div>Flutter</div>
                    </div>
                    <div class="pdf-skill-category">
                      <h4>Bases de Datos</h4>
                      <div>MySQL, MongoDB</div>
                    </div>
                    <div class="pdf-skill-category">
                      <h4>Herramientas</h4>
                      <div>Git</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </body>
      </html>
    `

    printWindow.document.write(pdfHTML)
    printWindow.document.close()

    // Wait for content to load then print
    setTimeout(() => {
      printWindow.print()
      // Cerrar la ventana después de imprimir
      printWindow.onafterprint = () => {
        printWindow.close()
      }
    }, 500)
  }

  return (
    <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 flex items-center gap-2 sm:gap-3">
      <ThemeToggle />
      <Button 
        onClick={handleExportPDF} 
        className="shadow-lg !bg-[#B56E74] hover:!bg-[#B56E74]/80 text-white !border-none transition-all duration-200 text-xs sm:text-sm px-3 py-2 sm:px-4 sm:py-2" 
        size="sm"
      >
        <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
        <span className="hidden sm:inline">Descargar CV</span>
        <span className="sm:hidden">CV</span>
      </Button>
    </div>
  )
}
