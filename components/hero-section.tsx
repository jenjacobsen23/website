'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Mail } from 'lucide-react';
import { useScrollToSection } from '@/hooks/use-scroll-to-section';

export function HeroSection() {
  const { scrollToSection } = useScrollToSection();

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/20 animate-gradient-shift"></div>
        <div className="grid grid-cols-12 grid-rows-8 gap-4 h-full w-full">
          {Array.from({ length: 96 }).map((_, i) => (
            <div
              key={i}
              className="border border-primary/20 rounded animate-grid-pulse"
              style={{
                animationDelay: `${(i * 0.1) % 3}s`,
                animationDuration: `${2 + (i % 3)}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance animate-slide-in-left">
            Bringing Your <span className="text-primary animate-text-shimmer">Vision</span> to Life
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance animate-slide-in-right animation-delay-300">
            Full-stack developer specializing in turning complex ideas into elegant,
            high-performance solutions
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 animate-bounce-in animation-delay-900">
            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground teal-glow hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="border border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              Contact Me
              <Mail className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
