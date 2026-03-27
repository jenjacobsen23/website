"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

import { cn } from "@/lib/utils"

const SCROLL_THRESHOLD_PX = 16

const navLinkClass =
  "text-sm font-medium text-slate-300 transition-colors hover:text-white"

const ctaClass =
  "bg-[#00adb5] text-white shadow-sm hover:bg-[#009ca3] focus-visible:ring-offset-[#2d343e]"

export function Header() {
  const [scrolled, setScrolled] = useState(false)

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
          ? "border-white/5 bg-[#2d343e]/60 backdrop-blur-lg"
          : "bg-[#2d343e]"
      )}
    >
      <div className="mx-auto flex min-h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-6 py-2">
        <Link
          href="/"
          className="flex shrink-0 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5be1e6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#2d343e] rounded-sm"
        >
          <Image
            src="/logo-on-dark.svg"
            alt="Jen Jacobsen"
            width={200}
            height={68}
            className="h-[3.25rem] w-auto sm:h-16 md:h-[4.25rem]"
            priority
          />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/#services" className={navLinkClass}>
            Services
          </Link>
          <Link href="/#about" className={navLinkClass}>
            About
          </Link>
          <Link href="/#contact" className={navLinkClass}>
            Contact
          </Link>
        </nav>
        <Button asChild size="sm" className={ctaClass}>
          <Link href="/#contact">Start a Project</Link>
        </Button>
      </div>
    </header>
  )
}
