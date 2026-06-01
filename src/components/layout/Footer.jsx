import Container from './Container'
import { footerLinks, footerMeta } from '../../data/footer'
import { cn } from '@/lib/cn'
import { focusRing } from '@/lib/sectionStyles'

function FooterLinkGroup({ title, links }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.href} className={cn('text-sm text-gray-600', focusRing)}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <Container className="py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <a href="#" className={cn('text-lg font-semibold text-gray-900', focusRing)}>
              {footerMeta.brand}
            </a>
            <p className="mt-4 max-w-sm text-sm text-gray-600">{footerMeta.tagline}</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:col-span-1 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4">
            <FooterLinkGroup title="Product" links={footerLinks.product} />
            <FooterLinkGroup title="Company" links={footerLinks.company} />
            <FooterLinkGroup title="Resources" links={footerLinks.resources} />
            <FooterLinkGroup title="Legal" links={footerLinks.legal} />
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500">{footerMeta.copyright}</p>
        </div>
      </Container>
    </footer>
  )
}
