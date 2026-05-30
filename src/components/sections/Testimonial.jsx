import Container from '../layout/Container'
import ImagePlaceholder from '../ui/ImagePlaceholder'
import { testimonial } from '../../data/testimonial'

export default function Testimonial() {
  return (
    <section aria-labelledby="testimonial-heading" className="bg-white py-16 lg:py-20">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <ImagePlaceholder
              label={testimonial.imageLabel}
              className="aspect-[3/4] w-full rounded-md lg:aspect-auto lg:h-[480px]"
            />
          </div>

          <div className="lg:col-span-8">
            <div
              className="mb-8 flex h-10 w-36 items-center justify-center rounded border border-gray-200 bg-gray-50"
              role="img"
              aria-label={`${testimonial.companyLogo} logo`}
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                {testimonial.companyLogo}
              </span>
            </div>

            <blockquote>
              <p
                id="testimonial-heading"
                className="text-lg leading-relaxed text-gray-700 sm:text-xl lg:text-2xl"
              >
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <footer className="mt-8">
                <cite className="not-italic">
                  <span className="block text-base font-semibold text-gray-900">
                    {testimonial.clientName}
                  </span>
                  <span className="mt-1 block text-sm text-gray-600">
                    {testimonial.companyName}
                  </span>
                </cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </Container>
    </section>
  )
}
