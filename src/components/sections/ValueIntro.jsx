import Container from '../layout/Container'
import SectionHeading from '../ui/SectionHeading'
import { valueIntro } from '../../data/valueContent'

export default function ValueIntro() {
  return (
    <section aria-labelledby="value-intro-heading" className="pt-16 pb-20 lg:pt-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <SectionHeading
              eyebrow={valueIntro.eyebrow}
              title={valueIntro.title}
              description={valueIntro.description}
              titleId="value-intro-heading"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
