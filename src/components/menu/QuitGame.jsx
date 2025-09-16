import Close from "../../assets/icons/Close"
import '../../styles/menu/quitgame.css'

export default function QuitGame({ updateGameStatus }) {
  return (
    <button 
      className="quit-btn"
      onClick={() => {
        updateGameStatus(draft => {
          draft.gameScreen = 'title'
          draft.difficulty = 'easy'
          draft.score = 0
        })
      }}
    >
      <Close fill="white"/>
    </button>
  )
}
