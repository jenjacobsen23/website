import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { ServiceWebsites } from "@/components/sections/service-websites"
import { ServiceSystems } from "@/components/sections/service-systems"
import { ServiceArchitecture } from "@/components/sections/service-architecture"
import { Credibility } from "@/components/sections/credibility"
import { Testimonials } from "@/components/sections/testimonials"
import { About } from "@/components/sections/about"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ServiceWebsites />
        <ServiceSystems />
        <ServiceArchitecture />
        <Credibility />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
