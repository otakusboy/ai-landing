import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import Container from '../layout/Container'
import AppImage from '../ui/AppImage'
import ImagePlaceholder from '../ui/ImagePlaceholder'
import { getTestimonialProgressTransition, testimonialSlideTransition } from '@/motion'
import { testimonials } from '../../data/testimonial'
import { cn } from '@/lib/cn'
import { focusRing, gridGapLg, sectionPy, testimonialImage } from '@/lib/sectionStyles'

const testimonialLayout = cn(
  'flex flex-col',
  gridGapLg,
  'lg:flex-row lg:items-stretch',
)
const testimonialImageCol = 'w-full lg:w-5/12 lg:max-w-[480px] lg:shrink-0'
const testimonialContentCol = 'flex min-w-0 flex-1 flex-col gap-6 md:gap-7 lg:justify-between'

const tabButtonClass = cn('flex-1 cursor-pointer rounded-full py-2.5 sm:py-3', focusRing)
const progressFillClass = 'pointer-events-none absolute inset-0 rounded-full bg-olive-500'

function Slide({ id, slideY, children }) {
  return (
    <motion.div key={id} initial={{ opacity: 0, ...(slideY ? { y: 12 } : {}) }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, ...(slideY ? { y: -12 } : {}) }} transition={testimonialSlideTransition}>
      {children}
    </motion.div>
  )
}

function TestimonialProgress({ items, activeId, progressKey, onSelect, onComplete }) {
  const reduceMotion = useReducedMotion()
  const progressTransition = getTestimonialProgressTransition(reduceMotion)
  const activeIndex = items.findIndex((item) => item.id === activeId)
  return (
    <div className="flex gap-2" role="tablist" aria-label="Testimonial slides">
      {items.map((item, index) => {
        const isActive = item.id === activeId
        return (
          <motion.button key={item.id} type="button" role="tab" id={`testimonial-tab-${item.id}`} aria-selected={isActive} aria-controls={`testimonial-panel-${item.id}`} aria-label={`Show testimonial from ${item.clientName}`} onClick={() => onSelect(item.id)} whileTap={reduceMotion ? undefined : { scale: 0.98 }} transition={{ duration: 0.15 }} className={tabButtonClass}>
            <span className="relative block h-1 w-full overflow-hidden rounded-full bg-gray-200">
              {index < activeIndex ? <span className={progressFillClass} aria-hidden /> : null}
              {isActive ? (
                <motion.span key={progressKey} className={cn(progressFillClass, 'origin-left')} initial={{ scaleX: reduceMotion ? 1 : 0 }} animate={{ scaleX: 1 }} transition={progressTransition} onAnimationComplete={() => { if (!reduceMotion && item.id === activeId) onComplete() }} aria-hidden />
              ) : null}
            </span>
          </motion.button>
        )
      })}
    </div>
  )
}

function TestimonialSlide({ item }) {
  return (
    <blockquote id={`testimonial-panel-${item.id}`} aria-labelledby={`testimonial-tab-${item.id}`} className="flex flex-col gap-6">
      <div className="group flex h-10 cursor-pointer items-center" role="img" aria-label={`${item.companyLogoLabel} logo`}>
        <AppImage
          src={item.companyLogo}
          alt=""
          className="h-6 w-auto max-w-none object-contain object-left grayscale transition-[filter] duration-300 group-hover:grayscale-0"
        />
      </div>
      <h2 id="testimonial-heading" className="font-display-alternative text-lg font-medium tracking-normal text-gray-800 sm:text-xl lg:text-3xl">&ldquo;{item.quote}&rdquo;</h2>
      <footer>
        <cite className="not-italic">
          <span className="block text-base font-medium text-gray-900">{item.clientName}</span>
          <span className="mt-2 block text-sm text-gray-600">{item.companyName}</span>
        </cite>
      </footer>
    </blockquote>
  )
}

export default function Testimonial() {
  const [activeId, setActiveId] = useState(testimonials[0].id)
  const [progressKey, setProgressKey] = useState(0)
  const active = testimonials.find((item) => item.id === activeId) ?? testimonials[0]
  const select = (id) => {
    setActiveId(id)
    setProgressKey((key) => key + 1)
  }
  const next = () => {
    const index = testimonials.findIndex((item) => item.id === activeId)
    select(testimonials[(index + 1) % testimonials.length].id)
  }
  return (
    <section aria-labelledby="testimonial-heading" className={cn('bg-olive-100', sectionPy)}>
      <Container>
        <div className={testimonialLayout}>
          <div className={testimonialImageCol}>
            <AnimatePresence mode="wait">
              <Slide id={active.id}>
                <ImagePlaceholder
                  capTabletHeight={false}
                  src={active.image}
                  label={active.imageLabel}
                  className={testimonialImage}
                />
              </Slide>
            </AnimatePresence>
          </div>
          <div className={testimonialContentCol}>
            <AnimatePresence mode="wait">
              <Slide id={active.id} slideY>
                <TestimonialSlide item={active} />
              </Slide>
            </AnimatePresence>
            <TestimonialProgress
              items={testimonials}
              activeId={activeId}
              progressKey={progressKey}
              onSelect={select}
              onComplete={next}
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
