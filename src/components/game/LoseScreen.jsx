export default function LoseScreen({ updateGameStatus }) {
  return (
    <section
      className="lose-screen"
      onClick={() => {
        updateGameStatus(draft => {
          draft.gameScreen = 'title'
        })
      }}
    >
      <h1>The Demons Prevailed</h1>
      <h2>You Lost</h2>
      <h3>Click any key to return to Title</h3>

    </section>
  )
}
