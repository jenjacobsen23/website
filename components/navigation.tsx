'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.offsetTop - 20;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="relative w-60 h-16 flex items-center justify-center overflow-hidden">
              <img
                src="/logo-no-bg.svg"
                alt="Jen Jacobsen Logo"
                className="transform scale-[.8] cursor-pointer"
                onClick={() => scrollToSection('hero')}
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
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
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left cursor-pointer"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left cursor-pointer"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left cursor-pointer"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left cursor-pointer"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
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
