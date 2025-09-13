import { createPortal } from "react-dom";
import "../../styles/menu/modal.css"

export default function Modal({isOpen, onClose, children}) {
  if(!isOpen) return null

  return createPortal(
    <div className="modal">
      {children}
    </div>
    , document.getElementById('modal-root')
  )

}
