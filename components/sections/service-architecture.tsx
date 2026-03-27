import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

function ArchitectureVisual() {
  return (
    <div className="relative">
      {/* Architecture diagram */}
      <div className="rounded-xl border border-border bg-card p-6 shadow-xl">
        {/* Top layer - Applications */}
        <div className="mb-4 text-center">
          <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">Applications</div>
          <div className="flex justify-center gap-3">
            <div className="rounded-lg border border-border bg-primary/10 px-4 py-3">
              <div className="h-3 w-12 rounded bg-primary mb-1" />
              <div className="h-2 w-16 rounded bg-muted" />
            </div>
            <div className="rounded-lg border border-border bg-primary/10 px-4 py-3">
              <div className="h-3 w-12 rounded bg-primary mb-1" />
              <div className="h-2 w-16 rounded bg-muted" />
            </div>
            <div className="rounded-lg border border-border bg-primary/10 px-4 py-3">
              <div className="h-3 w-12 rounded bg-primary mb-1" />
              <div className="h-2 w-16 rounded bg-muted" />
            </div>
          </div>
        </div>
        
        {/* Connection lines */}
        <div className="flex justify-center my-2">
          <svg width="200" height="24" viewBox="0 0 200 24" className="text-border">
            <path d="M30 0 L30 12 L100 12 M170 0 L170 12 L100 12 M100 0 L100 24" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="4 2" />
          </svg>
        </div>
        
        {/* Middle layer - Services */}
        <div className="mb-4 text-center">
          <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">Services</div>
          <div className="flex justify-center gap-3">
            <div className="rounded-lg border border-border bg-muted px-4 py-3">
              <div className="h-3 w-10 rounded bg-foreground/60 mb-1" />
              <div className="h-2 w-14 rounded bg-muted-foreground/20" />
            </div>
            <div className="rounded-lg border border-border bg-muted px-4 py-3">
              <div className="h-3 w-10 rounded bg-foreground/60 mb-1" />
              <div className="h-2 w-14 rounded bg-muted-foreground/20" />
            </div>
          </div>
        </div>
        
        {/* Connection lines */}
        <div className="flex justify-center my-2">
          <svg width="120" height="24" viewBox="0 0 120 24" className="text-border">
            <path d="M30 0 L30 12 L60 12 M90 0 L90 12 L60 12 M60 12 L60 24" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="4 2" />
          </svg>
        </div>
        
        {/* Bottom layer - Infrastructure */}
        <div className="text-center">
          <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">Infrastructure</div>
          <div className="inline-flex rounded-lg border-2 border-foreground/20 bg-foreground/5 px-6 py-3">
            <div className="h-4 w-24 rounded bg-foreground/40" />
          </div>
        </div>
      </div>
      
      {/* Authority badge */}
      <div className="absolute -bottom-4 -right-4 rounded-lg border border-border bg-card px-4 py-3 shadow-lg">
        <div className="text-2xl font-bold text-foreground">99.9%</div>
        <div className="text-xs text-muted-foreground">uptime target</div>
      </div>
    </div>
  )
}

export function ServiceArchitecture() {
  return (
    <section className="bg-card py-20 md:py-28 border-b border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
              Architecture
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Make Technical Decisions You Won&apos;t Regret
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              The right architecture saves money and pain for years. The wrong one creates technical debt that compounds. I help you make the right calls before you commit.
            </p>
            <p className="mt-4 text-base font-medium text-foreground">
              Designed for systems that need to hold up under real pressure.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                <span className="text-foreground/80">Technology selection that fits your scale and budget</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                <span className="text-foreground/80">Infrastructure planning for growth without waste</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                <span className="text-foreground/80">Technical audits that identify risk before it bites</span>
              </li>
            </ul>
            <p className="mt-6 text-sm text-muted-foreground italic">
              Experience designing systems for high-stakes environments where reliability isn&apos;t optional.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="gap-2 shadow-md">
                <Link href="#contact">
                  Get Architecture Guidance
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Link 
                href="/services/architecture" 
                className="text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
              >
                Learn more
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <ArchitectureVisual />
          </div>
        </div>
      </div>
    </section>
  )
}
