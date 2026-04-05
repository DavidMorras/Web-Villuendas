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
              <a 
                href="https://calendly.com/davidmorras2/masaje-terapeutico?locale=es"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  className="text-lg px-10 py-7 shadow-md hover:shadow-lg transition-all"
                >
                  <Calendar className="mr-2 h-6 w-6" />
                  Reservar cita
                </Button>
              </a>

              <a 
                href="https://wa.me/34636308330"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="text-lg px-10 py-7 shadow-sm hover:shadow-md transition-all"
                >
                  <MessageCircle className="mr-2 h-6 w-6" />
                  WhatsApp
                </Button>
              </a>

              <Button 
                size="lg"
                variant="outline"
                className="text-lg px-10 py-7 hover:bg-muted transition-all"
                onClick={handleScrollToServices}
              >
                Ver servicios
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </div>

            {/* MICROCOPYS */}
            <div className="flex items-center gap-6 sm:gap-8 pt-4 flex-wrap">

              <div className="text-center min-w-[100px]">
                <p className="text-3xl font-bold text-primary">+500</p>
                <p className="text-sm text-muted-foreground">Deportistas tratados</p>
              </div>

              <div className="hidden sm:block h-12 w-px bg-border" />

              <div className="text-center min-w-[100px]">
                <p className="text-3xl font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground">Atención individual</p>
              </div>

              <div className="hidden sm:block h-12 w-px bg-border" />

              <div className="text-center min-w-[100px]">
                <p className="text-3xl font-bold text-primary">Colegiado</p>
                <p className="text-sm text-muted-foreground">Nº XXXX</p>
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
