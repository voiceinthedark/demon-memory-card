import "../../styles/game/card.css"
export default function Card({ id, source, name, onCardClick }) {


  return (
    <div className="card">
      <button
        className="card-btn"
        onClick={() => {
         onCardClick(id) 
        }}
      >
        <img src={source} alt={name} />
        <h2>{name}</h2>
      </button>
    </div>
  )
}
