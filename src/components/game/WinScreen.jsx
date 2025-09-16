import '../../styles/game/lose-screen.css'
import { clang2 } from '../../assets/sounds/sounds'
import useSound from 'use-sound'

export default function WinScreen({ updateGameStatus }) {
  const [playClang] = useSound(clang2, { volume: 0.5, interrupt: true, playbackRate: 0.5 })

  return (
    <section
      className="win-screen"
      onClick={() => {
        playClang()
        updateGameStatus(draft => {
          draft.gameScreen = 'title'
        })

      }}
    >
      <h1>The Hashira prevailed</h1>
      <h2>The sun will rise once more</h2>
      <h3>Click any key to return to Title</h3>
    </section>
  )
}
