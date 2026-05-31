const FOCUS_RING =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'

export const HEADER_BASE =
  'sticky top-0 z-50 w-full shrink-0 transition-[background-color,border-color,backdrop-filter,padding] duration-200'

export const navbarTheme = {
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
