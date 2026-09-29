import type { Metadata } from 'next'
import { Inter, Bricolage_Grotesque } from 'next/font/google'
import './globals.css'

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
    'Portfolio de Samy — Développeur Fullstack web & mobile, ouvert à une alternance. Découvrez mes projets et compétences.',
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
      'Portfolio de Samy — Développeur Fullstack web & mobile, ouvert à une alternance.',
    url: 'https://devnights.com',
    siteName: 'DevNights',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Samy Khelfa | Développeur Fullstack',
    description:
      'Portfolio de Samy — Développeur Fullstack web & mobile, ouvert à une alternance.',
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
      </body>
    </html>
  )
}
