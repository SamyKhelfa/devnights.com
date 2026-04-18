export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-x-clip"
    >
      {/* ── Orbs – plus discrets, repositionnés ── */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[140px] animate-pulse-glow" />
        <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] rounded-full bg-purple-700/8 blur-[120px] animate-float" />
      </div>

      {/* ── Contenu aligné à gauche ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-24 pb-16">

        {/* Label discret */}
        <p
          className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-8 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
        >
          Développeur Fullstack &nbsp;·&nbsp; Alternance chez NORALSY
        </p>

        {/* Nom – typographie forte */}
        <h1
          className="font-display font-black leading-[0.88] mb-8 opacity-0 animate-fade-in-up"
          style={{
            fontSize: 'clamp(3.5rem, 11vw, 8.5rem)',
            animationDelay: '0.2s',
            animationFillMode: 'forwards',
          }}
        >
          <span className="text-white block">Samy</span>
          <span className="text-gradient block">Khelfa.</span>
        </h1>

        {/* Accroche personnelle */}
        <p
          className="text-slate-400 text-lg md:text-xl max-w-lg leading-relaxed mb-4 opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}
        >
          J&apos;ai passé des années à comprendre pourquoi les gens bloquaient
          sur des outils tech. Maintenant je les construis mieux.
        </p>
        <p
          className="text-slate-500 text-base max-w-md leading-relaxed mb-12 opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.45s', animationFillMode: 'forwards' }}
        >
          Support technique → code. La reconversion qui m&apos;a appris à
          penser avec l&apos;utilisateur, pas contre lui.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap gap-4 opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.55s', animationFillMode: 'forwards' }}
        >
          <a
            href="#projects"
            className="px-7 py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-base transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/30 hover:-translate-y-px"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="px-7 py-3.5 rounded-xl border border-violet-800/50 text-slate-400 hover:text-white hover:border-violet-600/60 font-semibold text-base transition-all duration-200 hover:-translate-y-px"
          >
            Me contacter
          </a>
        </div>

        {/* Ligne décorative */}
        <div
          className="mt-20 flex items-center gap-4 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
          aria-hidden="true"
        >
          <div className="w-12 h-px bg-violet-700/50" />
          <span className="text-slate-700 text-xs tracking-widest uppercase">devnights.com</span>
        </div>
      </div>
    </section>
  )
}
