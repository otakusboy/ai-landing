import Container from '../layout/Container'
import { AnimatedStatValue } from '@/motion'
import { statistics, statisticsContent } from '../../data/statistics'
import { cn } from '@/lib/cn'
import { bodyMd, containerGrid12, gridGapLg, headingH2, sectionContentMt, sectionPy } from '@/lib/sectionStyles'

function StatCard({ value, label, cardBg = 'bg-olive-200', valueText, labelText }) {
  return (
    <div className={cn('flex min-h-[140px] flex-col justify-between rounded-sm p-5 sm:min-h-[160px] sm:p-6 lg:min-h-[180px] lg:p-7', cardBg)}>
      <AnimatedStatValue value={value} className={cn('text-4xl font-light sm:text-5xl', valueText)} />
      <p className={cn('text-base', labelText)}>{label}</p>
    </div>
  )
}

export default function Statistics() {
  return (
    <section aria-labelledby="statistics-heading" className={sectionPy}>
      <Container>
        <div className={cn(containerGrid12, gridGapLg, 'items-start')}>
          <div className="lg:col-span-6">
            <h2 id="statistics-heading" className={headingH2}>{statisticsContent.title}</h2>
          </div>
          <div className="lg:col-span-6 lg:justify-self-end">
            <p className={bodyMd}>{statisticsContent.description}</p>
          </div>
        </div>
        <div className={cn(sectionContentMt, 'grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3')}>
          {statistics.map((stat) => (
            <StatCard key={stat.id} value={stat.value} label={stat.label} cardBg={stat.cardBg} valueText={stat.valueText} labelText={stat.labelText} />
          ))}
        </div>
      </Container>
    </section>
  )
}
