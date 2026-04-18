export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ────── Animated background ────── */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        {/* Central glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-violet-600/10 blur-[130px] animate-pulse-glow" />
        {/* Top-right orb */}
        <div className="absolute -top-20 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-700/8 blur-[110px] animate-float" />
        {/* Bottom-left orb */}
        <div className="absolute bottom-1/4 -left-20 w-[350px] h-[350px] rounded-full bg-violet-500/7 blur-[100px] animate-float-drift" />
        {/* Bottom-right small accent */}
        <div className="absolute bottom-0 right-1/3 w-[250px] h-[250px] rounded-full bg-purple-800/10 blur-[80px] animate-float-slow" />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 1) 1px, transparent 1px)
            `,
            backgroundSize: '52px 52px',
          }}
        />
      </div>

      {/* ────── Content ────── */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Availability badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-900/30 border border-violet-700/30 text-violet-300 text-sm font-medium mb-8 opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-400" />
          </span>
          Disponible pour de nouveaux projets
        </div>

        {/* Greeting */}
        <p
          className="text-slate-400 text-lg font-medium mb-2 opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
        >
          Bonjour, je suis
        </p>

        {/* Name */}
        <h1
          className="font-display font-bold text-7xl md:text-9xl text-gradient leading-none mb-4 opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
        >
          Samy
        </h1>

        {/* Title */}
        <h2
          className="font-display font-semibold text-xl md:text-2xl text-white/80 mb-7 opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.42s', animationFillMode: 'forwards' }}
        >
          Développeur{' '}
          <span className="text-violet-400">Full Stack</span>
          {' '}· Passionné par le web & le design
        </h2>

        {/* Description */}
        <p
          className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.54s', animationFillMode: 'forwards' }}
        >
          Je crée des expériences web modernes, performantes et élégantes.
          Spécialisé en{' '}
          <span className="text-violet-300 font-medium">React</span> et{' '}
          <span className="text-violet-300 font-medium">Next.js</span>, j&apos;aime
          allier technique et créativité pour donner vie à des projets ambitieux.
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.66s', animationFillMode: 'forwards' }}
        >
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-purple-700 hover:from-violet-500 hover:to-purple-600 text-white font-semibold text-base transition-all duration-200 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:-translate-y-0.5"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-xl bg-glass border border-violet-700/35 text-violet-300 hover:text-white hover:border-violet-500/60 font-semibold text-base transition-all duration-200 hover:-translate-y-0.5"
          >
            Me contacter
          </a>
        </div>
      </div>

      {/* ────── Scroll indicator ────── */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in"
        style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}
        aria-hidden="true"
      >
        <span className="text-slate-600 text-xs font-medium tracking-widest uppercase">
          Défiler
        </span>
        <div className="flex flex-col items-center gap-1 animate-scroll-bounce">
          <div className="w-px h-8 bg-gradient-to-b from-violet-700/60 to-transparent" />
          <svg
            className="w-3.5 h-3.5 text-violet-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  )
}
