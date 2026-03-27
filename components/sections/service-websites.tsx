import { Button } from "@/components/ui/button"
import { contactWithProject } from "@/lib/contact-href"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

function WebsiteVisual() {
  return (
    <div className="relative">
      {/* Browser window */}
      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-xl">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 border-b border-border bg-muted px-4 py-3">
          <div className="flex gap-1.5">
            <div className="size-3 rounded-full bg-muted-foreground/20" />
            <div className="size-3 rounded-full bg-muted-foreground/20" />
            <div className="size-3 rounded-full bg-muted-foreground/20" />
          </div>
          <div className="ml-3 h-6 flex-1 rounded-md bg-muted-foreground/10" />
        </div>
        {/* Page content */}
        <div className="p-6">
          {/* Nav */}
          <div className="mb-8 flex items-center justify-between">
            <div className="h-5 w-20 rounded bg-primary" />
            <div className="flex gap-4">
              <div className="h-3 w-12 rounded bg-muted" />
              <div className="h-3 w-12 rounded bg-muted" />
              <div className="h-3 w-12 rounded bg-muted" />
            </div>
          </div>
          {/* Hero text */}
          <div className="mb-3 h-6 w-4/5 rounded bg-foreground" />
          <div className="mb-2 h-3 w-full rounded bg-muted" />
          <div className="mb-6 h-3 w-3/4 rounded bg-muted" />
          <div className="mb-8 h-10 w-28 rounded-lg bg-primary" />
          {/* Grid cards */}
          <div className="grid grid-cols-3 gap-3">
            <div className="h-20 rounded-lg bg-muted" />
            <div className="h-20 rounded-lg bg-muted" />
            <div className="h-20 rounded-lg bg-muted" />
          </div>
        </div>
      </div>
      {/* Stats badge */}
      <div className="absolute -bottom-4 -right-4 rounded-lg border border-border bg-card px-4 py-3 shadow-lg">
        <div className="text-2xl font-bold text-primary">+47%</div>
        <div className="text-xs text-muted-foreground">faster load time</div>
      </div>
    </div>
  )
}

export function ServiceWebsites() {
  return (
    <section id="services" className="bg-card py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
              Websites
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              A Website That Works as Hard as You Do
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Whether you need a new website or your current one isn&apos;t pulling its weight, your site should perform — loading fast, guiding visitors to action, and representing your business properly.
            </p>
            <p className="mt-3 flex gap-4 text-sm">
              <Link
                href={contactWithProject("new-website")}
                className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
              >
                Need a new website
              </Link>
              <Link
                href={contactWithProject("website-refresh")}
                className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
              >
                Improve an existing site
              </Link>
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                <span className="text-foreground/80">New websites built around your goals</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                <span className="text-foreground/80">Clear messaging that turns visitors into customers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                <span className="text-foreground/80">Fast, reliable, mobile-first performance</span>
              </li>
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              From brand new builds to full refreshes — the approach depends on where you&apos;re starting.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="gap-2 shadow-md">
                <Link href={contactWithProject("website-refresh")}>
                  Fix My Website
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Link 
                href="/services/websites" 
                className="text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
              >
                Learn more
              </Link>
            </div>
            
            {/* Local Business Promo Callout */}
            <div className="mt-10 rounded-xl border-2 border-primary/20 bg-primary/5 p-5">
              <p className="text-foreground/90">
                <span className="font-semibold text-foreground">Local business?</span>{" "}
                Start with a quick Digital Refresh — a focused package to modernize your online presence.
              </p>
              <Link 
                href="/offers/local-business-refresh" 
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
              >
                See the Digital Refresh offer
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <WebsiteVisual />
          </div>
        </div>
      </div>
    </section>
  )
}
