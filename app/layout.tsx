import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from 'sonner'
import { StripHashOnScroll } from '@/components/scroll-anchor'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Jen Jacobsen | Web & App Development',
  description: 'Expert web development, app development, and technical architecture solutions. Transform your digital presence with outcome-focused solutions.',
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <StripHashOnScroll />
        {children}
        <Analytics />
        <Toaster richColors position="bottom-center" />
      </body>
    </html>
  )
}
