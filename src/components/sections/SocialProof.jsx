import Container from '../layout/Container'
import PartnerLogoTicker from './PartnerLogoTicker'
import { partnerLogos, socialProofIntro } from '../../data/socialProof'

export default function SocialProof() {
  return (
    <section aria-labelledby="social-proof-heading" className="py-20 lg:py-30 sm:py-20">
      <Container>
        <p id="social-proof-heading" className="max-w-md text-md text-gray-500 text-center mx-auto sm:text-md lg:text-md">
          {socialProofIntro}
        </p>
        <div className="-mx-4 mt-14 w-[calc(100%+2rem)] overflow-hidden sm:-mx-6 sm:w-[calc(100%+3rem)] lg:-mx-8 lg:w-[calc(100%+4rem)]">
          <PartnerLogoTicker logos={partnerLogos()} />
        </div>
      </Container>
    </section>
  )
}
