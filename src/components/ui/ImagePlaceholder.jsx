import { cn } from '@/lib/cn'
import { contentImageTabletMax } from '@/lib/sectionStyles'
import AppImage from './AppImage'

export default function ImagePlaceholder({
  className = '',
  label = 'Placeholder image',
  aspectRatio,
  src,
  capTabletHeight = true,
  loading = 'lazy',
  fetchPriority,
}) {
  if (src) {
    return (
      <AppImage
        src={src}
        alt={label}
        loading={loading}
        fetchPriority={fetchPriority}
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
