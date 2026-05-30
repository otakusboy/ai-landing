import Container from '../Container'
import Button from '../../ui/Button'
import { brand } from '../../../data/navigation'
import { useIsPastHero } from '../../../hooks/useIsPastHero'
import { useMobileMenu } from '../../../hooks/useMobileMenu'
import { HEADER_BASE, navbarTheme, navbarVariant } from '../navbarTheme'
import DesktopNavLinks from './DesktopNavLinks'
import MenuIcon from './MenuIcon'
import MobileNavPanel from './MobileNavPanel'

export default function Navbar() {
  const isPastHero = useIsPastHero()
  const { isOpen: mobileMenuOpen, close: closeMobileMenu, toggle: toggleMobileMenu } =
    useMobileMenu()
  const variant = navbarVariant(isPastHero)

  return (
    <header
      data-nav-variant={variant}
      className={`${HEADER_BASE} ${navbarTheme.header[variant]}`}
    >
      <Container>
        <div className="flex items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-6 lg:gap-12">
            <a
              href={brand.href}
              className={`shrink-0 text-lg font-semibold tracking-tight ${navbarTheme.brand[variant]}`}
            >
              {brand.name}
            </a>

            <DesktopNavLinks variant={variant} />
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <Button
              as="a"
              href="#contact"
              size="sm"
              useColorStyles={variant === 'scrolled'}
              className={`hidden sm:inline-flex ${navbarTheme.ctaButton[variant]}`}
            >
              Contact Us
            </Button>

            <button
              type="button"
              className={`inline-flex items-center justify-center p-2 md:hidden ${navbarTheme.menuToggle[variant]}`}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              onClick={toggleMobileMenu}
            >
              <MenuIcon open={mobileMenuOpen} />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <MobileNavPanel variant={variant} onNavigate={closeMobileMenu} />
        )}
      </Container>
    </header>
  )
}
