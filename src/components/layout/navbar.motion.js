/** Motion (motion.dev) variants for mobile nav — https://motion.dev */

const spring = { type: 'spring', stiffness: 420, damping: 36 }
const springExit = { type: 'spring', stiffness: 420, damping: 40 }

export const menuIconTransition = { duration: 0.2, ease: [0.22, 1, 0.36, 1] }

export const menuIcon = {
  menu: {
    initial: { opacity: 0, rotate: 90, scale: 0.85 },
    animate: { opacity: 1, rotate: 0, scale: 1 },
    exit: { opacity: 0, rotate: -90, scale: 0.85 },
  },
  close: {
    initial: { opacity: 0, rotate: -90, scale: 0.85 },
    animate: { opacity: 1, rotate: 0, scale: 1 },
    exit: { opacity: 0, rotate: 90, scale: 0.85 },
  },
}

/** Panel slides down on open, slides up on close. */
export const mobileMenuPanel = {
  hidden: { opacity: 0, y: '-100%' },
  visible: {
    opacity: 1,
    y: 0,
    transition: spring,
  },
  exit: {
    opacity: 0,
    y: '-100%',
    transition: springExit,
  },
}

export const mobileMenuList = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.06 },
  },
  exit: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

export const mobileMenuItem = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: spring,
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: springExit,
  },
}

/** Instant transitions when user prefers reduced motion. */
export function getMotionProps(reduceMotion) {
  if (!reduceMotion) return {}

  const instant = { duration: 0 }

  return {
    menuIconTransition: instant,
    mobileMenuPanel: {
      hidden: { opacity: 1, y: 0 },
      visible: { opacity: 1, y: 0, transition: instant },
      exit: { opacity: 1, y: 0, transition: instant },
    },
    mobileMenuItem: {
      hidden: { opacity: 1, y: 0 },
      visible: { opacity: 1, y: 0, transition: instant },
      exit: { opacity: 1, y: 0, transition: instant },
    },
    mobileMenuList: {
      hidden: {},
      visible: { transition: { staggerChildren: 0, delayChildren: 0 } },
      exit: { transition: { staggerChildren: 0 } },
    },
  }
}
