import { useEffect, useRef, useState } from 'react'
import { animate, useReducedMotion } from 'motion/react'
import Container from '../layout/Container'
import { statCountTransition } from '@/motion'
import { statistics, statisticsContent } from '../../data/statistics'

function AnimatedStatValue({ value }) {
  const match = value.match(/^([\d,]+)(.*)$/)
  const end = match ? Number(match[1].replace(/,/g, '')) : null
  const suffix = match?.[2] ?? ''
  const grouped = Boolean(match?.[1].includes(',') || (end ?? 0) >= 1000)

  const format = (n) => {
    const core = grouped ? Math.round(n).toLocaleString('en-US') : String(Math.round(n))
    return `${core}${suffix}`
  }

  const ref = useRef(null)
  const reduceMotion = useReducedMotion()
  const [display, setDisplay] = useState(() => (end != null ? format(0) : value))

  useEffect(() => {
    if (end == null) return undefined

    const el = ref.current
    if (!el) return undefined

    let cancelled = false
    let controls

    const startCount = () => {
      if (cancelled) return
      if (reduceMotion) {
        setDisplay(value)
        return
      }
      controls = animate(0, end, {
        ...statCountTransition,
        onUpdate: (latest) => {
          if (!cancelled) setDisplay(format(latest))
        },
        onComplete: () => {
          if (!cancelled) setDisplay(value)
        },
      })
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        startCount()
      },
      { threshold: 0.35 },
    )
    observer.observe(el)

    return () => {
      cancelled = true
      controls?.stop()
      observer.disconnect()
    }
  }, [end, value, reduceMotion, suffix, grouped])

  return (
    <p ref={ref} className="text-4xl font-light text-gray-900 sm:text-5xl">
      {display}
    </p>
  )
}

function StatCard({ value, label }) {
  return (
    <div className="rounded-md bg-olive-200 p-7">
      <AnimatedStatValue value={value} />
      <p className="mt-32 text-base text-gray-600">{label}</p>
    </div>
  )
}

export default function Statistics() {
  return (
    <section aria-labelledby="statistics-heading" className="py-16 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-16 place-content-between col-auto">
          <div className="lg:col-span-6">
            <h2
              id="statistics-heading"
              className="text-2xl font-semibold text-gray-900 sm:text-3xl lg:text-4xl tracking-normal"
            >
              {statisticsContent.title}
            </h2>
          </div>
          <div className="lg:col-span-6 justify-self-end">
            <p className="text-wrap text-md text-gray-600 sm:text-md">
              {statisticsContent.description}
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:mt-24 lg:grid-cols-3">
          {statistics.map((stat) => (
            <StatCard key={stat.id} value={stat.value} label={stat.label} />
          ))}
        </div>
      </Container>
    </section>
  )
}
