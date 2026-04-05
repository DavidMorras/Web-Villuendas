"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, MessageCircle, ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* TEXTOS */}
          <div className="space-y-8">
            <div className="space-y-4">

              {/* MICROCOPY SUPERIOR */}
              <p className="text-sm font-medium tracking-wider uppercase text-primary">
                Centro de fisioterapia
              </p>

              {/* TÍTULO EMOCIONAL */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Recupera tu mejor versión
              </h1>

              {/* SUBTÍTULO QUE VENDE EL RESULTADO */}
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Tratamientos personalizados para eliminar el dolor, acelerar tu recuperación y volver a entrenar con seguridad.
              </p>
            </div>

            {/* BOTONES */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">

              {/* CTA PRINCIPAL – CALENDLY */}
              <a 
                href="https://calendly.com/davidmorras2/masaje-terapeutico?locale=es"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="text-base px-8 py-6">
                  <Calendar className="mr-2 h-5 w-5" />
                  Reservar cita
                </Button>
              </a>

              {/* CTA SECUNDARIO – WHATSAPP */}
              <a 
                href="https://wa.me/34636308330"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="text-base px-8 py-6"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </Button>
              </a>

              {/* CTA TERCIARIO – VER SERVICIOS */}
              <a href="#servicios">
                <Button 
                  size="lg"
                  variant="outline"
                  className="text-base px-8 py-6"
                >
                  Ver servicios
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>

            {/* MICROCOPYS / ESTADÍSTICAS */}
            <div className="flex items-center gap-8 pt-4">

              <div className="text-center">
                <p className="text-3xl font-bold text-primary">+500</p>
                <p className="text-sm text-muted-foreground">Deportistas tratados</p>
              </div>

              <div className="h-12 w-px bg-border" />

              <div className="text-center">
                <p className="text-3xl font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground">Atención individual</p>
              </div>

              <div className="h-12 w-px bg-border" />

              <div className="text-center">
                <p className="text-3xl font-bold text-primary">Colegiado</p>
                <p className="text-sm text-muted-foreground">Nº XXXX</p>
              </div>

            </div>
          </div>

          {/* IMAGEN */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/hero-fisio.jpg"
                alt="Fisioterapia deportiva profesional"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
