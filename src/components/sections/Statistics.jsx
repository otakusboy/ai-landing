import Container from '../layout/Container'
import { statistics, statisticsContent } from '../../data/statistics'

function StatCard({ value, label }) {
  return (
    <article className="rounded-md border border-gray-200 bg-white p-8">
      <p className="text-4xl font-light tracking-tight text-gray-900 sm:text-5xl">
        {value}
      </p>
      <p className="mt-3 text-base text-gray-600">{label}</p>
    </article>
  )
}

export default function Statistics() {
  return (
    <section aria-labelledby="statistics-heading" className="py-16 lg:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2
              id="statistics-heading"
              className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl"
            >
              {statisticsContent.title}
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
              {statisticsContent.description}
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {statistics.map((stat) => (
            <StatCard key={stat.id} value={stat.value} label={stat.label} />
          ))}
        </div>
      </Container>
    </section>
  )
}
