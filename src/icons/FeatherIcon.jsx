import { featherToSvg } from './feather'

export default function FeatherIcon({
  name,
  size = 24,
  strokeWidth = 1.5,
  className = '',
  title,
  ...props
}) {
  const svg = featherToSvg(name, { size, strokeWidth, className: 'feather-icon' })

  if (!svg) return null

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center [&_svg]:block ${className}`}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      role={title ? 'img' : undefined}
      dangerouslySetInnerHTML={{ __html: svg }}
      {...props}
    />
  )
}
