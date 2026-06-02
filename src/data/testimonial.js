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
      'Veridoc helped our team review contracts faster, catch risk earlier, and bring more consistency to every legal decision we make.',
    clientName: 'Jhon Morgan',
    companyName: 'General Counsel, Northfield Partners',
  },
  {
    id: 'testimonial-2',
    image: headshots[1],
    imageLabel: 'Portrait of Marcus Chen',
    partnerLogoId: 4,
    companyLogoLabel: 'Northline Group',
    companyLogo: getPartnerLogoImage(4),
    quote:
      'What used to take hours now takes minutes. Veridoc gives our legal and ops teams clearer visibility into contract risks.',
    clientName: 'Daniel Reeves',
    companyName: 'Head of Legal Operations, Cendro Systems',
  },
  {
    id: 'testimonial-3',
    image: headshots[3],
    imageLabel: 'Portrait of Amara Okonkwo',
    partnerLogoId: 5,
    companyLogoLabel: 'Summit Ventures',
    companyLogo: getPartnerLogoImage(5),
    quote:
      'Veridoc brings speed, structure, and confidence to our review process without making the workflow feel more complicated.',
    clientName: 'Jhon Doe',
    companyName: ' Director of Compliance, Altverse Group',
  },
]
