import { motion } from "motion/react"
import { useEffect, useState } from "react";
import "../../styles/game/card.css"

export default function CardAnimation({ children }) {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    // This effect runs once when the component mounts.
    // We use a small timeout to ensure the component is rendered
    // to the DOM before the animation class is applied, allowing CSS transition to take effect.
    const timer = setTimeout(() => {
      setShouldAnimate(true);
    }, 50); // A small delay

    return () => clearTimeout(timer); // Clean up the timer when the component unmounts
  }, []);

  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        rotate: 3,
        transition: { duration: 0.5, ease: "easeOut" }
      }}
      whileTap={{
        scale: 1,
        rotate: 0,
      }}
    >
      <div className={`card-animation-wrapper ${shouldAnimate ? 'animate' : ''}`}>
        {children}
      </div>
    </motion.div>
  )
}
