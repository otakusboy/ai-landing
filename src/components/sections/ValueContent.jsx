import Container from '../layout/Container'
import ImagePlaceholder from '../ui/ImagePlaceholder'

function ValueItem({ headline, description }) {
  return (
    <article className="rounded-md border border-transparent p-4 transition-colors hover:border-gray-200 hover:bg-gray-50">
      <h4 className="text-xl font-bold text-gray-900">{headline}</h4>
      <p className="mt-2 text-base leading-relaxed text-gray-600">{description}</p>
    </article>
  )
}

export default function ValueContent({ section, reversed = false, compactTop = false }) {
  const spacing = compactTop ? 'pt-0 pb-16 lg:pb-20' : 'py-16 lg:py-20'

  return (
    <section
      aria-labelledby={`${section.id}-heading`}
      className={spacing}
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div
            className={`lg:col-span-6 ${reversed ? 'lg:order-2' : 'lg:order-1'}`}
          >
            <ImagePlaceholder
              label={section.imageLabel}
              className="h-[400px] w-full rounded-md"
            />
          </div>

          <div
            className={`flex flex-col justify-center lg:col-span-6 ${reversed ? 'lg:order-1' : 'lg:order-2'}`}
          >
            <h3
              id={`${section.id}-heading`}
              className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl"
            >
              {section.title}
            </h3>
            <div className="mt-8 space-y-2">
              {section.items.map((item) => (
                <ValueItem
                  key={item.id}
                  headline={item.headline}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
