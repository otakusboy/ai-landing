import { forwardRef } from 'react'

const Container = forwardRef(function Container(
  { children, className = '', as: Component = 'div' },
  ref,
) {
  return (
    <Component
      ref={ref}
      className={`mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </Component>
  )
})

export default Container
