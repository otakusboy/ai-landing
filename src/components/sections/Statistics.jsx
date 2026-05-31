import Container from '../layout/Container'
import { AnimatedStatValue } from '@/motion'
import { statistics, statisticsContent } from '../../data/statistics'

function StatCard({
  value,
  label,
  cardBg = 'bg-olive-200',
  valueText = 'text-gray-900',
  labelText = 'text-gray-600',
}) {
  return (
    <div className={`rounded-sm p-7 ${cardBg}`}>
      <AnimatedStatValue
        value={value}
        className={`text-4xl font-light sm:text-5xl ${valueText}`}
      />
      <p className={`mt-32 text-base ${labelText}`}>{label}</p>
    </div>
  )
}

export default function Statistics() {
  return (
    <section aria-labelledby="statistics-heading" className="py-16 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-16 place-content-between col-auto">
          <div className="lg:col-span-6">
            <h2
              id="statistics-heading"
              className="text-2xl font-semibold text-gray-900 sm:text-3xl lg:text-4xl tracking-normal"
            >
              {statisticsContent.title}
            </h2>
          </div>
          <div className="lg:col-span-6 justify-self-end">
            <p className="text-wrap text-md text-gray-600 sm:text-md">
              {statisticsContent.description}
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:mt-24 lg:grid-cols-3">
          {statistics.map((stat) => (
            <StatCard
              key={stat.id}
              value={stat.value}
              label={stat.label}
              cardBg={stat.cardBg}
              valueText={stat.valueText}
              labelText={stat.labelText}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
