import Container from '../layout/Container'
import ImagePlaceholder from '../ui/ImagePlaceholder'
import { heroContent } from '../../data/hero'

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="flex min-h-[80vh] items-center bg-green-950"
    >
      <Container className="py-16 lg:py-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <h1
              id="hero-heading"
              className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl xl:text-6xl"
            >
              {heroContent.title}
            </h1>
            <p className="mt-6 max-w-xl text-base text-gray-300 sm:text-lg">
              {heroContent.description}
            </p>
          </div>

          <div className="lg:col-span-6">
            <ImagePlaceholder
              label={heroContent.imageLabel}
              className="aspect-[4/3] w-full rounded-md lg:aspect-[5/4]"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
