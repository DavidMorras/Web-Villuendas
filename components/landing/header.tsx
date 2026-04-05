"use client"

import { useState, useEffect, type MouseEvent } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Deportistas", href: "#deportistas" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("#inicio")

  // ⭐ SCROLL SUAVE AL HACER CLIC
  const handleSmoothScroll = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()

    if (href === "#inicio") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }

    setIsOpen(false)
  }

  // ⭐ DETECTAR SECCIÓN ACTIVA AUTOMÁTICAMENTE
  useEffect(() => {
    const sections = navLinks.map((link) => link.href)

    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection("#inicio")
        return
      }
      const scrollPos = window.scrollY + window.innerHeight / 3

      for (const href of sections) {
        const section = document.querySelector(href)
        if (section) {
          const top = section.getBoundingClientRect().top + window.scrollY
          const height = section.clientHeight

          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(href)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* LOGO */}
          <a
            href="#inicio"
            onClick={(e) => handleSmoothScroll(e, "#inicio")}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-lg overflow-hidden">
              <Image
                src="/logovillu.png"
                alt="Logo David Villuendas"
                width={40}
                height={40}
                className="object-cover rounded-lg"
                priority
              />
            </div>

            <div className="hidden sm:block">
              <p className="font-semibold text-foreground leading-tight">Fisioterapia</p>
              <p className="text-xs text-muted-foreground">David Villuendas</p>
            </div>
          </a>

          {/* NAV DESKTOP */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === link.href
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* BOTÓN + MENÚ MÓVIL */}
          <div className="flex items-center gap-4">
            <a 
              href="https://calendly.com/davidmorras2/masaje-terapeutico?locale=es"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="hidden sm:flex">
                Reservar cita
              </Button>
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MENÚ MÓVIL */}
      {isOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container mx-auto px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className={`block text-base font-medium transition-colors ${
                  activeSection === link.href
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
            ))}

            <a 
              href="https://calendly.com/davidmorras2/masaje-terapeutico?locale=es"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full mt-4">
                Reservar cita
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
