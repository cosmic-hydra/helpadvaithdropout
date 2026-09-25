export default function Footer() {
  return (
    <footer className="bg-[#fdfcf5]">
      <div className="mx-auto max-w-6xl px-5 pb-10 pt-16">
        <h2 className="font-display select-none text-center text-[18vw] uppercase leading-[0.85] md:text-[11rem]">
          <span className="text-outline block">Drop</span>
          <span className="block bg-[#0a0a0a] text-[#def722]">Out</span>
        </h2>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t-[3px] border-[#0a0a0a] pt-8 md:flex-row">
          <p className="font-mono-label text-xs uppercase tracking-widest">
            helpadvaithdropout.com · a grassroots movement
          </p>
          <p className="max-w-md text-center text-xs leading-relaxed opacity-60 md:text-right">
            Disclaimer: this is a joke website made for fun. It changes nothing legally,
            academically, or spiritually. Please do not make life decisions based on
            confetti. (But do sign.)
          </p>
          <a
            href="#"
            className="sticker font-mono-label bg-[#def722] px-4 py-2 text-xs font-bold uppercase tracking-widest"
          >
            ↑ Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}
