interface MarqueeProps {
  items: string[]
  reverse?: boolean
  dark?: boolean
  speed?: number
  className?: string
}

export default function Marquee({ items, reverse, dark, speed = 22, className = '' }: MarqueeProps) {
  const row = [...items, ...items, ...items, ...items]
  return (
    <div
      className={`overflow-hidden border-y-[3px] border-[#0a0a0a] py-3 select-none ${
        dark ? 'bg-[#0a0a0a] text-[#def722]' : 'bg-[#def722] text-[#0a0a0a]'
      } ${className}`}
      aria-hidden
    >
      <div
        className={`marquee-track ${reverse ? 'marquee-reverse' : ''}`}
        style={{ ['--marquee-speed' as string]: `${speed}s` }}
      >
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0 items-center">
            {row.map((item, i) => (
              <span
                key={`${half}-${i}`}
                className="font-display mx-5 flex items-center gap-5 text-xl uppercase tracking-wide md:text-2xl"
              >
                {item}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0l2.6 8.6L24 12l-9.4 3.4L12 24l-2.6-8.6L0 12l9.4-3.4z" />
                </svg>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
