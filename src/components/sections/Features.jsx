import Container from '../layout/Container'
import ImagePlaceholder from '../ui/ImagePlaceholder'
import SectionHeading from '../ui/SectionHeading'
import { valueIntro, valueSections } from '../../data/valueContent'

function FeatureItem({ headline, description }) {
  return (
    <article className="rounded-md border border-transparent p-4 transition-colors hover:border-gray-200 hover:bg-gray-50">
      <h4 className="text-xl font-bold text-gray-900">{headline}</h4>
      <p className="mt-2 text-base text-gray-600">{description}</p>
    </article>
  )
}

function FeatureBlock({ section, reversed }) {
  return (
    <div
      aria-labelledby={`${section.id}-heading`}
      className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16"
    >
      <div className={`lg:col-span-6 ${reversed ? 'lg:order-2' : 'lg:order-1'}`}>
        <ImagePlaceholder label={section.imageLabel} className="h-[400px] w-full rounded-md" />
      </div>
      <div className={`flex flex-col justify-center lg:col-span-6 ${reversed ? 'lg:order-1' : 'lg:order-2'}`}>
        <h3 id={`${section.id}-heading`} className="text-2xl font-semibold text-gray-900 sm:text-3xl">
          {section.title}
        </h3>
        <div className="mt-8 space-y-2">
          {section.items.map((item) => (
            <FeatureItem key={item.id} headline={item.headline} description={item.description} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Features() {
  return (
    <section aria-labelledby="features-heading" className="py-16 lg:py-20">
      <Container>
        <div className="mx-auto text-center">
          <SectionHeading
            eyebrow={valueIntro.eyebrow}
            title={valueIntro.title}
            description={valueIntro.description}
            titleId="features-heading"
          />
        </div>
        <div className="mt-20 space-y-16 lg:space-y-20">
          {valueSections.map((section, index) => (
            <FeatureBlock key={section.id} section={section} reversed={index % 2 === 1} />
          ))}
        </div>
      </Container>
    </section>
  )
}
