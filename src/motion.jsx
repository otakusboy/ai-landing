/** Shared Motion (motion.dev) config — https://motion.dev */

import { useEffect, useRef, useState } from 'react'
import { animate, useReducedMotion } from 'motion/react'

const spring = { type: 'spring', stiffness: 420, damping: 36 }
const springExit = { type: 'spring', stiffness: 420, damping: 40 }

// ——— Navbar (mobile menu + menu icon) ———
export const menuIconTransition = { duration: 0.2, ease: [0.22, 1, 0.36, 1] }
export const menuIcon = {
  menu: {
    initial: { opacity: 0, rotate: 90, scale: 0.85 },
    animate: { opacity: 1, rotate: 0, scale: 1 },
    exit: { opacity: 0, rotate: -90, scale: 0.85 },
  },
  close: {
    initial: { opacity: 0, rotate: -90, scale: 0.85 },
    animate: { opacity: 1, rotate: 0, scale: 1 },
    exit: { opacity: 0, rotate: 90, scale: 0.85 },
  },
}
export const mobileMenuPanel = {
  hidden: { opacity: 0, y: '-100%' },
  visible: {
    opacity: 1,
    y: 0,
    transition: spring,
  },
  exit: {
    opacity: 0,
    y: '-100%',
    transition: springExit,
  },
}
export const mobileMenuList = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.06 },
  },
  exit: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}
export const mobileMenuItem = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: spring,
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: springExit,
  },
}
/** Instant transitions when user prefers reduced motion. */
export function getMotionProps(reduceMotion) {
  if (!reduceMotion) return {}
  const instant = { duration: 0 }
  return {
    menuIconTransition: instant,
    mobileMenuPanel: {
      hidden: { opacity: 1, y: 0 },
      visible: { opacity: 1, y: 0, transition: instant },
      exit: { opacity: 1, y: 0, transition: instant },
    },
    mobileMenuItem: {
      hidden: { opacity: 1, y: 0 },
      visible: { opacity: 1, y: 0, transition: instant },
      exit: { opacity: 1, y: 0, transition: instant },
    },
    mobileMenuList: {
      hidden: {},
      visible: { transition: { staggerChildren: 0, delayChildren: 0 } },
      exit: { transition: { staggerChildren: 0 } },
    },
  }
}

// ——— Features (active card indicator) ———
export const featureCardActiveTransition = {
  type: 'spring',
  stiffness: 420,
  damping: 36,
}
export const featureCardActiveTransitionReduced = { duration: 0 }

// ——— Testimonial (carousel progress + slides) ———
export const testimonialAutoplayMs = 10000
export const testimonialSlideTransition = { duration: 0.35, ease: [0.22, 1, 0.36, 1] }
export function getTestimonialProgressTransition(reduceMotion) {
  return reduceMotion
    ? { duration: 0 }
    : { duration: testimonialAutoplayMs / 1000, ease: 'linear' }
}

// ——— Use cases (card reveal on scroll) ———
export const useCaseCardRevealEase = [0.22, 1, 0.36, 1]
export const useCaseCardReveal = {
  hidden: { opacity: 0, x: -28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: useCaseCardRevealEase },
  },
}
export const useCaseCardGrid = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
}
export function getUseCaseCardMotion(reduceMotion) {
  if (!reduceMotion) {
    return { card: useCaseCardReveal, grid: useCaseCardGrid }
  }
  const instant = { duration: 0 }
  return {
    card: {
      hidden: { opacity: 1, x: 0 },
      visible: { opacity: 1, x: 0, transition: instant },
    },
    grid: {
      hidden: {},
      visible: { transition: { staggerChildren: 0, delayChildren: 0 } },
    },
  }
}

// ——— Compliance badges (rise up on scroll) ———
export const complianceBadgeRevealEase = [0.16, 1, 0.3, 1]
export const complianceBadgeReveal = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: complianceBadgeRevealEase },
  },
}
export const complianceBadgeGrid = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.08 },
  },
}
export function getComplianceBadgeMotion(reduceMotion) {
  if (!reduceMotion) {
    return { card: complianceBadgeReveal, grid: complianceBadgeGrid }
  }
  const instant = { duration: 0 }
  return {
    card: {
      hidden: { opacity: 1, y: 0 },
      visible: { opacity: 1, y: 0, transition: instant },
    },
    grid: {
      hidden: {},
      visible: { transition: { staggerChildren: 0, delayChildren: 0 } },
    },
  }
}

// ——— FAQ (accordion panel) ———
export const faqPanelTransition = { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
export function getFaqPanelTransition(reduceMotion) {
  return reduceMotion ? { duration: 0 } : faqPanelTransition
}

// ——— Statistics (count-up values) ———
export const statCountTransition = { duration: 1.6, ease: [0.22, 1, 0.36, 1] }
export function AnimatedStatValue({ value, className = 'text-4xl font-light text-gray-900 sm:text-5xl' }) {
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
    <p ref={ref} className={className}>
      {display}
    </p>
  )
}
