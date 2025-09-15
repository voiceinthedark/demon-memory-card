import { useState } from "react"
import VolumeOn from '../../assets/icons/VolumeOn'
import VolumeOff from '../../assets/icons/VolumeOff'
import AudioMusic from "../utils/AudioMusic"
import '../../styles/menu/helpbar.css'

export default function HelpBar() {
  const [mute, setMute] = useState(true)

  return (
    <section className="help-bar">
      {mute ?
        <button 
          className="volumeon"
          onClick={() => {
            setMute(false)
          }}
        >
          <VolumeOff fill="white" />
        </button>
        :
        <button 
          className="volumeoff"
          onClick={() => setMute(true)}
        >
          <VolumeOn fill="white"/>
        </button>
      }
      <AudioMusic mute={mute} />
    </section>
  )
}
