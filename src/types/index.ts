export interface Signature {
  id: string
  name: string
  message: string
  time: number
}

export type VoteOption = 'yes' | 'absolutely' | 'obviously' | 'why'

export const VOTE_OPTIONS: { id: VoteOption; label: string }[] = [
  { id: 'yes', label: 'Yes.' },
  { id: 'absolutely', label: 'Absolutely.' },
  { id: 'obviously', label: 'Obviously.' },
  { id: 'why', label: 'Why is he still enrolled?' },
]
