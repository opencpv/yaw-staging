import { motion } from "framer-motion";
import React from "react";

export default function SlideEnter({ children } : { children : React.ReactNode}) {
  return (
    <motion.div
      className="w-full h-full"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{
        type:"spring",
        stiffness:50,
        damping:50,
        duration: 1500,
      }}>
      {children}
    </motion.div>
  );
}
