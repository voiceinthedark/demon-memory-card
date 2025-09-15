import React, { useEffect, useRef } from "react"
import "../../styles/menu/main-menu.css"
import ButtonAnimation from "../animation/ButtonAnimation"
import { btnHover, btnClick } from "../../assets/sounds/sounds"
import useSound from 'use-sound'

export default React.forwardRef(function MainMenu({ updateGameStatus }, ref) {

  const [playHover, stopHover] = useSound(btnHover)
  const [playClick, stopClick] = useSound(btnClick)

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
      <ButtonAnimation>
        <button
          id="menu-game-btn"
          ref={ref}
          className="menu-btn"
          onClick={() => {
            handleClick('game')
            playClick()
          }}
          onMouseOver={() => playHover()}
          onMouseLeave={() => stopHover()}
        >
          Play
        </button>
      </ButtonAnimation>

      <ButtonAnimation>
        <button
          className="menu-btn"
          onClick={() => {
            handleClick('config')
            playClick()
          }}
          onMouseOver={() => playHover()}
          onMouseLeave={() => stopHover()}
        >
          Config
        </button>
      </ButtonAnimation>
      <ButtonAnimation>
        <button
          className="menu-btn"
          onClick={() => { 
            handleClick('about') 
            playClick()
          }}
          onMouseOver={() => playHover()}
          onMouseLeave={() => stopHover()}
        >
          About
        </button>
      </ButtonAnimation>
    </section>
  )
})
