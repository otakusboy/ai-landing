import { cn } from '@/lib/cn'
import { bodyMd, headingH2 } from '@/lib/sectionStyles'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  titleAs: TitleTag = 'h2',
  titleId,
  className = '',
  titleClassName = '',
  descriptionClassName = '',
}) {
  return (
    <div className={className}>
      {eyebrow ? (
        <p className="text-sm font-medium uppercase text-gray-500">{eyebrow}</p>
      ) : null}
      {title ? (
        <TitleTag id={titleId} className={cn(headingH2, 'mt-3', titleClassName)}>
          {title}
        </TitleTag>
      ) : null}
      {description ? (
        <p className={cn(bodyMd, 'mx-auto mt-4 max-w-3xl', descriptionClassName)}>
          {description}
        </p>
      ) : null}
    </div>
  )
}
