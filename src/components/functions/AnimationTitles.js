import {motion} from "framer-motion"

function AnimationTitles({title, className}) {
  const hVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // faster animation
      },
    },
  };

  const spanVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { duration: 0.12 }, // faster fade in per char
    },
  };

  return(
    <motion.h1
      variants={hVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {title.split("").map((char, index) => (
        <motion.span variants={spanVariants} key={index}>
          {char}
        </motion.span>
      ))}
    </motion.h1>
  )
}

export default AnimationTitles