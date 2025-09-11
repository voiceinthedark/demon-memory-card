import CardContainer from "./CardContainer"
export default function GameBoard({ data }) {
  return (
    <main className="gameboard">
      <CardContainer data={data} />
    </main>
  )
}
