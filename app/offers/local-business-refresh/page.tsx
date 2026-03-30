import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { ArrowRight, CheckCircle2, Globe, Zap, Search, Smartphone, TrendingUp, MessageSquare } from "lucide-react"
import {
  OfferModalProvider,
  OfferModalCheckupButton,
  OfferModalCheckupLink,
  OfferModalServiceButton,
} from "@/components/eligibility-modal"
import { projectTypeToOfferMode } from "@/lib/offer-modal-modes"
import { ScrollToSectionButton, ScrollToSectionLink } from "@/components/scroll-anchor"

export const metadata = {
  title: "Melbourne Business Digital Refresh | Jen Jacobsen",
  description:
    "Free digital checkup for Melbourne service businesses — clear next steps for a new website, refresh, or booking setup.",
}

const designedToImprove = [
  { icon: TrendingUp, label: "More enquiries from your existing traffic" },
  { icon: Zap, label: "Faster load times and better user experience" },
  { icon: MessageSquare, label: "Clearer messaging that guides visitors to act" },
  { icon: Globe, label: "A stronger, more professional online presence" },
]

const packages = [
  {
    title: "New Website",
    description: "You don't have a website yet and want to launch properly from day one.",
    bullets: [
      "Built for clarity and conversions",
      "Fast, modern, mobile-first",
    ],
    cta: "Start a New Website",
    price: "From $800 AUD",
    projectType: "new-website",
  },
  {
    title: "Website Refresh",
    description: "You already have a site, but it's outdated, underperforming, or unclear.",
    bullets: [
      "Improve messaging and structure",
      "Increase conversions from existing traffic",
    ],
    cta: "Refresh My Website",
    price: "From $600 AUD",
    projectType: "website-refresh",
  },
  {
    title: "Online Booking Setup",
    description: "You want customers to easily book or enquire without friction.",
    bullets: [
      "Simple booking flows",
      "Integrated into your site",
    ],
    cta: "Add Booking System",
    price: "From $300 AUD",
    projectType: "system",
  },
]

const problems = [
  "You're not getting enquiries from your online presence",
  "People find you, but don't take action",
  "Customers can't easily contact or book with you",
  "Your current site feels outdated or unclear",
  "You don't have a website yet and aren't sure where to start",
  "You rely on word of mouth but aren't showing up properly online",
]

const beforeAfter = {
  before: [
    "No clear online presence or outdated design",
    "Visitors unsure what to do next",
    "Hard to use on mobile",
    "Missed opportunities to convert",
  ],
  after: [
    "Clear, professional online presence",
    "Simple paths for customers to contact or book",
    "Fast, mobile-friendly experience",
    "Designed to turn visitors into enquiries",
  ],
}

const included = [
  {
    icon: Search,
    title: "New Website or Website Review",
    description: "Either a brand new site or a review of your current one to identify what needs improvement.",
  },
  {
    icon: Globe,
    title: "Design & Structure",
    description: "Clear, modern design that communicates what you do and guides users to take action.",
  },
  {
    icon: Smartphone,
    title: "Mobile & Responsive Optimisation",
    description: "Ensures your site works seamlessly across phones, tablets, and desktops.",
  },
  {
    icon: Zap,
    title: "Performance & Conversion Improvements",
    description: "Speed, usability, and structure improvements to help turn visitors into enquiries.",
  },
]

const steps = [
  {
    number: "1",
    title: "Tell me what you need (or what’s not working)",
    description: "Whether you’re starting fresh or improving an existing site, I’ll quickly understand your setup.",
  },
  {
    number: "2",
    title: "Define the right approach",
    description: "If you know what you need, we’ll move straight into it. If not, I’ll identify the best path forward.",
  },
  {
    number: "3",
    title: "Get a clear plan and next steps",
    description: "You’ll get clear recommendations and a straightforward way to move forward.",
  },
]

const outcomes = [
  "A professional online presence that builds trust instantly",
  "Clear messaging that explains what you do",
  "Simple ways for customers to contact or book",
  "A structure designed to convert visitors into enquiries",
  "A foundation that can grow with your business",
]

export default function LocalBusinessRefreshPage() {
  return (
    <OfferModalProvider>
    <div className="min-h-screen bg-background" id="digital-checkup">
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-secondary py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-6" >
            <div className="mx-auto max-w-3xl text-center">
              <Badge className="mb-6 bg-primary text-primary-foreground hover:bg-primary">
                For Melbourne Businesses
              </Badge>
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Local Business Digital Refresh
              </h1>
              <p className="mt-6 text-pretty text-lg text-muted-foreground leading-relaxed">
              Get clear on what’s holding your business back online — and the fastest way to fix it. Start with a free digital checkup.
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                9+ years building web and mobile applications
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Based in Australia, working closely with Melbourne businesses
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
                <div className="flex flex-col items-center gap-2">
                  <OfferModalCheckupButton buttonSize="lg" />                  
                </div>
                <ScrollToSectionButton
                  targetId="start-where-you-are"
                  size="lg"
                  variant="outline"
                  className="gap-2"
                >
                  I know what I need → View services
                </ScrollToSectionButton>
                <span className="max-w-[25rem] text-center text-xs text-muted-foreground">
                    Limited spots available this month for Melbourne businesses
                  </span>
              </div>
              <div className="mt-3 text-center">
                <span className="text-sm text-muted-foreground">
                  Free 5-minute review • No commitment • Get clear next steps
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* What This Is Designed To Improve */}
        <section className="border-b border-border py-12 md:py-16">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="mb-8 text-center text-xl font-semibold text-foreground">
              What This Is Designed To Improve
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {designedToImprove.map((item) => (
                <div key={item.label} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                  <item.icon className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Start Where You Are - Packages */}
        <section id="start-where-you-are" className="py-16 md:py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="mb-2 text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Start Where You Are
            </h2>
            <p className="mb-3 text-center text-sm text-muted-foreground leading-relaxed">
              Know what you need? Jump straight in. Not sure? I&apos;ll help you decide with a quick digital checkup.
            </p>
            <p className="mb-10 text-center text-sm text-muted-foreground">
              Designed for Melbourne-based businesses at any stage
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              {packages.map((pkg) => (
                <Card key={pkg.title} className="flex flex-col bg-card">
                  <CardHeader className="flex-1">
                    <div className="mb-2 text-xs font-medium text-primary">{pkg.price}</div>
                    <CardTitle className="text-xl">{pkg.title}</CardTitle>
                    <CardDescription className="text-base">{pkg.description}</CardDescription>
                    <ul className="mt-4 space-y-2">
                      {pkg.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </CardHeader>
                  <CardFooter>
                    <OfferModalServiceButton mode={projectTypeToOfferMode(pkg.projectType)}>
                      {pkg.cta}
                      <ArrowRight className="size-4" />
                    </OfferModalServiceButton>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-muted-foreground leading-relaxed">
              Not sure which option is right?{" "}
              <OfferModalCheckupLink className="text-primary underline underline-offset-4 hover:text-primary/90">
                Start with a free digital checkup
              </OfferModalCheckupLink>
              {" "}
              — I&apos;ll recommend the best path based on your business.
            </p>
          </div>
        </section>

        {/* Problem */}
        <section className="border-y border-border bg-secondary py-16 md:py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Sound Familiar?
            </h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {problems.map((problem) => (
                <li key={problem} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                  <span className="text-muted-foreground">{problem}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Before / After */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="mb-2 text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              What Changes After This
            </h2>
            <p className="mb-10 text-center text-muted-foreground">
              Starting fresh or improving what you have — here&apos;s the shift you can expect.
            </p>
            <div className="grid gap-8 md:grid-cols-2">
              {/* Before */}
              <div className="rounded-xl border border-border bg-card p-6">
                <p className="mb-4 text-sm font-medium uppercase tracking-wide text-muted-foreground">Before</p>
                <ul className="space-y-3">
                  {beforeAfter.before.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted-foreground">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-muted-foreground/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* After */}
              <div className="rounded-xl border border-primary/30 bg-primary/5 p-6">
                <p className="mb-4 text-sm font-medium uppercase tracking-wide text-primary">After</p>
                <ul className="space-y-3">
                  {beforeAfter.after.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-foreground">
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="border-y border-border bg-secondary py-16 md:py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="mb-10 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              What&apos;s Included In This Work
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {included.map((item) => (
                <Card key={item.title} className="bg-card">
                  <CardHeader>
                    <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-background text-foreground">
                      <item.icon className="size-5" />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <CardDescription className="text-base">{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="mb-10 text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              How This Works
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {steps.map((step) => (
                <div key={step.number} className="text-center">
                  <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="border-y border-border bg-secondary py-16 md:py-20">
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

        {/* Is this for you */}
        <section id="is-this-for-you" className="py-16 md:py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Is This For You?
            </h2>
            <p className="mb-6 text-lg text-muted-foreground">
              This is a fit if:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                <span className="text-muted-foreground">You&apos;re a local business serving your community</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                <span className="text-muted-foreground">You want to attract more customers online</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                <span className="text-muted-foreground">You either don&apos;t have a website yet, or your current one isn&apos;t performing</span>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-secondary py-16 md:py-20">
          <div className="mx-auto max-w-5xl px-6">
            <div className="flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center md:p-12">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Ready to Get More Customers Online?
              </h2>
              <p className="mt-4 max-w-lg text-lg text-muted-foreground">
                Book a free digital checkup or choose a website, refresh, or booking setup — whatever matches where you&apos;re at.
              </p>
              <div className="mt-8">
                <OfferModalCheckupButton buttonSize="lg" />
              </div>
              <div className="mt-3 flex flex-col items-center gap-2">
                <span className="text-sm text-muted-foreground">
                  Free 5-minute review • No commitment • Get clear next steps
                </span>
                <span className="text-xs text-muted-foreground">
                  Currently focused on Melbourne-based businesses
                </span>
                <ScrollToSectionLink
                  targetId="start-where-you-are"
                  className="mt-2 text-sm text-primary underline underline-offset-4 hover:text-primary/90"
                >
                  Or start a new website or booking setup
                </ScrollToSectionLink>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
    </OfferModalProvider>
  )
}
