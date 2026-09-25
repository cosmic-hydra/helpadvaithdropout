import { useCallback, useEffect, useRef, useState } from 'react'
import type { Signature, VoteOption } from '@/types'

const SIG_KEY = 'had_signatures_v2'
const VOTE_KEY = 'had_votes_v2'
const MY_VOTE_KEY = 'had_my_vote_v2'

/** Fresh campaign — everything starts at zero. */
const BASE_SIGNATURES = 0
const BASE_VOTES: Record<VoteOption, number> = {
  yes: 0,
  absolutely: 0,
  obviously: 0,
  why: 0,
}

function loadJSON<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : fallback
  } catch {
    return fallback
  }
}

export function usePetition() {
  const [signatures, setSignatures] = useState<Signature[]>(() => loadJSON(SIG_KEY, []))
  const [votes, setVotes] = useState<Record<VoteOption, number>>(() =>
    loadJSON(VOTE_KEY, BASE_VOTES),
  )
  const [myVote, setMyVote] = useState<VoteOption | null>(() =>
    loadJSON(MY_VOTE_KEY, null),
  )

  useEffect(() => {
    localStorage.setItem(SIG_KEY, JSON.stringify(signatures))
  }, [signatures])

  useEffect(() => {
    localStorage.setItem(VOTE_KEY, JSON.stringify(votes))
  }, [votes])

  useEffect(() => {
    localStorage.setItem(MY_VOTE_KEY, JSON.stringify(myVote))
  }, [myVote])

  const totalSignatures = BASE_SIGNATURES + signatures.length

  const sign = useCallback((name: string, message: string) => {
    const entry: Signature = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      name: name.trim(),
      message: message.trim(),
      time: Date.now(),
    }
    setSignatures((prev) => [entry, ...prev])
    return entry
  }, [])

  const castVote = useCallback(
    (option: VoteOption) => {
      setVotes((prev) => {
        const next = { ...prev }
        if (myVote && myVote !== option) next[myVote] = Math.max(0, next[myVote] - 1)
        if (myVote !== option) next[option] = next[option] + 1
        return next
      })
      setMyVote(option)
    },
    [myVote],
  )

  return { signatures, totalSignatures, sign, votes, castVote, myVote }
}

/** Animates a displayed number toward its target with easing. */
export function useCountUp(target: number, duration = 1200) {
  const [display, setDisplay] = useState(target)
  const prevRef = useRef(target)

  useEffect(() => {
    const from = prevRef.current
    if (from === target) return
    const start = performance.now()
    let raf: number
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplay(Math.round(from + (target - from) * eased))
      if (t < 1) raf = requestAnimationFrame(tick)
      else prevRef.current = target
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, duration])

  return display
}

/** IntersectionObserver-based scroll reveal with automatic stagger. */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    // stagger siblings that reveal together
    el.querySelectorAll('.reveal').forEach((child, i) => {
      if (!(child as HTMLElement).style.transitionDelay) {
        ;(child as HTMLElement).style.transitionDelay = `${Math.min(i * 70, 420)}ms`
      }
    })
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('revealed')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    el.querySelectorAll('.reveal').forEach((child) => obs.observe(child))
    if (el.classList.contains('reveal')) obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}
