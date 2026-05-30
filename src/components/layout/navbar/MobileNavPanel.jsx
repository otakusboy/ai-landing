import Button from '../../ui/Button'
import { navLinks } from '../../../data/navigation'
import { navbarTheme } from '../navbarTheme'

export default function MobileNavPanel({ variant, onNavigate }) {
  return (
    <nav
      id="mobile-nav"
      aria-label="Mobile navigation"
      className={`border-t pb-4 md:hidden ${navbarTheme.mobileNav[variant]}`}
    >
      <ul className="flex flex-col gap-1 pt-4">
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={link.href}
              data-nav-link=""
              className={`block px-2 py-2.5 text-sm font-medium transition-colors ${navbarTheme.mobileLink[variant]}`}
              onClick={onNavigate}
            >
              {link.label}
            </a>
          </li>
        ))}
        <li className="pt-2">
          <Button as="a" href="#contact" className="w-full" onClick={onNavigate}>
            Contact Us
          </Button>
        </li>
      </ul>
    </nav>
  )
}
