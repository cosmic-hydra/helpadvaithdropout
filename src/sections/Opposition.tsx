import { useReveal } from '@/hooks/usePetition'

const QUOTES = [
  {
    who: 'His teachers',
    quote: 'Prepare for JEE and get into some good college — startups and all won\'t work!',
    rebuttal: 'The fund disagrees. So does the market.',
  },
  {
    who: "Advaith's mom",
    quote: 'Finish your degree first, then you can do whatever you want.',
    rebuttal: 'Counterpoint: timing is everything.',
  },
]

export default function Opposition() {
  const ref = useReveal<HTMLElement>()

  return (
    <section ref={ref} className="border-b-[3px] border-[#0a0a0a] bg-[#fdfcf5] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="reveal font-mono-label mb-4 text-sm uppercase tracking-widest text-[#ff3b1f]">
              Fairness corner
            </p>
            <h2 className="reveal font-display text-5xl uppercase leading-none md:text-7xl">
              The opposition
              <br />
              <span className="text-outline">has spoken</span>
            </h2>
          </div>
          <p className="reveal max-w-xs text-sm font-medium opacity-70">
            In the interest of journalistic integrity, we asked the other side.
            Their statements are reproduced below, with our official response.
          </p>
        </div>

        <div className="space-y-0 border-[3px] border-[#0a0a0a]">
          {QUOTES.map((q, i) => (
            <div
              key={q.who}
              className={`reveal grid gap-4 p-6 md:grid-cols-[180px_1fr_1fr] md:gap-8 md:p-8 ${
                i !== QUOTES.length - 1 ? 'border-b-[3px] border-[#0a0a0a]' : ''
              } ${i % 2 ? 'bg-[#f5f5f0]' : 'bg-white'}`}
            >
              <div className="font-mono-label text-xs font-bold uppercase tracking-widest">
                {q.who}
              </div>
              <blockquote className="text-lg font-medium leading-relaxed md:text-xl">
                "{q.quote}"
              </blockquote>
              <div className="font-display self-center text-xl uppercase tracking-wide text-[#ff3b1f] md:text-2xl">
                ↳ {q.rebuttal}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
