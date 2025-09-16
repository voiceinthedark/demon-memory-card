import { useState } from "react"
import doumaSprite from '../../assets/sprites/Doma_(Anime).png'
import QuestionMark from '../../assets/icons/QuestionMark'

export default function Hint() {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <section className="hint">
      <div className={`hint-group ${isVisible ? 'is-visible' : ''}`}>
        <p>Don't click on the same card twice. You can win the game by clicking each card only once.</p>
        <img
          className={`hint-image ${isVisible ? 'is-visible' : ''}`}
          src={doumaSprite}
          alt="Douma hint"
        />
      </div>
      <button
        className="hint-btn"
        onClick={() => setIsVisible(!isVisible)}
      >
        <QuestionMark />
      </button>
    </section>
  )
}
