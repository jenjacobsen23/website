"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"

import { cn } from "@/lib/utils"

const SCROLL_THRESHOLD_PX = 16

const navLinkClass =
  "text-sm font-medium text-slate-300 transition-colors hover:text-white"

const ctaClass =
  "bg-[#00adb5] text-white shadow-sm hover:bg-[#009ca3] focus-visible:ring-offset-[#2d343e] h-7 min-h-0 gap-1.5 rounded-md px-2.5 text-xs font-semibold md:h-8 md:px-3 md:text-sm"

const mobileNavLinkClass =
  "flex min-h-12 items-center rounded-md px-3 text-base font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5be1e6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#2d343e]"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD_PX)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-white/10 shadow-sm transition-[background-color,backdrop-filter,border-color] duration-300 ease-out",
        scrolled
          ? "border-white/5 bg-[#2a3441]/60 backdrop-blur-lg"
          : "bg-[#2a3441]"
      )}
    >
      <div className="mx-auto flex min-h-[3.5rem] max-w-6xl items-center justify-between gap-3 px-4 py-2 md:min-h-[4.25rem] md:gap-4 md:px-6">
        <Link
          href="/"
          className="flex shrink-0 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5be1e6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#2d343e] rounded-sm"
        >
          <Image
            src="/logo-on-dark.svg"
            alt="Jen Jacobsen"
            width={200}
            height={53}
            className="h-10 w-auto md:hidden"
            priority
          />
          <Image
            src="/logo-on-dark.svg"
            alt="Jen Jacobsen"
            width={200}
            height={68}
            className="hidden h-16 w-auto md:block lg:h-[4.25rem]"
            priority
          />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/#services" className={navLinkClass}>
            Services
          </Link>
          <Link href="/work" className={navLinkClass}>
            Work
          </Link>
          <Link href="/#about" className={navLinkClass}>
            About
          </Link>
          <Link href="/#contact" className={navLinkClass}>
            Contact
          </Link>
        </nav>
        <div className="flex shrink-0 items-center gap-3">
          <Button asChild className={ctaClass}>
            <Link href="/#contact">Start a Project</Link>
          </Button>
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-10 w-10 shrink-0 text-slate-300 hover:bg-white/5 hover:text-white focus-visible:ring-[#5be1e6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#2d343e] md:hidden"
                aria-label="Open menu"
              >
                <Menu className="size-6" strokeWidth={2} aria-hidden />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className={cn(
                "w-[min(100%,20rem)] border-l border-white/10 bg-[#2d343e] p-0 text-slate-200 shadow-none transition ease-in-out data-[state=closed]:duration-200 data-[state=open]:duration-300",
                "[&>button]:text-slate-300 [&>button]:hover:text-white"
              )}
            >
              <SheetTitle className="sr-only">Site navigation</SheetTitle>
              <nav
                className="flex flex-col gap-0.5 p-6 pt-14"
                aria-label="Site"
              >
                <SheetClose asChild>
                  <Link href="/#services" className={mobileNavLinkClass}>
                    Services
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/work" className={mobileNavLinkClass}>
                    Work
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/#about" className={mobileNavLinkClass}>
                    About
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/#contact" className={mobileNavLinkClass}>
                    Contact
                  </Link>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
