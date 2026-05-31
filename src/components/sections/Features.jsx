import { useState } from 'react'
import { FeatherIcon } from '@/icons'
import Container from '../layout/Container'
import ImagePlaceholder from '../ui/ImagePlaceholder'
import SectionHeading from '../ui/SectionHeading'
import { valueIntro, valueSections } from '../../data/valueContent'


function FeatureBlock({ section, reversed }) {
  const [activeItemId, setActiveItemId] = useState(section.items[0]?.id)

  return (
    <div
      aria-labelledby={`${section.id}-heading`}
      className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-16"
    >
      <div className={`lg:col-span-6 ${reversed ? 'lg:order-2' : 'lg:order-1'}`}>
        <ImagePlaceholder label={section.imageLabel} className="min-h-[500px] w-full rounded-md" />
      </div>
      <div
        className={`flex min-h-[400px] flex-col justify-between lg:col-span-6 lg:min-h-0 lg:h-full ${reversed ? 'lg:order-1' : 'lg:order-2'}`}
      >
        <h3 id={`${section.id}-heading`} className="text-xl font-regular tracking-tight text-gray-900 sm:text-2xl lg:text-3xl">
          {section.title}
        </h3>
        <div className="flex flex-col gap-1 rounded-lg bg-[#EBEBE5] py-1 px-1">
          {section.items.map((item) => (
            <FeatureItem
              key={item.id}
              headline={item.headline}
              description={item.description}
              active={activeItemId === item.id}
              onSelect={() => setActiveItemId(item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Features() {
  return (
    <div aria-labelledby="features-heading" className="bg-olive-100 py-24 lg:py-24">
      <Container>
        <div className="mx-auto text-center">
          <SectionHeading
            eyebrow={valueIntro.eyebrow}
            title={valueIntro.title}
            description={valueIntro.description}
            titleId="features-heading"
          />
        </div>
        <div className="mt-32 space-y-16 lg:space-y-20">
          {valueSections.map((section, index) => (
            <FeatureBlock key={section.id} section={section} reversed={index % 2 === 1} />
          ))}
        </div>
      </Container>
    </div>
  )
}

function FeatureItem({ headline, description, active, onSelect }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`w-full rounded-md border border-transparent p-6 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 ${
        active ? 'bg-white shadow-lg' : 'bg-transparent shadow-none hover:bg-white/60'
      }`}
    >
      <div className="flex items-center gap-3">
        <FeatherIcon name="layers" size={20} className="text-gray-900" />
        <h4 className="text-lg font-medium text-gray-900">{headline}</h4>
      </div>
      <p className="mt-2 text-md text-gray-600">{description}</p>
    </button>
  )
}