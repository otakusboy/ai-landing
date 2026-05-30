import Container from '../../layout/Container'
import { heroLayout, navbarOffset } from '../../layout/layoutTokens'
import { heroContent } from '../../../data/hero'
import HeroContent from './HeroContent'

export default function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className={`relative w-full bg-cover bg-center bg-no-repeat ${navbarOffset.overlap} ${navbarOffset.clearHeader} ${heroLayout.sectionMinHeight}`}
      style={{ backgroundImage: `url('${heroContent.backgroundImage}')` }}
    >
      <div className="absolute inset-0 bg-neutral-950/45" aria-hidden="true" />

      <Container
        className={`relative z-10 flex ${heroLayout.contentMinHeight} flex-col items-center justify-top ${heroLayout.sectionPadding} mt-[80px]`}
      >
        <HeroContent />
      </Container>
    </section>
  )
}
