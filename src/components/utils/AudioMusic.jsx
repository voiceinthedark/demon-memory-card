import { useRef } from 'react'
import { lostRonin, homoNoNegami } from '../../assets/music/music.js'

const musicList = [lostRonin, homoNoNegami]

export default function AudioMusic({ mute }) {
  
  const track = useRef(Math.floor(Math.random() * musicList.length))
  return (
    <audio 
      autoPlay 
      loop
      muted={mute}
    >
      <source src={musicList[track.current]} type="audio/mpeg" />
    </audio>
  )
}
