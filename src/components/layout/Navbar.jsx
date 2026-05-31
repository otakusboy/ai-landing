import { useLayoutEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import Container from './Container'
import Button from '../ui/Button'
import { brand, navLinks } from '../../data/navigation'
import useIsPastHero from '../../hooks/useIsPastHero'
import useMobileMenu from '../../hooks/useMobileMenu'
import { HEADER_BASE, navbarTheme } from './navbarTheme'
import {
  getMotionProps,
  menuIcon,
  menuIconTransition,
  mobileMenuItem,
  mobileMenuList,
  mobileMenuPanel,
} from './navbar.motion'

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

function MenuToggleIcon({ open, iconTransition }) {
  const state = open ? menuIcon.close : menuIcon.menu

  return (
    <span className="relative inline-flex h-6 w-6 items-center justify-center">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={open ? 'close' : 'menu'}
          className="absolute inset-0 flex items-center justify-center"
          initial={state.initial}
          animate={state.animate}
          exit={state.exit}
          transition={iconTransition}
        >
          {open ? <FeatherCloseIcon /> : <FeatherMenuIcon />}
        </motion.span>
      </AnimatePresence>
    </span>
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

function MobileMenuContent({ linkClassName, ctaClassName, onNavigate, listVariants, itemVariants }) {
  return (
    <motion.div
      className="flex min-h-0 flex-1 flex-col justify-between"
      variants={listVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <ul className="flex flex-col gap-1 pt-2">
        {navLinks.map((link) => (
          <li key={link.id}>
            <motion.div variants={itemVariants}>
              <a
                href={link.href}
                data-nav-link=""
                className={linkClassName}
                onClick={onNavigate}
              >
                {link.label}
              </a>
            </motion.div>
          </li>
        ))}
      </ul>
      <motion.div className="shrink-0" variants={itemVariants}>
        <Button
          as="a"
          href="#contact"
          useColorStyles={false}
          className={`w-full ${ctaClassName}`}
          onClick={onNavigate}
        >
          Contact Us
        </Button>
      </motion.div>
    </motion.div>
  )
}

export default function Navbar() {
  const barRef = useRef(null)
  const [barHeight, setBarHeight] = useState(0)

  const reduceMotion = useReducedMotion()
  const motionProps = getMotionProps(reduceMotion)
  const panelVariants = motionProps.mobileMenuPanel ?? mobileMenuPanel
  const listVariants = motionProps.mobileMenuList ?? mobileMenuList
  const itemVariants = motionProps.mobileMenuItem ?? mobileMenuItem
  const iconTransition = motionProps.menuIconTransition ?? menuIconTransition

  const isPastHero = useIsPastHero()
  const { isOpen, close, toggle } = useMobileMenu()
  const variant = isPastHero ? 'scrolled' : 'top'
  const theme = navbarTheme
  const menuVariant = isOpen ? 'top' : variant

  useLayoutEffect(() => {
    if (!barRef.current) return undefined

    const updateBarHeight = () => {
      setBarHeight(barRef.current?.offsetHeight ?? 0)
    }

    updateBarHeight()
    window.addEventListener('resize', updateBarHeight)
    return () => window.removeEventListener('resize', updateBarHeight)
  }, [isOpen, variant])

  return (
    <header
      data-nav-variant={isOpen ? 'top' : variant}
      className={`${HEADER_BASE} ${isOpen ? 'relative bg-neutral-950 backdrop-blur-none' : ''} ${
        isOpen ? 'py-3' : theme.header[variant]
      }`}
    >
      <Container ref={barRef} className="relative z-[60]">
        <div className="flex shrink-0 items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-6 lg:gap-12">
            <a
              href={brand.href}
              className={`shrink-0 text-lg font-semibold tracking-tight ${theme.brand[menuVariant]}`}
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
            <div className="hidden md:block">
              <Button
                as="a"
                href="#contact"
                size="sm"
                useColorStyles={variant === 'scrolled'}
                className={theme.cta[variant]}
              >
                Contact Us
              </Button>
            </div>
            <button
              type="button"
              className={`inline-flex items-center justify-center p-2 md:hidden ${theme.menuToggle[menuVariant]}`}
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              onClick={toggle}
            >
              <MenuToggleIcon open={isOpen} iconTransition={iconTransition} />
            </button>
          </div>
        </div>
      </Container>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile navigation"
            className="absolute inset-x-0 top-full z-[55] flex flex-col overflow-hidden overscroll-none bg-neutral-950 md:hidden"
            style={{ height: barHeight ? `calc(100dvh - ${barHeight}px)` : 'calc(100dvh - 65px)' }}
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Container className="flex min-h-0 flex-1 flex-col overflow-hidden pb-4 sm:pb-6 lg:pb-8">
              <MobileMenuContent
                linkClassName={`block px-2 py-2.5 text-sm font-medium ${theme.mobileLink[menuVariant]}`}
                ctaClassName={theme.cta.top}
                onNavigate={close}
                listVariants={listVariants}
                itemVariants={itemVariants}
              />
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
