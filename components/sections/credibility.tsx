import { Shield, Building2, Heart, Rocket } from "lucide-react"

const industries = [
  { icon: Rocket, name: "Startup" },
  { icon: Heart, name: "Health" },
  { icon: Shield, name: "Defence" },
  { icon: Building2, name: "Enterprise" },
]

export function Credibility() {
  return (
    <section className="py-12 md:py-14">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-center md:gap-12">
          <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
            Experience Across
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {industries.map((industry) => (
              <div 
                key={industry.name}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <industry.icon className="size-4" />
                <span className="text-sm font-medium">{industry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
