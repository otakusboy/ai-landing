import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import Container from '../layout/Container'
import { faqItems } from '../../data/faq'
import FeatherIcon from '@/icons/FeatherIcon'
import { cn } from '@/lib/cn'
import { getFaqPanelTransition } from '@/motion'
import { focusRing, headingH2, sectionContentMtXL, sectionPy } from '@/lib/sectionStyles'

const faqToggleClass = cn(
  'group flex w-full cursor-pointer items-start justify-between gap-4 text-left text-lg font-medium sm:text-lg lg:text-xl',
  focusRing,
)

const faqQuestionClass = (open) =>
  cn(
    'transition-colors',
    open ? 'text-gray-900' : 'text-olive-500 group-hover:text-olive-900',
  )

function FAQItem({ item, open, onToggle }) {
  const reduceMotion = useReducedMotion()
  const panelTransition = getFaqPanelTransition(reduceMotion)
  const headingId = `${item.id}-heading`
  const panelId = `${item.id}-panel`

  return (
    <div className="border-b border-gray-200 py-5 first:pt-0 last:border-b-0 md:py-5">
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
    </div>
  )
}

export default function FAQ() {
  const [openId, setOpenId] = useState(faqItems[0]?.id ?? null)

  const handleToggle = (id) => {
    setOpenId((current) => (current === id ? null : id))
  }

  return (
    <section id="contact" aria-labelledby="faq-heading" className={cn('bg-white', sectionPy)}>
      <Container>
        <h2 id="faq-heading" className={cn(headingH2, 'text-center')}>
          Common questions about our core services
        </h2>
        <div className={cn('mx-auto max-w-4xl', sectionContentMtXL)}>
          {faqItems.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
              open={openId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
