import Image from 'next/image'
import type { Experience } from '@/lib/data'

export default function ExperienceLogo({ exp, size = 'md' }: { exp: Experience; size?: 'md' | 'lg' }) {
  const box = size === 'lg' ? 'w-14 h-14 text-2xl rounded-xl' : 'w-11 h-11 text-lg rounded-lg'

  if (exp.logo) {
    return (
      <span className={`${box} shrink-0 flex items-center justify-center`}>
        <Image
          src={exp.logo}
          alt={`Logo ${exp.name}`}
          width={112}
          height={112}
          className="w-full h-full object-contain"
        />
      </span>
    )
  }

  return (
    <span
      className={`${box} shrink-0 border flex items-center justify-center font-display font-bold ${exp.logoClass}`}
    >
      {exp.monogram}
    </span>
  )
}
