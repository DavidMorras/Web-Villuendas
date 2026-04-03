"use client"

import { Button } from "@/components/ui/button"
import { Calendar, MessageCircle, Phone } from "lucide-react"

export function CTA() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            ¿Listo para dar el siguiente paso?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
            No dejes que el dolor frene tu rendimiento. Reserva tu sesión hoy 
            y empieza a trabajar hacia tus objetivos deportivos con el 
            tratamiento que mereces.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            {/* CALENDLY */}
            <a 
              href="https://calendly.com/davidmorras2/masaje-terapeutico?locale=es"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="text-base px-8 py-6">
                <Calendar className="mr-2 h-5 w-5" />
                Reservar sesión
              </Button>
            </a>

            {/* WHATSAPP */}
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

            {/* LLAMAR */}
            <a href="tel:636308330">
              <Button 
                size="lg" 
                variant="outline" 
                className="text-base px-8 py-6"
              >
                <Phone className="mr-2 h-5 w-5" />
                Llamar ahora
              </Button>
            </a>

          </div>
        </div>
      </div>
    </section>
  )
}
