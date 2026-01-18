'use client';

import { useHashScroll } from '@/hooks/use-hash-scroll';

/**
 * Client component that handles hash scrolling after route changes.
 * Place this in pages that need hash navigation support.
 */
export function HashScrollHandler() {
  useHashScroll();
  return null;
}
