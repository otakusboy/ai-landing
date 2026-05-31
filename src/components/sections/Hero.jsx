import Container from '../layout/Container'
import Navbar from '../layout/Navbar'
import Button from '../ui/Button'
import { heroContent } from '../../data/hero'

const NAVBAR_OFFSET = '-mt-[68px] pt-[68px]'
const HERO_HEIGHT = 'h-[100vh] min-h-[100vh] max-h-[100vh]'

const heroPrimaryButton =
  'bg-white text-neutral-900 hover:bg-black hover:text-white'

const heroSecondaryButton =
  'border border-transparent bg-transparent text-white hover:bg-black/20 active:bg-white/15 focus-visible:outline-white'

export default function Hero() {
  const [primary, secondary] = heroContent.actions

  return (
    <>
      <Navbar />

      <section
        id="hero"
        aria-labelledby="hero-heading"
        className={`relative flex w-full flex-col bg-cover bg-center bg-no-repeat ${NAVBAR_OFFSET} ${HERO_HEIGHT}`}
        style={{ backgroundImage: `url('${heroContent.backgroundImage}')` }}
      >
        <Container className="relative z-10 flex flex-1 flex-col justify-end pb-[100px]">
          <div className="mx-auto w-full max-w-[650px] text-center">
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
                href={primary.href}
                useColorStyles={false}
                className={heroPrimaryButton}
              >
                {primary.label}
              </Button>
              <Button
                as="a"
                href={secondary.href}
                useColorStyles={false}
                className={heroSecondaryButton}
              >
                {secondary.label}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
