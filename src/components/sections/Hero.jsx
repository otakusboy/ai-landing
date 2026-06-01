import Container from '../layout/Container'
import Navbar from '../layout/Navbar'
import Button from '../ui/Button'
import { heroContent } from '../../data/hero'
import { cn } from '@/lib/cn'

const heroButtonStyles = {
  primary: 'bg-white text-neutral-900 hover:bg-black hover:text-white',
  secondary: 'border border-transparent bg-transparent text-white hover:bg-black/20 active:bg-white/15 focus-visible:outline-white',
}
const heroSectionClass = cn('relative flex h-screen min-h-screen w-full flex-col bg-cover bg-center bg-no-repeat -mt-[68px] pt-[68px]')

export default function Hero() {
  const [primaryAction, secondaryAction] = heroContent.actions
  return (
    <>
      <Navbar />
      <section id="hero" aria-labelledby="hero-heading" className={heroSectionClass} style={{ backgroundImage: `url('${heroContent.backgroundImage}')` }}>
        <Container className="relative z-10 flex flex-1 flex-col justify-end pb-[100px]">
          <div className="mx-auto w-full max-w-[650px] text-center">
            <h1 id="hero-heading" className="text-4xl font-regular leading-[1.15] text-white sm:text-6xl lg:text-6xl">{heroContent.title}</h1>
            <p className="mx-auto mt-3 max-w-prose text-base leading-relaxed text-white/90 sm:text-lg">{heroContent.description}</p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Button as="a" href={primaryAction.href} useColorStyles={false} className={heroButtonStyles.primary}>{primaryAction.label}</Button>
              <Button as="a" href={secondaryAction.href} useColorStyles={false} className={heroButtonStyles.secondary}>{secondaryAction.label}</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
