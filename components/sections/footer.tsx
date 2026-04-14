import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Mail } from "lucide-react"

import { site } from "@/lib/site"

const socialLinkClass =
  "rounded-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 px-6 sm:flex-row sm:items-start">
        <div className="flex flex-col items-center gap-3 sm:items-start">
          <Link
            href="/"
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
          >
            <Image
              src="/logo2.svg"
              alt="Jen Jacobsen"
              width={180}
              height={60}
              className="h-11 w-auto opacity-65 transition-opacity hover:opacity-100"
            />
          </Link>
          <p className="text-center text-sm text-muted-foreground sm:text-left">
            © {new Date().getFullYear()} Jen Jacobsen. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-8">
          <nav className="flex gap-6">
            <Link
              href="/#services"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Services
            </Link>
            <Link
              href="/work"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Work
            </Link>
            <Link
              href="/#about"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              About
            </Link>
            <Link
              href="/#contact"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact
            </Link>
          </nav>
          <div
            className="flex items-center gap-4"
            role="navigation"
            aria-label="Social links"
          >
            <a
              href={`mailto:${site.email}`}
              className={socialLinkClass}
              aria-label={`Email ${site.email}`}
            >
              <Mail className="size-5" aria-hidden />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={socialLinkClass}
              aria-label="LinkedIn profile"
            >
              <Linkedin className="size-5" aria-hidden />
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className={socialLinkClass}
              aria-label="GitHub profile"
            >
              <Github className="size-5" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
