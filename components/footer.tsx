'use client';

import { Github, Linkedin, Mail } from 'lucide-react';
import { useTheme } from 'next-themes';

export function Footer() {
  const { theme } = useTheme();
  const logoSrc = theme === 'light' ? '/logo-no-bg-light.svg' : '/logo-no-bg.svg';

  return (
    <footer className="bg-card/50 border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and Tagline */}
          <div className="relative w-60 h-16 flex items-center justify-center overflow-hidden">
            <img src={logoSrc} alt="Jen Jacobsen Logo" className="transform scale-[.6]" />
            {/* <div>
              <p className="font-bold text-lg">Jen Jacobsen</p>
              <p className="text-sm text-primary">Your Vision, Expertly Coded</p>
            </div> */}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:contact@jenjacobsen.com"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/jen-jacobsen"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/jenjacobsen23"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Jen Jacobsen. All rights reserved. Built with passion and expertise.
          </p>
        </div>
      </div>
    </footer>
  );
}
