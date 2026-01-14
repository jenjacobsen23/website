'use client';

import React, { useState } from 'react';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useScrollToSection } from '@/hooks/use-scroll-to-section';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export function Footer() {
  const { theme } = useTheme();
  const { scrollToSection } = useScrollToSection();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by only using theme after mount
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const logoSrc = mounted && theme === 'light' ? '/logo-no-bg-light.svg' : '/logo-no-bg.svg';
  
  // Gumroad product URL
  const GUMROAD_PRODUCT_URL =
    'https://jenjacobsen.gumroad.com/l/production-ready-react-native-boilerplate?utm_source=jenjacobsen&utm_medium=website&utm_campaign=footer_cta';

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success(result.message);
        setEmail('');
      } else {
        toast.error(result.message || 'Failed to subscribe. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting subscription:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-card/50 border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* Resources Column */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
              Resources
            </h3>
            <nav className="space-y-2">
              <a
                href={GUMROAD_PRODUCT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-foreground hover:text-primary transition-colors"
              >
                React Native Boilerplate <span className="text-xs text-primary">(new)</span>
              </a>
              <button
                onClick={() => scrollToSection('projects')}
                className="block text-sm text-foreground hover:text-primary transition-colors text-left cursor-pointer"
              >
                Case studies / Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block text-sm text-foreground hover:text-primary transition-colors text-left cursor-pointer"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* One-line CTA */}
          <div className="flex items-center">
            <p className="text-sm text-muted-foreground">
              Want to ship faster?{' '}
              <a
                href={GUMROAD_PRODUCT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium inline-flex items-center gap-1"
              >
                Grab my Expo + Firebase + Sentry starter
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </p>
          </div>

          {/* Email Capture */}
          <div>
            <form onSubmit={handleEmailSubmit} className="space-y-2">
              <label htmlFor="footer-email" className="text-xs text-muted-foreground block">
                Get updates on new tools
              </label>
              <div className="flex gap-2">
                <Input
                  id="footer-email"
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-9 text-sm"
                  required
                />
                <Button
                  type="submit"
                  size="sm"
                  disabled={isSubmitting}
                  className="h-9 bg-primary hover:bg-primary/90 text-primary-foreground shrink-0"
                >
                  {isSubmitting ? '...' : 'Get Updates'}
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                No spam. Only product updates.
              </p>
              <p className="text-xs text-muted-foreground">
                Featured: <a
                  href={GUMROAD_PRODUCT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  RN Boilerplate
                </a>
              </p>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo and Social Links */}
            <div className="flex items-center gap-6">
              <div className="relative w-40 h-10 flex items-center justify-center overflow-hidden">
                <img src={logoSrc} alt="Jen Jacobsen Logo" className="transform scale-[.5]" />
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="mailto:contact@jenjacobsen.com"
                  className="p-1.5 text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-4 w-4" />
                </a>
                <a
                  href="https://linkedin.com/in/jen-jacobsen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="https://github.com/jenjacobsen23"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-muted-foreground hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Copyright */}
            <p className="text-xs text-muted-foreground">
              © 2025 Jen Jacobsen. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
