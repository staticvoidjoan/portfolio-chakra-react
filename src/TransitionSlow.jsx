import { motion } from "framer-motion";
import React from "react";

export default function TransitionSlow({ children }) {
  return (
    <motion.div
    style={{height:'100%'}}
     
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}
