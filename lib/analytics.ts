/**
 * Analytics utilities for tracking page views and outbound Gumroad clicks
 */

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

/**
 * Track a custom event with GA4
 */
export function trackEvent(eventName: string, params?: Record<string, string | number>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
}

/**
 * Track page view with GA4
 */
export function trackPageView(path: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: path,
    });
  }
}

/**
 * Track Gumroad outbound click
 */
export function trackGumroadClick(sourcePage: string, linkText: string, productUrl: string) {
  // Extract product slug from URL (e.g., /l/production-ready-react-native-boilerplate)
  const urlMatch = productUrl.match(/\/l\/([^/?]+)/);
  const productSlug = urlMatch ? urlMatch[1] : 'unknown';

  trackEvent('gumroad_click', {
    source_page: sourcePage,
    link_text: linkText.trim().substring(0, 100), // Limit length
    product_slug: productSlug,
  });
}

/**
 * Check if a URL is a Gumroad link
 */
export function isGumroadLink(url: string): boolean {
  return /^https?:\/\/.*\.gumroad\.com\//i.test(url);
}
