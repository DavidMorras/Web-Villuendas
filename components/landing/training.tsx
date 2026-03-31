import { GraduationCap, Award, BookOpen } from "lucide-react"

const courses = [
  {
    icon: GraduationCap,
    title: "Manipulación Vertebral",
    description: "Formación especializada en técnicas de manipulación de columna vertebral para tratar dolores de espalda y mejorar la movilidad."
  },
  {
    icon: Award,
    title: "Electrólisis Percutánea",
    description: "Certificación en EPI/EPTE para el tratamiento de tendinopatías y lesiones de tejidos blandos con técnicas mínimamente invasivas."
  },
  {
    icon: BookOpen,
    title: "Cursos Intensivos",
    description: "Actualización constante en las últimas técnicas y avances de la fisioterapia deportiva para ofrecer siempre el mejor tratamiento."
  }
]

export function Training() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-sm font-medium tracking-wider uppercase opacity-80">
              Formación continua
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Siempre aprendiendo para cuidarte mejor
            </h2>
            <p className="text-lg opacity-90 leading-relaxed">
              La fisioterapia evoluciona constantemente y nosotros con ella. 
              Invertimos en formación continua para ofrecerte las técnicas más 
              efectivas y los tratamientos más avanzados del mercado.
            </p>
            <p className="text-lg opacity-90 leading-relaxed">
              Cada curso, cada certificación, cada hora de estudio se traduce 
              en una mejor atención para ti y mejores resultados en tu recuperación.
            </p>
          </div>
          <div className="space-y-6">
            {courses.map((course, index) => (
              <div 
                key={index}
                className="flex gap-6 p-6 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/15 transition-colors"
              >
                <div className="w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <course.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                  <p className="opacity-80 leading-relaxed">{course.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
