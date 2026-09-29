import RevealOnScroll from './RevealOnScroll'

export default function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <RevealOnScroll className="text-center mb-12">
      <h2 className="font-display font-bold text-3xl md:text-4xl text-white">{title}</h2>
      <p className="text-slate-400 mt-3 max-w-md mx-auto">{subtitle}</p>
    </RevealOnScroll>
  )
}
