import { motion, useReducedMotion } from 'motion/react'
import Container from '../layout/Container'
import SectionHeading from '../ui/SectionHeading'
import { useCases, useCasesContent } from '../../data/useCases'
import { cardGrid3, headingH3, bodySm, sectionPy } from '@/lib/sectionStyles'
import { cn } from '@/lib/cn'
import { FeatherIcon } from '@/icons'
import { getUseCaseCardMotion } from '@/motion'

const DEFAULT_USE_CASE_ICON = 'box'

function UseCaseCard({ title, description, icon = DEFAULT_USE_CASE_ICON, variants }) {
  return (
    <motion.article variants={variants} className="flex flex-col gap-2 bg-olive-900 p-6 lg:p-8 rounded-xs">
      <FeatherIcon name={icon} size={40} className="justify-start text-olive-50" />
      <h3 className={headingH3,'mt-[80px] font-regular text-xl tracking-normal font-medium text-olive-50'}>{title}</h3>
      <p className={cn(bodySm, 'mt-3, text-olive-500 text-base')}>{description}</p>
    </motion.article>
  )
}

export default function UseCases() {
  const reduceMotion = useReducedMotion()
  const { card: cardVariants, grid: gridVariants } = getUseCaseCardMotion(reduceMotion)

  return (
    <section id="solutions" aria-labelledby="use-cases-heading" className={cn('bg-olive-800', sectionPy)}>
      <Container>
        <SectionHeading inverse className="text-center" title={useCasesContent.title} description={useCasesContent.description} titleId="use-cases-heading" />
        <motion.div className={cn(cardGrid3, 'gap-3')} variants={gridVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.20 }}
        >
          {useCases.map((useCase) => (
            <UseCaseCard key={useCase.id} title={useCase.title} description={useCase.description} icon={useCase.icon} variants={cardVariants} />
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
