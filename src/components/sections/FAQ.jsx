import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import Container from '../layout/Container'
import { faqItems } from '../../data/faq'
import FeatherIcon from '@/icons/FeatherIcon'
import { cn } from '@/lib/cn'
import { getFadeInMotion, getFadeInUpScrollMotion, getFaqPanelTransition, useFadeScrollReveal } from '@/motion'
import { focusRing, headingH2, sectionPy } from '@/lib/sectionStyles'

/** FAQ heading — default opacity fade on scroll. Lower `duration` = faster. */
const faqHeadingMotion = {
  duration: 0.55,
  delay: 0,
  ease: [0.22, 1, 0.36, 1],
}

/** FAQ items — bottom-to-top fade with stagger. Lower `duration` = faster. */
const faqItemMotion = {
  duration: 0.55,
  delay: 0,
  staggerChildren: 0.12,
  delayChildren: 0.1,
  ease: [0.22, 1, 0.36, 1],
}

const faqToggleClass = cn(
  'group flex w-full cursor-pointer items-start justify-between gap-4 text-left text-lg font-medium sm:text-lg lg:text-xl',
  focusRing,
)

const faqQuestionClass = (open) =>
  cn(
    'transition-colors',
    open ? 'text-gray-900' : 'text-olive-500 group-hover:text-olive-900',
  )

function FAQItem({ item, open, onToggle, variants }) {
  const reduceMotion = useReducedMotion()
  const panelTransition = getFaqPanelTransition(reduceMotion)
  const headingId = `${item.id}-heading`
  const panelId = `${item.id}-panel`

  return (
    <motion.div variants={variants} className="border-b border-gray-200 py-5 first:pt-0 last:border-b-0 md:py-5">
      <h3 id={headingId}>
        <button
          type="button"
          className={faqToggleClass}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span className={faqQuestionClass(open)}>{item.question}</span>
          <FeatherIcon
            name={open ? 'minus' : 'plus'}
            size={20}
            strokeWidth={2}
            className="mt-0.5 text-gray-400"
          />
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={headingId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={panelTransition}
            className="overflow-hidden"
          >
            <div className="pt-3 pr-2 sm:pt-4 sm:pr-8">
              <p className="text-base text-gray-600">{item.answer}</p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [openId, setOpenId] = useState(faqItems[0]?.id ?? null)
  const reduceMotion = useReducedMotion()
  const headingVariants = getFadeInMotion(reduceMotion, faqHeadingMotion)
  const headingReveal = useFadeScrollReveal()
  const faqListReveal = useFadeScrollReveal()
  const { item: faqItemVariants, container: faqListVariants } = getFadeInUpScrollMotion(reduceMotion, faqItemMotion)

  const handleToggle = (id) => {
    setOpenId((current) => (current === id ? null : id))
  }

  return (
    <section id="contact" aria-labelledby="faq-heading" className={cn('bg-white', sectionPy)}>
      <Container>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-10 lg:gap-16">
          <div className="md:col-span-4">
            <motion.h2
              ref={headingReveal.ref}
              id="faq-heading"
              animate={headingReveal.animate}
              variants={headingVariants}
              initial="hidden"
              className={headingH2}
            >
              Frequently Asked Questions
            </motion.h2>
          </div>
          <motion.div
            ref={faqListReveal.ref}
            animate={faqListReveal.animate}
            variants={faqListVariants}
            initial="hidden"
            className="md:col-span-8"
          >
            {faqItems.map((item) => (
              <FAQItem
                key={item.id}
                variants={faqItemVariants}
                item={item}
                open={openId === item.id}
                onToggle={() => handleToggle(item.id)}
              />
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
