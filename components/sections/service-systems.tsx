import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

function SystemsVisual() {
  return (
    <div className="relative">
      {/* Web Dashboard mockup - primary element */}
      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border bg-muted px-5 py-3">
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-lg bg-primary" />
            <div className="h-4 w-24 rounded bg-foreground/80" />
          </div>
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-muted-foreground/20" />
          </div>
        </div>
        {/* Content */}
        <div className="flex">
          {/* Sidebar */}
          <div className="w-44 border-r border-border bg-muted/50 p-4">
            <div className="space-y-2">
              <div className="h-8 rounded-md bg-primary/20" />
              <div className="h-8 rounded-md bg-transparent" />
              <div className="h-8 rounded-md bg-transparent" />
              <div className="h-8 rounded-md bg-transparent" />
            </div>
          </div>
          {/* Main */}
          <div className="flex-1 p-5">
            <div className="mb-4 h-5 w-32 rounded bg-foreground" />
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="rounded-lg border border-border bg-card p-3">
                <div className="mb-2 h-3 w-12 rounded bg-muted" />
                <div className="h-6 w-16 rounded bg-primary" />
              </div>
              <div className="rounded-lg border border-border bg-card p-3">
                <div className="mb-2 h-3 w-12 rounded bg-muted" />
                <div className="h-6 w-16 rounded bg-foreground" />
              </div>
              <div className="rounded-lg border border-border bg-card p-3">
                <div className="mb-2 h-3 w-12 rounded bg-muted" />
                <div className="h-6 w-16 rounded bg-accent" />
              </div>
            </div>
            {/* Table rows */}
            <div className="space-y-2">
              <div className="flex items-center gap-3 rounded-lg bg-muted/50 p-3">
                <div className="size-4 rounded bg-primary/50" />
                <div className="h-3 flex-1 rounded bg-muted" />
                <div className="h-3 w-16 rounded bg-muted" />
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-muted/50 p-3">
                <div className="size-4 rounded bg-primary/50" />
                <div className="h-3 flex-1 rounded bg-muted" />
                <div className="h-3 w-16 rounded bg-muted" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile App mockup - secondary element, overlapping */}
      <div className="absolute -bottom-6 -right-4 w-36 overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
        {/* Status bar */}
        <div className="flex items-center justify-between bg-muted px-3 py-1.5">
          <div className="h-2 w-8 rounded bg-muted-foreground/30" />
          <div className="flex gap-1">
            <div className="h-2 w-2 rounded-full bg-muted-foreground/30" />
            <div className="h-2 w-2 rounded-full bg-muted-foreground/30" />
          </div>
        </div>
        {/* App header - matching web design language */}
        <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-3 py-2">
          <div className="size-5 rounded-md bg-primary" />
          <div className="h-3 w-14 rounded bg-foreground/80" />
        </div>
        {/* App content */}
        <div className="p-3 space-y-3">
          {/* Stats card - matching web cards */}
          <div className="rounded-lg border border-border bg-card p-2">
            <div className="mb-1 h-2 w-10 rounded bg-muted" />
            <div className="h-4 w-12 rounded bg-primary" />
          </div>
          {/* List items - matching web table rows */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 rounded-md bg-muted/50 p-2">
              <div className="size-3 rounded bg-primary/50" />
              <div className="h-2 flex-1 rounded bg-muted" />
            </div>
            <div className="flex items-center gap-2 rounded-md bg-muted/50 p-2">
              <div className="size-3 rounded bg-primary/50" />
              <div className="h-2 flex-1 rounded bg-muted" />
            </div>
            <div className="flex items-center gap-2 rounded-md bg-muted/50 p-2">
              <div className="size-3 rounded bg-primary/50" />
              <div className="h-2 flex-1 rounded bg-muted" />
            </div>
          </div>
        </div>
        {/* Bottom nav - mobile-specific */}
        <div className="flex items-center justify-around border-t border-border bg-muted/50 px-2 py-2">
          <div className="size-4 rounded bg-primary" />
          <div className="size-4 rounded bg-muted-foreground/30" />
          <div className="size-4 rounded bg-muted-foreground/30" />
        </div>
      </div>
      
      {/* Connection line - showing shared data */}
      <div className="absolute bottom-12 right-24 w-16 border-t-2 border-dashed border-primary/40" />
      
      {/* Badge */}
      <div className="absolute -bottom-4 -left-4 rounded-lg border border-border bg-card px-4 py-3 shadow-lg">
        <div className="text-xs font-medium text-muted-foreground">One platform</div>
        <div className="text-lg font-bold text-primary">Web + Mobile</div>
      </div>
    </div>
  )
}

export function ServiceSystems() {
  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="hidden md:block order-2 md:order-1">
            <SystemsVisual />
          </div>
          <div className="order-1 md:order-2">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
              Apps &amp; Platforms
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Apps and Platforms Built for Real Use
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Whether you need an internal tool, a customer-facing platform, or a new app idea brought to life, I build software designed for real-world use.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                <span className="text-foreground/80">Internal tools that support real workflows</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                <span className="text-foreground/80">Customer-facing platforms such as portals, booking systems, and dashboards</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                <span className="text-foreground/80">Web and mobile apps built for teams, customers, or new product ideas</span>
              </li>
            </ul>
            <p className="mt-4 text-sm text-muted-foreground italic">
              Built to simplify operations, improve user experience, and scale with your business.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="gap-2 shadow-md">
                <Link href="#contact">
                  Start My Software Project
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Link 
                href="/services/apps" 
                className="text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
