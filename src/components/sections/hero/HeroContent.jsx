import { heroContent } from '../../../data/hero'
import { heroLayout } from '../../layout/layoutTokens'

export default function HeroContent() {
  return (
    <div className={`mx-auto w-full text-center ${heroLayout.contentMaxWidth}`}>
      <h1
        id="hero-heading"
        className="text-[1.625rem] font-medium leading-[1.15] text-white sm:text-3xl lg:text-4xl"
      >
        {heroContent.title}
      </h1>
      <p className="mx-auto mt-5 max-w-prose text-base leading-relaxed text-white/90 sm:mt-6 sm:text-lg">
        {heroContent.description}
      </p>
    </div>
  )
}
