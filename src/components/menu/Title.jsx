import '../../styles/menu/title.css'
import logo from '../../assets/logo/Demon-Slayer-Logo.png'
export default function Title() {
  return (
    <section className="title">
      <img src={logo} alt="Demon slayer logo" />
      <h1>Demon Slayer</h1>
      <h2>Memory Card Game</h2>
    </section>
  )
}
