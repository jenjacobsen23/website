'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, ShoppingBag } from 'lucide-react';
import { useScrollToSection } from '@/hooks/use-scroll-to-section';

export function HeroSection() {
  const { scrollToSection } = useScrollToSection();

  // TODO: Replace with your actual Gumroad product URL
  const GUMROAD_PRODUCT_URL =
  'https://jenjacobsen.gumroad.com/l/production-ready-react-native-boilerplate?utm_source=jenjacobsen&utm_medium=website&utm_campaign=hero_featured';

  
  // TODO: Update these product details
  const featuredProduct = {
    name: 'React Native Boilerplate (Expo + Firebase + Sentry)', // TODO: Short product name
    description: 'A production-ready React Native (Expo) boilerplate with Firebase + Sentry + EAS already wired up—so you can start building features instead of infrastructure.', // TODO: One sentence description
    price: 'USD $69', // TODO: Optional - update with price or remove if not shown
    showPrice: true, // TODO: Set to false to hide price
  };

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

          {/* Compact Featured Product Callout */}
          <div className="flex justify-center pt-8 animate-fade-in-up animation-delay-600 text-left">
            <div className="max-w-[900px] w-full px-4">
              <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg p-3 sm:p-4 hover:border-primary/50 transition-all duration-300">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5">
                      Featured resource
                    </div>
                    <div className="flex items-start sm:items-center gap-3 sm:gap-4 flex-wrap">
                      <h3 className="text-base sm:text-lg font-semibold text-foreground leading-tight">
                        {featuredProduct.name}
                      </h3>
                      {featuredProduct.showPrice && (
                        <span className="text-sm text-primary font-medium shrink-0">
                         {featuredProduct.price}
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-1.5">
                      {featuredProduct.description}
                    </p>
                  </div>
                  <Button
                    asChild
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground shrink-0 text-xs sm:text-sm h-8 sm:h-9"
                  >
                    <a
                      href={GUMROAD_PRODUCT_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5"                      
                    >
                      <ShoppingBag className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      Buy on Gumroad
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
