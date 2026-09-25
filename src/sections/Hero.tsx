import { useCountUp } from '@/hooks/usePetition'

interface HeroProps {
  totalSignatures: number
}

export default function Hero({ totalSignatures }: HeroProps) {
  const count = useCountUp(totalSignatures, 1600)

  return (
    <header className="halftone relative overflow-hidden border-b-[3px] border-[#0a0a0a] bg-[#fdfcf5]">
      {/* floating lime blob */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#def722] opacity-70 blur-2xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-[#ff3b1f] opacity-20 blur-3xl" />

      {/* spinning star badge */}
      <div className="spin-slow absolute right-6 top-20 hidden text-[#0a0a0a] md:block lg:right-16 lg:top-24">
        <div className="relative">
          <svg width="130" height="130" viewBox="0 0 100 100">
            <path
              fill="#ff3b1f"
              stroke="#0a0a0a"
              strokeWidth="2"
              d="M50 0l9 26 26-9-9 26 26 9-26 9 9 26-26-9-9 26-9-26-26 9 9-26-26-9 26-9-9-26 26 9z"
            />
          </svg>
          <span className="font-display absolute inset-0 flex items-center justify-center text-center text-[13px] uppercase leading-tight text-[#fdfcf5]">
            100%
            <br />
            legit
          </span>
        </div>
      </div>

      {/* torn diploma doodle */}
      <svg
        className="pointer-events-none absolute bottom-24 right-8 hidden -rotate-12 lg:block"
        width="150"
        height="110"
        viewBox="0 0 150 110"
        fill="none"
      >
        <rect x="10" y="20" width="130" height="70" fill="#fdfcf5" stroke="#0a0a0a" strokeWidth="3" />
        <rect x="20" y="32" width="80" height="5" fill="#0a0a0a" opacity="0.5" />
        <rect x="20" y="44" width="100" height="5" fill="#0a0a0a" opacity="0.3" />
        <rect x="20" y="56" width="60" height="5" fill="#0a0a0a" opacity="0.3" />
        <circle cx="118" cy="66" r="12" fill="#ff3b1f" stroke="#0a0a0a" strokeWidth="3" />
        <path d="M112 78l-4 14 8-5 8 5-4-14" fill="#ff3b1f" stroke="#0a0a0a" strokeWidth="3" />
        <path d="M4 12 L146 100" stroke="#0a0a0a" strokeWidth="6" strokeLinecap="round" />
        <path d="M4 12 L146 100" stroke="#fdfcf5" strokeWidth="2" strokeLinecap="round" strokeDasharray="10 8" />
      </svg>

      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-32 md:pb-24 md:pt-40">
        <p className="font-mono-label reveal revealed mb-6 inline-block -rotate-2 border-[3px] border-[#0a0a0a] bg-[#def722] px-4 py-1 text-xs font-bold uppercase tracking-widest shadow-[4px_4px_0_#0a0a0a] md:text-sm">
          Official petition · est. today, out of necessity
        </p>

        <h1 className="font-display uppercase leading-[0.92]">
          <span className="block text-[15vw] md:text-[9rem]">Help</span>
          <span className="wobble inline-block -rotate-1 bg-[#0a0a0a] px-4 text-[15vw] text-[#def722] md:text-[9rem]">
            Advaith
          </span>
          <span className="block text-[15vw] md:text-[9rem]">
            Drop<span className="text-[#ff3b1f]">out</span>
          </span>
        </h1>

        <p className="mt-8 max-w-xl text-lg font-medium leading-relaxed md:text-xl">
          One founder. One fund. Zero semesters to spare. Sign the petition and help
          Advaith drop out to build <strong>artificialhedge.co</strong> — an AI-native
          hedge fund.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-5">
          <a
            href="#sign"
            className="sticker font-display inline-block bg-[#def722] px-8 py-4 text-xl uppercase tracking-wide"
          >
            Sign the petition
          </a>
          <a
            href="#reasons"
            className="sticker font-display inline-block bg-[#fdfcf5] px-8 py-4 text-xl uppercase tracking-wide"
          >
            Hear him out
          </a>
        </div>

        <div className="font-mono-label mt-12 inline-flex items-center gap-4 border-[3px] border-[#0a0a0a] bg-[#0a0a0a] px-6 py-4 text-[#fdfcf5] shadow-[8px_8px_0_#def722]">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#def722] opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-[#def722]" />
          </span>
          <span className="text-sm uppercase tracking-widest md:text-base">
            {count === 0 ? (
              <>
                <strong className="text-[#def722]">0</strong> signatures —{' '}
                <a href="#sign" className="underline decoration-[#def722] decoration-2 underline-offset-4">
                  be the first
                </a>
              </>
            ) : (
              <>
                <strong className="text-[#def722]">{count.toLocaleString()}</strong> supporters
                and counting
              </>
            )}
          </span>
        </div>
      </div>
    </header>
  )
}
