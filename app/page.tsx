import type { Metadata } from 'next';
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ServicesSection } from "@/components/services-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Full-Stack Developer specializing in Angular, .NET, React Native, and SQL. Production-Ready React Native Boilerplate (Expo + Firebase + Sentry + EAS) available. Turning complex ideas into elegant, high-performance solutions.',
  openGraph: {
    title: 'Jen Jacobsen - Full-Stack Developer',
    description:
      'Full-Stack Developer specializing in Angular, .NET, React Native, and SQL. Production-Ready React Native Boilerplate (Expo + Firebase + Sentry + EAS) available.',
    url: 'https://jenjacobsen.com',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Jen Jacobsen - Full-Stack Developer',
      },
    ],
  },
  twitter: {
    title: 'Jen Jacobsen - Full-Stack Developer',
    description:
      'Full-Stack Developer specializing in Angular, .NET, React Native, and SQL. Production-Ready React Native Boilerplate (Expo + Firebase + Sentry + EAS) available.',
  },
  alternates: {
    canonical: 'https://jenjacobsen.com',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
