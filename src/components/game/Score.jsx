export default function Score({ gameStatus }){
  return(
  <section className="game-score">
      <h3>Score { gameStatus.score }</h3>
      <h3>Highest Score { gameStatus.highestScore}</h3>
    </section>
  )
}
