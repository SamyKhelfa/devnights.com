import Logo from './Logo'
import { CALENDLY_URL, EMAIL, GITHUB_URL, LINKEDIN_URL, navLinks } from '@/lib/data'

const socials = [
  { label: 'GitHub', href: GITHUB_URL },
  { label: 'LinkedIn', href: LINKEDIN_URL },
  { label: 'Calendly', href: CALENDLY_URL },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="border-t border-violet-900/20 pt-16 pb-8 px-6 mt-12 scroll-mt-16">
      <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-10">
        <div>
          <Logo size="sm" />
          <p className="text-slate-400 text-sm leading-relaxed mt-4">
            Développeur Fullstack web & mobile, ouvert à une alternance.
          </p>
          <div className="flex flex-wrap gap-2 mt-5">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full bg-violet-500 hover:bg-violet-400 text-white text-xs font-semibold transition-colors"
            >
              Réserver un appel
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="px-4 py-1.5 rounded-full border border-violet-800/50 text-slate-300 hover:text-white text-xs font-semibold transition-colors"
            >
              Envoyer un email
            </a>
          </div>
        </div>

        <div>
          <p className="text-white text-sm font-semibold mb-4">Navigation</p>
          <ul className="space-y-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-slate-400 hover:text-violet-300 text-sm transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-white text-sm font-semibold mb-4">Réseaux</p>
          <ul className="space-y-2">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-violet-300 text-sm transition-colors"
                >
                  {s.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="text-center text-slate-600 text-xs mt-14">
        &copy; {year} Samy Khelfa · DevNights · Construit avec Next.js
      </p>
    </footer>
  )
}
