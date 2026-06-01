import { cn } from '@/lib/cn'
import { focusRing } from '@/lib/sectionStyles'

const arrowButtonClass = cn(
  'flex h-10 w-10 items-center justify-center rounded-md',
  'border border-gray-300 bg-white text-gray-700',
  'transition-colors hover:bg-gray-50',
  focusRing,
)

export default function ArrowButtons({ onPrevious, onNext, label = 'Navigate items' }) {
  return (
    <div className="flex items-center gap-2" role="group" aria-label={label}>
      <button type="button" onClick={onPrevious} aria-label="Previous" className={arrowButtonClass}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <button type="button" onClick={onNext} aria-label="Next" className={arrowButtonClass}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  )
}
