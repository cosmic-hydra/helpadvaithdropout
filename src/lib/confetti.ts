import confetti from 'canvas-confetti'

const COLORS = ['#def722', '#0a0a0a', '#ff3b1f', '#ffffff']

export function burstConfetti() {
  confetti({
    particleCount: 140,
    spread: 80,
    origin: { y: 0.7 },
    colors: COLORS,
    disableForReducedMotion: true,
  })
}

export function cannonConfetti() {
  const end = Date.now() + 900
  const frame = () => {
    confetti({
      particleCount: 6,
      angle: 60,
      spread: 60,
      origin: { x: 0, y: 0.8 },
      colors: COLORS,
      disableForReducedMotion: true,
    })
    confetti({
      particleCount: 6,
      angle: 120,
      spread: 60,
      origin: { x: 1, y: 0.8 },
      colors: COLORS,
      disableForReducedMotion: true,
    })
    if (Date.now() < end) requestAnimationFrame(frame)
  }
  frame()
}
