import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { Benefits } from "@/components/landing/benefits"
import { Services } from "@/components/landing/services"
import { Athletes } from "@/components/landing/athletes"
import { Testimonials } from "@/components/landing/testimonials"
import { Training } from "@/components/landing/training"
import { CTA } from "@/components/landing/cta"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Benefits />
      <section id="servicios">
        <Services />
      </section>
      <section id="deportistas">
        <Athletes />
      </section>
      <section id="testimonios">
        <Testimonials />
      </section>
      <Training />
      <section id="contacto">
        <CTA />
      </section>
      <Footer />
    </main>
  )
}
