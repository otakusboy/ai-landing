import Container from './Container'
import { footerContactLinks, footerMeta } from '../../data/footer'
import { navLinks } from '../../data/navigation'
import { cn } from '@/lib/cn'
import { containerPy, focusRing } from '@/lib/sectionStyles'

const footerLinkClass = cn('text-sm font-medium text-gray-600 transition-colors hover:text-gray-900', focusRing)
const footerListClass = 'flex flex-col gap-3'
const footerAside = 'w-full max-w-[400px] sm:ml-auto md:ml-0 lg:ml-auto'

const footerTopRow =
  'flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between sm:gap-6 md:flex-col md:items-start md:gap-8 lg:flex-row lg:justify-between lg:gap-6'

const footerBottomRow =
  'mt-10 flex flex-col gap-6 border-t border-gray-200 pt-6 sm:mt-12 sm:gap-8 sm:pt-8 md:mt-10 md:gap-6 md:pt-6 md:items-start lg:flex-row lg:items-start lg:justify-between lg:gap-8'

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

function FooterNav({ label, title, links, itemsPerColumn = 3 }) {
  const primaryLinks = links.slice(0, itemsPerColumn)
  const overflowLinks = links.slice(itemsPerColumn)

  return (
    <nav aria-label={label} className="min-w-0 flex-1 sm:basis-0">
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
      <Container className={containerPy}>
        <div className={footerTopRow}>
          <a href="#hero" className={cn('shrink-0 text-xl font-semibold text-gray-900', focusRing)}>
            {footerMeta.brand}
          </a>
          <p className={cn('text-left text-xl text-gray-600 md:max-w-md', footerAside)}>{footerMeta.tagline}</p>
        </div>

        <div className={footerBottomRow}>
          <div className={cn('order-1 flex flex-col gap-8 sm:flex-row sm:gap-10 md:gap-8', footerAside, 'lg:order-2')}>
            <FooterNav label="Footer navigation" title={footerMeta.menuTitle} links={navLinks} />
            <FooterNav label="Contact" title={footerMeta.contactTitle} links={footerContactLinks} />
          </div>
          <p className="order-2 text-sm text-gray-500 lg:order-1">{footerMeta.copyright}</p>
        </div>
      </Container>
    </footer>
  )
}
