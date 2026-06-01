export const socialProofIntro =
  'Trusted by leading organizations across finance, healthcare, and technology sectors worldwide.'

const PARTNER_LOGOS = [
  { id: 1, image: new URL('../assets/logo/logoipsum-391.svg', import.meta.url).href },
  { id: 2, image: new URL('../assets/logo/logoipsum-393.svg', import.meta.url).href },
  { id: 3, image: new URL('../assets/logo/logoipsum-414.svg', import.meta.url).href },
  { id: 4, image: new URL('../assets/logo/logoipsum-418.svg', import.meta.url).href },
  { id: 5, image: new URL('../assets/logo/logoipsum-426.svg', import.meta.url).href },
  { id: 6, image: new URL('../assets/logo/logoipsum-410.svg', import.meta.url).href },
]

/** Used by SocialProof ticker and Testimonial cards — see `src/data/testimonial.js`. */
export function partnerLogos() {
  return PARTNER_LOGOS
}

export function getPartnerLogoImage(id) {
  return PARTNER_LOGOS.find((logo) => logo.id === id)?.image
}
