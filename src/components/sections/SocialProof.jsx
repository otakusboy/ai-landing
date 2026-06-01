import Container from '../layout/Container'
import PartnerLogoTicker from './PartnerLogoTicker'
import { partnerLogos, socialProofIntro } from '../../data/socialProof'
import { sectionPyLoose } from '@/lib/sectionStyles'

const tickerBleed = '-mx-4 mt-14 w-[calc(100%+2rem)] overflow-hidden sm:-mx-6 sm:w-[calc(100%+3rem)] lg:-mx-8 lg:w-[calc(100%+4rem)]'

export default function SocialProof() {
  return (
    <section aria-labelledby="social-proof-heading" className={sectionPyLoose}>
      <Container>
        <p id="social-proof-heading" className="mx-auto max-w-md text-center text-base text-gray-500">{socialProofIntro}</p>
        <div className={tickerBleed}>
          <PartnerLogoTicker logos={partnerLogos()} />
        </div>
      </Container>
    </section>
  )
}
