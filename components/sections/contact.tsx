"use client"

import { Suspense, useState, useEffect, type FormEvent } from "react"
import { useSearchParams } from "next/navigation"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, Loader2 } from "lucide-react"

const projectTypes = [
  { value: "new-website", label: "New Website" },
  { value: "website-refresh", label: "Website Refresh" },
  { value: "web-app", label: "Web Application" },
  { value: "mobile-app", label: "Mobile App" },
  { value: "system", label: "Custom System / Automation" },
  { value: "architecture", label: "Technical Architecture / Planning" },
  { value: "local-business-refresh", label: "Local Business Digital Refresh" },
  { value: "other", label: "Other" },
]

function ContactInner() {
  const searchParams = useSearchParams()
  const [projectType, setProjectType] = useState("")
  const [pending, setPending] = useState(false)
  const isOther = projectType === "other"

  useEffect(() => {
    const projectParam = searchParams.get("project")
    if (projectParam && projectTypes.some(pt => pt.value === projectParam)) {
      setProjectType(projectParam)
    }
  }, [searchParams])

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!projectType) {
      toast.error("Please select a project type.")
      return
    }
    const form = e.currentTarget
    const fd = new FormData(form)
    const name = String(fd.get("name") ?? "").trim()
    const email = String(fd.get("email") ?? "").trim()
    const message = String(fd.get("message") ?? "").trim()
    const projectTypeOther = isOther
      ? String(fd.get("project-type-other") ?? "").trim()
      : undefined

    if (isOther && !projectTypeOther) {
      toast.error("Please describe your project type.")
      return
    }

    setPending(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "contact",
          name,
          email,
          projectType,
          projectTypeOther: projectTypeOther || undefined,
          message,
        }),
      })
      const data = (await res.json().catch(() => ({}))) as { error?: string }
      if (!res.ok) {
        toast.error(data.error ?? "Something went wrong. Please try again.")
        return
      }
      toast.success("Message sent. I’ll get back to you soon.")
      form.reset()
      setProjectType("")
    } catch {
      toast.error("Network error. Please try again.")
    } finally {
      setPending(false)
    }
  }

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-lg">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Let&apos;s Build Something That Actually Works
            </h2>
            <p className="mt-4 text-muted-foreground">
              Tell me what you&apos;re trying to solve — I&apos;ll help you figure out the right approach.
            </p>
          </div>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <Input 
                  id="name" 
                  name="name" 
                  placeholder="Your name" 
                  required 
                  className="bg-card"
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  placeholder="you@example.com" 
                  required 
                  className="bg-card"
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="project-type">Project Type</FieldLabel>
                <Select value={projectType} onValueChange={setProjectType} name="project-type">
                  <SelectTrigger id="project-type" className="w-full bg-card">
                    <SelectValue placeholder="Select a project type" />
                  </SelectTrigger>
                  <SelectContent>
                    {projectTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>
              {isOther && (
                <Field>
                  <FieldLabel htmlFor="project-type-other">Please describe</FieldLabel>
                  <Input 
                    id="project-type-other" 
                    name="project-type-other" 
                    placeholder="What type of project are you looking for?" 
                    required 
                    className="bg-card"
                  />
                </Field>
              )}
              <Field>
                <FieldLabel htmlFor="message">What are you working on?</FieldLabel>
                <Textarea 
                  id="message" 
                  name="message" 
                  placeholder="Tell me about your project or problem..." 
                  rows={4}
                  required 
                  className="bg-card"
                />
              </Field>
            </FieldGroup>
            <Button
              type="submit"
              size="lg"
              className="w-full gap-2 shadow-md"
              disabled={pending}
            >
              {pending ? (
                <Loader2 className="size-4 animate-spin" />
              ) : (
                <>
                  Send Message
                  <ArrowRight className="size-4" />
                </>
              )}
            </Button>
            <p className="text-center text-sm text-muted-foreground">
              Expect a response within 24 hours.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

function ContactFallback() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-lg space-y-5">
          <div className="mb-8 space-y-3 text-center">
            <div className="mx-auto h-9 max-w-md animate-pulse rounded-md bg-muted" />
            <div className="mx-auto h-5 max-w-sm animate-pulse rounded-md bg-muted" />
          </div>
          <div className="h-64 animate-pulse rounded-lg bg-muted" />
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <Suspense fallback={<ContactFallback />}>
      <ContactInner />
    </Suspense>
  )
}
