import "../../styles/menu/main-menu.css"
import ButtonAnimation from "../animation/ButtonAnimation"

export default function DifficultyMenu({ setDifficulty, updateGameStatus, resetGame }) {
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
          onClick={() => handleClick('easy')}
        >
          Easy
        </button >
      </ButtonAnimation>
      <ButtonAnimation>
        <button
          className="difficulty-btn"
          onClick={() => handleClick('normal')}
        >
          Normal
        </button>
      </ButtonAnimation>
      <ButtonAnimation>
        <button
          className="difficulty-btn"
          onClick={() => handleClick('hard')}
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
          }}
        >
          Back
        </button>
      </ButtonAnimation>

    </section>
  )
}
