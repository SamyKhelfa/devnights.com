import Link from 'next/link'
import RevealOnScroll from './RevealOnScroll'
import SectionHeader from './SectionHeader'
import { services } from '@/lib/data'

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 scroll-mt-16">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          title="Services"
          subtitle="Ce que je peux apporter à ton équipe, du front au back."
        />

        <div className="grid md:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <RevealOnScroll key={s.title} delay={i * 80}>
              <div className="h-full p-6 rounded-xl bg-glass-card border border-violet-900/30 hover:border-violet-700/50 transition-colors">
                <span className="text-2xl" aria-hidden="true">{s.icon}</span>
                <h3 className="font-display font-semibold text-white mt-4">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mt-2">{s.description}</p>
                {s.example && (
                  <p className="text-slate-500 text-xs mt-4">
                    Exemple ·{' '}
                    <Link href={s.example.href} className="text-violet-400 hover:text-violet-300">
                      {s.example.label} →
                    </Link>
                  </p>
                )}
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
