import Container from './Container'
import Button from '../ui/Button'
import { brand, navLinks } from '../../data/navigation'
import useIsPastHero from '../../hooks/useIsPastHero'
import useMobileMenu from '../../hooks/useMobileMenu'
import { HEADER_BASE, navbarTheme } from './navbarTheme'

function MenuIcon({ open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
      strokeWidth={1.5} stroke="currentColor" className="h-6 w-6" aria-hidden="true"
    >
      {open ? (
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      ) : (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      )}
    </svg>
  )
}

function NavLinks({ linkClassName, listClassName, onLinkClick }) {
  return (
    <ul className={listClassName}>
      {navLinks.map((link) => (
        <li key={link.id}>
          <a
            href={link.href}
            data-nav-link=""
            className={linkClassName}
            onClick={onLinkClick}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default function Navbar() {
  const isPastHero = useIsPastHero()
  const { isOpen, close, toggle } = useMobileMenu()
  const variant = isPastHero ? 'scrolled' : 'top'
  const theme = navbarTheme

  return (
    <header
      data-nav-variant={variant}
      className={`${HEADER_BASE} ${theme.header[variant]}`}
    >
      <Container>
        <div className="flex items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-6 lg:gap-12">
            <a
              href={brand.href}
              className={`shrink-0 text-lg font-semibold tracking-tight ${theme.brand[variant]}`}
            >
              {brand.name}
            </a>
            <nav aria-label="Main navigation" className="hidden md:block">
              <NavLinks
                listClassName="flex items-center gap-6 lg:gap-8"
                linkClassName={`text-sm font-medium ${theme.link[variant]}`}
              />
            </nav>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <Button
              as="a"
              href="#contact"
              size="sm"
              useColorStyles={variant === 'scrolled'}
              className={`hidden sm:inline-flex ${theme.cta[variant]}`}
            >
              Contact Us
            </Button>
            <button
              type="button"
              className={`inline-flex items-center justify-center p-2 md:hidden ${theme.menuToggle[variant]}`}
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              onClick={toggle}
            >
              <MenuIcon open={isOpen} />
            </button>
          </div>
        </div>
        {isOpen && (
          <nav
            id="mobile-nav"
            aria-label="Mobile navigation"
            className={`border-t pb-4 md:hidden ${theme.mobileNav[variant]}`}
          >
            <NavLinks
              listClassName="flex flex-col gap-1 pt-4"
              linkClassName={`block px-2 py-2.5 text-sm font-medium ${theme.mobileLink[variant]}`}
              onLinkClick={close}
            />
            <div className="pt-2">
              <Button
                as="a"
                href="#contact"
                useColorStyles={variant === 'scrolled'}
                className={`w-full ${theme.cta[variant]}`}
                onClick={close}
              >
                Contact Us
              </Button>
            </div>
          </nav>
        )}
      </Container>
    </header>
  )
}
