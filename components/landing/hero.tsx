"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, MessageCircle } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-medium tracking-wider uppercase text-primary">
                Centro de fisioterapia
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Elimina el dolor. Mejora tu rendimiento.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Tratamiento especializado para deportistas que buscan resultados reales. 
                Recuperación de lesiones, preparación pre-competición y readaptación deportiva 
                con las técnicas más avanzadas.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base px-8 py-6">
                <Calendar className="mr-2 h-5 w-5" />
                Reservar sesión
              </Button>
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-base px-8 py-6"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </Button>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">+500</p>
                <p className="text-sm text-muted-foreground">Deportistas tratados</p>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">10+</p>
                <p className="text-sm text-muted-foreground">Años de experiencia</p>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">98%</p>
                <p className="text-sm text-muted-foreground">Satisfacción</p>
              </div>
            </div>
          </div>
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
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg max-w-xs hidden lg:block">
              <p className="font-semibold text-lg">Formación continua</p>
              <p className="text-sm opacity-90 mt-1">
                Siempre actualizando técnicas para ofrecerte el mejor tratamiento
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
