import Link from "next/link"
import { Shield, Building2, Heart, Rocket, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { workPreviewProjects } from "@/lib/work-preview"

const industries = [
  { icon: Rocket, name: "Startup" },
  { icon: Heart, name: "Health" },
  { icon: Shield, name: "Defence" },
  { icon: Building2, name: "Enterprise" },
]

export function Credibility() {
  return (
    <section
      id="work"
      className="bg-[#161b26] py-14 md:py-16"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-center md:gap-12">
          <p className="text-sm font-medium uppercase tracking-wide text-slate-400">
            Experience Across
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="flex items-center gap-2 text-slate-300"
              >
                <industry.icon className="size-4 text-[#5be1e6]/90" />
                <span className="text-sm font-medium">{industry.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 md:mt-16">
          <p className="mb-2 text-center text-sm font-medium uppercase tracking-wide text-slate-400">
            Selected work
          </p>
          <h2 className="mb-8 text-center text-2xl font-semibold tracking-tight text-white md:text-3xl">
            From the portfolio
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {workPreviewProjects.map((project) => (
              <Link
                key={project.id}
                href={`/work#${project.id}`}
                className="group block h-full rounded-xl outline-none ring-offset-2 ring-offset-[#0f1117] transition-shadow focus-visible:ring-2 focus-visible:ring-[#5be1e6]"
              >
                <Card className="h-full gap-0 border-white/10 bg-[#2a3441] py-5 text-slate-300 shadow-none transition-colors group-hover:border-[#5be1e6]/25 group-hover:bg-[#323d4d]">
                  <CardHeader className="gap-3 px-5 pb-0">
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                      {project.category}
                    </p>
                    <CardTitle className="text-lg leading-snug text-white">
                      {project.title}
                    </CardTitle>
                    <p className="text-sm font-medium text-slate-300">
                      {project.client}
                    </p>
                    <CardDescription className="text-sm leading-relaxed text-slate-400">
                      {project.excerpt}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Button
              asChild
              size="lg"
              className="gap-2 bg-[#00adb5] text-white shadow-sm hover:bg-[#009ca3]"
            >
              <Link href="/work">
                View all projects
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
