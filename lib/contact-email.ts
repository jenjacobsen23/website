/** Inbox for contact and enquiry emails. Set CONTACT_EMAIL server-side to hide from the client, or use NEXT_PUBLIC_CONTACT_EMAIL only. */
export function getContactInboundEmail(): string | undefined {
  const direct = process.env.CONTACT_EMAIL?.trim()
  const publicInbox = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim()
  return direct || publicInbox
}
