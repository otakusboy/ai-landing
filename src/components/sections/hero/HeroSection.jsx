import Container from '../../layout/Container'
import { heroLayout, navbarOffset } from '../../layout/layoutTokens'
import { heroContent } from '../../../data/hero'
import HeroContent from './HeroContent'

export default function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className={`relative flex w-full flex-col bg-cover bg-center bg-no-repeat ${navbarOffset.overlap} ${navbarOffset.clearHeader} ${heroLayout.sectionHeight}`}
      style={{ backgroundImage: `url('${heroContent.backgroundImage}')` }}
    >
      <div className="absolute inset-0 bg-neutral-950/45" aria-hidden="true" />

      <Container
        className={`relative z-10 flex flex-1 flex-col justify-end ${heroLayout.contentPadding}`}
      >
        <HeroContent />
      </Container>
    </section>
  )
}
