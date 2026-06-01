import Container from './Container'
import { footerContactLinks, footerMeta } from '../../data/footer'
import { navLinks } from '../../data/navigation'
import { cn } from '@/lib/cn'
import { focusRing } from '@/lib/sectionStyles'

const footerLinkClass = cn('text-sm font-medium text-gray-600 transition-colors hover:text-gray-900', focusRing)
const footerListClass = 'flex flex-col gap-3'
const footerAsideClass = 'w-full max-w-[400px] sm:ml-auto'

function FooterLinkList({ links }) {
  return (
    <ul className={footerListClass}>
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
  )
}

function FooterNav({ label, title, links, itemsPerColumn = 3, className }) {
  const primaryLinks = links.slice(0, itemsPerColumn)
  const overflowLinks = links.slice(itemsPerColumn)

  return (
    <nav aria-label={label} className={cn('min-w-0 flex-1 sm:basis-0', className)}>
      {title ? <p className="mb-3 text-sm font-semibold text-gray-900">{title}</p> : null}
      {overflowLinks.length > 0 ? (
        <div className="flex gap-8 sm:gap-12">
          <FooterLinkList links={primaryLinks} />
          <FooterLinkList links={overflowLinks} />
        </div>
      ) : (
        <FooterLinkList links={primaryLinks} />
      )}
    </nav>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-olive-50">
      <Container className="py-16 lg:py-20">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <a href="#hero" className={cn('shrink-0 text-xl font-semibold text-gray-900', focusRing)}>
            {footerMeta.brand}
          </a>
          <p className={cn(footerAsideClass, 'text-left text-xl text-gray-600')}>{footerMeta.tagline}</p>
        </div>

        <div className="mt-12 flex flex-col gap-8 border-t border-gray-200 pt-8 lg:flex-row lg:items-start lg:justify-between">
          <p className="text-sm text-gray-500">{footerMeta.copyright}</p>
          <div className={cn(footerAsideClass, 'flex flex-col gap-8 sm:flex-row sm:gap-10')}>
            <FooterNav label="Footer navigation" title={footerMeta.menuTitle} links={navLinks} />
            <FooterNav label="Contact" title={footerMeta.contactTitle} links={footerContactLinks} />
          </div>
        </div>
      </Container>
    </footer>
  )
}
