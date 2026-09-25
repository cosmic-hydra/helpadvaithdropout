import { useReveal } from '@/hooks/usePetition'
import { burstConfetti } from '@/lib/confetti'
import { VOTE_OPTIONS, type VoteOption } from '@/types'

interface PollProps {
  votes: Record<VoteOption, number>
  myVote: VoteOption | null
  onVote: (option: VoteOption) => void
}

export default function Poll({ votes, myVote, onVote }: PollProps) {
  const ref = useReveal<HTMLElement>()
  const total = Object.values(votes).reduce((a, b) => a + b, 0)

  const handleVote = (option: VoteOption) => {
    if (myVote !== option) burstConfetti()
    onVote(option)
  }

  return (
    <section id="poll" ref={ref} className="halftone border-b-[3px] border-[#0a0a0a] bg-[#def722] py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-5">
        <p className="reveal font-mono-label mb-4 text-sm font-bold uppercase tracking-widest">
          The people's poll
        </p>
        <h2 className="reveal font-display mb-3 text-5xl uppercase leading-none md:text-7xl">
          Should Advaith drop out?
        </h2>
        <p className="reveal mb-12 max-w-lg font-medium">
          A fair and balanced poll. All options were carefully reviewed by our panel
          of experts (Advaith).
        </p>

        <div className="reveal space-y-4">
          {VOTE_OPTIONS.map((opt) => {
            const v = votes[opt.id]
            const pct = total ? Math.round((v / total) * 100) : 0
            const mine = myVote === opt.id
            return (
              <button
                key={opt.id}
                onClick={() => handleVote(opt.id)}
                className={`group relative block w-full overflow-hidden border-[3px] border-[#0a0a0a] text-left transition-transform duration-150 hover:-translate-y-1 ${
                  mine ? 'bg-[#0a0a0a] text-[#def722]' : 'bg-[#fdfcf5]'
                }`}
              >
                {/* vote bar */}
                <div
                  className={`absolute inset-y-0 left-0 transition-[width] duration-700 ease-out ${
                    mine ? 'bg-[#def722]/25' : 'bg-[#def722]'
                  }`}
                  style={{ width: `${pct}%` }}
                />
                <div className="relative flex items-center justify-between gap-4 px-5 py-4">
                  <span className="font-display text-xl uppercase tracking-wide md:text-2xl">
                    {opt.label}
                  </span>
                  <span className="font-mono-label flex items-center gap-3 text-sm font-bold">
                    {mine && (
                      <span className="border-2 border-current px-2 py-0.5 text-[10px] uppercase tracking-widest">
                        Your vote
                      </span>
                    )}
                    {pct}% · {v.toLocaleString()}
                  </span>
                </div>
              </button>
            )
          })}
        </div>

        <p className="reveal font-mono-label mt-6 text-xs uppercase tracking-widest opacity-70">
          {total === 0
            ? 'No votes yet — cast the first one'
            : `${total.toLocaleString()} votes cast · 100% in favor · democracy works`}
        </p>
      </div>
    </section>
  )
}
