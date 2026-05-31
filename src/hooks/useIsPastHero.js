import { useEffect, useState } from 'react'

export default function useIsPastHero() {
  const [isPastHero, setIsPastHero] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('hero')
    if (!hero) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => setIsPastHero(!entry.isIntersecting),
      { threshold: 0 },
    )

    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  return isPastHero
}
