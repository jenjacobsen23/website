/** Links to the homepage contact section with ?project= to prefill the project type field. */
export type ContactProjectParam =
  | "new-website"
  | "website-refresh"
  | "web-app"
  | "mobile-app"
  | "system"
  | "architecture"
  | "local-business-refresh"
  | "other"

export function contactWithProject(project: ContactProjectParam) {
  return `/?project=${project}#contact`
}
