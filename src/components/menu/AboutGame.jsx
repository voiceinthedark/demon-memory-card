import packageJson from '../../../package.json'
import Github from '../../assets/icons/Github'
import '../../styles/menu/about-game.css'
import { clang2 } from '../../assets/sounds/sounds'
import useSound from 'use-sound'

export default function AboutGame({ updateGameStatus }) {
  const [playClang] = useSound(clang2, { volume: 0.5, interrupt: true, playbackRate: 0.5 })

  return (
    <section
      className="about-game"
      onClick={() => {
        playClang()
        updateGameStatus(draft => {
          draft.gameScreen = 'title'
        })
      }}
    >
      <h2>Demon Slayer MCG</h2>
      <a
        href="https://github.com/voiceinthedark"
        target='_blank'
      >
        <div className='about-name'>
          <Github className='github-icon' fill='white' />
          <h3>{packageJson.author}</h3>
        </div>
      </a>
      <h3>{packageJson.name} v{packageJson.version} - 2025</h3>
    </section>
  )
}
