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
        <p className="text-xl font-medium text-gray-600">{eyebrow}</p>
      )}
      {title && (
        <TitleTag
          id={titleId}
          className={`mt-3 text-2xl font-semibold text-gray-900 sm:text-3xl lg:text-4xl ${titleClassName}`}
        >
          {title}
        </TitleTag>
      )}
      {description && (
        <p className={`mt-4 max-w-3xl text-base text-gray-600 sm:text-lg ${descriptionClassName}`}>
          {description}
        </p>
      )}
    </div>
  )
}
