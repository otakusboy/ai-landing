/**
 * Shared <img> with performance defaults.
 * Below-the-fold: loading="lazy", decoding="async".
 * LCP / hero: pass loading="eager" and fetchPriority="high".
 */
export default function AppImage({
  src,
  alt = '',
  className = '',
  loading = 'lazy',
  fetchPriority,
  decoding = 'async',
  ...rest
}) {
  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      fetchPriority={fetchPriority}
      decoding={decoding}
      className={className}
      {...rest}
    />
  )
}
