import Link from "next/link"
import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"

export const metadata = {
  title: "Work & Projects — Jen Jacobsen",
  description:
    "Commercial and personal projects — health tech, defence systems, and products built for the real world.",
}

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-[#0f1117]">
      <Header />
      <main className="work-page scroll-smooth">
        <div className="hero bg-[#2a3441]">
          <div className="hero-eyebrow fade-up fade-up-1">Work & Projects</div>
          <h1 className="fade-up fade-up-2">
            Built for the
            <br />
            <em>real world.</em>
          </h1>
          <p className="fade-up fade-up-3">
            Over nine years of building systems that actually get used - in
            defence, health tech, and beyond. Here&apos;s a cross-section of
            what that looks like in practice.
          </p>
          <div className="hero-stats fade-up fade-up-4">
            <div className="stat-item">
              <div className="stat-num">
                9<span>+</span>
              </div>
              <div className="stat-label">Years experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">2</div>
              <div className="stat-label">Headhunted roles</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">1</div>
              <div className="stat-label">Industry award</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">
                6<span>+</span>
              </div>
              <div className="stat-label">Projects shipped</div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="section-header">
            <span className="section-label">Commercial</span>
            <h2 className="section-title">Professional Work</h2>
            <div className="section-rule" />
          </div>

          <div className="project-card">
            <div className="project-card-inner">
              <div className="project-info">
                <div>
                  <div className="project-meta">
                    <span className="project-type">
                      Health Tech · Mobile + Web
                    </span>
                    <span className="project-year">2018–2019 · 2024–2025</span>
                    <span className="headhunted-badge">★ Headhunted</span>
                  </div>
                  <div className="project-client">BOOST Health Labs</div>
                  <h3 className="project-title">flip* it</h3>
                  <div className="project-subtitle">
                    Formerly known as BrainChanger
                  </div>
                  <p className="project-desc">
                    A chronic pain management platform helping users retrain
                    their relationship with pain through evidence-based tools and
                    daily habit tracking. Originally built as BrainChanger in
                    2018–2019, I returned in 2024 as a consultant and stepped
                    into a lead developer role — overseeing a full rebrand to
                    flip* it in 2025, driving the technical strategy and
                    implementation of the new identity across web and mobile.
                  </p>
                </div>
                <div className="project-details">
                  <div className="detail-row">
                    <span className="detail-label">Role</span>
                    <span className="detail-value">
                      Junior Developer → Lead Developer / Consultant
                    </span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Timeline</span>
                    <span className="detail-value">
                      2018–2019 (BrainChanger) · 2024–2025 (flip* it)
                    </span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Stack</span>
                    <div className="tech-tags">
                      <span className="tech-tag">Angular</span>
                      <span className="tech-tag">React Native</span>
                      <span className="tech-tag">C# .NET</span>
                      <span className="tech-tag">Entity Framework</span>
                      <span className="tech-tag">Dapper</span>
                      <span className="tech-tag">SQL</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-mockup">
                <div className="mockup-bg-pattern" />
                <div className="mockup-placeholder">
                  <div className="browser-frame">
                    <div className="browser-bar">
                      <div className="browser-dot r" />
                      <div className="browser-dot y" />
                      <div className="browser-dot g" />
                      <div className="browser-url" />
                    </div>
                    <div className="browser-content">
                      <div className="browser-content-placeholder">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          aria-hidden
                        >
                          <rect
                            x="3"
                            y="3"
                            width="18"
                            height="18"
                            rx="2"
                          />
                          <path d="M3 9h18M9 21V9" />
                        </svg>
                        <span>Add screenshot</span>
                      </div>
                    </div>
                  </div>
                  <div className="phone-frame">
                    <div className="phone-notch" />
                    <div className="phone-content" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="restricted-card">
            <div className="restricted-card-inner">
              <div className="restricted-info">
                <div>
                  <div className="project-meta">
                    <span
                      className="project-type"
                      style={{
                        color: "rgba(192,57,43,0.7)",
                        background: "rgba(192,57,43,0.07)",
                        borderColor: "rgba(192,57,43,0.18)",
                      }}
                    >
                      Defence · Web Application
                    </span>
                    <span className="project-year">2018–2024</span>
                    <span className="headhunted-badge">★ Headhunted</span>
                    <span className="award-badge">🏆 Award Winner</span>
                  </div>
                  <div className="project-client">
                    Australian Defence · 12thLevel → Brownstone Consulting
                  </div>
                  <h3 className="restricted-title">S.M.A.R.T</h3>
                  <div className="restricted-subtitle">
                    Issues Management System
                  </div>
                  <p className="restricted-desc">
                    A defence-grade issues management system built to systemise
                    processes, improve operational efficiency, accountability,
                    and auditability across complex information environments.
                    Designed to support decision-making through structured data —
                    making critical information accessible, traceable, and
                    reliable. I grew from junior developer to technical lead
                    across two companies on this project, spanning six years and
                    two contracts.
                  </p>
                  <div style={{ marginTop: 4, marginBottom: 20 }}>
                    <div className="award-badge" style={{ display: "inline-flex" }}>
                      🏆 Essington Lewis Award 2024 — SME Category
                    </div>
                  </div>
                </div>
                <div className="restricted-details">
                  <div className="detail-row">
                    <span className="detail-label-light">Role</span>
                    <span className="detail-value-light">
                      Junior Developer → Technical Lead
                    </span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label-light">Timeline</span>
                    <span className="detail-value-light">
                      2018–Nov 2021 (12thLevel) · Feb 2022–Dec 2024 (Brownstone
                      Consulting)
                    </span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label-light">Stack</span>
                    <div className="tech-tags">
                      <span className="tech-tag-dark">Angular</span>
                      <span className="tech-tag-dark">.NET / C#</span>
                      <span className="tech-tag-dark">SQL</span>
                      <span className="tech-tag-dark">Azure</span>
                      <span className="tech-tag-dark">Entity Framework</span>
                      <span className="tech-tag-dark">Cypress</span>
                      <span className="tech-tag-dark">Angular Unit Testing</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="restricted-panel">
                <div className="restricted-grid" />
                <div className="restricted-stamp">
                  <div className="stamp-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-hidden
                    >
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </div>
                  <div className="stamp-text">Restricted</div>
                  <div className="stamp-note">
                    This project operates under defence confidentiality
                    requirements. Screenshots and detailed specifications are not
                    available for public display.
                  </div>
                  <div className="award-display">
                    <div className="award-display-icon">🏆</div>
                    <div className="award-display-name">
                      ESSINGTON LEWIS AWARD
                      <br />
                      2024 · SME Category
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-divider" />

        <div className="section">
          <div className="section-header">
            <span className="section-label">Personal</span>
            <h2 className="section-title">My Own Products</h2>
            <div className="section-rule" />
          </div>

          <div className="personal-grid">
            <div className="personal-card">
              <div className="personal-card-preview">
                <div className="personal-card-preview-placeholder">
                  <span className="preview-label">jenjacobsen.com</span>
                </div>
              </div>
              <div className="personal-card-body">
                <div className="personal-card-type">
                  Personal · Portfolio Site
                </div>
                <h3 className="personal-card-title">Jen Jacobsen</h3>
                <p className="personal-card-desc">
                  My own web and app development portfolio site — built from
                  scratch to represent my services, approach, and experience.
                </p>
                <div className="personal-card-footer">
                  <div className="personal-detail-row">
                    <span className="personal-detail-label">Role</span>
                    <span className="personal-detail-value">
                      Solo — Design & Build
                    </span>
                  </div>
                  <div className="personal-detail-row">
                    <span className="personal-detail-label">Stack</span>
                    <div className="personal-tech-tags">
                      <span className="personal-tech-tag">React</span>
                      <span className="personal-tech-tag">Next.js</span>
                    </div>
                  </div>
                  <a
                    href="https://jenjacobsen.com"
                    className="personal-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View site →
                  </a>
                </div>
              </div>
            </div>

            <div className="personal-card">
              <div className="personal-card-preview">
                <div className="personal-card-preview-placeholder">
                  <span className="preview-label">one two</span>
                </div>
              </div>
              <div className="personal-card-body">
                <div className="personal-card-type">
                  Product · Sports Platform
                </div>
                <h3 className="personal-card-title">one two</h3>
                <p className="personal-card-desc">
                  Women&apos;s sports — follow it all in one place. A platform
                  aggregating women&apos;s sports coverage so fans don&apos;t have
                  to chase it across multiple channels.
                </p>
                <div className="personal-card-footer">
                  <div className="personal-detail-row">
                    <span className="personal-detail-label">Role</span>
                    <span className="personal-detail-value">
                      Solo — Design & Build
                    </span>
                  </div>
                  <div className="personal-detail-row">
                    <span className="personal-detail-label">Stack</span>
                    <div className="personal-tech-tags">
                      <span className="personal-tech-tag">React</span>
                      <span className="personal-tech-tag">Next.js</span>
                    </div>
                  </div>
                  <a href="https://onetwowomenssports.app" target="_blank"
                    rel="noopener noreferrer" className="personal-link">
                    View site →
                  </a>
                </div>
              </div>
            </div>

            <div className="personal-card">
              <div className="personal-card-preview">
                <div className="personal-card-preview-placeholder">
                  <span className="preview-label">Feedback Analyzer</span>
                </div>
              </div>
              <div className="personal-card-body">
                <div className="personal-card-type">Product · SaaS Tool</div>
                <h3 className="personal-card-title">Feedback Analyzer</h3>
                <p className="personal-card-desc">
                  Turn scattered feedback into clear patterns. A tool that makes
                  sense of messy, unstructured feedback so you can act on it
                  quickly.
                </p>
                <div className="personal-card-footer">
                  <div className="personal-detail-row">
                    <span className="personal-detail-label">Role</span>
                    <span className="personal-detail-value">
                      Solo — Design & Build
                    </span>
                  </div>
                  <div className="personal-detail-row">
                    <span className="personal-detail-label">Stack</span>
                    <div className="personal-tech-tags">
                      <span className="personal-tech-tag">React</span>
                      <span className="personal-tech-tag">Next.js</span>
                    </div>
                  </div>
                  <a href="https://feedbackinsights.app" target="_blank"
                    rel="noopener noreferrer" className="personal-link">
                    View site →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-divider" />

        <div className="section">
          <div className="section-header">
            <span className="section-label">Demo Work</span>
            <h2 className="section-title">Example Projects</h2>
            <div className="section-rule" />
          </div>
          <p className="demo-intro">
            A set of practice projects built for fictional clients — designed to
            explore different industries, aesthetics, and briefs. Each is fully
            built and live.
          </p>

          <div className="demo-grid">
            <DemoCard
              previewLabel="Luxe Collective"
              title="Luxe Collective"
              sub="Boutique Hair Salon · Melbourne"
              href="https://lightblue-eel-934020.hostingersite.com/"
            />
            <DemoCard
              previewLabel="Lumen Art Gallery"
              title="Lumen Art Gallery"
              sub="Contemporary Art Exhibitions"
              href="https://gold-manatee-100700.hostingersite.com/"
            />
            <DemoCard
              previewLabel="Flow House"
              title="Flow House"
              sub="Move well. Live strong."
              href="https://gray-tarsier-889712.hostingersite.com/"
            />
            <DemoCard
              previewLabel="Harvest & Vine"
              title="Harvest & Vine Festival"
              sub="Yarra Valley"
              href="https://mistyrose-goldfish-910269.hostingersite.com/"
            />
            <DemoCard
              previewLabel="Alex Morgan"
              title="Alex Morgan"
              sub="Leadership & Career Coach"
              href="https://violet-stingray-446289.hostingersite.com/"
            />
            <DemoCard
              previewLabel="GreenScape"
              title="GreenScape Landscaping"
              sub="Portfolio Example"
              href="https://lightgray-ibex-559381.hostingersite.com/"
            />
          </div>
        </div>

        <footer className="work-cta-footer">
          <p className="footer-text">
            Have a project in mind? Let&apos;s talk about it.
          </p>
          <Link href="/#contact" className="footer-cta">
            Start a Project →
          </Link>
        </footer>
      </main>
      <Footer />
    </div>
  )
}

function DemoCard({
  previewLabel,
  title,
  sub,
  href,
}: {
  previewLabel: string
  title: string
  sub: string
  href: string
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="demo-card">
      <div className="demo-card-preview">
        <div className="demo-preview-ph">
          <span>{previewLabel}</span>
        </div>
      </div>
      <div className="demo-card-body">
        <div className="demo-card-title">{title}</div>
        <div className="demo-card-sub">{sub}</div>
        <div className="demo-card-footer">
          <span className="demo-tag">React · Next.js</span>
          <span className="demo-link">View site →</span>
        </div>
      </div>
    </a>
  )
}
