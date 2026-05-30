// Button design tokens — tweak shared styles here
const buttonTokens = {
  borderRadius: 'rounded-[0px]',
}

const baseStyles = `inline-flex items-center justify-center ${buttonTokens.borderRadius} font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`

// Tweak compact button sizing here (button-sm)
const sizeStyles = {
  sm: 'py-2 pr-4 pl-4 text-sm font-semibold tracking-[-0.01em] leading-[1.5] min-h-[40px] font-size-16 bg-green-300 rounded-[1px]',
  md: 'py-3 pl-5 pr-4 text-base tracking-[-0.5px] leading-[1.5]',
}

const variantStyles = {
  primary: {
    light:
      'bg-green-100 text-green-800 hover:bg-green-100 active:bg-green-200 focus-visible:outline-green-800',
    dark:
      'bg-emerald-900 text-emerald-50 hover:bg-emerald-950 active:bg-emerald-950 focus-visible:outline-emerald-50',
  },
  secondary: {
    light:
      'border border-emerald-200 bg-transparent text-emerald-200 hover:bg-emerald-200/10 active:bg-emerald-200/20 focus-visible:outline-emerald-200',
    dark:
      'border border-emerald-800 bg-transparent text-emerald-800 hover:bg-emerald-50 active:bg-emerald-100 focus-visible:outline-emerald-800',
  },
}

export default function Button({
  children,
  variant = 'primary',
  colorScheme = 'light',
  size = 'md',
  className = '',
  as: Component = 'button',
  ...props
}) {
  const styles = variantStyles[variant]?.[colorScheme] ?? variantStyles.primary.light
  const sizeClass = sizeStyles[size] ?? sizeStyles.md

  return (
    <Component
      className={`${baseStyles} ${sizeClass} ${styles} ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}
