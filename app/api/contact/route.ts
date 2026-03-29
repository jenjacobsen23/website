import { Resend } from "resend"
import { NextResponse } from "next/server"
import { z } from "zod"

import { getContactInboundEmail } from "@/lib/contact-email"

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

const contactPayload = z.object({
  source: z.literal("contact"),
  name: z.string().min(1).max(200),
  email: z.string().email(),
  projectType: z.string().min(1).max(100),
  projectTypeOther: z.string().max(500).optional(),
  message: z.string().min(1).max(10000),
})

const offerModalEntryMode = z.enum([
  "checkup",
  "new-website",
  "website-refresh",
  "booking-setup",
])

const eligibilityPayload = z.object({
  source: z.literal("eligibility"),
  entryMode: offerModalEntryMode.optional(),
  postcode: z.string().min(1).max(10),
  serviceType: z.string().min(1).max(50),
  hasWebsite: z.enum(["yes", "no"]),
  websiteUrl: z.string().max(500).optional(),
  businessType: z.string().max(200).optional(),
  goal: z.string().max(5000).optional(),
  name: z.string().min(1).max(200),
  email: z.string().email(),
  phone: z.string().max(50).optional(),
})

const bodySchema = z.discriminatedUnion("source", [contactPayload, eligibilityPayload])

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.FROM_EMAIL?.trim()
  const to = getContactInboundEmail()

  if (!apiKey || !from || !to) {
    return NextResponse.json(
      { error: "Email is not configured. Set RESEND_API_KEY, FROM_EMAIL, and NEXT_PUBLIC_CONTACT_EMAIL (or CONTACT_EMAIL)." },
      { status: 503 }
    )
  }

  let json: unknown
  try {
    json = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 })
  }

  const parsed = bodySchema.safeParse(json)
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 })
  }

  const data = parsed.data
  const resend = new Resend(apiKey)

  let subject: string
  let html: string
  const replyTo = data.email

  if (data.source === "contact") {
    subject = `Website contact: ${data.name}`
    const other =
      data.projectType === "other" && data.projectTypeOther
        ? `<p><strong>Other (describe):</strong> ${escapeHtml(data.projectTypeOther)}</p>`
        : ""
    html = `
      <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
      <p><strong>Project type:</strong> ${escapeHtml(data.projectType)}</p>
      ${other}
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(data.message).replace(/\n/g, "<br/>")}</p>
    `
  } else {
    subject = `Local business enquiry: ${data.name} (${data.postcode})`
    const website =
      data.hasWebsite === "yes" && data.websiteUrl
        ? `<p><strong>Website:</strong> ${escapeHtml(data.websiteUrl)}</p>`
        : ""
    const biz = data.businessType
      ? `<p><strong>Business type:</strong> ${escapeHtml(data.businessType)}</p>`
      : ""
    const goal = data.goal
      ? `<p><strong>Goal:</strong></p><p>${escapeHtml(data.goal).replace(/\n/g, "<br/>")}</p>`
      : ""
    const phone = data.phone
      ? `<p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>`
      : ""
    const entry =
      data.entryMode != null
        ? `<p><strong>Entry:</strong> ${escapeHtml(data.entryMode)}</p>`
        : ""
    html = `
      <p><strong>Source:</strong> Eligibility modal (Melbourne offer)</p>
      ${entry}
      <p><strong>Postcode:</strong> ${escapeHtml(data.postcode)}</p>
      <p><strong>Service interest:</strong> ${escapeHtml(data.serviceType)}</p>
      <p><strong>Has website:</strong> ${escapeHtml(data.hasWebsite)}</p>
      ${website}
      ${biz}
      ${goal}
      <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
      ${phone}
    `
  }

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo,
    subject,
    html: `<div style="font-family:system-ui,sans-serif;font-size:14px;line-height:1.5">${html}</div>`,
  })

  if (error) {
    console.error("[contact]", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
