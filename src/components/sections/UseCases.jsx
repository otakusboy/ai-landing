import { motion, useReducedMotion } from 'motion/react'
import Container from '../layout/Container'
import SectionHeading from '../ui/SectionHeading'
import { useCases, useCasesContent } from '../../data/useCases'
import { complianceBadges, complianceContent } from '../../data/compliance'
import { cardGrid3, cardPaddingMd, headingH3, bodySm, headingH2Inverse, sectionContentMt, sectionPy } from '@/lib/sectionStyles'
import { cn } from '@/lib/cn'
import { FeatherIcon } from '@/icons'
import ComplianceLogo from '../ui/ComplianceLogo'
import { getComplianceBadgeMotion, getUseCaseCardMotion } from '@/motion'

const DEFAULT_USE_CASE_ICON = 'box'

function UseCaseCard({ title, description, icon = DEFAULT_USE_CASE_ICON, variants }) {
  return (
    <motion.article variants={variants} className={cn('flex min-h-[220px] flex-col rounded-xs bg-olive-900 sm:min-h-0', cardPaddingMd)}>
      <FeatherIcon name={icon} size={40} className="justify-start text-olive-50" />
      <div className="mt-10 flex flex-col">
        <h3 className={cn(headingH3, 'font-regular text-xl font-medium tracking-normal text-olive-50')}>{title}</h3>
        <p className={cn(bodySm, 'mt-3 text-base text-olive-500')}>{description}</p>
      </div>
    </motion.article>
  )
}

function ComplianceBadge({ logo, label }) {
  return (
    <div className="flex flex-col items-center" role="img" aria-label={`${label} certification`}>
      <ComplianceLogo variant={logo} />
      <p className="mt-3 text-center text-sm font-medium text-olive-300 sm:text-base">{label}</p>
    </div>
  )
}

export default function UseCases() {
  const reduceMotion = useReducedMotion()
  const { card: useCaseCardVariants, grid: useCaseGridVariants } = getUseCaseCardMotion(reduceMotion)
  const { card: complianceCardVariants, grid: complianceGridVariants } = getComplianceBadgeMotion(reduceMotion)

  return (
    <section className="bg-olive-800">
      <Container>
        <div id="solutions" aria-labelledby="use-cases-heading" className={sectionPy}>
          <SectionHeading inverse className="text-center" title={useCasesContent.title} description={useCasesContent.description} titleId="use-cases-heading" />
          <motion.div className={cn(cardGrid3, 'gap-3')} variants={useCaseGridVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.20 }}>
            {useCases.map((useCase) => (
              <UseCaseCard key={useCase.id} title={useCase.title} description={useCase.description} icon={useCase.icon} variants={useCaseCardVariants} />
            ))}
          </motion.div>
        </div>

        <div id="compliance" aria-labelledby="compliance-heading" className={cn(sectionPy, 'lg:min-h-[600px]')}>
          <h3 id="compliance-heading" className={cn(headingH2Inverse, 'text-center')}>
            {complianceContent.title}
          </h3>
          <motion.ul
            className={cn(sectionContentMt, 'grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8 md:gap-6 lg:gap-10')}
            aria-label="Security and compliance certifications"
            variants={complianceGridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {complianceBadges.map((badge) => (
              <motion.li key={badge.id} variants={complianceCardVariants}>
                <ComplianceBadge logo={badge.logo} label={badge.label} />
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </Container>
    </section>
  )
}
