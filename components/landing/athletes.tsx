import { Medal, Trophy, Users } from "lucide-react"

const athletes = [
  {
    name: "Sergio Latorregil",
    handle: "@sergiolatorregil",
    sport: "Duatlón",
    achievement: "Campeonato de España",
    icon: Medal,
    description: "Preparación física y recuperación para competiciones de máximo nivel en duatlón."
  },
  {
    name: "Óscar Villaescusa",
    handle: "@oscarvillaescussa",
    sport: "Atletismo",
    achievement: "Campeón de Aragón en lanzamiento de disco y barra aragonesa",
    icon: Trophy,
    description: "Tratamiento especializado para disciplinas de lanzamiento y fuerza."
  },
  {
    name: "Club Barra y Bola Calatorao",
    handle: "",
    sport: "Deportes tradicionales",
    achievement: "Equipo completo",
    icon: Users,
    description: "Fisioterapia para todo el equipo, asegurando que cada miembro esté en óptimas condiciones."
  }
]

export function Athletes() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium tracking-wider uppercase text-primary mb-4">
            Casos reales
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Deportistas que confían en nosotros
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Trabajamos con atletas de diferentes disciplinas que buscan lo mejor para su rendimiento
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {athletes.map((athlete, index) => (
            <div 
              key={index}
              className="bg-background p-8 rounded-xl border border-border"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center">
                  <athlete.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{athlete.name}</h3>
                  {athlete.handle && (
                    <p className="text-sm text-muted-foreground">{athlete.handle}</p>
                  )}
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
                    {athlete.sport}
                  </span>
                </div>
                <p className="text-sm font-medium text-primary">
                  {athlete.achievement}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {athlete.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
