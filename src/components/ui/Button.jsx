// --- Button colors (edit here) ---
const buttonColors = {
  primary: {
    light: {
      bg: 'bg-blue-100',
      text: 'text-blue-800',
      hover: 'hover:bg-blue-200',
      active: 'active:bg-blue-200',
      focus: 'focus-visible:outline-blue-800',
    },
    dark: {
      bg: 'bg-blue-900',
      text: 'text-blue-50',
      hover: 'hover:bg-blue-950',
      active: 'active:bg-blue-950',
      focus: 'focus-visible:outline-blue-50',
    },
  },
  secondary: {
    light: {
      border: 'border border-blue-200',
      bg: 'bg-transparent',
      text: 'text-blue-200',
      hover: 'hover:bg-blue-200/10',
      active: 'active:bg-blue-200/20',
      focus: 'focus-visible:outline-blue-200',
    },
    dark: {
      border: 'border border-blue-800',
      bg: 'bg-transparent',
      text: 'text-blue-800',
      hover: 'hover:bg-blue-50',
      active: 'active:bg-blue-100',
      focus: 'focus-visible:outline-blue-800',
    },
  },
}

// --- Shared layout tokens ---
const buttonTokens = {
  borderRadius: 'rounded-[3px]',
}

const baseStyles = `inline-flex items-center justify-center ${buttonTokens.borderRadius} font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`

const sizeStyles = {
  sm: 'min-h-[32px] rounded-[2px] py-2 pl-4 pr-4 text-sm font-semibold leading-[1.5] tracking-[-0.01em]',
  md: 'py-3 pl-5 pr-4 text-base leading-[1.5] tracking-[-0.5px]',
}

function toColorClasses({ border, bg, text, hover, active, focus }) {
  return [border, bg, text, hover, active, focus].filter(Boolean).join(' ')
}

const variantStyles = Object.fromEntries(
  Object.entries(buttonColors).map(([variant, schemes]) => [
    variant,
    Object.fromEntries(
      Object.entries(schemes).map(([scheme, colors]) => [scheme, toColorClasses(colors)]),
    ),
  ]),
)

export default function Button({
  children,
  variant = 'primary',
  colorScheme = 'light',
  size = 'md',
  className = '',
  useColorStyles = true,
  as: Component = 'button',
  ...props
}) {
  const styles = useColorStyles
    ? (variantStyles[variant]?.[colorScheme] ?? variantStyles.primary.light)
    : ''
  const sizeClass = sizeStyles[size] ?? sizeStyles.md

  return (
    <Component
      data-ui={Component === 'a' ? 'button' : undefined}
      className={`${baseStyles} ${sizeClass} ${styles} ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}
