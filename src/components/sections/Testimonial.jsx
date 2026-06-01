import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import Container from '../layout/Container'
import ImagePlaceholder from '../ui/ImagePlaceholder'
import { getTestimonialProgressTransition, testimonialSlideTransition } from '@/motion'
import { testimonials } from '../../data/testimonial'

const tabBtnClass =
  'flex-1 cursor-pointer rounded-full py-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900'
const fillClass = 'pointer-events-none absolute inset-0 rounded-full bg-gray-900'

function Slide({ id, slideY, children }) {
  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, ...(slideY ? { y: 12 } : {}) }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, ...(slideY ? { y: -12 } : {}) }}
      transition={testimonialSlideTransition}
    >
      {children}
    </motion.div>
  )
}

function TestimonialProgress({ items, activeId, progressKey, onSelect, onComplete }) {
  const reduceMotion = useReducedMotion()
  const progressTransition = getTestimonialProgressTransition(reduceMotion)
  const activeIndex = items.findIndex((item) => item.id === activeId)
  return (
    <div className="mt-10 flex gap-2 lg:mt-12" role="tablist" aria-label="Testimonial slides">
      {items.map((item, index) => {
        const isActive = item.id === activeId
        return (
          <motion.button
            key={item.id}
            type="button"
            role="tab"
            id={`testimonial-tab-${item.id}`}
            aria-selected={isActive}
            aria-controls={`testimonial-panel-${item.id}`}
            aria-label={`Show testimonial from ${item.clientName}`}
            onClick={() => onSelect(item.id)}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className={tabBtnClass}
          >
            <span className="relative block h-1 w-full overflow-hidden rounded-full bg-gray-200">
              {index < activeIndex ? <span className={fillClass} aria-hidden /> : null}
              {isActive ? (
                <motion.span
                  key={progressKey}
                  className={`${fillClass} origin-left`}
                  initial={{ scaleX: reduceMotion ? 1 : 0 }}
                  animate={{ scaleX: 1 }}
                  transition={progressTransition}
                  onAnimationComplete={() => {
                    if (!reduceMotion && item.id === activeId) onComplete()
                  }}
                  aria-hidden
                />
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
    <blockquote id={`testimonial-panel-${item.id}`} aria-labelledby={`testimonial-tab-${item.id}`}>
      <h3 id="testimonial-heading" className="text-lg text-gray-800 sm:text-xl lg:text-2xl">
        &ldquo;{item.quote}&rdquo;
      </h3>
      <footer className="mt-8">
        <cite className="not-italic">
          <span className="block text-md font-medium text-gray-900">{item.clientName}</span>
          <span className="mt-2 block text-sm text-gray-600">{item.companyName}</span>
          <div
            className="mt-10 flex h-10 w-36 items-center justify-center rounded border border-gray-200 bg-gray-50"
            role="img"
            aria-label={`${item.companyLogo} logo`}
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              {item.companyLogo}
            </span>
          </div>
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
    <section aria-labelledby="testimonial-heading" className="bg-olive-100 py-16 lg:py-20">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <Slide id={active.id}>
                <ImagePlaceholder
                  label={active.imageLabel}
                  className="aspect-[3/4] w-full rounded-md lg:aspect-auto lg:h-[480px]"
                />
              </Slide>
            </AnimatePresence>
          </div>
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <Slide id={active.id} slideY>
                <TestimonialSlide item={active} />
              </Slide>
            </AnimatePresence>
          </div>
        </div>
        <TestimonialProgress
          items={testimonials}
          activeId={activeId}
          progressKey={progressKey}
          onSelect={select}
          onComplete={next}
        />
      </Container>
    </section>
  )
}
