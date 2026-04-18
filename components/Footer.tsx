export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-violet-900/20 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-purple-800 flex items-center justify-center text-white font-bold font-display text-xs group-hover:scale-110 transition-transform duration-200">
            DN
          </span>
          <span className="font-display font-bold text-white">
            Dev<span className="text-violet-400">Nights</span>
          </span>
        </a>

        {/* Copyright */}
        <p className="text-slate-600">
          &copy; {year} Samy &mdash; Tous droits réservés
        </p>

        {/* Tagline */}
        <p className="text-slate-700 text-xs">
          Construit avec passion &amp; Next.js
        </p>
      </div>
    </footer>
  )
}
