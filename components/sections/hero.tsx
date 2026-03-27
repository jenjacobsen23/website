import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

function WebsiteMockup() {
  return (
    <div className="absolute left-0 top-8 z-20 w-[320px] overflow-hidden rounded-lg border border-border bg-card shadow-2xl lg:w-[380px]">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-border bg-muted px-4 py-2.5">
        <div className="flex gap-1.5">
          <div className="size-2.5 rounded-full bg-muted-foreground/30" />
          <div className="size-2.5 rounded-full bg-muted-foreground/30" />
          <div className="size-2.5 rounded-full bg-muted-foreground/30" />
        </div>
        <div className="ml-2 h-5 flex-1 rounded bg-muted-foreground/10" />
      </div>
      {/* Page content */}
      <div className="p-4">
        {/* Nav */}
        <div className="mb-6 flex items-center justify-between">
          <div className="h-4 w-16 rounded bg-primary" />
          <div className="flex gap-3">
            <div className="h-3 w-10 rounded bg-muted" />
            <div className="h-3 w-10 rounded bg-muted" />
            <div className="h-3 w-10 rounded bg-muted" />
          </div>
        </div>
        {/* Hero area */}
        <div className="mb-4 h-5 w-3/4 rounded bg-foreground" />
        <div className="mb-2 h-3 w-full rounded bg-muted" />
        <div className="mb-6 h-3 w-2/3 rounded bg-muted" />
        <div className="mb-6 h-8 w-24 rounded bg-primary" />
        {/* Grid */}
        <div className="grid grid-cols-3 gap-2">
          <div className="h-16 rounded bg-muted" />
          <div className="h-16 rounded bg-muted" />
          <div className="h-16 rounded bg-muted" />
        </div>
      </div>
    </div>
  )
}

function MobileMockup() {
  return (
    <div className="absolute bottom-4 left-[200px] z-30 w-[140px] overflow-hidden rounded-2xl border-4 border-foreground bg-card shadow-2xl lg:left-[260px] lg:w-[160px]">
      {/* Status bar */}
      <div className="flex items-center justify-between bg-foreground px-3 py-1">
        <div className="h-1.5 w-6 rounded bg-muted-foreground" />
        <div className="h-3 w-8 rounded-full bg-muted-foreground/50" />
        <div className="h-1.5 w-6 rounded bg-muted-foreground" />
      </div>
      {/* App content */}
      <div className="p-3">
        <div className="mb-3 flex items-center gap-2">
          <div className="size-6 rounded-full bg-muted" />
          <div className="h-3 w-16 rounded bg-muted-foreground/30" />
        </div>
        <div className="mb-2 h-20 rounded-lg bg-muted" />
        <div className="mb-2 h-3 w-full rounded bg-muted" />
        <div className="mb-3 h-3 w-3/4 rounded bg-muted" />
        <div className="flex gap-2">
          <div className="h-6 flex-1 rounded bg-primary" />
          <div className="h-6 w-12 rounded border border-border" />
        </div>
      </div>
      {/* Home indicator */}
      <div className="flex justify-center py-2">
        <div className="h-1 w-10 rounded-full bg-muted-foreground/30" />
      </div>
    </div>
  )
}

function ArchitectureDiagram() {
  return (
    <div className="absolute -right-4 top-0 z-10 w-[280px] lg:-right-8 lg:w-[320px]">
      {/* Connection lines */}
      <svg className="absolute inset-0 size-full" viewBox="0 0 320 320">
        <path
          d="M160 60 L80 140 M160 60 L240 140 M80 140 L80 220 M240 140 L240 220 M80 220 L160 280 M240 220 L160 280"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-border"
          strokeDasharray="4 4"
        />
      </svg>
      
      {/* Nodes */}
      <div className="absolute left-1/2 top-8 -translate-x-1/2 rounded-lg border border-border bg-card px-4 py-2 shadow-md">
        <div className="mb-1 h-2 w-12 rounded bg-primary" />
        <div className="h-1.5 w-16 rounded bg-muted" />
      </div>
      
      <div className="absolute left-4 top-28 rounded-lg border border-border bg-card px-3 py-2 shadow-md lg:left-6">
        <div className="mb-1 h-2 w-10 rounded bg-muted-foreground" />
        <div className="h-1.5 w-14 rounded bg-muted" />
      </div>
      
      <div className="absolute right-4 top-28 rounded-lg border border-border bg-card px-3 py-2 shadow-md lg:right-6">
        <div className="mb-1 h-2 w-10 rounded bg-muted-foreground" />
        <div className="h-1.5 w-14 rounded bg-muted" />
      </div>
      
      <div className="absolute left-4 top-52 rounded-lg border border-border bg-muted px-3 py-2 shadow-sm lg:left-6">
        <div className="mb-1 h-2 w-8 rounded bg-primary/50" />
        <div className="h-1.5 w-12 rounded bg-muted-foreground/20" />
      </div>
      
      <div className="absolute right-4 top-52 rounded-lg border border-border bg-muted px-3 py-2 shadow-sm lg:right-6">
        <div className="mb-1 h-2 w-8 rounded bg-primary/50" />
        <div className="h-1.5 w-12 rounded bg-muted-foreground/20" />
      </div>
      
      <div className="absolute left-1/2 -translate-x-1/2 rounded-lg border border-border bg-card px-4 py-2 shadow-md lg:bottom-4">
        <div className="mb-1 h-2 w-14 rounded bg-foreground" />
        <div className="h-1.5 w-18 rounded bg-muted" />
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 lg:py-28">
      <div className="absolute inset-0 -z-10 bg-secondary" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Text content */}
          <div className="max-w-xl">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
              Digital Systems That Actually Work in the Real World
            </h1>
            <p className="mt-5 text-pretty text-lg text-muted-foreground">
              From high-performing websites to complex applications and architecture — built to be reliable, scalable, and fit for purpose.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="gap-2 shadow-md">
                <Link href="#contact">
                  Start Your Project
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="shadow-sm">
                <Link href="#services">
                  Explore Services
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Visual composition */}
          <div className="relative mx-auto h-[380px] w-full max-w-[480px] lg:h-[440px] lg:max-w-none">
            <ArchitectureDiagram />
            <WebsiteMockup />
            <MobileMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
