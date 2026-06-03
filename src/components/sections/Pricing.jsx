import { motion, useReducedMotion } from 'motion/react'
import Container from '../layout/Container'
import Button from '../ui/Button'
import SectionHeading from '../ui/SectionHeading'
import { FeatherIcon } from '@/icons'
import { pricingContent, pricingPlans } from '../../data/pricing'
import { getFadeInDownMotion, getFadeInGrid, getFadeInScrollMotion, useFadeScrollReveal } from '@/motion'
import { cn } from '@/lib/cn'
import { cardSurface, pricingCardLast, pricingGrid, sectionPy } from '@/lib/sectionStyles'

/** Pricing heading — top-to-bottom fade. Lower `duration` = faster. */
const pricingHeadingMotion = {
  duration: 1,
  delay: 0.20,
  ease: [0.22, 1, 0.36, 1],
}

/** Pricing cards — default opacity fade with stagger. Lower `duration` = faster. */
const pricingCardMotion = {
  duration: 1,
  delay: 0.20,
  staggerChildren: 0.12,
  delayChildren: 0.1,
  ease: [0.22, 1, 0.36, 1],
}

/** Section-level stagger — heading first, then card grid. */
const pricingSectionStagger = {
  staggerChildren: 0.12,
  delayChildren: 0,
}

const pricingCardBase = cn(cardSurface, 'flex h-full flex-col p-6 sm:p-8 lg:p-10')
const pricingDisplayFont = 'font-display-alternative'
const pricingDivider = 'border-t border-olive-300'
const pricingInsetPt = 'pt-6 sm:pt-8 lg:pt-8'
const pricingInsetMt = 'mt-6 sm:mt-8 lg:mt-10'
const pricingInsetMtSm = 'mt-5 sm:mt-6 lg:mt-8'

function PricingFeatureList({ items }) {
  return (
    <ul className="space-y-3">
      {items.map((feature) => (
        <li key={feature} className="flex items-start gap-3 text-sm text-olive-600">
          <FeatherIcon name="check" size={18} strokeWidth={1.5} className="mt-0.5 text-olive-900" />
          {feature}
        </li>
      ))}
    </ul>
  )
}

function PricingFeatures({ groups }) {
  if (!groups?.length) return null

  return (
    <div className={pricingInsetPt}>
      {groups.map((group, index) => (
        <div
          key={`${group.label}-${index}`}
          className={cn(index > 0 ? pricingInsetPt : 'md:min-h-[220px]')}
        >
          <p className="text-sm font-semibold text-olive-950">{group.label}</p>
          <div className="mt-4">
            <PricingFeatureList items={group.items} />
          </div>
        </div>
      ))}
    </div>
  )
}

function PricingCard({ plan, className, variants }) {
  return (
    <motion.article variants={variants} className={cn(pricingCardBase, plan.highlighted ? 'border-olive-700 ring-1 rounded-xs' : 'rounded-xs', className)}>
      <div className="flex items-start justify-between gap-3">
        <p className={cn(pricingDisplayFont, 'text-xl font-normal text-olive-900')}>{plan.name}</p>
        {plan.highlighted ? (
          <span className="shrink-0 bg-olive-800 px-2 py-1 text-xs font-medium text-white rounded-md uppercase">Most popular</span>
        ) : null}
      </div>
      <div className="mt-4 flex items-baseline gap-1">
        <span className={cn(pricingDisplayFont, 'text-4xl font-light text-olive-900')}>{plan.price}</span>
        {plan.period ? <span className="text-sm text-gray-600">{plan.period}</span> : null}
      </div>

      <hr className={cn(pricingDivider, pricingInsetMtSm)} />

      <div className={cn('flex flex-1 flex-col', pricingInsetPt)}>
        <h3 className="text-md font-light text-olive-700">{plan.whatsIncludedTitle}</h3>
        <PricingFeatures groups={plan.featureGroups} />
      </div>

      <hr className={cn(pricingDivider, pricingInsetMt)} />

      <Button
        variant={plan.highlighted ? 'primary' : 'secondary'}
        className={cn(pricingInsetMt, 'w-full cursor-pointer')}
      >
        {plan.cta}
      </Button>
    </motion.article>
  )
}

export default function Pricing() {
  const reduceMotion = useReducedMotion()
  const sectionReveal = useFadeScrollReveal({ once: true })
  const headingVariants = getFadeInDownMotion(reduceMotion, pricingHeadingMotion)
  const sectionContainerVariants = getFadeInGrid(pricingSectionStagger)
  const { item: cardVariants, container: cardGridVariants } = getFadeInScrollMotion(reduceMotion, pricingCardMotion)
  const lastPlanIndex = pricingPlans.length - 1

  return (
    <section id="pricing" aria-labelledby="pricing-heading" className={cn('bg-white', sectionPy)}>
      <Container>
        <motion.div
          ref={sectionReveal.ref}
          animate={sectionReveal.animate}
          variants={sectionContainerVariants}
          initial="hidden"
        >
          <motion.div variants={headingVariants}>
            <SectionHeading
              className="text-center"
              title={pricingContent.title}
              description={pricingContent.description}
              titleId="pricing-heading"
            />
          </motion.div>
          <motion.div variants={cardGridVariants} className={pricingGrid}>
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={plan.id}
                variants={cardVariants}
                plan={plan}
                className={index === lastPlanIndex ? pricingCardLast : undefined}
              />
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
