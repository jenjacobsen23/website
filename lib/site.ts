/** Contact email and social profile URLs for the site footer and elsewhere. */
export const site = {
  /** Public inbox (mailto + matches form recipient when CONTACT_EMAIL is unset). Set NEXT_PUBLIC_CONTACT_EMAIL in .env.local. */
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@jenjacobsen.com",
  linkedin: "https://www.linkedin.com/in/jen-jacobsen/",
  github: "https://github.com/jenjacobsen23",
} as const
