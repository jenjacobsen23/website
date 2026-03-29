/** Modal entry modes for the Local Business offer flow (shared by server + client). */
export type OfferModalMode =
  | "checkup"
  | "new-website"
  | "website-refresh"
  | "booking-setup"

/** Maps package `projectType` from the offer page to modal entry mode. */
export function projectTypeToOfferMode(projectType: string): OfferModalMode {
  if (projectType === "system") return "booking-setup"
  if (projectType === "new-website") return "new-website"
  if (projectType === "website-refresh") return "website-refresh"
  return "checkup"
}
