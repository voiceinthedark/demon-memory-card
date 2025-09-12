import Card from "./Card"
import "../../styles/game/card-container.css"

export default function CardContainer({ data }) {
  return (
    <section className="card-container">
      {data.map(d => {
        return (
          <Card
            key={d.id}
            source={d.source}
            name={d.name}
          />
        )
      })}
    </section>
  )
}
