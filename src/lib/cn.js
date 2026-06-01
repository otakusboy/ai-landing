/** Join class names; falsy values are omitted. */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}
