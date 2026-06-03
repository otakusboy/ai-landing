import { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { FeatherIcon } from '@/icons'
import Container from '../layout/Container'
import SectionHeading from '../ui/SectionHeading'
import { valueIntro, valueSections } from '../../data/valueContent'
import {
  featureCardActiveTransition,
  featureCardActiveTransitionReduced,
  getFadeInDownMotion,
  getFadeInScrollMotion,
  useFadeScrollReveal,
} from '@/motion'
import AppImage from '../ui/AppImage'
import { cn } from '@/lib/cn'
import { focusRing, sectionContentMt, sectionPyLoose, stackGapSection } from '@/lib/sectionStyles'

const featureImageClass = cn(
  'h-[300px] max-h-[300px] w-full rounded-md object-cover object-top',
  'lg:h-[500px] lg:max-h-[500px]',
)
const featureHeadingClass = 'text-2xl font-regular tracking-tight text-gray-900 sm:text-2xl lg:text-3xl'
const featureCardBase = cn(
  'relative w-full cursor-pointer rounded-md border border-transparent bg-transparent p-3.5 text-left sm:p-4 md:p-5 lg:p-6',
  focusRing,
)
const featureSectionGridClass = cn(
  'grid min-h-0 grid-cols-1 items-stretch gap-6 md:gap-6 lg:min-h-[500px] lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-10',
)

/** Features heading entrance — top-to-bottom fade per line. Lower `duration` = faster. */
const featuresHeadingMotion = {
  eyebrow: { duration: 0.55, delay: 0, ease: [0.22, 1, 0.36, 1] },
  title: { duration: 0.55, delay: 0.20, ease: [0.22, 1, 0.36, 1] },
  description: { duration: 0.55, delay: 0.24, ease: [0.22, 1, 0.36, 1] },
}

/** Feature card entrance — opacity fade with stagger. Lower `duration` = faster. */
const featureCardMotion = {
  duration: 0.8,
  delay: 0.15,
  staggerChildren: 0.08,
  delayChildren: 0.1,
  ease: [0.22, 1, 0.36, 1],
}

/** Feature section title — top-to-bottom fade. Lower `duration` = faster. */
const featureSectionHeadingMotion = {
  duration: 1,
  delay: 0.20,
  ease: [0.22, 1, 0.36, 1],
}

function FeaturesHeading() {
  return (
    <div className="mx-auto text-center">
      <SectionHeading
        motion={featuresHeadingMotion}
        eyebrow={valueIntro.eyebrow}
        title={valueIntro.title}
        description={valueIntro.description}
        titleId="features-heading"
      />
    </div>
  )
}

function FeatureImage({ item }) {
  return <AppImage src={item.image} alt={item.imageLabel} className={featureImageClass} />
}

function FeatureHeading({ id, title, className }) {
  const reduceMotion = useReducedMotion()
  const variants = getFadeInDownMotion(reduceMotion, featureSectionHeadingMotion)
  const { ref, animate } = useFadeScrollReveal()

  return (
    <motion.h3
      ref={ref}
      id={id}
      animate={animate}
      variants={variants}
      initial="hidden"
      className={cn(featureHeadingClass, className)}
    >
      {title}
    </motion.h3>
  )
}

function FeatureCard({ icon = 'layers', headline, description, active, onSelect, activeLayoutId, variants }) {
  const reduceMotion = useReducedMotion()
  const activeTransition = reduceMotion ? featureCardActiveTransitionReduced : featureCardActiveTransition
  return (
    <motion.button type="button" onClick={onSelect} layout variants={variants} className={cn(featureCardBase, !active && 'hover:bg-white/60')}>
      {active ? <motion.div layoutId={activeLayoutId} className="absolute inset-0 rounded-md bg-white shadow-lg" transition={activeTransition} /> : null}
      <div className="relative z-10">
        <div className="flex flex-col items-start gap-3 lg:flex-row lg:items-center">
          <FeatherIcon name={icon} size={20} className="text-gray-900" />
          <h4 className="text-lg font-medium text-gray-900">{headline}</h4>
        </div>
        <p className="mt-2 text-base text-gray-600">{description}</p>
      </div>
    </motion.button>
  )
}

function FeatureContent({ items, activeItemId, onSelectItem, sectionId }) {
  const reduceMotion = useReducedMotion()
  const { item: cardVariants, container: gridVariants } = getFadeInScrollMotion(reduceMotion, featureCardMotion)
  const { ref, animate } = useFadeScrollReveal()
  const activeLayoutId = `feature-card-active-${sectionId}`

  return (
    <motion.div
      ref={ref}
      animate={animate}
      variants={gridVariants}
      initial="hidden"
      className="flex flex-col gap-1 rounded-lg bg-[#EBEBE5] p-1"
    >
      {items.map((item) => (
        <FeatureCard
          key={item.id}
          variants={cardVariants}
          icon={item.icon}
          headline={item.headline}
          description={item.description}
          active={activeItemId === item.id}
          onSelect={() => onSelectItem(item.id)}
          activeLayoutId={activeLayoutId}
        />
      ))}
    </motion.div>
  )
}

function FeatureSection({ section, reversed }) {
  const [activeItemId, setActiveItemId] = useState(section.items[0]?.id)
  const activeItem = section.items.find((item) => item.id === activeItemId) ?? section.items[0]
  const textCol = reversed ? 'lg:col-start-1' : 'lg:col-start-7'
  const imageCol = reversed ? 'lg:col-start-7' : 'lg:col-start-1'
  return (
    <div aria-labelledby={`${section.id}-heading`} className={featureSectionGridClass}>
      <FeatureHeading id={`${section.id}-heading`} title={section.title} className={cn('lg:col-span-6 lg:row-start-1', textCol)} />
      <div className={cn('overflow-hidden lg:col-span-6 lg:row-span-2 lg:row-start-1', imageCol)}>
        <FeatureImage item={activeItem} />
      </div>
      <div className={cn('lg:col-span-6 lg:row-start-2 lg:self-end', textCol)}>
        <FeatureContent sectionId={section.id} items={section.items} activeItemId={activeItemId} onSelectItem={setActiveItemId} />
      </div>
    </div>
  )
}

export default function Features() {
  return (
    <section id="about" aria-labelledby="features-heading" className={cn('bg-olive-100', sectionPyLoose)}>
      <Container>
        <FeaturesHeading />
        <div className={cn(sectionContentMt, 'flex flex-col', stackGapSection)}>
          {valueSections.map((section, index) => (
            <FeatureSection key={section.id} section={section} reversed={index % 2 === 1} />
          ))}
        </div>
      </Container>
    </section>
  )
}
