import { cn } from '@/lib/cn'
import { bodyMd, bodyMdInverse, headingH2, headingH2Inverse } from '@/lib/sectionStyles'

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
}) {
  const titleStyles = inverse ? headingH2Inverse : headingH2
  const descriptionStyles = inverse ? bodyMdInverse : bodyMd
  const eyebrowStyles = inverse
    ? 'text-sm font-medium uppercase text-olive/50'
    : 'text-sm font-medium uppercase text-olive/50'

  return (
    <div className={className}>
      {eyebrow ? <p className={eyebrowStyles}>{eyebrow}</p> : null}
      {title ? (
        <TitleTag id={titleId} className={cn(titleStyles, 'mt-3', titleClassName)}>
          {title}
        </TitleTag>
      ) : null}
      {description ? (
        <p className={cn(descriptionStyles, 'mx-auto mt-4 max-w-3xl', descriptionClassName)}>
          {description}
        </p>
      ) : null}
    </div>
  )
}
