import CardContainer from "./CardContainer"
import "../../styles/game/game-board.css"
import Score from "./Score"
export default function GameBoard({ data, updateStructuredData, gameStatus, updateGameStatus, onCardClick }) {
  return (
    <main className="gameboard">
      <Score gameStatus={gameStatus} />
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
