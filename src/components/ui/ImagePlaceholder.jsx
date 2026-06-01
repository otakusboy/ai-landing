import { cn } from '@/lib/cn'
import { contentImageTabletMax } from '@/lib/sectionStyles'

export default function ImagePlaceholder({
  className = '',
  label = 'Placeholder image',
  aspectRatio,
  src,
  capTabletHeight = true,
}) {
  if (src) {
    return (
      <img
        src={src}
        alt={label}
        className={cn('w-full object-cover', capTabletHeight && contentImageTabletMax, aspectRatio, className)}
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
