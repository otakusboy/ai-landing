import { cn } from '@/lib/cn'

export default function ImagePlaceholder({
  className = '',
  label = 'Placeholder image',
  aspectRatio,
  src,
}) {
  if (src) {
    return (
      <img
        src={src}
        alt={label}
        className={cn('w-full object-cover', aspectRatio, className)}
      />
    )
  }

  return (
    <div
      role="img"
      aria-label={label}
      className={cn('bg-gray-200', aspectRatio, className)}
    />
  )
}
