import Link from 'next/link'

export default function Logo({ size = 'md' }: { size?: 'sm' | 'md' }) {
  const box = size === 'sm' ? 'w-7 h-7 text-[10px]' : 'w-8 h-8 text-xs'

  return (
    <Link href="/" className="flex items-center gap-2.5 group">
      <span
        className={`${box} rounded-lg bg-gradient-to-br from-violet-500 to-purple-800 flex items-center justify-center text-white font-bold font-display shadow-glow-sm group-hover:scale-110 transition-transform duration-200`}
      >
        DN
      </span>
      <span className="font-display font-bold tracking-tight text-white">
        Samy Khelfa
      </span>
    </Link>
  )
}
