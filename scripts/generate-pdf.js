const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

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
      
      @page {
        margin: 0;
        size: A4;
      }
      
      body {
        margin: 0 !important;
        padding: 20px !important;
      }
      
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
          📧 quinonesjorge83@gmail.com | 📞 +51 961 339 606 | 🆔 DNI: 77667906 | 🎓 Ingeniería de Software - 7mo Ciclo UPC | 
          <a href="https://github.com/johaanq" target="_blank" class="pdf-link">🔗 GitHub</a> | 
          <a href="https://linkedin.com/in/johan-quinones-tintaya" target="_blank" class="pdf-link">💼 LinkedIn</a> | 
          <a href="https://johanq.vercel.app/#projects" target="_blank" class="pdf-link">🌐 Portfolio</a>
        </div>
      </div>

      <div class="pdf-section">
        <h2>Perfil Profesional</h2>
        <p>Estudiante de 7mo ciclo de Ingeniería de Software en la UPC con experiencia práctica en desarrollo Full Stack. Especializado en la construcción de aplicaciones web y móviles utilizando React, Next.js, Spring Boot y Flutter.</p>
        
        <p>He contribuido activamente en proyectos colaborativos, acumulando más de 200 commits y trabajando en equipos multidisciplinarios. Aplico metodologías ágiles (Scrum) y arquitecturas escalables para entregar soluciones de software robustas y mantenibles.</p>
        
        <p>Busco una posición donde pueda aplicar mis conocimientos técnicos, continuar desarrollándome profesionalmente y contribuir al éxito de proyectos tecnológicos de impacto.</p>
      </div>

      <div class="pdf-grid">
        <div>
          <div class="pdf-section">
            <h2>Proyectos</h2>
            <div class="pdf-project">
              <div class="pdf-project-header">
                <div style="display: flex; align-items: center; gap: 4px;">
                  <div class="pdf-project-title">LawConnect</div>
                  <a href="https://johanq.vercel.app/#projects" target="_blank" class="pdf-link" style="font-size: 10px;">🌐</a>
                </div>
                <div class="pdf-project-context">SuitsUPC | 2024-2025</div>
              </div>
              <div class="pdf-project-desc">Plataforma para conectar abogados con clientes en la gestión de casos legales con arquitectura de microservicios.</div>
              <div style="margin-bottom: 4px;">
                <span class="pdf-tech">Spring Boot</span>
                <span class="pdf-tech">Microservicios</span>
                <span class="pdf-tech">React</span>
                <span class="pdf-tech">MySQL</span>
                <span class="pdf-tech">Docker</span>
                <span class="pdf-tech">JWT</span>
              </div>
              <div class="pdf-achievement">Arquitectura de microservicios con Spring Cloud Gateway</div>
              <div class="pdf-achievement">Sistema completo de gestión de casos legales</div>
              <div class="pdf-achievement">Autenticación JWT y autorización basada en roles</div>
            </div>

            <div class="pdf-project">
              <div class="pdf-project-header">
                <div style="display: flex; align-items: center; gap: 4px;">
                  <div class="pdf-project-title">Saifu</div>
                  <a href="https://johanq.vercel.app/#projects" target="_blank" class="pdf-link" style="font-size: 10px;">🌐</a>
                </div>
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
                <div style="display: flex; align-items: center; gap: 4px;">
                  <div class="pdf-project-title">OnControl</div>
                  <a href="https://johanq.vercel.app/#projects" target="_blank" class="pdf-link" style="font-size: 10px;">🌐</a>
                </div>
                <div class="pdf-project-context">ControlUPC | 2025</div>
              </div>
              <div class="pdf-project-desc">Sistema de gestión oncológica para control y seguimiento de pacientes con cáncer. Plataforma web colaborativa con arquitectura MERN.</div>
              <div style="margin-bottom: 4px;">
                <span class="pdf-tech">React</span>
                <span class="pdf-tech">Node.js</span>
                <span class="pdf-tech">Express</span>
                <span class="pdf-tech">MongoDB</span>
                <span class="pdf-tech">REST API</span>
              </div>
              <div class="pdf-achievement">Sistema médico para oncólogos y gestión de pacientes</div>
              <div class="pdf-achievement">Desarrollo colaborativo con equipo de 5 desarrolladores</div>
              <div class="pdf-achievement">Arquitectura MERN escalable para sector salud</div>
            </div>

            <div class="pdf-project">
              <div class="pdf-project-header">
                <div style="display: flex; align-items: center; gap: 4px;">
                  <div class="pdf-project-title">Metalix</div>
                  <a href="https://johanq.vercel.app/#projects" target="_blank" class="pdf-link" style="font-size: 10px;">🌐</a>
                </div>
                <div class="pdf-project-context">Desarrollo-Soluciones-IOT | 2025</div>
              </div>
              <div class="pdf-project-desc">Plataforma IoT para monitoreo y gestión de soluciones industriales con integración de sensores.</div>
              <div style="margin-bottom: 4px;">
                <span class="pdf-tech">Spring Boot</span>
                <span class="pdf-tech">React</span>
                <span class="pdf-tech">IoT</span>
                <span class="pdf-tech">MySQL</span>
                <span class="pdf-tech">WebSockets</span>
              </div>
              <div class="pdf-achievement">Implementación de sistema IoT completo</div>
              <div class="pdf-achievement">Integración de sensores y monitoreo en tiempo real</div>
              <div class="pdf-achievement">Dashboard interactivo para análisis de datos</div>
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
`;

// Guardar el HTML temporalmente
const outputPath = path.join(__dirname, '..', 'public', 'cv-preview.html');
fs.writeFileSync(outputPath, pdfHTML);

// Generar PDF con Puppeteer
(async () => {
  console.log('🚀 Iniciando generación de PDF...');
  
  const browser = await puppeteer.launch({
    headless: 'new'
  });
  
  const page = await browser.newPage();
  
  // Cargar el HTML
  await page.setContent(pdfHTML, { waitUntil: 'networkidle0' });
  
  // Generar PDF
  const pdfPath = path.join(__dirname, '..', 'public', 'Johan Quiñones - CV.pdf');
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: {
      top: '0mm',
      right: '0mm',
      bottom: '0mm',
      left: '0mm'
    }
  });
  
  await browser.close();
  
  // Eliminar el HTML temporal
  fs.unlinkSync(outputPath);
  
  console.log('✅ PDF generado exitosamente en: public/Johan Quiñones - CV.pdf');
  console.log('📋 Contenido actualizado:');
  console.log('   - Teléfono: +51 961 339 606');
  console.log('   - DNI: 77667906');
  console.log('   - Sección "Sobre mí" mejorada');
})();

