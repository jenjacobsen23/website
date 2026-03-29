"use client"

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Field, FieldGroup, FieldLabel, FieldDescription } from "@/components/ui/field"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react"
import Link from "next/link"
import { toast } from "sonner"
import { cn } from "@/lib/utils"
import type { OfferModalMode } from "@/lib/offer-modal-modes"

// Melbourne postcodes (3xxx range)
const isMelbournePostcode = (postcode: string) => {
  const trimmed = postcode.trim()
  return trimmed.length === 4 && trimmed.startsWith("3")
}

const POSTCODE_COPY: Record<
  OfferModalMode,
  { title: string; description: string; button: string }
> = {
  checkup: {
    title: "Free Digital Checkup",
    description:
      "This offer is for Melbourne-based businesses. Enter your business postcode so I can tailor your free checkup.",
    button: "Get Free Digital Checkup",
  },
  "new-website": {
    title: "Start Your New Website",
    description:
      "This offer is for Melbourne-based businesses. Enter your business postcode to confirm availability and get started with your new website.",
    button: "Start My New Website",
  },
  "website-refresh": {
    title: "Start Your Website Refresh",
    description:
      "This offer is for Melbourne-based businesses. Enter your business postcode to confirm availability and get started with your website refresh.",
    button: "Start My Website Refresh",
  },
  "booking-setup": {
    title: "Start Your Booking Setup",
    description:
      "This offer is for Melbourne-based businesses. Enter your business postcode to confirm availability and get started with your booking setup.",
    button: "Start My Booking Setup",
  },
}

function applyFormDefaultsForMode(mode: OfferModalMode): {
  serviceType: string
  hasWebsite: string
  websiteUrl: string
} {
  switch (mode) {
    case "checkup":
      return { serviceType: "not-sure", hasWebsite: "", websiteUrl: "" }
    case "new-website":
      return { serviceType: "new-website", hasWebsite: "no", websiteUrl: "" }
    case "website-refresh":
      return { serviceType: "website-refresh", hasWebsite: "yes", websiteUrl: "" }
    case "booking-setup":
      return { serviceType: "booking-setup", hasWebsite: "", websiteUrl: "" }
    default:
      return { serviceType: "", hasWebsite: "", websiteUrl: "" }
  }
}

type ModalState = "postcode" | "form" | "success" | "not-eligible"

type OfferModalContextValue = {
  openModal: (mode: OfferModalMode) => void
}

const OfferModalContext = createContext<OfferModalContextValue | null>(null)

export function useOfferModal() {
  const ctx = useContext(OfferModalContext)
  if (!ctx) {
    throw new Error("useOfferModal must be used within OfferModalProvider")
  }
  return ctx
}

export function OfferModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const [mode, setMode] = useState<OfferModalMode>("checkup")
  const [state, setState] = useState<ModalState>("postcode")

  const [postcode, setPostcode] = useState("")
  const [serviceType, setServiceType] = useState("")
  const [hasWebsite, setHasWebsite] = useState("")
  const [websiteUrl, setWebsiteUrl] = useState("")
  const [businessType, setBusinessType] = useState("")
  const [goal, setGoal] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [submitting, setSubmitting] = useState(false)

  const resetFormFields = useCallback(() => {
    setPostcode("")
    setServiceType("")
    setHasWebsite("")
    setWebsiteUrl("")
    setBusinessType("")
    setGoal("")
    setName("")
    setEmail("")
    setPhone("")
  }, [])

  const openModal = useCallback(
    (nextMode: OfferModalMode) => {
      setMode(nextMode)
      setState("postcode")
      resetFormFields()
      setOpen(true)
    },
    [resetFormFields],
  )

  const postcodeCopy = POSTCODE_COPY[mode]

  const handlePostcodeCheck = (e: React.FormEvent) => {
    e.preventDefault()

    if (!isMelbournePostcode(postcode)) {
      setState("not-eligible")
      return
    }

    const defaults = applyFormDefaultsForMode(mode)
    setServiceType(defaults.serviceType)
    setHasWebsite(defaults.hasWebsite)
    setWebsiteUrl(defaults.websiteUrl)
    setState("form")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "eligibility",
          entryMode: mode,
          postcode: postcode.trim(),
          serviceType,
          hasWebsite,
          websiteUrl: websiteUrl.trim() || undefined,
          businessType: businessType.trim() || undefined,
          goal: goal.trim() || undefined,
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim() || undefined,
        }),
      })
      const data = (await res.json().catch(() => ({}))) as { error?: string }
      if (!res.ok) {
        toast.error(data.error ?? "Something went wrong. Please try again.")
        return
      }
      setState("success")
    } catch {
      toast.error("Network error. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen)
    if (!newOpen) {
      setTimeout(() => {
        setState("postcode")
        resetFormFields()
      }, 200)
    }
  }

  const contextValue = useMemo(() => ({ openModal }), [openModal])

  return (
    <OfferModalContext.Provider value={contextValue}>
      {children}
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg [&_[data-slot=dialog-close]]:cursor-pointer">
          {state === "postcode" && (
            <>
              <DialogHeader>
                <DialogTitle>{postcodeCopy.title}</DialogTitle>
                <DialogDescription>{postcodeCopy.description}</DialogDescription>
              </DialogHeader>

              <form onSubmit={handlePostcodeCheck} className="mt-6">
                <Field>
                  <FieldLabel htmlFor="postcode-check" className="text-sm font-medium">
                    Business postcode
                  </FieldLabel>
                  <Input
                    id="postcode-check"
                    type="text"
                    placeholder="e.g. 3000"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                    required
                    maxLength={4}
                    className="mt-1.5"
                    autoFocus
                  />
                  <FieldDescription className="mt-1.5">
                    Melbourne postcodes start with 3
                  </FieldDescription>
                </Field>

                <Button type="submit" className="mt-6 w-full cursor-pointer gap-2">
                  {postcodeCopy.button}
                  <ArrowRight className="size-4" />
                </Button>
              </form>
            </>
          )}

          {state === "form" && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <CheckCircle2 className="size-5 text-primary" />
                  You&apos;re in the Melbourne area
                </DialogTitle>
                <DialogDescription>
                  Great — tell me a bit more about your business and what you&apos;re looking for.
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="mt-6">
                <FieldGroup>
                  <Field>
                    <FieldLabel className="text-sm font-medium">
                      What are you looking for? <span className="text-destructive">*</span>
                    </FieldLabel>
                    <RadioGroup
                      value={serviceType}
                      onValueChange={setServiceType}
                      required
                      className="mt-2"
                    >
                      <div className="flex items-center gap-3">
                        <RadioGroupItem
                          value="new-website"
                          id="new-website"
                          className="cursor-pointer"
                        />
                        <label htmlFor="new-website" className="cursor-pointer text-sm text-foreground">
                          New Website
                        </label>
                      </div>
                      <div className="flex items-center gap-3">
                        <RadioGroupItem
                          value="website-refresh"
                          id="website-refresh"
                          className="cursor-pointer"
                        />
                        <label htmlFor="website-refresh" className="cursor-pointer text-sm text-foreground">
                          Website Refresh
                        </label>
                      </div>
                      <div className="flex items-center gap-3">
                        <RadioGroupItem
                          value="booking-setup"
                          id="booking-setup"
                          className="cursor-pointer"
                        />
                        <label htmlFor="booking-setup" className="cursor-pointer text-sm text-foreground">
                          Online Booking Setup
                        </label>
                      </div>
                      <div className="flex items-center gap-3">
                        <RadioGroupItem
                          value="not-sure"
                          id="not-sure"
                          className="cursor-pointer"
                        />
                        <label htmlFor="not-sure" className="cursor-pointer text-sm text-foreground">
                          Not sure / Need guidance
                        </label>
                      </div>
                    </RadioGroup>
                  </Field>

                  <Field>
                    <FieldLabel className="text-sm font-medium">
                      Do you currently have a website? <span className="text-destructive">*</span>
                    </FieldLabel>
                    <RadioGroup
                      value={hasWebsite}
                      onValueChange={setHasWebsite}
                      required
                      className="mt-2"
                    >
                      <div className="flex items-center gap-3">
                        <RadioGroupItem
                          value="yes"
                          id="has-website-yes"
                          className="cursor-pointer"
                        />
                        <label htmlFor="has-website-yes" className="cursor-pointer text-sm text-foreground">
                          Yes
                        </label>
                      </div>
                      <div className="flex items-center gap-3">
                        <RadioGroupItem
                          value="no"
                          id="has-website-no"
                          className="cursor-pointer"
                        />
                        <label htmlFor="has-website-no" className="cursor-pointer text-sm text-foreground">
                          No
                        </label>
                      </div>
                    </RadioGroup>
                  </Field>

                  {hasWebsite === "yes" && (
                    <Field>
                      <FieldLabel htmlFor="website-url" className="text-sm font-medium">
                        Website URL
                      </FieldLabel>
                      <Input
                        id="website-url"
                        type="url"
                        placeholder="https://"
                        value={websiteUrl}
                        onChange={(e) => setWebsiteUrl(e.target.value)}
                        className="mt-1.5"
                      />
                    </Field>
                  )}

                  <Field>
                    <FieldLabel htmlFor="business-type" className="text-sm font-medium">
                      What kind of business is this?
                    </FieldLabel>
                    <Input
                      id="business-type"
                      type="text"
                      placeholder="e.g. Hair salon, physio, mechanic"
                      value={businessType}
                      onChange={(e) => setBusinessType(e.target.value)}
                      className="mt-1.5"
                    />
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="goal" className="text-sm font-medium">
                      What would you like to improve?
                    </FieldLabel>
                    <Textarea
                      id="goal"
                      placeholder="More bookings, better visibility, modern look…"
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                      rows={2}
                      className="mt-1.5 resize-none"
                    />
                  </Field>

                  <div className="border-t border-border pt-6">
                    <p className="mb-4 text-sm font-medium text-foreground">Contact details</p>

                    <div className="space-y-4">
                      <Field>
                        <FieldLabel htmlFor="name" className="text-sm font-medium">
                          Name <span className="text-destructive">*</span>
                        </FieldLabel>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Your name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          className="mt-1.5"
                        />
                      </Field>

                      <Field>
                        <FieldLabel htmlFor="email" className="text-sm font-medium">
                          Email <span className="text-destructive">*</span>
                        </FieldLabel>
                        <Input
                          id="email"
                          type="email"
                          placeholder="you@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="mt-1.5"
                        />
                      </Field>

                      <Field>
                        <FieldLabel htmlFor="phone" className="text-sm font-medium">
                          Phone <span className="text-muted-foreground font-normal">(optional)</span>
                        </FieldLabel>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="04XX XXX XXX"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="mt-1.5"
                        />
                      </Field>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="mt-2 w-full cursor-pointer gap-2"
                    disabled={submitting}
                  >
                    {submitting ? (
                      <Loader2 className="size-4 animate-spin" />
                    ) : (
                      <>
                        Send my details
                        <ArrowRight className="size-4" />
                      </>
                    )}
                  </Button>
                </FieldGroup>
              </form>
            </>
          )}

          {state === "success" && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <CheckCircle2 className="size-5 text-primary" />
                  You&apos;ve taken the first step
                </DialogTitle>
                <DialogDescription className="mt-2 text-pretty">
                  Getting started is often the hardest part — so well done for putting your business forward.
                  I&apos;ll read what you&apos;ve shared and be in touch within 24 hours.
                </DialogDescription>
              </DialogHeader>

              <Button
                variant="outline"
                className="w-full cursor-pointer"
                onClick={() => setOpen(false)}
              >
                Close
              </Button>
            </>
          )}

          {state === "not-eligible" && (
            <>
              <DialogHeader>
                <DialogTitle>This offer is for Melbourne businesses</DialogTitle>
                <DialogDescription>
                  This package is currently focused on Melbourne-based businesses, but you can still enquire about a standard project.
                </DialogDescription>
              </DialogHeader>
              <div className="mt-6 flex flex-col gap-3">
                <Button asChild className="w-full cursor-pointer gap-2">
                  <Link href="/#services">
                    View Standard Services
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full cursor-pointer">
                  <Link href="/?project=website-refresh#contact">
                    Contact Me Anyway
                  </Link>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </OfferModalContext.Provider>
  )
}

interface OfferModalCheckupButtonProps {
  buttonText?: string
  buttonSize?: "default" | "sm" | "lg" | "icon"
  className?: string
}

/** Primary CTA: opens the shared modal in checkup mode. */
export function OfferModalCheckupButton({
  buttonText = "Get My Free Digital Checkup",
  buttonSize = "lg",
  className,
}: OfferModalCheckupButtonProps) {
  const { openModal } = useOfferModal()
  return (
    <Button
      type="button"
      size={buttonSize}
      className={cn("cursor-pointer gap-2", className)}
      onClick={() => openModal("checkup")}
    >
      {buttonText}
      <ArrowRight className="size-4" />
    </Button>
  )
}

/** Inline link style: opens the same modal in checkup mode (e.g. helper text below service cards). */
export function OfferModalCheckupLink({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) {
  const { openModal } = useOfferModal()
  return (
    <button
      type="button"
      className={cn(
        "cursor-pointer border-0 bg-transparent p-0 font-inherit text-inherit",
        className,
      )}
      onClick={() => openModal("checkup")}
    >
      {children}
    </button>
  )
}

interface OfferModalServiceButtonProps {
  mode: OfferModalMode
  className?: string
  children: ReactNode
}

/** Opens the same modal with a service-specific entry (postcode copy + form defaults). */
export function OfferModalServiceButton({ mode, className, children }: OfferModalServiceButtonProps) {
  const { openModal } = useOfferModal()
  return (
    <Button
      type="button"
      variant="outline"
      className={cn("w-full cursor-pointer gap-2", className)}
      onClick={() => openModal(mode)}
    >
      {children}
    </Button>
  )
}

/** @deprecated Use OfferModalProvider + OfferModalCheckupButton */
export const EligibilityModal = OfferModalCheckupButton

export type { OfferModalMode } from "@/lib/offer-modal-modes"
export { projectTypeToOfferMode } from "@/lib/offer-modal-modes"
