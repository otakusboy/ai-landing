import { motion, useReducedMotion } from 'motion/react'
import Container from './Container'
import AppImage from '../ui/AppImage'
import Button from '../ui/Button'
import { brand, navLinks } from '../../data/navigation'
import { getFadeInDownMotion } from '@/motion'
import { cn } from '@/lib/cn'
import useIsPastHero from '../../hooks/useIsPastHero'
import useMobileMenu from '../../hooks/useMobileMenu'
import { HEADER_BASE, navbarTheme } from './navbarTheme'

/** Navbar entrance — top-to-bottom fade on load (plays once). Lower `duration` = faster. */
const navbarMotion = {
  duration: 1,
  delay: 0,
  ease: [0.22, 1, 0.36, 1],
}

function FeatherMenuIcon({ className = 'h-6 w-6' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}

function FeatherCloseIcon({ className = 'h-6 w-6' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

function MenuToggleIcon({ open }) {
  return open ? <FeatherCloseIcon /> : <FeatherMenuIcon />
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

function MobileMenuContent({ linkClassName, ctaClassName, onNavigate }) {
  return (
    <div className="flex min-h-0 flex-1 flex-col justify-between">
      <ul className="flex flex-col gap-1">
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={link.href}
              data-nav-link=""
              className={linkClassName}
              onClick={onNavigate}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="shrink-0 pt-6 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
        <Button
          as="a"
          href="#footer"
          useColorStyles={false}
          className={`w-full ${ctaClassName}`}
          onClick={onNavigate}
        >
          Contact Us
        </Button>
      </div>
    </div>
  )
}

export default function Navbar() {
  const isPastHero = useIsPastHero()
  const { isOpen, close, toggle } = useMobileMenu()
  const reduceMotion = useReducedMotion()
  const navVariants = getFadeInDownMotion(reduceMotion, navbarMotion)
  const variant = isPastHero ? 'scrolled' : 'top'
  const theme = navbarTheme
  const menuVariant = isOpen ? 'top' : variant

  const openHeaderClass =
    'fixed inset-x-0 top-0 z-50 flex h-dvh flex-col bg-neutral-950 lg:sticky lg:h-auto lg:bg-transparent'

  const barRowClass = isOpen ? 'shrink-0 border-b border-white/10 py-3' : ''

  return (
    <motion.header
      data-nav-variant={isOpen ? 'top' : variant}
      className={`${HEADER_BASE} ${isOpen ? openHeaderClass : theme.header[variant]}`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={barRowClass}>
        <Container className="relative z-[60]">
          <div className="flex shrink-0 items-center justify-between gap-4">
            <div className="flex min-w-0 items-center gap-6 lg:gap-12">
              <a
                href={brand.href}
                aria-label={brand.name}
                className={cn('inline-flex shrink-0 items-center', theme.brand[menuVariant])}
              >
                <AppImage
                  src={menuVariant === 'top' ? brand.logo.white : brand.logo.black}
                  alt={brand.name}
                  className="max-h-6 w-auto"
                />
              </a>
              <nav aria-label="Main navigation" className="hidden lg:block">
                <NavLinks
                  listClassName="flex items-center gap-6 lg:gap-8"
                  linkClassName={`text-sm font-medium ${theme.link[variant]}`}
                />
              </nav>
            </div>
            <div className="flex shrink-0 items-center gap-3">
              <div className="hidden lg:block">
                <Button
                  as="a"
                  href="#footer"
                  size="sm"
                  useColorStyles={variant === 'scrolled'}
                  className={theme.cta[variant]}
                >
                  Contact Us
                </Button>
              </div>
              <button
                type="button"
                className={`inline-flex items-center justify-center p-2 lg:hidden ${theme.menuToggle[menuVariant]}`}
                aria-expanded={isOpen}
                aria-controls="mobile-nav"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                onClick={toggle}
              >
                <MenuToggleIcon open={isOpen} />
              </button>
            </div>
          </div>
        </Container>
      </div>

      {isOpen ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          className="flex min-h-0 flex-1 flex-col overflow-hidden overscroll-contain bg-neutral-950 lg:hidden"
        >
          <Container className="flex min-h-0 flex-1 flex-col overflow-hidden">
            <MobileMenuContent
              linkClassName={`block px-1 py-2.5 text-sm font-medium ${theme.mobileLink[menuVariant]}`}
              ctaClassName={theme.cta.top}
              onNavigate={close}
            />
          </Container>
        </nav>
      ) : null}
    </motion.header>
  )
}
