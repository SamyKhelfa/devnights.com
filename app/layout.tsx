import type { Metadata } from 'next'
import { Inter, Bricolage_Grotesque } from 'next/font/google'
import './globals.css'
import Analytics from '@/components/Analytics'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Samy Khelfa | Développeur Fullstack',
  description:
    "DevNights, le portfolio de Samy Khelfa. Développeur Fullstack web & mobile (React, Next.js, React Native), ouvert à une alternance. Ici, il fait toujours nuit 🌙",
  keywords: [
    'développeur web',
    'React',
    'Next.js',
    'portfolio',
    'frontend',
    'DevNights',
    'Samy',
  ],
  authors: [{ name: 'Samy' }],
  openGraph: {
    title: 'Samy Khelfa | Développeur Fullstack',
    description:
      "Développeur Fullstack web & mobile, ouvert à une alternance. Sur DevNights, pas de mode clair, c'est promis 🌙",
    url: 'https://devnights.com',
    siteName: 'DevNights',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Samy Khelfa | Développeur Fullstack',
    description:
      "Développeur Fullstack web & mobile, ouvert à une alternance. Sur DevNights, pas de mode clair, c'est promis 🌙",
  },
  metadataBase: new URL('https://devnights.com'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${inter.variable} ${bricolage.variable} font-sans bg-[#080812] text-slate-100 antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
