import { useReveal } from '@/hooks/usePetition'
import type { Signature } from '@/types'

const TILTS = ['-rotate-2', 'rotate-1', '-rotate-1', 'rotate-2']

function timeAgo(time: number) {
  if (!time) return ''
  const mins = Math.floor((Date.now() - time) / 60000)
  if (mins < 1) return 'just now'
  if (mins < 60) return `${mins}m ago`
  const hrs = Math.floor(mins / 60)
  if (hrs < 24) return `${hrs}h ago`
  return `${Math.floor(hrs / 24)}d ago`
}

interface WallProps {
  signatures: Signature[]
}

export default function Wall({ signatures }: WallProps) {
  const ref = useReveal<HTMLElement>()
  const empty = signatures.length === 0

  return (
    <section id="wall" ref={ref} className="border-b-[3px] border-[#0a0a0a] bg-[#0a0a0a] py-20 text-[#fdfcf5] md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <h2 className="reveal font-display text-5xl uppercase leading-none md:text-7xl">
            Wall of
            <br />
            <span className="text-[#def722]">supporters</span>
          </h2>
          <p className="reveal font-mono-label max-w-xs text-xs uppercase tracking-widest opacity-60">
            Names are stored in your browser only — this wall is yours, refresh-safe, zero servers
          </p>
        </div>

        {empty ? (
          <a
            href="#sign"
            className="reveal group block border-[3px] border-dashed border-[#fdfcf5]/40 px-6 py-16 text-center transition-colors hover:border-[#def722] hover:bg-[#def722]/5 md:py-24"
          >
            <p className="font-display text-4xl uppercase leading-none text-[#fdfcf5]/40 transition-colors group-hover:text-[#def722] md:text-6xl">
              The wall is empty
            </p>
            <p className="font-mono-label mt-4 text-sm uppercase tracking-widest text-[#fdfcf5]/50 transition-colors group-hover:text-[#fdfcf5]">
              Claim the top spot — sign the petition →
            </p>
          </a>
        ) : (
          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
            {signatures.map((s, i) => (
              <figure
                key={s.id}
                className={`pop-in reveal mb-5 inline-block w-full break-inside-avoid border-[3px] border-[#def722] bg-[#1c2206] p-5 ${
                  TILTS[i % TILTS.length]
                }`}
                style={{ ['--tilt' as string]: ['-2deg', '1deg', '-1deg', '2deg'][i % 4] }}
              >
                <blockquote className="mb-4 leading-relaxed">"{s.message}"</blockquote>
                <figcaption className="font-mono-label flex items-center justify-between text-xs uppercase tracking-widest">
                  <span className="font-bold text-[#def722]">— {s.name}</span>
                  <span className="opacity-50">{timeAgo(s.time)}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        )}

        {!empty && (
          <div className="reveal mt-12 text-center">
            <a
              href="#sign"
              className="sticker font-display inline-block bg-[#def722] px-8 py-4 text-xl uppercase tracking-wide text-[#0a0a0a]"
            >
              Add your name to the wall
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
