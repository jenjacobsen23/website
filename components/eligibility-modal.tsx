"use client"

import { useState } from "react"
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
  DialogTrigger,
} from "@/components/ui/dialog"
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react"
import Link from "next/link"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

// Melbourne postcodes (3xxx range)
const isMelbournePostcode = (postcode: string) => {
  const trimmed = postcode.trim()
  return trimmed.length === 4 && trimmed.startsWith("3")
}

type ModalState = "postcode" | "form" | "success" | "not-eligible"

interface EligibilityModalProps {
  buttonText?: string
  buttonSize?: "default" | "sm" | "lg" | "icon"
  className?: string
}

export function EligibilityModal({ 
  buttonText = "Check Eligibility",
  buttonSize = "lg",
  className
}: EligibilityModalProps) {
  const [open, setOpen] = useState(false)
  const [state, setState] = useState<ModalState>("postcode")
  
  // Form state
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

  const handlePostcodeCheck = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!isMelbournePostcode(postcode)) {
      setState("not-eligible")
      return
    }
    
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
      // Reset state when closing
      setTimeout(() => {
        setState("postcode")
        setPostcode("")
        setServiceType("")
        setHasWebsite("")
        setWebsiteUrl("")
        setBusinessType("")
        setGoal("")
        setName("")
        setEmail("")
        setPhone("")
      }, 200)
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button size={buttonSize} className={cn("cursor-pointer gap-2", className)}>
          {buttonText}
          <ArrowRight className="size-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg [&_[data-slot=dialog-close]]:cursor-pointer">
        {/* Step 1: Postcode Check */}
        {state === "postcode" && (
          <>
            <DialogHeader>
              <DialogTitle>Check Eligibility</DialogTitle>
              <DialogDescription>
                This offer is designed for Melbourne-based businesses. Enter your business postcode to check eligibility.
              </DialogDescription>
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
                Check Eligibility
                <ArrowRight className="size-4" />
              </Button>
            </form>
          </>
        )}

        {/* Step 2: Full Form (if eligible) */}
        {state === "form" && (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <CheckCircle2 className="size-5 text-primary" />
                You&apos;re eligible
              </DialogTitle>
              <DialogDescription>
                Great — tell me a bit more about your business and what you&apos;re looking for.
              </DialogDescription>
            </DialogHeader>
            
            <form onSubmit={handleSubmit} className="mt-6">
              <FieldGroup>
                {/* Service Type */}
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
                      <label htmlFor="new-website" className="text-sm text-foreground cursor-pointer">
                        New Website
                      </label>
                    </div>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem
                        value="website-refresh"
                        id="website-refresh"
                        className="cursor-pointer"
                      />
                      <label htmlFor="website-refresh" className="text-sm text-foreground cursor-pointer">
                        Website Refresh
                      </label>
                    </div>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem
                        value="booking-setup"
                        id="booking-setup"
                        className="cursor-pointer"
                      />
                      <label htmlFor="booking-setup" className="text-sm text-foreground cursor-pointer">
                        Online Booking Setup
                      </label>
                    </div>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem
                        value="not-sure"
                        id="not-sure"
                        className="cursor-pointer"
                      />
                      <label htmlFor="not-sure" className="text-sm text-foreground cursor-pointer">
                        Not sure
                      </label>
                    </div>
                  </RadioGroup>
                </Field>

                {/* Website Status */}
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
                      <label htmlFor="has-website-yes" className="text-sm text-foreground cursor-pointer">
                        Yes
                      </label>
                    </div>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem
                        value="no"
                        id="has-website-no"
                        className="cursor-pointer"
                      />
                      <label htmlFor="has-website-no" className="text-sm text-foreground cursor-pointer">
                        No
                      </label>
                    </div>
                  </RadioGroup>
                </Field>

                {/* Website URL - conditional */}
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

                {/* Business Type */}
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

                {/* Goal */}
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

                {/* Contact Info */}
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
                      Submit Enquiry
                      <ArrowRight className="size-4" />
                    </>
                  )}
                </Button>
              </FieldGroup>
            </form>
          </>
        )}

        {/* Success State */}
        {state === "success" && (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <CheckCircle2 className="size-5 text-primary" />
                You&apos;ve taken the first step
              </DialogTitle>
              <DialogDescription className="text-pretty mt-2">
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

        {/* Not Eligible State */}
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
  )
}
