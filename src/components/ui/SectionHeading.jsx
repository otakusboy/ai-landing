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
      {eyebrow && (
        <p className="text-sm font-medium text-gray-500 uppercase">{eyebrow}</p>
      )}
      {title && (
        <TitleTag
          id={titleId}
          className={`mt-3 text-3xl font-semibold text-gray-900 sm:text-3xl lg:text-4xl tracking-normal ${titleClassName}`}
        >
          {title}
        </TitleTag>
      )}
      {description && (
        <p className={`mt-4 max-w-3xl text-md text-gray-600 sm:text-md lg:text-md mx-auto ${descriptionClassName}`}>
          {description}
        </p>
      )}
    </div>
  )
}
