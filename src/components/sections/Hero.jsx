import Container from '../layout/Container'
import Button from '../ui/Button'
import AppImage from '../ui/AppImage'
import { heroContent } from '../../data/hero'
import { cn } from '@/lib/cn'

const heroButtonStyles = {
  primary: 'bg-white text-neutral-900 hover:bg-black hover:text-white',
  secondary: 'border border-transparent bg-transparent text-white hover:bg-black/20 active:bg-white/15 focus-visible:outline-white',
}
const heroSectionClass = cn(
  'relative flex h-screen min-h-screen w-full flex-col overflow-hidden -mt-[68px] pt-[68px]',
)

export default function Hero() {
  const [primaryAction, secondaryAction] = heroContent.actions
  return (
    <section id="hero" aria-labelledby="hero-heading" className={heroSectionClass}>
      <AppImage
        src={heroContent.backgroundImage}
        alt={heroContent.imageLabel}
        loading="eager"
        fetchPriority="high"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
      />
      <Container className="relative z-10 flex flex-1 flex-col justify-end pb-16 sm:pb-24 lg:pb-[100px]">
        <div className="mx-auto w-full max-w-[700px] text-center">
          <h1 id="hero-heading" className="text-4xl font-regular leading-[1.15] text-white sm:text-6xl lg:text-6xl">{heroContent.title}</h1>
          <p className="mx-auto mt-3 max-w-prose text-base leading-relaxed text-white/70 sm:text-lg">{heroContent.description}</p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button as="a" href={primaryAction.href} useColorStyles={false} className={heroButtonStyles.primary}>{primaryAction.label}</Button>
            <Button as="a" href={secondaryAction.href} useColorStyles={false} className={heroButtonStyles.secondary}>{secondaryAction.label}</Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
