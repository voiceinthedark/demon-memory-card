import "../../styles/menu/main-menu.css"
import ButtonAnimation from "../animation/ButtonAnimation"
import { btnHover, btnClick } from "../../assets/sounds/sounds"
import useSound from 'use-sound'

export default function DifficultyMenu({ setDifficulty, updateGameStatus, resetGame }) {
  const [playHover, stopHover] = useSound(btnHover)
  const [playClick, stopClick] = useSound(btnClick)

  function handleClick(difficulty) {
    setDifficulty(difficulty)
    updateGameStatus(draft => {
      draft.difficulty = difficulty
    })
    resetGame(difficulty)
  }

  return (
    <section className="difficulty-menu">
      <ButtonAnimation>
        <button
          className="difficulty-btn"
          onClick={() => {
            handleClick('easy')
            playClick()
          }}
          onMouseEnter={() => playHover()}
          onMouseLeave={() => stopHover()}
        >
          Easy
        </button >
      </ButtonAnimation>
      <ButtonAnimation>
        <button
          className="difficulty-btn"
          onClick={() => {
            handleClick('normal')
            playClick()
          }}
          onMouseEnter={() => playHover()}
          onMouseLeave={() => stopHover()}
        >
          Normal
        </button>
      </ButtonAnimation>
      <ButtonAnimation>
        <button
          className="difficulty-btn"
          onClick={() => {
            handleClick('hard')
            playClick()
          }}
          onMouseEnter={() => playHover()}
          onMouseLeave={() => stopHover()}
        >
          Hard
        </button>
      </ButtonAnimation>

      <ButtonAnimation>
        <button
          className="difficulty-btn"
          onClick={() => {
            updateGameStatus(draft => {
              draft.gameScreen = 'title'
            })
            playClick()
          }}
          onMouseEnter={() => playHover()}
          onMouseLeave={() => stopHover()}
        >
          Back
        </button>
      </ButtonAnimation>

    </section>
  )
}
