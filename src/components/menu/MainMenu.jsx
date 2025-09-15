import React, { useEffect, useRef } from "react"
import "../../styles/menu/main-menu.css"

export default React.forwardRef(function MainMenu({ updateGameStatus }, ref) {

  function handleClick(option) {
    updateGameStatus(draft => {
      draft.gameScreen = option
    })
  }

  useEffect(() => {
    if (ref && ref.current)
      ref.current.disabled = true

  }, [ref])

  return (
    <section className="main-menu">
      <button
        id="menu-game-btn"
        ref={ref}
        className="menu-btn"
        onClick={() => handleClick('game')}
      >
        Play
      </button>
      <button
        className="menu-btn"
        onClick={() => handleClick('config')}
      >
        Config
      </button>
      <button
        className="menu-btn"
        onClick={() => handleClick('about')}
      >
        About
      </button>
    </section>
  )
})
