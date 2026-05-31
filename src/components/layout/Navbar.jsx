import { useCallback, useEffect, useState } from 'react'
import Container from './Container'
import Button from '../ui/Button'
import { brand, navLinks } from '../../data/navigation'

const FOCUS_RING =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'

const HEADER_BASE =
  'sticky top-0 z-50 w-full shrink-0 transition-[background-color,border-color,backdrop-filter,padding] duration-200'

// Navbar theme — edit colors here (top = over hero, scrolled = past hero)
const theme = {
  header: {
    top: 'py-3 border-b border-white/10 bg-neutral-950/10 backdrop-blur-sm',
    scrolled: 'py-4 border-b border-neutral-200 bg-white backdrop-blur-none',
  },
  brand: {
    top: `text-white ${FOCUS_RING} focus-visible:outline-white`,
    scrolled: `text-neutral-900 ${FOCUS_RING} focus-visible:outline-neutral-900`,
  },
  link: {
    top: `text-white/75 ${FOCUS_RING} focus-visible:outline-white`,
    scrolled: `text-neutral-500 ${FOCUS_RING} focus-visible:outline-neutral-900`,
  },
  menuToggle: {
    top: `text-white hover:bg-white/10 ${FOCUS_RING} focus-visible:outline-white`,
    scrolled: `text-neutral-900 hover:bg-neutral-100 ${FOCUS_RING} focus-visible:outline-neutral-900`,
  },
  mobileNav: { top: 'border-white/15', scrolled: 'border-neutral-200' },
  mobileLink: {
    top: `text-white/80 hover:bg-white/10 ${FOCUS_RING} focus-visible:outline-white`,
    scrolled: `text-neutral-700 hover:bg-neutral-100 ${FOCUS_RING} focus-visible:outline-neutral-900`,
  },
  cta: {
    top: 'bg-white text-black hover:bg-black hover:text-white active:bg-black focus-visible:outline-blue-900',
    scrolled: '',
  },
}

function MenuIcon({ open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6"
      aria-hidden="true"
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

function useIsPastHero() {
  const [isPastHero, setIsPastHero] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('hero')
    if (!hero) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => setIsPastHero(!entry.isIntersecting),
      { threshold: 0 },
    )

    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  return isPastHero
}

function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const close = useCallback(() => setIsOpen(false), [])
  const toggle = useCallback(() => setIsOpen((open) => !open), [])

  useEffect(() => {
    if (!isOpen) return undefined

    const onKeyDown = (e) => {
      if (e.key === 'Escape') close()
    }

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = prevOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, close])

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const onChange = (e) => {
      if (e.matches) close()
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [close])

  return { isOpen, close, toggle }
}

export default function Navbar() {
  const isPastHero = useIsPastHero()
  const { isOpen, close, toggle } = useMobileMenu()
  const v = isPastHero ? 'scrolled' : 'top'

  return (
    <header data-nav-variant={v} className={`${HEADER_BASE} ${theme.header[v]}`}>
      <Container>
        <div className="flex items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-6 lg:gap-12">
            <a
              href={brand.href}
              className={`shrink-0 text-lg font-semibold tracking-tight ${theme.brand[v]}`}
            >
              {brand.name}
            </a>

            <nav aria-label="Main navigation" className="hidden md:block">
              <ul className="flex items-center gap-6 lg:gap-8">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      data-nav-link=""
                      className={`text-sm font-medium ${theme.link[v]}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <Button
              as="a"
              href="#contact"
              size="sm"
              useColorStyles={v === 'scrolled'}
              className={`hidden sm:inline-flex ${theme.cta[v]}`}
            >
              Contact Us
            </Button>

            <button
              type="button"
              className={`inline-flex items-center justify-center p-2 md:hidden ${theme.menuToggle[v]}`}
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
            className={`border-t pb-4 md:hidden ${theme.mobileNav[v]}`}
          >
            <ul className="flex flex-col gap-1 pt-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    data-nav-link=""
                    className={`block px-2 py-2.5 text-sm font-medium ${theme.mobileLink[v]}`}
                    onClick={close}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <Button
                  as="a"
                  href="#contact"
                  useColorStyles={v === 'scrolled'}
                  className={`w-full ${theme.cta[v]}`}
                  onClick={close}
                >
                  Contact Us
                </Button>
              </li>
            </ul>
          </nav>
        )}
      </Container>
    </header>
  )
}
