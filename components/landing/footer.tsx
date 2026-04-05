import Image from "next/image"
import { Instagram, Phone, Mail, MapPin } from "lucide-react"
import { useState } from "react"

export function Footer() {
  const [openModal, setOpenModal] = useState<"legal" | "privacy" | null>(null)

  return (
    <>
      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-6 lg:px-8">
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* LOGO + DESCRIPCIÓN */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg overflow-hidden bg-background">
                  <Image
                    src="/logovillu.png"
                    alt="Logo David Villuendas"
                    width={40}
                    height={40}
                    className="object-cover rounded-lg"
                  />
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

            {/* SERVICIOS → TODOS LLEVAN A #servicios */}
            <div className="space-y-4">
              <h4 className="font-semibold">Servicios</h4>
              <ul className="space-y-2 text-sm opacity-70">
                <li><a href="#servicios" className="hover:opacity-100 transition-opacity">Terapia Manual</a></li>
                <li><a href="#servicios" className="hover:opacity-100 transition-opacity">Electrólisis Percutánea</a></li>
                <li><a href="#servicios" className="hover:opacity-100 transition-opacity">Punción Seca</a></li>
                <li><a href="#servicios" className="hover:opacity-100 transition-opacity">Preparación Pre-Competición</a></li>
                <li><a href="#servicios" className="hover:opacity-100 transition-opacity">Recuperación Post-Lesión</a></li>
              </ul>
            </div>

            {/* CONTACTO */}
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

            {/* REDES */}
            <div className="space-y-4">
              <h4 className="font-semibold">Síguenos</h4>
              <div className="flex gap-4">
                <a 
                  href="https://instagram.com/dvl.fisioterapia"
                  target="_blank"
                  className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
              <p className="text-sm opacity-70">@dvl.fisioterapia</p>
            </div>
          </div>

          {/* COPYRIGHT + LEGAL */}
          <div className="mt-12 pt-8 border-t border-background/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-70">
              
              <p>© {new Date().getFullYear()} Fisioterapia David Villuendas. Todos los derechos reservados.</p>

              <div className="flex gap-6">
                <button 
                  onClick={() => setOpenModal("legal")}
                  className="hover:opacity-100 transition-opacity"
                >
                  Aviso Legal
                </button>

                <button 
                  onClick={() => setOpenModal("privacy")}
                  className="hover:opacity-100 transition-opacity"
                >
                  Política de Privacidad
                </button>
              </div>

            </div>
          </div>
        </div>
      </footer>

      {/* ⭐ MODAL LEGAL / PRIVACIDAD */}
      {openModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[999]">
          <div className="bg-background text-foreground p-8 rounded-xl max-w-lg w-full shadow-xl">
            <h2 className="text-xl font-semibold mb-4">
              {openModal === "legal" ? "Aviso Legal" : "Política de Privacidad"}
            </h2>

            <p className="text-sm opacity-80 leading-relaxed">
              Aquí podrás añadir el texto legal completo cuando lo tengas.  
              Este contenido es totalmente editable.
            </p>

            <button
              onClick={() => setOpenModal(null)}
              className="mt-6 px-4 py-2 bg-foreground text-background rounded-lg hover:bg-foreground/80 transition"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  )
}
