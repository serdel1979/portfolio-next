"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Phone, Award, Briefcase, Code2 } from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about")

  const skills = [
    ".NET",
    "PostgreSQL",
    "Angular",
    "Blazor",
    "C#",
    "POO",
    "Entity Framework",
    "TypeScript",
    ".NET Core",
    "MVC",
    "Web API",
    "NestJS",
    "Node.js",
    "Git",
  ]

  const certifications = [
    {
      title: "Foundational C# Microsoft",
      year: "2024",
      issuer: "Microsoft",
    },
    {
      title: ".NET Core esencial",
      year: "2023",
      issuer: "LinkedIn Learning",
    },
    {
      title: "Patrones de diseño con .NET y C#",
      year: "2023",
      issuer: "Udemy",
    },
    {
      title: "Desarrollo de aplicaciones web API con .NET",
      year: "2023",
      issuer: "Udemy",
    },
    {
      title: "Desarrollo de aplicaciones MVC con .NET",
      year: "2024",
      issuer: "Udemy",
    },
    {
      title: "Cisco Certified Network Associate",
      year: "2013",
      issuer: "Cespi UNLP",
    },
  ]

  const education = [
    {
      title: "Analista en TIC",
      institution: "Facultad de informática | Universidad Nacional de La Plata",
      status: "Completado",
      type: "Título de Grado",
    },
    {
      title: "Especialización en Redes de Datos y Seguridad",
      institution: "Facultad de informática | Universidad Nacional de La Plata",
      status: "En curso",
      type: "Posgrado",
    },
  ]

  const experience = [
    {
      title: "Administrador de Sistemas",
      company: "Universidad Nacional de La Plata",
      period: "2011 - Actualidad",
      description: ["Administración de servidores de email", "Administración de redes", "Desarrollo de sistemas"],
    },
    {
      title: "Software Developer",
      company: "Freelance",
      period: "2020 - Actualidad",
      description: [
        "Creación de base de datos",
        "Programación de web API",
        "Programación de aplicación web",
        "Despliegue",
      ],
    },
  ]

  const menuItems = [
    { id: "about", label: "ACERCA DE", icon: Code2 },
    { id: "experience", label: "EXPERIENCIA", icon: Briefcase },
    { id: "certifications", label: "CERTIFICACIONES", icon: Award },
    { id: "education", label: "UNIVERSIDAD", icon: Award },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 py-8">
          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            {/* Profile Section */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="w-32 h-32 mx-auto lg:mx-0 rounded-full bg-muted flex items-center justify-center overflow-hidden">
                  <img
                    src="/perfil.jpg"
                    alt="Sergio De Luca"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-balance">Sergio De Luca</h1>
                  <p className="text-lg text-muted-foreground">Full Stack Developer</p>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    Especializado en desarrollo de aplicaciones web con .NET, Angular y tecnologías modernas.
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <nav className="space-y-2">
                {menuItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-left rounded-lg transition-colors ${
                        activeSection === item.id
                          ? "bg-primary/10 text-primary border-l-2 border-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{item.label}</span>
                    </button>
                  )
                })}
              </nav>

              {/* Contact Info */}
              <Card className="p-6 space-y-4">
                <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">Contacto</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="w-4 h-4 text-primary" />
                    <span>02215636588</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="w-4 h-4 text-primary" />
                    <a href="mailto:sdlbsso@gmail.com" className="hover:text-primary transition-colors">
                      sergio.deluca@affilialeads.com
                    </a>
                  </div>
                </div>
                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://www.linkedin.com/in/sergiodl/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://github.com/serdel1979" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="space-y-8">
              {/* About Section */}
              {activeSection === "about" && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Acerca de mí</h2>
                    <div className="prose prose-invert max-w-none">
                      <p className="text-lg leading-relaxed text-muted-foreground">
                        Soy un desarrollador full-stack apasionado por crear soluciones web robustas y escalables. Con
                        experiencia en administración de sistemas y desarrollo de software, combino conocimientos
                        técnicos sólidos con una perspectiva práctica para resolver problemas complejos.
                      </p>
                      <p className="text-lg leading-relaxed text-muted-foreground mt-4">
                        Mi experiencia abarca desde la administración de infraestructura hasta el desarrollo de
                        aplicaciones web modernas, con un enfoque especial en tecnologías PHP, Laravel .NET y Angular.
                      </p>
                    </div>
                  </div>

                  {/* Skills */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Habilidades Técnicas</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="px-3 py-1">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Experience Section */}
              {activeSection === "experience" && (
                <div className="space-y-8">
                  <h2 className="text-2xl font-bold">Experiencia Profesional</h2>
                  <div className="space-y-6">
                    {experience.map((job, index) => (
                      <Card key={index} className="p-6">
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-xl font-semibold">{job.title}</h3>
                            <p className="text-primary font-medium">{job.company}</p>
                            <p className="text-sm text-muted-foreground">{job.period}</p>
                          </div>
                          <ul className="space-y-2">
                            {job.description.map((item, idx) => (
                              <li key={idx} className="text-muted-foreground flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Certifications Section */}
              {activeSection === "certifications" && (
                <div className="space-y-8">
                  <h2 className="text-2xl font-bold">Certificaciones</h2>
                  <div className="grid gap-4">
                    {certifications.map((cert, index) => (
                      <Card key={index} className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="space-y-1">
                            <h3 className="font-semibold">{cert.title}</h3>
                            <p className="text-primary font-medium">{cert.issuer}</p>
                          </div>
                          <Badge variant="outline">{cert.year}</Badge>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Education Section */}
              {activeSection === "education" && (
                <div className="space-y-8">
                  <h2 className="text-2xl font-bold">Universidad</h2>
                  <div className="grid gap-4">
                    {education.map((edu, index) => (
                      <Card key={index} className="p-6">
                        <div className="space-y-3">
                          <div className="flex items-start justify-between">
                            <div className="space-y-1">
                              <h3 className="font-semibold">{edu.title}</h3>
                              <p className="text-primary font-medium">{edu.institution}</p>
                              <p className="text-sm text-muted-foreground">{edu.type}</p>
                            </div>
                            <Badge variant={edu.status === "En curso" ? "default" : "outline"}>{edu.status}</Badge>
                          </div>
                        </div>
                      </Card>
                    ))}
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
