import { Quote } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote:
      "Working with Jen is a Product Manager's dream — proactive, organised, and always thinking ahead.",
    attribution: "Product Manager, startup",
  },
  {
    quote:
      "Reliable, skilled, and easy to work with — Jen consistently delivers code that fits business needs.",
    attribution: "Founder, startup",
  },
  {
    quote:
      "We would not be in such a strong position today without Jen's professionalism, technical depth, and leadership.",
    attribution: "Project Manager, defence",
  },
]

export function Testimonials() {
  return (
    <section
      className="border-y border-border bg-background py-16 md:py-20"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-5xl px-6">
        <h2
          id="testimonials-heading"
          className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
        >
          What Clients Say
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.attribution} className="gap-0 py-0 shadow-sm">
              <CardContent className="relative px-5 pb-6 pt-7">
                <Quote
                  className="absolute left-5 top-5 size-4 text-primary/45"
                  aria-hidden
                  strokeWidth={1.5}
                />
                <blockquote className="pl-8 text-base leading-snug text-foreground">
                  <p>&ldquo;{t.quote}&rdquo;</p>
                </blockquote>
                <p className="mt-4 pl-8 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  — {t.attribution}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
