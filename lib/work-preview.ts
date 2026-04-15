export type WorkPreviewProject = {
  /** Stable fragment for /work#... deep links */
  id: string
  category: string
  client: string
  title: string
  excerpt: string
}

export const workPreviewProjects: WorkPreviewProject[] = [
  {
    id: "flip-it",
    category: "Commercial · Health Tech · Mobile + Web",
    client: "BOOST Health Labs",
    title: "flip* it",
    excerpt:
      "Chronic pain management platform — evidence-based tools, habit tracking, and a full rebrand across web and mobile.",
  },
  {
    id: "smart",
    category: "Commercial · Defence · Web Application",
    client: "Australian Defence · 12thLevel → Brownstone Consulting",
    title: "S.M.A.R.T",
    excerpt:
      "Defence-grade issues management — structured data, accountability, and auditability across complex environments.",
  },
  {
    id: "one-two",
    category: "Personal · Pre-Launch Website",
    client: "Solo — Design & Build",
    title: "one two",
    excerpt:
      "Pre-launch promotional site for a women's sports platform currently in development. Built to grow an early audience ahead of the app release.",
  },
]
