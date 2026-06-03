import Container from './Container'
import AppImage from '../ui/AppImage'
import Button from '../ui/Button'
import { footerCta, footerImage, footerMeta, footerSocialLinks } from '../../data/footer'
import { navLinks } from '../../data/navigation'
import { cn } from '@/lib/cn'
import { containerPy, focusRing, headingH2, headingH3 } from '@/lib/sectionStyles'

const footerLinkClass = cn(
  'text-sm font-medium text-olive-500 transition-colors hover:text-white!',
  focusRing,
)

function FooterTop() {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-10">
      <div className="max-w-xl">
        <h2 className={cn(headingH2, 'text-olive-200')}>{footerCta.heading}</h2>
        <p className="mt-6 text-md text-olive-500">{footerCta.description}</p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:gap-3 md:shrink-0">
        <Button as="a" href={footerCta.primary.href}>
          {footerCta.primary.label}
        </Button>
        <Button as="a" href={footerCta.secondary.href} variant="secondary">
          {footerCta.secondary.label}
        </Button>
      </div>
    </div>
  )
}

function FooterImage() {
  return (
    <div className="mt-10 mb-10 md:mt-12 lg:mt-20 lg:mb-20">
      <AppImage
        src={footerImage.src}
        alt={footerImage.alt}
        className="h-[250px] w-full rounded-md object-cover object-center lg:h-[300px]"
      />
    </div>
  )
}

function FooterNav() {
  return (
    <nav aria-label="Footer navigation" className="md:flex-1">
      <ul className="flex flex-wrap items-center justify-start gap-x-6 gap-y-2 md:justify-center md:gap-x-8">
        {navLinks.map((link) => (
          <li key={link.id}>
            <a href={link.href} className={footerLinkClass}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

const socialIconMaskStyle = (icon) => ({
  WebkitMaskImage: `url("${icon}")`,
  maskImage: `url("${icon}")`,
  WebkitMaskRepeat: 'no-repeat',
  maskRepeat: 'no-repeat',
  WebkitMaskPosition: 'center',
  maskPosition: 'center',
  WebkitMaskSize: 'contain',
  maskSize: 'contain',
})

function FooterSocials() {
  return (
    <ul className="flex items-center gap-3">
      {footerSocialLinks.map((social) => (
        <li key={social.id}>
          <a
            href={social.href}
            aria-label={social.label}
            className={cn(
              'inline-flex items-center justify-center bg-transparent p-1 text-olive-50 transition-colors hover:text-white!',
              focusRing,
            )}
            {...(social.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            <span
              aria-hidden="true"
              className="block h-5 w-5 bg-current"
              style={socialIconMaskStyle(social.icon)}
            />
          </a>
        </li>
      ))}
    </ul>
  )
}

function FooterBottom() {
  return (
    <div className="mt-10 flex flex-col gap-6 border-t border-olive-700 pt-8 md:mt-12 md:flex-row md:items-center md:justify-between md:gap-8">
      <a
        href="#hero"
        aria-label={footerMeta.brand}
        className={cn('inline-flex shrink-0 items-center', focusRing)}
      >
        <AppImage src={footerMeta.brandLogo} alt={footerMeta.brand} className="max-h-6 w-auto" />
      </a>
      <FooterNav />
      <FooterSocials />
    </div>
  )
}

export default function Footer() {
  return (
    <footer id="footer" className="bg-olive-900 lg:py-0 min-h-[600px]">
      <Container className={cn(containerPy, 'pb-10!')}>
        <FooterTop />
        <FooterImage />
        <FooterBottom />
      </Container>
    </footer>
  )
}
