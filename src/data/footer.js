export const footerMeta = {
  brand: 'Veridoc - AI Legal Helper',
  brandLogo: new URL('../assets/logo/Logo-white.svg', import.meta.url).href,
  copyright: '© 2026 Veridoc. All rights reserved.',
}

export const footerCta = {
  heading: 'Start reviewing smarter today',
  description: 'Try AI-powered review on your next agreement to surface key terms, flag potential risks, and streamline collaboration between legal and business.',
  primary: { label: 'Get in touch', href: '#contact' },
  secondary: { label: 'Learn more', href: '#solutions' },
}

export const footerImage = {
  src: new URL('../assets/footer-img.png', import.meta.url).href,
  alt: 'Footer feature image',
}

export const footerSocialLinks = [
  {
    id: 'social-x',
    label: 'X',
    href: 'https://x.com',
    external: true,
    icon: new URL('../assets/socials/twitter-alt-square.svg', import.meta.url).href,
  },
  {
    id: 'social-linkedin',
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    external: true,
    icon: new URL('../assets/socials/linkedin.svg', import.meta.url).href,
  },
  {
    id: 'social-github',
    label: 'GitHub',
    href: 'https://github.com',
    external: true,
    icon: new URL('../assets/socials/github.svg', import.meta.url).href,
  },
]
