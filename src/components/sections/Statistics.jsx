import { motion, useReducedMotion } from 'motion/react'
import Container from '../layout/Container'
import { AnimatedStatValue, getFadeInDownScrollMotion, getFadeInRightMotion, useFadeScrollReveal } from '@/motion'
import { statistics, statisticsContent } from '../../data/statistics'
import { cn } from '@/lib/cn'
import { bodyMd, containerGrid12, gridGapLg, headingH2, sectionContentMt, sectionPy } from '@/lib/sectionStyles'

/** Statistics intro — right-to-left fade. Lower `duration` = faster. */
const statisticsIntroMotion = {
  heading: { duration: 0.55, delay: 0.20, ease: [0.22, 1, 0.36, 1] },
  description: { duration: 0.55, delay: 0.30, ease: [0.22, 1, 0.36, 1] },
}

/** Stat cards — top-to-bottom fade with stagger. Lower `duration` = faster. */
const statisticsCardMotion = {
  duration: 0.8,
  delay: 0.20,
  staggerChildren: 0.20,
  delayChildren: 0.1,
  ease: [0.22, 1, 0.36, 1],
}

function StatCard({ value, label, cardBg = 'bg-olive-200', valueText, labelText, variants }) {
  return (
    <motion.div variants={variants} className={cn('flex min-h-[140px] flex-col justify-between rounded-sm p-5 sm:min-h-[160px] sm:p-6 lg:min-h-[180px] lg:p-7', cardBg)}>
      <AnimatedStatValue value={value} className={cn('text-4xl font-light sm:text-5xl', valueText)} />
      <p className={cn('text-base', labelText)}>{label}</p>
    </motion.div>
  )
}

export default function Statistics() {
  const reduceMotion = useReducedMotion()
  const headingVariants = getFadeInRightMotion(reduceMotion, statisticsIntroMotion.heading)
  const descriptionVariants = getFadeInRightMotion(reduceMotion, statisticsIntroMotion.description)
  const headingReveal = useFadeScrollReveal()
  const descriptionReveal = useFadeScrollReveal()
  const cardsReveal = useFadeScrollReveal()
  const { item: cardVariants, container: cardGridVariants } = getFadeInDownScrollMotion(reduceMotion, statisticsCardMotion)

  return (
    <section aria-labelledby="statistics-heading" className={sectionPy}>
      <Container>
        <div className={cn(containerGrid12, gridGapLg, 'items-start')}>
          <div className="lg:col-span-6">
            <motion.h2
              ref={headingReveal.ref}
              id="statistics-heading"
              animate={headingReveal.animate}
              variants={headingVariants}
              initial="hidden"
              className={headingH2}
            >
              {statisticsContent.title}
            </motion.h2>
          </div>
          <div className="lg:col-span-6 lg:justify-self-end">
            <motion.p
              ref={descriptionReveal.ref}
              animate={descriptionReveal.animate}
              variants={descriptionVariants}
              initial="hidden"
              className={bodyMd}
            >
              {statisticsContent.description}
            </motion.p>
          </div>
        </div>
        <motion.div
          ref={cardsReveal.ref}
          animate={cardsReveal.animate}
          variants={cardGridVariants}
          initial="hidden"
          className={cn(sectionContentMt, 'grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3')}
        >
          {statistics.map((stat) => (
            <StatCard
              key={stat.id}
              variants={cardVariants}
              value={stat.value}
              label={stat.label}
              cardBg={stat.cardBg}
              valueText={stat.valueText}
              labelText={stat.labelText}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
