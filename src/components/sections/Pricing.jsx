import Container from '../layout/Container'
import Button from '../ui/Button'
import SectionHeading from '../ui/SectionHeading'
import { pricingContent, pricingPlans } from '../../data/pricing'

function PricingCard({ plan }) {
  const baseStyles =
    'flex h-full flex-col rounded-md border bg-white p-8'
  const cardStyles = plan.highlighted
    ? `${baseStyles} border-gray-900 ring-1 ring-gray-900`
    : `${baseStyles} border-gray-200`

  return (
    <article className={cardStyles}>
      {plan.highlighted && (
        <p className="mb-4 text-sm font-medium text-gray-900">Most popular</p>
      )}
      <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
      <div className="mt-4 flex items-baseline gap-1">
        <span className="text-4xl font-light text-gray-900">
          {plan.price}
        </span>
        {plan.period && (
          <span className="text-sm text-gray-600">{plan.period}</span>
        )}
      </div>
      <p className="mt-4 text-sm text-gray-600">
        {plan.description}
      </p>

      <ul className="mt-8 flex-1 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="mt-0.5 h-5 w-5 shrink-0 text-gray-900"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <Button
        variant={plan.highlighted ? 'primary' : 'secondary'}
        colorScheme={plan.highlighted ? 'light' : 'dark'}
        className="mt-8 w-full"
      >
        {plan.cta}
      </Button>
    </article>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="bg-white py-16 lg:py-20">
      <Container>
        <SectionHeading
          title={pricingContent.title}
          description={pricingContent.description}
          titleId="pricing-heading"
        />

        <div className="mt-20 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </Container>
    </section>
  )
}
