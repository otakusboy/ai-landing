const baseStyles =
  'inline-flex items-center justify-center rounded-[3px] text-base font-medium tracking-[-0.5px] leading-[1.5] py-3 pl-5 pr-4 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'

const variantStyles = {
  primary: {
    light:
      'bg-green-50 text-green-800 hover:bg-green-100 active:bg-green-200 focus-visible:outline-green-800',
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
  className = '',
  as: Component = 'button',
  ...props
}) {
  const styles = variantStyles[variant]?.[colorScheme] ?? variantStyles.primary.light

  return (
    <Component
      className={`${baseStyles} ${styles} ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}
