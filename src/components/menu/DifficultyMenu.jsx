import "../../styles/menu/main-menu.css"
export default function DifficultyMenu({ setDifficulty, updateGameStatus, resetGame }) {
  function handleClick(difficulty){
    setDifficulty(difficulty)
    updateGameStatus(draft => {
      draft.difficulty = difficulty
    })
    resetGame(difficulty)
  }

  return (
    <section className="difficulty-menu">
      <button 
        className="difficulty-btn"
        onClick={() => handleClick('easy')}
      >
        Easy
      </button >
      <button 
        className="difficulty-btn"
        onClick={() => handleClick('normal')}
      >
        Normal
      </button>
      <button 
        className="difficulty-btn"
        onClick={() => handleClick('hard')}
      >
        Hard
      </button>

      <button 
        className="difficuly-btn"
        onClick={() => {
          updateGameStatus(draft => {
            draft.gameScreen = 'title'
          })
        }}
      >
        Back
      </button>

    </section>
  )
}
