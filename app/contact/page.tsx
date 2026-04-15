import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { Contact } from "@/components/sections/contact"

export const metadata = {
  title: "Contact | Jen Jacobsen",
  description:
    "Get in touch about websites, apps, systems, or architecture — tell me what you need and we’ll find the right approach.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="bg-secondary py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
                Contact
              </p>
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Let&apos;s Build Something That Actually Works
              </h1>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                Tell me what you&apos;re trying to solve — I&apos;ll help you figure out the right
                approach. Use the form below to share a few details and I&apos;ll get back to you
                within 24 hours.
              </p>
            </div>
          </div>
        </section>
        <Contact showIntro={false} />
      </main>
      <Footer />
    </div>
  )
}
