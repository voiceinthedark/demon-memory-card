import { inosuke, akasa } from "../../assets/videos/videos"
import "../../styles/utils/video.css"

export default function BackgroundVideo() {
  return (
    <video 
      className="bgvideo"
      loop 
      autoPlay 
      muted
      disablePictureInPicture>
      <source src={akasa} type="video/mp4" />
    </video>
  )
}
