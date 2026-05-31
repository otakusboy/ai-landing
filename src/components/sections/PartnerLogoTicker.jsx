import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { animate, motion, useMotionValue, useReducedMotion } from 'motion/react'

const VELOCITY = 40
const HOVER_VELOCITY = 20
const SET_GAP = 40

function getTickerMetrics(container, track) {
  const sets = track.children
  const firstSet = sets[0]
  if (!firstSet) return null

  let loopWidth
  if (sets.length >= 2) {
    loopWidth = sets[1].offsetLeft - sets[0].offsetLeft
  } else {
    const setWidth = firstSet.getBoundingClientRect().width
    if (!setWidth) return null
    loopWidth = setWidth + SET_GAP
  }

  const containerWidth = container.getBoundingClientRect().width
  const repeatCount = Math.max(2, Math.ceil(containerWidth / loopWidth) + 1)

  return { loopWidth, repeatCount }
}

function getTickerLogos(logos, setIndex) {
  return logos.map((logo, index) => ({
    id: setIndex * logos.length + index + 1,
    image: logo.image,
  }))
}

function Logo({ logo }) {
  return (
    <div className="flex h-[30px] max-h-[30px] shrink-0 items-center">
      <img src={logo.image} alt="" className="h-full w-auto max-w-none object-contain grayscale transition-[filter] duration-300 hover:grayscale-0" loading="lazy" />
    </div>
  )
}

function LogoSet({ logos, hidden }) {
  return (
    <div className="flex shrink-0 items-center gap-10" aria-hidden={hidden || undefined}>
      {logos.map((logo) => (
        <Logo key={logo.id} logo={logo} />
      ))}
    </div>
  )
}

export default function PartnerLogoTicker({ logos }) {
  const containerRef = useRef(null)
  const trackRef = useRef(null)
  const prevLoopWidthRef = useRef(0)
  const x = useMotionValue(0)
  const [metrics, setMetrics] = useState(null)
  const [isHovered, setIsHovered] = useState(false)
  const reducedMotion = useReducedMotion()
  const velocity = isHovered ? HOVER_VELOCITY : VELOCITY

  useLayoutEffect(() => {
    const container = containerRef.current
    const track = trackRef.current
    if (!container || !track) return
    const update = () => {
      const next = getTickerMetrics(container, track)
      if (!next) return
      setMetrics((prev) =>
        prev?.loopWidth === next.loopWidth && prev?.repeatCount === next.repeatCount
          ? prev
          : next,
      )
    }
    update()
    const observer = new ResizeObserver(update)
    observer.observe(container)
    observer.observe(track)
    return () => observer.disconnect()
  }, [logos])

  useEffect(() => {
    if (reducedMotion || !metrics?.loopWidth) return
    const { loopWidth } = metrics

    if (prevLoopWidthRef.current !== loopWidth) {
      x.set(0)
      prevLoopWidthRef.current = loopWidth
    }

    const startX = x.get()
    const controls = animate(x, [startX, startX - loopWidth], {
      duration: loopWidth / velocity,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'loop',
    })

    return () => controls.stop()
  }, [metrics?.loopWidth, reducedMotion, velocity, x])

  return (
    <motion.div
      ref={containerRef}
      className="w-full touch-pan-y overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
      aria-label="Partner companies"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
      onTouchCancel={() => setIsHovered(false)}
    >
      <motion.div ref={trackRef} style={{ x }} className="flex w-max items-center gap-10">
        {Array.from({ length: metrics?.repeatCount ?? 2 }, (_, setIndex) => (
          <LogoSet key={setIndex} logos={getTickerLogos(logos, setIndex)} hidden={setIndex > 0} />
        ))}
      </motion.div>
    </motion.div>
  )
}
