import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ArrowRight, CheckCircle2, Settings2, FileText, GitBranch, Shield } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Architecture & Technical Strategy | Jen Jacobsen",
  description: "Make technical decisions you won't regret. Strategic guidance on architecture, tools, and approach to avoid costly rework.",
}

const outcomes = [
  "Clear technical direction before you commit to build",
  "Reduced risk of costly rework and technical debt",
  "Architecture aligned with your scale, budget, and goals",
  "Confidence that your system will hold up under real use",
]

const services = [
  {
    icon: FileText,
    title: "Technical Assessment",
    description: "Review your current setup or plans to identify risks, gaps, and better approaches.",
  },
  {
    icon: GitBranch,
    title: "Architecture Design",
    description: "Define how your system should be structured to support performance, scalability, and maintainability.",
  },
  {
    icon: Shield,
    title: "Risk & Security Review",
    description: "Identify weaknesses early — before they become expensive problems.",
  },
  {
    icon: Settings2,
    title: "Technology Direction",
    description: "Help you choose the right stack, tools, and approach based on your actual needs (not trends).",
  },
]

const process = [
  {
    step: "01",
    title: "Assessment",
    description: "Understand your current situation, goals, and constraints.",
  },
  {
    step: "02",
    title: "Analysis",
    description: "Deep dive into architecture, dependencies, and potential risks.",
  },
  {
    step: "03",
    title: "Recommendations",
    description: "Provide a clear, prioritised plan with practical options — not theory.",
  },
  {
    step: "04",
    title: "Implementation Support",
    description: "Support your team or build process to ensure decisions are applied correctly.",
  },
]

export default function ArchitectureServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-secondary py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Make Technical Decisions You Won&apos;t Regret
              </h1>
              <p className="mt-6 text-pretty text-lg text-muted-foreground leading-relaxed">
                Before you invest in building or scaling software, the decisions you make upfront matter. I help you choose the right architecture, tools, and approach so you avoid costly rework later.
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
              What I Do
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

        {/* Experience */}
        <section className="border-t border-border bg-secondary py-16 md:py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Experience
            </h2>
            <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Over a decade of experience designing and building software across finance, health, defence, and enterprise environments. I focus on practical decisions that hold up in real-world usage — not just ideal scenarios.
            </p>
          </div>
        </section>

        {/* Cross-Service Callout */}
        <section className="py-10 md:py-12">
          <div className="mx-auto max-w-5xl px-6">
            <div className="rounded-xl border border-border bg-muted/50 p-6 md:p-8">
              <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                Once the plan is clear
              </p>
              <h3 className="mt-2 text-lg font-semibold text-foreground">
                I can help build it too
              </h3>
              <p className="mt-2 max-w-xl text-muted-foreground">
                If you need hands-on implementation after the architecture is defined, I can also help build the website, software, or platform that follows from the strategy.
              </p>
              <Button asChild variant="outline" className="mt-5 gap-2">
                <Link href="/services/apps">
                  Explore Build Services
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
                Let&apos;s discuss your technical challenges and see how I can help you plan for success.
              </p>
              <Button asChild size="lg" className="mt-8 gap-2">
                <Link href="/#contact">
                  Get Architecture Guidance
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
