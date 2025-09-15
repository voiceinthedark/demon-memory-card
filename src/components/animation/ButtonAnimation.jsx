import { motion } from 'motion/react'
import "../../styles/menu/main-menu.css"

export default function ButtonAnimation({ children }) {
  return (
    <motion.button
      className='button-animation'
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.8 }}
      style={box}
    >
      {children}
    </motion.button>
  )
}

const box = {
  borderRadius: '10px',
  padding: '12px 24px',
}
