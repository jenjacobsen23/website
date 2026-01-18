'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { trackPageView } from '@/lib/analytics';

/**
 * Client component to track page views on route changes in Next.js App Router
 * GA4 doesn't automatically track route changes in App Router, so we need to listen to pathname changes
 */
export function GA4PageViewTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      // Track page view on pathname change
      trackPageView(pathname);
    }
  }, [pathname]);

  return null;
}
