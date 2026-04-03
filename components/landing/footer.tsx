import { Instagram, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-background rounded-lg flex items-center justify-center">
                <span className="text-foreground font-bold text-lg">DV</span>
              </div>
              <div>
                <p className="font-semibold leading-tight">Fisioterapia</p>
                <p className="text-sm opacity-70">David Villuendas</p>
              </div>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              Fisioterapia deportiva especializada. Tu rendimiento es nuestra prioridad.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Servicios</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>Terapia Manual</li>
              <li>Electrólisis Percutánea</li>
              <li>Punción Seca</li>
              <li>Readaptación Deportiva</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 opacity-70">
                <Phone className="w-4 h-4" />
                <span>+34 636308330</span>
              </li>
              <li className="flex items-center gap-3 opacity-70">
                <Mail className="w-4 h-4" />
                <span>info@davidvilluendas.com</span>
              </li>
              <li className="flex items-start gap-3 opacity-70">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Calle Juan Padilla 1, Calatorao, Spain 50280</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Síguenos</h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm opacity-70">
              @dvl.fisioterapia
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-70">
            <p>© 2024 Fisioterapia David Villuendas. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:opacity-100 transition-opacity">Aviso Legal</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Política de Privacidad</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
