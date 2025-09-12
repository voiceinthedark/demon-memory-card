import CardContainer from "./CardContainer"
import "../../styles/game/game-board.css"
export default function GameBoard({ data, updateStructuredData, gameStatus, updateGameStatus, onCardClick }) {
  return (
    <main className="gameboard">
      <CardContainer 
        data={data} 
        updateStructuredData={updateStructuredData} 
        gameStatus={gameStatus}
        updateGameStatus={updateGameStatus}
        onCardClick={onCardClick}
      />
    </main>
  )
}
