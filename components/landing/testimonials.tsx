import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Un profesional como la copa de un pino!",
    author: "Paciente satisfecho",
    context: "Tras tratamiento de lesión deportiva"
  },
  {
    quote: "Nunca dejes de aprender. Enhorabuena crack.",
    author: "Colega de profesión",
    context: "Sobre su formación continua"
  },
  {
    quote: "Con tu aprendizaje cada día nos cuidas para estar bien.",
    author: "Deportista habitual",
    context: "Cliente recurrente"
  }
]

export function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium tracking-wider uppercase text-primary mb-4">
            Testimonios
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Lo que dicen de nosotros
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="relative p-8 rounded-xl bg-secondary/50 border border-border"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              <blockquote className="relative">
                <p className="text-xl font-medium text-foreground mb-6 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <footer>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.context}</p>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
