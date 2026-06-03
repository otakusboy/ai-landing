import { motion, useReducedMotion } from 'motion/react'
import { getFadeInDownMotion } from '@/motion'
import { cn } from '@/lib/cn'
import { bodyMd, bodyMdInverse, headingH2, headingH2Inverse } from '@/lib/sectionStyles'

function AnimatedText({
  as: Tag,
  motionOptions,
  reduceMotion,
  className,
  children,
  ...rest
}) {
  if (!motionOptions) {
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    )
  }

  const Component = motion.create(Tag)
  const variants = getFadeInDownMotion(reduceMotion, motionOptions)

  return (
    <Component
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      {...rest}
    >
      {children}
    </Component>
  )
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  titleAs: TitleTag = 'h2',
  titleId,
  inverse = false,
  className = '',
  titleClassName = '',
  descriptionClassName = '',
  motion: motionConfig,
}) {
  const reduceMotion = useReducedMotion()
  const titleStyles = inverse ? headingH2Inverse : headingH2
  const descriptionStyles = inverse ? bodyMdInverse : bodyMd
  const eyebrowStyles = inverse
    ? 'text-sm font-medium uppercase text-olive/50'
    : 'text-sm font-medium uppercase text-olive/50'

  return (
    <div className={className}>
      {eyebrow ? (
        <AnimatedText as="p" motionOptions={motionConfig?.eyebrow} reduceMotion={reduceMotion} className={eyebrowStyles}>
          {eyebrow}
        </AnimatedText>
      ) : null}
      {title ? (
        <AnimatedText
          as={TitleTag}
          motionOptions={motionConfig?.title}
          reduceMotion={reduceMotion}
          id={titleId}
          className={cn(titleStyles, 'mt-3', titleClassName)}
        >
          {title}
        </AnimatedText>
      ) : null}
      {description ? (
        <AnimatedText
          as="p"
          motionOptions={motionConfig?.description}
          reduceMotion={reduceMotion}
          className={cn(descriptionStyles, 'mx-auto mt-4 max-w-3xl', descriptionClassName)}
        >
          {description}
        </AnimatedText>
      ) : null}
    </div>
  )
}
