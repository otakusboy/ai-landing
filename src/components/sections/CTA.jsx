import Container from '../layout/Container'
import Button from '../ui/Button'
import ImagePlaceholder from '../ui/ImagePlaceholder'
import { ctaContent } from '../../data/hero'
import { cn } from '@/lib/cn'
import { containerGrid12, gridGapLg, headingH2, sectionPy } from '@/lib/sectionStyles'

export default function CTA() {
  return (
    <section id="contact" aria-labelledby="cta-heading" className={cn('bg-white', sectionPy)}>
      <Container>
        <div className={cn(containerGrid12, gridGapLg, 'items-center')}>
          <div className="lg:col-span-6">
            <h2 id="cta-heading" className={cn(headingH2, 'xl:text-5xl')}>{ctaContent.title}</h2>
            <div className="mt-8">
              <Button>Contact Us</Button>
            </div>
          </div>
          <div className="lg:col-span-6">
            <ImagePlaceholder label={ctaContent.imageLabel} className="aspect-[4/3] w-full rounded-md lg:aspect-[5/4]" />
          </div>
        </div>
      </Container>
    </section>
  )
}
