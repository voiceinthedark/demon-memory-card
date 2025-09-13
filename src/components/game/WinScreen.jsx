export default function WinScreen({ updateGameStatus }) {
  return (
    <section 
      className="win-screen"
      onClick={() => {
        updateGameStatus(draft => {
          draft.gameScreen = 'title'
        })
      }}
    >
      <h1>The Hashira prevailed</h1>
      <h2>The sun will rise once more</h2>
      <h3>Click any key to return to Title</h3>
    </section>
  )
}
