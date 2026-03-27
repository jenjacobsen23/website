import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ArrowRight, CheckCircle2, Smartphone, Database, Cloud, Layout } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Apps & Platforms | Jen Jacobsen",
  description: "Custom software, apps, and platforms built for real use. From internal tools to customer-facing products.",
}

const outcomes = [
  "Software tailored to your exact workflows or product idea",
  "Improved efficiency and reduced manual work",
  "Scalable architecture that grows with your business or user base",
  "Reliable, secure applications built for real-world use",
]

const services = [
  {
    icon: Smartphone,
    title: "Web Applications",
    description: "Custom web apps for internal tools, customer platforms, or product ideas.",
  },
  {
    icon: Database,
    title: "Internal Tools",
    description: "Dashboards and systems that streamline operations and support your team.",
  },
  {
    icon: Cloud,
    title: "APIs & Integrations",
    description: "Robust APIs that connect systems, enable automation, and support scaling products.",
  },
  {
    icon: Layout,
    title: "Platform & App Development",
    description: "Customer-facing platforms and full applications, including booking systems, portals, and startup products.",
  },
]

const process = [
  {
    step: "01",
    title: "Requirements",
    description: "We define your goals, users, and what success looks like — whether internal or customer-facing.",
  },
  {
    step: "02",
    title: "Architecture",
    description: "I design a solution that balances usability, scalability, and long-term maintainability.",
  },
  {
    step: "03",
    title: "Build & Iterate",
    description: "Development happens in stages, with regular feedback and refinement.",
  },
  {
    step: "04",
    title: "Launch & Support",
    description: "Launch confidently with support, documentation, and future improvements.",
  },
]

export default function AppsServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-secondary py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Custom Software, Apps, and Platforms Built for Real Use
              </h1>
              <p className="mt-6 text-pretty text-lg text-muted-foreground leading-relaxed">
                Whether you need an internal tool, a customer-facing platform, or a new app idea brought to life, I design and build software that fits how your business operates and grows.
              </p>
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              What You Get
            </h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span className="text-muted-foreground">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Services */}
        <section className="border-y border-border bg-secondary py-16 md:py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="mb-10 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              What I Build
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {services.map((service) => (
                <Card key={service.title} className="bg-card">
                  <CardHeader>
                    <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <service.icon className="size-5" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="mb-10 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              How I Work
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((item) => (
                <div key={item.step}>
                  <span className="text-sm font-semibold text-muted-foreground">{item.step}</span>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology */}
        <section className="border-t border-border bg-secondary py-16 md:py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Technology
            </h2>
            <p className="max-w-3xl text-lg text-muted-foreground leading-relaxed">
              I build with modern, proven technologies suited to both business systems and scalable applications. This includes React, Next.js, Angular, Node.js, and .NET for application development, along with SQL and Firebase for data. I also work with cloud platforms like Azure and Vercel to ensure performance, scalability, and reliability.
            </p>
            <p className="mt-4 max-w-3xl text-muted-foreground">
              Technology choices are always driven by your project requirements — whether that&apos;s a lightweight tool or a larger, production-grade application.
            </p>
          </div>
        </section>

        {/* Cross-Service Callout */}
        <section className="py-10 md:py-12">
          <div className="mx-auto max-w-5xl px-6">
            <div className="rounded-xl border border-border bg-muted/50 p-6 md:p-8">
              <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                Building something complex?
              </p>
              <h3 className="mt-2 text-lg font-semibold text-foreground">
                Get architecture guidance before you commit
              </h3>
              <p className="mt-2 max-w-xl text-muted-foreground">
                When the build is larger, higher-stakes, or likely to scale, getting the technical direction right early can save time, money, and rework later.
              </p>
              <Button asChild variant="outline" className="mt-5 gap-2">
                <Link href="/services/architecture">
                  Explore Architecture Guidance
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-5xl px-6">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Ready to Get Started?
              </h2>
              <p className="mt-4 max-w-lg text-lg text-muted-foreground">
                Let&apos;s discuss your project and see how I can help you achieve your goals.
              </p>
              <Button asChild size="lg" className="mt-8 gap-2">
                <Link href="/#contact">
                  Start a Software Project
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
