// --- Button colors (edit here) ---
const buttonColors = {
  primary: {
    bg: 'bg-neutral-950',
    text: 'text-white',
    hover: 'hover:bg-neutral-700',
    active: 'active:bg-neutral-950',
    focus: 'focus-visible:outline-neutral-900',
  },
  secondary: {
    border: 'border border-neutral-200',
    bg: 'bg-white',
    text: 'text-neutral-900',
    hover: 'hover:bg-neutral-200',
    active: 'active:bg-neutral-100',
    focus: 'focus-visible:outline-neutral-900',
  },
}

// --- Shared layout tokens ---
const buttonTokens = {
  borderRadius: 'rounded-xs',
}

const baseStyles = `inline-flex items-center justify-center ${buttonTokens.borderRadius} font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`

const sizeStyles = {
  sm: 'min-h-[32px] rounded-[2px] py-2 pl-4 pr-4 text-sm font-semibold leading-[1.5] tracking-[-0.01em]',
  md: 'py-2.5 pl-5 pr-5 text-base leading-[1.5] tracking-[-0.5px]',
}

function toColorClasses({ border, bg, text, hover, active, focus }) {
  return [border, bg, text, hover, active, focus].filter(Boolean).join(' ')
}

const variantStyles = Object.fromEntries(
  Object.entries(buttonColors).map(([variant, colors]) => [variant, toColorClasses(colors)]),
)

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  useColorStyles = true,
  as: Component = 'button',
  ...props
}) {
  const styles = useColorStyles ? (variantStyles[variant] ?? variantStyles.primary) : ''
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
