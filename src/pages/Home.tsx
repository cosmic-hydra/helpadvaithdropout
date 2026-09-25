import Nav from '@/sections/Nav'
import Hero from '@/sections/Hero'
import Marquee from '@/sections/Marquee'
import Reasons from '@/sections/Reasons'
import Petition from '@/sections/Petition'
import Poll from '@/sections/Poll'
import Opposition from '@/sections/Opposition'
import Wall from '@/sections/Wall'
import Footer from '@/sections/Footer'
import { usePetition } from '@/hooks/usePetition'

export default function Home() {
  const { signatures, totalSignatures, sign, votes, castVote, myVote } = usePetition()

  return (
    <main className="min-h-screen bg-[#fdfcf5] text-[#0a0a0a]">
      <Nav totalSignatures={totalSignatures} />
      <Hero totalSignatures={totalSignatures} />
      <Marquee
        items={[
          'Sign the petition',
          'Free Advaith',
          'artificialhedge.co',
          'AI-native hedge fund',
          'Drop out. Build.',
          '10,000 signatures or bust',
        ]}
      />
      <Reasons />
      <Petition totalSignatures={totalSignatures} onSign={sign} />
      <Marquee
        dark
        reverse
        speed={28}
        items={[
          'The people have spoken',
          '100% in favor',
          'Democracy works',
          'Advaith 2026',
          'Full-time on artificialhedge.co',
        ]}
      />
      <Poll votes={votes} myVote={myVote} onVote={castVote} />
      <Opposition />
      <Wall signatures={signatures} />
      <Footer />
    </main>
  )
}
