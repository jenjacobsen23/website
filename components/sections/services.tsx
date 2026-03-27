import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe, Smartphone, Settings2, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "A new site or a complete refresh that converts.",
    forWho: "You need a website that works harder for you.",
    href: "/services/websites",
    cta: "Get a Website",
  },
  {
    icon: Smartphone,
    title: "App & System Development",
    description: "Custom software that streamlines your operations.",
    forWho: "You need a tool built for your workflow.",
    href: "/services/apps",
    cta: "Build a System",
  },
  {
    icon: Settings2,
    title: "Technical Architecture",
    description: "Strategic guidance for your digital infrastructure.",
    forWho: "You need to make the right technical decisions.",
    href: "/services/architecture",
    cta: "Plan Your Stack",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wide text-slate-500">
            Pick your path
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            What do you need help with?
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <Card 
              key={service.title} 
              className="group flex flex-col border-2 border-slate-200 bg-white transition-all duration-200 hover:border-slate-900 hover:shadow-lg"
            >
              <CardHeader className="flex-1 pb-4">
                <div className="mb-5 flex size-14 items-center justify-center rounded-xl bg-slate-900 text-white">
                  <service.icon className="size-7" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="mt-2 text-base text-slate-600">
                  {service.description}
                </CardDescription>
                <p className="mt-4 text-sm font-medium text-slate-900">{service.forWho}</p>
              </CardHeader>
              <CardFooter className="pt-0">
                <Button asChild className="w-full gap-2 bg-slate-900 hover:bg-slate-800">
                  <Link href={service.href}>
                    {service.cta}
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
