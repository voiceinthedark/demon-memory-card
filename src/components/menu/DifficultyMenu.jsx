import "../../styles/menu/main-menu.css"
export default function DifficultyMenu({ setDifficulty }) {
  function handleClick(difficulty){
    setDifficulty(difficulty)
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

    </section>
  )
}
