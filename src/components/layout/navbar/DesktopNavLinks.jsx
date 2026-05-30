import { navLinks } from '../../../data/navigation'
import { navbarTheme } from '../navbarTheme'

export default function DesktopNavLinks({ variant }) {
  return (
    <nav aria-label="Main navigation" className="hidden md:block">
      <ul className="flex items-center gap-6 lg:gap-8">
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={link.href}
              data-nav-link=""
              className={`text-sm font-medium ${navbarTheme.desktopLink[variant]}`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
