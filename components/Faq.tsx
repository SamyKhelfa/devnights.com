import RevealOnScroll from './RevealOnScroll'
import SectionHeader from './SectionHeader'
import { faq } from '@/lib/data'

export default function Faq() {
  return (
    <section id="faq" className="py-24 px-6 scroll-mt-16">
      <div className="max-w-2xl mx-auto">
        <SectionHeader
          title="Questions fréquentes"
          subtitle="Alternance, profil, façon de travailler. Les réponses sont ici."
        />

        <RevealOnScroll className="space-y-3">
          {faq.map((item) => (
            <details
              key={item.q}
              className="group rounded-xl bg-glass-card border border-violet-900/30 open:border-violet-700/50"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-5 py-4 text-sm font-medium text-white [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="text-violet-400 transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="px-5 pb-4 text-slate-400 text-sm leading-relaxed">{item.a}</p>
            </details>
          ))}
        </RevealOnScroll>
      </div>
    </section>
  )
}
