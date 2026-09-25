import { useEffect, useState } from 'react'

interface NavProps {
  totalSignatures: number
}

const LINKS = [
  { href: '#reasons', label: 'The case' },
  { href: '#sign', label: 'Petition' },
  { href: '#poll', label: 'Poll' },
  { href: '#wall', label: 'Wall' },
]

export default function Nav({ totalSignatures }: NavProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 border-b-[3px] transition-all duration-300 ${
        scrolled
          ? 'border-[#0a0a0a] bg-[#fdfcf5]/95 backdrop-blur-sm'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <a href="#" className="group flex items-center gap-2">
          <span
            className={`font-display flex h-9 w-9 items-center justify-center border-[3px] border-[#0a0a0a] text-sm transition-colors ${
              scrolled ? 'bg-[#def722]' : 'bg-[#0a0a0a] text-[#def722]'
            }`}
          >
            HAD
          </span>
          <span className="font-mono-label hidden text-xs font-bold uppercase tracking-widest sm:block">
            helpadvaithdropout.com
          </span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono-label relative text-xs font-bold uppercase tracking-widest after:absolute after:-bottom-1 after:left-0 after:h-[3px] after:w-0 after:bg-[#ff3b1f] after:transition-all after:duration-200 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#sign"
          className="sticker font-display flex items-center gap-2 bg-[#def722] px-4 py-2 text-sm uppercase tracking-wide"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff3b1f] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ff3b1f]" />
          </span>
          {totalSignatures.toLocaleString()} signed
        </a>
      </div>
    </nav>
  )
}
