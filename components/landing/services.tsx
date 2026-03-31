import { Hand, Zap, CircleDot, Activity, Timer, Bandage } from "lucide-react"

const services = [
  {
    icon: Hand,
    title: "Terapia Manual",
    description: "Técnicas manuales especializadas para liberar tensiones, mejorar la movilidad y acelerar la recuperación muscular."
  },
  {
    icon: Zap,
    title: "Electrólisis Percutánea",
    description: "Técnica invasiva mínimamente dolorosa para tratar tendinopatías y lesiones crónicas. Formación específica certificada."
  },
  {
    icon: CircleDot,
    title: "Punción Seca",
    description: "Tratamiento de puntos gatillo miofasciales para eliminar contracturas y dolor muscular de forma efectiva."
  },
  {
    icon: Activity,
    title: "Readaptación Deportiva",
    description: "Plan personalizado de vuelta a la actividad deportiva tras una lesión. Progresión segura y controlada."
  },
  {
    icon: Timer,
    title: "Preparación Pre-Competición",
    description: "Optimiza tu rendimiento antes de competiciones importantes. Trabajo específico para llegar en tu mejor momento."
  },
  {
    icon: Bandage,
    title: "Recuperación Post-Lesión",
    description: "Protocolo completo de rehabilitación para volver más fuerte. Seguimiento continuo hasta tu recuperación total."
  }
]

export function Services() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium tracking-wider uppercase text-primary mb-4">
            Nuestros servicios
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Tratamientos especializados para deportistas
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Cada técnica aplicada con precisión y respaldada por formación continua
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 rounded-xl border border-border hover:bg-secondary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
