export default function ImagePlaceholder({
  className = '',
  label = 'Placeholder image',
  aspectRatio,
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`bg-gray-200 ${aspectRatio ?? ''} ${className}`}
    />
  )
}
