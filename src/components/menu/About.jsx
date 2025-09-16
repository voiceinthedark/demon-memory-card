import packageJson from "../../../package.json"
import "../../styles/menu/about.css"

export default function About() {
  return (
    <section className="about">
      <h4>{packageJson.name} v.{packageJson.version}</h4>
      <a
        href="https://github.com/voiceinthedark"
        target="_blank"
      >
        <h4>By {packageJson.author}</h4>
      </a>
    </section>
  )
}
