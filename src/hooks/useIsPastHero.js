import { useEffect, useState } from 'react'

export function useIsPastHero(targetId = 'hero') {
  const [isPastHero, setIsPastHero] = useState(false)

  useEffect(() => {
    const target = document.getElementById(targetId)
    if (!target) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsPastHero(!entry.isIntersecting)
      },
      { threshold: 0 },
    )

    observer.observe(target)
    return () => observer.disconnect()
  }, [targetId])

  return isPastHero
}
