import Button from '../../ui/Button'
import { heroContent } from '../../../data/hero'
import { heroLayout } from '../../layout/layoutTokens'

const heroPrimaryButton =
  'bg-white text-neutral-900 hover:bg-black hover:text-white'

const heroSecondaryButton =
  'bg-white/3 border border-white/0 bg-transparent text-white hover:bg-black/20 active:bg-white/15 focus-visible:outline-white'

export default function HeroContent() {
  const [primaryAction, secondaryAction] = heroContent.actions

  return (
    <div className={`mx-auto w-full text-center ${heroLayout.contentMaxWidth}`}>
      <h1
        id="hero-heading"
        className="text-[1.625rem] font-regular leading-[1.15] text-white sm:text-5xl lg:text-6xl"
      >
        {heroContent.title}
      </h1>
      <p className="mx-auto mt-3 max-w-prose text-base leading-relaxed text-white/90 sm:mt-3 sm:text-lg">
        {heroContent.description}
      </p>
      <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:mt-6 sm:flex-row sm:gap-4">
        <Button
          as="a"
          href={primaryAction.href}
          useColorStyles={false}
          className={heroPrimaryButton}
        >
          {primaryAction.label}
        </Button>
        <Button
          as="a"
          href={secondaryAction.href}
          useColorStyles={false}
          className={heroSecondaryButton}
        >
          {secondaryAction.label}
        </Button>
      </div>
    </div>
  )
}
