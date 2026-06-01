import { forwardRef } from 'react'

const Container = forwardRef(function Container(
  { children, className = '', as: Component = 'div', ...rest },
  ref,
) {
  return (
    <Component
      ref={ref}
      className={`mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-8 ${className}`}
      {...rest}
    >
      {children}
    </Component>
  )
})

export default Container
