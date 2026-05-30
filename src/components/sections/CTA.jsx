import Container from '../layout/Container'
import Button from '../ui/Button'
import ImagePlaceholder from '../ui/ImagePlaceholder'
import { ctaContent } from '../../data/hero'

export default function CTA() {
  return (
    <section
      id="contact"
      aria-labelledby="cta-heading"
      className="bg-white py-16 lg:py-20"
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <h2
              id="cta-heading"
              className="text-2xl font-semibold text-gray-900 sm:text-3xl lg:text-4xl xl:text-5xl"
            >
              {ctaContent.title}
            </h2>
            <div className="mt-8">
              <Button>Contact Us</Button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <ImagePlaceholder
              label={ctaContent.imageLabel}
              className="aspect-[4/3] w-full rounded-md lg:aspect-[5/4]"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
