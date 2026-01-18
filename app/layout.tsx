import type React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/components/theme-provider';
import { GA4PageViewTracker } from '@/components/ga4-pageview-tracker';

export const metadata: Metadata = {
  metadataBase: new URL('https://jenjacobsen.com'),
  title: {
    default: 'Jen Jacobsen - Full-Stack Developer',
    template: '%s | Jen Jacobsen',
  },
  description:
    'Your Vision, Expertly Coded - Full-Stack Developer with 8+ Years Experience specializing in Angular, .NET, React Native, and SQL. Production-Ready React Native Boilerplate (Expo + Firebase + Sentry + EAS) available.',
  keywords: [
    'Full-Stack Developer',
    'Angular Developer',
    'React Native Developer',
    '.NET Developer',
    'React Native Boilerplate',
    'Expo',
    'Firebase',
    'Sentry',
    'EAS',
    'TypeScript',
    'Next.js',
    'Software Developer',
    'Web Development',
    'Mobile App Development',
  ],
  authors: [{ name: 'Jen Jacobsen' }],
  creator: 'Jen Jacobsen',
  publisher: 'Jen Jacobsen',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jenjacobsen.com',
    siteName: 'Jen Jacobsen',
    title: 'Jen Jacobsen - Full-Stack Developer',
    description:
      'Your Vision, Expertly Coded - Full-Stack Developer with 8+ Years Experience specializing in Angular, .NET, React Native, and SQL. Production-Ready React Native Boilerplate (Expo + Firebase + Sentry + EAS) available.',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Jen Jacobsen - Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jen Jacobsen - Full-Stack Developer',
    description:
      'Your Vision, Expertly Coded - Full-Stack Developer with 8+ Years Experience specializing in Angular, .NET, React Native, and SQL.',
    images: ['/og-default.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://jenjacobsen.com',
  },
  category: 'technology',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const ga4MeasurementId = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;

  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} min-h-screen flex flex-col`}>
        {ga4MeasurementId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${ga4MeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${ga4MeasurementId}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <GA4PageViewTracker />
          <div className="flex-1 flex flex-col">
            {children}
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
