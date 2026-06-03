/** Shared Motion (motion.dev) config — https://motion.dev */

import { useEffect, useRef, useState } from 'react'
import { animate, motion, useInView, useReducedMotion } from 'motion/react'

const defaultFadeEase = [0.22, 1, 0.36, 1]
const instantTransition = { duration: 0 }
const instantFadeTransition = { duration: 0, delay: 0 }

/**
 * Global scroll-reveal behavior for fade wrappers.
 * - false: play once per page view (stays visible after first reveal)
 * - true: replay whenever section re-enters viewport (resets when scrolled away)
 */
export const fadeScrollReplayable = false

/** How much of the element must be visible before the fade starts (0–1). */
export const fadeScrollViewportAmount = 0.2

export function getFadeScrollViewport({ once, amount = fadeScrollViewportAmount } = {}) {
  return {
    once: once ?? !fadeScrollReplayable,
    amount,
  }
}

/** Scroll-gated animate target — visible only while in viewport. */
export function useFadeScrollReveal({ once, amount = fadeScrollViewportAmount } = {}) {
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()
  const { once: shouldAnimateOnce, amount: viewportAmount } = getFadeScrollViewport({ once, amount })
  const isInView = useInView(ref, { once: shouldAnimateOnce, amount: viewportAmount })

  return {
    ref,
    animate: reduceMotion || isInView ? 'visible' : 'hidden',
  }
}

function createStaggerContainer({ staggerChildren = 0.08, delayChildren = 0 } = {}) {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren, delayChildren },
    },
  }
}

function createDirectionalFadeVariants({ axis, offset, duration, delay, ease }) {
  return {
    hidden: {
      opacity: 0,
      [axis]: offset,
      // Instant reset when element leaves viewport — no fade-out while off-screen.
      transition: { duration: 0, delay: 0 },
    },
    visible: {
      opacity: 1,
      [axis]: 0,
      transition: { duration, delay, ease },
    },
  }
}

function createReducedDirectionalFadeMotion(axis) {
  return {
    hidden: { opacity: 1, [axis]: 0 },
    visible: { opacity: 1, [axis]: 0, transition: instantFadeTransition },
  }
}

function createFadeVariants({ duration, delay, ease }) {
  return {
    hidden: {
      opacity: 0,
      transition: { duration: 0, delay: 0 },
    },
    visible: {
      opacity: 1,
      transition: { duration, delay, ease },
    },
  }
}

function createReducedFadeMotion() {
  return {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: instantFadeTransition },
  }
}

function createScrollMotion({ reduceMotion, options, getItemMotion, getContainerMotion }) {
  const { staggerChildren, delayChildren, ...itemOptions } = options
  return {
    item: getItemMotion(reduceMotion, itemOptions),
    container: reduceMotion
      ? createStaggerContainer({ staggerChildren: 0, delayChildren: 0 })
      : getContainerMotion({ staggerChildren, delayChildren }),
  }
}

function getReducedCardGridMotion(axis) {
  return {
    card: {
      hidden: { opacity: 1, [axis]: 0 },
      visible: { opacity: 1, [axis]: 0, transition: instantTransition },
    },
    grid: createStaggerContainer({ staggerChildren: 0, delayChildren: 0 }),
  }
}

function parseAnimatedStatValue(value) {
  const match = value.match(/^([\d,]+)(.*)$/)
  const end = match ? Number(match[1].replace(/,/g, '')) : null
  const suffix = match?.[2] ?? ''
  const grouped = Boolean(match?.[1].includes(',') || (end ?? 0) >= 1000)

  return { end, suffix, grouped }
}

// --- Global (fade in up on scroll) ---
export const fadeInUpDefaults = {
  duration: 0.55,
  delay: 0,
  distance: 24,
  ease: defaultFadeEase,
}

/** Bottom-to-top fade variants. Override `duration`, `delay`, `distance`, or `ease`. */
export function getFadeInUpVariants({
  duration = fadeInUpDefaults.duration,
  delay = fadeInUpDefaults.delay,
  distance = fadeInUpDefaults.distance,
  ease = fadeInUpDefaults.ease,
} = {}) {
  return createDirectionalFadeVariants({ axis: 'y', offset: distance, duration, delay, ease })
}

/** Stagger container for multiple fade-in-up children. */
export function getFadeInUpGrid({
  staggerChildren = 0.08,
  delayChildren = 0,
} = {}) {
  return createStaggerContainer({ staggerChildren, delayChildren })
}

export function getFadeInUpMotion(reduceMotion, options = {}) {
  if (!reduceMotion) return getFadeInUpVariants(options)
  return createReducedDirectionalFadeMotion('y')
}

export function getFadeInUpScrollMotion(reduceMotion, options = {}) {
  return createScrollMotion({
    reduceMotion,
    options,
    getItemMotion: getFadeInUpMotion,
    getContainerMotion: getFadeInUpGrid,
  })
}

/** Drop-in scroll reveal wrapper. Pass `duration` and `delay` to tune timing. */
export function FadeInUp({
  children,
  className,
  duration,
  delay,
  distance,
  ease,
  once,
  amount = fadeScrollViewportAmount,
  ...rest
}) {
  const reduceMotion = useReducedMotion()
  const variants = getFadeInUpMotion(reduceMotion, { duration, delay, distance, ease })
  const { ref, animate } = useFadeScrollReveal({ once, amount })

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={animate}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

// --- Global (fade in down on scroll) ---
export const fadeInDownDefaults = {
  duration: 0.55,
  delay: 0,
  distance: 24,
  ease: defaultFadeEase,
}

/** Top-to-bottom fade variants. Override `duration`, `delay`, `distance`, or `ease`. */
export function getFadeInDownVariants({
  duration = fadeInDownDefaults.duration,
  delay = fadeInDownDefaults.delay,
  distance = fadeInDownDefaults.distance,
  ease = fadeInDownDefaults.ease,
} = {}) {
  return createDirectionalFadeVariants({ axis: 'y', offset: -distance, duration, delay, ease })
}

/** Stagger container for multiple fade-in-down children. */
export function getFadeInDownGrid({
  staggerChildren = 0.08,
  delayChildren = 0,
} = {}) {
  return createStaggerContainer({ staggerChildren, delayChildren })
}

export function getFadeInDownMotion(reduceMotion, options = {}) {
  if (!reduceMotion) return getFadeInDownVariants(options)
  return createReducedDirectionalFadeMotion('y')
}

export function getFadeInDownScrollMotion(reduceMotion, options = {}) {
  return createScrollMotion({
    reduceMotion,
    options,
    getItemMotion: getFadeInDownMotion,
    getContainerMotion: getFadeInDownGrid,
  })
}

/** Drop-in scroll reveal wrapper. Pass `duration` and `delay` to tune timing. */
export function FadeInDown({
  children,
  className,
  duration,
  delay,
  distance,
  ease,
  once,
  amount = fadeScrollViewportAmount,
  ...rest
}) {
  const reduceMotion = useReducedMotion()
  const variants = getFadeInDownMotion(reduceMotion, { duration, delay, distance, ease })
  const { ref, animate } = useFadeScrollReveal({ once, amount })

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={animate}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

// --- Global (fade in left on scroll) ---
export const fadeInLeftDefaults = {
  duration: 0.55,
  delay: 0,
  distance: 24,
  ease: defaultFadeEase,
}

/** Left-to-right fade variants. Override `duration`, `delay`, `distance`, or `ease`. */
export function getFadeInLeftVariants({
  duration = fadeInLeftDefaults.duration,
  delay = fadeInLeftDefaults.delay,
  distance = fadeInLeftDefaults.distance,
  ease = fadeInLeftDefaults.ease,
} = {}) {
  return createDirectionalFadeVariants({ axis: 'x', offset: -distance, duration, delay, ease })
}

/** Stagger container for multiple fade-in-left children. */
export function getFadeInLeftGrid({
  staggerChildren = 0.08,
  delayChildren = 0,
} = {}) {
  return createStaggerContainer({ staggerChildren, delayChildren })
}

export function getFadeInLeftMotion(reduceMotion, options = {}) {
  if (!reduceMotion) return getFadeInLeftVariants(options)
  return createReducedDirectionalFadeMotion('x')
}

export function getFadeInLeftScrollMotion(reduceMotion, options = {}) {
  return createScrollMotion({
    reduceMotion,
    options,
    getItemMotion: getFadeInLeftMotion,
    getContainerMotion: getFadeInLeftGrid,
  })
}

/** Drop-in scroll reveal wrapper. Pass `duration` and `delay` to tune timing. */
export function FadeInLeft({
  children,
  className,
  duration,
  delay,
  distance,
  ease,
  once,
  amount = fadeScrollViewportAmount,
  ...rest
}) {
  const reduceMotion = useReducedMotion()
  const variants = getFadeInLeftMotion(reduceMotion, { duration, delay, distance, ease })
  const { ref, animate } = useFadeScrollReveal({ once, amount })

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={animate}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

// --- Global (fade in right on scroll) ---
export const fadeInRightDefaults = {
  duration: 0.55,
  delay: 0,
  distance: 24,
  ease: defaultFadeEase,
}

/** Right-to-left fade variants. Override `duration`, `delay`, `distance`, or `ease`. */
export function getFadeInRightVariants({
  duration = fadeInRightDefaults.duration,
  delay = fadeInRightDefaults.delay,
  distance = fadeInRightDefaults.distance,
  ease = fadeInRightDefaults.ease,
} = {}) {
  return createDirectionalFadeVariants({ axis: 'x', offset: distance, duration, delay, ease })
}

/** Stagger container for multiple fade-in-right children. */
export function getFadeInRightGrid({
  staggerChildren = 0.08,
  delayChildren = 0,
} = {}) {
  return createStaggerContainer({ staggerChildren, delayChildren })
}

export function getFadeInRightMotion(reduceMotion, options = {}) {
  if (!reduceMotion) return getFadeInRightVariants(options)
  return createReducedDirectionalFadeMotion('x')
}

export function getFadeInRightScrollMotion(reduceMotion, options = {}) {
  return createScrollMotion({
    reduceMotion,
    options,
    getItemMotion: getFadeInRightMotion,
    getContainerMotion: getFadeInRightGrid,
  })
}

/** Drop-in scroll reveal wrapper. Pass `duration` and `delay` to tune timing. */
export function FadeInRight({
  children,
  className,
  duration,
  delay,
  distance,
  ease,
  once,
  amount = fadeScrollViewportAmount,
  ...rest
}) {
  const reduceMotion = useReducedMotion()
  const variants = getFadeInRightMotion(reduceMotion, { duration, delay, distance, ease })
  const { ref, animate } = useFadeScrollReveal({ once, amount })

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={animate}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

// --- Global (fade in on scroll) ---
export const fadeInDefaults = {
  duration: 0.55,
  delay: 0,
  ease: defaultFadeEase,
}

/** Opacity-only fade variants. Override `duration`, `delay`, or `ease`. */
export function getFadeInVariants({
  duration = fadeInDefaults.duration,
  delay = fadeInDefaults.delay,
  ease = fadeInDefaults.ease,
} = {}) {
  return createFadeVariants({ duration, delay, ease })
}

/** Stagger container for multiple fade-in children. */
export function getFadeInGrid({
  staggerChildren = 0.08,
  delayChildren = 0,
} = {}) {
  return createStaggerContainer({ staggerChildren, delayChildren })
}

export function getFadeInMotion(reduceMotion, options = {}) {
  if (!reduceMotion) return getFadeInVariants(options)
  return createReducedFadeMotion()
}

export function getFadeInScrollMotion(reduceMotion, options = {}) {
  return createScrollMotion({
    reduceMotion,
    options,
    getItemMotion: getFadeInMotion,
    getContainerMotion: getFadeInGrid,
  })
}

/** Drop-in scroll reveal wrapper. Pass `duration` and `delay` to tune timing. */
export function FadeIn({
  children,
  className,
  duration,
  delay,
  ease,
  once,
  amount = fadeScrollViewportAmount,
  ...rest
}) {
  const reduceMotion = useReducedMotion()
  const variants = getFadeInMotion(reduceMotion, { duration, delay, ease })
  const { ref, animate } = useFadeScrollReveal({ once, amount })

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={animate}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

// --- Features (active card indicator) ---
export const featureCardActiveTransition = {
  type: 'spring',
  stiffness: 420,
  damping: 36,
}
export const featureCardActiveTransitionReduced = { duration: 0 }

// --- Testimonial (carousel progress + slides) ---
export const testimonialAutoplayMs = 10000
export const testimonialSlideTransition = { duration: 0.35, ease: [0.22, 1, 0.36, 1] }
export function getTestimonialProgressTransition(reduceMotion) {
  return reduceMotion
    ? { duration: 0 }
    : { duration: testimonialAutoplayMs / 1000, ease: 'linear' }
}

// --- Use cases (card reveal on scroll) ---
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
  return getReducedCardGridMotion('x')
}

// --- Compliance badges (rise up on scroll) ---
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
  return getReducedCardGridMotion('y')
}

// --- FAQ (accordion panel) ---
export const faqPanelTransition = { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
export function getFaqPanelTransition(reduceMotion) {
  return reduceMotion ? { duration: 0 } : faqPanelTransition
}

// --- Statistics (count-up values) ---
export const statCountTransition = { duration: 1.6, ease: [0.22, 1, 0.36, 1] }
export function AnimatedStatValue({ value, className = 'text-4xl font-light text-gray-900 sm:text-5xl' }) {
  const { end, suffix, grouped } = parseAnimatedStatValue(value)

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
