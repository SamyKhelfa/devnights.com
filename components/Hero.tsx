import Image from 'next/image'
import Link from 'next/link'
import { CALENDLY_URL, experiences, keyTechs } from '@/lib/data'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-x-clip">
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[140px] animate-pulse-glow" />
        <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] rounded-full bg-purple-700/8 blur-[120px] animate-float" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full pt-28 pb-16 grid md:grid-cols-[auto_1fr] gap-12 md:gap-20 items-center">
        {/* Photo */}
        <div className="relative mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-violet-500/40 animate-float" aria-hidden="true" />
          <div className="absolute -bottom-2 -left-4 w-7 h-7 rounded-full bg-purple-400/30 animate-float-drift" aria-hidden="true" />
          <div className="w-52 h-52 md:w-60 md:h-60 rounded-full overflow-hidden border border-violet-700/40 shadow-glow">
            <Image
              src="/samy.png"
              alt="Samy Khelfa"
              width={480}
              height={480}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Texte */}
        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="font-display font-black text-5xl md:text-6xl text-gradient leading-tight">
            Samy Khelfa
          </h1>
          <p className="text-slate-200 text-xl md:text-2xl mt-2">Développeur Fullstack</p>
          <p className="inline-flex items-center gap-2 mt-3 text-sm text-emerald-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Ouvert à une alternance
          </p>

          <p className="text-slate-400 leading-relaxed mt-6 max-w-lg">
            J&apos;ai passé des années en support technique à comprendre pourquoi les
            gens bloquaient sur leurs outils. Maintenant je les construis, en web
            comme en mobile, en pensant d&apos;abord à celui qui va s&apos;en servir.
          </p>
          <p className="text-slate-500 text-sm leading-relaxed mt-3 max-w-lg">
            <span aria-hidden="true">🌙 </span>
            DevNights, parce que je code mieux quand l&apos;écran est sombre. Ici, pas de
            mode clair, c&apos;est promis.
          </p>

          <p className="text-slate-600 text-xs mt-6 mb-2">Technos clés</p>
          <div className="flex flex-wrap gap-2">
            {keyTechs.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-md text-xs border border-violet-800/40 bg-violet-900/15 text-slate-300"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href={CALENDLY_URL}
              data-track="hero-calendly"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-violet-500 hover:bg-violet-400 text-white font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/30 hover:-translate-y-px"
            >
              On s&apos;appelle ?
            </a>
            <a
              href="#contact"
              data-track="hero-contact"
              className="px-6 py-3 rounded-full border border-violet-800/50 text-slate-300 hover:text-white hover:border-violet-600/60 font-semibold text-sm transition-all duration-200 hover:-translate-y-px"
            >
              Me contacter
            </a>
          </div>

          {/* En ce moment */}
          <p className="text-slate-600 text-xs mt-10 mb-3">En ce moment</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {experiences
              .filter((e) => e.current)
              .map((e) => (
                <Link
                  key={e.slug}
                  href={`/experiences/${e.slug}`}
                  data-track={`hero-experience-${e.slug}`}
                  className="group flex items-start gap-3 p-3.5 rounded-xl bg-glass-card border border-violet-900/30 hover:border-violet-600/50 transition-colors"
                >
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-violet-400 shrink-0 animate-pulse" />
                  <span className="flex-1">
                    <span className="block text-white text-sm font-semibold">{e.name}</span>
                    <span className="block text-slate-500 text-xs mt-0.5">{e.summary}</span>
                  </span>
                  <span className="text-violet-400 text-sm transition-transform group-hover:translate-x-0.5">→</span>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
