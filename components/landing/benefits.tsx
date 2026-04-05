import { Target, TrendingUp, GraduationCap, Heart } from "lucide-react"

const benefits = [
  {
    icon: Target,
    title: "Enfoque Deportivo",
    description: "Especialización en deportistas de alto rendimiento. Entendemos las exigencias de tu disciplina y adaptamos el tratamiento a tus objetivos."
  },
  {
    icon: TrendingUp,
    title: "Resultados Reales",
    description: "Trabajamos con deportistas que compiten a nivel nacional. Sergio Latorre Gil, Óscar Villaescusa y muchos más confían en nosotros."
  },
  {
    icon: GraduationCap,
    title: "Formación Continua",
    description: "Nunca dejamos de aprender. Cursos de manipulación vertebral, electrólisis y las técnicas más avanzadas para tu recuperación."
  },
  {
    icon: Heart,
    title: "Trato Cercano",
    description: "Cada persona, cada lesión y cada objetivo deportivo es diferente. Por eso dedico el tiempo necesario a entender tu caso y adaptar el tratamiento a lo que realmente necesitas. Mi prioridad es que te sientas escuchado, acompañado y en buenas manos desde el primer minuto."
  }
]

export function Benefits() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium tracking-wider uppercase text-primary mb-4">
            Por qué elegirnos
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Tu rendimiento es nuestra prioridad
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-background p-8 rounded-xl border border-border hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-6">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
