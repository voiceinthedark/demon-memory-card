import { useRef } from "react"
import { inosuke, akasa, tanjiroDaki, zenitsulight, zenitsuthunder, muichiro, tanjirodance, youriichi } from "../../assets/videos/videos"
import "../../styles/utils/video.css"

const bgvideos = [inosuke, akasa, tanjiroDaki, zenitsulight, zenitsuthunder, muichiro, tanjirodance, youriichi]

export default function BackgroundVideo() {
  const selectedBg = useRef(bgvideos[Math.floor(Math.random() * bgvideos.length)])
  
  return (
    <video 
      className="bgvideo"
      loop 
      autoPlay 
      muted
      disablePictureInPicture>
      <source src={selectedBg.current} type="video/mp4" />
    </video>
  )
}
