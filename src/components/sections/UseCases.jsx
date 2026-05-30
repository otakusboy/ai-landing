import Container from '../layout/Container'
import SectionHeading from '../ui/SectionHeading'
import { useCases, useCasesContent } from '../../data/useCases'

function UseCaseCard({ title, description }) {
  return (
    <article className="rounded-md border border-gray-200 bg-white p-6 lg:p-8">
      <div
        className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-gray-100"
        aria-hidden="true"
      >
        <div className="h-6 w-6 rounded-sm bg-gray-300" />
      </div>
        <h3 className="text-lg font-semibold text-gray-900 sm:text-xl">{title}</h3>
      <p className="mt-3 text-sm text-gray-600 sm:text-base">
        {description}
      </p>
    </article>
  )
}

export default function UseCases() {
  return (
    <section id="solutions" aria-labelledby="use-cases-heading" className="py-16 lg:py-20">
      <Container>
        <SectionHeading
          title={useCasesContent.title}
          description={useCasesContent.description}
          titleId="use-cases-heading"
        />

        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase) => (
            <UseCaseCard
              key={useCase.id}
              title={useCase.title}
              description={useCase.description}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
