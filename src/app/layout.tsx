import type { Metadata } from 'next'
import { Inter, Geist_Mono, Montserrat } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'sonner'
import { AnalyticsProvider } from './analytics'
import Layout from '@/components/Layout'
import './globals.css'

// Universal Sans fallback to Inter
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-universal-sans',
  display: 'swap',
})

// Geist Mono for code/technical content
const geistMono = Geist_Mono({ 
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

// Montserrat for bold headings
const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'AIS - Advanced Intelligence Solutions',
  description: 'Advanced Intelligence Solutions - Your trusted partner in AI and technology innovation',
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/ais-logo-dark.png', sizes: '32x32', type: 'image/png' },
      { url: '/ais-logo-dark.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: '/ais-logo-dark.png',
    shortcut: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={`${inter.className} ${inter.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Layout>
            {children}
          </Layout>
          <Toaster position="top-right" />
          <AnalyticsProvider />
        </ThemeProvider>
      </body>
    </html>
  )
}
