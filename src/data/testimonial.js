import { getPartnerLogoImage } from './socialProof'

const headshots = {
  1: new URL('../assets/headshot/headshot-1.jpg', import.meta.url).href,
  2: new URL('../assets/headshot/headshot-2.jpg', import.meta.url).href,
  3: new URL('../assets/headshot/headshot-3.jpg', import.meta.url).href,
}

/** Company logos use the same assets as SocialProof (`partnerLogos` in `src/data/socialProof.js`). */
export const testimonials = [
  {
    id: 'testimonial-1',
    image: headshots[2],
    imageLabel: 'Portrait of Eleanor Whitfield',
    partnerLogoId: 1,
    companyLogoLabel: 'Harbor Industries',
    companyLogo: getPartnerLogoImage(1),
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    clientName: 'Eleanor Whitfield',
    companyName: 'Very long name corp here',
  },
  {
    id: 'testimonial-2',
    image: headshots[1],
    imageLabel: 'Portrait of Marcus Chen',
    partnerLogoId: 4,
    companyLogoLabel: 'Northline Group',
    companyLogo: getPartnerLogoImage(4),
    quote:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    clientName: 'Marcus Chen',
    companyName: 'VP Operations, Northline Group',
  },
  {
    id: 'testimonial-3',
    image: headshots[3],
    imageLabel: 'Portrait of Amara Okonkwo',
    partnerLogoId: 5,
    companyLogoLabel: 'Summit Ventures',
    companyLogo: getPartnerLogoImage(5),
    quote:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.',
    clientName: 'Amara Okonkwo',
    companyName: 'Director of Strategy, Summit Ventures',
  },
]
