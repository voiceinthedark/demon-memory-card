import Card from "./Card"
import "../../styles/game/card-container.css"
import CardAnimation from "../animation/CardAnimation"

export default function CardContainer({ data, updateStructuredData, gameStatus, updateGameStatus, onCardClick }) {
  return (
    <section className="card-container">
      {data.map(d => {
        return (
          <CardAnimation key={d.id}>
            <Card
              key={d.id}
              id={d.id}
              source={d.source}
              name={d.name}
              updateStructuredData={updateStructuredData}
              gameStatus={gameStatus}
              updateGameStatus={updateGameStatus}
              onCardClick={onCardClick}
            />
          </CardAnimation>
        )
      })}
    </section>
  )
}
