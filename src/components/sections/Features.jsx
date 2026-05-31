import { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { FeatherIcon } from '@/icons'
import Container from '../layout/Container'
import SectionHeading from '../ui/SectionHeading'
import { valueIntro, valueSections } from '../../data/valueContent'
import {
  featureCardActiveTransition,
  featureCardActiveTransitionReduced,
} from '@/motion'

function FeaturesHeading() {
  return (
    <div className="mx-auto text-center">
      <SectionHeading
        eyebrow={valueIntro.eyebrow}
        title={valueIntro.title}
        description={valueIntro.description}
        titleId="features-heading"
      />
    </div>
  )
}
function FeatureImage({ item }) {
  return (
    <img
      key={item.id}
      src={item.image}
      alt={item.imageLabel}
      className="h-[300px] max-h-[300px] w-full rounded-md object-cover object-top lg:h-auto lg:min-h-[500px] lg:max-h-[500px]"
    />
  )
}
function FeatureHeading({ id, title, className = '' }) {
  return (
    <h3
      id={id}
      className={`text-2xl font-regular tracking-tight text-gray-900 sm:text-2xl lg:text-3xl ${className}`.trim()}
    >
      {title}
    </h3>
  )
}
function FeatureCard({ headline, description, active, onSelect, activeLayoutId }) {
  const reduceMotion = useReducedMotion()
  const activeTransition = reduceMotion
    ? featureCardActiveTransitionReduced
    : featureCardActiveTransition

  return (
    <motion.button
      type="button"
      onClick={onSelect}
      layout
      className={`relative w-full cursor-pointer rounded-md border border-transparent bg-transparent p-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 lg:p-6 ${
        !active ? 'hover:bg-white/60' : ''
      }`}
    >
      {active ? (
        <motion.div
          layoutId={activeLayoutId}
          className="absolute inset-0 rounded-md bg-white shadow-lg"
          transition={activeTransition}
        />
      ) : null}
      <div className="relative z-10">
        <div className="flex flex-col items-start gap-3 lg:flex-row lg:items-center">
          <FeatherIcon name="layers" size={20} className="text-gray-900" />
          <h4 className="text-lg font-medium text-gray-900">{headline}</h4>
        </div>
        <p className="mt-2 text-md text-gray-600">{description}</p>
      </div>
    </motion.button>
  )
}
function FeatureContent({ items, activeItemId, onSelectItem, sectionId }) {
  const activeLayoutId = `feature-card-active-${sectionId}`

  return (
    <div className="flex flex-col gap-1 rounded-lg bg-[#EBEBE5] p-1">
      {items.map((item) => (
        <FeatureCard
          key={item.id}
          headline={item.headline}
          description={item.description}
          active={activeItemId === item.id}
          onSelect={() => onSelectItem(item.id)}
          activeLayoutId={activeLayoutId}
        />
      ))}
    </div>
  )
}
function FeatureSection({ section, reversed }) {
  const [activeItemId, setActiveItemId] = useState(section.items[0]?.id)
  const activeItem = section.items.find((item) => item.id === activeItemId) ?? section.items[0]
  const textCol = reversed ? 'lg:col-start-1' : 'lg:col-start-7'
  const imageCol = reversed ? 'lg:col-start-7' : 'lg:col-start-1'
  return (
    <div
      aria-labelledby={`${section.id}-heading`}
      className="grid grid-cols-1 items-stretch gap-[32px] lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-[40px] lg:min-h-[500px]"
    >
      <FeatureHeading
        id={`${section.id}-heading`}
        title={section.title}
        className={`lg:col-span-6 ${textCol} lg:row-start-1`}
      />
      <div className={`overflow-hidden lg:col-span-6 ${imageCol} lg:row-span-2 lg:row-start-1`}>
        <FeatureImage item={activeItem} />
      </div>
      <div className={`lg:col-span-6 ${textCol} lg:row-start-2 lg:self-end`}>
        <FeatureContent
          sectionId={section.id}
          items={section.items}
          activeItemId={activeItemId}
          onSelectItem={setActiveItemId}
        />
      </div>
    </div>
  )
}
export default function Features() {
  return (
    <div aria-labelledby="features-heading" className="bg-olive-100 py-20 sm:py-20 lg:py-24">
      <Container>
        <FeaturesHeading />
        <div className="mt-24 flex flex-col gap-[80px] sm:mt-16 sm:gap-[64px] lg:mt-24 lg:gap-[80px]">
          {valueSections.map((section, index) => (
            <FeatureSection key={section.id} section={section} reversed={index % 2 === 1} />
          ))}
        </div>
      </Container>
    </div>
  )
}