import { useState } from 'react'
import { useCountUp, useReveal } from '@/hooks/usePetition'
import { burstConfetti, cannonConfetti } from '@/lib/confetti'

const GOAL = 10000

interface PetitionProps {
  totalSignatures: number
  onSign: (name: string, message: string) => void
}

export default function Petition({ totalSignatures, onSign }: PetitionProps) {
  const ref = useReveal<HTMLElement>()
  const count = useCountUp(totalSignatures, 1400)
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [agreed, setAgreed] = useState(false)
  const [justSigned, setJustSigned] = useState(false)
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState('')

  const pct = Math.min(100, (totalSignatures / GOAL) * 100)

  const milestone = (() => {
    if (pct >= 100) return 'GOAL REACHED. Advaith is legally* obligated to drop out. (*not legally)'
    if (pct >= 75) return 'Final stretch. The registrar has been notified (they have not).'
    if (pct >= 50) return 'Halfway there. Momentum is a beautiful thing.'
    if (pct >= 25) return 'Building steam. artificialhedge.co can hear us coming.'
    if (pct > 0) return 'The movement has begun. Every revolution starts with one name.'
    return 'No signatures yet. History is waiting for someone brave.'
  })()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim()) {
      setError('We need a name. "Anonymous" works, but be brave.')
      return
    }
    if (!agreed) {
      setError('You must acknowledge the legal non-bindingness of this petition.')
      return
    }
    setError('')
    onSign(name, message || 'Free Advaith!')
    cannonConfetti()
    setName('')
    setMessage('')
    setAgreed(false)
    setJustSigned(true)
    window.setTimeout(() => setJustSigned(false), 4000)
  }

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
    } catch {
      /* clipboard unavailable — still show feedback */
    }
    setCopied(true)
    burstConfetti()
    window.setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section id="sign" ref={ref} className="border-b-[3px] border-[#0a0a0a] bg-[#fdfcf5] py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2 lg:gap-16">
        {/* Counter + progress */}
        <div className="reveal flex flex-col justify-center">
          <p className="font-mono-label mb-4 text-sm uppercase tracking-widest text-[#ff3b1f]">
            Live signature count
          </p>
          <div className="font-display text-7xl leading-none tabular-nums md:text-8xl">
            {count.toLocaleString()}
          </div>
          <p className="font-mono-label mt-2 text-sm uppercase tracking-widest opacity-60">
            of {GOAL.toLocaleString()} signatures needed
          </p>

          <div className="relative mt-8 h-8 overflow-hidden border-[3px] border-[#0a0a0a] bg-white">
            <div
              className="progress-shine relative h-full bg-[#def722] transition-[width] duration-700 ease-out"
              style={{ width: `${Math.max(pct, totalSignatures > 0 ? 2 : 0)}%` }}
            />
          </div>
          <p className="mt-3 text-sm font-medium">{milestone}</p>

          <ul className="font-mono-label mt-10 space-y-3 text-xs uppercase tracking-wider">
            {[
              ['1', 'The first brave soul signs', totalSignatures >= 1],
              ['100', 'Advaith starts sweating', totalSignatures >= 100],
              ['1,000', 'Advaith tweets about it', totalSignatures >= 1000],
              ['10,000', 'The dropout becomes official-ish', totalSignatures >= 10000],
            ].map(([n, label, done]) => (
              <li key={n as string} className="flex items-center gap-3">
                <span
                  className={`flex h-5 w-5 items-center justify-center border-2 border-[#0a0a0a] transition-colors ${
                    done ? 'bg-[#def722]' : 'bg-white'
                  }`}
                >
                  {done ? '✓' : ''}
                </span>
                <span className={done ? '' : 'opacity-50'}>
                  {n} — {label}
                </span>
              </li>
            ))}
          </ul>

          <button
            onClick={copyLink}
            className="sticker font-display mt-10 inline-flex w-fit items-center gap-3 bg-white px-6 py-3 text-base uppercase tracking-wide"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
            </svg>
            {copied ? 'Link copied!' : 'Share the cause'}
          </button>
        </div>

        {/* Sign form */}
        <div className="reveal">
          <form
            onSubmit={handleSubmit}
            className="sticker relative bg-white p-7 md:p-9"
            style={{ boxShadow: '10px 10px 0 #0a0a0a' }}
          >
            <div className="absolute -top-4 left-6 -rotate-3 border-[3px] border-[#0a0a0a] bg-[#ff3b1f] px-3 py-1">
              <span className="font-mono-label text-xs font-bold uppercase tracking-widest text-white">
                Urgent
              </span>
            </div>

            <h3 className="font-display mb-1 mt-2 text-3xl uppercase">Sign here</h3>
            <p className="mb-6 text-sm opacity-70">
              Join the movement. Takes 4 seconds. Consequences: none.
            </p>

            <div className="mb-1 flex items-end justify-between">
              <label className="font-mono-label text-xs uppercase tracking-widest">
                Your name *
              </label>
              <span className="font-mono-label text-[10px] opacity-40">{name.length}/40</span>
            </div>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={40}
              placeholder="Concerned Citizen"
              className="mb-4 w-full border-[3px] border-[#0a0a0a] bg-[#f5f5f0] px-4 py-3 outline-none transition-all focus:bg-[#def722]/40 focus:shadow-[4px_4px_0_#0a0a0a]"
            />

            <div className="mb-1 flex items-end justify-between">
              <label className="font-mono-label text-xs uppercase tracking-widest">
                Words of encouragement (optional)
              </label>
              <span className="font-mono-label text-[10px] opacity-40">{message.length}/120</span>
            </div>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={120}
              rows={2}
              placeholder="Drop out, king. The markets are waiting."
              className="mb-4 w-full resize-none border-[3px] border-[#0a0a0a] bg-[#f5f5f0] px-4 py-3 outline-none transition-all focus:bg-[#def722]/40 focus:shadow-[4px_4px_0_#0a0a0a]"
            />

            <label className="mb-5 flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer appearance-none border-[3px] border-[#0a0a0a] bg-white transition-colors checked:bg-[#def722]"
              />
              <span className="text-xs leading-relaxed opacity-80">
                I understand this petition is legally non-binding, morally binding, and
                spiritually permanent.
              </span>
            </label>

            {error && (
              <p className="font-mono-label mb-4 border-2 border-[#ff3b1f] bg-[#ff3b1f]/10 px-3 py-2 text-xs font-bold text-[#ff3b1f]">
                {error}
              </p>
            )}

            <button
              type="submit"
              onMouseEnter={() => burstConfetti()}
              className="sticker font-display w-full bg-[#0a0a0a] py-4 text-xl uppercase tracking-wide text-[#def722]"
            >
              Add my signature
            </button>

            {justSigned && (
              <p className="flash-lime font-mono-label mt-4 border-[3px] border-[#0a0a0a] px-3 py-2 text-center text-xs font-bold uppercase tracking-widest">
                Signature recorded. History will remember you.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
