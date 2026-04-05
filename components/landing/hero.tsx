"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, MessageCircle, ArrowRight } from "lucide-react"
import type { MouseEvent } from "react"

export function Hero() {
  const handleScrollToServices = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const target = document.querySelector("#servicios")
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section className="relative flex items-center bg-background overflow-hidden py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* TEXTOS */}
          <div className="space-y-8 opacity-0 animate-[fadeUp_0.8s_ease-out_forwards]">
            <div className="space-y-4">
              <p className="text-sm font-medium tracking-wider uppercase text-primary">
                Centro de fisioterapia
              </p>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Recupera tu mejor versión
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Tratamientos personalizados para eliminar el dolor, acelerar tu recuperación y volver a entrenar con seguridad.
              </p>
            </div>

            {/* BOTONES */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              
              {/* CTA PRINCIPAL */}
              <a 
                href="https://calendly.com/davidmorras2/masaje-terapeutico?locale=es"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  className="text-lg px-10 py-7 shadow-md hover:shadow-lg transition-all w-full sm:w-auto"
                >
                  <Calendar className="mr-2 h-6 w-6" />
                  Reservar cita
                </Button>
              </a>

              {/* CTA WHATSAPP */}
              <a 
                href="https://wa.me/34636308330"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="text-lg px-10 py-7 shadow-sm hover:shadow-md transition-all w-full sm:w-auto"
                >
                  <MessageCircle className="mr-2 h-6 w-6" />
                  WhatsApp
                </Button>
              </a>

              {/* CTA VER SERVICIOS (MISMO TAMAÑO QUE EL PRINCIPAL) */}
              <Button 
                size="lg"
                variant="outline"
                className="text-lg px-10 py-7 shadow-md hover:shadow-lg transition-all w-full sm:w-auto"
                onClick={handleScrollToServices}
              >
                Ver servicios
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </div>

            {/* MICROCOPYS – ALINEADOS EN UNA SOLA FILA */}
            <div className="flex items-center justify-between gap-4 pt-4 pb-6 w-full">

              <div className="text-center min-w-[90px]">
                <p className="text-2xl font-bold text-primary">+500</p>
                <p className="text-xs text-muted-foreground">Deportistas tratados</p>
              </div>

              <div className="h-10 w-px bg-border" />

              <div className="text-center min-w-[90px]">
                <p className="text-2xl font-bold text-primary">100%</p>
                <p className="text-xs text-muted-foreground">Atención individual</p>
              </div>

              <div className="h-10 w-px bg-border" />

              <div className="text-center min-w-[90px]">
                <p className="text-2xl font-bold text-primary">Colegiado</p>
                <p className="text-xs text-muted-foreground">Nº XXXX</p>
              </div>

            </div>
          </div>

          {/* IMAGEN A LA DERECHA */}
          <div className="relative opacity-0 scale-105 animate-[fadeZoom_1s_ease-out_forwards]">
            <div className="relative w-full h-[450px] md:h-[550px] rounded-2xl overflow-hidden shadow-xl">
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

      {/* ANIMACIONES */}
      <style jsx>{`
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeZoom {
          0% { opacity: 0; transform: scale(1.05); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  )
}
