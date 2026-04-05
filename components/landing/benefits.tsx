import { Target, TrendingUp, Heart } from "lucide-react"

const benefits = [
  {
    icon: Target,
    title: "Enfoque Deportivo",
    description: "He trabajado con deportistas de distintos niveles, desde personas que entrenan por salud hasta atletas que compiten cada semana. Esto me permite identificar rápido qué está fallando, cómo solucionarlo y cómo evitar que vuelva a ocurrir."
  },
  {
    icon: TrendingUp,
    title: "Resultados Reales",
    description: "Mi enfoque está orientado a que recuperes tu movilidad, reduzcas el dolor y vuelvas a entrenar con seguridad. No solo trato la lesión: te doy herramientas para que entiendas tu cuerpo y puedas seguir progresando sin miedo a recaer."
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
