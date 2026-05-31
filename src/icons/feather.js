import feather from 'feather-icons'

export { feather }

export const featherIconNames = Object.keys(feather.icons)

export function featherToSvg(name, options = {}) {
  const icon = feather.icons[name]
  if (!icon) {
    if (import.meta.env.DEV) {
      console.warn(`[FeatherIcon] Unknown icon: "${name}"`)
    }
    return ''
  }

  const { size = 24, strokeWidth = 2, className, ...attrs } = options

  return icon.toSvg({
    width: size,
    height: size,
    'stroke-width': strokeWidth,
    class: className,
    ...attrs,
  })
}
