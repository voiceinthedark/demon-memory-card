import "../../styles/game/card.css"
export default function Card({ source, name }) {
  return (
    <div className="card">
      <img src={source} alt={name} />
      <h2>{name}</h2>
    </div>
  )
}
