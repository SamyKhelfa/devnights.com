'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { track } from '@/lib/analytics'

// Records page views, and clicks on any element carrying data-track="label".
export default function Analytics() {
  const pathname = usePathname()

  useEffect(() => {
    if (pathname.startsWith('/stats')) return
    track({ type: 'pageview', path: pathname })
  }, [pathname])

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest<HTMLElement>('[data-track]')
      const label = el?.dataset.track
      if (!label || window.location.pathname.startsWith('/stats')) return
      track({ type: 'click', path: window.location.pathname, label })
    }
    document.addEventListener('click', onClick, { capture: true })
    return () => document.removeEventListener('click', onClick, { capture: true })
  }, [])

  return null
}
