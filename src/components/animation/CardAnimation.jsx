import { motion } from "motion/react"

export default function CardAnimation({ children }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        rotate: 3,
        transition: { duration: 0.5, ease: "easeOut" }
      }}
    >
      {children}
    </motion.div>
  )
}
