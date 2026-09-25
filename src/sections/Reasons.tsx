import { useReveal } from '@/hooks/usePetition'

const REASONS = [
  {
    n: '01',
    title: 'The company',
    body: 'artificialhedge.co — an AI-native hedge fund. Autonomous research, signal generation, and risk management, built from day one around machine intelligence rather than bolted onto it.',
    tilt: '-rotate-2',
  },
  {
    n: '02',
    title: 'Why now',
    body: 'The window is open. AI is repricing every edge in financial markets, and the funds that win this cycle are being founded right now — not after graduation.',
    tilt: 'rotate-1',
  },
  {
    n: '03',
    title: 'The edge',
    body: 'Legacy funds run on headcount and hierarchy. artificialhedge.co runs on models that read, reason, and rebalance around the clock. Small team, machine scale.',
    tilt: 'rotate-2',
  },
  {
    n: '04',
    title: 'The cost of waiting',
    body: 'Every semester in a lecture hall is a semester the fund is not compounding. Markets do not grant extensions, and neither does timing.',
    tilt: '-rotate-1',
  },
  {
    n: '05',
    title: 'The founder',
    body: 'Advaith has the conviction, the obsession, and the codebase. What he does not have is the time to do this and a degree at once. Something has to give.',
    tilt: 'rotate-2',
  },
  {
    n: '06',
    title: 'The precedent',
    body: 'The industry was built by dropouts and outsiders who bet on themselves early. The pedigree matters less than the positions. Sign, and let him take his.',
    tilt: '-rotate-2',
  },
]

export default function Reasons() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="reasons" ref={ref} className="border-b-[3px] border-[#0a0a0a] bg-[#0a0a0a] py-20 text-[#fdfcf5] md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <p className="reveal font-mono-label mb-4 text-sm uppercase tracking-widest text-[#def722]">
          The investment thesis
        </p>
        <h2 className="reveal font-display mb-14 text-5xl uppercase leading-none md:text-7xl">
          The case for
          <br />
          <span className="text-[#def722]">dropping out</span>
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r) => (
            <article
              key={r.n}
              className={`reveal group border-[3px] border-[#fdfcf5] bg-[#0a0a0a] p-6 transition-all duration-200 hover:-translate-y-2 hover:bg-[#def722] hover:text-[#0a0a0a] hover:shadow-[8px_8px_0_#fdfcf5] ${r.tilt}`}
            >
              <div className="font-mono-label mb-6 flex items-center justify-between">
                <span className="text-3xl font-bold text-[#def722] group-hover:text-[#0a0a0a]">
                  {r.n}
                </span>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="opacity-60">
                  <path d="M12 0l2.6 8.6L24 12l-9.4 3.4L12 24l-2.6-8.6L0 12l9.4-3.4z" />
                </svg>
              </div>
              <h3 className="font-display mb-3 text-2xl uppercase tracking-wide">{r.title}</h3>
              <p className="leading-relaxed opacity-80">{r.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
