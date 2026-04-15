import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { ServiceWebsites } from "@/components/sections/service-websites"
import { ServiceSystems } from "@/components/sections/service-systems"
import { ServiceArchitecture } from "@/components/sections/service-architecture"

export const metadata = {
  title: "Services | Jen Jacobsen",
  description:
    "Websites, custom apps and software, and technical architecture — built to be reliable, scalable, and fit for purpose.",
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="bg-secondary py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
                Services
              </p>
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Websites, Apps, and Architecture That Hold Up in Production
              </h1>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                Explore how I help with high-performing websites, custom software and systems,
                and technical strategy — each area links through to more detail when you&apos;re
                ready to go deeper.
              </p>
            </div>
          </div>
        </section>
        <ServiceWebsites />
        <ServiceSystems />
        <ServiceArchitecture />
      </main>
      <Footer />
    </div>
  )
}
