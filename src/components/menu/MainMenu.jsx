import React, { useEffect } from "react"
import "../../styles/menu/main-menu.css"
import ButtonAnimation from "../animation/ButtonAnimation"
import Title from './Title.jsx'
import { btnHover, btnClick } from "../../assets/sounds/sounds"
import useSound from 'use-sound'

export default React.forwardRef(function MainMenu({ updateGameStatus, resetGame }, ref) {

  const [playHover, {stop}] = useSound(btnHover)
  const [playClick] = useSound(btnClick)

  function handleClick(option) {
    updateGameStatus(draft => {
      draft.gameScreen = option
    })
    if(option === 'game'){
      resetGame('easy')
    }
  }

  useEffect(() => {
    if (ref && ref.current)
      ref.current.disabled = false
  }, [ref])

  return (
    <section className="main-menu">
      <Title />
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
          onMouseLeave={() => stop()}
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
          onMouseLeave={() => stop()}
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
          onMouseLeave={() => stop()}
        >
          About
        </button>
      </ButtonAnimation>
    </section>
  )
})
