import type { Metadata, Viewport } from 'next'
import { Poppins, Inter } from 'next/font/google'
import './globals.css'


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
})


const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'E-Comm - Product Listing',
  description: 'Modern e-commerce product listing page with advanced filtering and sorting',
  keywords: 'ecommerce, products, sneakers, shoes, online shopping',
  authors: [{ name: 'E-Comm Team' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${poppins.className} antialiased`} style={{ fontFamily: 'Poppins, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
