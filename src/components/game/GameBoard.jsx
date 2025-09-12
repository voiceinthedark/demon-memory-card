import CardContainer from "./CardContainer"
import "../../styles/game/game-board.css"
export default function GameBoard({ data }) {
  return (
    <main className="gameboard">
      <CardContainer data={data} />
    </main>
  )
}
