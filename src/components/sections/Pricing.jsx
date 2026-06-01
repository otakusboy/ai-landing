import Container from '../layout/Container'
import Button from '../ui/Button'
import SectionHeading from '../ui/SectionHeading'
import { FeatherIcon } from '@/icons'
import { pricingContent, pricingPlans } from '../../data/pricing'
import { cn } from '@/lib/cn'
import { cardSurface, sectionPy } from '@/lib/sectionStyles'

const pricingCardBase = cn(cardSurface, 'flex h-full flex-col p-10')
const pricingDisplayFont = 'font-display-alternative'
const pricingDivider = 'border-t border-olive-300'

function PricingFeatureList({ items }) {
  return (
    <ul className="space-y-3">
      {items.map((feature) => (
        <li key={feature} className="flex items-start gap-3 text-sm text-olive-600">
          <FeatherIcon name="check" size={18} strokeWidth={1.5} className="mt-0.5 text-olive-900" />
          {feature}
        </li>
      ))}
    </ul>
  )
}

function PricingFeatures({ groups }) {
  if (!groups?.length) return null

  return (
    <div className="pt-10">
      {groups.map((group, index) => (
        <div key={`${group.label}-${index}`} className={index > 0 ? 'pt-10' : undefined}>
          <p className="text-sm font-semibold text-olive-950">{group.label}</p>
          <div className="mt-4">
            <PricingFeatureList items={group.items} />
          </div>
        </div>
      ))}
    </div>
  )
}

function PricingCard({ plan }) {
  return (
    <article className={cn(pricingCardBase, plan.highlighted ? 'border-olive-700 ring-1 rounded-xs' : 'rounded-xs')}>
      <div className="flex items-start justify-between gap-3">
        <p className={cn(pricingDisplayFont, 'text-base font-normal text-olive-900')}>{plan.name}</p>
        {plan.highlighted ? (
          <span className="shrink-0 bg-olive-800 px-2 py-1 text-xs font-medium text-white rounded-md uppercase">Most popular</span>
        ) : null}
      </div>
      <div className="mt-4 flex items-baseline gap-1">
        <span className={cn(pricingDisplayFont, 'text-4xl font-light text-olive-900')}>{plan.price}</span>
        {plan.period ? <span className="text-sm text-gray-600">{plan.period}</span> : null}
      </div>

      <hr className={cn(pricingDivider, 'mt-8')} />

      <div className="flex flex-1 flex-col pt-10">
        <h3 className="text-xl font-light text-olive-700">{plan.whatsIncludedTitle}</h3>
        <PricingFeatures groups={plan.featureGroups} />
      </div>

      <hr className={cn(pricingDivider, 'mt-10')} />

      <Button
        variant={plan.highlighted ? 'primary' : 'secondary'}
        className="mt-10 w-full cursor-pointer"
      >
        {plan.cta}
      </Button>
    </article>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-heading" className={cn('bg-white', sectionPy)}>
      <Container>
        <SectionHeading className="text-center" title={pricingContent.title} description={pricingContent.description} titleId="pricing-heading" />
        <div className="mt-16 grid grid-cols-1 gap-2 lg:mt-24 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </Container>
    </section>
  )
}
