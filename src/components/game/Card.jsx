import "../../styles/game/card.css"
import useSound from 'use-sound'
import { slash1, clang2 } from '../../assets/sounds/sounds.js'

export default function Card({ id, source, name, onCardClick }) {
  const [play] = useSound(slash1, {volume: 0.2, playbackRate: 0.6})


  return (
    <div className="card">
      <button
        className="card-btn"
        onClick={() => {
          onCardClick(id)
          play()
        }}
      >
        <img src={source} alt={name} />
        <h2>{name}</h2>
      </button>
    </div>
  )
}
