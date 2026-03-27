import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Website Development & Refresh | Jen Jacobsen",
  description: "Modern, fast websites that convert visitors into customers. From new builds to complete refreshes.",
}

const whatYouGet = [
  "A site that clearly communicates what you do",
  "Fast, reliable performance across devices",
  "A structure that guides users to the right actions",
  "Built to scale and evolve as your business grows",
]

const whatThisIncludes = [
  "New website builds (from concept to launch)",
  "Full redesigns and refreshes",
  "Performance and usability improvements",
  "Mobile and responsive optimisation",
  "Technical setup (hosting, deployment, integrations)",
]

const whoThisIsFor = [
  "You don't have a website yet and need to launch properly",
  "Your current site feels outdated or unclear",
  "Your site doesn't reflect the quality of your business",
  "You need something more flexible than a template",
]

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We discuss your goals, target audience, and what success looks like for your business.",
  },
  {
    step: "02",
    title: "Strategy & Design",
    description: "I create a plan and design that aligns with your brand and optimises for conversions.",
  },
  {
    step: "03",
    title: "Development",
    description: "Your site is built using modern technologies chosen for your specific needs.",
  },
  {
    step: "04",
    title: "Launch & Support",
    description: "We launch together, and I provide ongoing support to ensure continued success.",
  },
]

export default function WebsitesServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-secondary py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <Link 
                href="/offers/local-business-refresh" 
                className="mb-6 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary transition-colors hover:bg-primary/15"
              >
                Local business? Start with a Digital Refresh
                <ArrowRight className="size-3.5" />
              </Link>
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Websites That Convert Visitors Into Customers
              </h1>
              <p className="mt-6 text-pretty text-lg text-muted-foreground leading-relaxed">
                Whether you&apos;re starting from scratch or improving an existing site, I build websites that are fast, clear, and designed to support real usage — not just look good.
              </p>
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              What You Get
            </h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {whatYouGet.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* What This Typically Includes */}
        <section className="border-y border-border bg-secondary py-16 md:py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              What This Typically Includes
            </h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {whatThisIncludes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Local Business Promo */}
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-5xl px-6">
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 md:p-8">
              <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                For Local Businesses
              </p>
              <h3 className="mt-2 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                Start with a Digital Refresh
              </h3>
              <p className="mt-3 max-w-xl text-muted-foreground">
                If you&apos;re a local business looking for a quick way to improve your online presence, this focused package is designed to modernise your website and make it work better for you.
              </p>
              <Button asChild variant="outline" className="mt-6 gap-2">
                <Link href="/offers/local-business-refresh">
                  View Digital Refresh Offer
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Who This Is For */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              This Is For You If
            </h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {whoThisIsFor.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Process */}
        <section className="border-y border-border bg-secondary py-16 md:py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="mb-10 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              How I Work
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((item) => (
                <div key={item.step}>
                  <span className="text-sm font-semibold text-muted-foreground/60">{item.step}</span>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Technology
            </h2>
            <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
              I work with a range of technologies based on what suits your project best. From WordPress for content-heavy sites to custom React and Next.js builds for more complex requirements. The right choice depends on your goals, budget, and long-term needs.
            </p>
          </div>
        </section>

        {/* Cross-Service Callout */}
        <section className="py-10 md:py-12">
          <div className="mx-auto max-w-5xl px-6">
            <div className="rounded-xl border border-border bg-muted/50 p-6 md:p-8">
              <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                Need more than a website?
              </p>
              <h3 className="mt-2 text-lg font-semibold text-foreground">
                Explore custom apps and software
              </h3>
              <p className="mt-2 max-w-xl text-muted-foreground">
                If your website needs customer portals, booking flows, dashboards, or a more tailored product experience, the next step may be custom software.
              </p>
              <Button asChild variant="outline" className="mt-5 gap-2">
                <Link href="/services/apps">
                  Explore Apps &amp; Software
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
                  Start a Project
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
