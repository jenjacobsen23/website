"use client"

import { useEffect, type ComponentProps, type ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
}

/**
 * Clears the URL fragment on scroll so the address bar stays free of `#...` anchors.
 */
export function StripHashOnScroll() {
  useEffect(() => {
    const clearHash = () => {
      if (!window.location.hash) return
      const url = window.location.pathname + window.location.search
      window.history.replaceState(null, "", url)
    }
    window.addEventListener("scroll", clearHash, { passive: true })
    return () => window.removeEventListener("scroll", clearHash)
  }, [])
  return null
}

type ScrollToSectionButtonProps = ComponentProps<typeof Button> & { targetId: string }

export function ScrollToSectionButton({
  targetId,
  className,
  ...props
}: ScrollToSectionButtonProps) {
  return (
    <Button
      type="button"
      {...props}
      className={className}
      onClick={(e) => {
        scrollToId(targetId)
        props.onClick?.(e)
      }}
    />
  )
}

export function ScrollToSectionLink({
  targetId,
  className,
  children,
}: {
  targetId: string
  className?: string
  children: ReactNode
}) {
  return (
    <button
      type="button"
      className={cn(
        "cursor-pointer border-0 bg-transparent p-0 font-inherit text-inherit",
        className,
      )}
      onClick={() => scrollToId(targetId)}
    >
      {children}
    </button>
  )
}
