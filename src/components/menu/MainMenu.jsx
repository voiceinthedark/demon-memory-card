import "../../styles/menu/main-menu.css"
export default function MainMenu({ updateGameStatus }) {
  function handleClick(option){
    updateGameStatus(draft => {
      draft.gameScreen = option
    })
  }
  return (
    <section className="main-menu">
      <button 
        className="menu-btn"
        onClick={() => handleClick('game')}
      >
        Play
      </button>
      <button 
        className="menu-btn"
        onClick={() => handleClick('config') }
      >
        Config
      </button>
      <button 
        className="menu-btn"
        onClick={() => handleClick('about')}
      >
        About
      </button>
    </section>
  )
}
