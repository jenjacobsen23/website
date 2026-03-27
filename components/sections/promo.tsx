import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, MapPin } from "lucide-react"
import Link from "next/link"

export function Promo() {
  return (
    <section className="py-8 md:py-12">
      <div className="mx-auto max-w-5xl px-6">
        <p className="mb-6 text-center text-sm font-medium uppercase tracking-wide text-slate-500">
          Or, if you&apos;re a local business looking for a quick win...
        </p>
        <div className="relative overflow-hidden rounded-3xl border-2 border-slate-900 bg-slate-900 p-10 md:p-14">
          <div className="absolute -right-20 -top-20 size-64 rounded-full bg-white/5" />
          <div className="absolute -bottom-10 -left-10 size-40 rounded-full bg-white/5" />
          <div className="relative flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
            <div className="flex-1">
              <Badge className="mb-4 gap-1.5 border-white/20 bg-white/10 text-white hover:bg-white/10">
                <MapPin className="size-3" />
                For Local Businesses
              </Badge>
              <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Local Business Digital Refresh
              </h3>
              <p className="mt-3 max-w-lg text-lg text-slate-300">
                A focused package to modernize your online presence and attract more local customers.
              </p>
            </div>
            <Button asChild size="lg" className="shrink-0 gap-2 bg-white text-slate-900 hover:bg-slate-100">
              <Link href="/offers/local-business-refresh">
                See the Offer
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
