import { motion } from "framer-motion";
import React from "react";

const animations = {
  initial: { opacity: 0, y: -100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    y: 100,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

export default function Transition({ children }) {
  return (
    <motion.div
    style={{height:'100%'}}
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}
