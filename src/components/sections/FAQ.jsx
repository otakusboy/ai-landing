import Container from '../layout/Container'
import ArrowButtons from '../ui/ArrowButtons'
import { faqItems } from '../../data/faq'
import { cn } from '@/lib/cn'
import { focusRing, headingH2, sectionPy } from '@/lib/sectionStyles'

const faqToggleClass = cn('flex w-full items-start justify-between gap-4 text-left text-base font-semibold text-gray-900 sm:text-lg transition-colors hover:text-gray-700', focusRing)

function FAQItem({ item }) {
  const headingId = `${item.id}-heading`
  const panelId = `${item.id}-panel`
  return (
    <div className="border-b border-gray-200 py-6 first:pt-0 last:border-b-0">
      <h3 id={headingId}>
        <button type="button" className={faqToggleClass} aria-expanded="false" aria-controls={panelId}>
          <span>{item.question}</span>
          <span className="mt-1 shrink-0 text-gray-400" aria-hidden="true">+</span>
        </button>
      </h3>
      <div id={panelId} role="region" aria-labelledby={headingId} className="mt-4 pr-8">
        <p className="text-base text-gray-600">{item.answer}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section aria-labelledby="faq-heading" className={sectionPy}>
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h2 id="faq-heading" className={headingH2}>Common questions about our core services</h2>
          <ArrowButtons label="Navigate FAQ items" />
        </div>
        <div className="mt-12 max-w-4xl">
          {faqItems.map((item) => (
            <FAQItem key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  )
}
