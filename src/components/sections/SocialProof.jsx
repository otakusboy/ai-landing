import Container from '../layout/Container'
import { partnerLogos, socialProofIntro } from '../../data/socialProof'

export default function SocialProof() {
  return (
    <section aria-labelledby="social-proof-heading" className="bg-white py-16 lg:py-20">
      <Container>
        <p
          id="social-proof-heading"
          className="max-w-2xl text-xl leading-relaxed text-gray-600"
        >
          {socialProofIntro}
        </p>

        <div className="my-8 lg:my-8">
          <ul
            className="flex flex-wrap items-center gap-x-10 gap-y-6 lg:gap-x-14"
            aria-label="Partner companies"
          >
            {partnerLogos.map((logo) => (
              <li key={logo.id}>
                <div
                  className="flex h-10 min-w-[120px] items-center justify-center rounded border border-gray-200 bg-gray-50 px-4"
                  role="img"
                  aria-label={`${logo.name} logo`}
                >
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    {logo.name}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
