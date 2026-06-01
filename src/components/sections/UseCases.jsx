import Container from '../layout/Container'
import SectionHeading from '../ui/SectionHeading'
import { useCases, useCasesContent } from '../../data/useCases'
import { cardGrid3, cardSurface, headingH3, bodySm, sectionPy } from '@/lib/sectionStyles'
import { cn } from '@/lib/cn'

function UseCaseCard({ title, description }) {
  return (
    <article className={cn(cardSurface, 'p-6 lg:p-8')}>
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-gray-100" aria-hidden="true">
        <div className="h-6 w-6 rounded-sm bg-gray-300" />
      </div>
      <h3 className={headingH3}>{title}</h3>
      <p className={cn(bodySm, 'mt-3')}>{description}</p>
    </article>
  )
}

export default function UseCases() {
  return (
    <section id="solutions" aria-labelledby="use-cases-heading" className={cn('bg-olive-950', sectionPy)}>
      <Container>
        <SectionHeading title={useCasesContent.title} description={useCasesContent.description} titleId="use-cases-heading" />
        <div className={cardGrid3}>
          {useCases.map((useCase) => (
            <UseCaseCard key={useCase.id} title={useCase.title} description={useCase.description} />
          ))}
        </div>
      </Container>
    </section>
  )
}
