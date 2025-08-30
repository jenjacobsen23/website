'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useScrollToSection } from '@/hooks/use-scroll-to-section';
import { ThemeToggle } from '@/components/theme-toggle';
import { useTheme } from 'next-themes';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollToSection } = useScrollToSection();
  const { theme } = useTheme();

  const handleScrollToSection = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  const logoSrc = theme === 'light' ? '/logo-no-bg-light.svg' : '/logo-no-bg.svg';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="relative w-60 h-16 flex items-center justify-center overflow-hidden">
              <img
                src={logoSrc}
                alt="Jen Jacobsen Logo"
                className="transform scale-[.8] cursor-pointer"
                onClick={() => handleScrollToSection('hero')}
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleScrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => handleScrollToSection('skills')}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Skills
            </button>
            <button
              onClick={() => handleScrollToSection('projects')}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={() => handleScrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => handleScrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Contact
            </button>
            <ThemeToggle />
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border-t border-border">
              <button
                onClick={() => handleScrollToSection('about')}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left cursor-pointer"
              >
                About
              </button>
              <button
                onClick={() => handleScrollToSection('skills')}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left cursor-pointer"
              >
                Skills
              </button>
              <button
                onClick={() => handleScrollToSection('projects')}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left cursor-pointer"
              >
                Projects
              </button>
              <button
                onClick={() => handleScrollToSection('services')}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left cursor-pointer"
              >
                Services
              </button>
              <button
                onClick={() => handleScrollToSection('contact')}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left cursor-pointer"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
