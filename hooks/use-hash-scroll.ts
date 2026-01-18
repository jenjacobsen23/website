'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Hook to handle scrolling to hash fragments after route changes.
 * Listens for hash changes in the URL and smoothly scrolls to the element.
 */
export function useHashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    // Wait for the page to be fully rendered
    const timer = setTimeout(() => {
      const hash = window.location.hash;
      if (hash) {
        const elementId = hash.substring(1); // Remove the #
        const element = document.getElementById(elementId);
        if (element) {
          const offset = 20; // Account for fixed nav
          const elementPosition = element.offsetTop - offset;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth',
          });
        }
      }
    }, 100); // Small delay to ensure DOM is ready

    return () => clearTimeout(timer);
  }, [pathname]);
}
