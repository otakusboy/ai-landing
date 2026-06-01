import Container from './Container'
import { footerContactLinks, footerMeta } from '../../data/footer'
import { navLinks } from '../../data/navigation'
import { cn } from '@/lib/cn'
import { focusRing } from '@/lib/sectionStyles'

const footerLinkClass = cn('text-sm font-medium text-gray-600 transition-colors hover:text-gray-900', focusRing)

function FooterNav({ label, links }) {
  return (
    <nav aria-label={label}>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.id}>
            <a
              href={link.href}
              className={footerLinkClass}
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <Container className="py-16 lg:py-20">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <a href="#hero" className={cn('shrink-0 text-xl font-semibold text-gray-900', focusRing)}>
            {footerMeta.brand}
          </a>
          <p className="max-w-xl text-xl text-gray-600 sm:text-right">{footerMeta.tagline}</p>
        </div>

        <div className="mt-12 flex flex-col gap-8 border-t border-gray-200 pt-8 lg:flex-row lg:items-start lg:justify-between">
          <p className="text-sm text-gray-500">{footerMeta.copyright}</p>
          <div className="flex flex-col gap-8 sm:flex-row sm:gap-12 lg:gap-16">
            <FooterNav label="Footer navigation" links={navLinks} />
            <FooterNav label="Contact" links={footerContactLinks} />
          </div>
        </div>
      </Container>
    </footer>
  )
}
