import { motion, useReducedMotion } from 'motion/react'
import Container from '../layout/Container'
import Button from '../ui/Button'
import AppImage from '../ui/AppImage'
import { heroContent } from '../../data/hero'
import { getFadeInUpMotion } from '@/motion'
import { cn } from '@/lib/cn'

const heroImage = new URL('../../assets/hero.png', import.meta.url).href

/** Per-element hero entrance timing — title, subheading, then buttons. */
const heroMotion = {
  title: { duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] },
  description: { duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
  actions: { duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] },
}

const heroButtonStyles = {
  primary: 'bg-white text-neutral-900 hover:bg-black hover:text-white',
  secondary: 'border border-transparent bg-transparent text-white hover:bg-black/20 active:bg-white/15 focus-visible:outline-white',
}
const heroSectionClass = cn(
  'relative flex h-screen min-h-screen w-full flex-col overflow-hidden -mt-[68px] pt-[68px]',
)

export default function Hero() {
  const [primaryAction, secondaryAction] = heroContent.actions
  const reduceMotion = useReducedMotion()
  const titleMotion = getFadeInUpMotion(reduceMotion, heroMotion.title)
  const descriptionMotion = getFadeInUpMotion(reduceMotion, heroMotion.description)
  const actionsMotion = getFadeInUpMotion(reduceMotion, heroMotion.actions)

  return (
    <section id="hero" aria-labelledby="hero-heading" className={heroSectionClass}>
      <AppImage
        src={heroImage}
        alt={heroContent.imageLabel}
        loading="eager"
        fetchPriority="high"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
      />
      <Container className="relative z-10 flex flex-1 flex-col justify-end pb-16 sm:pb-24 lg:pb-[100px]">
        <div className="mx-auto w-full max-w-[700px] text-center">
          <motion.h1 id="hero-heading" className="text-4xl font-regular leading-[1.15] text-white sm:text-6xl lg:text-6xl" variants={titleMotion} initial="hidden" animate="visible">{heroContent.title}</motion.h1>
          <motion.p className="mx-auto mt-3 max-w-prose text-base leading-relaxed text-white/70 sm:text-lg" variants={descriptionMotion} initial="hidden" animate="visible">{heroContent.description}</motion.p>
          <motion.div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4" variants={actionsMotion} initial="hidden" animate="visible">
            <Button as="a" href={primaryAction.href} useColorStyles={false} className={heroButtonStyles.primary}>{primaryAction.label}</Button>
            <Button as="a" href={secondaryAction.href} useColorStyles={false} className={heroButtonStyles.secondary}>{secondaryAction.label}</Button>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
